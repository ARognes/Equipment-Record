<script lang="ts">

	/**
	 * In the future, holding an item would allow multiple selection for a: grouping, b: deletion
	 * 
	 * 
	 */

	import ItemContainer from '$lib/Item/ItemContainer.svelte'
  import { goto } from '$app/navigation'
	import { getContext } from 'svelte'
	import { getDocs, getFirestore, where, query, collection } from 'firebase/firestore/lite'
	import { app } from '$lib/app'
	import { page } from '$app/stores';
	import { session } from '$lib/storage'

	const userDataStore = getContext('userData')
	let equipmentData: any[] = []
	let items : any[] = []

	let view = 0
	let search

	$: init($userDataStore)

	async function init(userData) {
		if (!userData || equipmentData?.length > 0) return

		equipmentData = JSON.parse(session.getItem('equipmentData'))

		if (!equipmentData || equipmentData?.length == 0) {
			console.log('hit')
			const db = getFirestore(app)
			const equipmentQuery = await getDocs(query(collection(db, 'equipment'),
			where('businessID', '==', userData.businessID)))
			equipmentData = <any[]> equipmentQuery.docs.map(e => {
				const eData = e.data()
				eData.id = e.id
				return eData
			}).sort((a, b) => b.name - a.name)

			session.setItem('equipmentData', JSON.stringify(equipmentData))
		}
		
		resetEquipment()

		console.log('init', userData?.displayName)
	}


	function resetEquipment() {
		items = [...equipmentData]
		for (let i = 0; i < items.length; i++) {
			items[i].nameHighlight = [{ highlight: false, text: items[i].name }]
			items[i].descHighlight = [{ highlight: false, text: items[i].desc }]
		}
	}

	// Update name highlighting when search's value changes
	$: searchbar(search)
	function searchbar(search: string) {

		// Reset equipment data shown
		items = [...equipmentData]
		for (let i = 0; i < items.length; i++) {
			items[i].nameHighlight = [{ highlight: false, text: items[i].name }]
			items[i].descHighlight = [{ highlight: false, text: items[i].desc }]
		}

		// Empty searchbar
		if (search == null || search.length == 0) return

		// *_ search settings for * description search, _ case sensitive search
		const settings1 = search?.charAt(0)
		const settings2 = search?.charAt(1)
		let descSearch = 0, caseSens = 0

		if (settings1 == '*' || settings2 == '*') descSearch = 1
		if (settings1 == '_' || settings2 == '_') caseSens = 1

		// Clip settings off search
		const value = search?.substring(0 + descSearch + caseSens)

		// Empty search
		if (value == null || value.length == 0) return
		
		for (let i = 0; i < items.length; i++) {
			const text = items[i][descSearch ? 'desc' : 'name']
			if (text == null || text.length == 0 || !testSearch(value, text, caseSens)) items.splice(i--, 1)
			else items[i][descSearch ? 'descHighlight' : 'nameHighlight'] = matchSearch(value, text, caseSens)
		}
	}

	function testSearch(search: string, text: string, caseSens: number): boolean {
		return new RegExp(search, (caseSens == 1) ? "g" : "gi").test(text)
	}

	function matchSearch(search: string, text: string, caseSens: number): any[] {

		if (search == null || search.length == 0) return [{ highlight: false, text}]
		const pattern = new RegExp(search, (caseSens == 1) ? "g" : "gi")
		const matches = []
		let match

		// Split name and add 'highlight' boolean parameter
		while (match = pattern.exec(text)) {
			const i = match.index, j = i + match[0].length
			if (i) matches.push({ highlight: false, text: text.substring(0, i) })
			matches.push({ highlight: true, text: text.substring(i, j) })
			text = text.substring(j)
		}
		if (text) matches.push({ highlight: false, text })

		return matches
	}

	function handleClick(event) {
		if (event?.detail?.item?.name == null) return
		session.setItem('itemData', JSON.stringify(event?.detail?.item))
		goto(`/${ $page.params.businessName }/equipment/${ event?.detail?.item?.name }`).then(a => null)
	}
	
</script>


<header>
	<input type="text" placeholder="search equipment" bind:value={ search }>
	<button id="view" on:click={ () => { view = (view + 1) % 3} }>|</button>
</header>

<ItemContainer bind:items bind:view on:innerClick={ handleClick } />


<style lang="sass">

header
	position: relative
	background-color: #bbb
	margin: 0
	height: 40px

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

	#view
		position: absolute
		right: 5px
		top: 5px
		width: 30px
		height: 30px

</style>
