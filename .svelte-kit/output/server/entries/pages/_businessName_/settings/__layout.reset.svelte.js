import { c as create_ssr_component, a as subscribe, s as setContext } from "../../../../chunks/index-3832a3ee.js";
import { a as auth } from "../../../../chunks/auth-ecc1ff36.js";
import { g as goto } from "../../../../chunks/navigation-92f05dd6.js";
import { b as browser } from "../../../../chunks/env-838bf73b.js";
import { app } from "../../../../chunks/app-5af87a2a.js";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import { w as writable } from "../../../../chunks/index-6965d72c.js";
import "firebase/app";
const _layout_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
            firstPass = false;
            return;
          }
          if ($userDataStore)
            return;
          const db = getFirestore(app);
          const userRef = doc(db, "users", $auth?.displayName);
          const userDoc = await getDoc(userRef);
          const userData = userDoc?.data();
          userData.uid = userRef.id;
          userDataStore.set(userData);
          if (!$userDataStore)
            await goto("/business");
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }
  $$unsubscribe_userDataStore();
  $$unsubscribe_auth();
  return `${slots.default ? slots.default({}) : ``}`;
});
export { _layout_reset as default };
