import { c as create_ssr_component, a as subscribe, s as setContext, v as validate_component } from "../../../chunks/index-3832a3ee.js";
import { N as Navbar } from "../../../chunks/Navbar-daad3a72.js";
import { a as auth } from "../../../chunks/auth-ecc1ff36.js";
import { g as goto } from "../../../chunks/navigation-92f05dd6.js";
import { b as browser } from "../../../chunks/env-838bf73b.js";
import { app } from "../../../chunks/app-5af87a2a.js";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import { w as writable } from "../../../chunks/index-6965d72c.js";
import { s as session } from "../../../chunks/storage-6901f496.js";
import "../../../chunks/account-871975cf.js";
/* empty css                                                             */import "firebase/app";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userDataStore, $$unsubscribe_userDataStore;
  let $auth, $$unsubscribe_auth;
  $$unsubscribe_auth = subscribe(auth, (value) => $auth = value);
  const userDataStore = writable(null);
  $$unsubscribe_userDataStore = subscribe(userDataStore, (value) => $userDataStore = value);
  setContext("userData", userDataStore);
  let firstPass = true;
  {
    {
      (async () => {
        try {
          if (!browser)
            return;
          if (!$auth) {
            if (!firstPass)
              await goto("/");
            return;
          }
          firstPass = false;
          if ($userDataStore)
            return;
          const db = getFirestore(app);
          const userRef = doc(db, "users", $auth?.displayName);
          const userDoc = await getDoc(userRef);
          const userData = userDoc?.data();
          userData.displayName = userRef.id;
          userData.accessLevel = session.getItem("accessLevel") || 0;
          if (!userData)
            await goto("/business");
          userDataStore.set(userData);
          if (session.getItem("businessID") === $userDataStore.businessID)
            return;
          session.setItem("businessID", $userDataStore.businessID);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }
  $$unsubscribe_userDataStore();
  $$unsubscribe_auth();
  return `${slots.default ? slots.default({}) : ``}

${validate_component(Navbar, "Navbar").$$render($$result, { path: $userDataStore?.businessName }, {}, {})}`;
});
export { _layout as default };
