<script lang="ts">
import Button from "$lib/components/materialish/Button.svelte"
import { session } from '$app/stores'
import { saveDoc } from "$lib/firebase-client";
import { DocumentModel } from "$lib/models/DocumentModels";
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

const subCol = async () => {
	const example = {
		id: 'rsdrsdvrcsc',
		data: () => { return {
			_collectionPath: 'businesses/FH7WH4M0a8wXCghNNDmH/equipment', 
			name: 'Another test!',
			attributes: [
				{ key: 'price', value: 'free' },
				{ key: 'color', value: 'blue' }
			]
		}}
	}
	await saveDoc(new DocumentModel(example))
}
  
</script>

<Button on:click={ accessLevel }>Make me an Admin!</Button>
<Button on:click={ businessID }>Update my businessID!</Button>
<Button on:click={ subCol }>Create a subCollection!</Button>

<style lang="sass">

</style>