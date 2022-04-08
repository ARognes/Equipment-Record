<script lang="ts">

	/**
	 * In the future, holding an item would allow multiple selection for a: grouping, b: deletion
	 * 
	 * 
	 */
	
	import Navbar from '$lib/Navbar.svelte';
	import ItemContainer from '$lib/Item/ItemContainer.svelte'
	import EquipmentInfo from '$lib/Item/EquipmentInfo.svelte'
	import { allDocs, getSRC } from '$lib/firebase'
	import { getContext } from 'svelte'
	
	let equipmentInfo = null

	let equipmentData = []

	const userDataStore = getContext('userData')

	$: $userDataStore && getEquipmentData()

	async function getEquipmentData() {
		
		equipmentData = await allDocs($userDataStore.businessID, 'equipment')
		
		for (let i in equipmentData) {
			equipmentData[i].attributes = !equipmentData[i]?.attributes ? [] : Object.keys(equipmentData[i].attributes).map(key => ({ key, val: equipmentData[i].attributes[key] }))

			console.log(equipmentData[i].attributes)
			equipmentData[i].tinySRC = []
			getSRC(equipmentData[i], true, 0).then(src => equipmentData[i].tinySRC[0] = src)
		}
	}

	function handleClick(event) {
		equipmentInfo = event?.detail?.item
	}
	
</script>


{#if equipmentInfo == null}
	<ItemContainer bind:items={ equipmentData } on:innerClick={ handleClick } />
	<Navbar path={ $userDataStore?.businessName }/>
{:else}
	<EquipmentInfo bind:equipmentInfo on:back={ () => equipmentInfo = null }/>
{/if}


<style lang="sass">

</style>
