import { initializeApp } from "firebase/app"

const privateKey = JSON.parse(import.meta.env.VITE_CLIENT_PRIVATE_KEY)

export const app = initializeApp(privateKey)
