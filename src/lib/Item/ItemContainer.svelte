
<script lang="ts">
	import ItemList from '$lib/Item/ItemList.svelte'
	import ItemCard from '$lib/Item/ItemCard.svelte'
	import ItemSquare from '$lib/Item/ItemSquare.svelte'
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher()

	export let items
	
	let view = 1
	let search
	let showItems

	$: items && resetEquipment()
	
	// Update name highlighting when search's value changes
	$: searchbar(search)
	function searchbar(search: string) {

		if (items == null) return

		// Reset equipment data shown
		resetEquipment()

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
		
		for (let i = 0; i < showItems.length; i++) {
			const text = showItems[i][descSearch ? 'desc' : 'name']
			if (text == null || text.length == 0 || !testSearch(value, text, caseSens)) showItems.splice(i--, 1)
			else showItems[i][descSearch ? 'descHighlight' : 'nameHighlight'] = matchSearch(value, text, caseSens)
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

	function resetEquipment() {
		showItems = [...items]
		for (let i = 0; i < showItems.length; i++) {
			showItems[i].nameHighlight = [{ highlight: false, text: showItems[i].name }]
			showItems[i].descHighlight = [{ highlight: false, text: showItems[i].desc }]
		}
		showItems = showItems.sort((a, b) => a.name.localeCompare(b.name))
	}

</script>


<header>
	<input type="text" placeholder="Search" bind:value={ search }>
	<button id="view" on:click={ () => { view = (view + 1) % 3 } }>{ view }</button>
</header>

{#if showItems}
	<div id={view == 2 ? 'showItems-grid' : 'showItems'}>
		{#each showItems as item (item.id)}
			<div on:click={ () => dispatch('innerClick', { item }) }>
				{#if view == 0}
					<ItemList bind:info={ item } />
				{:else if view == 1}
					<ItemCard bind:info={ item } />
				{:else}
					<ItemSquare bind:info={ item } />
				{/if}
			</div> 
		{/each}
	</div>
{/if}


<style lang="sass">

$grid-gaps: 4px

#showItems
	position: relative
	display: block
	height: calc(100% - 100px)
	top: 0
	overflow-y: auto
	overflow-x: hidden

#showItems-grid
	position: relative
	display: grid
	grid-template-columns: calc(50vw - $grid-gaps) calc(50vw - $grid-gaps)
	grid-auto-rows: calc(50vw - calc(3 * $grid-gaps))
	gap: $grid-gaps $grid-gaps
	padding: $grid-gaps
	width: calc(100vw - calc(3 * $grid-gaps))
	height: calc(100% - 100px)
	top: 0
	overflow-y: auto
	overflow-x: hidden

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