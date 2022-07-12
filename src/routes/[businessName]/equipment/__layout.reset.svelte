<!-- <script context="module" lang="ts">
	import { UNPROTECTED_PAGES } from '$lib/constants-clients'
	import { initializeFirebase } from '$lib/firebase-client'
	import type { Load } from '@sveltejs/kit'
	import { browser } from '$app/env'

	export const load: Load = async function load({ session, url }) {

		// Ensure user is logged in
		if (!session.user && !UNPROTECTED_PAGES.has(url.pathname)) return { redirect: '/login', status: 302 } 

		if (!browser) return {}

		try { initializeFirebase() } 
    catch (ex) { console.error(ex) }
		return {}
	}

</script> -->


<script lang="ts">
	import { session } from '$app/stores'
	import { onMount } from "svelte"
	$session  // Has to be initialized here to work in client firebase.ts


	onMount(() => {
		Array.from(document.getElementsByClassName('grecaptcha-badge')).forEach(recaptchaDiv => recaptchaDiv.remove())

		Array.from(document.getElementsByTagName('script')).filter(script => script.src.includes('recaptcha')).forEach(style => style.remove())
	})

</script>


<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Roboto">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
</svelte:head>


<slot />


<style lang="sass">
	:root 
		font-family: 'Roboto', sans-serif
	
	</style>

