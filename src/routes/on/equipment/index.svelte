<script lang="ts">
	import Item from '$lib/Item/Item.svelte'
	// import { auth } from '$lib/Auth/auth'
	import { getContext } from 'svelte'
	import { getDocs, doc, getFirestore, where, query, collection } from 'firebase/firestore/lite'
	import { app } from '$lib/app'
import { exclude_internal_props } from 'svelte/internal';

	const userDataStore = getContext('userData')
	let equipmentData: any[] = []
	let showEquipmentData : any[] = []

	let doOnce = true
	$: {
		(async () => {

			if (!$userDataStore || equipmentData.length > 0) return
			
			const db = getFirestore(app)
			
			const equipmentQuery = await getDocs(query(collection(db, 'equipment'),
			where('businessID', '==', $userDataStore.businessID)))
			equipmentData = <any[]> equipmentQuery.docs.map(e => {
				const eData = e.data()
				eData.id = e.id
				return eData
			}).sort((a, b) => b.name - a.name)

			showEquipmentData = [...equipmentData]
			for (let i = 0; i < showEquipmentData.length; i++) {
				showEquipmentData[i].nameHighlight = [{ highlight: false, text: showEquipmentData[i].name }]
				showEquipmentData[i].descHighlight = [{ highlight: false, text: showEquipmentData[i].desc }]
			}

			console.log(showEquipmentData);
			

		})()
	}

	let search

	// Update name highlighting when search's value changes
	$: {
		(async () => {

			// Reset equipment data shown
			showEquipmentData = [...equipmentData]
			for (let i = 0; i < showEquipmentData.length; i++) {
				showEquipmentData[i].nameHighlight = [{ highlight: false, text: showEquipmentData[i].name }]
				showEquipmentData[i].descHighlight = [{ highlight: false, text: showEquipmentData[i].desc }]
			}

			if (search == null || search.length == 0) return

			const settings = search?.charAt(0)
			const settings2 = search?.charAt(1)
			let descSearch = 0, caseSens = 0

			if (settings == '*' || settings2 == '*')
			descSearch = 1
			if (settings == '_' || settings2 == '_')
				caseSens = 1

			const caseValue = search?.substring(0 + descSearch + caseSens)
			const value = caseSens ? caseValue : caseValue.toUpperCase()

			if (value == null || value.length == 0) return
			
			for (let i = 0; i < showEquipmentData.length; i++) {
				const compareText = descSearch ? ((caseSens) ? showEquipmentData[i].desc : showEquipmentData[i].desc.toUpperCase()) 
																				: ((caseSens) ? showEquipmentData[i]?.name : showEquipmentData[i]?.name.toUpperCase())

				if (descSearch) {
					const desc = showEquipmentData[i].desc
					if (desc == null || desc.length == 0 || !compareText.includes(value))
						showEquipmentData.splice(i--, 1)
					else 
						showEquipmentData[i].descHighlight = matchSearch(value, desc)
					continue
				}

				if (!compareText.includes(value)) 
					showEquipmentData.splice(i--, 1)
				else 
					showEquipmentData[i].nameHighlight = matchSearch(value, showEquipmentData[i]?.name)
			}
		})()
	}

	function matchSearch(search: string, text: string): any[] {

		if (search == null || search.length == 0) return [{ highlight: false, text}]

		const pattern = new RegExp(search, "gi")
		const matches = []
		let match

		// Split name and add 'highlight' boolean parameter
		while (match = pattern.exec(text)) {
			console.log(match)
			const i = match.index, j = i + match[0].length
			if (i) matches.push({ highlight: false, text: text.substring(0, i) })
			matches.push({ highlight: true, text: text.substring(i, j) })
			text = text.substring(j)
		}
		if (text) matches.push({ highlight: false, text })

		return matches
	}

</script>

<header>
	<input type="text" placeholder="search equipment" bind:value={ search }>
  <button id="filter">I</button>
</header>


<div id="items">
	{#each showEquipmentData as item (item.name)}
		<Item info={ item }/>
	{/each}
</div>


<style lang="sass">
header
	position: relative
	background-color: #bbb
	margin: 0
	height: 40px

	h1
		margin: 0
		position: absolute
		left: 25%
		top: 5px
		width: 50%
		text-align: center

	input
		position: absolute
		left: 5px
		top: 5px
		bottom: 5px
		right: 40px
		margin: 0
		border: 0
		font-size: 20px

		&:focus
			outline: 0

#items
	position: relative
	width: 100%
	top: 0
	height: calc(100% - 100px)
	overflow-y: auto

#filter
	position: absolute
	top: 5px
	width: 30px
	height: 30px
	right: 5px


#menu
	position: relative
	top: 0
	left: 5%
	width: 90%

	button
		display: block
		margin: 10px 0 0 0
		width: 100%
		height: 40px
		border: 0
		background-color: #ddd
		
		&:active
			background-color: #bbb

	#sign-out
		background-color: red

		&:active
			background-color: #c00

</style>
