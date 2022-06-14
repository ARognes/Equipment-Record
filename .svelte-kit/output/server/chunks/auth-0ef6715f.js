import { r as readable } from "./index-bb50f2da.js";
const createAuth = () => {
  let auth2;
  const { subscribe } = readable(void 0, (set) => {
    let unsubscribe = () => {
    };
    (async () => {
      set(null);
    })();
    return unsubscribe;
  });
  async function register(username, email, password) {
    const { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } = await import("firebase/auth");
    const { getDoc, doc, setDoc, serverTimestamp, getFirestore } = await import("firebase/firestore/lite");
    const { app } = await import("./app-5af87a2a.js");
    const db = getFirestore(app);
    const userRef = doc(db, "users", username);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists())
      return;
    await createUserWithEmailAndPassword(auth2, email, password);
    await updateProfile(auth2.currentUser, { displayName: username });
    await sendEmailVerification(auth2.currentUser);
    await setDoc(userRef, {
      businessID: "",
      businessName: "",
      uid: auth2.currentUser.uid,
      email: auth2.currentUser.email,
      phone: null,
      createdAt: serverTimestamp()
    });
  }
  async function signInGoogle() {
    try {
      const { setPersistence, browserLocalPersistence, signInWithPopup, GoogleAuthProvider } = await import("firebase/auth");
      await setPersistence(auth2, browserLocalPersistence);
      await signInWithPopup(auth2, new GoogleAuthProvider());
    } catch (e) {
    }
  }
  async function signInEmail(email, password) {
    const { setPersistence, browserLocalPersistence, signInWithEmailAndPassword } = await import("firebase/auth");
    await setPersistence(auth2, browserLocalPersistence);
    await signInWithEmailAndPassword(auth2, email, password);
  }
  async function signInUsername(username, password) {
    const { setPersistence, browserLocalPersistence, signInWithEmailAndPassword } = await import("firebase/auth");
    const { getDoc, doc, getFirestore } = await import("firebase/firestore/lite");
    const { app } = await import("./app-5af87a2a.js");
    if (!username || username.length < 2 || !password || password.length < 12)
      return;
    const db = getFirestore(app);
    const userDoc = await getDoc(doc(db, "users", username));
    if (!userDoc.exists())
      return;
    const email = userDoc?.data()?.email;
    if (!email || email.length < 3)
      return;
    await setPersistence(auth2, browserLocalPersistence);
    await signInWithEmailAndPassword(auth2, email, password);
  }
  async function signOut() {
    const { signOut: signOut2 } = await import("firebase/auth");
    await signOut2(auth2);
  }
  return {
    subscribe,
    register,
    signInGoogle,
    signInEmail,
    signInUsername,
    signOut
  };
};
const auth = createAuth();
export { auth as a };
