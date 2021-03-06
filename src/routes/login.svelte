<script context="module" lang="ts">
	import { initializeFirebase } from '$lib/firebase-client'
	import type { Load } from '@sveltejs/kit'
	import { browser } from '$app/env'

	export const load: Load = async function load({ session }) {

    // If user is logged in, reroute
    if (session.user) return { redirect: '/on/home', status: 302 } 

    if (!browser) return {}
		try { initializeFirebase() } 
    catch (ex) { console.error(ex) }
		return {}
	}

  export const prerender = true

</script>


<script lang="ts">
  import ErrorMsg from '$lib/components/ErrorMsg.svelte'
	import { signInGoogle, signInEmail, signInUsername } from '$lib/firebase-client'

  import Button from '$lib/components/materialish/Button.svelte'
  import Loading from '$lib/components/materialish/Loading.svelte'
  import TextField from '$lib/components/materialish/TextField.svelte'
  
  import AccountSVG from '$lib/assets/account.svg'
  import ViewSVG from '$lib/assets/view.svg'
  import HideSVG from '$lib/assets/hide.svg'
  import GoogleSVG from '$lib/assets/google.svg'
  import recaptcha from '$lib/recaptcha'
  import { RECAPTCHA_SITE_KEY } from '$lib/constants-clients'
  import { writable } from 'svelte/store'
  import { goto } from '$app/navigation'
  import { page, session } from '$app/stores'
import Assignments from '$lib/components/Assignments.svelte'
  $session

  const errorMsg = writable('')
  
  let viewPassword = false
  let loading = false
  let username = ""
  let password = ""


  async function loginEmail() {
    try {
      validatePassword(password)
      loading = true

      const verified = await recaptcha($page.url.host, 'login')
			if (!verified) return goto('/noBots')
      
      if (isEmail(username)) await signInEmail(username, password)
      else await signInUsername(username, password)
    }
    catch (e) { 
      $errorMsg = ""
      $errorMsg = "Incorrect username/email or password"
    }
    finally { loading = false }
  }

  async function loginGoogle() {
    try {
      loading = true
      await signInGoogle()
    }
    catch (e) { 
      $errorMsg = ""
      $errorMsg = e 
    }
    finally { loading = false }
  }

  function validatePassword(password: string) {
    if (password.length < 12) throw "Your password must be at least 12 characters"
    if (password.search(/[a-z]/) < 0) throw "Your password must contain at least one lowercase letter"
    if (password.search(/[A-Z]/) < 0) throw "Your password must contain at least one uppercase letter"
    if (password.search(/[0-9]|[~`!#$%\^&*+=\-_\[\]\\';,\./{}|\\":<>\?]/) < 0) throw "Your password must contain at least one digit or special character"
  }
  
  function isEmail(email: string): boolean {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  } 
  
  function enterSignIn(e) {
    if (e.key === 'Enter') loginEmail()
  }

  async function sleep(ms: number) { return new Promise(res => setTimeout(res, ms)) }
  const recaptchaScriptId = browser && window.document.getElementById("googleRecaptchaScript")

</script>

<svelte:head>

  {#await sleep(0) then _}
    {#if browser && !recaptchaScriptId}
        <script
            id="googleRecaptchaScript"
            src="https://www.google.com/recaptcha/api.js?render={ RECAPTCHA_SITE_KEY }"
            async
            defer>
        </script>
    {/if}
  {/await}
</svelte:head>

<!-- Auth status unknown -->

{#if $session.user === undefined}
<Loading loading={ true }/>
<p>Checking auth status</p>
{:else}
  <div id="auth">
    <Button mode="link" noPrefetch href="/">Equipment-Record</Button>
    <h1>Login</h1>

    <TextField label="Username or email" on:keypress={ enterSignIn } on:input={ e => username = e.currentTarget.value }><AccountSVG /></TextField>
    <TextField label="Password" type={ viewPassword ? 'text' : 'password' } on:keypress={ enterSignIn } on:input={ e => password = e.currentTarget.value }>
      {#if viewPassword} 
        <div on:click={ () => viewPassword = !viewPassword } ><ViewSVG /></div>
      {:else}
        <div on:click={ () => viewPassword = !viewPassword } ><HideSVG /></div>
      {/if}
    </TextField>
    <Button mode="link" href="/forgot" margin="0 0 10px 0">Forgot password?</Button>


    <br>

    <Button on:click={ loginEmail } bgColor="255, 14, 25" width="100%">Login</Button>
    
    <Button on:click={ loginGoogle } bgColor="66, 133, 244" width="100%" padding="0"><GoogleSVG /><p style="margin-left: 11px">Sign in with Google</p></Button>


    Need an account? <Button mode="link" href="/register">Create account</Button>

    <ErrorMsg errorMsg={errorMsg} />

  </div>

  <Loading {loading} />
{/if}



<style lang="sass">

#auth
  position: relative
  top: 5%
  left: 5%
  width: 90%
  font-family: 'Roboto', sans-serif

  h1
    font-size: 60px
    margin: 0
    padding: 0

  input 
    padding-left: 44px
    width: calc(100% - 44px)
    height: 32px
    font-size: 20px
    border: none
    border-bottom: 3px solid #888
    margin: -10px 0 -10px 0

    &:focus 
      outline: none

  #password-forgot
    width: 100%
    height: 32px
    font-size: 20px
    border: none
    border-bottom: 3px solid #888
    margin: -10px 0 -10px 0

    #password-short
      width: calc(100% - 125px)
      border: none
      height: 30px

  .image
    position: relative
    top: -24px
    left: 6px
    align-self: flex-start
    opacity: 50%
    width: 30px
    height: 30px

.div-recaptcha 
  width: 100%
  height: 100px
  display: flex
  justify-content: center
  align-items: center

.link .link:hover .link:focus .link:active
  text-decoration: none

a
  -webkit-tap-highlight-color: transparent

</style>