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
import { page } from '$app/stores';


  const SITE_KEY = import.meta.env.VITE_PROD_RECAPTCHA_SITE_KEY
  const SITE_KEY_URL = `https://www.google.com/recaptcha/api.js?render=${ SITE_KEY }`

  console.log(SITE_KEY_URL)

  const loading = writable(false)
  const errorMsg = writable('')

  let signIn = true
  let viewPassword = false
  let recaptchaReady = false

  let username = ""
  let email = ""
  let password = ""
  let confirmPassword = ""


  async function loginEmail() {
    try {
      validatePassword(password)
      
      $loading = true
      await recaptcha()
      
      // Report to analytics or stop user and get recaptcha v2
      // return
      
      if (isEmail(username)) await auth.signInEmail(username, password)
      else await auth.signInUsername(username, password)
      console.log('login')
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
      if (email.length <= 3 || !isEmail(email)) throw new Error("Please enter a valid email")
      validatePassword(password)
      if (password !== confirmPassword) throw new Error("Your passwords do not match")

      await recaptcha()
     

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
      (async () => {

        const token = await getIdTokenResult($auth)
        session.clear()
        // sessionStorage('accessLevel', token?.claims?.accessLevel || 0)
        session.setItem('accessLevel', token?.claims?.accessLevel || 0)
        goto('/on/home')
      })()
    }
  }

  async function recaptcha() {

    try {
      console.log('recaptcha start')

      const recaptchaV3 = await new Promise((res, rej) => {
        grecaptcha.ready(async () => {
          console.log('recaptcha ready')

          let token = await grecaptcha.execute(SITE_KEY, {action: 'contactForm'})

          console.log('recaptcha token:', token)
          
          let verificationRes = await fetch(`//${ $page.url.host }/endpoints/auth`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: `{"response":"${ token }"}`
          })
          const verification = await verificationRes.json()
          if (!verification.success || verification.action !== 'contactForm' || verification.score < 0.5) return rej(verification)
          console.log('recaptcha verified: ', verification)
          return res(verification)
        })
      })
      return recaptchaV3
    }
    catch (e) { // Something went wrong, use two step verification
      console.log(e)
      

    }
  }
  
  function enterSignIn(e) {
    if (e.key === 'Enter') loginEmail()
  }

  function enterRegister(e) {
    if (e.key === 'Enter') validateRegistration()
  }

  let signInSaveUsername = ''
  let registerSaveUsername = ''
  let registerSaveEmail = ''

</script>

<svelte:head>
  <link rel="preconnect" href="https://www.google.com">
  <link rel="preconnect" href="https://www.gstatic.com" crossorigin>

  <link rel="preload" as="script" href={ SITE_KEY_URL } />
  <script defer src={ SITE_KEY_URL } on:load={ () => recaptchaReady = true } />

</svelte:head>

<!-- Auth status unknown -->
{#if $auth === undefined}
  Checking auth status &hellip
  <Loading />
{:else if $auth === null} <!-- No auth found, register/sign in -->

  <div id="auth">

    {#if signIn}
    
      <h1>Sign In</h1>

      <p>Need an account? <span class="link" on:click={ () => signIn = false }>Register</span></p>
      <input type="text" spellcheck="false" placeholder="Username or email" on:keypress={ enterSignIn } bind:value={ signInSaveUsername } on:input={ e => username = e.currentTarget.value }>
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

      <button id="sign-in" on:click={ loginEmail }>Sign In</button>

    {:else}

      <h1>Register</h1>

      <p>Already have an account? <span class="link" on:click={ () => signIn = true }>Sign in</span></p>

      <input type="text" spellcheck="false" placeholder="Username" on:keypress={ enterRegister } bind:value={ registerSaveUsername } on:input={ e => username = e.currentTarget.value }>
      <div class="image"><AccountSVG /></div>
      <input type="email" spellcheck="false" placeholder="Email" on:keypress={ enterRegister } bind:value={ registerSaveEmail } on:input={ e => email = e.currentTarget.value }>
      <div class="image"><EmailSVG /></div>
      <input type={ viewPassword ? 'text' : 'password' } spellcheck="false" placeholder="Password" on:keypress={ enterRegister } on:input={ e => password = e.currentTarget.value }>
      
      {#if viewPassword} 
        <div class="image" on:click={ () => viewPassword = !viewPassword } ><ViewSVG /></div>
      {:else}
        <div class="image" on:click={ () => viewPassword = !viewPassword } ><HideSVG /></div>
      {/if}

      <input type="password" spellcheck="false" placeholder="Confirm password" on:keypress={ enterRegister } on:input={ e => confirmPassword = e.currentTarget.value }>
      <div class="image"><LockSVG /></div>

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

#register 
  background-color: #aaf


#sign-in 
  background-color: #aaf


#google 
  background-color: #f77

.div-captcha 
  width: auto
  height: 100px
  display: inline
  align-self: flex-start


.link
  color: #00f
  &:hover
    font-weight: bold

</style>