<script lang="ts">
	import { onMount } from 'svelte'
	import Ripple from './Ripple.svelte'	
	import { writable } from 'svelte/store'

	export let mode = 'fill'

	export let rippleBlur = 2,
						 speed = 6,
						 color = '#fff',
						 fontSize = '1rem',
						 bgColor = 'rgba(255, 0, 0, 1)',
						 bgHover = 'rgba(255, 0, 0, 0.9)',
						 bgActive = 'rgba(255, 0, 0, 0.8)',
						 rippleColor = '#fbb',
						 round = '6px',
						 height = '40px',
					 	 width = 'auto',
						 sizeIn = 20,
						 opacityIn = 0.2,
						 border = 'none',
						 borderFocus = 'none',
						 borderActive = 'none',
						 shadow = '0 5px 5px -2px rgba(0, 0, 0, 0.4)',
						 shadowHover = '0 5px 15px -2px rgba(0, 0, 0, 0.5)',
						 shadowActive = '0 10px 20px -3px rgba(0, 0, 0, 0.6)'

	if (mode === 'outline') {
		color = '#000'
		bgColor = 'rgba(0, 0, 0, 0)'
		bgHover = 'rgba(0, 0, 0, 0)'
		bgActive = 'rgba(0, 0, 0, 0)'
		border = '3px solid rgba(0, 0, 255, 0.2)'
		borderFocus = '3px solid rgba(0, 0, 255, 0.2)'
		borderActive = '3px solid rgba(0, 0, 255, 0.2)'
		rippleColor = 'rgba(0, 0, 255, 1.0)'
		shadow = ''
		shadowHover = ''
		shadowActive = ''
	}
	else if (mode === 'clear') {
		color = '#000'
		bgColor = 'rgba(0, 0, 0, 0)'
		bgHover = 'rgba(0, 0, 0, 0)'
		bgActive = 'rgba(0, 0, 0, 0)'
		shadow = ''
		shadowHover = ''
		shadowActive = ''
	}

	function handleRipple() {
		const ripples = writable([])
		return {
			subscribe: ripples.subscribe,
			add: item => ripples.update(items => [...items, item]),
			clear: () => ripples.update(items => [])
		}
	}

	export const ripples = handleRipple()
	
	let rect, rippleBtn, w, h, offsetX, offsetY, deltaX, deltaY, locationY, locationX, scale_ratio, rippleComps = []
	
	let coords = { x: 50, y: 50 }
	
	$: offsetX = Math.abs( (w / 2) - coords.x ),
		 offsetY = Math.abs( (h / 2) - coords.y ),
		 deltaX = (w / 2) + offsetX,
     deltaY = (h / 2) + offsetY,
		 scale_ratio = Math.sqrt(Math.pow(deltaX, 2.2) + Math.pow(deltaY, 2.2))

	function press(event) {
		release(event)
		if (event instanceof MouseEvent) 
			ripples.add({ x: event.pageX - locationX, y: event.pageY - locationY, size: scale_ratio, startEnd: event.button !== 0 })
		
		else 
			ripples.add({ x: event.changedTouches[0].clientX - locationX, y: event.changedTouches[0].clientY - locationY, size: scale_ratio, startEnd: false })
	}

	function release(event) {
		rippleComps.forEach(ripple => ripple.end())
		console.log('released')
	}
	
	onMount(()=> {
		w = rippleBtn.offsetWidth
    h = rippleBtn.offsetHeight
		rect = rippleBtn.getBoundingClientRect()
		locationY = rect.y
		locationX = rect.x
	})
</script>

<svelte:window on:mouseup={ release } on:touchend={ release } />

<button bind:this={ rippleBtn } 
				on:touchstart={ press }  
				on:mousedown={ press }
				on:touchend={ release }  
				on:mouseup={ release }
				style="--color: {color};--font-size: {fontSize};--border: {border};--borderFocus: {borderFocus};--borderActive: {borderActive};--bg-color: {bgColor};--bgFocus: {bgHover};--bg-active: {bgActive};--radius: {round};--ripple: {rippleColor};--height: {height};--width: {width};--shadow: { shadow };--shadow-h: { shadowHover };--shadow-a: { shadowActive }">
	<span>
		<slot></slot>
	</span>	
	<svg>
		{#each $ripples as ripple, index}
			<Ripple bind:this={ rippleComps[index] } x="{ripple.x}" y="{ripple.y}" size={ripple.size} startEnd={ripple.startEnd} speed={ speed * Math.sqrt(w * h) } {sizeIn} {opacityIn} {rippleBlur} />
		{/each}
	</svg>
</button>

<style lang="sass">
	button 
		-webkit-appearance: none
		-moz-appearance: none
		appearance: none
		border: var(--border)
		font-weight: 500
		color: var(--color)
		font-size: var(--font-size)
		height: var(--height)
		width: var(--width)
		max-width: 100%
		margin: 10px 0 0 0
		padding: 0
		position: relative
		border-radius: var(--radius)
		cursor: pointer
		-webkit-transition: 200ms all ease-out
		transition: 200ms all ease-out
		background-color: var(--bg-color)
		overflow: hidden
		font-family: Roboto, sans-serif
		box-shadow: var(--shadow)
		-webkit-touch-callout: none
		-webkit-user-select: none
		-khtml-user-select: none
		-moz-user-select: none
		-ms-user-select: none
		user-select: none
		-webkit-tap-highlight-color: transparent
	
	button:hover,
	button:focus 
		outline: none
		background-color: var(--bgFocus)
		border: var(--borderFocus)
		box-shadow: var(--shadow-h)
	
	button:active 
		outline: none
		background-color: var(--bg-active)
		border: var(--borderActive)
		box-shadow: var(--shadow-a)
	
	span 
		position: relative
		height: 100%
		width: 100%
		display: flex
		align-items: center
		justify-content: center
		margin: 0
		padding: 0
		z-index: 1
	
	svg 
		height: 100%
		pointer-events: none
		position: absolute
		top: 0
		left: 0
		z-index: 0
		width: 100%
	
</style>