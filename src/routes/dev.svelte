

<script lang="ts">
import Button from "$lib/components/materialish/Button.svelte"
import { session } from '$app/stores'

console.log($session)

const accessLevel = async () => {
  const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({ accessLevel: 2 })
	}
  const a = await fetch('/api/setAccessLevel', options)
  const b = await a.json()
  console.log('accessLevel:', a, b)
}

const businessID = async () => {
  // const a = await setBusinessID('FH7WH4M0a8wXCghNNDmH')
  // console.log('businessID:', a)
}
  
</script>

<Button on:click={ accessLevel }>Make me an Admin!</Button>
<Button on:click={ businessID }>Update my businessID!</Button>

<style lang="sass">

</style>