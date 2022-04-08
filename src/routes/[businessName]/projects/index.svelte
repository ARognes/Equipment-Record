<script lang="ts">

	/**
	 * In the future, holding an item would allow multiple selection for a: grouping, b: deletion 
	 * 
	 * 
	 */

	import ItemContainer from '$lib/Item/ItemContainer.svelte'
	import EquipmentInfo from '$lib/Item/EquipmentInfo.svelte'
	import { allDocs, getSRC } from '$lib/firebase'
	import { getContext } from 'svelte';

	let projectInfo = null

	let projectData = []

	const userDataStore = getContext('userData')

	$: $userDataStore && getEquipmentData()

	async function getEquipmentData() {

		projectData = await allDocs($userDataStore.businessID, 'projects')

		for (let i in projectData) {
			projectData[i].tinySRC = []
			getSRC(projectData[i], true, 0).then(src => projectData[i].tinySRC[0] = src)
		}
	}

	function handleClick(event) {
		projectInfo = event?.detail?.item
	}
	
</script>


{#if projectInfo == null}
	<ItemContainer bind:items={ projectData } on:innerClick={ handleClick } />
{:else}
	<EquipmentInfo bind:equipmentInfo={ projectInfo } on:back={ () => projectInfo = null }/>
{/if}


<style lang="sass">

</style>
