var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("../../../chunks/index-1e667dfc.js");
var import_Navbar_c4579b37 = require("../../../chunks/Navbar-c4579b37.js");
var import_auth_0ef6715f = require("../../../chunks/auth-0ef6715f.js");
var import_navigation_92f05dd6 = require("../../../chunks/navigation-92f05dd6.js");
var import_env_838bf73b = require("../../../chunks/env-838bf73b.js");
var import_app_5af87a2a = require("../../../chunks/app-5af87a2a.js");
var import_lite = require("firebase/firestore/lite");
var import_index_bb50f2da = require("../../../chunks/index-bb50f2da.js");
var import_storage_7a99a8c4 = require("../../../chunks/storage-7a99a8c4.js");
var import_account_5b395066 = require("../../../chunks/account-5b395066.js");
var import_stores_ed515c98 = require("../../../chunks/stores-ed515c98.js");
var import_app = require("firebase/app");
const _layout = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let $userDataStore, $$unsubscribe_userDataStore;
  let $auth, $$unsubscribe_auth;
  $$unsubscribe_auth = (0, import_index_1e667dfc.a)(import_auth_0ef6715f.a, (value) => $auth = value);
  const userDataStore = (0, import_index_bb50f2da.w)(null);
  $$unsubscribe_userDataStore = (0, import_index_1e667dfc.a)(userDataStore, (value) => $userDataStore = value);
  (0, import_index_1e667dfc.s)("userData", userDataStore);
  let firstPass = true;
  {
    {
      (async () => {
        try {
          if (!import_env_838bf73b.b)
            return;
          if (!$auth) {
            if (!firstPass)
              await (0, import_navigation_92f05dd6.g)("/");
            return;
          }
          firstPass = false;
          if ($userDataStore)
            return;
          const db = (0, import_lite.getFirestore)(import_app_5af87a2a.app);
          const userRef = (0, import_lite.doc)(db, "users", $auth == null ? void 0 : $auth.displayName);
          const userDoc = await (0, import_lite.getDoc)(userRef);
          const userData = userDoc == null ? void 0 : userDoc.data();
          userData.displayName = userRef.id;
          userData.accessLevel = import_storage_7a99a8c4.s.getItem("accessLevel") || 0;
          if (!userData)
            await (0, import_navigation_92f05dd6.g)("/business");
          userDataStore.set(userData);
          if (import_storage_7a99a8c4.s.getItem("businessID") === $userDataStore.businessID)
            return;
          import_storage_7a99a8c4.s.setItem("businessID", $userDataStore.businessID);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }
  $$unsubscribe_userDataStore();
  $$unsubscribe_auth();
  return `${slots.default ? slots.default({}) : ``}

${(0, import_index_1e667dfc.v)(import_Navbar_c4579b37.N, "Navbar").$$render($$result, { path: $userDataStore == null ? void 0 : $userDataStore.businessName }, {}, {})}`;
});
