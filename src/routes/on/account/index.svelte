<script lang="ts">
	import { auth } from '$lib/Auth/auth'
	import { getContext } from 'svelte'

	const userDataStore = getContext('userData')

	// $: console.log('b', $userDataStore)

</script>

<header>
	<a href="/on/settings"><button id="settings">Settings</button></a>
</header>

<h1>Account</h1>

<div id="menu">
	<button>Nothing</button>
	<button>Nothing</button>
	<button>Nothing</button>
	<button>Nothing</button>

	<button id="sign-out" on:click={ auth.signOut }>Sign out</button>
</div>


<style lang="sass">
header
	background-color: #bbb
	margin: 0
	height: 60px

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
