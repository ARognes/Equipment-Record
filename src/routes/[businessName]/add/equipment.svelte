<script lang="ts">

  import RangeSlider from 'svelte-range-slider-pips'
  import { blobToImage, canvasToBlob, compress } from '$lib/imageProcessing'

  let imageBlobs = []

  const SMALL_COMPRESSION_PERCENTAGE = 0.9;
  const SMALL_COMPRESSION_MAX_SIZE = 1200;

  const TINY_COMPRESSION_PERCENTAGE = 0.6;
  const TINY_COMPRESSION_MAX_SIZE = 200;

  let canvas, canvasOverlay
  const canvasMargin = 20 
  const dragBoxHalfWidth = canvasMargin / 2

  const constraints = { top: dragBoxHalfWidth, left: dragBoxHalfWidth, bottom: 0, right: 0 } 
  let selection = { upDown: 0, leftRight: 0, moving: false, reset: () => selection = { upDown: 0, leftRight: 0, moving: false, reset: selection.reset } }
  let pointerOffset = { x: 0, y: 0 }

  const within = (pos, start, end) => pos >= start - dragBoxHalfWidth && pos < end + dragBoxHalfWidth
  const onBoundary = (pos, boundary, dist=dragBoxHalfWidth) => Math.abs(boundary - pos) < dist

  function pointerDown(e) {

    if (selection.upDown !== 0 || selection.leftRight !== 0 || selection.moving === true) return  // Already touched

    const x = e.x
    const y = e.y

    const withinX = within(x, constraints.left, constraints.right)
    const withinY = within(y, constraints.top, constraints.bottom)
    const onTop = onBoundary(y, constraints.top)
    const onBottom = onBoundary(y, constraints.bottom)
    const onLeft = onBoundary(x, constraints.left)
    const onRight = onBoundary(x, constraints.right)

    // On boundary
    if (withinX) selection.upDown = +onTop - +onBottom
    if (withinY) selection.leftRight = +onLeft - +onRight

    // Close to corner box
    let cornerSelection = { upDown: 0, leftRight: 0 }
    if (onBoundary(y, constraints.top, dragBoxHalfWidth * 3)) {
      if (onBoundary(x, constraints.left, dragBoxHalfWidth * 3)) cornerSelection = { upDown: 1, leftRight: 1 }
      else if (onBoundary(x, constraints.right, dragBoxHalfWidth * 3)) cornerSelection = { upDown: 1, leftRight: -1 }
    }
    if (onBoundary(y, constraints.bottom, dragBoxHalfWidth * 3)) {
      if (onBoundary(x, constraints.left, dragBoxHalfWidth * 3)) cornerSelection = { upDown: -1, leftRight: 1 }
      else if (onBoundary(x, constraints.right, dragBoxHalfWidth * 3)) cornerSelection = { upDown: -1, leftRight: -1 }
    }
    if (cornerSelection.upDown !== 0 && cornerSelection.leftRight !== 0) { 
      selection.upDown = cornerSelection.upDown
      selection.leftRight = cornerSelection.leftRight
    }
    
    // Within area, but not on boundary
    if (withinX && withinY && !selection.upDown && !selection.leftRight) selection.moving = true
    else if (selection.upDown || selection.leftRight) {
      pointerOffset.x = selection.leftRight === 1 ? constraints.left - x : constraints.right - x
      pointerOffset.y = selection.upDown === 1 ? constraints.top - y : constraints.bottom - y
    }

    drag(e)
  }

  function drag(e) {

    // No touch being tracked
    if (selection.upDown === 0 && selection.leftRight === 0 && selection.moving === false) return
    console.log('drag')

    const x = e.x + pointerOffset.x, y = e.y + pointerOffset.y

    
    if (selection.moving) { // Translate entire selection
      selection.moving = true
      let moveX = e.movementX / window.devicePixelRatio, moveY = e.movementY / window.devicePixelRatio

      if (constraints.left + moveX < dragBoxHalfWidth) moveX -= constraints.left + moveX - dragBoxHalfWidth
      else if (constraints.right + moveX >= canvasOverlay.width - dragBoxHalfWidth) moveX -= (constraints.right + moveX) - canvasOverlay.width + dragBoxHalfWidth
      if (constraints.top + moveY < dragBoxHalfWidth) moveY -= constraints.top + moveY - dragBoxHalfWidth
      else if (constraints.bottom + moveY >= canvasOverlay.height - dragBoxHalfWidth) moveY -= (constraints.bottom + moveY) - canvasOverlay.height + dragBoxHalfWidth

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
    constraints.bottom = Math.min(constraints.bottom, canvasOverlay.height - dragBoxHalfWidth)
    constraints.left = Math.max(constraints.left, dragBoxHalfWidth)
    constraints.right = Math.min(constraints.right, canvasOverlay.width - dragBoxHalfWidth)

    // Clamp inner area
    const spaceBetweenDragBox = canvasMargin * 2
    if (selection.upDown == 1) constraints.top = Math.min(constraints.top, constraints.bottom - spaceBetweenDragBox)
    else if (selection.upDown == -1) constraints.bottom = Math.max(constraints.bottom, constraints.top + spaceBetweenDragBox)
    if (selection.leftRight == 1) constraints.left = Math.min(constraints.left, constraints.right - spaceBetweenDragBox)
    else if (selection.leftRight == -1) constraints.right = Math.max(constraints.right, constraints.left + spaceBetweenDragBox)

    drawConstraints()
  }

  function drawConstraints() {
    const ctx = canvasOverlay.getContext('2d')
    ctx.clearRect(0, 0, canvasOverlay.width, canvasOverlay.height)

    ctx.fillStyle = 'black'
    const constraintsArr = Object.values(constraints)
    for (let i in constraintsArr) {  // Draw cropped out area
      ctx.beginPath()
      ctx.rect( +i == 3 ? constraints.right - dragBoxHalfWidth : 0, 
                +i == 2 ? constraints.bottom - dragBoxHalfWidth : 0, 
                +i == 1 ? constraints.left + dragBoxHalfWidth : canvasOverlay.width + 2, 
                +i == 0 ? constraints.top + dragBoxHalfWidth : canvasOverlay.height + 2) 
      ctx.fill()
    }


    for (let i in constraintsArr) {   // Draw corner boxes

      // const horizontal = selection.leftRight === (2 - ((+i % 2) * 2 + 1))
      // const vertical = selection.upDown === (1 - (Math.floor(+i / 2) * 2))
      // console.log(horizontal, vertical)
      // ctx.fillStyle = horizontal && vertical ? '#00f' : '#888'
      ctx.fillStyle = '#888'
      ctx.beginPath()
      ctx.rect(constraintsArr[(+i % 2) * 2 + 1] - dragBoxHalfWidth, 
               constraintsArr[Math.floor(+i / 2) * 2] - dragBoxHalfWidth, 
               dragBoxHalfWidth * 2, 
               dragBoxHalfWidth * 2) 
      ctx.fill()

      ctx.fillStyle = 'black'
      ctx.beginPath()
      ctx.rect(constraintsArr[(+i % 2) * 2 + 1] - dragBoxHalfWidth / 2, 
               constraintsArr[Math.floor(+i / 2) * 2] - dragBoxHalfWidth / 2, 
               dragBoxHalfWidth, 
               dragBoxHalfWidth) 
      ctx.fill()

      ctx.fillStyle = '#888'
      ctx.beginPath()
      ctx.rect( +i % 2 == 1 ? +i == 1 ? constraints.left - dragBoxHalfWidth / 4 : constraints.right - dragBoxHalfWidth / 4 : (constraints.left + constraints.right) / 2 - dragBoxHalfWidth, 
                +i % 2 == 0 ? +i == 0 ? constraints.top - dragBoxHalfWidth / 4 : constraints.bottom - dragBoxHalfWidth / 4 : (constraints.top + constraints.bottom) / 2 - dragBoxHalfWidth, 
                +i % 2 == 1 ? dragBoxHalfWidth / 2 : dragBoxHalfWidth * 2, 
                +i % 2 == 0 ? dragBoxHalfWidth / 2 : dragBoxHalfWidth * 2) 
      ctx.fill()
    }
  }

  // files is bound to image input
  let files = null, filePtr = -1
  $: if (files?.length) {
    filePtr = files.length-1
    loadImage()
  }

  // Make user wait until this is complete to add to firestore!
  async function loadImage() {
    if (!files.length || filePtr < 0) {
      
      return console.log('All images done')
    }
    
    // Load first canvas image
    try {
      const img = await blobToImage(files[filePtr])

      constraints.right = canvasOverlay.width - dragBoxHalfWidth
      constraints.bottom = canvasOverlay.height - dragBoxHalfWidth
      const imgWidth = img.naturalWidth, imgHeight = img.naturalHeight

      canvas.width = canvas.height = Math.max(imgWidth, imgHeight)


      // const imgConversion = canvas.width / imgMax
      const conversion = canvas.width / window.innerWidth
      const ctx = canvas.getContext('2d')

      const wgh = imgWidth > imgHeight
      const imgWidthMargin = imgWidth - canvasMargin * conversion * 2
      const imgHeightMargin = imgHeight - canvasMargin * conversion * 2

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 
                    !wgh ? canvas.width / 2 - imgWidth / 2 + canvasMargin * conversion : canvasMargin * conversion,
                    wgh ? canvas.width / 2 - imgHeight / 2 + canvasMargin * conversion : canvasMargin * conversion,
                    wgh ? imgWidthMargin : imgWidth / imgHeightMargin * imgHeight, 
                    !wgh ? imgHeight / imgWidthMargin * imgWidth : imgHeightMargin)

      drawConstraints()
    }
    catch (error) { console.error(error) }
  }

  let values = [ 0 ]
  $: if (canvas?.style) canvas.style.transform = `rotate(${ values[0] }deg)`


  async function submit() {

    const rotateCanvas = document.createElement('canvas')
    rotateCanvas.width = canvas.width
    rotateCanvas.height = canvas.height
    const rotateCtx = rotateCanvas.getContext('2d')
    
    rotateCtx.save()
    rotateCtx.translate(canvas.width / 2, canvas.height / 2)
    rotateCtx.rotate(values[0] * Math.PI / 180)
    rotateCtx.clearRect(0, 0, rotateCanvas.width, rotateCanvas.height)
    rotateCtx.drawImage(canvas, -canvas.width / 2, -canvas.width / 2)
    rotateCtx.restore()
    

    // Constraints
    const tempCanvas = document.createElement('canvas')
    const tempCtx = tempCanvas.getContext('2d')
    const conversion = canvas.width / window.innerWidth
    tempCanvas.width = (constraints.right - constraints.left - dragBoxHalfWidth * 2) * conversion
    tempCanvas.height = (constraints.bottom - constraints.top - dragBoxHalfWidth * 2) * conversion
    const data = rotateCtx.getImageData((constraints.left + dragBoxHalfWidth) * conversion, (constraints.top + dragBoxHalfWidth) * conversion, tempCanvas.width, tempCanvas.height)

    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height)
    tempCtx.putImageData(data, 0, 0)
    tempCtx.restore()
    

    const blob = await canvasToBlob(tempCanvas)

    const smallImgBlob: Blob = await compress(blob, SMALL_COMPRESSION_PERCENTAGE, SMALL_COMPRESSION_MAX_SIZE)
    const tinyImgBlob: Blob = await compress(blob, TINY_COMPRESSION_PERCENTAGE, TINY_COMPRESSION_MAX_SIZE)

    imageBlobs.push({ small: smallImgBlob, tiny: tinyImgBlob })

    filePtr--
    console.log(filePtr)
    loadImage()
  }

</script>


<div>

  {#if filePtr >= 0 }

    <div id="image-area">
      <canvas bind:this={ canvas } width={ window.innerWidth } height={ window.innerWidth }></canvas><!--
      --><canvas bind:this={ canvasOverlay } 
          id="canvas-overlay"
          on:pointerdown={ pointerDown } 
          on:pointermove={ drag } 
          on:pointerup={ selection.reset } 
          on:pointerout={ selection.reset } 
          on:pointercancel={ selection.reset } 
          width={ window.innerWidth } 
          height={ window.innerWidth }></canvas>
    </div>

    <div id="body">
      <RangeSlider bind:values min={ -180 } max={ 180 } float pips pipstep={ 45 } all={ 'label' } suffix={'º'} springValues={ { stiffness: 0.3, damping: 1 } } />

      <button on:click={ submit }>Crop</button>
    </div>
  {:else}
    <input type="file" id="camera" accept="image/*" capture="application" multiple={ true } bind:files={ files }>
  
  {/if}

</div>

<style lang="sass">

  canvas, #image-area, #canvas-overlay
    position: absolute
    left: 0
    top: 0
    width: 100vw
    height: 100vw
    touch-action: none

  #image-area
    background-color: black


  #body
    position: absolute
    left: 0
    top: 100vw
    width: 100vw
    height: calc(100vh - 100vw - 60px)
    background-color: white
    
</style>