
/**
 * Prefetch equipment data for pagination without downloading the images
 */

 import { getDocs, decodeToken } from '$lib/firebase-server'
 import type { RequestHandler } from '@sveltejs/kit'
 import cookie from 'cookie'
 
 export const get: RequestHandler = async (event) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '')
  const decodedToken = await decodeToken(cookies.token)
  // console.log(cookies, decodedToken)
  if (!decodedToken) 
    return { status: 401 }
  
  // console.log(event)
  console.log(decodedToken)

  // const uid = decodedToken.businessID
  
  const docs = await getDocs('equipment', 'FH7WH4M0a8wXCghNNDmH')
  return {
    status: 200,
    body: { docs }
  }
}
