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

				// sessionStorage('businessID', $userDataStore.businessID)
				if (session.getItem('businessID') === $userDataStore.businessID) return
				session.setItem('businessID', $userDataStore.businessID)
			}
			catch (e) { console.error(e) }
		})()
	}
	
</script>

<slot />

<Navbar path={ $userDataStore?.businessName }/>


<style lang="sass">

</style>
