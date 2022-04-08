<script lang="ts">
	import Navbar from '$lib/Navbar.svelte'
	import { auth } from '$lib/Auth/auth'
  import { goto } from '$app/navigation'
	import { browser } from '$app/env'
	import { app } from '$lib/app'
	import { getDoc, doc, getFirestore } from 'firebase/firestore/lite'
	import { writable } from 'svelte/store'
	import { setContext } from 'svelte'
	import { session } from '$lib/storage'
	import { navigating } from '$app/stores'
	import Loading from '$lib/Loading/Loading.svelte'

	const loading = writable(false)

	$: $loading = !!$navigating

	const userDataStore = writable(null)
	setContext('userData', userDataStore)

	// $auth will change from undefined to null, then to an object. Don't reroute on first pass
	let firstPass = true
	
	$: { 
		(async () => {
			try {
				if (!browser) return
				if (!$auth) {
					if (!firstPass) await goto('/')
					return
				}
				firstPass = false

				if ($userDataStore) return
				
				const db = getFirestore(app)
				const userRef = doc(db, 'users', $auth?.displayName)
				const userDoc = await getDoc(userRef)
				
				const userData = userDoc?.data()
				userData.displayName = userRef.id

				if (!userData) await goto('/business')
				userDataStore.set(userData)

				if (session.getItem('businessID') === $userDataStore.businessID) return
				session.setItem('businessID', $userDataStore.businessID)
			}
			catch (e) { console.error(e) }
		})()
	}

</script>


<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Poppins">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</svelte:head>

{#if $loading}
	<Loading />
{/if}

<slot />


<style lang="sass">
	:root 
		/* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif; */
		font-family: 'Poppins', sans-serif
	
	</style>
