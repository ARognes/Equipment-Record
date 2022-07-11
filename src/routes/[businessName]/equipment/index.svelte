<script lang="ts">
	import AddSVG from '$lib/assets/add.svg'
	import Navbar from '$lib/components/Navbar.svelte'
	import ItemContainer from '$lib/components/ItemContainer.svelte'
	import { allDocs, getSRC } from '$lib/firebase'
	import { session } from '$lib/storage'
	import Button from '$lib/components/materialish/Button.svelte'

	let equipmentData = []

	let done = false
	$: if ($session.user && !done) {
		done = true
		getEquipmentData()
	}

	async function getEquipmentData() {
		
		equipmentData = await allDocs($session.businessID, 'equipment')
		console.log(equipmentData)
		
		for (let i in equipmentData) {
			equipmentData[i].tinySRC = []
			getSRC(equipmentData[i], true, 0).then(src => {
				equipmentData[i].tinySRC[0] = src
				if (+i === equipmentData.length - 1) session.setItem('equipment', equipmentData)
			})
		}
	}
	
</script>

<ItemContainer bind:items={ equipmentData } />

{#if $session?.user?.accessLevel >= 2 }
	<Button mode="link" href="add/equipment"><AddSVG /></Button>
{/if}

<Navbar />


<style lang="sass">

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
