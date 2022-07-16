import { setCustomUserClaims } from '$lib/firebase-server'
import type { RequestHandler } from '@sveltejs/kit'

export const post: RequestHandler = async (event) => {
	const updateElement: UpdateCustomUserClaimElement = await event.request.json()
	if (!updateElement || !event?.locals?.decodedToken?.uid) return { status: 400 }

	const result = await setCustomUserClaims(event.locals.decodedToken.uid, updateElement)

	return {
		body: { result }
	}
}
