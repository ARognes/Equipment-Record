<script lang="ts">
  export let info

</script>

<div>
  <p>{ info?.name }</p>
  <p>{ info?.id }</p>
</div>

<style lang="sass">
div
  position: relative
  display: block
  margin: 0 0 2px 0
  left: 0
  width: 100%
  height: 60px
  background-color: #eee

</style>
