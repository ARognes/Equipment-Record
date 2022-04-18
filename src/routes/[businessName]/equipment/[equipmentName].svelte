<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte'
	import Assignments from '$lib/components/Assignments.svelte'
	import Attributes from '$lib/components/Attributes.svelte'
	import backSVG from '$lib/images/back.svg'
	import editSVG from '$lib/images/edit.svg'
	import doneSVG from '$lib/images/done.svg'
	import closeSVG from '$lib/images/close.svg'
	import { session } from '$lib/storage'
	import { getDoc, addDoc, allDocs, updateDoc, changeName } from '$lib/firebase'
	import { serverTimestamp } from 'firebase/firestore/lite';
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
	import { getContext } from 'svelte';
	import { log } from '$lib/logging';

	const userDataStore = getContext('userData')

  let equipment = session.getItem('equipment')
	let itemPointer = equipment?.find(e => e.name == $page.params.equipmentName)
  let item = itemPointer ? JSON.parse(JSON.stringify(itemPointer)) : null
	let itemBefore = item ? JSON.parse(JSON.stringify(item)) : null	// Copy item
	let attributes = item?.attributes || []
	let editing = false
	
	$: {
		$userDataStore && !equipment && (async () => {
			equipment = await allDocs($userDataStore.businessID, 'equipment')
			item = equipment?.find(e => e.name == $page.params.equipmentName)
			attributes = item?.attributes || []
			itemBefore = JSON.parse(JSON.stringify(item || {}))	// Copy item

			console.log($userDataStore)
		})()
	}

	function toggleEditing() {
		editing = !editing
		if (editing) return

		// Remove all edits
		item = JSON.parse(JSON.stringify(itemBefore))
		attributes = item?.attributes || []
		console.log(attributes)
	}

	function inputName(e) {
		item.name = e.target.value
	}

	/**
	 * Update name, assignment, and attributes
	 * TODO: Images, template 
	 */
	async function makeEdits() {
		editing = false
		if (!item || !itemBefore) return console.log('No item or itemBefore!', item, itemBefore)
		let updates = {}
		const timeStamp = serverTimestamp()


		// ---- NAME ----
		if (item.name !== itemBefore.name) {
			log('Updating Name')
			updates = { name: item.name }
			changeName(item.id, item.name)
		}

		// ---- ASSIGNMENT ----
		if (item.projectAssigned !== itemBefore.projectAssigned) {

			log('Updating Assignment')
			console.log(item.projectAssigned, itemBefore.projectAssigned)

			const lastAssignment = await getDoc(item.assignmentRef)
			console.log(lastAssignment)

			// Update equipment doc
			updates = { 
				projectAssigned: item.projectAssigned,
				userAssigned: $userDataStore.displayName,
				timeAssigned: timeStamp,
				...updates
			}

			// Create new assignment
			const curAssn = await addDoc('assignments', {
				businessID: $userDataStore.businessID,
				nextAssignment: null,
				
				lastProjectID: lastAssignment?.projectID || null,	// This may not be necessary
				lastProjectName: lastAssignment?.projectName || null,
				lastUserID: lastAssignment?.userID || null,
				lastUsername: lastAssignment?.username || null,
				
				projectID: item.projectID,
				projectName: item.projectAssigned,
				equipmentID: item.id,
				equipmentName: item.name,
				userID: $userDataStore.uid,
				username: $userDataStore.displayName,
				
				createdAt: timeStamp
			})

			// Update last assignment linked list
			updateDoc('assignments', lastAssignment?.id, { nextAssignment: curAssn })
		}

		// ---- ATTRIBUTES ----
		const filteredAttributes = attributes
			.filter(attr => !attr.hidden && (attr.editKey?.length > 0 || attr.key?.length > 0))
			.map(attr => ({ key: attr?.key?.trim(), val: attr?.val, editKey: attr?.editKey?.trim() || attr?.key?.trim(), editVal: attr?.editVal || attr?.val }))
		
		const attrEditKeys = filteredAttributes.map(attr => attr.editKey);
		attributes = filteredAttributes
			.filter((attr, i) => attrEditKeys.indexOf(attr.editKey) === i)
			.map(attr => ({ key: attr.editKey || attr.key, val: attr.editVal || attr.val }))

		if (JSON.stringify(attributes) !== JSON.stringify(itemBefore.attributes)) 
			updates = { attributes, ...updates }

		console.log(updates)
		if (!Object.keys(updates).length) return

		// Update equipment doc
		updateDoc('equipment', item.id, updates)

		// Create edit save (Not for assignment)
		addDoc('edits', {
			collection: 'equipment',
			user: $userDataStore.uid,
			before: itemBefore,
			createdAt: timeStamp
		})

    // Update locally
		item.attributes = attributes
		for (let i in equipment)
			if (equipment[+i].id == item.id)
				equipment[+i] = item
    session.setItem('equipment', equipment)
		location.reload();
	}

	let scrollTop = 0
	function parallax(data) {
		scrollTop = data.target.scrollTop
  }

</script>

<div id="space-top"></div>

<div id="body" on:scroll={ parallax }>
  
	<div style="overflow: hidden">
		<div style={ `position: relative; top: ${ scrollTop / 2 }px` }>
			<Gallery bind:item />
		</div>
	</div>
	<Assignments bind:item bind:editing />

	<Attributes bind:attributes bind:editing />
	


	<div id="space-bottom"></div>

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

<div id="header">
  <button on:click={ async () => goto(`/${ $page.params.businessName }/equipment`) }><img src={ backSVG } alt="<"></button>
  
  {#if !editing}
    <p>{ item?.name || '' }</p>
  {:else}
    <input type="text" id="name" on:input={ inputName } value={ item?.name } placeholder="Name">
  {/if}
  {#if $userDataStore?.accessLevel && $userDataStore?.accessLevel >= 2 }
    <button on:click={ toggleEditing }><img src={ editing ? closeSVG : editSVG } alt="Edit"></button>
  {/if}
</div>


<style lang="sass">

#header
	position: fixed
	top: 0
	left: 0
	width: 100vw
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

#space-bottom
	width: 100vw
	height: 30vh

#space-top
	width: 100vw
	height: 40px


</style>
