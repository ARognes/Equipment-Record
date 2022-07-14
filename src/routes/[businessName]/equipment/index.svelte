<script context="module" lang="ts">
	import { UNPROTECTED_PAGES } from '$lib/constants-clients'
	import { getDocs, initializeFirebase } from '$lib/firebase-client'
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

</script>

<script lang="ts">
	import AddSVG from '$lib/assets/add.svg'
	import Navbar from '$lib/components/Navbar.svelte'
	import ItemContainer from '$lib/components/ItemContainer.svelte'
	import Button from '$lib/components/materialish/Button.svelte'
	import { getCollectionStore } from '$lib/firebase-client'
	import { EquipmentModel } from '$lib/models/EquipmentModel'
	import { session } from '$app/stores'

	// export let docs

	let equipmentStore
	if ($session?.user?.businessID) (async () => equipmentStore = await getCollectionStore(EquipmentModel, $session.user.businessID))()

	// (async () => console.log(await getDocs(EquipmentModel, $session.user.businessID)))()

	console.log('E>', $session?.user)

	// let done = false
	// $: if ($session.user && !done) {
	// 	done = true
	// 	getEquipmentData()
	// }

	// async function getEquipmentData() {
		
	// 	equipmentData = await allDocs($session.businessID, 'equipment')
	// 	console.log(equipmentData)
		
	// 	for (let i in equipmentData) {
	// 		equipmentData[i].tinySRC = []
	// 		getSRC(equipmentData[i], true, 0).then(src => {
	// 			equipmentData[i].tinySRC[0] = src
	// 			if (+i === equipmentData.length - 1) session.setItem('equipment', equipmentData)
	// 		})
	// 	}
	// }
	
</script>

<!-- <ItemContainer bind:items={ equipmentData } />

{#if $session?.user?.accessLevel >= 2 }
	<Button mode="link" href="add/equipment"><AddSVG /></Button>
{/if} -->

<div id="body">
	{#each $equipmentStore || [] as doc}
		<p>{ JSON.stringify(doc) }</p>
		<!-- <p>arstarstr</p> -->
	{/each}
</div>

<Navbar />


<style lang="sass">

#body
	position: absolute
	width: 100%
	height: calc(100% - 60px)
	overflow-x: hidden
	overflow-y: auto

	// #add-equipment
	// 	position: fixed
	// 	right: 10px
	// 	bottom: 70px
	// 	width: 60px
	// 	height: 60px
	// 	padding: 0
	// 	border-radius: 50%
	// 	border: 0
	// 	background-color: #ccc

	// 	img
	// 		position: relative
	// 		width: 50%
	// 		height: 50%
	// 		margin: 0
	// 		left: 25%
	// 		top: 25%

</style>
