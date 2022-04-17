<script lang="ts">

  export let attributes, editing

	console.log(attributes)


	let textAreas = []

	function textarea(e, i) {
		e.target.style.height = 'auto'
		let offset = e.target.offsetHeight - e.target.clientHeight
		e.target.style.height = e.target.scrollHeight + offset + 'px'
		attributes[i].editVal = e.target.value
		if (i == attributes.length - 1) attributes[i + 1] = { key: '', val: ''}
	}

	function inputName(e, i) {
		attributes[i].editKey = e.target.value
		if (i == attributes.length - 1) attributes[i + 1] = { key: '', val: ''}
	}

	function moveAttribute(i, toEnd) {
		if (toEnd && i < attributes.length - 2) attributes.splice(i + 1, 0, attributes.splice(i, 1)[0])
		else if (!toEnd && i > 0) attributes.splice(i - 1, 0, attributes.splice(i, 1)[0])
		attributes = attributes
		console.log(attributes)
	}

	function removeAttribute(i: number) {
		attributes[i].hidden = true
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
				{:else}
					<div class="div-key">
						<input type="text" on:input={ e => inputName(e, i) } placeholder="Attribute" value={ attr.key || attr.editKey || '' }>
						{#if i + 1 < attributes.length }
							<div class="attribute-actions">
								{#if i > 0 }
									<button on:click={ () => moveAttribute(i, false) }>^</button>
								{/if}
								{#if i < attributes.length - 2}
									<button on:click={ () => moveAttribute(i, true) }>v</button>
								{/if}
								<button on:click={ () => removeAttribute(i) }>-</button>
							</div>
						{/if}
					</div>
				{/if}
				<textarea readonly={ !editing } bind:this={ textAreas[i] } on:input={ e => textarea(e, i) } placeholder="Empty" rows="1">{ attr.val || attr.editVal || '' }</textarea>
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
			display: flex
			flex-wrap: nowrap
			justify-content: space-between
			background-color: #ddd
			margin: 0
			padding: 0 4px
			width: calc(100vw - 8px)
			height: 30px

			input
				margin: 0
				padding: 0
				width: calc(100vw - 108px)
				height: 30px
				background-color: #ddd

			.attribute-actions
				margin: 0

				button
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
