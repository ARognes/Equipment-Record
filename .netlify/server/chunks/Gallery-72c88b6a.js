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
  G: () => Gallery
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("./index-1e667dfc.js");
var import_Loading_d732ebf6 = require("./Loading-d732ebf6.js");
var Gallery_svelte_svelte_type_style_lang = "";
const css = {
  code: ".blur.svelte-r4qjbe.svelte-r4qjbe{filter:blur(8px)}.noblur.svelte-r4qjbe.svelte-r4qjbe{transition:100ms all ease}#gallery.svelte-r4qjbe.svelte-r4qjbe{margin:0;padding:0;border:0;position:relative;top:0;left:0;width:100vw;height:100vw;display:flex;overflow-x:auto;overflow-y:hidden;white-space:nowrap;scroll-snap-type:x mandatory;scrollbar-width:none;background-color:black}#gallery.svelte-r4qjbe .image-container.svelte-r4qjbe{margin:0;padding:0;position:relative;object-fit:contain;flex-shrink:0;width:100vw;height:100vw;transition:250ms filter ease-in;scroll-snap-stop:always;scroll-snap-align:start;background-size:contain;background-repeat:no-repeat;background-position:center}#gallery.svelte-r4qjbe .loading-container.svelte-r4qjbe{margin:0;padding:0;position:relative;flex-shrink:0;width:100vw;height:100vw;transition:250ms filter ease-in;scroll-snap-stop:always;scroll-snap-align:start;background-color:white}#scroll-cover.svelte-r4qjbe.svelte-r4qjbe{margin:0;padding:0;border:0;position:absolute;top:100vw;left:0;width:100vw;height:30px;background-color:#ddd}#selector.svelte-r4qjbe.svelte-r4qjbe{position:absolute;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;top:calc(100vw - 30px);left:calc(50vw - 140px);width:280px;height:30px}#selector.svelte-r4qjbe .btnActive.svelte-r4qjbe{top:0;width:16px;height:16px;opacity:0.7;transition:100ms all ease}#selector.svelte-r4qjbe button.svelte-r4qjbe{position:relative;top:1px;margin:6px 10px;padding:0;border:0;border-radius:50%;width:14px;height:14px;background-color:white;opacity:0.5;transition:100ms all ease}",
  map: null
};
const Gallery = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let imgElem = [];
  let btnActive = 0;
  let gallery;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  $$result.css.add(css);
  return `<div id="${"gallery"}" class="${"svelte-r4qjbe"}"${(0, import_index_1e667dfc.i)("this", gallery, 0)}>${images != null ? `${(0, import_index_1e667dfc.j)(images, (img, i) => {
    return `${(img == null ? void 0 : img.src) ? `<div class="${(0, import_index_1e667dfc.e)((0, import_index_1e667dfc.k)("image-container " + (!img.done ? "blur" : "noblur"))) + " svelte-r4qjbe"}"${(0, import_index_1e667dfc.i)("style", `background-image: url(${img.src})`, 0)}${(0, import_index_1e667dfc.i)("this", imgElem[i], 0)}></div>` : `<div class="${"loading-container svelte-r4qjbe"}">${(0, import_index_1e667dfc.v)(import_Loading_d732ebf6.L, "Loading").$$render($$result, {}, {}, {})}
    </div>`}`;
  })}` : ``}</div>
<div id="${"scroll-cover"}" class="${"svelte-r4qjbe"}"></div>
${images.length > 1 ? `<div id="${"selector"}" class="${"svelte-r4qjbe"}">${(0, import_index_1e667dfc.j)(images, (img, i) => {
    return `<button class="${(0, import_index_1e667dfc.e)((0, import_index_1e667dfc.k)(btnActive == i ? "btnActive" : "")) + " svelte-r4qjbe"}"></button>`;
  })}</div>` : ``}`;
});
