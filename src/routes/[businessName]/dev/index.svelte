<script lang="ts">
import Button from "$lib/components/materialish/Button.svelte"
import { session } from '$app/stores'
console.log($session)

const accessLevel = async () => {
	const updateElement: UpdateCustomUserClaimElement = { name: 'accessLevel', value: 2 }
  const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(updateElement)
	}
  const a = await fetch('/api/setCustomUserClaims', options)
  const b = await a.json()
  console.log('accessLevel:', a, b)
}

const businessID = async () => {
	const updateElement: UpdateCustomUserClaimElement = { name: 'businessID', value: 'FH7WH4M0a8wXCghNNDmH' }
  const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(updateElement)
	}
  const a = await fetch('/api/setCustomUserClaims', options)
  const b = await a.json()
  console.log('businessID:', a, b)
}
  
</script>

<Button on:click={ accessLevel }>Make me an Admin!</Button>
<Button on:click={ businessID }>Update my businessID!</Button>

<style lang="sass">

</style>