<script lang="ts">

	/**
	 * In the future, holding an item would allow multiple selection for a: grouping, b: deletion
	 * 
	 * 
	 */

	import ItemContainer from '$lib/Item/ItemContainer.svelte'
	import EquipmentInfo from '$lib/Item/EquipmentInfo.svelte'
	import { getContext } from 'svelte'
	import { getDocs, getFirestore, where, query, collection } from 'firebase/firestore/lite'
	import { app } from '$lib/app'
	import { session } from '$lib/storage'

	const userDataStore = getContext('userData')
	let equipmentData: any[] = []
	// let items : any[] = []

	// let search
	let equipmentInfo = null

	$: init($userDataStore)

	async function init(userData) {
		if (!userData || equipmentData?.length > 0) return

		equipmentData = JSON.parse(session.getItem('projectData'))

		if (!equipmentData || equipmentData?.length == 0) {
			console.log('hit')
			const db = getFirestore(app)
			const equipmentQuery = await getDocs(query(collection(db, 'projects'),
			where('businessID', '==', userData.businessID)))
			equipmentData = <any[]> equipmentQuery.docs.map(e => {
				const eData = e.data()
				eData.id = e.id
				return eData
			})

			session.setItem('projectData', JSON.stringify(equipmentData))
		}

		console.log('init', userData?.displayName)
	}

	function handleClick(event) {
		equipmentInfo = event?.detail?.item
	}
	
</script>

{#if equipmentInfo == null}

	<ItemContainer bind:items={ equipmentData } on:innerClick={ handleClick } />

{:else}
	<EquipmentInfo bind:equipmentInfo on:back={ () => equipmentInfo = null }/>

{/if}


<style lang="sass">

</style>
