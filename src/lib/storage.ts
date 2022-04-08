import { browser } from "$app/env"


// `import 'dotenv/config'

// if (!browser) {

//   const test = process.env.SECRET
//   console.log(test)
// }`

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
