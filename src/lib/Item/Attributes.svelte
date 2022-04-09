<script lang="ts">
  
  export let attributes, editing

	let textAreas = []

	function textarea(e, i) {
		e.target.style.height = 'auto'
		let offset = e.target.offsetHeight - e.target.clientHeight
		e.target.style.height = e.target.scrollHeight + offset + 'px'
		attributes[i].editVal = e.target.value
	}

	function inputName(e, i) {
		attributes[i].editKey = e.target.value
	}

	function removeAttribute(i: number) {
		console.log()
		attributes[i].hidden = true
		console.log()
	}

	$: {
		for (let i = 0; i < textAreas.length; i++) {
			const ta = textAreas[i]
			if (ta == null) continue
			ta.style.height = 'auto'
			let offset = ta.offsetHeight - ta.clientHeight;
			ta.style.height = ta.scrollHeight + offset + 'px';
		}
	}

</script>


<div id="attributes">
	{#each attributes || [] as attr, i}
		{#if !attr.hidden }
			<div class="attribute">
				{#if !editing }
					<p class="key">{ attr.key }</p>
					<textarea readonly bind:this={ textAreas[i] } on:input={ e => textarea(e, i) } placeholder="Empty" rows="1">{ attr.val }</textarea>
				{:else}
					<div class="div-key">
						<input type="text" on:input={ e => inputName(e, i)} placeholder="Attribute" value={ attr.key }>
						<button on:click={ () => removeAttribute(i) }>-</button>
					</div>
					<textarea bind:this={ textAreas[i] } on:input={ e => textarea(e, i) } placeholder="Empty" rows="1">{ attr.val }</textarea>
				{/if}
			</div>
		{/if}
	{/each}
</div>


<style lang="sass">

#attributes
	position: relative
	left: 0
	top: -12px
	height: auto
	margin: 0 0 20px 0

	.attribute

		.key
			width: calc(100vw - 8px)
			height: 30px
			background-color: #ddd
			margin: 0
			padding: 0 4px 0 4px
			font-size: 20px
			text-overflow: clip
			white-space: nowrap
			overflow: hidden

		.value
			width: calc(100vw - 8px)
			min-height: 20px
			margin: 0
			padding: 0 4px 10px 4px
			font-size: 14px

		.div-key
			position: relative
			background-color: #ddd
			border: 0
			margin: 0
			padding: 0
			width: 100vw
			height: 30px

			input
				margin: 0
				width: calc(100vw - 34px)
				height: 30px
				padding: 0 0 0 4px
				background-color: #ddd

			button
				float: right
				right: 0
				top: 0
				margin: 0
				padding: 0
				width: 30px
				height: 30px

		input, textarea
			border: 0
			margin: 0
			font-family: 'Poppins', sans-serif
			font-size: 20px

			&:focus
				outline: none

		textarea
			resize: none
			font-size: 14px
			width: calc(100vw - 8px)
			margin: 0



</style>
