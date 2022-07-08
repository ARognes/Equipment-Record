import * as cookie from 'cookie'
import { UNPROTECTED_PAGES } from '$lib/constants-clients'
import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import type { GetSession, Handle } from '@sveltejs/kit'
import { browser } from '$app/env'


export const getSession: GetSession = async (event) => {
	const locals = event.locals
	const decodedToken: DecodedIdToken | null = locals.decodedToken

	if (decodedToken && !browser) {
		const { uid, name, email, accessLevel } = decodedToken
		const { getDoc } = await import('$lib/firebase-server')
		const userDoc = await getDoc('users', name)

		return {
			user: { name, email, uid, accessLevel, businessName: userDoc?.businessName, businessID: userDoc?.businessID }
		}
	}

	return { user: undefined }
}


export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '')

	if (!browser) return await resolve(event)
	const { decodeToken } = await import('$lib/firebase-server')
	event.locals.decodedToken = await decodeToken(cookies.token)

	const response = await resolve(event)

	// Trying to access a protected page directly while not logged in, send to login
	if (!event.locals.decodedToken && !UNPROTECTED_PAGES.has(event.url.pathname)) {
		response.headers.set('Location', '/login')
		response.headers.set('status', '302')
	}

	return response
}
