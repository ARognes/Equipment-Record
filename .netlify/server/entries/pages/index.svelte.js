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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("../../chunks/index-1e667dfc.js");
var import_Loading_d732ebf6 = require("../../chunks/Loading-d732ebf6.js");
var import_index_bb50f2da = require("../../chunks/index-bb50f2da.js");
var import_auth_0ef6715f = require("../../chunks/auth-0ef6715f.js");
var import_navigation_92f05dd6 = require("../../chunks/navigation-92f05dd6.js");
var import_auth = require("firebase/auth");
var import_storage_7a99a8c4 = require("../../chunks/storage-7a99a8c4.js");
var import_account_5b395066 = require("../../chunks/account-5b395066.js");
var import_stores_ed515c98 = require("../../chunks/stores-ed515c98.js");
var ErrorMsg_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#errorMsg.svelte-mtbq9j{position:absolute;color:#a00;font-weight:bold;padding:0 2px}#errorMsg-active.svelte-mtbq9j{position:absolute;color:white;font-weight:bold;background-color:#f00;padding:0 2px}",
  map: null
};
const ErrorMsg = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let $showHighlight, $$unsubscribe_showHighlight;
  let $errorMsg, $$unsubscribe_errorMsg;
  let { errorMsg } = $$props;
  $$unsubscribe_errorMsg = (0, import_index_1e667dfc.a)(errorMsg, (value) => $errorMsg = value);
  const showHighlight = (0, import_index_bb50f2da.w)(false);
  $$unsubscribe_showHighlight = (0, import_index_1e667dfc.a)(showHighlight, (value) => $showHighlight = value);
  if ($$props.errorMsg === void 0 && $$bindings.errorMsg && errorMsg !== void 0)
    $$bindings.errorMsg(errorMsg);
  $$result.css.add(css$1);
  {
    (async () => {
      if (!$errorMsg)
        return;
      console.error($errorMsg);
      (0, import_index_1e667dfc.b)(showHighlight, $showHighlight = true, $showHighlight);
      await new Promise((res) => setTimeout(res, 500));
      (0, import_index_1e667dfc.b)(showHighlight, $showHighlight = false, $showHighlight);
    })();
  }
  $$unsubscribe_showHighlight();
  $$unsubscribe_errorMsg();
  return `${$showHighlight ? `<p id="${"errorMsg-active"}" class="${"svelte-mtbq9j"}">${(0, import_index_1e667dfc.e)($errorMsg)}</p>` : `<p id="${"errorMsg"}" class="${"svelte-mtbq9j"}">${(0, import_index_1e667dfc.e)($errorMsg)}</p>`}`;
});
const Hide = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_1e667dfc.f)([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    (0, import_index_1e667dfc.h)($$props)
  ], {})}><path d="${"M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"M12 6a9.77 9.77 0 0 1 8.82 5.5 9.647 9.647 0 0 1-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 0 1-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75a4.6 4.6 0 0 0-.36 1.78 4.507 4.507 0 0 0 6.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 0 1-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z"}"></path></svg>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '#auth.svelte-zjx7pb.svelte-zjx7pb{position:relative;top:5%;left:5%;width:90%;font-family:"Poppins", sans-serif}#auth.svelte-zjx7pb h1.svelte-zjx7pb{font-size:60px;margin:0 0 10px 0;padding:0}#auth.svelte-zjx7pb button.svelte-zjx7pb{width:100%;height:40px;font-size:20px;font-family:"Poppins", sans-serif;border:none;margin:10px 0 0 0}#auth.svelte-zjx7pb input.svelte-zjx7pb{padding-left:44px;width:calc(100% - 44px);height:32px;font-size:20px;border:none;border-bottom:3px solid #888;margin:-10px 0 -10px 0}#auth.svelte-zjx7pb input.svelte-zjx7pb:focus{outline:none}#auth.svelte-zjx7pb #password-forgot.svelte-zjx7pb{width:100%;height:32px;font-size:20px;border:none;border-bottom:3px solid #888;margin:-10px 0 -10px 0}#auth.svelte-zjx7pb #password-forgot #password-short.svelte-zjx7pb{width:calc(100% - 125px);border:none;height:30px}#auth.svelte-zjx7pb #password-forgot #forgot.svelte-zjx7pb{float:right;position:relative;top:0;right:6px;height:40px;color:blue;font-size:20px;text-decoration:none}#auth.svelte-zjx7pb .image.svelte-zjx7pb{position:relative;top:-24px;left:6px;align-self:flex-start;opacity:50%;width:30px;height:30px}#register.svelte-zjx7pb.svelte-zjx7pb{background-color:#aaf}#sign-in.svelte-zjx7pb.svelte-zjx7pb{background-color:#aaf}#google.svelte-zjx7pb.svelte-zjx7pb{background-color:#f77}.link.svelte-zjx7pb.svelte-zjx7pb{color:#00f}.link.svelte-zjx7pb.svelte-zjx7pb:hover{font-weight:bold}',
  map: null
};
const Routes = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $auth, $$unsubscribe_auth;
  let $loading, $$unsubscribe_loading;
  let $$unsubscribe_errorMsg;
  $$unsubscribe_page = (0, import_index_1e667dfc.a)(import_stores_ed515c98.p, (value) => value);
  $$unsubscribe_auth = (0, import_index_1e667dfc.a)(import_auth_0ef6715f.a, (value) => $auth = value);
  const SITE_KEY = "6LfizpIgAAAAAKsRfVHPurszakBAiFLdW-CwLxaD";
  const SITE_KEY_URL = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
  console.log(SITE_KEY_URL);
  const loading = (0, import_index_bb50f2da.w)(false);
  $$unsubscribe_loading = (0, import_index_1e667dfc.a)(loading, (value) => $loading = value);
  const errorMsg = (0, import_index_bb50f2da.w)("");
  $$unsubscribe_errorMsg = (0, import_index_1e667dfc.a)(errorMsg, (value) => value);
  function loadRecaptcha() {
    console.log("recaptcha loaded");
  }
  let signInSaveUsername = "";
  $$result.css.add(css);
  {
    if (typeof grecaptcha !== "undefined") {
      console.log(typeof grecaptcha === "undefined");
      loadRecaptcha();
    }
  }
  {
    {
      if ($auth) {
        (async () => {
          var _a;
          const token = await (0, import_auth.getIdTokenResult)($auth);
          import_storage_7a99a8c4.s.clear();
          import_storage_7a99a8c4.s.setItem("accessLevel", ((_a = token == null ? void 0 : token.claims) == null ? void 0 : _a.accessLevel) || 0);
          (0, import_navigation_92f05dd6.g)("/on/home");
        })();
      }
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_auth();
  $$unsubscribe_loading();
  $$unsubscribe_errorMsg();
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://www.google.com"}" data-svelte="svelte-15y9rqv"><link rel="${"preconnect"}" href="${"https://www.gstatic.com"}" crossorigin data-svelte="svelte-15y9rqv"><script src="${"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"}" data-svelte="svelte-15y9rqv"><\/script><link rel="${"preload"}" as="${"script"}"${(0, import_index_1e667dfc.i)("href", SITE_KEY_URL, 0)} data-svelte="svelte-15y9rqv"><script async defer${(0, import_index_1e667dfc.i)("src", SITE_KEY_URL, 0)} data-svelte="svelte-15y9rqv"><\/script>`, ""}


${$auth === void 0 ? `Checking auth status \u2026
  ${(0, import_index_1e667dfc.v)(import_Loading_d732ebf6.L, "Loading").$$render($$result, {}, {}, {})}` : `${$auth === null ? `

  <div id="${"auth"}" class="${"svelte-zjx7pb"}">${`<h1 class="${"svelte-zjx7pb"}">Sign In</h1>

      <p>Need an account? <span class="${"link svelte-zjx7pb"}">Register</span></p>
      <input type="${"text"}" spellcheck="${"false"}" placeholder="${"Username or email"}" class="${"svelte-zjx7pb"}"${(0, import_index_1e667dfc.i)("value", signInSaveUsername, 0)}>
      <div class="${"image svelte-zjx7pb"}">${(0, import_index_1e667dfc.v)(import_account_5b395066.A, "AccountSVG").$$render($$result, {}, {}, {})}</div>
      <div id="${"password-forgot"}" class="${"svelte-zjx7pb"}"><input id="${"password-short"}"${(0, import_index_1e667dfc.i)("type", "password", 0)} spellcheck="${"false"}" placeholder="${"Password"}" class="${"svelte-zjx7pb"}">
        <a id="${"forgot"}" href="${"/forgot"}" class="${"svelte-zjx7pb"}">Forgot</a>
        ${`<div class="${"image svelte-zjx7pb"}">${(0, import_index_1e667dfc.v)(Hide, "HideSVG").$$render($$result, {}, {}, {})}</div>`}</div>

      <button id="${"sign-in"}" class="${"svelte-zjx7pb"}">Sign In</button>`}

    <button id="${"google"}" class="${"svelte-zjx7pb"}">Authenticate with Google</button>

    ${(0, import_index_1e667dfc.v)(ErrorMsg, "ErrorMsg").$$render($$result, { errorMsg }, {}, {})}</div>

  ${$loading ? `${(0, import_index_1e667dfc.v)(import_Loading_d732ebf6.L, "Loading").$$render($$result, {}, {}, {})}` : ``}` : `

  <button>Sign Out</button>${(0, import_index_1e667dfc.e)($auth.displayName)} (${(0, import_index_1e667dfc.e)($auth.email)})

  
  
  
  `}`}

`;
});
