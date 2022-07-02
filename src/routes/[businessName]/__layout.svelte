<script context="module" lang="ts">
	import { UNPROTECTED_PAGES } from '$lib/constants-clients'
	import { initializeFirebase } from '$lib/firebase-client'
	// import { getDocuments } from '$lib/firebase-server'
	import type { Load } from '@sveltejs/kit'
	import { browser } from '$app/env'

	export const load: Load = async function load({ session, url }) {

		// Ensure user is logged in
		if (!session.user && !UNPROTECTED_PAGES.has(url.pathname)) return { redirect: '/', status: 302 } 

		// Ensure user is in correct business namespace
		console.log(session.user)
		if (!browser) {
			// const userDoc = await getDocuments('users', session.user.uid)

			return {}
		}

		try { initializeFirebase(session.firebaseClientConfig) } 
    catch (ex) { console.error(ex) }
		return {}
	}
</script>


<script lang="ts">
  import { goto } from '$app/navigation'
	import { getDoc, doc, getFirestore } from 'firebase/firestore/lite'
	import { writable } from 'svelte/store'
	import { setContext } from 'svelte'
	import { session } from '$lib/storage'
	import Navbar from '$lib/components/Navbar.svelte'

	const userDataStore = writable(null)
	setContext('userData', userDataStore)

	
	// $: { 
	// 	(async () => {
	// 		try {
	// 			if (!$auth) return await goto('/')
	// 			if (!browser || $userDataStore) return
				
	// 			// Get user doc
	// 			const db = getFirestore(app)
	// 			const userRef = doc(db, 'users', $auth?.displayName)
	// 			const userDoc = await getDoc(userRef)
				
	// 			const userData = userDoc?.data()
	// 			userData.displayName = userRef.id
			
	// 			userData.accessLevel = session.getItem('accessLevel') || 0

	// 			// If no user data, assign to business
	// 			if (!userData) await goto('/business')
	// 			userDataStore.set(userData)

	// 			if (session.getItem('businessID') !== $userDataStore.businessID) 
	// 				session.setItem('businessID', $userDataStore.businessID)
	// 		}
	// 		catch (e) { console.error(e) }
	// 	})()
	// }

</script>


<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Roboto">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
</svelte:head>


<slot />

<Navbar path={ $userDataStore?.businessName }/>


<style lang="sass">
	:root 
		font-family: 'Roboto', sans-serif
	
	</style>

