<script context="module" lang="ts">
	import { UNPROTECTED_PAGES } from '$lib/constants-clients'
	import { initializeFirebase } from '$lib/firebase-client'
	import type { Load } from '@sveltejs/kit'
	import { browser } from '$app/env'

	export const load: Load = async function load({ session, url }) {

		// Ensure user is logged in
		if (!session.user && !UNPROTECTED_PAGES.has(url.pathname)) return { redirect: '/', status: 302 } 

		if (!browser) return { props: { user: session.user } }

		try { initializeFirebase() } 
    catch (ex) { console.error(ex) }
		return { props: { user: session.user } }
	}

</script>


<script lang="ts">
	import { userStore } from '$lib/storage'

	export let user

	$userStore = user

	console.log(user, $userStore)


</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Roboto" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
</svelte:head>

<slot />

<style lang="sass">
:root 
	font-family: 'Roboto', sans-serif

</style>
