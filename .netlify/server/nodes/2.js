var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  css: () => css,
  entry: () => entry,
  js: () => js,
  module: () => module2
});
module.exports = __toCommonJS(stdin_exports);
var module2 = __toESM(require("../entries/pages/index.svelte.js"));
const entry = "pages/index.svelte-d0052821.js";
const js = ["pages/index.svelte-d0052821.js", "chunks/vendor-7483cdb5.js", "chunks/Loading-a6633037.js", "chunks/auth-887b2c39.js", "chunks/preload-helper-e4860ae8.js", "chunks/navigation-0e6511d1.js", "chunks/singletons-d1fb5791.js", "chunks/storage-c0d15549.js", "chunks/account-e554063a.js", "chunks/stores-0399aab1.js"];
const css = ["assets/pages/index.svelte-f35b40b8.css", "assets/Loading.svelte_svelte_type_style_lang-8d43aad4.css", "assets/vendor-dc74a490.css"];
