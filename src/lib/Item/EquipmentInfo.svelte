<script lang="ts">
	import Gallery from '$lib/Item/Gallery.svelte'
	import Attributes from './Attributes.svelte';
	import { createEventDispatcher } from "svelte";
	import backSVG from '$lib/images/back.svg'
	import editSVG from '$lib/images/edit.svg'
	import doneSVG from '$lib/images/done.svg'
	import closeSVG from '$lib/images/close.svg'
	import addSVG from '$lib/images/add.svg'
	import { session } from '$lib/storage';

  export let equipmentInfo

	let editing = false

		
	$: console.log(equipmentInfo.attributes.length)

	const accessLevel = session.getItem('accessLevel')

  const dispatch = createEventDispatcher()

	function toggleEditing() {
		editing = !editing
		if (editing) return

		equipmentInfo.attributes = equipmentInfo.attributes
			.filter(attr => attr.key?.length > 0)
			.map(attr => ({key: attr.key, val: attr.val}))
	}

	function makeEdits() {
		editing = false

		console.log(equipmentInfo.attributes)
		
		const filteredAttributes = equipmentInfo.attributes
			.filter(attr => !attr.hidden && (attr.editKey?.length > 0 || attr.key?.length > 0))
			.map(attr => ({ key: attr.key, val: attr.val, editKey: attr?.editKey || attr.key, editVal: attr?.editVal || attr.val }))
		console.log(filteredAttributes)
		
		const attrEditKeys = filteredAttributes.map(attr => attr.editKey);
		equipmentInfo.attributes = filteredAttributes
			.filter((attr, i) => attrEditKeys.indexOf(attr.editKey) === i)
			.map(attr => ({key: attr.editKey || attr.key, val: attr.editVal || attr.val}))

		console.log(equipmentInfo.attributes)

		// Firebase changes

	}


</script>


<header>
	<button on:click={ () => dispatch('back') }><img src={ backSVG } alt="<"></button>
	
	{#if !editing}
		<p>{ equipmentInfo.name }</p>
	{:else}
		<input type="text" id="name" value={ equipmentInfo.name }>
	{/if}
	{#if accessLevel && accessLevel >= 2 }
		<button on:click={ toggleEditing }><img src={ editing ? closeSVG : editSVG } alt="Edit"></button>
	{/if}
</header>

<div id="body">
	
	<Gallery bind:equipmentInfo />
	
	<Attributes bind:equipmentInfo bind:editing />

	{#if editing}
		{#if equipmentInfo?.attributes?.length < 10 }
			<button class="add" on:click={ () => equipmentInfo.attributes = [...equipmentInfo.attributes, {key: '', val: ''}] }><img src={ addSVG } alt="Add"></button>
		{/if}
		<div id="controls">
			<button id="done" on:click={ makeEdits }><img src={ doneSVG } alt="Done"></button>
			<button id="cancel" on:click={ toggleEditing }><img src={ closeSVG } alt="Cancel"></button>
		</div>
	{/if}
	
</div>


<style lang="sass">
header
	position: relative
	background-color: #bbb
	margin: 0
	height: 40px
	display: flex

	p
		margin: 0
		flex: auto
		width: calc(100vw - 40px)
		height: 40px
		font-size: 30px
		line-height: 40px
		text-align: center
		overflow: hidden

	button
		flex: 1 30px
		width: 30px
		height: 30px
		margin: 5px

		img
			position: relative
			width: 100%
			height: 100%

#body
	position: relative
	left: 0
	top: 0
	width: 100vw
	height: calc(100vh - 40px)
	margin: 0
	overflow-y: auto
	overflow-x: hidden

#name
	margin: 0
	padding: 0
	border: 0
	outline: none
	flex: auto
	width: calc(100vw - 40px)
	height: 40px
	overflow: hidden
	font-size: 30px
	line-height: 40px
	text-align: center
	background-color: #bbb
	font-family: 'Poppins', sans-serif
	&:focus
		outline: none
		color: blue

.add
	position: relative
	margin: 10px 10px 0 10px
	width: calc(100vw - 20px)
	height: 40px

#controls
	position: relative
	margin: 10px
	left: 0
	bottom: 0
	width: calc(100vw - 20px)
	height: 40px
	display: flex
	column-gap: 10px

	button
		flex: 1
		position: relative
		width: 80px
		height: 40px

</style>
