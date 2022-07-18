<script lang="ts">
  import ErrorSVG from '$lib/assets/error.svg'
  import Loading from '$lib/components/materialish/Loading.svelte'
  import type { EquipmentSearchWrapper } from '$lib/models/DocumentModels'
  import { onMount } from 'svelte'

  export let wrap: EquipmentSearchWrapper

  let doc = wrap?.doc
  // $: doc = wrap?.doc 

  onMount(async () => {
    if (!doc?._tinyImage) doc._tinyImage = await doc.loadTinyImage()
  })

</script>

{#if doc?._tinyImage !== undefined }
  <div class="item" >
    <div class="left">
      {#if doc?._tinyImage !== null }
        <img loading="lazy" src={ doc?._tinyImage } alt="">
      {:else}
        <ErrorSVG width="40" height="40" />
      {/if}
    </div>
    <div class="middle">

      <div class="name">
        {#each wrap.nameHighlight as matches}
        <span class:highlight={ matches.highlight }>{ matches.text }</span>
        {/each}
      </div>

      <div class="attr">
        {#each wrap.attributeHighlight as { key, value } }
          <div>
            {#each key as match}
              <span class:highlight={ match.highlight }>{ match.text }</span>
            {/each}
            {#each value as match}
              <span class:highlight={ match.highlight }>{ match.text }</span>
            {/each}
          </div>
        {/each}
      </div>

    </div>
    <div class="right">
      <p>{ doc?.userAssigned || "" }<br>{ doc?.projectAssigned || "" }</p>
    </div>
  </div>
{/if}

<style lang="sass">

$item-height: 80px

.highlight
  color: white
  background-color: #888
  // border-radius: 4px
  border-width: 20px
  padding: 1px

.item
  position: relative
  display: flex
  margin: 0 0 2px 0
  left: 0
  width: 100%
  height: $item-height
  background-color: #eee

.left
  height: $item-height
  width: $item-height
  margin: 0
  display: grid
  place-items: center

  img
    height: $item-height

.middle
  height: $item-height
  margin: 0 auto 0 10px

  .attr
    font-size: 12px

.right
  height: $item-height
  margin: 0 10px 0 auto
  color: blue
  font-weight: bold
  font-size: 12px

</style>
