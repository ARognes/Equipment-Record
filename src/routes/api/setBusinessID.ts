import { setBusinessID } from '$lib/firebase-server'
import type { RequestHandler } from '@sveltejs/kit'

export const post: RequestHandler = async (event) => {
	const { businessID } = await event.request.json()
	if (!businessID || !event?.locals?.decodedToken?.uid) return { status: 400 }

	const complete = await setBusinessID(event.locals.decodedToken.uid, businessID)

	return {
		body: { complete }
	}
}
