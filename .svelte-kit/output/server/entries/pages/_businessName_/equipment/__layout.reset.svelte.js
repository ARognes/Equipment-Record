import { c as create_ssr_component, a as subscribe, s as setContext, d as set_store_value } from "../../../../chunks/index-6e4040da.js";
import { n as navigating } from "../../../../chunks/stores-8c59f5ae.js";
/* empty css                                                                */import { a as auth } from "../../../../chunks/auth-3f7e6cbe.js";
import { g as goto } from "../../../../chunks/navigation-92f05dd6.js";
import { b as browser } from "../../../../chunks/env-838bf73b.js";
import { app } from "../../../../chunks/app-5af87a2a.js";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import { w as writable } from "../../../../chunks/index-5067e13b.js";
import { s as session } from "../../../../chunks/storage-7a99a8c4.js";
/* empty css                                                                 */import "firebase/app";
var __layout_reset_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{font-family:"Poppins", sans-serif}',
  map: null
};
const _layout_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userDataStore, $$unsubscribe_userDataStore;
  let $auth, $$unsubscribe_auth;
  let $navigating, $$unsubscribe_navigating;
  let $loading, $$unsubscribe_loading;
  $$unsubscribe_auth = subscribe(auth, (value) => $auth = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  const loading = writable(false);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  const userDataStore = writable(null);
  $$unsubscribe_userDataStore = subscribe(userDataStore, (value) => $userDataStore = value);
  setContext("userData", userDataStore);
  let firstPass = true;
  $$result.css.add(css);
  set_store_value(loading, $loading = !!$navigating, $loading);
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
  $$unsubscribe_navigating();
  $$unsubscribe_loading();
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" crossorigin data-svelte="svelte-3ozpvb"><link rel="${"preload"}" as="${"style"}" href="${"https://fonts.googleapis.com/css?family=Poppins"}" data-svelte="svelte-3ozpvb"><link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css?family=Poppins"}" data-svelte="svelte-3ozpvb">`, ""}



${slots.default ? slots.default({}) : ``}`;
});
export { _layout_reset as default };
