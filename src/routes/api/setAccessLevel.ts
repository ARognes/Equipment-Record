import { setAccessLevel } from '$lib/firebase-server'
import type { RequestHandler } from '@sveltejs/kit'

export const post: RequestHandler = async (event) => {
	const { accessLevel } = await event.request.json()
	console.log(accessLevel, !event?.locals?.decodedToken?.uid)
	if (!accessLevel || !event?.locals?.decodedToken?.uid) return { status: 400 }

	const complete = await setAccessLevel(event.locals.decodedToken.uid, accessLevel)

	return {
		body: { complete }
	}
}
