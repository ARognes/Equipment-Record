<script lang="ts">
  import tempSVG from '$lib/assets/temp.svg'

  export let info

</script>

<div class="item">

  <div class="name">
    {#each info.nameHighlight as matches}
    <span class:highlight={ matches.highlight }>{ matches.text }</span>
    {/each}
  </div>

  <!-- <div class="desc">
    {#each info.descHighlight as matches}
    <span class:highlight={ matches.highlight }>{ matches.text }</span>
    {/each}
  </div> -->

  <p class="nameAssigned">{ info?.userAssigned || "" }</p>
  <p class="projectAssigned">{ info?.projectAssigned || "" }</p>

</div>

<style lang="sass">

.highlight
  color: white
  background-color: #888
  border-radius: 4px
  border-width: 20px
  padding: 1px

.item
  position: relative
  display: flex
  margin: 0 0 2px 0
  padding: 0 2px 0 2px
  left: 0
  width: calc(100% - 4px)
  height: 30px
  background-color: #eee

.name
  font-size: 20px
  height: 100%

.desc
  font-size: 12px
  margin: auto auto auto 10px

.nameAssigned
  height: 100%
  margin: 0 10px 0 auto
  color: blue
  font-weight: bold
  font-size: 12px

.projectAssigned
  height: 100%
  margin: 0 0 0 10px
  color: blue
  font-weight: bold
  font-size: 12px

</style>
