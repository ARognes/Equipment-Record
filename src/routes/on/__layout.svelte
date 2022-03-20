<script lang="ts">
	import Navbar from '$lib/Navbar.svelte'
	import { auth } from '$lib/Auth/auth'
  import { goto } from '$app/navigation'
	import { browser } from '$app/env'
	$: if (browser && !$auth) goto('/')
</script>


<main>
	<slot></slot>
</main>

<Navbar path="on" />


<style>


</style>
