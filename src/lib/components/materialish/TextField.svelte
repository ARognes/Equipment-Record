<script lang="ts">
import Ripple from '$lib/components/materialish/Ripple.svelte'	
import { onMount } from 'svelte'
import { writable } from 'svelte/store'


  export let type = 'text', label = ''

  export let rippleBlur = 2,
						 speed = 10,
						 sizeIn = 8,
						 opacityIn = 1.0,
             rippleColor='red'

  function handleRipple() {
		const ripples = writable([])
		return {
			subscribe: ripples.subscribe,
			add: item => ripples.update(items => [...items, item]),
			clear: () => ripples.update(items => [])
		}
	}

	export const ripples = handleRipple()

  let rect, rippleUnderline, w, h, offsetX, offsetY, deltaX, deltaY, locationY, locationX, scale_ratio, rippleComps = [], inputValue
	
	let coords = { x: 50, y: 50 }
	
	$: offsetX = Math.abs( (w / 2) - coords.x ),
		 offsetY = Math.abs( (h / 2) - coords.y ),
		 deltaX = (w / 2) + offsetX,
     deltaY = (h / 2) + offsetY,
		 scale_ratio = Math.sqrt(Math.pow(deltaX, 2.2) + Math.pow(deltaY, 2.2))

  
  let focussed = false, labelHighlight = false
	function press(event) {
		release(event)
		if (event instanceof MouseEvent) 
			ripples.add({ x: event.pageX - locationX, y: event.pageY - locationY, size: scale_ratio, startEnd: event.button !== 0 })
		
		else 
			ripples.add({ x: event.changedTouches[0].clientX - locationX, y: event.changedTouches[0].clientY - locationY, size: scale_ratio, startEnd: false })

    focussed = true
    labelHighlight = true
	}

	function release(event) {
		rippleComps.forEach(ripple => ripple.end())
    if (!inputValue.value.length) focussed = false
    labelHighlight = false
	}
	
	onMount(()=> {
		w = rippleUnderline.offsetWidth
    h = rippleUnderline.offsetHeight
		rect = rippleUnderline.getBoundingClientRect()
		locationY = rect.y
		locationX = rect.x
	})


</script>

<div class="textfield">
  <div class="main">
    <div class="slot"><slot /></div>
    <input { type } spellcheck="false" bind:this={ inputValue } on:mousedown={press} on:blur={release} on:keypress on:input>
  </div>
  <div class="underline-ripple" bind:this={ rippleUnderline } style="--ripple: {rippleColor}">
    <div class="underline"></div>
    <svg>
      {#each $ripples as ripple, index}
        <Ripple bind:this={ rippleComps[index] } x="{ripple.x}" y="{ripple.y}" size={ripple.size} startEnd={ripple.startEnd} speed={ speed * 0.8 * Math.sqrt(w * h) } sizeIn={ sizeIn * w * h / 2000 } {opacityIn} {rippleBlur} />
      {/each}
    </svg>
  </div>
  <span class:transition={true} class:label-out={focussed} class:label={!focussed} class:label-highlight={labelHighlight}>{ label }</span>

</div>

<style lang="sass">

$height: 32px
$underlineColor: #888
$underlineHoverColor: #666

$labelColor: #888
$labelOutColor: #888

.textfield
  height: $height
  margin: 30px 0 10px 0
  &:hover 
    & .underline
      background-color: $underlineHoverColor

.slot
  opacity: 0.5
  width: $height
  height: $height
  position: relative
  top: 4px
  left: 6px
  align-self: flex-start


input 
  margin-left: 10px
  &:focus
    caret-color: red

.main
  display: flex
  width: auto
  height: $height

input 
  width: 100%
  height: $height
  font-size: 20px
  border: none

  &:focus 
    outline: none

.underline
  position: relative
  width: 100%
  height: 2px
  background-color: $underlineColor

.underline-ripple
  position: relative
  width: 100%
  height: 4px

.label
  pointer-events: none
  position: relative
  left: 40px
  top: -34px
  font-size: 20px
  color: $labelColor

.label-out
  position: relative
  left: 40px
  top: -54px
  font-size: 16px
  color: $labelOutColor

.label-highlight
  color: red

.transition
  webkit-transition: all 200ms ease
  -moz-transition: all 200ms ease
  -o-transition: all 200ms ease
  transition: all 200ms ease

svg 
  height: 100%
  pointer-events: none
  position: absolute
  top: 0
  left: 0
  z-index: 0
  width: 100%

</style>
