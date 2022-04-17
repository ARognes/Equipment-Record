<script lang="ts">
import { page } from "$app/stores";
import { allDocs, queryDocs } from "$lib/firebase";
import { log } from "$lib/logging";
import { orderBy, where } from "firebase/firestore/lite";
import { getContext } from 'svelte';

const userDataStore = getContext('userData')

	/**
	 * Use item's projectAssigned, timeAssigned, and userAssigned
	 * 
	 * For history, load from query once on demand
	 */
  
  export let item, editing

	let more = false
	let showItem
	let assignments, showAssignments

	$: {
		if (showItem == undefined) {
			showItem = item?.projectAssigned ? { projectName: item?.projectAssigned, username: item?.userAssigned, createdAt: item?.timeAssigned } : null
			showAssignments = showItem ? [ showItem ] : []
		}
	}

	let selectedProject
	$: if (selectedProject) {
		item.projectAssigned = selectedProject.name
		item.projectID = selectedProject.id
	}

	// $: if (item?.projectAssigned && projectAssigned) item.projectAssigned = projectAssigned

	async function getMore() {
		if (!$userDataStore) return
		more = !more

		if (!assignments) assignments = await queryDocs($userDataStore.businessID, 'assignments', [where('equipmentID', '==', item.id), orderBy('createdAt', 'desc')]) 
		if (!more) showAssignments = showItem ? [ showItem ] : []
		else showAssignments = assignments
	}

	let projects = []
	let done = false
	$: if (editing && !done) {
		done = true
		allDocs($userDataStore.businessID, 'projects').then(data => projects = data)
	}

</script>


<div id="assignments">
	<div id="title">
		Assigned
		<button id="getMore" on:click={ getMore }>{ more ? '-' : '+'}</button>
		{#if editing && projects.length }
			<select id="reassign" bind:value={ selectedProject }>
				{#each projects as proj, i}
					<option value={ proj } selected={ proj.name == item?.projectAssigned }>{ proj.name }</option>
				{/each}
			</select>	
		{/if}
	</div>
	<div class="scrollable">
		{#each showAssignments as assn, i}
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
		max-height: 200px
		overflow-y: auto
		overflow-x: hidden

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

#getMore
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
