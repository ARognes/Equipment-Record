import * as cookie from 'cookie'
import { UNPROTECTED_PAGES, FIREBASE_CLIENT_CONFIG } from '$lib/constants-clients'
import { decodeToken } from '$lib/firebase-server'
import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import type { GetSession, Handle } from '@sveltejs/kit'


export const getSession: GetSession = async (event) => {
	const locals = event.locals
	const decodedToken: DecodedIdToken | null = locals.decodedToken
	console.log('session decoded token', event.locals.decodedToken)

	if (decodedToken) {
		const { uid, name, email } = decodedToken
		return {
			user: { name: name || null, email: email || null, uid, claims: null },
			firebaseClientConfig: FIREBASE_CLIENT_CONFIG
		}
	}

	return { user: undefined, firebaseClientConfig: FIREBASE_CLIENT_CONFIG }
}


export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '')
	event.locals.decodedToken = await decodeToken(cookies.token)
	const response = await resolve(event)
	console.log('handle decode token', event.locals.decodedToken)
	// Trying to access a protected page directly, send them to the 403
	if (!event.locals.decodedToken && !UNPROTECTED_PAGES.has(event.url.pathname)) {
		response.headers.set('Location', '/403')
		response.headers.set('status', '403')
	}

	return response
}
