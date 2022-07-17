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
	import { AttributeSearchText, EquipmentModel, EquipmentSearchWrapper, SearchText } from '$lib/models/DocumentModels'
	import { session, page } from '$app/stores'
	import { goto } from '$app/navigation'
	import EquipmentCard from '$lib/components/materialish/EquipmentCard.svelte'
	import { deepcopy } from '$lib/lib'
	import type { Readable } from 'svelte/store'
	
	type docView = 'card' | 'condensed'
	let view: docView = 'card'
	let search = ''
	let searchDocs: EquipmentSearchWrapper[] = []
	let equipmentStore: Readable<EquipmentModel[]>

	if ($session?.user?.businessID) init()
	async function init() {
		equipmentStore = await getCollectionStore(EquipmentModel, $session.user.businessID)
		searchDocs = $equipmentStore.map(doc => new EquipmentSearchWrapper(doc))
	}

	$: searchBar(search)
	function searchBar(search: string) {

		// Reset equipment data shown
		searchDocs = $equipmentStore?.map(doc => new EquipmentSearchWrapper(doc)) || []

		if (!searchDocs || searchDocs.length === 0) return

		search = search?.trim()
		if (search == null || search.length == 0) return

		// *_ search settings for * description search, _ case sensitive search
		const settings1 = search?.charAt(0)
		const settings2 = search?.charAt(1)
		let attrSearch = 0, caseSens = 0

		if (settings1 == ':' || settings2 == ':') attrSearch = 1
		if (settings1 == '_' || settings2 == '_') caseSens = 1

		// Clip settings off search
		const searchVal = search?.substring(0 + attrSearch + caseSens).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

		// Empty search
		if (searchVal == null || searchVal.length == 0) return

		if (!attrSearch) {	// Name search
			for (let i = 0; i < searchDocs.length; i++) {
				const text = searchDocs[i].doc.name
				if (text == null || text.length == 0 || !testSearch(searchVal, text, caseSens)) searchDocs.splice(i--, 1)
				else searchDocs[i].nameHighlight = matchSearch(searchVal, text, caseSens)
			}
		}
		else {	// Attribute search
			for (let i = 0; i < searchDocs.length; i++) {
				console.log(searchDocs[i])
				searchDocs[i].attributeHighlight = []
				for (const [key, value] of searchDocs[i].doc.attributes) {
					if (key === null || key.length === 0 || !testSearch(searchVal, key, caseSens)) continue
					const keySearch: SearchText[] = matchSearch(searchVal, key, caseSens)
					const valueSearch: SearchText[] = matchSearch(searchVal, value, caseSens)
					const attributeSearchText = new AttributeSearchText(keySearch, valueSearch)

					searchDocs[i].attributeHighlight = [...searchDocs[i].attributeHighlight, attributeSearchText]
				}
				if (searchDocs[i].attributeHighlight.length == 0) searchDocs.splice(i--, 1)
			}
		}
	}

	function testSearch(search: string, text: string, caseSens: number): boolean {
		return new RegExp(search, (caseSens == 1) ? "g" : "gi").test(text)
	}

	function matchSearch(search: string, text: string, caseSens: number): SearchText[] {

		if (search == null || search.length == 0) return [{ highlight: false, text }]
		const pattern = new RegExp(search, (caseSens == 1) ? 'g' : 'gi')
		const matches: SearchText[] = []
		let match

		// Split name and add 'highlight' boolean parameter
		while (match = pattern.exec(text)) {
			const i = match.index, j = i + match[0].length
			if (i) matches.push(new SearchText(text.substring(0, i), false))
			matches.push(new SearchText(text.substring(i, j), true))
			text = text.substring(j)
		}
		if (text) matches.push(new SearchText(text, false))

		return matches
	}

	// Recopy searchDocs, reset highlighted items
	// function resetSearchDocs() {
		// searchDocs = $equipmentStore.map(doc => new EquipmentSearchWrapper(doc))
		// searchDocs = searchDocs.sort((a, b) => a.doc.name.localeCompare(b.doc.name))
	// }
	
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
	{#each searchDocs as wrap }
		<div on:click={ async () => await goto(`//${ $page.url.host }/on/equipment/${ wrap.doc.name }`) }>
			{#if view === 'card'}
				<EquipmentCard bind:wrap={ wrap } />
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
	height: calc(100%)
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
