<script lang="ts">
	import { onMount } from 'svelte';
  import { pinch } from 'svelte-gestures'
import { xlink_attr } from 'svelte/internal';

  function blobToImage(blob) {
    return new Promise(resolve => {
      const url = URL.createObjectURL(blob);
      let img = new Image();
      img.onload = function() {
        URL.revokeObjectURL(this.src);
        resolve(this);
      }
      img.src = url;
    });
  }

  let debug = 'debug'
  function handle(e) {
    console.log(e)
    // e.detail.X
    // e.detail.Y
    // e.detail.target
    debug = JSON.stringify(e)
  }

  // let img
  // let canvasStyleWidth = 0
  // let canvasStyleHeight = 0
  // try {
  //   img = await blobToImage(file)
  //   const aspectRatio = img.naturalWidth / img.naturalHeight
  //   canvas.width = img.naturalWidth
  //   canvas.height = img.naturalHeight
  //   if (aspectRatio < 1) {
  //     canvasStyleWidth = window.innerWidth
  //     canvasStyleHeight = img.naturalHeight * window.innerWidth / img.naturalWidth
  //   }
  //   else {
  //     canvasStyleWidth = aspectRatio * window.innerWidth
  //     canvasStyleHeight = window.innerWidth
  //   }
  //   canvas.style = `position: absolute; left: 0; top: 0; width: ${ canvasStyleWidth }px; height: ${ canvasStyleHeight }px;`

  //   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  // }
  // catch (error) { console.error(error) }

  let canvas

  let mounted = false
  onMount(() => mounted = true)

  // files is bound to image input
  // cropFiles is array of files user must crop, must be empty to continue
  let files, cropFiles = []
  $: if (files) loadImages()

  // Make user wait until this is complete to add to firestore!
  async function loadImages() {
    cropFiles = [...files]
    if (!cropFiles.length) return
    

    // Load first canvas image
    let canvasStyleWidth = 0
    let canvasStyleHeight = 0
    try {
      const img = await blobToImage(cropFiles[0])
      const aspectRatio = img.naturalWidth / img.naturalHeight
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      if (aspectRatio < 1) {
        canvasStyleWidth = window.innerWidth
        canvasStyleHeight = img.naturalHeight * window.innerWidth / img.naturalWidth
      }
      else {
        canvasStyleWidth = aspectRatio * window.innerWidth
        canvasStyleHeight = window.innerWidth
      }
      canvas.style = `position: absolute; left: 0; top: 0; width: ${ canvasStyleWidth }px; height: ${ canvasStyleHeight }px;`

      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    catch (error) { console.error(error) }



    // const remainingImages = 5 - modFiles.length

    // if (files.length >= remainingImages) {
    //   files = files.slice(0, remainingImages);
    //   labelImages.hidden = true;
    //   labelCamera.hidden = true;
    // }

    // Display each image for user to crop
    // files.forEach(file => cropImage(file, callback));
      
    // async function callback(blob) {
    //   const i = smallImages.length;

    //   // Compress images to small and tiny versions
    //   smallImages[i] = await compress(blob, SMALL_COMPRESSION_PERCENTAGE, SMALL_COMPRESSION_MAX_SIZE);

    //   // Render image in HTML
    //   try {
    //     const resultImg = await blobToImage(smallImages[i]);
    //     const divImg = document.createElement('div');
    //     divImg.setAttribute('class', 'div-image');
    //     const btnRemove = document.createElement('button');
    //     divImg.appendChild(resultImg);
    //     divImg.appendChild(btnRemove);
    //     divImages.appendChild(divImg);
    //     images[i] = resultImg;
    //     btnRemove.onclick = () => {
    //       images.splice(i, 1);
    //       smallImages.splice(i, 1);
    //       tinyImages.splice(i, 1);
    //       divImg.remove();
    //       labelImages.hidden = false;
    //       labelCamera.hidden = false;
    //     }
    //   }
    //   catch (error) { console.error(error) }

    //   tinyImages[i] = await compress(blob, TINY_COMPRESSION_PERCENTAGE, TINY_COMPRESSION_MAX_SIZE);

    // }
  };

  
</script>

<div>

  {#if cropFiles.length }
    <canvas bind:this={ canvas } use:pinch on:pinch={ handle } width={ window.innerWidth } height={ window.innerWidth }></canvas>
    <p style="position: relative; left: 0; top: 100vw; font-size: 12px; font-weight: bold">{ debug }</p>
  
  {:else}
    <input type="file" id="camera" accept="image/*" capture="application" multiple={ true } bind:files={ files }>
  
  {/if}
</div>

<style lang="sass">

  canvas
    border: 1px solid black
  


    
</style>