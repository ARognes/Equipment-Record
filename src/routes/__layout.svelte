<script context="module" lang="ts">
	import { initializeFirebase } from '$lib/firebase-client'
	import type { Load } from '@sveltejs/kit'
	import { browser } from '$app/env'

	export const load: Load = async function load({ session }) {

		if (!browser) return { props: { user: session.user } }

		try { initializeFirebase() } 
    catch (ex) { console.error(ex) }
		return { props: { user: session.user } }
	}

</script>


<script lang="ts">
	import { session } from '$app/stores'
	$session  // Has to be initialized here to work in client firebase.ts

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
