<script lang="ts">
import Button from '$lib/components/materialish/Button.svelte'
import { signOut } from "$lib/firebase-client"
import { session } from '$app/stores'
import Loading from '$lib/components/materialish/Loading.svelte'
import SettingsSVG from '$lib/assets/settings.svg'

$session

console.log($session)

let loading = false

function signOutLoader() {
	signOut()
	loading = true
}

</script>

<header>
	<h1>Account</h1>
	<Button mode="link" href="/on/settings"><SettingsSVG /></Button>
</header>

<div id="menu">
	<Button bgColor="80, 80, 200" width="100%">Nothing</Button>
	<Button bgColor="80, 80, 200" width="100%">Nothing</Button>
	<Button bgColor="80, 80, 200" width="100%">Nothing</Button>
	<Button mode="link" href="/on/dev" width="100%">Dev</Button>

	<Button on:click={ () => signOutLoader() } bgColor="255, 14, 25" width="100%" >Sign out</Button>
	<p>name: { $session.user?.name || '' }</p>
	<p>email: { $session.user?.email || '' }</p>
	<p>businessName: { $session.user?.businessName || '' }</p>
	<p>accessLevel: { $session.user?.accessLevel || '' }</p>
</div>

<Loading {loading} />



<style lang="sass">
header
	background-color: #bbb
	margin: 0
	height: 40px
	display: flex
	flex-direction: row-reverse

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

		&:active
			background-color: #c00

</style>
