import { RECAPTCHA_SITE_KEY } from '$lib/constants-clients'


export default async function recaptcha(host: string, action: string) {

  const verification = await new Promise(res => 
    grecaptcha.ready(() => {
      grecaptcha.execute(RECAPTCHA_SITE_KEY, { action }).then(async token => {
          let verificationRes = await fetch(`//${ host }/api/recaptcha`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: `{"response":"${ token }"}`
          })

          const verification = await verificationRes.json()
          res(verification)
      })
    }))
    
  return verification && verification.success && verification.score >= 0.5 && verification.action === action
}