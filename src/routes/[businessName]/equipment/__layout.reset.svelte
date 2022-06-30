<script lang="ts">
	import { auth } from '$lib/Auth/auth'
  import { goto } from '$app/navigation'
	import { browser } from '$app/env'
	import { app } from '$lib/app'
	import { getDoc, doc, getFirestore } from 'firebase/firestore/lite'
	import { writable } from 'svelte/store'
	import { setContext } from 'svelte'
	import { session } from '$lib/storage'

	const userDataStore = writable(null)
	setContext('userData', userDataStore)

	
	$: { 
		(async () => {
			try {
				if (!$auth) return await goto('/')
				if (!browser || $userDataStore) return
				
				const db = getFirestore(app)
				const userRef = doc(db, 'users', $auth?.displayName)
				const userDoc = await getDoc(userRef)
				
				const userData = userDoc?.data()
				userData.displayName = userRef.id
			
				userData.accessLevel = session.getItem('accessLevel') || 0

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
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Roboto">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
</svelte:head>


<slot />


<style lang="sass">
	:root 
		font-family: 'Roboto', sans-serif
	
	</style>
