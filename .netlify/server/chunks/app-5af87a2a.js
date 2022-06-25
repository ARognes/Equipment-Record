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
  app: () => app
});
module.exports = __toCommonJS(stdin_exports);
var import_app = require("firebase/app");
const privateKey = JSON.parse('{"apiKey":"AIzaSyAH4i8ugZfZMlbBTruvXJa4DSKaj361U6c","authDomain":"equipment-record-7aed6.firebaseapp.com","projectId":"equipment-record-7aed6","storageBucket":"equipment-record-7aed6.appspot.com","messagingSenderId":"142864501598","appId":"1:142864501598:web:59f7f61dd863cfba0e9dcf","measurementId":"G-JHE1LXPNQ9"}');
const app = (0, import_app.initializeApp)(privateKey);
