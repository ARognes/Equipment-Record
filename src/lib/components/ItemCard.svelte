<script lang="ts">
  import ErrorSVG from '$lib/assets/error.svg'
  import Loading from '$lib/components/Loading.svelte';

  export let info

</script>

<div class="item">
  <div class="left">
    {#if info?.tinySRC?.length }
      {#if info?.tinySRC[0]}
        <img src={ info?.tinySRC[0] } alt="">
      {:else}
        <ErrorSVG />
      {/if}
    {:else}  
      <Loading />
    {/if}
  </div>
  <div class="middle">

    <div class="name">
      {#each info?.nameHighlight as matches}
      <span class:highlight={ matches.highlight }>{ matches.text }</span>
      {/each}
    </div>

    <div class="attr">
      {#each info?.attrHighlight as attr}
        <div>
          {#each attr as matches}
            <span class:highlight={ matches.highlight }>{ matches.text }</span>
          {/each}
        </div>
      {/each}
    </div>

    <!-- <div class="desc">
      {#each info?.descHighlight as matches}
      <span class:highlight={ matches.highlight }>{ matches.text }</span>
      {/each}
    </div> -->

  </div>
  <div class="right">
    <p>{ info?.userAssigned || "" }<br>{ info?.projectAssigned || "" }</p>
  </div>
</div>

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
