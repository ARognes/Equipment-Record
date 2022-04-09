<script lang="ts">
  import Loading from "$lib/Loading/Loading.svelte";
  import { getSRC } from "$lib/firebase";

  export let item

  let images = []
  
  async function init() {

    images = Array(item.imageOrder.length).fill({ src: '', done: false })
    
    // Get tiny images
    // if (!item.tinySRC || item.tinySRC.length == 0 || item.tinySRC[0] == null) item.tinySRC = [ await getSRC(item, true, 0) ]
    for (let i = 0; i < item.tinySRC?.length || 0; i++) 
        images[i].src = item.tinySRC[i]

    // Get full images one at a time
    item.imgSRC = []
    for (let i = 0; i < item.imageOrder.length; i++) {
      item.imgSRC[i] = await getSRC(item, false, i)
      images[i] = { src: item.imgSRC[i], done: true }
    }
  }

  let done = false
  $: if (item && !done) {
    done = true
    init()
  }

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
  };

  // Image parallax
  // document.body.addEventListener('scroll', () => {
  //   gallery.style.top = -document.body.scrollTop / 2 + 'px';
  // });

</script>


<div id="gallery" bind:this={ gallery } on:scroll={ galleryScroll }>
  
  {#if images != null}
  {#each images as img, i}
  
    {#if img?.src }
      <img src={ img.src } class={ img.done ? "noblur" : "blur"} bind:this={ imgElem[i] } alt="">
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
    height: calc(100vw + 12px)
    overflow-x: auto
    overflow-y: hidden
    white-space: nowrap
    scroll-snap-type: x mandatory
    scrollbar-width: none

    img
      margin: 0
      padding: 0
      position: relative
      width: 100vw
      height: 100vw
      transition: 250ms filter ease-in
      scroll-snap-stop: always
      scroll-snap-align: start

    .loading-container
      margin: 0
      padding: 0
      position: relative
      width: 100vw
      height: 100vw
      transition: 250ms filter ease-in
      scroll-snap-stop: always
      scroll-snap-align: start

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