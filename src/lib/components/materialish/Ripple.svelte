<script lang="ts">
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	export let x, y, sizeIn, size, speed, rippleBlur, opacityIn, startEnd
	const rippleSize = tweened(sizeIn, { duration: speed })
	const rippleOpacity = tweened(opacityIn, { duration: speed , easing: cubicOut })

	export const end = () => $rippleOpacity = 0

	onMount(()=> {
		$rippleOpacity = opacityIn
		$rippleSize = size
		if (startEnd) $rippleOpacity = 0
	})

</script>

<defs>
	<filter id="f1" x="0" y="0">
		<feGaussianBlur in="SourceGraphic" stdDeviation={ rippleBlur } />
	</filter>
</defs>
<circle cx={ x } cy={ y } r={ $rippleSize } opacity={ $rippleOpacity } />

<style>
circle { fill: var(--ripple) }
</style>
