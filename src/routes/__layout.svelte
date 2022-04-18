<script lang="ts">
	import { navigating } from '$app/stores'
	import Loading from '$lib/components/Loading.svelte'
	import { writable } from 'svelte/store'

	const loading = writable(false)

	$: $loading = !!$navigating
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Poppins">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</svelte:head>

<!-- {#if $loading}
	<Loading />
{/if} -->

<slot />


<style lang="sass">
:root 
	/* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
		'Open Sans', 'Helvetica Neue', sans-serif; */
	font-family: 'Poppins', sans-serif

</style>
