<script lang="ts">

</script>

<header>
	<h1>History</h1>
</header>


<div id="menu">
	TODO
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

	button
		position: absolute
		left: 5px
		top: 5px
		width: 50px
		height: 50px

#settings
	left: calc(100% - 55px)


#menu
	position: relative
	top: 0
	left: 5%
	width: 90%

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

</style>
