import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../chunks/index-3832a3ee.js";
import { L as Loading } from "../../chunks/Loading-7823f7bd.js";
import { R as Recaptcha, H as Hide, E as ErrorMsg } from "../../chunks/hide-d41ebdf6.js";
import { a as auth } from "../../chunks/auth-ecc1ff36.js";
import { w as writable } from "../../chunks/index-6965d72c.js";
import { g as goto } from "../../chunks/navigation-92f05dd6.js";
import { getIdTokenResult } from "firebase/auth";
import { s as session } from "../../chunks/storage-6901f496.js";
import { A as Account } from "../../chunks/account-871975cf.js";
/* empty css                                                           */var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '#auth.svelte-1yvm8dn.svelte-1yvm8dn{position:relative;top:5%;left:5%;width:90%;font-family:"Poppins", sans-serif}#auth.svelte-1yvm8dn h1.svelte-1yvm8dn{font-size:60px;margin:0 0 10px 0;padding:0}#auth.svelte-1yvm8dn button.svelte-1yvm8dn{width:100%;height:40px;font-size:20px;font-family:"Poppins", sans-serif;border:none;margin:10px 0 0 0}#auth.svelte-1yvm8dn input.svelte-1yvm8dn{padding-left:44px;width:calc(100% - 44px);height:32px;font-size:20px;border:none;border-bottom:3px solid #888;margin:-10px 0 -10px 0}#auth.svelte-1yvm8dn input.svelte-1yvm8dn:focus{outline:none}#auth.svelte-1yvm8dn #password-forgot.svelte-1yvm8dn{width:100%;height:32px;font-size:20px;border:none;border-bottom:3px solid #888;margin:-10px 0 -10px 0}#auth.svelte-1yvm8dn #password-forgot #password-short.svelte-1yvm8dn{width:calc(100% - 125px);border:none;height:30px}#auth.svelte-1yvm8dn #password-forgot #forgot.svelte-1yvm8dn{float:right;position:relative;top:0;right:6px;height:40px;color:blue;font-size:20px;text-decoration:none}#auth.svelte-1yvm8dn .image.svelte-1yvm8dn{position:relative;top:-24px;left:6px;align-self:flex-start;opacity:50%;width:30px;height:30px}#sign-in.svelte-1yvm8dn.svelte-1yvm8dn{background-color:#aaf}#google.svelte-1yvm8dn.svelte-1yvm8dn{background-color:#f77}.div-recaptcha.svelte-1yvm8dn.svelte-1yvm8dn{width:100%;height:100px;display:flex;justify-content:center;align-items:center}.link.svelte-1yvm8dn.svelte-1yvm8dn{color:#00f;text-decoration:none}.link.svelte-1yvm8dn.svelte-1yvm8dn:hover{font-weight:bold}',
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $auth, $$unsubscribe_auth;
  let $loading, $$unsubscribe_loading;
  let $$unsubscribe_errorMsg;
  $$unsubscribe_auth = subscribe(auth, (value) => $auth = value);
  const loading = writable(false);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  const errorMsg = writable("");
  $$unsubscribe_errorMsg = subscribe(errorMsg, (value) => value);
  let signInSaveUsername = "";
  let recaptchaV2SignIn;
  $$result.css.add(css);
  {
    {
      if ($auth) {
        (async () => {
          const token = await getIdTokenResult($auth);
          session.clear();
          session.setItem("accessLevel", token?.claims?.accessLevel || 0);
          goto("/on/home");
        })();
      }
    }
  }
  $$unsubscribe_auth();
  $$unsubscribe_loading();
  $$unsubscribe_errorMsg();
  return `${validate_component(Recaptcha, "Recaptcha").$$render($$result, { v2Container: recaptchaV2SignIn }, {}, {})}


${$auth === void 0 ? `Checking auth status \u2026
  ${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : `${$auth === null ? `

  <div id="${"auth"}" class="${"svelte-1yvm8dn"}"><h1 class="${"svelte-1yvm8dn"}">Sign In</h1>

    <p>Need an account? <a sveltekit:prefetch href="${"/register"}" class="${"link svelte-1yvm8dn"}">Register</a></p>

    <input type="${"text"}" spellcheck="${"false"}" placeholder="${"Username or email"}" class="${"svelte-1yvm8dn"}"${add_attribute("value", signInSaveUsername, 0)}>
    <div class="${"image svelte-1yvm8dn"}">${validate_component(Account, "AccountSVG").$$render($$result, {}, {}, {})}</div>
    <div id="${"password-forgot"}" class="${"svelte-1yvm8dn"}"><input id="${"password-short"}"${add_attribute("type", "password", 0)} spellcheck="${"false"}" placeholder="${"Password"}" class="${"svelte-1yvm8dn"}">
      <a id="${"forgot"}" href="${"/forgot"}" class="${"svelte-1yvm8dn"}">Forgot</a>
      ${`<div class="${"image svelte-1yvm8dn"}">${validate_component(Hide, "HideSVG").$$render($$result, {}, {}, {})}</div>`}</div>

    <div class="${"div-recaptcha svelte-1yvm8dn"}"${add_attribute("this", recaptchaV2SignIn, 0)}></div>


    <button id="${"sign-in"}" class="${"svelte-1yvm8dn"}">Sign In</button>

    <button id="${"google"}" class="${"svelte-1yvm8dn"}">Authenticate with Google</button>

    ${validate_component(ErrorMsg, "ErrorMsg").$$render($$result, { errorMsg }, {}, {})}</div>

  ${$loading ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}` : `

  <button>Sign Out</button>${escape($auth.displayName)} (${escape($auth.email)})`}`}`;
});
export { Routes as default };
