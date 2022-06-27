<script lang="ts">
  import Loading from "$lib/components/materialish/Loading.svelte"

  export let images

  let imgElem = []
  let btnActive = 0
  let gallery
  function slideGallery(i: number) {
    btnActive = i
    imgElem[i].scrollIntoView({ behavior: 'smooth', block: 'center'})
  }

  // Image scroll horizontal
  function galleryScroll() {
    btnActive = Math.round(gallery.scrollLeft / window.innerWidth)
  }

</script>


<div id="gallery" bind:this={ gallery } on:scroll={ galleryScroll }>
  
  {#if images != null}
  {#each images as img, i}

  {#if img?.src }
    <div class={ 'image-container ' + (!img.done ? 'blur' : 'noblur') } style={ `background-image: url(${ img.src })` } bind:this={ imgElem[i] } />
  {:else}
    <div class="loading-container">
      <Loading />
    </div>
  {/if}

  {/each}
  {/if}
</div>
<div id="scroll-cover"></div>
{#if images.length > 1}
  <div id="selector">
    {#each images as img, i}
      <button class={ btnActive == i ? "btnActive" : "" } on:click={ () => slideGallery(i) }></button>
    {/each}
  </div>
{/if}


<style lang="sass">

  .blur
    filter: blur(8px)

  .noblur
    transition: 100ms all ease
  
  #gallery
    margin: 0
    padding: 0
    border: 0
    position: relative
    top: 0
    left: 0
    width: 100vw
    height: 100vw
    display: flex
    overflow-x: auto
    overflow-y: hidden
    white-space: nowrap
    scroll-snap-type: x mandatory
    scrollbar-width: none
    background-color: black

    .image-container
      margin: 0
      padding: 0
      position: relative
      object-fit: contain
      flex-shrink: 0
      width: 100vw
      height: 100vw
      transition: 250ms filter ease-in
      scroll-snap-stop: always
      scroll-snap-align: start
      background-size: contain
      background-repeat: no-repeat
      background-position: center

    .loading-container
      margin: 0
      padding: 0
      position: relative
      flex-shrink: 0
      width: 100vw
      height: 100vw
      transition: 250ms filter ease-in
      scroll-snap-stop: always
      scroll-snap-align: start
      background-color: white

  #scroll-cover
    margin: 0
    padding: 0
    border: 0
    position: absolute
    top: 100vw
    left: 0
    width: 100vw
    height: 30px
    background-color: #ddd

  #selector
    position: absolute
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: center
    top: calc(100vw - 30px)
    left: calc(50vw - 140px)
    width: 280px
    height: 30px

    .btnActive
      top: 0
      width: 16px
      height: 16px
      opacity: 0.7
      transition: 100ms all ease

    button 
      position: relative
      top: 1px
      margin: 6px 10px
      padding: 0
      border: 0
      border-radius: 50%
      width: 14px
      height: 14px
      background-color: white
      opacity: 0.5
      transition: 100ms all ease

</style>