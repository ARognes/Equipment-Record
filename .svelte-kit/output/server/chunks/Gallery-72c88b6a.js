import { c as create_ssr_component, i as add_attribute, j as each, e as escape, k as null_to_empty, v as validate_component } from "./index-1e667dfc.js";
import { L as Loading } from "./Loading-d732ebf6.js";
var Gallery_svelte_svelte_type_style_lang = "";
const css = {
  code: ".blur.svelte-r4qjbe.svelte-r4qjbe{filter:blur(8px)}.noblur.svelte-r4qjbe.svelte-r4qjbe{transition:100ms all ease}#gallery.svelte-r4qjbe.svelte-r4qjbe{margin:0;padding:0;border:0;position:relative;top:0;left:0;width:100vw;height:100vw;display:flex;overflow-x:auto;overflow-y:hidden;white-space:nowrap;scroll-snap-type:x mandatory;scrollbar-width:none;background-color:black}#gallery.svelte-r4qjbe .image-container.svelte-r4qjbe{margin:0;padding:0;position:relative;object-fit:contain;flex-shrink:0;width:100vw;height:100vw;transition:250ms filter ease-in;scroll-snap-stop:always;scroll-snap-align:start;background-size:contain;background-repeat:no-repeat;background-position:center}#gallery.svelte-r4qjbe .loading-container.svelte-r4qjbe{margin:0;padding:0;position:relative;flex-shrink:0;width:100vw;height:100vw;transition:250ms filter ease-in;scroll-snap-stop:always;scroll-snap-align:start;background-color:white}#scroll-cover.svelte-r4qjbe.svelte-r4qjbe{margin:0;padding:0;border:0;position:absolute;top:100vw;left:0;width:100vw;height:30px;background-color:#ddd}#selector.svelte-r4qjbe.svelte-r4qjbe{position:absolute;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;top:calc(100vw - 30px);left:calc(50vw - 140px);width:280px;height:30px}#selector.svelte-r4qjbe .btnActive.svelte-r4qjbe{top:0;width:16px;height:16px;opacity:0.7;transition:100ms all ease}#selector.svelte-r4qjbe button.svelte-r4qjbe{position:relative;top:1px;margin:6px 10px;padding:0;border:0;border-radius:50%;width:14px;height:14px;background-color:white;opacity:0.5;transition:100ms all ease}",
  map: null
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let imgElem = [];
  let btnActive = 0;
  let gallery;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  $$result.css.add(css);
  return `<div id="${"gallery"}" class="${"svelte-r4qjbe"}"${add_attribute("this", gallery, 0)}>${images != null ? `${each(images, (img, i) => {
    return `${img?.src ? `<div class="${escape(null_to_empty("image-container " + (!img.done ? "blur" : "noblur"))) + " svelte-r4qjbe"}"${add_attribute("style", `background-image: url(${img.src})`, 0)}${add_attribute("this", imgElem[i], 0)}></div>` : `<div class="${"loading-container svelte-r4qjbe"}">${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}
    </div>`}`;
  })}` : ``}</div>
<div id="${"scroll-cover"}" class="${"svelte-r4qjbe"}"></div>
${images.length > 1 ? `<div id="${"selector"}" class="${"svelte-r4qjbe"}">${each(images, (img, i) => {
    return `<button class="${escape(null_to_empty(btnActive == i ? "btnActive" : "")) + " svelte-r4qjbe"}"></button>`;
  })}</div>` : ``}`;
});
export { Gallery as G };
