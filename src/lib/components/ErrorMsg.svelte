<script lang="ts">
import { writable } from "svelte/store";

  import { fade } from "svelte/transition"

  export let errorMsg

  const showHighlight = writable(false)

  $: (async () => {
    if (!$errorMsg) return
    console.error($errorMsg)
    $showHighlight = true
    await new Promise(res => setTimeout(res, 500))  // Wait ms
    $showHighlight = false
  })()

</script>


{#if $showHighlight }
  <p id="errorMsg-active" transition:fade="{{duration: 100}}" >{ $errorMsg }</p>
{:else}
  <p id="errorMsg" in:fade="{{duration: 100}}" >{ $errorMsg }</p>
{/if }


<style lang="sass">

  #errorMsg 
    position: absolute
    color: #d00
    font-weight: bold
    padding: 2px 4px

  #errorMsg-active
    position: absolute
    color: white
    font-weight: bold
    background-color: #f00
    border-radius: 4px
    padding: 2px 4px

</style>