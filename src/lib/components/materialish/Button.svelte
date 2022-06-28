<script lang="ts">
	import { onMount } from 'svelte'
	import { writable } from 'svelte/store'
	import Ripple from '$lib/components/materialish/Ripple.svelte'	

	export let mode = 'fill'
	export let flat = false

	export let rippleBlur = 2,
						 speed = 6,
						 color = '#fff',
						 fontSize = '1rem',
						 bgColor = '255, 0, 0',
						 opacity = '1.0',
						 opacityFocus = '0.9',
						 opacityActive = '0.8',
						 rippleColor = '#fbb',
						 round = '5px',
						 height = '46px',
					 	 width = 'auto',
						 sizeIn = 8,
						 opacityIn = 0.2,
						 border = 'none',
						 borderFocus = 'none',
						 borderActive = 'none',
						 shadow = '0 5px 5px -2px rgba(0, 0, 0, 0.4)',
						 shadowHover = '0 5px 15px -2px rgba(0, 0, 0, 0.5)',
						 shadowActive = '0 10px 20px -3px rgba(0, 0, 0, 0.6)',
						 margin = '10px 0',
						 padding = '0 8px',
						 href='',
						 noPrefetch = false

	if (mode === 'outline') {
		color = '#000'
		bgColor = '0, 0, 0',
		opacity = '0',
		opacityFocus = '0',
		opacityActive = '0',
		border = '2px solid rgba(80, 80, 80, 0.5)'
		borderFocus = '2px solid rgba(80, 80, 80, 0.5)'
		borderActive = '2px solid rgba(80, 80, 80, 0.5)'
		rippleColor = 'rgba(80, 80, 80, 0.4)'
		shadow = ''
		shadowHover = ''
		shadowActive = ''
	}
	else if (mode === 'clear') {
		color = '#000'
		bgColor = '0, 0, 0',
		opacity = '0',
		opacityFocus = '0',
		opacityActive = '0',
		opacityIn = 0.3,
		shadow = ''
		shadowHover = ''
		shadowActive = ''
	}
	else if (mode === 'link') {
		height = '30px'
		color = '#00f'
		bgColor = '0, 0, 255',
		rippleColor = 'rgba(0, 0, 255, 0.3)',
		opacity = '0',
		opacityFocus = '0.05',
		opacityActive = '0.05',
		opacityIn = 0.3,
		shadow = ''
		shadowHover = ''
		shadowActive = ''
	}

	if (flat) {
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
	
	let rect, rippleBtn, w, h, offsetX, offsetY, deltaX, deltaY, locationY, locationX, scale_ratio, rippleComps = [], pressTime = 0
	
	let coords = { x: 50, y: 50 }
	
	$: offsetX = Math.abs( (w / 2) - coords.x ),
		 offsetY = Math.abs( (h / 2) - coords.y ),
		 deltaX = (w / 2) + offsetX,
     deltaY = (h / 2) + offsetY,
		 scale_ratio = Math.sqrt(Math.pow(deltaX, 2.2) + Math.pow(deltaY, 2.2))

	function press(event) {
		pressTime = Date.now()
		release(event)
		if (event instanceof MouseEvent) 
			ripples.add({ x: event.pageX - locationX, y: event.pageY - locationY, size: scale_ratio, startEnd: event.button !== 0 })
		else 
			ripples.add({ x: event.changedTouches[0].clientX - locationX, y: event.changedTouches[0].clientY - locationY, size: scale_ratio, startEnd: false })
	}

	function release(event) {
		if (Date.now() - pressTime < 10) return	// Debounce
		rippleComps.forEach(ripple => ripple.end())
	}
	
	onMount(()=> {
		w = rippleBtn.offsetWidth
    h = rippleBtn.offsetHeight
		rect = rippleBtn.getBoundingClientRect()
		locationY = rect.y
		locationX = rect.x
	})
</script>

<svelte:window on:mousedown={ release } on:touchstart={ release } />

{#if href.length}

	<a href={ href } sveltekit:prefetch={noPrefetch ? undefined : true} rel={noPrefetch ? 'external' : ''} class="link">
		<button bind:this={ rippleBtn } 
						on:touchstart={ press }  
						on:mousedown={ press }
						on:touchend={ release }  
						on:mouseup={ release }
						on:click
						style="--color: {color};--font-size: {fontSize};--border: {border};--borderFocus: {borderFocus};--borderActive: {borderActive};--bg-color: {bgColor};--opacity: {opacity};--opacity-focus: {opacityFocus};--opacity-active: {opacityActive};--radius: {round};--ripple: {rippleColor};--height: {height};--width: {width};--shadow: { shadow };--shadow-h: { shadowHover };--shadow-a: { shadowActive };--margin: {margin};--padding: {padding}">
			<span>
				<slot></slot>
			</span>	
			<svg>
				{#each $ripples as ripple, index}
					<Ripple bind:this={ rippleComps[index] } x="{ripple.x}" y="{ripple.y}" size={ripple.size} startEnd={ripple.startEnd} speed={ speed * 0.8 * Math.sqrt(w * h) } sizeIn={ sizeIn * w * h / 2000 } {opacityIn} {rippleBlur} />
				{/each}
			</svg>
		</button>
	</a>

{:else}

	<button bind:this={ rippleBtn } 
					on:touchstart={ press }  
					on:mousedown={ press }
					on:touchend={ release }  
					on:mouseup={ release }
					on:click
					style="--color: {color};--font-size: {fontSize};--border: {border};--borderFocus: {borderFocus};--borderActive: {borderActive};--bg-color: {bgColor};--opacity: {opacity};--opacity-focus: {opacityFocus};--opacity-active: {opacityActive};--radius: {round};--ripple: {rippleColor};--height: {height};--width: {width};--shadow: { shadow };--shadow-h: { shadowHover };--shadow-a: { shadowActive };--margin: {margin};--padding: {padding}">
		<span>
			<slot></slot>
		</span>	
		<svg>
			{#each $ripples as ripple, index}
				<Ripple bind:this={ rippleComps[index] } x="{ripple.x}" y="{ripple.y}" size={ripple.size} startEnd={ripple.startEnd} speed={ speed * 0.8 * Math.sqrt(w * h) } sizeIn={ sizeIn * w * h / 2000 } {opacityIn} {rippleBlur} />
			{/each}
		</svg>
	</button>

{/if}


<style lang="sass">
	button 
		-webkit-appearance: none
		-moz-appearance: none
		appearance: none
		border: var(--border)
		font-weight: normal
		color: var(--color)
		font-size: var(--font-size)
		width: var(--width)
		height: var(--height)
		max-width: 100%
		margin: var(--margin)
		padding: var(--padding)
		position: relative
		border-radius: var(--radius)
		cursor: pointer
		-webkit-transition: 200ms all ease-out
		transition: 200ms all ease-out
		background-color: rgba(var(--bg-color), var(--opacity))
		overflow: hidden
		font-family: Roboto, sans-serif
		font-weight: 500
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
		background-color: rgba(var(--bg-color), var(--opacity-focus))
		border: var(--borderFocus)
		box-shadow: var(--shadow-h)
	
	button:active 
		outline: none
		background-color: rgba(var(--bg-color), var(--opacity-active))
		border: var(--borderActive)
		box-shadow: var(--shadow-a)
	
	span 
		position: relative
		height: 100%
		width: 100%
		display: flex
		align-items: center
		justify-content: flex-start
		margin: 0
		padding: 0
		z-index: 1
	
	svg 
		height: 100%
		width: 100%
		pointer-events: none
		position: absolute
		top: 0
		left: 0
		z-index: 0
	
	.link .link:hover .link:focus .link:active
		text-decoration: none

	a
		-webkit-tap-highlight-color: transparent

</style>