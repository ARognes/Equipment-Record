import 'dotenv/config'

export let FRIENDLY_CAPTCHA_SECRET_KEY: string = process.env['FRIENDLY_CAPTCHA_SECRET_KEY']

export let RECAPTCHA_SECRET_KEY: string = process.env['RECAPTCHA_SECRET_KEY']

export let FIREBASE_PROJECT_ID: string = process.env['FIREBASE_PROJECT_ID']