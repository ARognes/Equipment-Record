<script context="module" lang="ts">
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

</script>

<script lang="ts">

	import AddSVG from '$lib/assets/add.svg'
	import Navbar from '$lib/components/Navbar.svelte'
	import { getCollectionStore } from '$lib/firebase-client'
	import { EquipmentModel } from '$lib/models/EquipmentModel'
	import { session, page } from '$app/stores'
	import { goto } from '$app/navigation'
	import EquipmentCard from '$lib/components/materialish/EquipmentCard.svelte'

	let equipmentStore
	if ($session?.user?.businessID) init()

	async function init() {
		equipmentStore = await getCollectionStore(EquipmentModel, $session.user.businessID)
		searchDocs = $equipmentStore
	}

	type docView = 'card' | 'condensed'

	let view: docView = 'card'
	let search = ''
	let searchDocs: Array<EquipmentModel> = []
	
</script>

<!-- <ItemContainer bind:items={ equipmentData } />

{#if $session?.user?.accessLevel >= 2 }
	<Button mode="link" href="add/equipment"><AddSVG /></Button>
{/if} -->

<header>
	<input type="text" placeholder="Search" bind:value={ search }>
	<button id="view" on:click={ () => { view = view === 'card' ? 'condensed' : 'card' } }>{ view }</button>
</header>

<div id="body">
	{#each searchDocs as doc }
		<div on:click={ async () => await goto(`//${ $page.url.host }/on/equipment/${ doc.name }`) }>
			{#if view === 'card'}
				<EquipmentCard bind:doc={ doc } />
			{:else}
				<!-- <ItemList bind:info={ doc } /> -->
			{/if}
		</div>
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
