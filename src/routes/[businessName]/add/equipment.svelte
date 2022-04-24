<script lang="ts">
	import { onMount } from 'svelte'

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

  let canvas, canvasOverlay, debug
  const canvasMargin = 60 // Also drag box width/2
  const dragBoxHalfWidth = canvasMargin / 2

  const constraints = { top: dragBoxHalfWidth, left: dragBoxHalfWidth, bottom: 0, right: 0 } 
  let selection = { upDown: 0, leftRight: 0, moving: false, reset: () => {  selection = { upDown: 0, leftRight: 0, moving: false, reset: selection.reset } } }

  const within = (pos, start, end) => pos >= start - dragBoxHalfWidth && pos < end + dragBoxHalfWidth
  const onBoundary = (pos, boundary) => pos >= boundary - dragBoxHalfWidth && pos < boundary + dragBoxHalfWidth


  function pointerDown(e) {
    console.log('arst', e)

    if (selection.upDown !== 0 || selection.leftRight !== 0 || selection.moving === true) return  // Already touched

    const conversion = canvas.width / window.innerWidth 
    const x = e.x * conversion
    const y = e.y * conversion

    const withinX = within(x, constraints.left, constraints.right)
    const withinY = within(y, constraints.top, constraints.bottom)
    const onTop = onBoundary(y, constraints.top)
    const onBottom = onBoundary(y, constraints.bottom)
    const onLeft = onBoundary(x, constraints.left)
    const onRight = onBoundary(x, constraints.right)

    // On boundary
    if (withinX) selection.upDown = +onTop - +onBottom
    if (withinY) selection.leftRight = +onLeft - +onRight
    
    // Within area, but not on boundary
    if (withinX && withinY && !selection.upDown && !selection.leftRight) selection.moving = true

    drag(e)
  }

  function drag(e) {

    // No touch being tracked
    if (selection.upDown === 0 && selection.leftRight === 0 && selection.moving === false) return
    console.log('drag')

    const conversion = canvas.width / window.innerWidth 
    const x = e.x * conversion
    const y = e.y * conversion

    
    if (selection.moving) { // Translate entire selection
      selection.moving = true
      let moveX = e.movementX, moveY = e.movementY

      if (constraints.left + moveX < dragBoxHalfWidth) moveX -= constraints.left + moveX - dragBoxHalfWidth
      else if (constraints.right + moveX >= canvas.width - dragBoxHalfWidth) moveX -= (constraints.right + moveX) - canvas.width + dragBoxHalfWidth
      if (constraints.top + moveY < dragBoxHalfWidth) moveY -= constraints.top + moveY - dragBoxHalfWidth
      else if (constraints.bottom + moveY >= canvas.height - dragBoxHalfWidth) moveY -= (constraints.bottom + moveY) - canvas.height + dragBoxHalfWidth

      constraints.left += moveX
      constraints.right += moveX
      constraints.top += moveY
      constraints.bottom += moveY

    } else {  // Translate box or edge
      if (selection.upDown == 1) constraints.top = y
      else if (selection.upDown == -1) constraints.bottom = y
      if (selection.leftRight == 1) constraints.left = x
      else if (selection.leftRight == -1) constraints.right = x
    }

    // Clamp outer constraints
    constraints.top = Math.max(constraints.top, dragBoxHalfWidth)
    constraints.bottom = Math.min(constraints.bottom, canvas.height - dragBoxHalfWidth)
    constraints.left = Math.max(constraints.left, dragBoxHalfWidth)
    constraints.right = Math.min(constraints.right, canvas.width - dragBoxHalfWidth)

    // Clamp inner area
    const spaceBetweenDragBox = canvasMargin * 2
    if (selection.upDown == 1) constraints.top = Math.min(constraints.top, constraints.bottom - spaceBetweenDragBox)
    else if (selection.upDown == -1) constraints.bottom = Math.max(constraints.bottom, constraints.top + spaceBetweenDragBox)
    if (selection.leftRight == 1) constraints.left = Math.min(constraints.left, constraints.right - spaceBetweenDragBox)
    else if (selection.leftRight == -1) constraints.right = Math.max(constraints.right, constraints.left + spaceBetweenDragBox)

    drawConstraints()
  }

  function drawConstraints() {
    // console.log(constraints)
    const ctx = canvasOverlay.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = 'black'
    const constraintsArr = Object.values(constraints)
    for (let i in constraintsArr) {  // Draw cropped out area
      ctx.beginPath()
      ctx.rect( +i == 3 ? constraints.right - dragBoxHalfWidth : 0, 
                +i == 2 ? constraints.bottom - dragBoxHalfWidth : 0, 
                +i == 1 ? constraints.left + dragBoxHalfWidth : canvas.width + 2, 
                +i == 0 ? constraints.top + dragBoxHalfWidth : canvas.height + 2) 
      ctx.fill()
    }
    ctx.fillStyle = '#888'
    ctx.strokeStyle = '#888'
    ctx.lineWidth = 12
    for (let i in constraintsArr) {   // Draw corner boxes
      ctx.beginPath()
      ctx.rect(constraintsArr[(+i % 2) * 2 + 1] - dragBoxHalfWidth, 
               constraintsArr[Math.floor(+i / 2) * 2] - dragBoxHalfWidth, 
               dragBoxHalfWidth * 2, 
               dragBoxHalfWidth * 2) 
      ctx.stroke()

      ctx.beginPath()
      ctx.rect( +i % 2 == 1 ? +i == 1 ? constraints.left - dragBoxHalfWidth / 4 : constraints.right - dragBoxHalfWidth / 4 : (constraints.left + constraints.right) / 2 - dragBoxHalfWidth, 
                +i % 2 == 0 ? +i == 0 ? constraints.top - dragBoxHalfWidth / 4 : constraints.bottom - dragBoxHalfWidth / 4 : (constraints.top + constraints.bottom) / 2 - dragBoxHalfWidth, 
                +i % 2 == 1 ? dragBoxHalfWidth / 2 : dragBoxHalfWidth * 2, 
                +i % 2 == 0 ? dragBoxHalfWidth / 2 : dragBoxHalfWidth * 2) 
      ctx.fill()
    }
  }

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
      canvas.width = canvasOverlay.width = img.naturalWidth
      canvas.height = canvasOverlay.height = img.naturalHeight
      if (aspectRatio >= 1) {
        canvasStyleWidth = window.innerWidth
        canvasStyleHeight = img.naturalHeight * window.innerWidth / img.naturalWidth
      }
      else {
        canvasStyleWidth = aspectRatio * window.innerWidth
        canvasStyleHeight = window.innerWidth
      }
      canvas.style = `position: absolute; left: 0; top: 0; width: ${ canvasStyleWidth }px; height: ${ canvasStyleHeight }px;`
      canvasOverlay.style = `position: absolute; left: 0; top: 0; width: ${ canvasStyleWidth }px; height: ${ canvasStyleHeight }px;`

      images.push(img)
      constraints.right = canvas.width - dragBoxHalfWidth
      constraints.bottom = canvas.height - dragBoxHalfWidth
      canvas.getContext('2d').drawImage(images[0], canvasMargin, canvasMargin, canvas.width - canvasMargin * 2, canvas.height - canvasMargin * 2)
      drawConstraints()
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

    <canvas bind:this={ canvas } width={ window.innerWidth } height={ window.innerWidth }></canvas><!--
    --><canvas bind:this={ canvasOverlay } 
        on:pointerdown={ pointerDown } 
        on:pointermove={ drag } 
        on:pointerup={ selection.reset } 
        on:pointerout={ selection.reset } 
        on:pointercancel={ selection.reset } 
        width={ window.innerWidth } 
        height={ window.innerWidth }></canvas>

  {:else}
    <input type="file" id="camera" accept="image/*" capture="application" multiple={ true } bind:files={ files }>
  
  {/if}

</div>

<style lang="sass">

  canvas
    border: 1px solid black
  


    
</style>