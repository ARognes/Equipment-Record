<script lang="ts">
  import { auth } from '$lib/Auth/auth'
  import Loading from '$lib/components/Loading.svelte'
  import { writable } from 'svelte/store'
  import { goto } from '$app/navigation'

  import accountSVG from '$lib/images/account.svg'
  import emailSVG from '$lib/images/email.svg'
  import viewSVG from '$lib/images/view.svg'
  import hideSVG from '$lib/images/hide.svg'
  import lockSVG from '$lib/images/lock.svg'
  import { getIdTokenResult } from 'firebase/auth';
  import { session } from '$lib/storage';
  
  const loading = writable(false)

  let signIn = true
  let viewPassword = false

  let username = ""
  let email = ""
  let password = ""
  let confirmPassword = ""

  let errorMsg = ""

  async function loginEmail() {
    try {
      $loading = true

      if (password.length < 12 || password.search(/[a-z0-9]/i) < 0) throw new Error("Password is not valid")

      if (emailValid(username)) await auth.signInEmail(username, password)
      else await auth.signInUsername(username, password)
    }
    catch (e) { errorMsg = <string> e; console.error(e) }
    finally { $loading = false }
  }

  async function loginGoogle() {
    try {
      $loading = true
      await auth.signInGoogle()
    }
    catch (e) { errorMsg = <string> e; console.error(e) }
    finally { $loading = false }
  }

  async function validateRegistration() {
    try {
      $loading = true
      if (username.length < 1) throw new Error("Please enter your name")
      if (email.length < 3) throw new Error("Please enter a valid email")  
      if (!emailValid(email)) throw new Error("Please enter a valid email")
      if (password.length < 12) throw new Error("Your password must be at least 12 characters") 
      if (password.search(/[a-z]/i) < 0) throw new Error("Your password must contain at least one letter") 
      if (password.search(/[0-9]/) < 0) throw new Error("Your password must contain at least one digit") 
      //if (p.search(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/) < 0) throw new Error("Your password must contain at least one special character" 
      if (password !== confirmPassword) throw new Error("Your passwords do not match")

      await auth.register(username, email, password);

    }
    catch (e) { errorMsg = <string> e; console.error(e) }
    finally { $loading = false }
  }
  
  function emailValid(email: string): boolean {
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
      <input type="text" spellcheck="false" placeholder="Username or email" on:input={ e => username = e.currentTarget.value }>
      <img src={ accountSVG } alt="">
      <input type={ viewPassword ? 'text' : 'password' } spellcheck="false" placeholder="Password" on:input={ e => password = e.currentTarget.value }>
      <img src={ viewPassword ? viewSVG : hideSVG } alt="" on:click={() => viewPassword = !viewPassword}>
      <a id="forgot" href="/forgot">Forgot</a>
      <!-- <div id="div-captcha" hidden="true">
        <div class="g-recaptcha" data-sitekey="6LcRXkccAAAAABcm5OS8HkuDj9_Pi9A__dU_EeTx"></div>
      </div> -->
      <button id="sign-in" on:click={ loginEmail }>Sign In</button>

    {:else}

      <h1>Register</h1>

      <p>Already have an account? <span class="link" on:click={ () => signIn = true }>Sign in</span></p>

      <input type="text" spellcheck="false" placeholder="Username" on:input={ e => username = e.currentTarget.value }>
      <img src={ accountSVG } alt="">
      <input type="email" spellcheck="false" placeholder="Email" on:input={ e => email = e.currentTarget.value }>
      <img src={ emailSVG } alt="">
      <input type={ viewPassword ? 'text' : 'password' } spellcheck="false" placeholder="Password" on:input={ e => password = e.currentTarget.value }>
      <img src={ viewPassword ? viewSVG : hideSVG } alt="" on:click={() => viewPassword = !viewPassword}>
      <input type={ viewPassword ? 'text' : 'password' } spellcheck="false" placeholder="Confirm password" on:input={ e => confirmPassword = e.currentTarget.value }>
      <img src={ lockSVG } alt="">
      <!-- <div id="div-captcha" hidden="true">
        <div class="g-recaptcha" data-sitekey="6LcRXkccAAAAABcm5OS8HkuDj9_Pi9A__dU_EeTx"></div>
      </div> -->

      <button id="register" on:click={ validateRegistration }>Register</button>
    
    {/if}
    <button id="google" on:click={ loginGoogle }>Authenticate with Google</button>


    <p id="errorMsg">{ errorMsg }</p>
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

  img 
    position: relative
    top: -30px
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
  top: -28px
  right: 6px
  height: 40px
  color: blue
  font-size: 20px
  text-decoration: none


#errorMsg 
  color: #a00
  font-weight: bold

.link
  color: #00f
  &:hover
    font-weight: bold
  

</style>