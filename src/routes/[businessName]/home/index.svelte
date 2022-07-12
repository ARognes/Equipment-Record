<script lang="ts">
	import Button from '$lib/components/materialish/Button.svelte'
	import { session } from '$app/stores'

	console.log($session)

</script>


<header>
	<h1>Home</h1>
</header>


<div id="menu">
	<Button width="100%">Scan</Button>
	<Button width="100%">Download Codes</Button>
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

#menu
	margin: 5%

</style>
