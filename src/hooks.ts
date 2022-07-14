import * as cookie from 'cookie'
import { UNPROTECTED_PAGES } from '$lib/constants-clients'
import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import type { GetSession, Handle } from '@sveltejs/kit'
import { getDoc, decodeToken } from '$lib/firebase-server'
import { browser } from '$app/env'

// request -> handle() -> stuff -> endpoint -> stuff -> getSession() -> client (I think)



export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '')
	// console.log('ct->', cookies)
	event.locals.decodedToken = await decodeToken(cookies.token)
	const response = await resolve(event)
	// console.log(event.locals.decodedToken)
	// console.log(event.request.headers)
	return response
}


export const getSession: GetSession = async (event) => {
	const locals = event.locals
	const decodedToken: DecodedIdToken | null = locals.decodedToken

	if (decodedToken && !browser) {
		console.log('Getting session')
		console.log(decodedToken)
		const { uid, name, email, accessLevel, businessID } = decodedToken
		// const userDoc = await getDoc('users', name)
		console.log('al', accessLevel)
		return {
			user: { name, email, uid, accessLevel, businessID }
			// user: { name, email, uid, accessLevel, businessName: userDoc?.businessName, businessID: userDoc?.businessID }
		}
	}

	return { user: undefined }
}


// export const handle: Handle = async ({ event, resolve }) => {
// 	const cookies = cookie.parse(event.request.headers.get('cookie') || '')
// 	event.locals.decodedToken = await decodeToken(cookies.token)
// 	const response = await resolve(event)

// 	// console.log('ha lang="tsndle')
// 	// Trying to access a protected page directly while not logged in, send to login
// 	if (!event.locals.decodedToken) {
// 		if (!UNPROTECTED_PAGES.has(event.url.pathname)) 
// 		response.headers.set('Location', '/login')
// 		response.headers.set('status', '302')
// 		// return response
// 			// return Response.redirect(`${ event.url.origin }/login`, 302)
// 	}
// 	// else {	// Trying to login while logged in? Send them in
// 	// 	if (new Set(['/login', '/register']).has(event.url.pathname))
// 	// 		return Response.redirect(`${ event.url.origin }/on/home`, 302)
// 	// }

// 	return response
// }
