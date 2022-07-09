
<script context="module" lang="ts">
  export function load({ error, status }) {
      return {
          props: {
             status: status,
             message: error.message
          }
      }
  }
</script>

<script lang="ts">

  export let status, message
  
</script>

<h1>Error: { status }</h1>
<p>{ message }</p>

<style lang="sass">

</style>
