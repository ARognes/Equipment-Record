<script context="module" lang="ts">
	import { initializeFirebase } from '$lib/firebase-client'
	import type { Load } from '@sveltejs/kit'
	import { browser } from '$app/env'

	export const load: Load = async function load({ session }) {

    console.log('Login session', session.user)

    // If user is logged in, reroute
    if (session.user) return { redirect: '/on/home', status: 302 } 

    if (!browser) return { props: { user: session.user } }
		try { initializeFirebase() } 
    catch (ex) { console.error(ex) }
		return { props: { user: session.user } }
	}

  export const prerender = true


</script>

<script lang="ts">
	import Button from '$lib/components/materialish/Button.svelte'
  import TextField from '$lib/components/materialish/TextField.svelte'
  import ErrorMsg from '$lib/components/ErrorMsg.svelte'
  import Loading from '$lib/components/materialish/Loading.svelte'
  import EmailSVG from '$lib/assets/email.svg'
	import recaptcha from '$lib/recaptcha'
  import { writable } from 'svelte/store'
	import { passwordResetEmail } from '$lib/firebase-client'
	import { RECAPTCHA_SITE_KEY } from '$lib/constants-clients'
	import { page, session } from '$app/stores'
	import { goto } from '$app/navigation'
  $session

	let value = ''
	let sent = false, loading = false, verified = false
	let errorMsg = writable('')

	async function sendPasswordResetEmail() {
		loading = true
		try {
			if (value.length <= 3 || !isEmail(value)) throw 'Please enter a valid email'
			const verified = await recaptcha($page.url.host, 'forgot')
			if (!verified) return goto('/noBots')
			
			try {	await passwordResetEmail(value) }
			catch(e) { throw 'Email not linked to an account'}

			sent = true
			$errorMsg = ''
		}
		catch (e) { 
			$errorMsg = ''
			$errorMsg = e 
		}
		finally { loading = false }
	}

	function isEmail(email: string): boolean {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  }

</script>

<svelte:head>
  <script src={ `https://www.google.com/recaptcha/api.js?render=${ RECAPTCHA_SITE_KEY }` }></script>
</svelte:head>

<div id="forgot">

  <Button mode="link" href="https://app.equipment-record.com" noPrefetch={true}>Link to main page</Button>

	<h1>Forgot</h1>
		{#if !sent }
			<TextField label="Username or email" on:keypress={ () => {} } on:input={ e => value = e.currentTarget.value }><EmailSVG /></TextField>
		{:else}
			<h1>Email sent!</h1>
		{/if}

	<Button on:click={ sendPasswordResetEmail } bgColor="255, 14, 25" width="100%">Send confirmation</Button>
	<Button mode="link" noPrefetch href="/" bgColor="255, 14, 25">Back</Button>

	<ErrorMsg {errorMsg} />

	<br>
	<br>
	<br>
	<br>
	<br>

	<Loading {loading}/>


</div>



<style lang="sass">
#forgot
  position: relative
  top: 5%
  left: 5%
  width: 90%
  font-family: 'Roboto', sans-serif

  h1
    font-size: 60px
    margin: 0px 0 10px 0
    padding: 0

</style>