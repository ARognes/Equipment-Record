<script lang="ts">
	import { page } from "$app/stores";
	import { allDocs, queryDocs } from "$lib/firebase";
	import { orderBy, where } from "firebase/firestore/lite";
	import { getContext } from 'svelte';

	const userDataStore = getContext('userData')

	/**
	 * Use item's projectAssigned, timeAssigned, and userAssigned
	 * 
	 * For history, load from query once on demand
	 */
  
  export let item, editing

	let assignments = []
	let selectedProject

	let showMoreAssignments = false
	let done2 = false
	$: if ($userDataStore && item && !done2) init()

	async function init() {
		done2 = true
		assignments = await queryDocs($userDataStore.businessID, 'assignments', [where('equipmentID', '==', item.id), orderBy('createdAt', 'desc')]) 
		resetSelection()
	}

	$: editing && resetSelection()

	function resetSelection() {
		if (assignments?.length) selectedProject = projects.find(a => a.id == assignments[0].projectID)
	}

	$: if (selectedProject) {
		item.projectAssigned = selectedProject.name
		item.projectID = selectedProject.id
	}

	let projects = []
	let done = false
	$: if (editing && !done) {
		done = true
		allDocs($userDataStore.businessID, 'projects').then(data => {
			projects = data
			resetSelection()
		})
	}

</script>


<div id="assignments">
	<div id="title">
		Assigned
		{#if assignments.length }
			<button id="showMoreAssignments" on:click={ () => showMoreAssignments = !showMoreAssignments }>{ showMoreAssignments ? '-' : '+'}</button>
		{/if}

		{#if editing && projects.length && assignments.length }
			<select id="reassign" bind:value={ selectedProject }>
				{#each projects as proj, i}
					<option value={ proj }>{ proj.name }</option>
				{/each}
			</select>	
		{/if}
	</div>
	<div class="scrollable" class:scrollable-more={ showMoreAssignments }>
		{#each assignments as assn, i}
			<div class="assignment">
				<a href={ `/${ $page.params.businessName }/projects/${ assn.projectName }` }>{ assn.projectName || '' }</a>
				<a href={ `/${ $page.params.businessName }/users/${ assn.username }` }>{ assn.username || '' }</a>
				<p>{ assn.createdAt ? new Date(assn.createdAt.seconds * 1000).toLocaleString() : '' }</p>
			</div>
		{/each}
	</div>
</div>


<style lang="sass">

$titleHeight: 30px
$entryHeight: 20px

#assignments
	position: relative
	left: 0
	top: -12px
	height: auto
	margin: 0

	#title
			width: calc(100vw - 8px)
			height: $titleHeight
			background-color: #ddd
			margin: 0
			padding: 0 4px 0 4px
			font-size: 20px
			text-overflow: clip
			white-space: nowrap
			overflow: hidden

	.scrollable
		width: 100%
		max-height: 20px
		overflow-y: hidden
		overflow-x: hidden
		transition: max-height 500ms cubic-bezier(0, 1, 0, 1)


	.scrollable-more
		max-height: 200px
		overflow-y: auto
		transition: max-height 500ms ease-in-out


	.assignment
		width: calc(100vw - 8px)
		height: $entryHeight
		margin: 0
		padding: 0 4px
		font-size: 14px
		text-overflow: clip
		white-space: nowrap
		overflow: hidden
		display: flex
		flex-wrap: nowrap
		column-gap: 10px
		justify-content: space-between

		a
			text-decoration: none
			overflow: hidden
			flex: 1 1 0
		p
			flex: 1 1 0
			margin: 0
	
	.assignment:nth-child(even)
		background-color: #eee

#showMoreAssignments
	position: relative
	float: right
	margin: 0
	padding: 0
	width: 30px
	height: 30px
	
#reassign
	position: relative
	float: right
	margin: 0 4px 0 0
	padding: 0
	width: 80px
	height: 30px



</style>
