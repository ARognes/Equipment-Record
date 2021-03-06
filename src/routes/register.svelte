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
  import GoogleSVG from '$lib/assets/google.svg'
  import AccountSVG from '$lib/assets/account.svg'
  import EmailSVG from '$lib/assets/email.svg'
  import ViewSVG from '$lib/assets/view.svg'
  import HideSVG from '$lib/assets/hide.svg'
  import LockSVG from '$lib/assets/lock.svg'
  import Button from '$lib/components/materialish/Button.svelte'
  import TextField from '$lib/components/materialish/TextField.svelte'
  import Loading from '$lib/components/materialish/Loading.svelte'
  import ErrorMsg from '$lib/components/ErrorMsg.svelte'
  import { RECAPTCHA_SITE_KEY } from '$lib/constants-clients'
  import { writable } from 'svelte/store'
  import { signInGoogle, register } from '$lib/firebase-client'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import recaptcha from '$lib/recaptcha'
  import { session } from '$app/stores'
  $session

  const errorMsg = writable('')
  const PASSWORD_MIN_LENGTH = 12
  
  let viewPassword = false
  
  let loading = false
  // let verified = true // false
  let username = ""
  let email = ""
  let password = ""
  let confirmPassword = ""

  async function registerGoogle() {
    try {
      loading = true
      await signInGoogle()
    }
    catch (e) { 
      $errorMsg = ''
      $errorMsg = e 
    }
    finally { loading = false }
  }

  async function validateRegistration() {
    try {

      loading = true
      if (email.length <= 3 || !isEmail(email)) throw "Please enter a valid email"
      if (username.length === 0) throw "Please enter a username"
      if (username.length <= 2) throw "Your username must have 3 characters or more"
      validatePassword(password)
      if (password !== confirmPassword) throw "Your passwords do not match"
      const res = await recaptcha($page.url.host, 'register')
      if (!res) return goto('/noBots')

      await register(username, email, password)

    }
    catch (e) { 
      $errorMsg = ''
      $errorMsg = e 
    }
    finally { loading = false }
  }

  function validatePassword(password: string) {
    if (password.length < PASSWORD_MIN_LENGTH) throw "Your password must be at least 12 characters"
    if (password.search(/[a-z]/) < 0) throw "Your password must contain at least one lowercase letter"
    if (password.search(/[A-Z]/) < 0) throw "Your password must contain at least one uppercase letter"
    if (password.search(/[0-9]/) < 0) throw "Your password must contain at least one digit"
    if (password.search(/[~`!#$%\^&*+=\-_\[\]\\';,\./{}|\\":<>\?]/) < 0) throw "Your password must contain at least one special character"
  }
  
  function isEmail(email: string): boolean {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  }

  function enterRegister(e) {
    if (e.key === 'Enter') validateRegistration()
  }

  let passwordFocus, confirmPasswordFocus

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

<div id="register">

  <Button mode="link" noPrefetch href="/">Equipment-Record</Button>
  <h1>Register</h1>

  <TextField label="Email*" on:keypress={ enterRegister } on:input={ e => email = e.currentTarget.value }><EmailSVG /></TextField>
  <TextField label="Username*" on:keypress={ enterRegister } on:input={ e => username = e.currentTarget.value }><AccountSVG /></TextField>
  <TextField label="Password*" type={ viewPassword ? 'text' : 'password' } on:keypress={ enterRegister } on:input={ e => password = e.currentTarget.value } bind:focus={ passwordFocus }>
    {#if viewPassword} 
      <div on:click={ () => viewPassword = !viewPassword } ><ViewSVG /></div>
    {:else}
      <div on:click={ () => viewPassword = !viewPassword } ><HideSVG /></div>
    {/if}
  </TextField>
  <span class="div-requirements">
    <span class={ `transition requirement ${ !passwordFocus ? 'hide' : ''} ${ password.search(/[a-z]/) < 0 ? '' : 'requirement-hide' }` } >abc</span>
    <span class={ `transition requirement ${ !passwordFocus ? 'hide' : ''} ${ password.search(/[A-Z]/) < 0 ? '' : 'requirement-hide' }` } >ABC</span> 
    <span class={ `transition requirement ${ !passwordFocus ? 'hide' : ''} ${ password.search(/[0-9]/) < 0 ? '' : 'requirement-hide' }` } >123</span> 
    <span class={ `transition requirement ${ !passwordFocus ? 'hide' : ''} ${ password.search(/[~`!#$%\^&*+=\-_\[\]\\';,\./{}|\\":<>\?]/) < 0 ? '' : 'requirement-hide' }` } >$%&</span> 
    <span class={ `transition requirement ${ !passwordFocus ? 'hide' : ''} ${ password.length < 12 ? '' : 'requirement-hide' }` } >{ password.length }/{ PASSWORD_MIN_LENGTH }</span> 
  </span>


  <TextField label="Confirm password*" type={ viewPassword ? 'text' : 'password' } on:keypress={ enterRegister } on:input={ e => confirmPassword = e.currentTarget.value } bind:focus={ confirmPasswordFocus } ><LockSVG /></TextField>
  <span class="div-requirements">
    <span class={ `transition ${ (!confirmPasswordFocus || confirmPassword === password || !confirmPassword.length) ? 'hide' : ''}` } >Passwords do not match</span> 
  </span>

  <Button on:click={ validateRegistration } bgColor="255, 14, 25" width="100%">Register</Button>

  <Button on:click={ registerGoogle } bgColor="66, 133, 244" width="100%" padding="0"><GoogleSVG /><p style="margin-left: 11px">Sign up with Google</p></Button>

  Already have an account? <Button mode="link" href="/login">Login</Button>


  <ErrorMsg {errorMsg} />

  <div style='height: 25vh' />

</div>

<Loading {loading} />


<style lang="sass">

#register
  position: absolute
  top: 0
  left: 0
  width: 90%
  height: 100%
  padding: 0 5%
  overflow-x: hidden
  overflow-y: auto
  font-family: 'Roboto', sans-serif

  h1
    font-size: 60px
    margin: 0
    padding: 0

  button
    width: 100%
    height: 40px
    font-size: 20px
    font-family: 'Poppins', sans-serif
    border: none
    margin: 10px 0 0 0

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

    #forgot 
      float: right
      position: relative
      top: 0
      right: 6px
      height: 40px
      color: blue
      font-size: 20px
      text-decoration: none

  .image
    position: relative
    top: -24px
    left: 6px
    align-self: flex-start
    opacity: 50%
    width: 30px
    height: 30px

#btn-register 
  background-color: #aaf


#sign-in 
  background-color: #aaf


#google 
  background-color: #f77

.div-recaptcha 
  width: 100%
  height: 100px
  display: flex
  justify-content: center
  align-items: center

.link
  color: #00f
  text-decoration: none
  &:hover
    font-weight: bold
    
.div-requirements
  position: relative
  top: -4px
  float: right
  width: 300px
  height: auto
  display: flex
  justify-content: flex-end
  color: red

.requirement
  color: red
  font-weight: bold
  width: 40px
  font-size: 14px


.requirement-hide
  color: #bbb
  font-weight: normal
  font-size: 12px

.hide
  opacity: 0

.transition
  webkit-transition: all 200ms ease
  -moz-transition: all 200ms ease
  -o-transition: all 200ms ease
  transition: all 200ms ease

</style>