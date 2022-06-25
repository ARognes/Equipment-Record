var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  a: () => auth
});
module.exports = __toCommonJS(stdin_exports);
var import_index_bb50f2da = require("./index-bb50f2da.js");
const createAuth = () => {
  let auth2;
  const { subscribe } = (0, import_index_bb50f2da.r)(void 0, (set) => {
    let unsubscribe = () => {
    };
    (async () => {
      set(null);
    })();
    return unsubscribe;
  });
  async function register(username, email, password) {
    const { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } = await Promise.resolve().then(() => __toESM(require("firebase/auth")));
    const { getDoc, doc, setDoc, serverTimestamp, getFirestore } = await Promise.resolve().then(() => __toESM(require("firebase/firestore/lite")));
    const { app } = await Promise.resolve().then(() => __toESM(require("./app-5af87a2a.js")));
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
      const { setPersistence, browserLocalPersistence, signInWithPopup, GoogleAuthProvider } = await Promise.resolve().then(() => __toESM(require("firebase/auth")));
      await setPersistence(auth2, browserLocalPersistence);
      await signInWithPopup(auth2, new GoogleAuthProvider());
    } catch (e) {
    }
  }
  async function signInEmail(email, password) {
    const { setPersistence, browserLocalPersistence, signInWithEmailAndPassword } = await Promise.resolve().then(() => __toESM(require("firebase/auth")));
    await setPersistence(auth2, browserLocalPersistence);
    await signInWithEmailAndPassword(auth2, email, password);
  }
  async function signInUsername(username, password) {
    var _a;
    const { setPersistence, browserLocalPersistence, signInWithEmailAndPassword } = await Promise.resolve().then(() => __toESM(require("firebase/auth")));
    const { getDoc, doc, getFirestore } = await Promise.resolve().then(() => __toESM(require("firebase/firestore/lite")));
    const { app } = await Promise.resolve().then(() => __toESM(require("./app-5af87a2a.js")));
    if (!username || username.length < 2 || !password || password.length < 12)
      return;
    const db = getFirestore(app);
    const userDoc = await getDoc(doc(db, "users", username));
    if (!userDoc.exists())
      return;
    const email = (_a = userDoc == null ? void 0 : userDoc.data()) == null ? void 0 : _a.email;
    if (!email || email.length < 3)
      return;
    await setPersistence(auth2, browserLocalPersistence);
    await signInWithEmailAndPassword(auth2, email, password);
  }
  async function signOut() {
    const { signOut: signOut2 } = await Promise.resolve().then(() => __toESM(require("firebase/auth")));
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
