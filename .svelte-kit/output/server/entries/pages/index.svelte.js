import { c as create_ssr_component, a as subscribe, b as add_attribute, d as set_store_value, e as escape, f as each, v as validate_component } from "../../chunks/index-6e4040da.js";
import { H as Hide, E as ErrorMsg } from "../../chunks/hide-a25564ed.js";
import { a as auth } from "../../chunks/auth-3f7e6cbe.js";
import { w as writable } from "../../chunks/index-5067e13b.js";
import { g as goto } from "../../chunks/navigation-92f05dd6.js";
import { getIdTokenResult } from "firebase/auth";
import { s as session } from "../../chunks/storage-7a99a8c4.js";
import { t as tweened } from "../../chunks/index-57061ade.js";
import { A as Account } from "../../chunks/account-f51a1d73.js";
function backOut(t) {
  const s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1;
}
var Ripple_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "circle.svelte-1n4r1uq{fill:var(--ripple) }",
  map: null
};
const Ripple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $rippleOpacity, $$unsubscribe_rippleOpacity;
  let $rippleSize, $$unsubscribe_rippleSize;
  let { x, y, sizeIn, size, speed, rippleBlur, opacityIn, startEnd } = $$props;
  const rippleSize = tweened(sizeIn, { duration: speed }), rippleOpacity = tweened(opacityIn, { duration: speed, easing: backOut });
  $$unsubscribe_rippleSize = subscribe(rippleSize, (value) => $rippleSize = value);
  $$unsubscribe_rippleOpacity = subscribe(rippleOpacity, (value) => $rippleOpacity = value);
  const end = () => set_store_value(rippleOpacity, $rippleOpacity = 0, $rippleOpacity);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.sizeIn === void 0 && $$bindings.sizeIn && sizeIn !== void 0)
    $$bindings.sizeIn(sizeIn);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.rippleBlur === void 0 && $$bindings.rippleBlur && rippleBlur !== void 0)
    $$bindings.rippleBlur(rippleBlur);
  if ($$props.opacityIn === void 0 && $$bindings.opacityIn && opacityIn !== void 0)
    $$bindings.opacityIn(opacityIn);
  if ($$props.startEnd === void 0 && $$bindings.startEnd && startEnd !== void 0)
    $$bindings.startEnd(startEnd);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css$2);
  $$unsubscribe_rippleOpacity();
  $$unsubscribe_rippleSize();
  return `<defs><filter id="${"f1"}" x="${"0"}" y="${"0"}"><feGaussianBlur in="${"SourceGraphic"}"${add_attribute("stdDeviation", rippleBlur, 0)}></feGaussianBlur></filter></defs>
<circle${add_attribute("cx", x, 0)}${add_attribute("cy", y, 0)}${add_attribute("r", $rippleSize, 0)}${add_attribute("opacity", $rippleOpacity, 0)} class="${"svelte-1n4r1uq"}"></circle>`;
});
var Button_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-yduxui{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;font-weight:500;color:var(--color);font-size:var(--font-size);height:var(--height);width:var(--width);max-width:100%;margin:0;padding:0;position:relative;border-radius:var(--radius);cursor:pointer;-webkit-transition:200ms all ease-out;transition:200ms all ease-out;background-color:rgba(var(--bg-color), 1);overflow:hidden;font-family:Roboto, sans-serif;box-shadow:var(--shadow);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}button.svelte-yduxui:hover,button.svelte-yduxui:focus{outline:none;background-color:rgba(var(--bg-hover), 1);box-shadow:var(--shadow-h)}button.svelte-yduxui:active{outline:none;background-color:rgba(var(--bg-active), 1);box-shadow:var(--shadow-a)}span.svelte-yduxui{position:relative;height:100%;width:100%;display:flex;align-items:center;justify-content:center;margin:0;padding:0;z-index:1}svg.svelte-yduxui{height:100%;pointer-events:none;position:absolute;top:0;left:0;z-index:0;width:100%}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ripples, $$unsubscribe_ripples;
  let { rippleBlur = 2, speed = 1e3, color = "#fff", fontSize = "1rem", bgColor = "255, 0, 0", bgHover = bgColor, bgActive = bgColor, rippleColor = "0, 0, 0", round = "6px", height = "40px", width = "auto", sizeIn = 20, opacityIn = 0.2, shadow = "none", shadowHover = "none", shadowActive = "none" } = $$props;
  const shadows = {
    none: "none",
    1: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    2: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    3: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    4: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    5: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    6: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    7: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  };
  function handleRipple() {
    const ripples2 = writable([]);
    return {
      subscribe: ripples2.subscribe,
      add: (item) => ripples2.update((items) => [...items, item]),
      clear: () => ripples2.update((items) => [])
    };
  }
  const ripples = handleRipple();
  $$unsubscribe_ripples = subscribe(ripples, (value) => $ripples = value);
  let rippleBtn, rippleComps = [];
  if ($$props.rippleBlur === void 0 && $$bindings.rippleBlur && rippleBlur !== void 0)
    $$bindings.rippleBlur(rippleBlur);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.bgHover === void 0 && $$bindings.bgHover && bgHover !== void 0)
    $$bindings.bgHover(bgHover);
  if ($$props.bgActive === void 0 && $$bindings.bgActive && bgActive !== void 0)
    $$bindings.bgActive(bgActive);
  if ($$props.rippleColor === void 0 && $$bindings.rippleColor && rippleColor !== void 0)
    $$bindings.rippleColor(rippleColor);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0)
    $$bindings.round(round);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.sizeIn === void 0 && $$bindings.sizeIn && sizeIn !== void 0)
    $$bindings.sizeIn(sizeIn);
  if ($$props.opacityIn === void 0 && $$bindings.opacityIn && opacityIn !== void 0)
    $$bindings.opacityIn(opacityIn);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.shadowHover === void 0 && $$bindings.shadowHover && shadowHover !== void 0)
    $$bindings.shadowHover(shadowHover);
  if ($$props.shadowActive === void 0 && $$bindings.shadowActive && shadowActive !== void 0)
    $$bindings.shadowActive(shadowActive);
  if ($$props.ripples === void 0 && $$bindings.ripples && ripples !== void 0)
    $$bindings.ripples(ripples);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `

<button style="${"--color: " + escape(color) + ";--font-size: " + escape(fontSize) + ";--bg-color: " + escape(bgColor) + ";--bg-hover: " + escape(bgHover) + ";--bg-active: " + escape(bgActive) + ";--radius: " + escape(round) + ";--ripple: " + escape(rippleColor) + ";--height: " + escape(height) + ";--width: " + escape(width) + ";--shadow: " + escape(shadows[shadow]) + ";--shadow-h: " + escape(shadows[shadowHover]) + ";--shadow-a: " + escape(shadows[shadowActive])}" class="${"svelte-yduxui"}"${add_attribute("this", rippleBtn, 0)}><span class="${"svelte-yduxui"}">${slots.default ? slots.default({}) : ``}</span>	
	<svg class="${"svelte-yduxui"}">${each($ripples, (ripple, index) => {
      return `${validate_component(Ripple, "Ripple").$$render($$result, {
        x: ripple.x,
        y: ripple.y,
        size: ripple.size,
        startEnd: ripple.startEnd,
        speed,
        sizeIn,
        opacityIn,
        rippleBlur,
        this: rippleComps[index]
      }, {
        this: ($$value) => {
          rippleComps[index] = $$value;
          $$settled = false;
        }
      }, {})}`;
    })}</svg>
</button>`;
  } while (!$$settled);
  $$unsubscribe_ripples();
  return $$rendered;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '#auth.svelte-2zytir.svelte-2zytir{position:relative;top:5%;left:5%;width:90%;font-family:"Poppins", sans-serif}#auth.svelte-2zytir h1.svelte-2zytir{font-size:60px;margin:0 0 10px 0;padding:0}#auth.svelte-2zytir input.svelte-2zytir{padding-left:44px;width:calc(100% - 44px);height:32px;font-size:20px;border:none;border-bottom:3px solid #888;margin:-10px 0 -10px 0}#auth.svelte-2zytir input.svelte-2zytir:focus{outline:none}#auth.svelte-2zytir #password-forgot.svelte-2zytir{width:100%;height:32px;font-size:20px;border:none;border-bottom:3px solid #888;margin:-10px 0 -10px 0}#auth.svelte-2zytir #password-forgot #password-short.svelte-2zytir{width:calc(100% - 125px);border:none;height:30px}#auth.svelte-2zytir #password-forgot #forgot.svelte-2zytir{float:right;position:relative;top:0;right:6px;height:40px;color:blue;font-size:20px;text-decoration:none}#auth.svelte-2zytir .image.svelte-2zytir{position:relative;top:-24px;left:6px;align-self:flex-start;opacity:50%;width:30px;height:30px}.link.svelte-2zytir.svelte-2zytir{color:#00f;text-decoration:none}.link.svelte-2zytir.svelte-2zytir:hover{font-weight:bold}',
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
  return `
${$auth === void 0 ? `Checking auth status \u2026
  ` : `${$auth === null ? `

  <div id="${"auth"}" class="${"svelte-2zytir"}"><h1 class="${"svelte-2zytir"}">Sign In</h1>


    <input type="${"text"}" spellcheck="${"false"}" placeholder="${"Username or email"}" class="${"svelte-2zytir"}">
    <div class="${"image svelte-2zytir"}">${validate_component(Account, "AccountSVG").$$render($$result, {}, {}, {})}</div>
    <div id="${"password-forgot"}" class="${"svelte-2zytir"}"><input id="${"password-short"}"${add_attribute("type", "password", 0)} spellcheck="${"false"}" placeholder="${"Password"}" class="${"svelte-2zytir"}">
      <a sveltekit:prefetch href="${"/forgot"}" id="${"forgot"}" class="${"svelte-2zytir"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Forgot`;
    }
  })}</a>
      ${`<div class="${"image svelte-2zytir"}">${validate_component(Hide, "HideSVG").$$render($$result, {}, {}, {})}</div>`}</div>


    ${validate_component(Button, "Button").$$render($$result, { width: "100%" }, {}, {
    default: () => {
      return `Sign In`;
    }
  })}
    
    ${validate_component(Button, "Button").$$render($$result, { width: "100%" }, {}, {
    default: () => {
      return `Authenticate with Google`;
    }
  })}

    <a sveltekit:prefetch href="${"/register"}" class="${"link svelte-2zytir"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Create account`;
    }
  })}</a>


    ${validate_component(ErrorMsg, "ErrorMsg").$$render($$result, { errorMsg }, {}, {})}</div>

  ${$loading ? `` : ``}` : `

  <button>Sign Out</button>${escape($auth.displayName)} (${escape($auth.email)})`}`}`;
});
export { Routes as default };
