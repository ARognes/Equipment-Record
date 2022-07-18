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
	import type { Readable } from 'svelte/store'
  import { fade } from 'svelte/transition'
	import Button from '$lib/components/materialish/Button.svelte'
	
	let search = ''
	let searchDocs: EquipmentSearchWrapper[] = []
	let equipmentStore: Readable<EquipmentModel[]>

	let caseSens: boolean = false
	let searchByName: boolean = true
	let attrValueSearch: string = ''

	if ($session?.user?.businessID) init()
	async function init() {
		equipmentStore = await getCollectionStore(EquipmentModel, $session.user.businessID)
		searchDocs = $equipmentStore?.map(doc => new EquipmentSearchWrapper(doc))
	}

	$: searchBar(search, attrValueSearch, caseSens, searchByName)
	function searchBar(search: string, attrValueSearch: string, caseSens: boolean, searchByName: boolean): void {

		// Reset equipment data shown
		searchDocs = $equipmentStore?.map(doc => new EquipmentSearchWrapper(doc)) || []

		if (!searchDocs || searchDocs.length === 0) return

		search = search?.trim()
		if (search == null || search.length == 0) return

		// *_ search settings for * description search, _ case sensitive search

		// Clip settings off search
		const searchVal = search?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
		const searchValueVal = attrValueSearch?.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

		// Empty search
		if (searchVal == null || searchVal.length == 0) return

		if (searchByName) {
			for (let i = 0; i < searchDocs.length; i++) {
				const text = searchDocs[i].doc.name
				if (text == null || text.length == 0 || !testSearch(searchVal, text, caseSens)) searchDocs.splice(i--, 1)
				else searchDocs[i].nameHighlight = matchSearch(searchVal, text, caseSens)
			}
			return
		}

		// Attribute search
		for (let i = 0; i < searchDocs.length; i++) {
			searchDocs[i].attributeHighlight = []
			for (const [key, value] of searchDocs[i].doc.attributes) {
				if (key === null || key.length === 0 || !testSearch(searchVal, key, caseSens)) continue
				if (value === null || value.length === 0 || !testSearch(searchValueVal, value, caseSens)) continue
				const keySearch: SearchText[] = matchSearch(searchVal, key, caseSens)
				const valueSearch: SearchText[] = matchSearch(searchValueVal, value, caseSens)
				const attributeSearchText = new AttributeSearchText(keySearch, valueSearch)

				searchDocs[i].attributeHighlight = [...searchDocs[i].attributeHighlight, attributeSearchText]
			}
			if (searchDocs[i].attributeHighlight.length == 0) searchDocs.splice(i--, 1)
		}
	}

	function testSearch(search: string, text: string, caseSens: boolean): boolean {
		return new RegExp(search, caseSens ? "g" : "gi").test(text)
	}

	function matchSearch(search: string, text: string, caseSens: boolean): SearchText[] {

		if (search == null || search.length == 0) return [{ highlight: false, text }]
		const pattern = new RegExp(search, caseSens ? 'g' : 'gi')
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

</script>


<header class={ searchByName ? '' : 'header-expand' }>
	<input type="text" id="searchName" placeholder={ searchByName ? 'Search name' : 'Search attribute name'} bind:value={ search }>
	<input type="text" id="searchAttribute" placeholder="Search attribute" bind:value={ attrValueSearch }>
	<p id="case" on:click={ () => { caseSens = !caseSens; searchBar(search, attrValueSearch, caseSens, searchByName) } }>cC</p>
	<button id="searchBy" on:click={ () => { searchByName = !searchByName; searchBar(search, attrValueSearch, caseSens, searchByName) } }>@</button>
</header>

<div id="body">
	{#each searchDocs as wrap }
		<div on:click={ async () => await goto(`//${ $page.url.host }/on/equipment/${ wrap.doc.name }`) } transition:fade|local={{ duration: 200 }}>
			<EquipmentCard bind:wrap={ wrap } />
		</div>
	{/each}
</div>

{#if $session?.user?.accessLevel >= 2 }
	<div id="add">
		<Button mode="link" href="add/equipment"><AddSVG /></Button>
	</div>
{/if}

<Navbar />


<style lang="sass">

	#body
		position: absolute
		width: 100%
		height: calc(100%)
		overflow-x: hidden
		overflow-y: auto

	header
		position: relative
		background-color: #bbb
		margin: 0
		height: 40px
		transition: height 0.2s ease
		overflow: hidden

		#searchName
			position: absolute
			left: 5px
			top: 4px
			height: 32px
			right: 40px
			margin: 0
			border: 0
			padding: 0 30px 0 5px
			font-size: 20px

		#searchAttribute
			position: absolute
			left: 5px
			top: 40px
			height: 32px
			right: 40px
			margin: 0
			border: 0
			padding: 0 30px 0 5px
			font-size: 20px

		input:focus
			outline: 0

	.header-expand
		height: 76px


	#case
		position: absolute
		right: 40px
		top: 5px
		width: 30px
		height: 30px
		margin: 0
		text-align: center
		line-height: 30px

	#searchBy
		position: absolute
		right: 5px
		top: 5px
		width: 30px
		height: 30px

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

	#add
		position: absolute
		right: 10px
		bottom: 70px
		width: 60px
		height: 60px
		background-color: #0ff
		border-radius: 50%
		// margin: auto
		display: flex
		align-items: center
		justify-content: center

</style>
