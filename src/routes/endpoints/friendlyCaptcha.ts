import 'dotenv/config'

/** @type {import('./__types/friendlyCaptcha').RequestHandler} */
export async function post({ request }) {

  console.log(request)
  const SECRET_KEY = process.env.FRIENDLY_CAPTCHA_SECRET_KEY

  const data = await request.json()

  let res = await fetch('https://api.friendlycaptcha.com/api/v1/siteverify',  {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${ SECRET_KEY }&response=${ data.response }`
  })
  
  const verification = await res.json()

  const errors = ''
 
  if (errors) {
    return {
      status: 400,
      body: { errors }
    };
  }
 
  return {
    status: 200,
    headers: {
      "Content-type" : "application/json",
    },
    body: verification
  };
}
