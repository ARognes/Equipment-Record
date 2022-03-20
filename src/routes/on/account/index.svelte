<script lang="ts">
	import { auth } from '$lib/Auth/auth'
</script>

<h1>Hello world!</h1>


<button on:click={ auth.signOut }>Sign out</button>

<style lang="sass">

h1 
	color: #ff3e00
	text-transform: uppercase
	font-size: 4rem
	font-weight: 100
	line-height: 1.1
	margin: 4rem auto
	max-width: 14rem


@media (min-width: 480px) 
	h1 
		max-width: none

</style>
