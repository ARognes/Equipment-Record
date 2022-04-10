<script lang="ts">
	import Gallery from '$lib/Item/Gallery.svelte'
	import Attributes from '$lib/Item/Attributes.svelte'
	import backSVG from '$lib/images/back.svg'
	import editSVG from '$lib/images/edit.svg'
	import doneSVG from '$lib/images/done.svg'
	import closeSVG from '$lib/images/close.svg'
	import { session } from '$lib/storage'
	import { addDoc, allDocs, updateDoc } from '$lib/firebase'
	import { serverTimestamp } from 'firebase/firestore/lite';
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
	import { getContext } from 'svelte';

	const userDataStore = getContext('userData')


  let equipment = session.getItem('equipment')
  let item = equipment?.find(e => e.name == $page.params.equipmentName)
	let attributes = item?.attributes || []
	let editing = false
	const accessLevel = session.getItem('accessLevel')
	let itemBefore = JSON.parse(JSON.stringify(item || {}))	// Copy item

	$: {
		$userDataStore && !equipment && (async () => {
			equipment = await allDocs($userDataStore.businessID, 'equipment')
			item = equipment?.find(e => e.name == $page.params.equipmentName)
			attributes = item?.attributes || []
			itemBefore = JSON.parse(JSON.stringify(item || {}))	// Copy item

			console.log(equipment)
		})()
	}

	function toggleEditing() {
		editing = !editing
		if (editing) {
			attributes[attributes.length] = { key: '', val: ''}
			return
		}

		attributes = attributes
			?.filter(attr => attr.key?.length > 0)
			?.map(attr => ({key: attr.key, val: attr.val}))
	}

	function makeEdits() {
		editing = false

		const filteredAttributes = attributes
			.filter(attr => !attr.hidden && (attr.editKey?.length > 0 || attr.key?.length > 0))
			.map(attr => ({ key: attr?.key?.trim(), val: attr?.val, editKey: attr?.editKey?.trim() || attr?.key?.trim(), editVal: attr?.editVal || attr?.val }))
		
		const attrEditKeys = filteredAttributes.map(attr => attr.editKey);
		attributes = filteredAttributes
			.filter((attr, i) => attrEditKeys.indexOf(attr.editKey) === i)
			.map(attr => ({ key: attr.editKey || attr.key, val: attr.editVal || attr.val }))

		// Firebase changes
		updateDoc('equipment', item.id, { attributes })

		addDoc('edits', {
			collection: 'equipment',
			user: $userDataStore.uid,
			before: itemBefore,
			createdAt: serverTimestamp()
		})

    // Update locally
		item.attributes = attributes
    session.setItem('equipment', equipment)
	}

</script>


<header>
  <button on:click={ async () => goto(`/${ $page.params.businessName }/equipment`) }><img src={ backSVG } alt="<"></button>
  
  {#if !editing}
    <p>{ item?.name || '' }</p>
  {:else}
    <input type="text" id="name" value={ item.name }>
  {/if}
  {#if accessLevel && accessLevel >= 2 }
    <button on:click={ toggleEditing }><img src={ editing ? closeSVG : editSVG } alt="Edit"></button>
  {/if}
</header>

<div id="body">
  
  <Gallery bind:item />
  
  <Attributes bind:attributes bind:editing />

  {#if editing}
    <!-- {#if !attributes || attributes.length < 10 }
      <button class="add" on:click={ () => attributes = attributes ? [...attributes, { key: '', val: '' }] : [{ key: '', val: '' }] }><img src={ addSVG } alt="Add"></button>
    {/if} -->
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

// .add
// 	position: relative
// 	margin: 10px 10px 0 10px
// 	width: calc(100vw - 20px)
// 	height: 40px

#controls
	position: fixed
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
