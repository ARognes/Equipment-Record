import type { FirebaseOptions } from 'firebase/app'

export const UNPROTECTED_PAGES: Set<string> = new Set(['/', '/register', '/forgot'])

export const FRIENDLY_CAPTCHA_SITE_KEY: string = (import.meta.env.VITE_FRIENDLY_CAPTCHA_SITE_KEY || '').toString()

export const FIREBASE_CLIENT_CONFIG: FirebaseOptions = JSON.parse((import.meta.env.VITE_FIREBASE_CONFIG || '').toString())
