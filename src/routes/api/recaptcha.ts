import { RECAPTCHA_SECRET_KEY } from '$lib/constants-server'
import type { RequestHandler } from '@sveltejs/kit'
import 'dotenv/config'


export const post: RequestHandler = async ({ request }) => {

  try {

    const { response } = await request.json()
    console.log(response, RECAPTCHA_SECRET_KEY)

    let res = await fetch('https://www.google.com/recaptcha/api/siteverify',  {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: `{"response":"${ response }", "secret": "${ RECAPTCHA_SECRET_KEY }"}`
    })
    
    const verification = await res.json()

    return {
      status: 200,
      headers: {
        "Content-type" : "application/json",
      },
      body: verification
    }

  } catch(e) {
    return {
      status: 400,
      body: { e }
    }
  }
}
