<script lang="ts">
  import tempSVG from '$lib/images/temp.svg'

  export let info

</script>

<div class="item">
  <img class="display" src={ tempSVG } alt="">
  <div class="middle">

    <div class="name">
      {#each info.nameHighlight as matches}
      <span class:highlight={ matches.highlight }>{ matches.text }</span>
      {/each}
    </div>

    <div class="desc">
      {#each info.descHighlight as matches}
      <span class:highlight={ matches.highlight }>{ matches.text }</span>
      {/each}
    </div>

  </div>
  <div class="bottom">
    <p>{ info?.userAssigned || "" }<br>{ info?.projectAssigned || "" }</p>
  </div>
</div>

<style lang="sass">

.highlight
  color: white
  background-color: #888
  border-radius: 4px
  border-width: 20px
  padding: 1px

$item-space: 2px

.item
  position: relative
  display: flex
  margin: 0
  width: 100%
  height: 100%
  // margin: $item-space
  // // left: $item-space
  // top: $item-space 
  // width: calc(50vw - calc(3 * $item-space))
  // height: calc(50vw - calc(3 * $item-space))
  background-color: #eee

.img
  position: absolute
  width: 100%
  height: 100%

.middle
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 80%
  margin: 0

  .desc
    font-size: 12px

.bottom
  position: absolute
  left: 0
  bottom: 0
  width: 100%
  height: 20%
  margin: 0
  color: blue
  font-weight: bold
  font-size: 12px

  p
    margin: 0

</style>
