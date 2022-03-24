<script lang="ts">
import { createEventDispatcher } from "svelte";
import backSVG from '$lib/images/back.svg'



  export let equipmentInfo

  const dispatch = createEventDispatcher()
  
</script>


<header>
	<button on:click={ () => dispatch('back') }><img src={ backSVG } alt="<"></button>
	<h1>{ equipmentInfo.name }</h1>
</header>

<p>{ equipmentInfo.desc }</p>


<style lang="sass">
header
	position: relative
	background-color: #bbb
	margin: 0
	height: 40px

	h1
		margin: 0
		position: absolute
		top: 0
		left: 40px
		width: calc(100vw - 40px)
		height: 40px
		font-size: 30px
		line-height: 40px
		text-align: center
		overflow: hidden

	button
		position: relative
		left: 5px
		top: 5px
		width: 30px
		height: 30px

		img
			position: relative
			width: 100%
			height: 100%

</style>
