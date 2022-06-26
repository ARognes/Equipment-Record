<script lang="ts">
  import Loading from '$lib/components/Loading.svelte'
  import ErrorMsg from '$lib/components/ErrorMsg.svelte'
  import { auth } from '$lib/Auth/auth'
  import { writable } from 'svelte/store'
  import { goto } from '$app/navigation'
  import { getIdTokenResult } from 'firebase/auth'
  import { session } from '$lib/storage'

  import AccountSVG from '$lib/assets/account.svg'
  import EmailSVG from '$lib/assets/email.svg'
  import ViewSVG from '$lib/assets/view.svg'
  import HideSVG from '$lib/assets/hide.svg'
  import LockSVG from '$lib/assets/lock.svg'

  const loading = writable(false)
  const errorMsg = writable('')

  let viewPassword = false

  let username = ""
  let email = ""
  let password = ""
  let confirmPassword = ""

  async function loginGoogle() {
    try {
      $loading = true
      await auth.signInGoogle()
    }
    catch (e) { $errorMsg = e }
    finally { $loading = false }
  }

  async function validateRegistration() {
    try {
      $loading = true
      if (username.length <= 2) throw new Error("Please enter your username")
      if (email.length <= 3 || !isEmail(email)) throw new Error("Please enter a valid email")
      validatePassword(password)
      if (password !== confirmPassword) throw new Error("Your passwords do not match")

      await auth.register(username, email, password)

    }
    catch (e) { $errorMsg = e }
    finally { $loading = false }
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

  $: {
    if ($auth) {
      // (async () => {

      //   const token = await getIdTokenResult($auth)
      //   session.clear()
      //   session.setItem('accessLevel', token?.claims?.accessLevel || 0)
      //   goto('/on/home')
      // })()
    }
  }

  function enterRegister(e) {
    if (e.key === 'Enter') validateRegistration()
  }

</script>

<div id="register">

  <h1>Register</h1>

  <p>Already have an account? <a sveltekit:prefetch href="/" class="link">Sign In</a></p>
  

  <input type="text" spellcheck="false" placeholder="Username" on:keypress={ enterRegister } on:input={ e => username = e.currentTarget.value }>
  <div class="image"><AccountSVG /></div>
  <input type="email" spellcheck="false" placeholder="Email" on:keypress={ enterRegister } on:input={ e => email = e.currentTarget.value }>
  <div class="image"><EmailSVG /></div>
  <input type={ viewPassword ? 'text' : 'password' } spellcheck="false" placeholder="Password" on:keypress={ enterRegister } on:input={ e => password = e.currentTarget.value }>
  
  {#if viewPassword} 
    <div class="image" on:click={ () => viewPassword = !viewPassword } ><ViewSVG /></div>
  {:else}
    <div class="image" on:click={ () => viewPassword = !viewPassword } ><HideSVG /></div>
  {/if}

  <input type="password" spellcheck="false" placeholder="Confirm password" on:keypress={ enterRegister } on:input={ e => confirmPassword = e.currentTarget.value }>
  <div class="image"><LockSVG /></div>

  <button id="btn-register" on:click={ validateRegistration }>Register</button>

  <button id="google" on:click={ loginGoogle }>Authenticate with Google</button>

  <ErrorMsg errorMsg={errorMsg} />

</div>

{#if $loading}
  <Loading />
{/if}

<style lang="sass">

#register
  position: relative
  top: 5%
  left: 5%
  width: 90%
  font-family: 'Poppins', sans-serif

  h1
    font-size: 60px
    margin: 0 0 10px 0
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

</style>