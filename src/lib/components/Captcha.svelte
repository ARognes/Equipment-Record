<script lang="ts">

import { WidgetInstance } from 'friendly-challenge'
import { onMount } from 'svelte'  
  
let captcha: HTMLDivElement

export let done = async (solution: string) => {
	console.log('Solution:', solution)

  await fetch('/friendlyCaptcha', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: {
      solution: solution
    }
  })
}

export let error = (error: any) => {
	console.error(error)
}

onMount(() => {
  const widget = new WidgetInstance(captcha, {
  startMode: 'auto',
  doneCallback: done,
  errorCallback: error,
})

return widget.destroy

})

</script>

<div bind:this={ captcha } class="frc-captcha" data-sitekey="FCMJTEBHUU20DHJ9" />

<style lang="sass">

div
  position: relative
  margin: 30px 0 10px 0

</style>