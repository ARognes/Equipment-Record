<script lang="ts">

	let assignmentData = []

</script>


<header>
	<h1>History</h1>
</header>

<div id="menu">

	{#if assignmentData}
		{#each assignmentData as assignment (assignment.id)}
			<div class={ assignment.nextAssignment ? 'old' : 'current' }>
				<p>{ assignment.equipmentName }</p>
				<p>{ assignment.username }</p>
				<p>{ assignment.projectName }</p>
				<p>{ assignment.createdAt }</p>
				{#if assignment.lastProjectID}
					<p>{ assignment.lastProjectName }</p>
					<p>{ assignment.lastUsername }</p>
				{/if}
			</div>
		{/each}
	{/if}
</div>


<style lang="sass">
header
	background-color: #bbb
	margin: 0
	height: 40px

	h1
		position: absolute
		margin: 0
		top: 5px
		left: 0
		width: 100%
		height: 30px
		line-height: 30px
		text-size: 30px
		text-align: center

#settings
	left: calc(100% - 55px)


#menu
	position: relative
	top: 0
	left: 5%
	width: 100vw
	height: calc(100vh - 100px)
	overflow-y: auto

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

	.old
		font-size: 10px
		background-color: #fff

	.current
		font-size: 10px
		background-color: #afa

</style>
