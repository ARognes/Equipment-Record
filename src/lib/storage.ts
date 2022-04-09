import { browser } from '$app/env'


export let session, local

session = {
  getItem(a) {},
  setItem(a, b) {},
  removeItem(a) {},
  getItemFromPattern(a) {},
  removeItemFromPattern(a) {},
  key(a) {},
  clear() {},
  encryptString(a) {},
  decryptString(a) {},
  length: 0,
}

local = {
  getItem(a) {},
  setItem(a, b) {},
  removeItem(a) {},
  getItemFromPattern(a) {},
  removeItemFromPattern(a) {},
  key(a) {},
  clear() {},
  encryptString(a) {},
  decryptString(a) {},
  length: 0,
}

init()

async function init() {

  if (!browser) return
    
  const Encrypt = await import('encrypt-storage')

  session = new Encrypt.EncryptStorage('#@$3pt343g2Gtt33342g34J%g234p23d^L7685&Y76u&^$6j$234p@245%6l4^l65j$%', {
    prefix: 'ERS',
    storageType: 'sessionStorage',
  })

  local = new Encrypt.EncryptStorage('twDG%^%U*I)^&&#@4t1fspfb*&E&*(I68en46245t1fsqwTHJ$^N*&^(*(E567h35g234', {
    prefix: 'ERL',
    storageType: 'localStorage',
  })
}


// Apapted from https://fractils.fractal-hq.com/#localStorageStore
// who adapted from https://svelte.dev/repl/7b4d6b448f8c4ed2b3d5a3c31260be2a?version=3.34.0
/**
 *
 * A Svelte store that uses session to store data.
 * @param key - The key to store the data under.
 * @param value - The initial value of the store.
 * @returns a writable store.
 * @example
 * const store = sessionStorage('foo', 'bar')
 */
// export const sessionStorage = <T = any>(key: string, value: T): Writable<T> => {
// 	const { set: setStore, ...readableStore } = writable(value, () => {
// 		if (!browser) return

// 		getAndSetFromSession()

// 		const updateFromStorageEvents = (e: StorageEvent) => {
// 			if (e.key === key) getAndSetFromSession()
// 		}

// 		window.addEventListener('storage', updateFromStorageEvents)
// 		return () => window.removeEventListener('storage', updateFromStorageEvents)
// 	})

// 	//? Set both session and this Svelte store
// 	const set = (value: T) => {
//     console.log('set happened')
// 		setStore(value)
//     session.setItem(key, value)
// 	}

// 	//? Synchronize the Svelte store with session
// 	const getAndSetFromSession = () => {
// 		let sessionValue = session.getItem(key)
//     if (sessionValue === null) session.setKey(key, value)
//     setStore(sessionValue)
// 	}

// 	return { ...readableStore, set }
// }

// export default sessionStorage