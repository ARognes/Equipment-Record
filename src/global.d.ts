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

declare let { FirebaseOptions }: import('firebase').app

interface UserSession {
	name: string | null
	email: string | null
	uid: string
	accessLevel: number
	businessID: string | null
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
		decodedToken: DecodedIdToken | null
	}

	// interface Platform {}

	interface Session {
		user: UserSession | undefined
	}

	// interface Stuff {}
}

declare module 'AppModule' {
	type Fetch = (info: RequestInfo, init?: RequestInit) => Promise<Response>
	type AnyObject = Record<string, unknown>
	type Session = App.Session
}

interface UpdateCustomUserClaimElement {
	name: string
	value: string | number
}

// interface DocumentData extends QueryDocumentSnapshot<DocumentData>, DocumentSnapshot<DocumentData>, fbAdmin.firestore.DocumentSnapshot<fbAdmin.firestore.DocumentData> {
// }

type DocumentData = QueryDocumentSnapshot<DocumentData> | DocumentSnapshot<DocumentData> | fbAdmin.firestore.DocumentSnapshot<fbAdmin.firestore.DocumentData>
