
<script lang="ts">
	import ItemList from '$lib/Item/ItemList.svelte'
	import ItemCard from '$lib/Item/ItemCard.svelte'
	import ItemSquare from '$lib/Item/ItemSquare.svelte'
	import { createEventDispatcher } from 'svelte';

	export let view
	export let items

	const dispatch = createEventDispatcher()
	
</script>


{#if view == 0}
	<div id="items">
		{#each items as item (item.name)}
			<div on:click={ () => dispatch('innerClick', { item }) }>
				<ItemList bind:info={ item } />
			</div> 
		{/each}
	</div>
{:else if view == 1}
	<div id="items">
		{#each items as item (item.name)}
			<div on:click={ () => dispatch('innerClick', { item }) }>
				<ItemCard bind:info={ item } />
			</div> 
		{/each}
	</div>
{:else}
	<div id="items-grid">
		{#each items as item (item.name)}
			<div on:click={ () => dispatch('innerClick', { item }) }>
					<ItemSquare bind:info={ item } />
			</div> 
		{/each}
	</div>
{/if}


<style lang="sass">

$grid-gaps: 4px

#items
	position: relative
	display: block
	height: calc(100% - 100px)
	top: 0
	overflow-y: auto
	overflow-x: hidden

#items-grid
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

</style>