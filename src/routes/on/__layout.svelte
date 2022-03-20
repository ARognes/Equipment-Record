<script lang="ts">
	import Navbar from '$lib/Navbar.svelte'
	import { auth } from '$lib/Auth/auth'
  import { goto } from '$app/navigation'
	import { browser } from '$app/env'
	import { app } from '$lib/app'
	import { getDoc, doc, getFirestore } from 'firebase/firestore/lite'
	import { writable } from 'svelte/store'
	import { setContext } from 'svelte'

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
					firstPass = false
					return
				}

				if ($userDataStore) return
				
				const db = getFirestore(app)
				const userRef = doc(db, 'users', $auth?.displayName)
				const userDoc = await getDoc(userRef)
				
				const userData = userDoc?.data()
				userData.uid = userRef.id

				if (!userData) await goto('/business')
				userDataStore.set(userData)
			}
			catch (e) { console.error(e) }

		})()
	}
	
</script>

<slot />

<Navbar path="on" />


<style>


</style>
