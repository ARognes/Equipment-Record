<script lang="ts">
  import tempSVG from '$lib/images/temp.svg'

  export let info

</script>

<div id="item">
  <img id="display" src={ tempSVG } alt="">
  <div id="middle">
    <!-- {#if info.nameHighlight}
      {#each info.nameHighlight as matches}
        <span class:highlight={ matches.highlight }>{ matches.string }</span>
      {/each}
    {:else}
      <span>{ info.name }</span>

    {/if} -->

    {#each info.nameHighlight as matches}
      <span class:highlight={ matches.highlight }>{ matches.text }</span>
    {/each}

    {#each info.descHighlight as matches}
      <span class:highlight={ matches.highlight }>{ matches.text }</span>
    {/each}

    <!-- <p>{ info?.name }</p> -->

  </div>
  <div id="right">
    <p>{ info?.userAssigned || "" }<br>{ info?.projectAssigned || "" }</p>

  </div>
</div>

<style lang="sass">
.highlight
  border-bottom: 3px solid red
  color: red
#item
  position: relative
  display: flex
  margin: 0 0 2px 0
  left: 0
  width: 100%
  height: 60px
  background-color: #eee

#img
  height: 100%
  margin: auto

#middle

  height: 100%
  margin: 0 auto 0 10px

#right
  height: 100%
  margin: 0 10px 0 auto
  color: blue
  font-weight: bold
  font-size: 12px

</style>
