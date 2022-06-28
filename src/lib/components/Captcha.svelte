<script lang="ts">

import { WidgetInstance } from 'friendly-challenge'
import { page } from '$app/stores'
import { onMount } from 'svelte'  
import { goto } from '$app/navigation'
  
const SITE_KEY = import.meta.env.VITE_FRIENDLY_CAPTCHA_SITE_KEY
const errorDir = '/noBots'

let divCaptcha: HTMLDivElement

export let captcha = () => {}

async function done(solution: string) {
  let verificationRes = await fetch(`//${ $page.url.host }/endpoints/friendlyCaptcha`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: `{"solution":"${ solution }", "sitekey": "${ SITE_KEY }"}`
  })

  const verification = await verificationRes.json()

  if (verification.success === false) goto(errorDir)

  captcha()
}

function error(e) {
  goto(errorDir)
}

onMount(() => {
  const widget = new WidgetInstance(divCaptcha, {
  startMode: 'auto',
  doneCallback: done,
  errorCallback: error,
})

return widget.destroy

})

</script>

<div bind:this={ divCaptcha } class="frc-captcha" data-sitekey={ SITE_KEY } />

<style lang="sass">

div
  position: relative
  margin: 30px 0 10px 0

</style>
