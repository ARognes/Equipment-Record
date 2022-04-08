<script lang='ts'>
</script>

<div class="lds-ring"><div></div><div></div><div></div><div></div></div>

<style lang="sass">

$color: #44f
$size: 60px
$border: 6px

.lds-ring 
  display: block
  position: relative
  left: calc(50% - $size / 2)
  top: calc(50% - $size / 2)
  width: $size
  height: $size
  margin: 0

  div 
    box-sizing: border-box
    display: block
    position: absolute
    width: $size
    height: $size
    margin: 0
    border: $border solid #fff
    border-radius: 50%
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite
    border-color: $color transparent transparent transparent
    &:nth-child(1) 
        animation-delay: -0.45s
      
    &:nth-child(2) 
        animation-delay: -0.3s
      
    &:nth-child(3) 
        animation-delay: -0.15s

@keyframes lds-ring 
  100% 
    transform: rotate(360deg)

</style>
