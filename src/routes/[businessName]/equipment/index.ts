
/**
 * Prefetch equipment data for pagination without downloading the images
 */

 import { getDocs, decodeToken } from '$lib/firebase-server'
 import type { RequestHandler } from '@sveltejs/kit'
 import cookie from 'cookie'
 
 export const get: RequestHandler = async (event) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '')
  const { businessID } = await decodeToken(cookies.token)

  if (!businessID) 
    return { status: 401 }
  
  const docs = await getDocs('equipment', businessID)
  return {
    status: 200,
    body: { docs }
  }
}
