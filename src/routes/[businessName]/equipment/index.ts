
/**
 * Prefetch equipment data for pagination without downloading the images
 */

 import { getDocs, decodeToken } from '$lib/firebase-server'
 import type { RequestHandler } from '@sveltejs/kit'
 import cookie from 'cookie'
 
 export const get: RequestHandler = async (event) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '')
  const decodedToken = await decodeToken(cookies.token)
  if (!decodedToken) 
    return { status: 401 }
  
  console.log(event)
  console.log(decodedToken)

  const uid = decodedToken.uid
  console.log(uid)
  
  const docs = await getDocs('equipment', 'businessID')
  return {
    status: 200,
    body: JSON.stringify(docs)
  }
}
