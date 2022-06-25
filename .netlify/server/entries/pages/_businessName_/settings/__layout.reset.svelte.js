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
  default: () => _layout_reset
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("../../../../chunks/index-1e667dfc.js");
var import_auth_0ef6715f = require("../../../../chunks/auth-0ef6715f.js");
var import_navigation_92f05dd6 = require("../../../../chunks/navigation-92f05dd6.js");
var import_env_838bf73b = require("../../../../chunks/env-838bf73b.js");
var import_app_5af87a2a = require("../../../../chunks/app-5af87a2a.js");
var import_lite = require("firebase/firestore/lite");
var import_index_bb50f2da = require("../../../../chunks/index-bb50f2da.js");
var import_app = require("firebase/app");
const _layout_reset = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
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
            firstPass = false;
            return;
          }
          if ($userDataStore)
            return;
          const db = (0, import_lite.getFirestore)(import_app_5af87a2a.app);
          const userRef = (0, import_lite.doc)(db, "users", $auth == null ? void 0 : $auth.displayName);
          const userDoc = await (0, import_lite.getDoc)(userRef);
          const userData = userDoc == null ? void 0 : userDoc.data();
          userData.uid = userRef.id;
          userDataStore.set(userData);
          if (!$userDataStore)
            await (0, import_navigation_92f05dd6.g)("/business");
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
