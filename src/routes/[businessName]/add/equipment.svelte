<script lang="ts">
	import { onMount } from 'svelte'
  import { Motion, useMotionValue } from 'svelte-motion'

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

  let canvas, area, debug
  const canvasMargin = 40


  const dragBLX = useMotionValue(0)
  const dragBLY = useMotionValue(0)
  const dragBRX = useMotionValue(0)
  const dragBRY = useMotionValue(0)
  const dragTLX = useMotionValue(0)
  const dragTLY = useMotionValue(0)
  const dragTRX = useMotionValue(0)
  const dragTRY = useMotionValue(0)

  $: ($dragBRX || $dragBRY || $dragTLX || $dragTLY) && drag()

  function drag() {

    const rect = { top: $dragTLY, bottom: $dragBRY, left: $dragTLX, right: $dragBRX }




    // console.log(window.innerWidth + $dragX, window.innerHeight + $dragY)
    const conversion = canvas.width / window.innerWidth 
    const ctx = canvas.getContext('2d')
    // canvas.width = window.innerWidth + $dragX
    ctx.drawImage(images[0], canvasMargin / 2 * conversion, canvasMargin / 2 * conversion, canvas.width - canvasMargin * conversion, canvas.height - canvasMargin * conversion)
    ctx.fillStyle = 'black'

    
    // Top box
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width + 2, canvas.height + (rect.top - canvasMargin / 2) * conversion)
    ctx.fill()

    // Left box
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width + (rect.left - canvasMargin / 2) * conversion, canvas.height + 2)
    ctx.fill()

    // Right box
    ctx.beginPath()
    ctx.rect(canvas.width + (rect.right - canvasMargin / 2) * conversion, 0, canvas.width + 2, canvas.height + 2)
    ctx.fill()

    // Bottom Box
    ctx.beginPath()
    ctx.rect(0, canvas.height + (rect.bottom - canvasMargin / 2) * conversion, canvas.width + 2, canvas.height + 2)
    ctx.fill()

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


  let mounted = false
  onMount(() => mounted = true)

  // files is bound to image input
  // cropFiles is array of files user must crop, must be empty to continue
  let files, cropFiles = [], images = []
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

      images.push(img)
      // canvas.getContext('2d').drawImage(img, canvasMargin, canvasMargin, canvas.width - canvasMargin * 2, canvas.height - canvasMargin * 2)
      const conversion = canvas.width / window.innerWidth 
      canvas.getContext('2d').drawImage(images[0], canvasMargin * conversion / 2, canvasMargin * conversion / 2, canvas.width - canvasMargin * conversion, canvas.height - canvasMargin * conversion)

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

    <div style="width: 100vw; height: 100vw; background-color: aquamarine" bind:this={ area }>
      <canvas bind:this={ canvas } width={ window.innerWidth } height={ window.innerWidth }></canvas>
    </div>
  
    <Motion drag 
      dragConstraints={{ current:area }} 
      dragElastic={ 0 } 
      dragMomentum={ false } 
      style= { { x: dragBRX, y: dragBRY } }
      let:motion >
        <div style="touch-action: none; position: absolute; right: 0; top: calc(100vw - 40px); width: 40px; height: 40px; background-color: red" use:motion />
    </Motion>
    <Motion drag 
      dragConstraints={{ current:area }} 
      dragElastic={ 0 } 
      dragMomentum={ false } 
      style= {{ x: dragTLX, y: dragTLY }}
      let:motion >
        <div style="touch-action: none; position: absolute; right: 0; top: calc(100vw - 40px); width: 40px; height: 40px; background-color: blue" use:motion />
    </Motion>

  {:else}
    <input type="file" id="camera" accept="image/*" capture="application" multiple={ true } bind:files={ files }>
  
  {/if}

</div>

<style lang="sass">

  canvas
    border: 1px solid black
  


    
</style>