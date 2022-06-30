<script lang="ts">
	import Button from '$lib/components/materialish/Button.svelte'
  import TextField from '$lib/components/materialish/TextField.svelte'
  import ErrorMsg from '$lib/components/ErrorMsg.svelte'
  import Loading from '$lib/components/materialish/Loading.svelte'
	import Captcha from '$lib/components/Captcha.svelte'
  import { auth } from '$lib/Auth/auth'
  import { writable } from 'svelte/store'
  import EmailSVG from '$lib/assets/email.svg'


	let value = ''
	let sent = false, loading = false, verified = false
	let errorMsg = writable('')

	async function passwordResetEmail() {
		loading = true
		try {
			if (value.length <= 3 || !isEmail(value)) throw 'Please enter a valid email'
			if (!verified) throw 'Captcha must finish human verification'
			
			try {	await auth.passwordResetEmail(value) }
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

	$: if ($auth) {}

	function captcha() { verified = true }

</script>

<div id="forgot">

  <Button mode="link" href="https://app.equipment-record.com" noPrefetch={true}>Link to main page</Button>

	<h1>Forgot</h1>
		{#if !sent }
			<TextField label="Username or email" on:keypress={ () => {} } on:input={ e => value = e.currentTarget.value }><EmailSVG /></TextField>
		{:else}
			<h1>Sent!</h1>
		{/if}

		<Captcha {captcha} />


	<Button on:click={ passwordResetEmail } bgColor="255, 14, 25" width="100%">Send confirmation</Button>
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