<script lang="ts">
  import { auth } from '$lib/Auth/auth'
  import Loading from '$lib/components/Loading.svelte'
  import ErrorMsg from '$lib/components/ErrorMsg.svelte'
  import { writable } from 'svelte/store'
  import { goto } from '$app/navigation'

  import AccountSVG from '$lib/assets/account.svg'
  import EmailSVG from '$lib/assets/email.svg'
  import ViewSVG from '$lib/assets/view.svg'
  import HideSVG from '$lib/assets/hide.svg'
  import LockSVG from '$lib/assets/lock.svg'
  import { getIdTokenResult } from 'firebase/auth'
  import { session } from '$lib/storage'
  
  const loading = writable(false)
  const errorMsg = writable('')

  let signIn = true
  let viewPassword = false

  let username = ""
  let email = ""
  let password = ""
  let confirmPassword = ""


  async function loginEmail() {
    try {
      console.log('arst')
      validatePassword(password)

      
      $loading = true
      if (validateEmail(username)) await auth.signInEmail(username, password)
      else await auth.signInUsername(username, password)
    }
    catch (e) { 
      $errorMsg = ""
      $errorMsg = "Incorrect username/email or password"
    }
    finally { $loading = false }
  }

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
      if (email.length <= 3 || !validateEmail(email)) throw new Error("Please enter a valid email")
      validatePassword(password)
      if (password !== confirmPassword) throw new Error("Your passwords do not match")

      await auth.register(username, email, password);

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
  
  function validateEmail(email: string): boolean {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  }

  $: {
    if ($auth) {
      (async () => {

        const token = await getIdTokenResult($auth)
        session.clear()
        // sessionStorage('accessLevel', token?.claims?.accessLevel || 0)
        session.setItem('accessLevel', token?.claims?.accessLevel || 0)
        goto('/on/home')
      })()
    }
  }

  function enterSignIn(e) {
    if (e.key === 'Enter') loginEmail()
  }

  function enterRegister(e) {
    if (e.key === 'Enter') validateRegistration()
  }


</script>

<!-- Auth status unknown -->
{#if $auth === undefined}
  Checking auth status &hellip
  <Loading />
{:else if $auth === null} <!-- No auth found, register/sign in -->

  <div id="auth">

    {#if signIn}
    
      <h1>Sign In</h1>

      <p>Need an account? <span class="link" on:click={ () => signIn = false }>Register</span></p>
      <input type="text" spellcheck="false" placeholder="Username or email" on:keypress={ enterSignIn } on:input={ e => username = e.currentTarget.value }>
      <div class="image"><AccountSVG /></div>
      <div id="password-forgot">
        <input id="password-short" type={ viewPassword ? 'text' : 'password' } spellcheck="false" placeholder="Password" on:keypress={ enterSignIn } on:input={ e => password = e.currentTarget.value }>
        <a id="forgot" href="/forgot">Forgot</a>
        {#if viewPassword} 
          <div class="image" on:click={ () => viewPassword = !viewPassword } ><ViewSVG /></div>
        {:else}
          <div class="image" on:click={ () => viewPassword = !viewPassword } ><HideSVG /></div>
        {/if}
      </div>
      <!-- <div id="div-captcha" hidden="true">
        <div class="g-recaptcha" data-sitekey="6LcRXkccAAAAABcm5OS8HkuDj9_Pi9A__dU_EeTx"></div>
      </div> -->

      <button id="sign-in" on:click={ loginEmail }>Sign In</button>

    {:else}

      <h1>Register</h1>

      <p>Already have an account? <span class="link" on:click={ () => signIn = true }>Sign in</span></p>

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
      
      <!-- <div id="div-captcha" hidden="true">
        <div class="g-recaptcha" data-sitekey="6LcRXkccAAAAABcm5OS8HkuDj9_Pi9A__dU_EeTx"></div>
      </div> -->

      <button id="register" on:click={ validateRegistration }>Register</button>
    
    {/if}

    <button id="google" on:click={ loginGoogle }>Authenticate with Google</button>

    <ErrorMsg errorMsg={errorMsg} />
  

  </div>

  {#if $loading}
    <Loading />
  {/if}

{:else} <!-- Auth found, Logged in  -->

  <button on:click={ () => auth.signOut() }>Sign Out</button>{ $auth.displayName } ({ $auth.email })

  <!-- {#if $auth.} -->
  <!-- businessID found -->
  
  <!-- User not affiliated with a business  -->


{/if}


<style lang="sass">

#auth
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

  .image
    position: relative
    top: -24px
    left: 6px
    align-self: flex-start
    opacity: 50%
    width: 30px
    height: 30px

#register 
  background-color: #aaf


#sign-in 
  background-color: #aaf


#google 
  background-color: #f77

#div-captcha 
  width: auto
  align-self: flex-start

#forgot 
  float: right
  position: relative
  top: 0
  right: 6px
  height: 40px
  color: blue
  font-size: 20px
  text-decoration: none


.link
  color: #00f
  &:hover
    font-weight: bold

</style>