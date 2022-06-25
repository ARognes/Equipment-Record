<script lang="ts">
import { onMount } from "svelte"
import { page } from '$app/stores'

export let v2Container

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY
const SITE_KEY_URL = `https://www.google.com/recaptcha/api.js?render=${ SITE_KEY }`
const SITE_KEY_V2 = import.meta.env.VITE_RECAPTCHA_V2_SITE_KEY
const SITE_URL_V2 = 'https://www.google.com/recaptcha/api.js?render=explicit'

let recaptchaV2Loaded = false

async function recaptcha() {

  try {
    console.log('recaptcha start')

    const recaptchaV3 = await new Promise((res, rej) => {
      grecaptcha.ready(async () => {
        console.log('recaptcha ready')

        let token = await grecaptcha.execute(SITE_KEY, {action: 'login'})

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
        if (!verification.success || verification.action !== 'login' || verification.score < 0.5) return rej(verification)
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


onMount(() => {
  const head = document.getElementsByTagName('head')[0]
  // console.log(head)
  // const ast = ([...head.childNodes])
  //   .filter(elem => elem.nodeName === 'SCRIPT' && (elem.src === SITE_KEY_URL || elem.src === SITE_URL_V2))
  // console.log(ast)
  // if (ast.length) return
  const script = document.createElement('script')
  script.src = SITE_KEY_URL
  script.async = true
  script.defer = true
  head.appendChild(script)

  const script2 = document.createElement('script')
  script2.src = SITE_URL_V2
  script2.async = true
  script2.defer = true
  script2.onload = () => recaptchaV2Loaded = true
  head.appendChild(script2)
  console.log('append')
})


$: if (v2Container && recaptchaV2Loaded) {
  const recaptchaDiv = document.createElement('div')
  recaptchaDiv.id = `div-recaptcha`
  v2Container.appendChild(recaptchaDiv)

  grecaptcha.ready(() => {
    grecaptcha.render(recaptchaDiv.id, {
      sitekey: SITE_KEY_V2
    })
  })
}

</script>

<svelte:head>
  <link rel="preconnect" href="https://www.google.com">
  <link rel="preconnect" href="https://www.gstatic.com" crossorigin>

  <link rel="preload" as="script" href={ SITE_KEY_URL } />
</svelte:head>
