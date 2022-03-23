<script lang="ts">
  import tempSVG from '$lib/images/temp.svg'

  export let info

</script>

<div class="item">
  <img class="display" src={ tempSVG } alt="">
  <div class="middle">

    <div class="name">
      {#each info?.nameHighlight as matches}
      <span class:highlight={ matches.highlight }>{ matches.text }</span>
      {/each}
    </div>

    <div class="desc">
      {#each info?.descHighlight as matches}
      <span class:highlight={ matches.highlight }>{ matches.text }</span>
      {/each}
    </div>

  </div>
  <div class="right">
    <p>{ info?.userAssigned || "" }<br>{ info?.projectAssigned || "" }</p>
  </div>
</div>

<style lang="sass">

.highlight
  // border-bottom: 3px solid red
  color: white
  background-color: #888
  border-radius: 4px
  border-width: 20px
  padding: 1px

.item
  position: relative
  display: flex
  margin: 0 0 2px 0
  left: 0
  width: 100%
  height: 80px
  background-color: #eee

.img
  height: 100%
  margin: auto

.middle

  height: 100%
  margin: 0 auto 0 10px

  .desc
    font-size: 12px

.right
  height: 100%
  margin: 0 10px 0 auto
  color: blue
  font-weight: bold
  font-size: 12px

</style>
