<script lang="ts">
	import Item from '$lib/Item/Item.svelte'
	// import { auth } from '$lib/Auth/auth'
	import { getContext } from 'svelte'
	import { getDocs, doc, getFirestore, where, query, collection } from 'firebase/firestore/lite'
	import { app } from '$lib/app'

	const userDataStore = getContext('userData')
	let equipmentData = []

	let doOnce = true
	$: {
		(async () => {

			if (!$userDataStore || equipmentData.length > 0) return
			
			const db = getFirestore(app)
			
			const equipmentQuery = await getDocs(query(collection(db, 'equipment'),
			where('businessID', '==', $userDataStore.businessID)))
			equipmentData = equipmentQuery.docs.map(e => {
				const eData = e.data()
				eData.id = e.id
				return eData
			}).sort((a, b) => b.name - a.name)

			console.log(equipmentData)
			
		})()
	}

</script>

<header>
	<input type="text" placeholder="search equipment">
  <button id="filter">I</button>
</header>


<div id="items">
	{#each equipmentData as item (item.name)}
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
