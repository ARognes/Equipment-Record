/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.svg?component' {
  const content: any
  export default content
}

declare module '*.svg?src' {
  const content: string
  export default content
}

declare module '*.svg?url' {
  const content: string
  export default content
}

// type Theme = {
//   system: boolean
//   dark: boolean
// }
