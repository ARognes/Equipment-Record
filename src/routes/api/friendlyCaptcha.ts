import { FRIENDLY_CAPTCHA_SECRET_KEY } from '$lib/constants-server'
import type { RequestHandler } from '@sveltejs/kit'
import 'dotenv/config'


export const post: RequestHandler = async ({ request }) => {

  try {
    const data = await request.json()


    let res = await fetch('https://api.friendlycaptcha.com/api/v1/siteverify',  {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: `{"solution":"${ data.solution }", "secret": "${ FRIENDLY_CAPTCHA_SECRET_KEY }", "sitekey": "${ data.sitekey }"}`
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
