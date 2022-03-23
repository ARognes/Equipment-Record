<script lang="ts">

	/**
	 * This page gets information from the equipment page through a: localstorage / session storage, b: cookies
	 * 
	 * 
	*/

  import { goto } from '$app/navigation'
	import { getContext } from 'svelte'
	import { page } from '$app/stores'
	import { session } from '$lib/storage'

	const userDataStore = getContext('userData')
	let itemData = JSON.parse(session.getItem('itemData'))

</script>


<header>
	<h1>{ $page?.params?.equipmentName || itemData.name }</h1>
</header>

<p>{ itemData.desc }</p>


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



</style>
