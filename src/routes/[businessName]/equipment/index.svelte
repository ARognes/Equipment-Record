<script lang="ts">

	/**
	 * In the future, holding an item would allow multiple selection for a: grouping, b: deletion
	 * 
	 * 
	 */
	
	import Navbar from '$lib/Navbar.svelte';
	import ItemContainer from '$lib/Item/ItemContainer.svelte'
	import { allDocs, getSRC } from '$lib/firebase'
	import { getContext } from 'svelte'
	import { session } from '$lib/storage';
	
	// let equipmentInfo = null

	let equipmentData = []

	const userDataStore = getContext('userData')

	let done = false
	$: if ($userDataStore && !done) {
		done = true
		getEquipmentData()
	}

	async function getEquipmentData() {
		
		equipmentData = await allDocs($userDataStore.businessID, 'equipment')
		console.log(equipmentData)
		
		for (let i in equipmentData) {
			equipmentData[i].tinySRC = []
			getSRC(equipmentData[i], true, 0).then(src => {
				equipmentData[i].tinySRC[0] = src
				if (+i === equipmentData.length - 1) session.setItem('equipment', equipmentData)
			})
		}
	}
	
	// function handleClick(event) {
	// 	equipmentInfo = event?.detail?.item
	// }
	
</script>


<!-- {#if equipmentInfo == null} -->
<ItemContainer bind:items={ equipmentData } />
<Navbar path={ $userDataStore?.businessName }/>
<!-- {:else}
	<EquipmentInfo bind:equipmentInfo on:back={ () => equipmentInfo = null }/>
{/if} -->

<style lang="sass">

</style>
