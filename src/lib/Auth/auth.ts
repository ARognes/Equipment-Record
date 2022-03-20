import { readable } from 'svelte/store'
import { browser } from '$app/env'
import type { Auth, User } from "firebase/auth"

const createAuth = () => {
  let auth: Auth

  const { subscribe } = readable<User>(undefined, set => {
    let unsubscribe = () => {}

    (async () => {

      // Send auth to browser
      // $: $auth  <- use to access from client ts
      if (browser) {
        const { app } = await import('../app')
        const { getAuth, onAuthStateChanged } = await import('firebase/auth')
        auth = getAuth(app)

        unsubscribe = onAuthStateChanged(auth, set)

      } else set(null)
    })()

    return unsubscribe
  })

  async function register(username: string, email: string, password: string) {
    const { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } = await import('firebase/auth')
    const { getDoc, doc, setDoc, serverTimestamp, getFirestore } = await import('firebase/firestore/lite')
    const { app } = await import('../app')
    
    // Get captcha
    // if (!grecaptcha.getResponse().length) return errorLog.innerText = 'Please verify with reCAPTCHA'
    
    const db = getFirestore(app)
    const userRef = doc(db, 'users', username)
    const userDoc = await getDoc(userRef)
    if (userDoc.exists()) return

    await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, { displayName: username })
    await sendEmailVerification(auth.currentUser)

    // Create user in firestore
    await setDoc(userRef, {
      businessID: '',
      businessName: '',
      uid: auth.currentUser.uid,
      email: auth.currentUser.email,
      phone: null,
      createdAt: serverTimestamp()
    })
  }

  async function signInGoogle() {
    const { setPersistence, browserLocalPersistence, signInWithRedirect, GoogleAuthProvider } = await import('firebase/auth')

    await setPersistence(auth, browserLocalPersistence)

    await signInWithRedirect(auth, new GoogleAuthProvider())
  }

  async function signInEmail(email: string, password: string) {
    const { setPersistence, browserLocalPersistence, signInWithEmailAndPassword } = await import('firebase/auth')

    await setPersistence(auth, browserLocalPersistence)

    await signInWithEmailAndPassword(auth, email, password)
  }

  async function signInUsername(username: string, password: string) {
    const { setPersistence, browserLocalPersistence, signInWithEmailAndPassword } = await import('firebase/auth')
    const { getDoc, doc, getFirestore } = await import('firebase/firestore/lite')
    const { app } = await import('../app')

    // Filter parameters
    if (!username || username.length < 2 || !password || password.length < 12) return

    // Get user from firestore
    const db = getFirestore(app)
    const userDoc = await getDoc(doc(db, 'users', username))
    if (!userDoc.exists()) return

    // Get user's email
    const email = userDoc?.data()?.email

    if (!email || email.length < 3) return

    await setPersistence(auth, browserLocalPersistence)
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function signOut() {
    const { signOut } = await import('firebase/auth')
    await signOut(auth)
  }

  return {
    subscribe,
    register,
    signInGoogle,
    signInEmail,
    signInUsername,
    signOut
  }
}

export const auth = createAuth()
