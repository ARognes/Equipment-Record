import 'dotenv/config'

/** @type {import('./__types/auth').RequestHandler} */
export async function post({ request }) {

  console.log(request)
  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY

  const data = await request.json()

  let res = await fetch('https://www.google.com/recaptcha/api/siteverify',  {
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
