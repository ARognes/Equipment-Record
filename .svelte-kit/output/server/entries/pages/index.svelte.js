import { c as create_ssr_component, f as spread, h as escape_object, a as subscribe, v as validate_component, i as add_attribute, e as escape } from "../../chunks/index-1e667dfc.js";
import { a as auth } from "../../chunks/auth-0ef6715f.js";
import { L as Loading } from "../../chunks/Loading-d732ebf6.js";
import { w as writable } from "../../chunks/index-bb50f2da.js";
import { g as goto } from "../../chunks/navigation-92f05dd6.js";
import { A as Account } from "../../chunks/account-5b395066.js";
import { getIdTokenResult } from "firebase/auth";
import { s as session } from "../../chunks/storage-7a99a8c4.js";
/* empty css                                                           */const Hide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    escape_object($$props)
  ], {})}><path d="${"M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"M12 6a9.77 9.77 0 0 1 8.82 5.5 9.647 9.647 0 0 1-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 0 1-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75a4.6 4.6 0 0 0-.36 1.78 4.507 4.507 0 0 0 6.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 0 1-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z"}"></path></svg>`;
});
var Auth_svelte_svelte_type_style_lang = "";
const css = {
  code: '#auth.svelte-146rkvj.svelte-146rkvj{position:relative;top:5%;left:5%;width:90%;font-family:"Poppins", sans-serif}#auth.svelte-146rkvj h1.svelte-146rkvj{font-size:60px;margin:0 0 10px 0;padding:0}#auth.svelte-146rkvj button.svelte-146rkvj{width:100%;height:40px;font-size:20px;font-family:"Poppins", sans-serif;border:none;margin:10px 0 0 0}#auth.svelte-146rkvj input.svelte-146rkvj{padding-left:44px;width:calc(100% - 44px);height:32px;font-size:20px;border:none;border-bottom:3px solid #888;margin:-10px 0 -10px 0}#auth.svelte-146rkvj input.svelte-146rkvj:focus{outline:none}#register.svelte-146rkvj.svelte-146rkvj{background-color:#aaf}#sign-in.svelte-146rkvj.svelte-146rkvj{background-color:#aaf}#google.svelte-146rkvj.svelte-146rkvj{background-color:#f77}#forgot.svelte-146rkvj.svelte-146rkvj{float:right;position:relative;top:-28px;right:6px;height:40px;color:blue;font-size:20px;text-decoration:none}#errorMsg.svelte-146rkvj.svelte-146rkvj{color:#a00;font-weight:bold}.link.svelte-146rkvj.svelte-146rkvj{color:#00f}.link.svelte-146rkvj.svelte-146rkvj:hover{font-weight:bold}',
  map: null
};
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $auth, $$unsubscribe_auth;
  let $loading, $$unsubscribe_loading;
  $$unsubscribe_auth = subscribe(auth, (value) => $auth = value);
  const loading = writable(false);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  let errorMsg = "";
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
  return `
${$auth === void 0 ? `Checking auth status \u2026
  ${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : `${$auth === null ? `

  <div id="${"auth"}" class="${"svelte-146rkvj"}">${`<h1 class="${"svelte-146rkvj"}">Sign In</h1>

      <p>Need an account? <span class="${"link svelte-146rkvj"}">Register</span></p>
      <input type="${"text"}" spellcheck="${"false"}" placeholder="${"Username or email"}" class="${"svelte-146rkvj"}">
      ${validate_component(Account, "AccountSVG").$$render($$result, {}, {}, {})}
      <input${add_attribute("type", "password", 0)} spellcheck="${"false"}" placeholder="${"Password"}" class="${"svelte-146rkvj"}">
      
      ${`${validate_component(Hide, "HideSVG").$$render($$result, {}, {}, {})}`}

      <a id="${"forgot"}" href="${"/forgot"}" class="${"svelte-146rkvj"}">Forgot</a>
      
      <button id="${"sign-in"}" class="${"svelte-146rkvj"}">Sign In</button>`}
    <button id="${"google"}" class="${"svelte-146rkvj"}">Authenticate with Google</button>


    <p id="${"errorMsg"}" class="${"svelte-146rkvj"}">${escape(errorMsg)}</p></div>

  ${$loading ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}` : `

  <button>Sign Out</button>${escape($auth.displayName)} (${escape($auth.email)})

  
  
  
  `}`}`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Auth, "Auth").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
