/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t){t.en=Object.assign(t.en||{},{a:"Cannot upload file:",b:"Image toolbar",c:"Table toolbar",d:"Bold",e:"Italic",f:"Block quote",g:"Insert image or file",h:"Choose heading",i:"Heading",j:"image widget",k:"Full size image",l:"Side image",m:"Left aligned image",n:"Centered image",o:"Right aligned image",p:"Insert image",q:"Numbered List",r:"Bulleted List",s:"Insert table",t:"Header column",u:"Insert column left",v:"Insert column right",w:"Delete column",x:"Column",y:"Header row",z:"Insert row below",aa:"Insert row above",ab:"Delete row",ac:"Row",ad:"Merge cell up",ae:"Merge cell right",af:"Merge cell down",ag:"Merge cell left",ah:"Split cell vertically",ai:"Split cell horizontally",aj:"Merge cells",ak:"Enter image caption",al:"Upload failed",am:"media widget",an:"Insert media",ao:"The URL must not be empty.",ap:"This media URL is not supported.",aq:"Link",ar:"Could not obtain resized image URL.",as:"Selecting resized image failed",at:"Could not insert image at the current position.",au:"Inserting image failed",av:"Widget toolbar",aw:"Upload in progress",ax:"Open in a new tab",ay:"Downloadable",az:"Unlink",ba:"Edit link",bb:"Open link in new tab",bc:"This link has no URL",bd:"Save",be:"Cancel",bf:"Link URL",bg:"Paste the media URL in the input.",bh:"Tip: Paste the URL into the content to embed faster.",bi:"Media URL",bj:"Undo",bk:"Redo",bl:"Editor toolbar",bm:"Rich Text Editor, %0",bn:"Rich Text Editor",bo:"Dropdown toolbar",bp:"%0 of %1",bq:"Previous",br:"Next",bs:"Change image text alternative",bt:"Paragraph",bu:"Heading 1",bv:"Heading 2",bw:"Heading 3",bx:"Heading 4",by:"Heading 5",bz:"Heading 6",ca:"Text alternative"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=91)}([function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});const i="https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html";class o extends Error{constructor(t,e,n){t=r(t),n&&(t+=" "+JSON.stringify(n)),super(t),this.name="CKEditorError",this.context=e,this.data=n}is(t){return"CKEditorError"===t}}function r(t){const e=t.match(/^([^:]+):/);return e?t+` Read more: ${i}#error-${e[1]}\n`:t}},function(t,e,n){"use strict";var i={},o=function(){var t;return function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t}}(),r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function a(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id],s=0;if(r){for(r.refs++;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(f(o.parts[s],e))}else{for(var a=[];s<o.parts.length;s++)a.push(f(o.parts[s],e));i[o.id]={id:o.id,refs:1,parts:a}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var i=n.nc;i&&(t.attributes.nonce=i)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function d(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}var h=null,u=0;function f(t,e){var n,i,o;if(e.singleton){var r=u++;n=h||(h=c(e)),i=d.bind(null,n,r,!1),o=d.bind(null,n,r,!0)}else n=c(e),i=function(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o&&t.setAttribute("media",o),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t,e);return a(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var c=n[r],l=i[c.id];l&&(l.refs--,o.push(l))}t&&a(s(t,e),e);for(var d=0;d<o.length;d++){var h=o[d];if(0===h.refs){for(var u=0;u<h.parts.length;u++)h.parts[u]();delete i[h.id]}}}}},,function(t,e,n){"use strict";var i=n(7),o="object"==typeof self&&self&&self.Object===Object&&self,r=i.a||o||Function("return this")();e.a=r},function(t,e,n){"use strict";(function(t){var i=n(7),o= true&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=r&&r.exports===o&&i.a.process,a=function(){try{var t=r&&r.require&&r.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(t){}}();e.a=a}).call(this,n(8)(t))},function(t,e,n){"use strict";(function(t){var i=n(3),o=n(11),r= true&&exports&&!exports.nodeType&&exports,s=r&&"object"==typeof t&&t&&!t.nodeType&&t,a=s&&s.exports===r?i.a.Buffer:void 0,c=(a?a.isBuffer:void 0)||o.a;e.a=c}).call(this,n(8)(t))},function(t,e,n){"use strict";(function(t){var e=n(13),i=n(0);const o="object"==typeof window?window:t;if(o.CKEDITOR_VERSION)throw new i.b("ckeditor-duplicated-modules: Some CKEditor 5 modules are duplicated.",null);o.CKEDITOR_VERSION=e.a}).call(this,n(9))},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(9))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var i=n(68);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){"use strict";e.a=function(){return!1}},function(t,e,n){"use strict";(function(t){var i=n(3),o= true&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=r&&r.exports===o?i.a.Buffer:void 0,a=s?s.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var n=t.length,i=a?a(n):new t.constructor(n);return t.copy(i),i}}).call(this,n(8)(t))},function(t){t.exports=JSON.parse('{"a":"12.4.0"}')},function(t,e,n){var i=n(15);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none;cursor:text;color:var(--ck-color-engine-placeholder-text)}"},function(t,e,n){var i=n(17);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:rgba(119,186,248,0.5);--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}"},function(t,e,n){var i=n(19);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"},function(t,e,n){var i=n(21);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"},function(t,e,n){var i=n(23);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}"},function(t,e,n){var i=n(25);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row wrap;align-items:center}.ck.ck-toolbar.ck-toolbar_vertical{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating{flex-wrap:nowrap}.ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar__newline{display:block;width:100%}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>*{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-toolbar>*{margin-left:var(--ck-spacing-small);margin-right:0}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck{width:100%;margin:0;border-radius:0;border:0}[dir=ltr] .ck.ck-toolbar>:last-child{margin-right:0}[dir=rtl] .ck.ck-toolbar>:last-child{margin-left:0}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar__separator{align-self:stretch;width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck.ck-toolbar__newline{margin:0}"},function(t,e,n){var i=n(27);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"},function(t,e,n){var i=n(29);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}"},function(t,e,n){var i=n(31);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}'},function(t,e,n){var i=n(33);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1*var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:calc(-1*var(--ck-spacing-small));margin-left:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"},function(t,e,n){var i=n(35);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}"},function(t,e,n){var i=n(37);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-resizer-size:10px;--ck-resizer-border-width:1px;--ck-resizer-border-radius:2px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-tooltip-offset:10px;--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2}.ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;position:absolute;pointer-events:none;left:0;top:0;outline:1px solid var(--ck-color-resizer)}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{position:absolute;pointer-events:all;width:var(--ck-resizer-size);height:var(--ck-resizer-size);background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{top:var(--ck-resizer-offset);left:var(--ck-resizer-offset);cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{top:var(--ck-resizer-offset);right:var(--ck-resizer-offset);cursor:nesw-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset);cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset);cursor:nesw-resize}.ck .ck-widget.ck-widget_with-selection-handler{position:relative}.ck .ck-widget.ck-widget_with-selection-handler:hover .ck-widget__selection-handler{visibility:visible}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler{position:absolute}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck-editor__editable>.ck-widget.ck-widget_with-selection-handler:first-child,.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handler:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler,.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected:hover .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handler:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler:hover,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler:hover{background:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-read-only .ck-widget{--ck-widget-outline-thickness:0}"},function(t,e,n){var i=n(39);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-labeled-input .ck-labeled-input__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-input .ck-labeled-input__status_error{color:var(--ck-color-base-error)}"},function(t,e,n){var i=n(41);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition-property:box-shadow,border;transition:.2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),var(--ck-inner-shadow)}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}"},function(t,e,n){var i=n(43);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-input{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}[dir=ltr] .ck.ck-text-alternative-form>:not(:first-child),[dir=rtl] .ck.ck-text-alternative-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-text-alternative-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-text-alternative-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-text-alternative-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-text-alternative-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-text-alternative-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-text-alternative-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(45);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}'},function(t,e,n){var i=n(47);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}"},function(t,e,n){var i=n(49);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}"},function(t,e,n){var i=n(51);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .image{display:table;clear:both;text-align:center;margin:1em auto}.ck-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}"},function(t,e,n){var i=n(53);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-editor__editable .image{position:relative}.ck.ck-editor__editable .image .ck-progress-bar{position:absolute;top:0;left:0}.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"},function(t,e,n){var i=n(55);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'},function(t,e,n){var i=n(57);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'},function(t,e,n){var i=n(59);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block;will-change:transform}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{transform:translate3d(0,100%,0)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}:root{--ck-dropdown-arrow-size:calc(0.5*var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}"},function(t,e,n){var i=n(61);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;border:0;padding:calc(0.2*var(--ck-line-height-base)*var(--ck-font-size-base)) calc(0.4*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(1.2*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"},function(t,e,n){var i=n(63);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:1.3846153847em}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2*var(--ck-spacing-large))}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(2*var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(0.5*var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all .3s ease}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var(--ck-switch-button-translation))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(-1*var(--ck-switch-button-translation)))}"},function(t,e,n){var i=n(65);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-toolbar-dropdown .ck-toolbar{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"},function(t,e,n){var i=n(67);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"},function(t,e){t.exports=".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"},function(t,e,n){var i=n(70);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}"},function(t,e,n){var i=n(72);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center:not(.image_resized),.ck-content .image-style-align-left:not(.image_resized),.ck-content .image-style-align-right:not(.image_resized),.ck-content .image-style-side:not(.image_resized){max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}"},function(t,e,n){var i=n(74);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}"},function(t,e,n){var i=n(76);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-input{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}[dir=ltr] .ck.ck-link-form>:not(:first-child),[dir=rtl] .ck.ck-link-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-text-width)}.ck.ck-link-form_layout-vertical .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{padding:var(--ck-spacing-standard);margin:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin-left:0}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}"},function(t,e,n){var i=n(78);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):last-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(80);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(3*var(--ck-spacing-standard));background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMDAzLjc4IDEuNjFoNDkuNjIxYzEuNjk0IDAgMy4xOS0uNzk4IDQuMTQ2LTIuMDM3eiIgZmlsbD0iIzVjODhjNSIvPjxwYXRoIGQ9Ik0yMjYuNzQyIDIyMi45ODhjLTkuMjY2IDAtMTYuNzc3IDcuMTctMTYuNzc3IDE2LjAxNC4wMDcgMi43NjIuNjYzIDUuNDc0IDIuMDkzIDcuODc1LjQzLjcwMy44MyAxLjQwOCAxLjE5IDIuMTA3LjMzMy41MDIuNjUgMS4wMDUuOTUgMS41MDguMzQzLjQ3Ny42NzMuOTU3Ljk4OCAxLjQ0IDEuMzEgMS43NjkgMi41IDMuNTAyIDMuNjM3IDUuMTY4Ljc5MyAxLjI3NSAxLjY4MyAyLjY0IDIuNDY2IDMuOTkgMi4zNjMgNC4wOTQgNC4wMDcgOC4wOTIgNC42IDEzLjkxNHYuMDEyYy4xODIuNDEyLjUxNi42NjYuODc5LjY2Ny40MDMtLjAwMS43NjgtLjMxNC45My0uNzk5LjYwMy01Ljc1NiAyLjIzOC05LjcyOSA0LjU4NS0xMy43OTQuNzgyLTEuMzUgMS42NzMtMi43MTUgMi40NjUtMy45OSAxLjEzNy0xLjY2NiAyLjMyOC0zLjQgMy42MzgtNS4xNjkuMzE1LS40ODIuNjQ1LS45NjIuOTg4LTEuNDM5LjMtLjUwMy42MTctMS4wMDYuOTUtMS41MDguMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0eiIgZmlsbD0iI2RkNGIzZSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48ZWxsaXBzZSByeT0iNS41NjQiIHJ4PSI1LjgyOCIgY3k9IjIzOS4wMDIiIGN4PSIyMjYuNzQyIiBmaWxsPSIjODAyZDI3IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0xOTAuMzAxIDIzNy4yODNjLTQuNjcgMC04LjQ1NyAzLjg1My04LjQ1NyA4LjYwNnMzLjc4NiA4LjYwNyA4LjQ1NyA4LjYwN2MzLjA0MyAwIDQuODA2LS45NTggNi4zMzctMi41MTYgMS41My0xLjU1NyAyLjA4Ny0zLjkxMyAyLjA4Ny02LjI5IDAtLjM2Mi0uMDIzLS43MjItLjA2NC0xLjA3OWgtOC4yNTd2My4wNDNoNC44NWMtLjE5Ny43NTktLjUzMSAxLjQ1LTEuMDU4IDEuOTg2LS45NDIuOTU4LTIuMDI4IDEuNTQ4LTMuOTAxIDEuNTQ4LTIuODc2IDAtNS4yMDgtMi4zNzItNS4yMDgtNS4yOTkgMC0yLjkyNiAyLjMzMi01LjI5OSA1LjIwOC01LjI5OSAxLjM5OSAwIDIuNjE4LjQwNyAzLjU4NCAxLjI5M2wyLjM4MS0yLjM4YzAtLjAwMi0uMDAzLS4wMDQtLjAwNC0uMDA1LTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTV6bTQuNDMgNS42NmwuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxNS4xODQgMjUxLjkyOWwtNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMjMzIDUuMjMzIDAgMDAuNDQ5LTIuMTIzdi0zMS4xNjVjLS40NjkuNjc1LS45MzQgMS4zNDktMS4zODIgMi4wMDUtLjc5MiAxLjI3NS0xLjY4MiAyLjY0LTIuNDY1IDMuOTktMi4zNDcgNC4wNjUtMy45ODIgOC4wMzgtNC41ODUgMTMuNzk0LS4xNjIuNDg1LS41MjcuNzk4LS45My43OTktLjM2My0uMDAxLS42OTctLjI1NS0uODc5LS42Njd2LS4wMTJjLS41OTMtNS44MjItMi4yMzctOS44Mi00LjYtMTMuOTE0LS43ODMtMS4zNS0xLjY3My0yLjcxNS0yLjQ2Ni0zLjk5LTEuMTM3LTEuNjY2LTIuMzI3LTMuNC0zLjYzNy01LjE2OWwtLjAwMi0uMDAzeiIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yMTIuOTgzIDI0OC40OTVsLTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAwNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAwLS45ODktMS40NCAzNS4xMjcgMzUuMTI3IDAgMDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMDA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c8,#b900b4,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}'},function(t,e,n){var i=n(82);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-input{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-input{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}.ck.ck-media-form{padding:var(--ck-spacing-standard)}.ck.ck-media-form:focus{outline:none}[dir=ltr] .ck.ck-media-form>:not(:first-child),[dir=rtl] .ck.ck-media-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-media-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-media-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-media-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-media-form .ck-labeled-input .ck-labeled-input__error{white-space:normal}.ck.ck-media-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-media-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-media-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-media-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-media-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(84);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .media{clear:both;margin:1em 0;display:block;min-width:15em}"},function(t,e,n){var i=n(86);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-color-table-focused-cell-background:#f5fafe}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}"},function(t,e,n){var i=n(88);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px;--ck-insert-table-dropdown-box-border-color:#bfbfbf;--ck-insert-table-dropdown-box-border-active-color:#53a0e4;--ck-insert-table-dropdown-box-active-background:#c7e5ff}.ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-insert-table-dropdown-box-border-color);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-insert-table-dropdown-box-border-active-color);background:var(--ck-insert-table-dropdown-box-active-background)}"},function(t,e,n){var i=n(90);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border-color:#d9d9d9}.ck-content .table table th{font-weight:700;background:#fafafa}"},function(t,e,n){"use strict";n.r(e);var i=n(3),o=i.a.Symbol,r=Object.prototype,s=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;var l=function(t){var e=s.call(t,c),n=t[c];try{t[c]=void 0;var i=!0}catch(t){}var o=a.call(t);return i&&(e?t[c]=n:delete t[c]),o},d=Object.prototype.toString;var h=function(t){return d.call(t)},u="[object Null]",f="[object Undefined]",m=o?o.toStringTag:void 0;var g=function(t){return null==t?void 0===t?f:u:m&&m in Object(t)?l(t):h(t)};var p=function(t,e){return function(n){return t(e(n))}},b=p(Object.getPrototypeOf,Object);var w=function(t){return null!=t&&"object"==typeof t},k="[object Object]",_=Function.prototype,v=Object.prototype,y=_.toString,x=v.hasOwnProperty,A=y.call(Object);var T=function(t){if(!w(t)||g(t)!=k)return!1;var e=b(t);if(null===e)return!0;var n=x.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&y.call(n)==A};var C=function(){this.__data__=[],this.size=0};var P=function(t,e){return t===e||t!=t&&e!=e};var S=function(t,e){for(var n=t.length;n--;)if(P(t[n][0],e))return n;return-1},M=Array.prototype.splice;var E=function(t){var e=this.__data__,n=S(e,t);return!(n<0||(n==e.length-1?e.pop():M.call(e,n,1),--this.size,0))};var I=function(t){var e=this.__data__,n=S(e,t);return n<0?void 0:e[n][1]};var N=function(t){return S(this.__data__,t)>-1};var O=function(t,e){var n=this.__data__,i=S(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function R(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}R.prototype.clear=C,R.prototype.delete=E,R.prototype.get=I,R.prototype.has=N,R.prototype.set=O;var D=R;var L=function(){this.__data__=new D,this.size=0};var j=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var V=function(t){return this.__data__.get(t)};var z=function(t){return this.__data__.has(t)};var B=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},F="[object AsyncFunction]",U="[object Function]",H="[object GeneratorFunction]",q="[object Proxy]";var W=function(t){if(!B(t))return!1;var e=g(t);return e==U||e==H||e==F||e==q},Y=i.a["__core-js_shared__"],$=function(){var t=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var G=function(t){return!!$&&$ in t},Q=Function.prototype.toString;var K=function(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""},J=/^\[object .+?Constructor\]$/,Z=Function.prototype,X=Object.prototype,tt=Z.toString,et=X.hasOwnProperty,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var it=function(t){return!(!B(t)||G(t))&&(W(t)?nt:J).test(K(t))};var ot=function(t,e){return null==t?void 0:t[e]};var rt=function(t,e){var n=ot(t,e);return it(n)?n:void 0},st=rt(i.a,"Map"),at=rt(Object,"create");var ct=function(){this.__data__=at?at(null):{},this.size=0};var lt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt="__lodash_hash_undefined__",ht=Object.prototype.hasOwnProperty;var ut=function(t){var e=this.__data__;if(at){var n=e[t];return n===dt?void 0:n}return ht.call(e,t)?e[t]:void 0},ft=Object.prototype.hasOwnProperty;var mt=function(t){var e=this.__data__;return at?void 0!==e[t]:ft.call(e,t)},gt="__lodash_hash_undefined__";var pt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=at&&void 0===e?gt:e,this};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}bt.prototype.clear=ct,bt.prototype.delete=lt,bt.prototype.get=ut,bt.prototype.has=mt,bt.prototype.set=pt;var wt=bt;var kt=function(){this.size=0,this.__data__={hash:new wt,map:new(st||D),string:new wt}};var _t=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var vt=function(t,e){var n=t.__data__;return _t(e)?n["string"==typeof e?"string":"hash"]:n.map};var yt=function(t){var e=vt(this,t).delete(t);return this.size-=e?1:0,e};var xt=function(t){return vt(this,t).get(t)};var At=function(t){return vt(this,t).has(t)};var Tt=function(t,e){var n=vt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ct.prototype.clear=kt,Ct.prototype.delete=yt,Ct.prototype.get=xt,Ct.prototype.has=At,Ct.prototype.set=Tt;var Pt=Ct,St=200;var Mt=function(t,e){var n=this.__data__;if(n instanceof D){var i=n.__data__;if(!st||i.length<St-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new Pt(i)}return n.set(t,e),this.size=n.size,this};function Et(t){var e=this.__data__=new D(t);this.size=e.size}Et.prototype.clear=L,Et.prototype.delete=j,Et.prototype.get=V,Et.prototype.has=z,Et.prototype.set=Mt;var It=Et;var Nt=function(t,e){for(var n=-1,i=null==t?0:t.length;++n<i&&!1!==e(t[n],n,t););return t},Ot=function(){try{var t=rt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Rt=function(t,e,n){"__proto__"==e&&Ot?Ot(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},Dt=Object.prototype.hasOwnProperty;var Lt=function(t,e,n){var i=t[e];Dt.call(t,e)&&P(i,n)&&(void 0!==n||e in t)||Rt(t,e,n)};var jt=function(t,e,n,i){var o=!n;n||(n={});for(var r=-1,s=e.length;++r<s;){var a=e[r],c=i?i(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?Rt(n,a,c):Lt(n,a,c)}return n};var Vt=function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i},zt="[object Arguments]";var Bt=function(t){return w(t)&&g(t)==zt},Ft=Object.prototype,Ut=Ft.hasOwnProperty,Ht=Ft.propertyIsEnumerable,qt=Bt(function(){return arguments}())?Bt:function(t){return w(t)&&Ut.call(t,"callee")&&!Ht.call(t,"callee")},Wt=Array.isArray,Yt=n(5),$t=9007199254740991,Gt=/^(?:0|[1-9]\d*)$/;var Qt=function(t,e){var n=typeof t;return!!(e=null==e?$t:e)&&("number"==n||"symbol"!=n&&Gt.test(t))&&t>-1&&t%1==0&&t<e},Kt=9007199254740991;var Jt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Kt},Zt={};Zt["[object Float32Array]"]=Zt["[object Float64Array]"]=Zt["[object Int8Array]"]=Zt["[object Int16Array]"]=Zt["[object Int32Array]"]=Zt["[object Uint8Array]"]=Zt["[object Uint8ClampedArray]"]=Zt["[object Uint16Array]"]=Zt["[object Uint32Array]"]=!0,Zt["[object Arguments]"]=Zt["[object Array]"]=Zt["[object ArrayBuffer]"]=Zt["[object Boolean]"]=Zt["[object DataView]"]=Zt["[object Date]"]=Zt["[object Error]"]=Zt["[object Function]"]=Zt["[object Map]"]=Zt["[object Number]"]=Zt["[object Object]"]=Zt["[object RegExp]"]=Zt["[object Set]"]=Zt["[object String]"]=Zt["[object WeakMap]"]=!1;var Xt=function(t){return w(t)&&Jt(t.length)&&!!Zt[g(t)]};var te=function(t){return function(e){return t(e)}},ee=n(4),ne=ee.a&&ee.a.isTypedArray,ie=ne?te(ne):Xt,oe=Object.prototype.hasOwnProperty;var re=function(t,e){var n=Wt(t),i=!n&&qt(t),o=!n&&!i&&Object(Yt.a)(t),r=!n&&!i&&!o&&ie(t),s=n||i||o||r,a=s?Vt(t.length,String):[],c=a.length;for(var l in t)!e&&!oe.call(t,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||r&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Qt(l,c))||a.push(l);return a},se=Object.prototype;var ae=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||se)},ce=p(Object.keys,Object),le=Object.prototype.hasOwnProperty;var de=function(t){if(!ae(t))return ce(t);var e=[];for(var n in Object(t))le.call(t,n)&&"constructor"!=n&&e.push(n);return e};var he=function(t){return null!=t&&Jt(t.length)&&!W(t)};var ue=function(t){return he(t)?re(t):de(t)};var fe=function(t,e){return t&&jt(e,ue(e),t)};var me=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},ge=Object.prototype.hasOwnProperty;var pe=function(t){if(!B(t))return me(t);var e=ae(t),n=[];for(var i in t)("constructor"!=i||!e&&ge.call(t,i))&&n.push(i);return n};var be=function(t){return he(t)?re(t,!0):pe(t)};var we=function(t,e){return t&&jt(e,be(e),t)},ke=n(12);var _e=function(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e};var ve=function(t,e){for(var n=-1,i=null==t?0:t.length,o=0,r=[];++n<i;){var s=t[n];e(s,n,t)&&(r[o++]=s)}return r};var ye=function(){return[]},xe=Object.prototype.propertyIsEnumerable,Ae=Object.getOwnPropertySymbols,Te=Ae?function(t){return null==t?[]:(t=Object(t),ve(Ae(t),function(e){return xe.call(t,e)}))}:ye;var Ce=function(t,e){return jt(t,Te(t),e)};var Pe=function(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t},Se=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Pe(e,Te(t)),t=b(t);return e}:ye;var Me=function(t,e){return jt(t,Se(t),e)};var Ee=function(t,e,n){var i=e(t);return Wt(t)?i:Pe(i,n(t))};var Ie=function(t){return Ee(t,ue,Te)};var Ne=function(t){return Ee(t,be,Se)},Oe=rt(i.a,"DataView"),Re=rt(i.a,"Promise"),De=rt(i.a,"Set"),Le=rt(i.a,"WeakMap"),je=K(Oe),Ve=K(st),ze=K(Re),Be=K(De),Fe=K(Le),Ue=g;(Oe&&"[object DataView]"!=Ue(new Oe(new ArrayBuffer(1)))||st&&"[object Map]"!=Ue(new st)||Re&&"[object Promise]"!=Ue(Re.resolve())||De&&"[object Set]"!=Ue(new De)||Le&&"[object WeakMap]"!=Ue(new Le))&&(Ue=function(t){var e=g(t),n="[object Object]"==e?t.constructor:void 0,i=n?K(n):"";if(i)switch(i){case je:return"[object DataView]";case Ve:return"[object Map]";case ze:return"[object Promise]";case Be:return"[object Set]";case Fe:return"[object WeakMap]"}return e});var He=Ue,qe=Object.prototype.hasOwnProperty;var We=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&qe.call(t,"index")&&(n.index=t.index,n.input=t.input),n},Ye=i.a.Uint8Array;var $e=function(t){var e=new t.constructor(t.byteLength);return new Ye(e).set(new Ye(t)),e};var Ge=function(t,e){var n=e?$e(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)},Qe=/\w*$/;var Ke=function(t){var e=new t.constructor(t.source,Qe.exec(t));return e.lastIndex=t.lastIndex,e},Je=o?o.prototype:void 0,Ze=Je?Je.valueOf:void 0;var Xe=function(t){return Ze?Object(Ze.call(t)):{}};var tn=function(t,e){var n=e?$e(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},en="[object Boolean]",nn="[object Date]",on="[object Map]",rn="[object Number]",sn="[object RegExp]",an="[object Set]",cn="[object String]",ln="[object Symbol]",dn="[object ArrayBuffer]",hn="[object DataView]",un="[object Float32Array]",fn="[object Float64Array]",mn="[object Int8Array]",gn="[object Int16Array]",pn="[object Int32Array]",bn="[object Uint8Array]",wn="[object Uint8ClampedArray]",kn="[object Uint16Array]",_n="[object Uint32Array]";var vn=function(t,e,n){var i=t.constructor;switch(e){case dn:return $e(t);case en:case nn:return new i(+t);case hn:return Ge(t,n);case un:case fn:case mn:case gn:case pn:case bn:case wn:case kn:case _n:return tn(t,n);case on:return new i;case rn:case cn:return new i(t);case sn:return Ke(t);case an:return new i;case ln:return Xe(t)}},yn=Object.create,xn=function(){function t(){}return function(e){if(!B(e))return{};if(yn)return yn(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();var An=function(t){return"function"!=typeof t.constructor||ae(t)?{}:xn(b(t))},Tn="[object Map]";var Cn=function(t){return w(t)&&He(t)==Tn},Pn=ee.a&&ee.a.isMap,Sn=Pn?te(Pn):Cn,Mn="[object Set]";var En=function(t){return w(t)&&He(t)==Mn},In=ee.a&&ee.a.isSet,Nn=In?te(In):En,On=1,Rn=2,Dn=4,Ln="[object Arguments]",jn="[object Function]",Vn="[object GeneratorFunction]",zn="[object Object]",Bn={};Bn[Ln]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object DataView]"]=Bn["[object Boolean]"]=Bn["[object Date]"]=Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn[zn]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object Symbol]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=!0,Bn["[object Error]"]=Bn[jn]=Bn["[object WeakMap]"]=!1;var Fn=function t(e,n,i,o,r,s){var a,c=n&On,l=n&Rn,d=n&Dn;if(i&&(a=r?i(e,o,r,s):i(e)),void 0!==a)return a;if(!B(e))return e;var h=Wt(e);if(h){if(a=We(e),!c)return _e(e,a)}else{var u=He(e),f=u==jn||u==Vn;if(Object(Yt.a)(e))return Object(ke.a)(e,c);if(u==zn||u==Ln||f&&!r){if(a=l||f?{}:An(e),!c)return l?Me(e,we(a,e)):Ce(e,fe(a,e))}else{if(!Bn[u])return r?e:{};a=vn(e,u,c)}}s||(s=new It);var m=s.get(e);if(m)return m;s.set(e,a),Nn(e)?e.forEach(function(o){a.add(t(o,n,i,o,e,s))}):Sn(e)&&e.forEach(function(o,r){a.set(r,t(o,n,i,r,e,s))});var g=d?l?Ne:Ie:l?keysIn:ue,p=h?void 0:g(e);return Nt(p||e,function(o,r){p&&(o=e[r=o]),Lt(a,r,t(o,n,i,r,e,s))}),a},Un=1,Hn=4;var qn=function(t,e){return Fn(t,Un|Hn,e="function"==typeof e?e:void 0)};var Wn=function(t){return w(t)&&1===t.nodeType&&!T(t)};class Yn{constructor(t,e){this._config={},e&&this.define(e),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}_setToTarget(t,e,n,i=!1){if(T(e))return void this._setObjectToTarget(t,e,i);const o=e.split(".");e=o.pop();for(const e of o)T(t[e])||(t[e]={}),t=t[e];if(T(n))return T(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&void 0!==t[e]||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const e of n){if(!T(t[e])){t=null;break}t=t[e]}return t?function(t){return qn(t,$n)}(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function $n(t){return Wn(t)?t:void 0}var Gn=n(0);var Qn=function(){return function t(){t.called=!0}};class Kn{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=Qn(),this.off=Qn()}}function Jn(){let t="e";for(let e=0;e<8;e++)t+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return t}var Zn={get(t){return"number"!=typeof t?this[t]||this.normal:t},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};n(6);const Xn=Symbol("listeningTo"),ti=Symbol("emitterId");var ei={on(t,e,n={}){this.listenTo(this,t,e,n)},once(t,e,n){let i=!1;this.listenTo(this,t,function(t,...n){i||(i=!0,t.off(),e.call(this,t,...n))},n)},off(t,e){this.stopListening(this,t,e)},listenTo(t,e,n,i={}){let o,r;this[Xn]||(this[Xn]={});const s=this[Xn];ii(t)||ni(t);const a=ii(t);(o=s[a])||(o=s[a]={emitter:t,callbacks:{}}),(r=o.callbacks[e])||(r=o.callbacks[e]=[]),r.push(n),function(t,e){const n=oi(t);if(n[e])return;let i=e,o=null;const r=[];for(;""!==i&&!n[i];)n[i]={callbacks:[],childEvents:[]},r.push(n[i]),o&&n[i].childEvents.push(o),o=i,i=i.substr(0,i.lastIndexOf(":"));if(""!==i){for(const t of r)t.callbacks=n[i].callbacks.slice();n[i].childEvents.push(o)}}(t,e);const c=ri(t,e),l=Zn.get(i.priority),d={callback:n,priority:l};for(const t of c){let e=!1;for(let n=0;n<t.length;n++)if(t[n].priority<l){t.splice(n,0,d),e=!0;break}e||t.push(d)}},stopListening(t,e,n){const i=this[Xn];let o=t&&ii(t);const r=i&&o&&i[o],s=r&&e&&r.callbacks[e];if(!(!i||t&&!r||e&&!s))if(n)ai(t,e,n);else if(s){for(;n=s.pop();)ai(t,e,n);delete r.callbacks[e]}else if(r){for(e in r.callbacks)this.stopListening(t,e);delete i[o]}else{for(o in i)this.stopListening(i[o].emitter);delete this[Xn]}},fire(t,...e){const n=t instanceof Kn?t:new Kn(this,t),i=n.name;let o=function t(e,n){let i;if(!e._events||!(i=e._events[n])||!i.callbacks.length)return n.indexOf(":")>-1?t(e,n.substr(0,n.lastIndexOf(":"))):null;return i.callbacks}(this,i);if(n.path.push(this),o){const t=[n,...e];o=Array.from(o);for(let e=0;e<o.length&&(o[e].callback.apply(this,t),n.off.called&&(delete n.off.called,ai(this,i,o[e].callback)),!n.stop.called);e++);}if(this._delegations){const t=this._delegations.get(i),o=this._delegations.get("*");t&&si(t,n,e),o&&si(o,n,e)}return n.return},delegate(...t){return{to:(e,n)=>{this._delegations||(this._delegations=new Map),t.forEach(t=>{const i=this._delegations.get(t);i?i.set(e,n):this._delegations.set(t,new Map([[e,n]]))})}}},stopDelegating(t,e){if(this._delegations)if(t)if(e){const n=this._delegations.get(t);n&&n.delete(e)}else this._delegations.delete(t);else this._delegations.clear()}};function ni(t,e){t[ti]||(t[ti]=e||Jn())}function ii(t){return t[ti]}function oi(t){return t._events||Object.defineProperty(t,"_events",{value:{}}),t._events}function ri(t,e){const n=oi(t)[e];if(!n)return[];let i=[n.callbacks];for(let e=0;e<n.childEvents.length;e++){const o=ri(t,n.childEvents[e]);i=i.concat(o)}return i}function si(t,e,n){for(let[i,o]of t){o?"function"==typeof o&&(o=o(e.name)):o=e.name;const t=new Kn(e.source,o);t.path=[...e.path],i.fire(t,...n)}}function ai(t,e,n){const i=ri(t,e);for(const t of i)for(let e=0;e<t.length;e++)t[e].callback==n&&(t.splice(e,1),e--)}function ci(t,...e){e.forEach(e=>{Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n=>{if(n in t.prototype)return;const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable=!1,Object.defineProperty(t.prototype,n,i)})})}function li(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++)if(t[i]!=e[i])return i;return t.length==e.length?"same":t.length<e.length?"prefix":"extension"}var di=4;var hi=function(t){return Fn(t,di)};class ui{constructor(){this.parent=null}get index(){let t;if(!this.parent)return null;if(-1==(t=this.parent.getChildIndex(this)))throw new Gn.b("view-node-not-found-in-parent: The node's parent does not contain this node.",this);return t}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}get document(){return this.parent instanceof ui?this.parent.document:null}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=li(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire("change:"+t,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=hi(this);return delete t.parent,t}is(t){return"node"==t||"view:node"==t}}ci(ui,ei);class fi extends ui{constructor(t){super(),this._textData=t}is(t){return"text"==t||"view:text"==t||super.is(t)}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof fi&&(this===t||this.data===t.data)}_clone(){return new fi(this.data)}}class mi{constructor(t,e,n){if(this.textNode=t,e<0||e>t.data.length)throw new Gn.b("view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.",this);if(n<0||e+n>t.data.length)throw new Gn.b("view-textproxy-wrong-length: Given length value is incorrect.",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return"textProxy"==t||"view:textProxy"==t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;null!==n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}function gi(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}function pi(t){return!(!t||!t[Symbol.iterator])}class bi{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)("string"==typeof e||e instanceof RegExp)&&(e={name:e}),e.classes&&("string"==typeof e.classes||e.classes instanceof RegExp)&&(e.classes=[e.classes]),this._patterns.push(e)}match(...t){for(const e of t)for(const t of this._patterns){const n=wi(e,t);if(n)return{element:e,pattern:t,match:n}}return null}matchAll(...t){const e=[];for(const n of t)for(const t of this._patterns){const i=wi(n,t);i&&e.push({element:n,pattern:t,match:i})}return e.length>0?e:null}getElementName(){if(1!==this._patterns.length)return null;const t=this._patterns[0],e=t.name;return"function"==typeof t||!e||e instanceof RegExp?null:e}}function wi(t,e){if("function"==typeof e)return e(t);const n={};return e.name&&(n.name=function(t,e){if(t instanceof RegExp)return t.test(e);return t===e}(e.name,t.name),!n.name)?null:e.attributes&&(n.attributes=function(t,e){const n=[];for(const i in t){const o=t[i];if(!e.hasAttribute(i))return null;{const t=e.getAttribute(i);if(!0===o)n.push(i);else if(o instanceof RegExp){if(!o.test(t))return null;n.push(i)}else{if(t!==o)return null;n.push(i)}}}return n}(e.attributes,t),!n.attributes)?null:!(e.classes&&(n.classes=function(t,e){const n=[];for(const i of t)if(i instanceof RegExp){const t=e.getClassNames();for(const e of t)i.test(e)&&n.push(e);if(0===n.length)return null}else{if(!e.hasClass(i))return null;n.push(i)}return n}(e.classes,t),!n.classes))&&(!(e.styles&&(n.styles=function(t,e){const n=[];for(const i in t){const o=t[i];if(!e.hasStyle(i))return null;{const t=e.getStyle(i);if(o instanceof RegExp){if(!o.test(t))return null;n.push(i)}else{if(t!==o)return null;n.push(i)}}}return n}(e.styles,t),!n.styles))&&n)}class ki extends ui{constructor(t,e,n){if(super(),this.name=t,this._attrs=function(t){t=T(t)?gi(t):new Map(t);for(const[e,n]of t)null===n?t.delete(e):"string"!=typeof n&&t.set(e,String(n));return t}(e),this._children=[],n&&this._insertChild(0,n),this._classes=new Set,this._attrs.has("class")){const t=this._attrs.get("class");vi(this._classes,t),this._attrs.delete("class")}this._styles=new Map,this._attrs.has("style")&&(_i(this._styles,this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map}get childCount(){return this._children.length}get isEmpty(){return 0===this._children.length}is(t,e=null){const n=t.replace(/^view:/,"");return e?"element"==n&&e==this.name:"element"==n||n==this.name||super.is(t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.size>0&&(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.size>0&&(yield["style",this.getAttribute("style")])}getAttribute(t){if("class"==t)return this._classes.size>0?[...this._classes].join(" "):void 0;if("style"!=t)return this._attrs.get(t);if(this._styles.size>0){let t="";for(const[e,n]of this._styles)t+=`${e}:${n};`;return t}}hasAttribute(t){return"class"==t?this._classes.size>0:"style"==t?this._styles.size>0:this._attrs.has(t)}isSimilar(t){if(!(t instanceof ki))return!1;if(this===t)return!0;if(this.name!=t.name)return!1;if(this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const[e,n]of this._styles)if(!t._styles.has(e)||t._styles.get(e)!==n)return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.get(t)}getStyleNames(){return this._styles.keys()}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new bi(...t);let n=this.parent;for(;n;){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=Array.from(this._styles).map(t=>`${t[0]}:${t[1]}`).sort().join(";"),n=Array.from(this._attrs).map(t=>`${t[0]}="${t[1]}"`).sort().join(" ");return this.name+(""==t?"":` class="${t}"`)+(""==e?"":` style="${e}"`)+(""==n?"":` ${n}`)}_clone(t=!1){const e=[];if(t)for(const n of this.getChildren())e.push(n._clone(t));const n=new this.constructor(this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles=new Map(this._styles),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(t){if("string"==typeof t)return[new fi(t)];pi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new fi(t):t instanceof mi?new fi(t.data):t)}(e);for(const e of i)null!==e.parent&&e._remove(),e.parent=this,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){e=String(e),this._fireChange("attributes",this),"class"==t?vi(this._classes,e):"style"==t?_i(this._styles,e):this._attrs.set(t,e)}_removeAttribute(t){return this._fireChange("attributes",this),"class"==t?this._classes.size>0&&(this._classes.clear(),!0):"style"==t?this._styles.size>0&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.add(t))}_removeClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.delete(t))}_setStyle(t,e){if(this._fireChange("attributes",this),T(t)){const e=Object.keys(t);for(const n of e)this._styles.set(n,t[n])}else this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._styles.delete(t))}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function _i(t,e){let n=null,i=0,o=0,r=null;if(t.clear(),""!==e){";"!=e.charAt(e.length-1)&&(e+=";");for(let s=0;s<e.length;s++){const a=e.charAt(s);if(null===n)switch(a){case":":r||(r=e.substr(i,s-i),o=s+1);break;case'"':case"'":n=a;break;case";":{const n=e.substr(o,s-o);r&&t.set(r.trim(),n.trim()),r=null,i=s+1;break}}else a===n&&(n=null)}}}function vi(t,e){const n=e.split(/\s+/);t.clear(),n.forEach(e=>t.add(e))}class yi extends ki{constructor(t,e,n){super(t,e,n),this.getFillerOffset=xi}is(t,e=null){const n=t&&t.replace(/^view:/,"");return e?"containerElement"==n&&e==this.name||super.is(t,e):"containerElement"==n||super.is(t)}}function xi(){const t=[...this.getChildren()],e=t[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const e of t)if(!e.is("uiElement"))return null;return this.childCount}var Ai=function(t){return t};var Ti=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},Ci=Math.max;var Pi=function(t,e,n){return e=Ci(void 0===e?t.length-1:e,0),function(){for(var i=arguments,o=-1,r=Ci(i.length-e,0),s=Array(r);++o<r;)s[o]=i[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=i[o];return a[e]=n(s),Ti(t,this,a)}};var Si=function(t){return function(){return t}},Mi=Ot?function(t,e){return Ot(t,"toString",{configurable:!0,enumerable:!1,value:Si(e),writable:!0})}:Ai,Ei=800,Ii=16,Ni=Date.now;var Oi=function(t){var e=0,n=0;return function(){var i=Ni(),o=Ii-(i-n);if(n=i,o>0){if(++e>=Ei)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Mi);var Ri=function(t,e){return Oi(Pi(t,e,Ai),t+"")};var Di=function(t,e,n){if(!B(n))return!1;var i=typeof e;return!!("number"==i?he(n)&&Qt(e,n.length):"string"==i&&e in n)&&P(n[e],t)};var Li=function(t){return Ri(function(e,n){var i=-1,o=n.length,r=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(r=t.length>3&&"function"==typeof r?(o--,r):void 0,s&&Di(n[0],n[1],s)&&(r=o<3?void 0:r,o=1),e=Object(e);++i<o;){var a=n[i];a&&t(e,a,i,r)}return e})}(function(t,e){jt(e,be(e),t)});const ji=Symbol("observableProperties"),Vi=Symbol("boundObservables"),zi=Symbol("boundProperties"),Bi={set(t,e){if(B(t))return void Object.keys(t).forEach(e=>{this.set(e,t[e])},this);Ui(this);const n=this[ji];if(t in this&&!n.has(t))throw new Gn.b("observable-set-cannot-override: Cannot override an existing property.",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(e){const i=n.get(t);let o=this.fire("set:"+t,t,e,i);void 0===o&&(o=e),i===o&&n.has(t)||(n.set(t,o),this.fire("change:"+t,t,o,i))}}),this[t]=e},bind(...t){if(!t.length||!Wi(t))throw new Gn.b("observable-bind-wrong-properties: All properties must be strings.",this);if(new Set(t).size!==t.length)throw new Gn.b("observable-bind-duplicate-properties: Properties must be unique.",this);Ui(this);const e=this[zi];t.forEach(t=>{if(e.has(t))throw new Gn.b("observable-bind-rebind: Cannot bind the same property more that once.",this)});const n=new Map;return t.forEach(t=>{const i={property:t,to:[]};e.set(t,i),n.set(t,i)}),{to:Hi,toMany:qi,_observable:this,_bindProperties:t,_to:[],_bindings:n}},unbind(...t){if(!(ji in this))return;const e=this[zi],n=this[Vi];if(t.length){if(!Wi(t))throw new Gn.b("observable-unbind-wrong-properties: Properties must be strings.",this);t.forEach(t=>{const i=e.get(t);if(!i)return;let o,r,s,a;i.to.forEach(t=>{o=t[0],r=t[1],s=n.get(o),(a=s[r]).delete(i),a.size||delete s[r],Object.keys(s).length||(n.delete(o),this.stopListening(o,"change"))}),e.delete(t)})}else n.forEach((t,e)=>{this.stopListening(e,"change")}),n.clear(),e.clear()},decorate(t){const e=this[t];if(!e)throw new Gn.b("observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.",this,{object:this,methodName:t});this.on(t,(t,n)=>{t.return=e.apply(this,n)}),this[t]=function(...e){return this.fire(t,e)}}};Li(Bi,ei);var Fi=Bi;function Ui(t){ji in t||(Object.defineProperty(t,ji,{value:new Map}),Object.defineProperty(t,Vi,{value:new Map}),Object.defineProperty(t,zi,{value:new Map}))}function Hi(...t){const e=function(...t){if(!t.length)throw new Gn.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.",null);const e={to:[]};let n;"function"==typeof t[t.length-1]&&(e.callback=t.pop());return t.forEach(t=>{if("string"==typeof t)n.properties.push(t);else{if("object"!=typeof t)throw new Gn.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.",null);n={observable:t,properties:[]},e.to.push(n)}}),e}(...t),n=Array.from(this._bindings.keys()),i=n.length;if(!e.callback&&e.to.length>1)throw new Gn.b("observable-bind-to-no-callback: Binding multiple observables only possible with callback.",this);if(i>1&&e.callback)throw new Gn.b("observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.",this);e.to.forEach(t=>{if(t.properties.length&&t.properties.length!==i)throw new Gn.b("observable-bind-to-properties-length: The number of properties must match.",this);t.properties.length||(t.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(n[0]).callback=e.callback),function(t,e){e.forEach(e=>{const n=t[Vi];let i;n.get(e.observable)||t.listenTo(e.observable,"change",(o,r)=>{(i=n.get(e.observable)[r])&&i.forEach(e=>{Yi(t,e.property)})})})}(this._observable,this._to),function(t){let e;t._bindings.forEach((n,i)=>{t._to.forEach(o=>{e=o.properties[n.callback?0:t._bindProperties.indexOf(i)],n.to.push([o.observable,e]),function(t,e,n,i){const o=t[Vi],r=o.get(n),s=r||{};s[i]||(s[i]=new Set);s[i].add(e),r||o.set(n,s)}(t._observable,n,o.observable,e)})})}(this),this._bindProperties.forEach(t=>{Yi(this._observable,t)})}function qi(t,e,n){if(this._bindings.size>1)throw new Gn.b("observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().",this);this.to(...function(t,e){const n=t.map(t=>[t,e]);return Array.prototype.concat.apply([],n)}(t,e),n)}function Wi(t){return t.every(t=>"string"==typeof t)}function Yi(t,e){const n=t[zi].get(e);let i;i=n.callback?n.callback.apply(t,n.to.map(t=>t[0][t[1]])):(i=n.to[0])[0][i[1]],t.hasOwnProperty(e)?t[e]=i:t.set(e,i)}const $i=Symbol("document");class Gi extends yi{constructor(t,e,n){super(t,e,n),this.set("isReadOnly",!1),this.set("isFocused",!1)}is(t,e=null){const n=t&&t.replace(/^view:/,"");return e?"editableElement"==n&&e==this.name||super.is(t,e):"editableElement"==n||super.is(t)}destroy(){this.stopListening()}get document(){return this.getCustomProperty($i)}set _document(t){if(this.getCustomProperty($i))throw new Gn.b("view-editableelement-document-already-set: View document is already set.",this);this._setCustomProperty($i,t),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",e=>e&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}}ci(Gi,Fi);const Qi=Symbol("rootName");class Ki extends Gi{constructor(t){super(t),this.rootName="main"}is(t,e=null){const n=t.replace(/^view:/,"");return e?"rootElement"==n&&e==this.name||super.is(t,e):"rootElement"==n||super.is(t)}get rootName(){return this.getCustomProperty(Qi)}set rootName(t){this._setCustomProperty(Qi,t)}set _name(t){this.name=t}}class Ji{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new Gn.b("view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.",null);if(t.direction&&"forward"!=t.direction&&"backward"!=t.direction)throw new Gn.b("view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=Zi._createAt(t.startPosition):this.position=Zi._createAt(t.boundaries["backward"==t.direction?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,i;do{i=this.position,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=i)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(null===n.parent&&t.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};let i;if(n instanceof fi){if(t.isAtEnd)return this.position=Zi._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof ki)return this.shallow?t.offset++:t=new Zi(i,0),this.position=t,this._formatReturnValue("elementStart",i,e,t,1);if(i instanceof fi){if(this.singleCharacters)return t=new Zi(i,0),this.position=t,this._next();{let n,o=i.data.length;return i==this._boundaryEndParent?(o=this.boundaries.end.offset,n=new mi(i,0,o),t=Zi._createAfter(n)):(n=new mi(i,0,i.data.length),t.offset++),this.position=t,this._formatReturnValue("text",n,e,t,o)}}if("string"==typeof i){let i;if(this.singleCharacters)i=1;else{i=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset}const o=new mi(n,t.offset,i);return t.offset+=i,this.position=t,this._formatReturnValue("text",o,e,t,i)}return t=Zi._createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(null===n.parent&&0===t.offset)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};let i;if(n instanceof fi){if(t.isAtStart)return this.position=Zi._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof ki)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new Zi(i,i.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof fi){if(this.singleCharacters)return t=new Zi(i,i.data.length),this.position=t,this._previous();{let n,o=i.data.length;if(i==this._boundaryStartParent){const e=this.boundaries.start.offset;o=(n=new mi(i,e,i.data.length-e)).data.length,t=Zi._createBefore(n)}else n=new mi(i,0,i.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",n,e,t,o)}}if("string"==typeof i){let i;if(this.singleCharacters)i=1;else{const e=n===this._boundaryStartParent?this.boundaries.start.offset:0;i=t.offset-e}t.offset-=i;const o=new mi(n,t.offset,i);return this.position=t,this._formatReturnValue("text",o,e,t,i)}return t=Zi._createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,o){return e instanceof mi&&(e.offsetInText+e.data.length==e.textNode.data.length&&("forward"!=this.direction||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Zi._createAfter(e.textNode):(i=Zi._createAfter(e.textNode),this.position=i)),0===e.offsetInText&&("backward"!=this.direction||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Zi._createBefore(e.textNode):(i=Zi._createBefore(e.textNode),this.position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:o}}}}class Zi{constructor(t,e){this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return 0===this.offset}get isAtEnd(){const t=this.parent.is("text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof Gi);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=Zi._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Ji(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return 0===i?null:e[i-1]}is(t){return"position"==t||"view:position"==t}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return"before"==this.compareWith(t)}isAfter(t){return"after"==this.compareWith(t)}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=li(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new Ji(t)}clone(){return new Zi(this.parent,this.offset)}static _createAt(t,e){if(t instanceof Zi)return new this(t.parent,t.offset);{const n=t;if("end"==e)e=n.is("text")?n.data.length:n.childCount;else{if("before"==e)return this._createBefore(n);if("after"==e)return this._createAfter(n);if(0!==e&&!e)throw new Gn.b("view-createPositionAt-offset-required: View#createPositionAt() requires the offset when the first parameter is a view item.",n)}return new Zi(n,e)}}static _createAfter(t){if(t.is("textProxy"))return new Zi(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new Gn.b("view-position-after-root: You can not make position after root.",t,{root:t});return new Zi(t.parent,t.index+1)}static _createBefore(t){if(t.is("textProxy"))return new Zi(t.textNode,t.offsetInText);if(!t.parent)throw new Gn.b("view-position-before-root: You can not make position before root.",t,{root:t});return new Zi(t.parent,t.index)}}class Xi{constructor(t,e=null){this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new Ji({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(to,{direction:"backward"}),e=this.end.getLastMatchingPosition(to);return t.parent.is("text")&&t.isAtStart&&(t=Zi._createBefore(t.parent)),e.parent.is("text")&&e.isAtEnd&&(e=Zi._createAfter(e.parent)),new Xi(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(to);if(t.isAfter(this.end)||t.isEqual(this.end))return new Xi(t,t);let e=this.end.getLastMatchingPosition(to,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("text")&&(t=new Zi(n,0)),i&&i.is("text")&&(e=new Zi(i,i.data.length)),new Xi(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Xi(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Xi(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Xi(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Ji(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}clone(){return new Xi(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Ji(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new Ji(t);yield e.position;for(const t of e)yield t.nextPosition}is(t){return"range"==t||"view:range"==t}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new Zi(t,e),new Zi(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(Zi._createBefore(t),e)}}function to(t){return!(!t.item.is("attributeElement")&&!t.item.is("uiElement"))}function eo(t){let e=0;for(const n of t)e++;return e}class no{constructor(t=null,e,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(t,e,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return 1===this.rangeCount&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake)return!1;if(this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel)return!1;if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=eo(this.getRanges());if(e!=eo(t.getRanges()))return!1;if(0==e)return!0;for(let e of this.getRanges()){e=e.getTrimmed();let n=!1;for(let i of t.getRanges())if(i=i.getTrimmed(),e.start.isEqual(i.start)&&e.end.isEqual(i.end)){n=!0;break}if(!n)return!1}return!0}getSelectedElement(){if(1!==this.rangeCount)return null;const t=this.getFirstRange();let e=t.start.nodeAfter,n=t.end.nodeBefore;return t.start.parent.is("text")&&t.start.isAtEnd&&t.start.parent.nextSibling&&(e=t.start.parent.nextSibling),t.end.parent.is("text")&&t.end.isAtStart&&t.end.parent.previousSibling&&(n=t.end.parent.previousSibling),e instanceof ki&&e==n?e:null}setTo(t,e,n){if(null===t)this._setRanges([]),this._setFakeOptions(e);else if(t instanceof no||t instanceof io)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Xi)this._setRanges([t],e&&e.backward),this._setFakeOptions(e);else if(t instanceof Zi)this._setRanges([new Xi(t)]),this._setFakeOptions(e);else if(t instanceof ui){const i=!!n&&!!n.backward;let o;if(void 0===e)throw new Gn.b("view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.",this);o="in"==e?Xi._createIn(t):"on"==e?Xi._createOn(t):new Xi(Zi._createAt(t,e)),this._setRanges([o],i),this._setFakeOptions(n)}else{if(!pi(t))throw new Gn.b("view-selection-setTo-not-selectable: Cannot set selection to given place.",this);this._setRanges(t,e&&e.backward),this._setFakeOptions(e)}this.fire("change")}setFocus(t,e){if(null===this.anchor)throw new Gn.b("view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.",this);const n=Zi._createAt(t,e);if("same"==n.compareWith(this.focus))return;const i=this.anchor;this._ranges.pop(),"before"==n.compareWith(i)?this._addRange(new Xi(n,i),!0):this._addRange(new Xi(i,n)),this.fire("change")}is(t){return"selection"==t||"view:selection"==t}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const e of t)this._addRange(e);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Xi))throw new Gn.b("view-selection-add-range-not-range: Selection range set to an object that is not an instance of view.Range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new Gn.b("view-selection-range-intersects: Trying to add a range that intersects with another range from selection.",this,{addedRange:t,intersectingRange:e});this._ranges.push(new Xi(t.start,t.end))}}ci(no,ei);class io{constructor(t=null,e,n){this._selection=new no,this._selection.delegate("change").to(this),this._selection.setTo(t,e,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}is(t){return"selection"==t||"documentSelection"==t||"view:selection"==t||"view:documentSelection"==t}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setFocus(t,e){this._selection.setFocus(t,e)}}ci(io,ei);class oo{constructor(t={}){this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[]}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){let n;const i=this._idProperty;if(i in t){if("string"!=typeof(n=t[i]))throw new Gn.b("collection-add-invalid-id",this);if(this.get(n))throw new Gn.b("collection-add-item-already-exists",this)}else t[i]=n=Jn();if(void 0===e)e=this._items.length;else if(e>this._items.length||e<0)throw new Gn.b("collection-add-item-invalid-index",this);return this._items.splice(e,0,t),this._itemMap.set(n,t),this.fire("add",t,e),this}get(t){let e;if("string"==typeof t)e=this._itemMap.get(t);else{if("number"!=typeof t)throw new Gn.b("collection-get-invalid-arg: Index or id must be given.",this);e=this._items[t]}return e||null}has(t){if("string"==typeof t)return this._itemMap.has(t);{const e=t[this._idProperty];return this._itemMap.has(e)}}getIndex(t){let e;return e="string"==typeof t?this._itemMap.get(t):t,this._items.indexOf(e)}remove(t){let e,n,i,o=!1;const r=this._idProperty;if("string"==typeof t?(n=t,o=!(i=this._itemMap.get(n)),i&&(e=this._items.indexOf(i))):"number"==typeof t?(e=t,o=!(i=this._items[e]),i&&(n=i[r])):(n=(i=t)[r],o=-1==(e=this._items.indexOf(i))||!this._itemMap.get(n)),o)throw new Gn.b("collection-remove-404: Item not found.",this);this._items.splice(e,1),this._itemMap.delete(n);const s=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(s),this.fire("remove",i,e),i}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){for(this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);this.length;)this.remove(0)}bindTo(t){if(this._bindToCollection)throw new Gn.b("collection-bind-to-rebind: The collection cannot be bound more than once.",this);return this._bindToCollection=t,{as:t=>{this._setUpBindToBinding(e=>new t(e))},using:t=>{"function"==typeof t?this._setUpBindToBinding(e=>t(e)):this._setUpBindToBinding(e=>e[t])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(n,i,o)=>{const r=e._bindToCollection==this,s=e._bindToInternalToExternalMap.get(i);if(r&&s)this._bindToExternalToInternalMap.set(i,s),this._bindToInternalToExternalMap.set(s,i);else{const n=t(i);if(!n)return void this._skippedIndexesFromExternal.push(o);let r=o;for(const t of this._skippedIndexesFromExternal)o>t&&r--;for(const t of e._skippedIndexesFromExternal)r>=t&&r++;this._bindToExternalToInternalMap.set(i,n),this._bindToInternalToExternalMap.set(n,i),this.add(n,r);for(let t=0;t<e._skippedIndexesFromExternal.length;t++)r<=e._skippedIndexesFromExternal[t]&&e._skippedIndexesFromExternal[t]++}};for(const t of e)n(0,t,e.getIndex(t));this.listenTo(e,"add",n),this.listenTo(e,"remove",(t,e,n)=>{const i=this._bindToExternalToInternalMap.get(e);i&&this.remove(i),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((t,e)=>(n<e&&t.push(e-1),n>e&&t.push(e),t),[])})}[Symbol.iterator](){return this._items[Symbol.iterator]()}}ci(oo,ei);class ro{constructor(){this.selection=new io,this.roots=new oo({idProperty:"rootName"}),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(e=n(t))break}while(e)}}ci(ro,Fi);const so=10;class ao extends ki{constructor(t,e,n){super(t,e,n),this.getFillerOffset=co,this._priority=so,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(null===this.id)throw new Gn.b("attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.",this);return new Set(this._clonesGroup)}is(t,e=null){const n=t&&t.replace(/^view:/,"");return e?"attributeElement"==n&&e==this.name||super.is(t,e):"attributeElement"==n||super.is(t)}isSimilar(t){return null!==this.id||null!==t.id?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function co(){if(lo(this))return null;let t=this.parent;for(;t&&t.is("attributeElement");){if(lo(t)>1)return null;t=t.parent}return!t||lo(t)>1?null:this.childCount}function lo(t){return Array.from(t.getChildren()).filter(t=>!t.is("uiElement")).length}ao.DEFAULT_PRIORITY=so;class ho extends ki{constructor(t,e,n){super(t,e,n),this.getFillerOffset=uo}is(t,e=null){const n=t.replace(/^view:/,"");return e?"emptyElement"==n&&e==this.name||super.is(t,e):"emptyElement"==n||super.is(t)}_insertChild(t,e){if(e&&(e instanceof ui||Array.from(e).length>0))throw new Gn.b("view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.",[this,e])}}function uo(){return null}const fo=navigator.userAgent.toLowerCase();var mo={isMac:function(t){return t.indexOf("macintosh")>-1}(fo),isEdge:function(t){return!!t.match(/edge\/(\d+.?\d*)/)}(fo),isGecko:function(t){return!!t.match(/gecko\/\d+/)}(fo),isSafari:function(t){return t.indexOf(" applewebkit/")>-1&&-1===t.indexOf("chrome")}(fo),isAndroid:function(t){return t.indexOf("android")>-1}(fo),features:{isRegExpUnicodePropertySupported:function(){let t=!1;try{t=0==="ć".search(new RegExp("[\\p{L}]","u"))}catch(t){}return t}()}};const go={"⌘":"ctrl","⇧":"shift","⌥":"alt"},po={ctrl:"⌘",shift:"⇧",alt:"⌥"},bo=function(){const t={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,cmd:1114112,shift:2228224,alt:4456448};for(let e=65;e<=90;e++){const n=String.fromCharCode(e);t[n.toLowerCase()]=e}for(let e=48;e<=57;e++)t[e-48]=e;for(let e=112;e<=123;e++)t["f"+(e-111)]=e;return t}();function wo(t){let e;if("string"==typeof t){if(!(e=bo[t.toLowerCase()]))throw new Gn.b("keyboard-unknown-key: Unknown key name.",null,{key:t})}else e=t.keyCode+(t.altKey?bo.alt:0)+(t.ctrlKey?bo.ctrl:0)+(t.shiftKey?bo.shift:0);return e}function ko(t){return"string"==typeof t&&(t=_o(t)),t.map(t=>"string"==typeof t?wo(t):t).reduce((t,e)=>e+t,0)}function _o(t){return t.split(/\s*\+\s*/)}class vo extends ki{constructor(t,e,n){super(t,e,n),this.getFillerOffset=xo}is(t,e=null){const n=t.replace(/^view:/,"");return e?"uiElement"==n&&e==this.name||super.is(t,e):"uiElement"==n||super.is(t)}_insertChild(t,e){if(e&&(e instanceof ui||Array.from(e).length>0))throw new Gn.b("view-uielement-cannot-add: Cannot add child nodes to UIElement instance.",this)}render(t){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const t of this.getAttributeKeys())e.setAttribute(t,this.getAttribute(t));return e}}function yo(t){t.document.on("keydown",(e,n)=>(function(t,e,n){if(e.keyCode==bo.arrowright){const t=e.domTarget.ownerDocument.defaultView.getSelection(),i=1==t.rangeCount&&t.getRangeAt(0).collapsed;if(i||e.shiftKey){const e=t.focusNode,o=t.focusOffset,r=n.domPositionToView(e,o);if(null===r)return;let s=!1;const a=r.getLastMatchingPosition(t=>(t.item.is("uiElement")&&(s=!0),!(!t.item.is("uiElement")&&!t.item.is("attributeElement"))));if(s){const e=n.viewPositionToDom(a);i?t.collapse(e.parent,e.offset):t.extend(e.parent,e.offset)}}}})(0,n,t.domConverter))}function xo(){return null}class Ao{constructor(t){this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"==t||"view:documentFragment"==t}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(t){if("string"==typeof t)return[new fi(t)];pi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new fi(t):t instanceof mi?new fi(t.data):t)}(e);for(const e of i)null!==e.parent&&e._remove(),e.parent=this,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}}ci(Ao,ei);class To{constructor(t){this.document=t,this._cloneGroups=new Map}setSelection(t,e,n){this.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createText(t){return new fi(t)}createAttributeElement(t,e,n={}){const i=new ao(t,e);return n.priority&&(i._priority=n.priority),n.id&&(i._id=n.id),i}createContainerElement(t,e){return new yi(t,e)}createEditableElement(t,e){const n=new Gi(t,e);return n._document=this.document,n}createEmptyElement(t,e){return new ho(t,e)}createUIElement(t,e,n){const i=new vo(t,e);return n&&(i.render=n),i}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){T(t)&&void 0===n&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof Zi?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new Gn.b("view-writer-break-non-container-element: Trying to break an element which is not a container element.",this.document);if(!e.parent)throw new Gn.b("view-writer-break-root: Trying to break root element.",this.document);if(t.isAtStart)return Zi._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(Zi._createAfter(e),n);const i=new Xi(t,Zi._createAt(e,"end")),o=new Zi(n,0);this.move(i,o)}return Zi._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("text"))return t;if(n.is("attributeElement")&&0===n.childCount){const t=n.parent,e=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Zi(t,e))}const i=n.getChild(e-1),o=n.getChild(e);if(!i||!o)return t;if(i.is("text")&&o.is("text"))return Eo(i,o);if(i.is("attributeElement")&&o.is("attributeElement")&&i.isSimilar(o)){const t=i.childCount;return i._appendChild(o.getChildren()),o._remove(),this._removeFromClonedElementsGroup(o),this.mergeAttributes(new Zi(i,t))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new Gn.b("view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.",this.document);const i=e.getChild(e.childCount-1),o=i instanceof fi?Zi._createAt(i,"end"):Zi._createAt(e,"end");return this.move(Xi._createIn(n),Zi._createAt(e,"end")),this.remove(Xi._createOn(n)),o}insert(t,e){(function t(e,n){for(const i of e){if(!Io.some(t=>i instanceof t))throw new Gn.b("view-writer-insert-invalid-node",n);i.is("text")||t(i.getChildren(),n)}})(e=pi(e)?[...e]:[e],this.document);const n=Co(t);if(!n)throw new Gn.b("view-writer-invalid-position-container",this.document);const i=this._breakAttributes(t,!0),o=n._insertChild(i.offset,e);for(const t of e)this._addToClonedElementsGroup(t);const r=i.getShiftedBy(o),s=this.mergeAttributes(i);if(0===o)return new Xi(s,s);{s.isEqual(i)||r.offset--;const t=this.mergeAttributes(r);return new Xi(s,t)}}remove(t){const e=t instanceof Xi?t:Xi._createOn(t);if(Oo(e,this.document),e.isCollapsed)return new Ao;const{start:n,end:i}=this._breakAttributesRange(e,!0),o=n.parent,r=i.offset-n.offset,s=o._removeChildren(n.offset,r);for(const t of s)this._removeFromClonedElementsGroup(t);const a=this.mergeAttributes(n);return e.start=a,e.end=a.clone(),new Ao(s)}clear(t,e){Oo(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const n=i.item;let o;if(n.is("element")&&e.isSimilar(n))o=Xi._createOn(n);else if(!i.nextPosition.isAfter(t.start)&&n.is("textProxy")){const t=n.getAncestors().find(t=>t.is("element")&&e.isSimilar(t));t&&(o=Xi._createIn(t))}o&&(o.end.isAfter(t.end)&&(o.end=t.end),o.start.isBefore(t.start)&&(o.start=t.start),this.remove(o))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,o=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-o}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof ao))throw new Gn.b("view-writer-wrap-invalid-attribute",this.document);if(Oo(t,this.document),t.isCollapsed){let n=t.start;n.parent.is("element")&&!function(t){return Array.from(t.getChildren()).some(t=>!t.is("uiElement"))}(n.parent)&&(n=n.getLastMatchingPosition(t=>t.item.is("uiElement"))),n=this._wrapPosition(n,e);const i=this.document.selection;return i.isCollapsed&&i.getFirstPosition().isEqual(t.start)&&this.setSelection(n),new Xi(n)}return this._wrapRange(t,e)}unwrap(t,e){if(!(e instanceof ao))throw new Gn.b("view-writer-unwrap-invalid-attribute",this.document);if(Oo(t,this.document),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),o=n.parent,r=this._unwrapChildren(o,n.offset,i.offset,e),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new Xi(s,a)}rename(t,e){const n=new yi(t,e.getAttributes());return this.insert(Zi._createAfter(e),n),this.move(Xi._createIn(e),Zi._createAt(n,0)),this.remove(Xi._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}_wrapChildren(t,e,n,i){let o=e;const r=[];for(;o<n;){const e=t.getChild(o),n=e.is("text"),s=e.is("attributeElement"),a=e.is("emptyElement"),c=e.is("uiElement");if(s&&this._wrapAttributeElement(i,e))r.push(new Zi(t,o));else if(n||a||c||s&&Po(i,e)){const n=i._clone();e._remove(),n._appendChild(e),t._insertChild(o,n),this._addToClonedElementsGroup(n),r.push(new Zi(t,o))}else s&&this._wrapChildren(e,0,e.childCount,i);o++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Xi._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let o=e;const r=[];for(;o<n;){const e=t.getChild(o);if(e.is("attributeElement"))if(e.isSimilar(i)){const i=e.getChildren(),s=e.childCount;e._remove(),t._insertChild(o,i),this._removeFromClonedElementsGroup(e),r.push(new Zi(t,o),new Zi(t,o+s)),o+=s,n+=s-1}else this._unwrapAttributeElement(i,e)?(r.push(new Zi(t,o),new Zi(t,o+1)),o++):(this._unwrapChildren(e,0,e.childCount,i),o++);else o++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e||t.offset==n)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Xi._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),o=n.parent,r=this._wrapChildren(o,n.offset,i.offset,e),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new Xi(s,a)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return So(t.clone());t.parent.is("text")&&(t=Mo(t));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=(()=>!1),t.parent._insertChild(t.offset,n);const i=new Xi(t,t.getShiftedBy(1));this.wrap(i,e);const o=new Zi(n.parent,n.index);n._remove();const r=o.nodeBefore,s=o.nodeAfter;return r instanceof fi&&s instanceof fi?Eo(r,s):So(o)}_wrapAttributeElement(t,e){if(!Ro(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Ro(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(Oo(t,this.document),t.isCollapsed){const n=this._breakAttributes(t.start,e);return new Xi(n,n)}const o=this._breakAttributes(i,e),r=o.parent.childCount,s=this._breakAttributes(n,e);return o.offset+=o.parent.childCount-r,new Xi(s,o)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new Gn.b("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new Gn.b("view-writer-cannot-break-ui-element",this.document);if(!e&&i.is("text")&&No(i.parent))return t.clone();if(No(i))return t.clone();if(i.is("text"))return this._breakAttributes(Mo(t),e);if(n==i.childCount){const t=new Zi(i.parent,i.index+1);return this._breakAttributes(t,e)}if(0===n){const t=new Zi(i.parent,i.index);return this._breakAttributes(t,e)}{const t=i.index+1,o=i._clone();i.parent._insertChild(t,o),this._addToClonedElementsGroup(o);const r=i.childCount-n,s=i._removeChildren(n,r);o._appendChild(s);const a=new Zi(i.parent,t);return this._breakAttributes(a,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const e of t.getChildren())this._addToClonedElementsGroup(e);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const e of t.getChildren())this._removeFromClonedElementsGroup(e);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function Co(t){let e=t.parent;for(;!No(e);){if(!e)return;e=e.parent}return e}function Po(t,e){return t.priority<e.priority||!(t.priority>e.priority)&&t.getIdentity()<e.getIdentity()}function So(t){const e=t.nodeBefore;if(e&&e.is("text"))return new Zi(e,e.data.length);const n=t.nodeAfter;return n&&n.is("text")?new Zi(n,0):t}function Mo(t){if(t.offset==t.parent.data.length)return new Zi(t.parent.parent,t.parent.index+1);if(0===t.offset)return new Zi(t.parent.parent,t.parent.index);const e=t.parent.data.slice(t.offset);return t.parent._data=t.parent.data.slice(0,t.offset),t.parent.parent._insertChild(t.parent.index+1,new fi(e)),new Zi(t.parent.parent,t.parent.index+1)}function Eo(t,e){const n=t.data.length;return t._data+=e.data,e._remove(),new Zi(t,n)}const Io=[fi,ao,yi,ho,vo];function No(t){return t&&(t.is("containerElement")||t.is("documentFragment"))}function Oo(t,e){const n=Co(t.start),i=Co(t.end);if(!n||!i||n!==i)throw new Gn.b("view-writer-invalid-range-container",e)}function Ro(t,e){return null===t.id&&null===e.id}function Do(t){return"[object Text]"==Object.prototype.toString.call(t)}const Lo=t=>{const e=t.createElement("br");return e.dataset.ckeFiller=!0,e},jo=t=>t.createTextNode(" "),Vo=7;let zo="";for(let t=0;t<Vo;t++)zo+="​";function Bo(t){return Do(t)&&t.data.substr(0,Vo)===zo}function Fo(t){return t.data.length==Vo&&Bo(t)}function Uo(t){return Bo(t)?t.data.slice(Vo):t.data}const Ho=new WeakMap;function qo(t,e){let n=Ho.get(e);return n||(n=e(window.document),Ho.set(e,n)),t.isEqualNode(n)}function Wo(t,e){if(e.keyCode==bo.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(1==t.rangeCount&&t.getRangeAt(0).collapsed){const e=t.getRangeAt(0).startContainer,n=t.getRangeAt(0).startOffset;Bo(e)&&n<=Vo&&t.collapse(e,0)}}}function Yo(t,e,n,i=!1){n=n||function(t,e){return t===e},Array.isArray(t)||(t=Array.from(t)),Array.isArray(e)||(e=Array.from(e));const o=function(t,e,n){const i=$o(t,e,n);if(-1===i)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const o=Go(t,i),r=Go(e,i),s=$o(o,r,n),a=t.length-s,c=e.length-s;return{firstIndex:i,lastIndexOld:a,lastIndexNew:c}}(t,e,n);return i?function(t,e){const{firstIndex:n,lastIndexOld:i,lastIndexNew:o}=t;if(-1===n)return Array(e).fill("equal");let r=[];n>0&&(r=r.concat(Array(n).fill("equal")));o-n>0&&(r=r.concat(Array(o-n).fill("insert")));i-n>0&&(r=r.concat(Array(i-n).fill("delete")));o<e&&(r=r.concat(Array(e-o).fill("equal")));return r}(o,e.length):function(t,e){const n=[],{firstIndex:i,lastIndexOld:o,lastIndexNew:r}=e;r-i>0&&n.push({index:i,type:"insert",values:t.slice(i,r)});o-i>0&&n.push({index:i+(r-i),type:"delete",howMany:o-i});return n}(e,o)}function $o(t,e,n){for(let i=0;i<Math.max(t.length,e.length);i++)if(void 0===t[i]||void 0===e[i]||!n(t[i],e[i]))return i;return-1}function Go(t,e){return t.slice(e).reverse()}function Qo(t,e,n){n=n||function(t,e){return t===e};const i=t.length,o=e.length;if(i>200||o>200||i+o>300)return Qo.fastDiff(t,e,n,!0);let r,s;if(o<i){const n=t;t=e,e=n,r="delete",s="insert"}else r="insert",s="delete";const a=t.length,c=e.length,l=c-a,d={},h={};function u(i){const o=(void 0!==h[i-1]?h[i-1]:-1)+1,l=void 0!==h[i+1]?h[i+1]:-1,u=o>l?-1:1;d[i+u]&&(d[i]=d[i+u].slice(0)),d[i]||(d[i]=[]),d[i].push(o>l?r:s);let f=Math.max(o,l),m=f-i;for(;m<a&&f<c&&n(t[m],e[f]);)m++,f++,d[i].push("equal");return f}let f,m=0;do{for(f=-m;f<l;f++)h[f]=u(f);for(f=l+m;f>l;f--)h[f]=u(f);h[l]=u(l),m++}while(h[l]!==c);return d[l].slice(1)}function Ko(t,e,n){t.insertBefore(n,t.childNodes[e]||null)}function Jo(t){const e=t.parentNode;e&&e.removeChild(t)}function Zo(t){if(t){if(t.defaultView)return t instanceof t.defaultView.Document;if(t.ownerDocument&&t.ownerDocument.defaultView)return t instanceof t.ownerDocument.defaultView.Node}return!1}Qo.fastDiff=Yo;class Xo{constructor(t,e){this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.isFocused=!1,this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if("text"===t)this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if("attributes"===t)this.markedAttributes.add(e);else{if("children"!==t)throw new Gn.b("view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.",this);this.markedChildren.add(e)}}}render(){let t;for(const t of this.markedChildren)this._updateChildrenMappings(t);this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent));for(const t of this.markedAttributes)this._updateAttrs(t);for(const e of this.markedChildren)this._updateChildren(e,{inlineFillerPosition:t});for(const e of this.markedTexts)!this.markedChildren.has(e.parent)&&this.domConverter.mapViewToDom(e.parent)&&this._updateText(e,{inlineFillerPosition:t});if(t){const e=this.domConverter.viewPositionToDom(t),n=e.parent.ownerDocument;Bo(e.parent)?this._inlineFiller=e.parent:this._inlineFiller=tr(n,e.parent,e.offset)}else this._inlineFiller=null;this._updateSelection(),this._updateFocus(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=this.domConverter.mapViewToDom(t).childNodes,i=Array.from(this.domConverter.viewChildrenToDom(t,e.ownerDocument,{withChildren:!1})),o=this._diffNodeLists(n,i),r=this._findReplaceActions(o,n,i);if(-1!==r.indexOf("replace")){const e={equal:0,insert:0,delete:0};for(const o of r)if("replace"===o){const o=e.equal+e.insert,r=e.equal+e.delete,s=t.getChild(o);s&&!s.is("uiElement")&&this._updateElementMappings(s,n[r]),Jo(i[o]),e.equal++}else e[o]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("text")?Zi._createBefore(this.selection.getFirstPosition().parent):t}_isSelectionInInlineFiller(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&Do(e.parent)&&Bo(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!Bo(t))throw new Gn.b("view-renderer-filler-was-lost: The inline filler node was lost.",this);Fo(t)?t.parentNode.removeChild(t):t.data=t.data.substr(Vo),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root))return!1;if(!e.is("element"))return!1;if(!function(t){if("false"==t.getAttribute("contenteditable"))return!1;const e=t.findAncestor(t=>t.hasAttribute("contenteditable"));return!e||"true"==e.getAttribute("contenteditable")}(e))return!1;if(n===e.getFillerOffset())return!1;const i=t.nodeBefore,o=t.nodeAfter;return!(i instanceof fi||o instanceof fi)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t),i=this.domConverter.viewToDom(t,n.ownerDocument),o=n.data;let r=i.data;const s=e.inlineFillerPosition;if(s&&s.parent==t.parent&&s.offset==t.index&&(r=zo+r),o!=r){const t=Yo(o,r);for(const e of t)"insert"===e.type?n.insertData(e.index,e.values.join("")):n.deleteData(e.index,e.howMany)}}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(t=>t.name),i=t.getAttributeKeys();for(const n of i)e.setAttribute(n,t.getAttribute(n));for(const i of n)t.hasAttribute(i)||e.removeAttribute(i)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;const i=e.inlineFillerPosition,o=this.domConverter.mapViewToDom(t).childNodes,r=Array.from(this.domConverter.viewChildrenToDom(t,n.ownerDocument,{bind:!0,inlineFillerPosition:i}));i&&i.parent===t&&tr(n.ownerDocument,r,i.offset);const s=this._diffNodeLists(o,r);let a=0;const c=new Set;for(const t of s)"insert"===t?(Ko(n,a,r[a]),a++):"delete"===t?(c.add(o[a]),Jo(o[a])):(this._markDescendantTextToSync(this.domConverter.domToView(r[a])),a++);for(const t of c)t.parentNode||this.domConverter.unbindDomElement(t)}_diffNodeLists(t,e){return Qo(t=function(t,e){const n=Array.from(t);if(0==n.length||!e)return n;n[n.length-1]==e&&n.pop();return n}(t,this._fakeSelectionContainer),e,function(t,e,n){if(e===n)return!0;if(Do(e)&&Do(n))return e.data===n.data;if(qo(e,t)&&qo(n,t))return!0;return!1}.bind(null,this.domConverter.blockFiller))}_findReplaceActions(t,e,n){if(-1===t.indexOf("insert")||-1===t.indexOf("delete"))return t;let i=[],o=[],r=[];const s={equal:0,insert:0,delete:0};for(const a of t)"insert"===a?r.push(n[s.equal+s.insert]):"delete"===a?o.push(e[s.equal+s.delete]):((i=i.concat(Qo(o,r,er).map(t=>"equal"===t?"replace":t))).push("equal"),o=[],r=[]),s[a]++;return i.concat(Qo(o,r,er).map(t=>"equal"===t?"replace":t))}_markDescendantTextToSync(t){if(t)if(t.is("text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}_updateSelection(){if(0===this.selection.rangeCount)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):(this._removeFakeSelection(),this._updateDomSelection(t)))}_updateFakeSelection(t){const e=t.ownerDocument;let n=this._fakeSelectionContainer;n||(this._fakeSelectionContainer=n=e.createElement("div"),Object.assign(n.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),n.textContent=" "),n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=e.getSelection(),o=e.createRange();i.removeAllRanges(),o.selectNodeContents(n),i.addRange(o),this.domConverter.bindFakeSelection(n,this.selection)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.focus(),e.collapse(n.parent,n.offset),e.extend(i.parent,i.offset),mo.isGecko&&function(t,e){const n=t.parent;if(n.nodeType!=Node.ELEMENT_NODE||t.offset!=n.childNodes.length-1)return;const i=n.childNodes[t.offset];i&&"BR"==i.tagName&&e.addRange(e.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_removeDomSelection(){for(const t of this.domDocuments){if(t.getSelection().rangeCount){const e=t.activeElement,n=this.domConverter.mapDomToView(e);e&&n&&t.getSelection().removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function tr(t,e,n){const i=e instanceof Array?e:e.childNodes,o=i[n];if(Do(o))return o.data=zo+o.data,o;{const o=t.createTextNode(zo);return Array.isArray(e)?i.splice(n,0,o):Ko(e,n,o),o}}function er(t,e){return Zo(t)&&Zo(e)&&!Do(t)&&!Do(e)&&t.tagName.toLowerCase()===e.tagName.toLowerCase()}ci(Xo,Fi);var nr={window:window,document:document};function ir(t){let e=0;for(;t.previousSibling;)t=t.previousSibling,e++;return e}function or(t){const e=[];for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}class rr{constructor(t={}){this.blockFiller=t.blockFiller||Lo,this.preElements=["pre"],this.blockElements=["p","div","h1","h2","h3","h4","h5","h6"],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new no(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const e of Array.from(t.childNodes))this.unbindDomElement(e)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}viewToDom(t,e,n={}){if(t.is("text")){const n=this._processDataFromViewText(t);return e.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let i;if(t.is("documentFragment"))i=e.createDocumentFragment(),n.bind&&this.bindDocumentFragments(i,t);else{if(t.is("uiElement"))return i=t.render(e),n.bind&&this.bindElements(i,t),i;i=e.createElement(t.name),n.bind&&this.bindElements(i,t);for(const e of t.getAttributeKeys())i.setAttribute(e,t.getAttribute(e))}if(n.withChildren||void 0===n.withChildren)for(const o of this.viewChildrenToDom(t,e,n))i.appendChild(o);return i}}*viewChildrenToDom(t,e,n={}){const i=t.getFillerOffset&&t.getFillerOffset();let o=0;for(const r of t.getChildren())i===o&&(yield this.blockFiller(e)),yield this.viewToDom(r,e,n),o++;i===o&&(yield this.blockFiller(e))}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=document.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return Bo(n)&&(i+=Vo),{parent:n,offset:i}}{let n,i,o;if(0===t.offset){if(!(n=this.mapViewToDom(e)))return null;o=n.childNodes[0]}else{const e=t.nodeBefore;if(!(i=e.is("text")?this.findCorrespondingDomText(e):this.mapViewToDom(t.nodeBefore)))return null;n=i.parentNode,o=i.nextSibling}if(Do(o)&&Bo(o))return{parent:o,offset:Vo};return{parent:n,offset:i?ir(i)+1:0}}}domToView(t,e={}){if(qo(t,this.blockFiller))return null;const n=this.getParentUIElement(t,this._domToViewMapping);if(n)return n;if(Do(t)){if(Fo(t))return null;{const e=this._processDataFromDomText(t);return""===e?null:new fi(e)}}if(this.isComment(t))return null;{if(this.mapDomToView(t))return this.mapDomToView(t);let n;if(this.isDocumentFragment(t))n=new Ao,e.bind&&this.bindDocumentFragments(t,n);else{const i=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();n=new ki(i),e.bind&&this.bindElements(t,n);const o=t.attributes;for(let t=o.length-1;t>=0;t--)n._setAttribute(o[t].name,o[t].value)}if(e.withChildren||void 0===e.withChildren)for(const i of this.domChildrenToView(t,e))n._appendChild(i);return n}}*domChildrenToView(t,e={}){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n],o=this.domToView(i,e);null!==o&&(yield o)}}domSelectionToView(t){if(1===t.rangeCount){let e=t.getRangeAt(0).startContainer;Do(e)&&(e=e.parentNode);const n=this.fakeSelectionToView(e);if(n)return n}const e=this.isDomSelectionBackward(t),n=[];for(let e=0;e<t.rangeCount;e++){const i=t.getRangeAt(e),o=this.domRangeToView(i);o&&n.push(o)}return new no(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Xi(e,n):null}domPositionToView(t,e){if(qo(t,this.blockFiller))return this.domPositionToView(t.parentNode,ir(t));const n=this.mapDomToView(t);if(n&&n.is("uiElement"))return Zi._createBefore(n);if(Do(t)){if(Fo(t))return this.domPositionToView(t.parentNode,ir(t));const n=this.findCorrespondingViewText(t);let i=e;return n?(Bo(t)&&(i=(i-=Vo)<0?0:i),new Zi(n,i)):null}if(0===e){const e=this.mapDomToView(t);if(e)return new Zi(e,0)}else{const n=t.childNodes[e-1],i=Do(n)?this.findCorrespondingViewText(n):this.mapDomToView(n);if(i&&i.parent)return new Zi(i.parent,i.index+1)}return null}mapDomToView(t){return this.getParentUIElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Fo(t))return null;const e=this.getParentUIElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const t=this.mapDomToView(n);if(t){return t.nextSibling instanceof fi?t.nextSibling:null}}else{const e=this.mapDomToView(t.parentNode);if(e){const t=e.getChild(0);return t instanceof fi?t:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:t,scrollY:n}=nr.window,i=[];ar(e,t=>{const{scrollLeft:e,scrollTop:n}=t;i.push([e,n])}),e.focus(),ar(e,t=>{const[e,n]=i.shift();t.scrollLeft=e,t.scrollTop=n}),nr.window.scrollTo(t,n)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(t){return t&&t.nodeType==Node.COMMENT_NODE}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=document.createRange();e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset);const n=e.collapsed;return e.detach(),n}getParentUIElement(t){const e=or(t);for(e.pop();e.length;){const t=e.pop(),n=this._domToViewMapping.get(t);if(n&&n.is("uiElement"))return n}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}_isDomSelectionPositionCorrect(t,e){if(Do(t)&&Bo(t)&&e<Vo)return!1;if(this.isElement(t)&&Bo(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return e;if(" "==e.charAt(0)){const n=this._getTouchingViewTextNode(t,!1);!(n&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(" "==e.charAt(e.length-1)){const n=this._getTouchingViewTextNode(t,!0);" "!=e.charAt(e.length-2)&&n&&" "!=n.data.charAt(0)||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return!1;const e=this._processDataFromViewText(t);return" "==e.charAt(e.length-1)}_processDataFromDomText(t){let e=t.data;if(sr(t,this.preElements))return Uo(t);e=e.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(t,!1),i=this._getTouchingInlineDomNode(t,!0),o=this._checkShouldLeftTrimDomText(n),r=this._checkShouldRightTrimDomText(t,i);return o&&(e=e.replace(/^ /,"")),r&&(e=e.replace(/ $/,"")),e=(e=Uo(new Text(e))).replace(/ \u00A0/g,"  "),(/( |\u00A0)\u00A0$/.test(e)||!i||i.data&&" "==i.data.charAt(0))&&(e=e.replace(/\u00A0$/," ")),o&&(e=e.replace(/^\u00A0/," ")),e}_checkShouldLeftTrimDomText(t){return!t||(!!Wn(t)||/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!Bo(t)}_getTouchingViewTextNode(t,e){const n=new Ji({startPosition:e?Zi._createAfter(t):Zi._createBefore(t),direction:e?"forward":"backward"});for(const t of n){if(t.item.is("containerElement"))return null;if(t.item.is("br"))return null;if(t.item.is("textProxy"))return t.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;const n=e?"nextNode":"previousNode",i=t.ownerDocument,o=or(t)[0],r=i.createTreeWalker(o,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:t=>Do(t)?NodeFilter.FILTER_ACCEPT:"BR"==t.tagName?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});r.currentNode=t;const s=r[n]();if(null!==s){const e=function(t,e){const n=or(t),i=or(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}(t,s);if(e&&!sr(t,this.blockElements,e)&&!sr(s,this.blockElements,e))return s}return null}}function sr(t,e,n){let i=or(t);return n&&(i=i.slice(i.indexOf(n)+1)),i.some(t=>t.tagName&&e.includes(t.tagName.toLowerCase()))}function ar(t,e){for(;t&&t!=nr.document;)e(t),t=t.parentNode}function cr(t){const e=Object.prototype.toString.apply(t);return"[object Window]"==e||"[object global]"==e}var lr=Li({},ei,{listenTo(t,...e){if(Zo(t)||cr(t)){const n=this._getProxyEmitter(t)||new dr(t);n.attach(...e),t=n}ei.listenTo.call(this,t,...e)},stopListening(t,e,n){if(Zo(t)||cr(t)){const e=this._getProxyEmitter(t);if(!e)return;t=e}ei.stopListening.call(this,t,e,n),t instanceof dr&&t.detach(e)},_getProxyEmitter(t){return function(t,e){return t[Xn]&&t[Xn][e]?t[Xn][e].emitter:null}(this,hr(t))}});class dr{constructor(t){ni(this,hr(t)),this._domNode=t}}function hr(t){return t["data-ck-expando"]||(t["data-ck-expando"]=Jn())}Li(dr.prototype,ei,{attach(t,e,n={}){if(this._domListeners&&this._domListeners[t])return;const i=this._createDomListener(t,!!n.useCapture);this._domNode.addEventListener(t,i,!!n.useCapture),this._domListeners||(this._domListeners={}),this._domListeners[t]=i},detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()},_createDomListener(t,e){const n=e=>{this.fire(t,e)};return n.removeListener=(()=>{this._domNode.removeEventListener(t,n,e),delete this._domListeners[t]}),n}});class ur{constructor(t){this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}}ci(ur,lr);var fr="__lodash_hash_undefined__";var mr=function(t){return this.__data__.set(t,fr),this};var gr=function(t){return this.__data__.has(t)};function pr(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Pt;++e<n;)this.add(t[e])}pr.prototype.add=pr.prototype.push=mr,pr.prototype.has=gr;var br=pr;var wr=function(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1};var kr=function(t,e){return t.has(e)},_r=1,vr=2;var yr=function(t,e,n,i,o,r){var s=n&_r,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(t);if(l&&r.get(e))return l==e;var d=-1,h=!0,u=n&vr?new br:void 0;for(r.set(t,e),r.set(e,t);++d<a;){var f=t[d],m=e[d];if(i)var g=s?i(m,f,d,e,t,r):i(f,m,d,t,e,r);if(void 0!==g){if(g)continue;h=!1;break}if(u){if(!wr(e,function(t,e){if(!kr(u,e)&&(f===t||o(f,t,n,i,r)))return u.push(e)})){h=!1;break}}else if(f!==m&&!o(f,m,n,i,r)){h=!1;break}}return r.delete(t),r.delete(e),h};var xr=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,i){n[++e]=[i,t]}),n};var Ar=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n},Tr=1,Cr=2,Pr="[object Boolean]",Sr="[object Date]",Mr="[object Error]",Er="[object Map]",Ir="[object Number]",Nr="[object RegExp]",Or="[object Set]",Rr="[object String]",Dr="[object Symbol]",Lr="[object ArrayBuffer]",jr="[object DataView]",Vr=o?o.prototype:void 0,zr=Vr?Vr.valueOf:void 0;var Br=function(t,e,n,i,o,r,s){switch(n){case jr:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Lr:return!(t.byteLength!=e.byteLength||!r(new Ye(t),new Ye(e)));case Pr:case Sr:case Ir:return P(+t,+e);case Mr:return t.name==e.name&&t.message==e.message;case Nr:case Rr:return t==e+"";case Er:var a=xr;case Or:var c=i&Tr;if(a||(a=Ar),t.size!=e.size&&!c)return!1;var l=s.get(t);if(l)return l==e;i|=Cr,s.set(t,e);var d=yr(a(t),a(e),i,o,r,s);return s.delete(t),d;case Dr:if(zr)return zr.call(t)==zr.call(e)}return!1},Fr=1,Ur=Object.prototype.hasOwnProperty;var Hr=function(t,e,n,i,o,r){var s=n&Fr,a=Ie(t),c=a.length;if(c!=Ie(e).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in e:Ur.call(e,d)))return!1}var h=r.get(t);if(h&&r.get(e))return h==e;var u=!0;r.set(t,e),r.set(e,t);for(var f=s;++l<c;){var m=t[d=a[l]],g=e[d];if(i)var p=s?i(g,m,d,e,t,r):i(m,g,d,t,e,r);if(!(void 0===p?m===g||o(m,g,n,i,r):p)){u=!1;break}f||(f="constructor"==d)}if(u&&!f){var b=t.constructor,w=e.constructor;b!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(u=!1)}return r.delete(t),r.delete(e),u},qr=1,Wr="[object Arguments]",Yr="[object Array]",$r="[object Object]",Gr=Object.prototype.hasOwnProperty;var Qr=function(t,e,n,i,o,r){var s=Wt(t),a=Wt(e),c=s?Yr:He(t),l=a?Yr:He(e),d=(c=c==Wr?$r:c)==$r,h=(l=l==Wr?$r:l)==$r,u=c==l;if(u&&Object(Yt.a)(t)){if(!Object(Yt.a)(e))return!1;s=!0,d=!1}if(u&&!d)return r||(r=new It),s||ie(t)?yr(t,e,n,i,o,r):Br(t,e,c,n,i,o,r);if(!(n&qr)){var f=d&&Gr.call(t,"__wrapped__"),m=h&&Gr.call(e,"__wrapped__");if(f||m){var g=f?t.value():t,p=m?e.value():e;return r||(r=new It),o(g,p,n,i,r)}}return!!u&&(r||(r=new It),Hr(t,e,n,i,o,r))};var Kr=function t(e,n,i,o,r){return e===n||(null==e||null==n||!w(e)&&!w(n)?e!=e&&n!=n:Qr(e,n,i,o,t,r))};var Jr=function(t,e,n){var i=(n="function"==typeof n?n:void 0)?n(t,e):void 0;return void 0===i?Kr(t,e,void 0,n):!!i};class Zr extends ur{constructor(t){super(t),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(0===t.length)return;const e=this.domConverter,n=new Map,i=new Set;for(const n of t)if("childList"===n.type){const t=e.mapDomToView(n.target);if(t&&t.is("uiElement"))continue;t&&!this._isBogusBrMutation(n)&&i.add(t)}for(const o of t){const t=e.mapDomToView(o.target);if((!t||!t.is("uiElement"))&&"characterData"===o.type){const t=e.findCorrespondingViewText(o.target);t&&!i.has(t.parent)?n.set(t,{type:"text",oldText:t.data,newText:Uo(o.target),node:t}):!t&&Bo(o.target)&&i.add(e.mapDomToView(o.target.parentNode))}}const o=[];for(const t of n.values())this.renderer.markToSync("text",t.node),o.push(t);for(const t of i){const n=e.mapViewToDom(t),i=Array.from(t.getChildren()),r=Array.from(e.domChildrenToView(n,{withChildren:!1}));Jr(i,r,a)||(this.renderer.markToSync("children",t),o.push({type:"children",oldChildren:i,newChildren:r,node:t}))}const r=t[0].target.ownerDocument.getSelection();let s=null;if(r&&r.anchorNode){const t=e.domPositionToView(r.anchorNode,r.anchorOffset),n=e.domPositionToView(r.focusNode,r.focusOffset);t&&n&&(s=new no(t)).setFocus(n)}function a(t,e){if(!Array.isArray(t))return t===e||!(!t.is("text")||!e.is("text"))&&t.data===e.data}this.document.fire("mutations",o,s),this.view.forceRender()}_isBogusBrMutation(t){let e=null;return null===t.nextSibling&&0===t.removedNodes.length&&1==t.addedNodes.length&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}class Xr{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,Li(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class ts extends ur{constructor(t){super(t),this.useCapture=!1}observe(t){("string"==typeof this.domEventType?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(t,e)=>{this.isEnabled&&this.onDomEvent(e)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Xr(this.view,e,n))}}class es extends ts{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){this.fire(t.type,t,{keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey||t.metaKey,shiftKey:t.shiftKey,get keystroke(){return wo(this)}})}}var ns=function(){return i.a.Date.now()},is="[object Symbol]";var os=function(t){return"symbol"==typeof t||w(t)&&g(t)==is},rs=NaN,ss=/^\s+|\s+$/g,as=/^[-+]0x[0-9a-f]+$/i,cs=/^0b[01]+$/i,ls=/^0o[0-7]+$/i,ds=parseInt;var hs=function(t){if("number"==typeof t)return t;if(os(t))return rs;if(B(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=B(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(ss,"");var n=cs.test(t);return n||ls.test(t)?ds(t.slice(2),n?2:8):as.test(t)?rs:+t},us="Expected a function",fs=Math.max,ms=Math.min;var gs=function(t,e,n){var i,o,r,s,a,c,l=0,d=!1,h=!1,u=!0;if("function"!=typeof t)throw new TypeError(us);function f(e){var n=i,r=o;return i=o=void 0,l=e,s=t.apply(r,n)}function m(t){var n=t-c;return void 0===c||n>=e||n<0||h&&t-l>=r}function g(){var t=ns();if(m(t))return p(t);a=setTimeout(g,function(t){var n=e-(t-c);return h?ms(n,r-(t-l)):n}(t))}function p(t){return a=void 0,u&&i?f(t):(i=o=void 0,s)}function b(){var t=ns(),n=m(t);if(i=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(g,e),d?f(t):s}(c);if(h)return clearTimeout(a),a=setTimeout(g,e),f(c)}return void 0===a&&(a=setTimeout(g,e)),s}return e=hs(e)||0,B(n)&&(d=!!n.leading,r=(h="maxWait"in n)?fs(hs(n.maxWait)||0,e):r,u="trailing"in n?!!n.trailing:u),b.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},b.flush=function(){return void 0===a?s:p(ns())},b};class ps extends ur{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=gs(t=>this.document.fire("selectionChangeDone",t),200)}observe(){const t=this.document;t.on("keydown",(e,n)=>{t.selection.isFake&&function(t){return t==bo.arrowright||t==bo.arrowleft||t==bo.arrowup||t==bo.arrowdown}(n.keyCode)&&this.isEnabled&&(n.preventDefault(),this._handleSelectionMove(n.keyCode))},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new no(e.getRanges(),{backward:e.isBackward,fake:!1});t!=bo.arrowleft&&t!=bo.arrowup||n.setTo(n.getFirstPosition()),t!=bo.arrowright&&t!=bo.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}class bs extends ur{constructor(t){super(t),this.mutationObserver=t.getObserver(Zr),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=gs(t=>this.document.fire("selectionChangeDone",t),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument;this._documents.has(e)||(this.listenTo(e,"selectionchange",()=>{this._handleSelectionChange(e)}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionChange(t){if(!this.isEnabled||!this.document.isFocused&&!this.document.isReadOnly)return;this.mutationObserver.flush();const e=t.defaultView.getSelection(),n=this.domConverter.domSelectionToView(e);if(!(this.selection.isEqual(n)&&this.domConverter.isDomSelectionCorrect(e)||++this._loopbackCounter>60))if(this.selection.isSimilar(n))this.view.forceRender();else{const t={oldSelection:this.selection,newSelection:n,domSelection:e};this.document.fire("selectionChange",t),this._fireSelectionChangeDoneDebounced(t)}}_clearInfiniteLoop(){this._loopbackCounter=0}}class ws extends ts{constructor(t){super(t),this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{e.isFocused=!0,this._renderTimeoutId=setTimeout(()=>t.forceRender(),50)}),e.on("blur",(n,i)=>{const o=e.selection.editableElement;null!==o&&o!==i.target||(e.isFocused=!1,t.forceRender())})}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class ks extends ts{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0}),e.on("compositionend",()=>{e.isComposing=!1})}onDomEvent(t){this.fire(t.type,t)}}class _s extends ts{constructor(t){super(t),this.domEventType=["beforeinput"]}onDomEvent(t){this.fire(t.type,t)}}function vs(t){return"[object Range]"==Object.prototype.toString.apply(t)}function ys(t){const e=t.ownerDocument.defaultView.getComputedStyle(t);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const xs=["top","right","bottom","left","width","height"];class As{constructor(t){const e=vs(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),Wn(t)||e)Ts(this,e?As.getDomRangeRects(t)[0]:t.getBoundingClientRect());else if(cr(t)){const{innerWidth:e,innerHeight:n}=t;Ts(this,{top:0,right:e,bottom:n,left:0,width:e,height:n})}else Ts(this,t)}clone(){return new As(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left)};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new As(e)}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(!Cs(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!Cs(n);){const t=new As(n),i=e.getIntersection(t);if(!i)return null;i.getArea()<e.getArea()&&(e=i),n=n.parentNode}}return e}isEqual(t){for(const e of xs)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){const t=this._source;let e,n;if(cr(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight;else{const i=ys(this._source);e=t.offsetWidth-t.clientWidth,n=t.offsetHeight-t.clientHeight,this.moveBy(i.left,i.top)}return this.width-=e,this.right-=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const t of n)e.push(new As(t));else{let n=t.startContainer;Do(n)&&(n=n.parentNode);const i=new As(n.getBoundingClientRect());i.right=i.left,i.width=0,e.push(i)}return e}}function Ts(t,e){for(const n of xs)t[n]=e[n]}function Cs(t){return!!Wn(t)&&t===t.ownerDocument.body}function Ps({target:t,viewportOffset:e=0}){const n=Rs(t);let i=n,o=null;for(;i;){let r;Ms(r=Ds(i==n?t:o),()=>Ls(t,i));const s=Ls(t,i);if(Ss(i,s,e),i.parent!=i){if(o=i.frameElement,i=i.parent,!o)return}else i=null}}function Ss(t,e,n){const i=e.clone().moveBy(0,n),o=e.clone().moveBy(0,-n),r=new As(t).excludeScrollbarsAndBorders();if(![o,i].every(t=>r.contains(t))){let{scrollX:s,scrollY:a}=t;Is(o,r)?a-=r.top-e.top+n:Es(i,r)&&(a+=e.bottom-r.bottom+n),Ns(e,r)?s-=r.left-e.left+n:Os(e,r)&&(s+=e.right-r.right+n),t.scrollTo(s,a)}}function Ms(t,e){const n=Rs(t);let i,o;for(;t!=n.document.body;)o=e(),(i=new As(t).excludeScrollbarsAndBorders()).contains(o)||(Is(o,i)?t.scrollTop-=i.top-o.top:Es(o,i)&&(t.scrollTop+=o.bottom-i.bottom),Ns(o,i)?t.scrollLeft-=i.left-o.left:Os(o,i)&&(t.scrollLeft+=o.right-i.right)),t=t.parentNode}function Es(t,e){return t.bottom>e.bottom}function Is(t,e){return t.top<e.top}function Ns(t,e){return t.left<e.left}function Os(t,e){return t.right>e.right}function Rs(t){return vs(t)?t.startContainer.ownerDocument.defaultView:t.ownerDocument.defaultView}function Ds(t){if(vs(t)){let e=t.commonAncestorContainer;return Do(e)&&(e=e.parentNode),e}return t.parentNode}function Ls(t,e){const n=Rs(t),i=new As(t);if(n===e)return i;{let t=n;for(;t!=e;){const e=t.frameElement,n=new As(e).excludeScrollbarsAndBorders();i.moveBy(n.left,n.top),t=t.parent}}return i}Object.assign({},{scrollViewportToShowTarget:Ps,scrollAncestorsToShowTarget:function(t){Ms(Ds(t),()=>new As(t))}});class js{constructor(){this.document=new ro,this.domConverter=new rr,this.domRoots=new Map,this.set("isRenderingInProgress",!1),this._renderer=new Xo(this.domConverter,this.document.selection),this._renderer.bind("isFocused").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new To(this.document),this.addObserver(Zr),this.addObserver(bs),this.addObserver(ws),this.addObserver(es),this.addObserver(ps),this.addObserver(ks),mo.isAndroid&&this.addObserver(_s),function(t){t.document.on("keydown",Wo)}(this),yo(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();const i={};for(const{name:e,value:o}of Array.from(t.attributes))i[e]=o,"class"===e?this._writer.addClass(o.split(" "),n):this._writer.setAttribute(e,o,n);this._initialDomRootAttributes.set(t,i);const o=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};o(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(t,e)=>this._renderer.markToSync("children",e)),n.on("change:attributes",(t,e)=>this._renderer.markToSync("attributes",e)),n.on("change:text",(t,e)=>this._renderer.markToSync("text",e)),n.on("change:isReadOnly",()=>this.change(o)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const n of this._observers.values())n.observe(t,e)}detachDomRoot(t){const e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:t})=>e.removeAttribute(t));const n=this._initialDomRootAttributes.get(e);for(const t in n)e.setAttribute(t,n[t]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[t,n]of this.domRoots)e.observe(n,t);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection(){const t=this.document.selection.getFirstRange();t&&Ps({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new Gn.b("cannot-change-view-tree: Attempting to make changes to the view when it is in an incorrect state: rendering or post-fixers are in progress. This may cause some unexpected behavior and inconsistency between the DOM and the view.",this);if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;const e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}_disableRendering(t){this._renderingDisabled=t,0==t&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}function Vs(t){return T(t)?gi(t):new Map(t)}ci(js,Fi);class zs{constructor(t){this.parent=null,this._attrs=Vs(t)}get index(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildIndex(this)))throw new Gn.b("model-node-not-found-in-parent: The node's parent does not contain this node.",this);return t}get startOffset(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildStartOffset(this)))throw new Gn.b("model-node-not-found-in-parent: The node's parent does not contain this node.",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}get document(){return this.root==this?null:this.root.document||null}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=li(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((t,e)=>(t[e[0]]=e[1],t),{})),t}is(t){return"node"==t||"model:node"==t}_clone(){return new zs(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=Vs(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}class Bs extends zs{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}is(t){return"text"==t||"model:text"==t||super.is(t)}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new Bs(this.data,this.getAttributes())}static fromJSON(t){return new Bs(t.data,t.attributes)}}class Fs{constructor(t,e,n){if(this.textNode=t,e<0||e>t.offsetSize)throw new Gn.b("model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.",this);if(n<0||e+n>t.offsetSize)throw new Gn.b("model-textproxy-wrong-length: Given length value is incorrect.",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return null!==this.textNode.startOffset?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return null!==this.startOffset?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return"textProxy"==t||"model:textProxy"==t}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class Us{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return-1==e?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return null===e?null:this._nodes.slice(0,e).reduce((t,e)=>t+e.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new Gn.b("model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new Gn.b("model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const t of e)if(!(t instanceof zs))throw new Gn.b("model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.",this);this._nodes.splice(t,0,...e)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class Hs extends zs{constructor(t,e,n){super(e),this.name=t,this._children=new Us,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}is(t,e=null){const n=t.replace(/^model:/,"");return e?"element"==n&&e==this.name:"element"==n||n==this.name||super.is(t)}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(t=>t._clone(!0)):null;return new Hs(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new Bs(t)];pi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new Bs(t):t instanceof Fs?new Bs(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}static fromJSON(t){let e=null;if(t.children){e=[];for(const n of t.children)n.name?e.push(Hs.fromJSON(n)):e.push(Bs.fromJSON(n))}return new Hs(t.name,t.attributes,e)}}class qs{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new Gn.b("model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.",null);const e=t.direction||"forward";if("forward"!=e&&"backward"!=e)throw new Gn.b("model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=t.startPosition.clone():this.position=$s._createAt(this.boundaries["backward"==this.direction?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,i,o;do{i=this.position,o=this._visitedParent,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=i,this._visitedParent=o)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(null===n.parent&&e.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};const i=e.textNode?e.textNode:e.nodeAfter;if(i instanceof Hs)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=i),this.position=e,Ws("elementStart",i,t,e,1);if(i instanceof Bs){let o;if(this.singleCharacters)o=1;else{let t=i.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<t&&(t=this.boundaries.end.offset),o=t-e.offset}const r=e.offset-i.startOffset,s=new Fs(i,r,o);return e.offset+=o,this.position=e,Ws("text",s,t,e,o)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():Ws("elementEnd",n,t,e)}_previous(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(null===n.parent&&0===e.offset)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};const i=e.textNode?e.textNode:e.nodeBefore;if(i instanceof Hs)return e.offset--,this.shallow?(this.position=e,Ws("elementStart",i,t,e,1)):(e.path.push(i.maxOffset),this.position=e,this._visitedParent=i,this.ignoreElementEnd?this._previous():Ws("elementEnd",i,t,e));if(i instanceof Bs){let o;if(this.singleCharacters)o=1;else{let t=i.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>t&&(t=this.boundaries.start.offset),o=e.offset-t}const r=e.offset-i.startOffset,s=new Fs(i,r-o,o);return e.offset-=o,this.position=e,Ws("text",s,t,e,o)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,Ws("elementStart",n,t,e,1)}}function Ws(t,e,n,i,o){return{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:o}}}var Ys=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0};class $s{constructor(t,e,n="toNone"){if(!t.is("element")&&!t.is("documentFragment"))throw new Gn.b("model-position-root-invalid: Position root invalid.",t);if(!(e instanceof Array)||0===e.length)throw new Gn.b("model-position-path-incorrect-format: Position path must be an array with at least one item.",t,{path:e});e=t.getPath().concat(e),t=t.root,this.root=t,this.path=e,this.stickiness=n}get offset(){return Ys(this.path)}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(!(t=t.getChild(t.offsetToIndex(this.path[e]))))throw new Gn.b("model-position-path-incorrect: The position's path is incorrect.",this,{position:this});if(t.is("text"))throw new Gn.b("model-position-path-incorrect: The position's path is incorrect.",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){const t=this.parent.getChild(this.index);return t instanceof Bs&&t.startOffset<this.offset?t:null}get nodeAfter(){return null===this.textNode?this.parent.getChild(this.index):null}get nodeBefore(){return null===this.textNode?this.parent.getChild(this.index-1):null}get isAtStart(){return 0===this.offset}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=li(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new qs(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonPath(t){if(this.root!=t.root)return[];const e=li(this.path,t.path),n="string"==typeof e?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return 0===i?null:e[i-1]}getShiftedBy(t){const e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return"after"==this.compareWith(t)}isBefore(t){return"before"==this.compareWith(t)}isEqual(t){return"same"==this.compareWith(t)}isTouching(t){let e=null,n=null;switch(this.compareWith(t)){case"same":return!0;case"before":e=$s._createAt(this),n=$s._createAt(t);break;case"after":e=$s._createAt(t),n=$s._createAt(this);break;default:return!1}let i=e.parent;for(;e.path.length+n.path.length;){if(e.isEqual(n))return!0;if(e.path.length>n.path.length){if(e.offset!==i.maxOffset)return!1;e.path=e.path.slice(0,-1),i=i.parent,e.offset++}else{if(0!==n.offset)return!1;n.path=n.path.slice(0,-1)}}}is(t){return"position"==t||"model:position"==t}hasSameParentAs(t){if(this.root!==t.root)return!1;return"same"==li(this.getParentPath(),t.getParentPath())}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=$s._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){const e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&"toNext"==this.stickiness?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){const e=t.movedRange;let n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?$s._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){const n=$s._createAt(this);if(this.root!=t.root)return n;if("same"==li(t.getParentPath(),this.getParentPath())){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if("prefix"==li(t.getParentPath(),this.getParentPath())){const i=t.path.length-1;if(t.offset<=this.path[i]){if(t.offset+e>this.path[i])return null;n.path[i]-=e}}return n}_getTransformedByInsertion(t,e){const n=$s._createAt(this);if(this.root!=t.root)return n;if("same"==li(t.getParentPath(),this.getParentPath()))(t.offset<this.offset||t.offset==this.offset&&"toPrevious"!=this.stickiness)&&(n.offset+=e);else if("prefix"==li(t.getParentPath(),this.getParentPath())){const i=t.path.length-1;t.offset<=this.path[i]&&(n.path[i]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return $s._createAt(this);const i=this._getTransformedByDeletion(t,n);return null===i||t.isEqual(this)&&"toNext"==this.stickiness||t.getShiftedBy(n).isEqual(this)&&"toPrevious"==this.stickiness?this._getCombined(t,e):i._getTransformedByInsertion(e,n)}_getCombined(t,e){const n=t.path.length-1,i=$s._createAt(e);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-t.offset,i.path=i.path.concat(this.path.slice(n+1)),i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof $s)return new $s(t.root,t.path,t.stickiness);{const i=t;if("end"==e)e=i.maxOffset;else{if("before"==e)return this._createBefore(i,n);if("after"==e)return this._createAfter(i,n);if(0!==e&&!e)throw new Gn.b("model-createPositionAt-offset-required: Model#createPositionAt() requires the offset when the first parameter is a model item.",[this,t])}if(!i.is("element")&&!i.is("documentFragment"))throw new Gn.b("model-position-parent-incorrect: Position parent have to be a element or document fragment.",[this,t]);const o=i.getPath();return o.push(e),new this(i.root,o,n)}}static _createAfter(t,e){if(!t.parent)throw new Gn.b("model-position-after-root: You cannot make a position after root.",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new Gn.b("model-position-before-root: You cannot make a position before root.",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if("$graveyard"===t.root){const n=new $s(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new Gn.b("model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.",e,{rootName:t.root});return new $s(e.getRoot(t.root),t.path,t.stickiness)}}class Gs{constructor(t,e=null){this.start=$s._createAt(t),this.end=e?$s._createAt(e):$s._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new qs({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return"same"==li(this.start.getParentPath(),this.end.getParentPath())}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}containsItem(t){const e=$s._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}is(t){return"range"==t||"model:range"==t}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Gs(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Gs(t.end,this.end))):e.push(new Gs(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Gs(e,n)}return null}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=$s._createAt(this.start);let i=n.parent;for(;n.path.length>e+1;){const e=i.maxOffset-n.offset;0!==e&&t.push(new Gs(n,n.getShiftedBy(e))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const e=this.end.path[n.path.length-1],i=e-n.offset;0!==i&&t.push(new Gs(n,n.getShiftedBy(i))),n.offset=e,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new qs(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new qs(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new qs(t);yield e.position;for(const t of e)yield t.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new Gs(this.start,this.end)]}getTransformedByOperations(t){const e=[new Gs(this.start,this.end)];for(const n of t)for(let t=0;t<e.length;t++){const i=e[t].getTransformedByOperation(n);e.splice(t,1,...i),t+=i.length-1}for(let t=0;t<e.length;t++){const n=e[t];for(let i=t+1;i<e.length;i++){const t=e[i];(n.containsRange(t)||t.containsRange(n)||n.isEqual(t))&&e.splice(i,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){const n=t.sourcePosition,i=t.howMany,o=t.targetPosition;return this._getTransformedByMove(n,o,i,e)}_getTransformedBySplitOperation(t){const e=this.start._getTransformedBySplitOperation(t);let n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new Gs(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new Gs(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=$s._createAt(n)).offset=0:(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new Gs(e,n)):new Gs(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new Gs(this.start,t),new Gs(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{const n=new Gs(this.start,this.end);return n.start=n.start._getTransformedByInsertion(t,e),n.end=n.end._getTransformedByInsertion(t,e),[n]}}_getTransformedByMove(t,e,n,i=!1){if(this.isCollapsed){const i=this.start._getTransformedByMove(t,e,n);return[new Gs(i)]}const o=Gs._createFromPositionAndShift(t,n),r=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!i&&(o.containsPosition(this.start)||o.containsPosition(this.end))){const i=this.start._getTransformedByMove(t,e,n),o=this.end._getTransformedByMove(t,e,n);return[new Gs(i,o)]}let s;const a=this.getDifference(o);let c=null;const l=this.getIntersection(o);if(1==a.length?c=new Gs(a[0].start._getTransformedByDeletion(t,n),a[0].end._getTransformedByDeletion(t,n)):2==a.length&&(c=new Gs(this.start,this.end._getTransformedByDeletion(t,n))),s=c?c._getTransformedByInsertion(r,n,null!==l||i):[],l){const t=new Gs(l.start._getCombined(o.start,r),l.end._getCombined(o.start,r));2==s.length?s.splice(1,0,t):s.push(t)}return s}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),i=this.end._getTransformedByDeletion(t,e);return null==n&&null==i?null:(null==n&&(n=t),null==i&&(i=t),new Gs(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return new this($s._createAt(t,0),$s._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift($s._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(0===t.length)throw new Gn.b("range-create-from-ranges-empty-array: At least one range has to be passed.",null);if(1==t.length)return t[0].clone();const e=t[0];t.sort((t,e)=>t.start.isAfter(e.start)?1:-1);const n=t.indexOf(e),i=new this(e.start,e.end);if(n>0)for(let e=n-1;t[e].end.isEqual(i.start);e++)i.start=$s._createAt(t[e].start);for(let e=n+1;e<t.length&&t[e].start.isEqual(i.end);e++)i.end=$s._createAt(t[e].end);return i}static fromJSON(t,e){return new this($s.fromJSON(t.start,e),$s.fromJSON(t.end,e))}}class Qs{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);e.viewPosition=this._findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;const n=this.findMappedViewAncestor(e.viewPosition),i=this._viewToModelMapping.get(n),o=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=$s._createAt(i,o)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t){const e=this.toModelElement(t);if(this._viewToModelMapping.delete(t),this._elementToMarkerNames.has(t))for(const e of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(e);this._modelToViewMapping.get(e)==t&&this._modelToViewMapping.delete(e)}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t);const i=this._elementToMarkerNames.get(t)||new Set;i.add(e),this._markerNameToElements.set(e,n),this._elementToMarkerNames.set(t,i)}unbindElementFromMarkerName(t,e){const n=this._markerNameToElements.get(e);n&&(n.delete(t),0==n.size&&this._markerNameToElements.delete(e));const i=this._elementToMarkerNames.get(t);i&&(i.delete(e),0==i.size&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){const t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new Gs(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new Xi(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={isPhantom:!1}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const t of e)if(t.is("attributeElement"))for(const e of t.getElementsWithSameId())n.add(e);else n.add(t);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t){return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t)}if(t.is("text"))return e;let i=0;for(let n=0;n<e;n++)i+=this.getModelLength(t.getChild(n));return i}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name)){return this._viewToModelLengthCallbacks.get(t.name)(t)}if(this._viewToModelMapping.has(t))return 1;if(t.is("text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}_findPositionIn(t,e){let n,i=0,o=0,r=0;if(t.is("text"))return new Zi(t,e);for(;o<e;)n=t.getChild(r),o+=i=this.getModelLength(n),r++;return o==e?this._moveViewPositionToTextNode(new Zi(t,r)):this._findPositionIn(n,e-(o-i))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof fi?new Zi(e,e.data.length):n instanceof fi?new Zi(n,0):t}}ci(Qs,ei);class Ks{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=Js(e),t instanceof Fs&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=Js(e),t instanceof Fs&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=Js(e),t instanceof Fs&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(void 0===n)return null;const i=n.get(e);return void 0===i?null:i}revert(t,e){e=Js(e),t instanceof Fs&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return!1===n?(this._consumable.get(t).set(e,!0),!0):!0!==n&&null}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const i=n.get(t.endOffset);i&&(e=i.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t.startOffset,t.endOffset,t.parent)),e}_addSymbolForTextProxy(t,e,n){const i=Symbol("textProxySymbol");let o,r;return(o=this._textProxyRegistry.get(t))||(o=new Map,this._textProxyRegistry.set(t,o)),(r=o.get(e))||(r=new Map,o.set(e,r)),r.set(n,i),i}}function Js(t){const e=t.split(":");return e.length>1?e[0]+":"+e[1]:e[0]}class Zs{constructor(t){this.conversionApi=Li({dispatcher:this},t)}convertChanges(t,e,n){for(const e of t.getMarkersToRemove())this.convertMarkerRemove(e.name,e.range,n);for(const e of t.getChanges())"insert"==e.type?this.convertInsert(Gs._createFromPositionAndShift(e.position,e.length),n):"remove"==e.type?this.convertRemove(e.position,e.length,e.name,n):this.convertAttribute(e.range,e.attributeKey,e.attributeOldValue,e.attributeNewValue,n);for(const t of this.conversionApi.mapper.flushUnboundMarkerNames()){const i=e.get(t).getRange();this.convertMarkerRemove(t,i,n),this.convertMarkerAdd(t,i,n)}for(const e of t.getMarkersToAdd())this.convertMarkerAdd(e.name,e.range,n)}convertInsert(t,e){this.conversionApi.writer=e,this.conversionApi.consumable=this._createInsertConsumable(t);for(const e of t){const t=e.item,n={item:t,range:Gs._createFromPositionAndShift(e.previousPosition,e.length)};this._testAndFire("insert",n);for(const e of t.getAttributeKeys())n.attributeKey=e,n.attributeOldValue=null,n.attributeNewValue=t.getAttribute(e),this._testAndFire(`attribute:${e}`,n)}this._clearConversionApi()}convertRemove(t,e,n,i){this.conversionApi.writer=i,this.fire("remove:"+n,{position:t,length:e},this.conversionApi),this._clearConversionApi()}convertAttribute(t,e,n,i,o){this.conversionApi.writer=o,this.conversionApi.consumable=this._createConsumableForRange(t,`attribute:${e}`);for(const o of t){const t={item:o.item,range:Gs._createFromPositionAndShift(o.previousPosition,o.length),attributeKey:e,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${e}`,t)}this._clearConversionApi()}convertSelection(t,e,n){const i=Array.from(e.getMarkersAtPosition(t.getFirstPosition()));if(this.conversionApi.writer=n,this.conversionApi.consumable=this._createSelectionConsumable(t,i),this.fire("selection",{selection:t},this.conversionApi),t.isCollapsed){for(const e of i){const n=e.getRange();if(!Xs(t.getFirstPosition(),e,this.conversionApi.mapper))continue;const i={item:t,markerName:e.name,markerRange:n};this.conversionApi.consumable.test(t,"addMarker:"+e.name)&&this.fire("addMarker:"+e.name,i,this.conversionApi)}for(const e of t.getAttributeKeys()){const n={item:t,range:t.getFirstRange(),attributeKey:e,attributeOldValue:null,attributeNewValue:t.getAttribute(e)};this.conversionApi.consumable.test(t,"attribute:"+n.attributeKey)&&this.fire("attribute:"+n.attributeKey+":$text",n,this.conversionApi)}this._clearConversionApi()}}convertMarkerAdd(t,e,n){if(!e.root.document||"$graveyard"==e.root.rootName)return;this.conversionApi.writer=n;const i="addMarker:"+t,o=new Ks;if(o.add(e,i),this.conversionApi.consumable=o,this.fire(i,{markerName:t,markerRange:e},this.conversionApi),o.test(e,i)){this.conversionApi.consumable=this._createConsumableForRange(e,i);for(const n of e.getItems()){if(!this.conversionApi.consumable.test(n,i))continue;const o={item:n,range:Gs._createOn(n),markerName:t,markerRange:e};this.fire(i,o,this.conversionApi)}this._clearConversionApi()}}convertMarkerRemove(t,e,n){e.root.document&&"$graveyard"!=e.root.rootName&&(this.conversionApi.writer=n,this.fire("removeMarker:"+t,{markerName:t,markerRange:e},this.conversionApi),this._clearConversionApi())}_createInsertConsumable(t){const e=new Ks;for(const n of t){const t=n.item;e.add(t,"insert");for(const n of t.getAttributeKeys())e.add(t,"attribute:"+n)}return e}_createConsumableForRange(t,e){const n=new Ks;for(const i of t.getItems())n.add(i,e);return n}_createSelectionConsumable(t,e){const n=new Ks;n.add(t,"selection");for(const i of e)n.add(t,"addMarker:"+i.name);for(const e of t.getAttributeKeys())n.add(t,"attribute:"+e);return n}_testAndFire(t,e){if(!this.conversionApi.consumable.test(e.item,t))return;const n=e.item.name||"$text";this.fire(t+":"+n,e,this.conversionApi)}_clearConversionApi(){delete this.conversionApi.writer,delete this.conversionApi.consumable}}function Xs(t,e,n){const i=e.getRange(),o=Array.from(t.getAncestors());return o.shift(),o.reverse(),!o.some(t=>{if(i.containsItem(t)){return!!n.toViewElement(t).getCustomProperty("addHighlight")}})}ci(Zs,ei);class ta{constructor(t,e,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,t&&this.setTo(t,e,n)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return 1===this._ranges.length&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield new Gs(t.start,t.end)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new Gs(t.start,t.end):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new Gs(t.start,t.end):null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}setTo(t,e,n){if(null===t)this._setRanges([]);else if(t instanceof ta)this._setRanges(t.getRanges(),t.isBackward);else if(t&&"function"==typeof t.getRanges)this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof Gs)this._setRanges([t],!!e&&!!e.backward);else if(t instanceof $s)this._setRanges([new Gs(t)]);else if(t instanceof zs){const i=!!n&&!!n.backward;let o;if("in"==e)o=Gs._createIn(t);else if("on"==e)o=Gs._createOn(t);else{if(void 0===e)throw new Gn.b("model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.",[this,t]);o=new Gs($s._createAt(t,e))}this._setRanges([o],i)}else{if(!pi(t))throw new Gn.b("model-selection-setTo-not-selectable: Cannot set the selection to the given place.",[this,t]);this._setRanges(t,e&&!!e.backward)}}_setRanges(t,e=!1){const n=(t=Array.from(t)).some(e=>{if(!(e instanceof Gs))throw new Gn.b("model-selection-set-ranges-not-range: Selection range set to an object that is not an instance of model.Range.",[this,t]);return this._ranges.every(t=>!t.isEqual(e))});if(t.length!==this._ranges.length||n){this._removeAllRanges();for(const e of t)this._pushRange(e);this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0})}}setFocus(t,e){if(null===this.anchor)throw new Gn.b("model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.",[this,t]);const n=$s._createAt(t,e);if("same"==n.compareWith(this.focus))return;const i=this.anchor;this._ranges.length&&this._popRange(),"before"==n.compareWith(i)?(this._pushRange(new Gs(n,i)),this._lastRangeBackward=!0):(this._pushRange(new Gs(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){if(1!==this.rangeCount)return null;const t=this.getFirstRange(),e=t.start.nodeAfter,n=t.end.nodeBefore;return e instanceof Hs&&e==n?e:null}is(t){return"selection"==t||"model:selection"==t}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=na(e.start,t);n&&(yield n);for(const n of e.getWalker())"elementEnd"==n.type&&ea(n.item,t)&&(yield n.item);const i=na(e.end,t);i&&!e.end.isTouching($s._createAt(i,0))&&(yield i)}}*getTopMostBlocks(){const t=Array.from(this.getSelectedBlocks());for(const e of t){const n=ia(e);n&&t.includes(n)||(yield e)}}containsEntireContent(t=this.anchor.root){const e=$s._createAt(t,0),n=$s._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new Gs(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new Gn.b("model-selection-range-intersects: Trying to add a range that intersects with another range in the selection.",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function ea(t,e){return!e.has(t)&&(e.add(t),t.document.model.schema.isBlock(t)&&t.parent)}function na(t,e){const n=t.parent.document.model.schema,i=t.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const r=i.find(t=>!o&&(!(o=n.isLimit(t))&&ea(t,e)));return i.forEach(t=>e.add(t)),r}function ia(t){const e=t.document.model.schema;let n=t.parent;for(;n;){if(e.isBlock(n))return n;n=n.parent}}ci(ta,ei);class oa extends Gs{constructor(t,e){super(t,e),function(){this.listenTo(this.root.document.model,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&function(t){const e=this.getTransformedByOperation(t),n=Gs._createFromRanges(e),i=!n.isEqual(this),o=function(t,e){switch(e.type){case"insert":return t.containsPosition(e.position);case"move":case"remove":case"reinsert":case"merge":return t.containsPosition(e.sourcePosition)||t.start.isEqual(e.sourcePosition)||t.containsPosition(e.targetPosition);case"split":return t.containsPosition(e.splitPosition)||t.containsPosition(e.insertionPosition)}return!1}(this,t);let r=null;if(i){"$graveyard"==n.root.rootName&&(r="remove"==t.type?t.sourcePosition:t.deletionPosition);const e=this.toRange();this.start=n.start,this.end=n.end,this.fire("change:range",e,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}.call(this,n)},{priority:"low"})}.call(this)}detach(){this.stopListening()}is(t){return"liveRange"==t||"model:liveRange"==t||super.is(t)}toRange(){return new Gs(this.start,this.end)}static fromRange(t){return new oa(t.start,t.end)}}ci(oa,ei);const ra="selection:";class sa{constructor(t){this._selection=new aa(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getTopMostBlocks(){return this._selection.getTopMostBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}is(t){return"selection"==t||"model:selection"==t||"documentSelection"==t||"model:documentSelection"==t}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return ra+t}static _isStoreAttributeKey(t){return t.startsWith(ra)}}ci(sa,ei);class aa extends ta{constructor(t){super(),this.markers=new oo({idProperty:"name"}),this._model=t.model,this._document=t,this._attributePriority=new Map,this._fixGraveyardRangesData=[],this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this.listenTo(this._model,"applyOperation",(t,e)=>{const n=e[0];if(n.isDocumentOperation&&"marker"!=n.type&&"rename"!=n.type&&"noop"!=n.type){for(;this._fixGraveyardRangesData.length;){const{liveRange:t,sourcePosition:e}=this._fixGraveyardRangesData.shift();this._fixGraveyardSelection(t,e)}this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1}))}},{priority:"lowest"}),this.on("change:range",()=>{for(const t of this.getRanges())if(!this._document._validateSelectionRange(t))throw new Gn.b("document-selection-wrong-position: Range from document selection starts or ends at incorrect position.",this,{range:t})}),this.listenTo(this._model.markers,"update",()=>this._updateMarkers()),this.listenTo(this._document,"change",(t,e)=>{!function(t,e){const n=t.document.differ;for(const i of n.getChanges()){if("insert"!=i.type)continue;const n=i.position.parent,o=i.length===n.maxOffset;o&&t.enqueueChange(e,t=>{const e=Array.from(n.getAttributeKeys()).filter(t=>t.startsWith(ra));for(const i of e)t.removeAttribute(i,n)})}}(this._model,e)})}get isCollapsed(){return 0===this._ranges.length?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(t,e,n){super.setTo(t,e,n),this._updateAttributes(!0)}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0)}setAttribute(t,e){if(this._setAttribute(t,e)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=Jn();return this._overriddenGravityRegister.add(t),1===this._overriddenGravityRegister.size&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new Gn.b("document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;const e=oa.fromRange(t);return e.on("change:range",(t,n,i)=>{this._hasChangedRange=!0,e.root==this._document.graveyard&&this._fixGraveyardRangesData.push({liveRange:e,sourcePosition:i.deletionPosition})}),e}_updateMarkers(){const t=[];for(const e of this._model.markers){const n=e.getRange();for(const i of this.getRanges())n.containsRange(i,!i.isCollapsed)&&t.push(e)}for(const e of t)this.markers.has(e)||this.markers.add(e);for(const e of Array.from(this.markers))t.includes(e)||this.markers.remove(e)}_updateAttributes(t){const e=Vs(this._getSurroundingAttributes()),n=Vs(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[t,e]of this._attributePriority)"low"==e&&(this._attrs.delete(t),this._attributePriority.delete(t));this._setAttributesTo(e);const i=[];for(const[t,e]of this.getAttributes())n.has(t)&&n.get(t)===e||i.push(t);for(const[t]of n)this.hasAttribute(t)||i.push(t);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(t,e,n=!0){const i=n?"normal":"low";return("low"!=i||"normal"!=this._attributePriority.get(t))&&(super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,i),!0))}_removeAttribute(t,e=!0){const n=e?"normal":"low";return("low"!=n||"normal"!=this._attributePriority.get(t))&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[e,n]of this.getAttributes())t.get(e)!==n&&this._removeAttribute(e,!1);for(const[n,i]of t){this._setAttribute(n,i,!1)&&e.add(n)}return e}*_getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())if(e.startsWith(ra)){yield[e.substr(ra.length),t.getAttribute(e)]}}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;let n=null;if(this.isCollapsed){const e=t.textNode?t.textNode:t.nodeBefore,i=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=ca(e)),n||(n=ca(i)),!this.isGravityOverridden&&!n){let t=e;for(;t&&!n;)n=ca(t=t.previousSibling)}if(!n){let t=i;for(;t&&!n;)n=ca(t=t.nextSibling)}n||(n=this._getStoredAttributes())}else{const t=this.getFirstRange();for(const i of t){if(i.item.is("element")&&e.isObject(i.item))break;if("text"==i.type){n=i.item.getAttributes();break}}}return n}_fixGraveyardSelection(t,e){const n=e.clone(),i=this._model.schema.getNearestSelectionRange(n),o=this._ranges.indexOf(t);if(this._ranges.splice(o,1),t.detach(),i){const t=this._prepareRange(i);this._ranges.splice(o,0,t)}}}function ca(t){return t instanceof Fs||t instanceof Bs?t.getAttributes():null}class la{constructor(t){this._dispatchers=t}add(t){for(const e of this._dispatchers)t(e);return this}}var da=1,ha=4;var ua=function(t){return Fn(t,da|ha)};class fa extends la{elementToElement(t){return this.add(function(t){return(t=ua(t)).view=ga(t.view,"container"),e=>{e.on("insert:"+t.model,function(t){return(e,n,i)=>{const o=t(n.item,i.writer);if(!o)return;if(!i.consumable.consume(n.item,"insert"))return;const r=i.mapper.toViewPosition(n.range.start);i.mapper.bindElements(n.item,o),i.writer.insert(r,o)}}(t.view),{priority:t.converterPriority||"normal"})}}(t))}attributeToElement(t){return this.add(function(t){let e="attribute:"+((t=ua(t)).model.key?t.model.key:t.model);t.model.name&&(e+=":"+t.model.name);if(t.model.values)for(const e of t.model.values)t.view[e]=ga(t.view[e],"attribute");else t.view=ga(t.view,"attribute");const n=pa(t);return i=>{i.on(e,function(t){return(e,n,i)=>{const o=t(n.attributeOldValue,i.writer),r=t(n.attributeNewValue,i.writer);if(!o&&!r)return;if(!i.consumable.consume(n.item,e.name))return;const s=i.writer,a=s.document.selection;if(n.item instanceof ta||n.item instanceof sa)s.wrap(a.getFirstRange(),r);else{let t=i.mapper.toViewRange(n.range);null!==n.attributeOldValue&&o&&(t=s.unwrap(t,o)),null!==n.attributeNewValue&&r&&s.wrap(t,r)}}}(n),{priority:t.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(t){let e="attribute:"+((t=ua(t)).model.key?t.model.key:t.model);t.model.name&&(e+=":"+t.model.name);if(t.model.values)for(const e of t.model.values)t.view[e]=ba(t.view[e]);else t.view=ba(t.view);const n=pa(t);return i=>{i.on(e,function(t){return(e,n,i)=>{const o=t(n.attributeOldValue,n),r=t(n.attributeNewValue,n);if(!o&&!r)return;if(!i.consumable.consume(n.item,e.name))return;const s=i.mapper.toViewElement(n.item),a=i.writer;if(!s)throw new Gn.b("conversion-attribute-to-attribute-on-text: Trying to convert text node's attribute with attribute-to-attribute converter.",[n,i]);if(null!==n.attributeOldValue&&o)if("class"==o.key){const t=Array.isArray(o.value)?o.value:[o.value];for(const e of t)a.removeClass(e,s)}else if("style"==o.key){const t=Object.keys(o.value);for(const e of t)a.removeStyle(e,s)}else a.removeAttribute(o.key,s);if(null!==n.attributeNewValue&&r)if("class"==r.key){const t=Array.isArray(r.value)?r.value:[r.value];for(const e of t)a.addClass(e,s)}else if("style"==r.key){const t=Object.keys(r.value);for(const e of t)a.setStyle(e,r.value[e],s)}else a.setAttribute(r.key,r.value,s)}}(n),{priority:t.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(t){return(t=ua(t)).view=ga(t.view,"ui"),e=>{e.on("addMarker:"+t.model,function(t){return(e,n,i)=>{n.isOpening=!0;const o=t(n,i.writer);n.isOpening=!1;const r=t(n,i.writer);if(!o||!r)return;const s=n.markerRange;if(s.isCollapsed&&!i.consumable.consume(s,e.name))return;for(const t of s)if(!i.consumable.consume(t.item,e.name))return;const a=i.mapper,c=i.writer;c.insert(a.toViewPosition(s.start),o),i.mapper.bindElementToMarker(o,n.markerName),s.isCollapsed||(c.insert(a.toViewPosition(s.end),r),i.mapper.bindElementToMarker(r,n.markerName)),e.stop()}}(t.view),{priority:t.converterPriority||"normal"}),e.on("removeMarker:"+t.model,(t.view,(t,e,n)=>{const i=n.mapper.markerNameToElements(e.markerName);if(i){for(const t of i)n.mapper.unbindElementFromMarkerName(t,e.markerName),n.writer.clear(n.writer.createRangeOn(t),t);n.writer.clearClonedElementsGroup(e.markerName),t.stop()}}),{priority:t.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(t){return e=>{e.on("addMarker:"+t.model,function(t){return(e,n,i)=>{if(!n.item)return;if(!(n.item instanceof ta||n.item instanceof sa||n.item.is("textProxy")))return;const o=wa(t,n,i);if(!o)return;if(!i.consumable.consume(n.item,e.name))return;const r=ma(o),s=i.writer,a=s.document.selection;if(n.item instanceof ta||n.item instanceof sa)s.wrap(a.getFirstRange(),r,a);else{const t=i.mapper.toViewRange(n.range),e=s.wrap(t,r);for(const t of e.getItems())if(t.is("attributeElement")&&t.isSimilar(r)){i.mapper.bindElementToMarker(t,n.markerName);break}}}}(t.view),{priority:t.converterPriority||"normal"}),e.on("addMarker:"+t.model,function(t){return(e,n,i)=>{if(!n.item)return;if(!(n.item instanceof Hs))return;const o=wa(t,n,i);if(!o)return;if(!i.consumable.test(n.item,e.name))return;const r=i.mapper.toViewElement(n.item);if(r&&r.getCustomProperty("addHighlight")){i.consumable.consume(n.item,e.name);for(const t of Gs._createIn(n.item))i.consumable.consume(t.item,e.name);r.getCustomProperty("addHighlight")(r,o,i.writer),i.mapper.bindElementToMarker(r,n.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),e.on("removeMarker:"+t.model,function(t){return(e,n,i)=>{if(n.markerRange.isCollapsed)return;const o=wa(t,n,i);if(!o)return;const r=ma(o),s=i.mapper.markerNameToElements(n.markerName);if(s){for(const t of s)i.mapper.unbindElementFromMarkerName(t,n.markerName),t.is("attributeElement")?i.writer.unwrap(i.writer.createRangeOn(t),r):t.getCustomProperty("removeHighlight")(t,o.id,i.writer);i.writer.clearClonedElementsGroup(n.markerName),e.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(t))}}function ma(t){const e=new ao("span",t.attributes);return t.classes&&e._addClass(t.classes),t.priority&&(e._priority=t.priority),e._id=t.id,e}function ga(t,e){return"function"==typeof t?t:(n,i)=>(function(t,e,n){"string"==typeof t&&(t={name:t});let i;const o=Object.assign({},t.attributes);if("container"==n)i=e.createContainerElement(t.name,o);else if("attribute"==n){const n={priority:t.priority||ao.DEFAULT_PRIORITY};i=e.createAttributeElement(t.name,o,n)}else i=e.createUIElement(t.name,o);if(t.styles){const n=Object.keys(t.styles);for(const o of n)e.setStyle(o,t.styles[o],i)}if(t.classes){const n=t.classes;if("string"==typeof n)e.addClass(n,i);else for(const t of n)e.addClass(t,i)}return i})(t,i,e)}function pa(t){return t.model.values?(e,n)=>{const i=t.view[e];return i?i(e,n):null}:t.view}function ba(t){return"string"==typeof t?e=>({key:t,value:e}):"object"==typeof t?t.value?()=>t:e=>({key:t.key,value:e}):t}function wa(t,e,n){const i="function"==typeof t?t(e,n):t;return i?(i.priority||(i.priority=10),i.id||(i.id=e.markerName),i):null}class ka extends la{elementToElement(t){return this.add(_a(t))}elementToAttribute(t){return this.add(function(t){ya(t=ua(t));const e=xa(t,!1),n=va(t),i=n?"element:"+n:"element";return n=>{n.on(i,e,{priority:t.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(t){let e=null;("string"==typeof(t=ua(t)).view||t.view.key)&&(e=function(t){"string"==typeof t.view&&(t.view={key:t.view});const e=t.view.key;let n;if("class"==e||"style"==e){const i="class"==e?"classes":"styles";n={[i]:t.view.value}}else{const i=void 0===t.view.value?/[\s\S]*/:t.view.value;n={attributes:{[e]:i}}}t.view.name&&(n.name=t.view.name);return t.view=n,e}(t));ya(t,e);const n=xa(t,!0);return e=>{e.on("element",n,{priority:t.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(t){return function(t){const e=t.model;t.model=((t,n)=>{const i="string"==typeof e?e:e(t);return n.createElement("$marker",{"data-name":i})})}(t=ua(t)),_a(t)}(t))}}function _a(t){const e=function(t){const e=t.view?new bi(t.view):null;return(n,i,o)=>{let r={};if(e){const t=e.match(i.viewItem);if(!t)return;r=t.match}r.name=!0;const s=function(t,e,n){return t instanceof Function?t(e,n):n.createElement(t)}(t.model,i.viewItem,o.writer);if(!s)return;if(!o.consumable.test(i.viewItem,r))return;const a=o.splitToAllowedParent(s,i.modelCursor);if(!a)return;o.writer.insert(s,a.position),o.convertChildren(i.viewItem,o.writer.createPositionAt(s,0)),o.consumable.consume(i.viewItem,r);const c=o.getSplitParts(s);i.modelRange=new Gs(o.writer.createPositionBefore(s),o.writer.createPositionAfter(c[c.length-1])),a.cursorParent?i.modelCursor=o.writer.createPositionAt(a.cursorParent,0):i.modelCursor=i.modelRange.end}}(t=ua(t)),n=va(t),i=n?"element:"+n:"element";return n=>{n.on(i,e,{priority:t.converterPriority||"normal"})}}function va(t){return"string"==typeof t.view?t.view:"object"==typeof t.view&&"string"==typeof t.view.name?t.view.name:null}function ya(t,e=null){const n=null===e||(t=>t.getAttribute(e)),i="object"!=typeof t.model?t.model:t.model.key,o="object"!=typeof t.model||void 0===t.model.value?n:t.model.value;t.model={key:i,value:o}}function xa(t,e){const n=new bi(t.view);return(i,o,r)=>{const s=n.match(o.viewItem);if(!s)return;const a=t.model.key,c="function"==typeof t.model.value?t.model.value(o.viewItem):t.model.value;null!==c&&(!function(t){if("object"==typeof t.view&&!va(t))return!1;return!t.view.classes&&!t.view.attributes&&!t.view.styles}(t)?delete s.match.name:s.match.name=!0,r.consumable.test(o.viewItem,s.match)&&(o.modelRange||(o=Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor))),function(t,e,n,i){let o=!1;for(const r of Array.from(t.getItems({shallow:n})))i.schema.checkAttribute(r,e.key)&&(i.writer.setAttribute(e.key,e.value,r),o=!0);return o}(o.modelRange,{key:a,value:c},e,r)&&r.consumable.consume(o.viewItem,s.match)))}}class Aa{constructor(t){this.model=t,this.view=new js,this.mapper=new Qs,this.downcastDispatcher=new Zs({mapper:this.mapper});const e=this.model.document,n=e.selection,i=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(e,"change",()=>{this.view.change(t=>{this.downcastDispatcher.convertChanges(e.differ,i,t),this.downcastDispatcher.convertSelection(n,i,t)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(t,e){return(n,i)=>{const o=i.newSelection,r=new ta,s=[];for(const t of o.getRanges())s.push(e.toModelRange(t));r.setTo(s,{backward:o.isBackward}),r.isEqual(t.document.selection)||t.change(t=>{t.setSelection(r)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const i=n.writer,o=n.mapper.toViewPosition(e.range.start),r=i.createText(e.item.data);i.insert(o,r)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(t,e,n)=>{const i=n.mapper.toViewPosition(e.position),o=e.position.getShiftedBy(e.length),r=n.mapper.toViewPosition(o,{isPhantom:!0}),s=n.writer.createRange(i,r),a=n.writer.remove(s.getTrimmed());for(const t of n.writer.createRangeIn(a).getItems())n.mapper.unbindViewElement(t)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=n.writer,o=i.document.selection;for(const t of o.getRanges())t.isCollapsed&&t.end.parent.document&&n.writer.mergeAttributes(t.start);i.setSelection(null)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=e.selection;if(i.isCollapsed)return;if(!n.consumable.consume(i,"selection"))return;const o=[];for(const t of i.getRanges()){const e=n.mapper.toViewRange(t);o.push(e)}n.writer.setSelection(o,{backward:i.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=e.selection;if(!i.isCollapsed)return;if(!n.consumable.consume(i,"selection"))return;const o=n.writer,r=i.getFirstPosition(),s=n.mapper.toViewPosition(r),a=o.breakAttributes(s);o.setSelection(a)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(t=>{if("$graveyard"==t.rootName)return null;const e=new Ki(t.name);return e.rootName=t.rootName,e._document=this.view.document,this.mapper.bindElements(t,e),e})}destroy(){this.view.destroy(),this.stopListening()}}ci(Aa,Fi);class Ta{constructor(t,e=[]){this._editor=t,this._availablePlugins=new Map,this._plugins=new Map;for(const t of e)this._availablePlugins.set(t,t),t.pluginName&&this._availablePlugins.set(t.pluginName,t)}*[Symbol.iterator](){for(const t of this._plugins)"function"==typeof t[0]&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){const e="plugincollection-plugin-not-loaded: The requested plugin is not loaded.";let n=t;throw"function"==typeof t&&(n=t.pluginName||t.name),new Gn.b(e,this._editor,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[]){const n=this,i=this._editor,o=new Set,r=[],s=u(t),a=u(e),c=function(t){const e=[];for(const n of t)h(n)||e.push(n);return e.length?e:null}(t);if(c){const t="plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.";return console.error(Object(Gn.a)(t),{plugins:c}),Promise.reject(new Gn.b(t,this._editor,{plugins:c}))}return Promise.all(s.map(l)).then(()=>d(r,"init")).then(()=>d(r,"afterInit")).then(()=>r);function l(t){if(!a.includes(t)&&!n._plugins.has(t)&&!o.has(t))return function(t){return new Promise(s=>{o.add(t),t.requires&&t.requires.forEach(n=>{const o=h(n);if(e.includes(o))throw new Gn.b("plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.",i,{plugin:o,requiredBy:t});l(o)});const a=new t(i);n._add(t,a),r.push(a),s()})}(t).catch(e=>{throw console.error(Object(Gn.a)("plugincollection-load: It was not possible to load the plugin."),{plugin:t}),e})}function d(t,e){return t.reduce((t,n)=>n[e]?t.then(n[e].bind(n)):t,Promise.resolve())}function h(t){return"function"==typeof t?t:n._availablePlugins.get(t)}function u(t){return t.map(t=>h(t)).filter(t=>!!t)}}destroy(){const t=Array.from(this).map(([,t])=>t).filter(t=>"function"==typeof t.destroy).map(t=>t.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new Gn.b("plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}ci(Ta,ei);class Ca{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new Gn.b("commandcollection-command-not-found: Command does not exist.",this,{commandName:t});n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}function Pa(t,e){const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;return 1===n&&(t=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]),0!==n&&function(t,e){return t in window.CKEDITOR_TRANSLATIONS&&e in window.CKEDITOR_TRANSLATIONS[t]}(t,e)?window.CKEDITOR_TRANSLATIONS[t][e].replace(/ \[context: [^\]]+\]$/,""):e.replace(/ \[context: [^\]]+\]$/,"")}window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const Sa=["ar","fa","he","ku","ug"];class Ma{constructor(t={}){this.uiLanguage=t.uiLanguage||"en",this.contentLanguage=t.contentLanguage||this.uiLanguage,this.uiLanguageDirection=Ea(this.uiLanguage),this.contentLanguageDirection=Ea(this.contentLanguage),this.t=((...t)=>this._t(...t))}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e){let n=Pa(this.uiLanguage,t);return e&&(n=n.replace(/%(\d+)/g,(t,n)=>n<e.length?e[n]:t)),n}}function Ea(t){return Sa.includes(t)?"rtl":"ltr"}class Ia{constructor(){this._consumables=new Map}add(t,e){let n;t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new Na,this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return void 0===n?null:t.is("text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);void 0!==n&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const t of n)"style"!=t&&"class"!=t&&e.attributes.push(t);const i=t.getClassNames();for(const t of i)e.classes.push(t);const o=t.getStyleNames();for(const t of o)e.styles.push(t);return e}static createFrom(t,e){if(e||(e=new Ia),t.is("text"))return e.add(t),e;t.is("element")&&e.add(t,Ia.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=Ia.createFrom(n,e);return e}}class Na{constructor(){this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e in this._consumables)if(e in t){const n=this._test(e,t[e]);if(!0!==n)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e in this._consumables)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._revert(e,t[e])}_add(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n){if("attributes"===t&&("class"===e||"style"===e))throw new Gn.b("viewconsumable-invalid-attribute: Classes and styles should be handled separately.",this);i.set(e,!0)}}_test(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){const t=i.get(e);if(void 0===t)return null;if(!t)return!1}else{const t="class"==e?"classes":"styles",n=this._test(t,[...this._consumables[t].keys()]);if(!0!==n)return n}return!0}_consume(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e)i.set(e,!1);else{const t="class"==e?"classes":"styles";this._consume(t,[...this._consumables[t].keys()])}}_revert(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){!1===i.get(e)&&i.set(e,!0)}else{const t="class"==e?"classes":"styles";this._revert(t,[...this._consumables[t].keys()])}}}class Oa{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new Ra(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new Ra(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new Gn.b("schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new Gn.b("schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e="string"==typeof t?t:t.is&&(t.is("text")||t.is("textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!(!e||!e.isObject)}isInline(t){const e=this.getDefinition(t);return!(!e||!e.isInline)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e=null){if(t instanceof $s){const e=t.nodeBefore,n=t.nodeAfter;if(!(e instanceof Hs))throw new Gn.b("schema-check-merge-no-element-before: The node before the merge position must be an element.",this);if(!(n instanceof Hs))throw new Gn.b("schema-check-merge-no-element-after: The node after the merge position must be an element.",this);return this.checkMerge(e,n)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,i])=>{if(!i)return;const o=t(n,i);"boolean"==typeof o&&(e.stop(),e.return=o)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,i])=>{const o=t(n,i);"boolean"==typeof o&&(e.stop(),e.return=o)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;if(t instanceof $s)e=t.parent;else{e=(t instanceof Gs?[t]:Array.from(t.getRanges())).reduce((t,e)=>{const n=e.getCommonAncestor();return t?t.getCommonAncestor(n,{includeSelf:!0}):n},null)}for(;!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){const n=[...t.getFirstPosition().getAncestors(),new Bs("",t.getAttributes())];return this.checkAttribute(n,e)}{const n=t.getRanges();for(const t of n)for(const n of t)if(this.checkAttribute(n.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(t){for(const e of t)yield*e.getMinimalFlatRanges()}(t);for(const n of t)yield*this._getValidRangesForRange(n,e)}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new Gs(t);let n,i;"both"!=e&&"backward"!=e||(n=new qs({startPosition:t,direction:"backward"})),"both"!=e&&"forward"!=e||(i=new qs({startPosition:t}));for(const t of function*(t,e){let n=!1;for(;!n;){if(n=!0,t){const e=t.next();e.done||(n=!1,yield{walker:t,value:e.value})}if(e){const t=e.next();t.done||(n=!1,yield{walker:e,value:t.value})}}}(n,i)){const e=t.walker==n?"elementEnd":"elementStart",i=t.value;if(i.type==e&&this.isObject(i.item))return Gs._createOn(i.item);if(this.checkChild(i.nextPosition,"$text"))return new Gs(i.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}removeDisallowedAttributes(t,e){for(const n of t){for(const t of n.getAttributeKeys())this.checkAttribute(n,t)||e.removeAttribute(t,n);n.is("element")&&this.removeDisallowedAttributes(n.getChildren(),e)}}createContext(t){return new Ra(t)}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const i of n)t[i]=Da(e[i],i);for(const e of n)La(t,e);for(const e of n)ja(t,e);for(const e of n)Va(t,e),za(t,e);for(const e of n)Ba(t,e),Fa(t,e);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const i=e.getItem(n);if(t.allowIn.includes(i.name)){if(0==n)return!0;{const t=this.getDefinition(i);return this._checkContextMatch(t,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,i=t.start;for(const o of t.getItems({shallow:!0}))o.is("element")&&(yield*this._getValidRangesForRange(Gs._createIn(o),e)),this.checkAttribute(o,e)||(n.isEqual(i)||(yield new Gs(n,i)),n=$s._createAfter(o)),i=$s._createAfter(o);n.isEqual(i)||(yield new Gs(n,i))}}ci(Oa,Fi);class Ra{constructor(t){if(t instanceof Ra)return t;"string"==typeof t?t=[t]:Array.isArray(t)||(t=t.getAncestors({includeSelf:!0})),t[0]&&"string"!=typeof t[0]&&t[0].is("documentFragment")&&t.shift(),this._items=t.map(qa)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new Ra([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}}function Da(t,e){const n={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],inheritTypesFrom:[]};return function(t,e){for(const n of t){const t=Object.keys(n).filter(t=>t.startsWith("is"));for(const i of t)e[i]=n[i]}}(t,n),Ua(t,n,"allowIn"),Ua(t,n,"allowContentOf"),Ua(t,n,"allowWhere"),Ua(t,n,"allowAttributes"),Ua(t,n,"allowAttributesOf"),Ua(t,n,"inheritTypesFrom"),function(t,e){for(const n of t){const t=n.inheritAllFrom;t&&(e.allowContentOf.push(t),e.allowWhere.push(t),e.allowAttributesOf.push(t),e.inheritTypesFrom.push(t))}}(t,n),n}function La(t,e){for(const n of t[e].allowContentOf)if(t[n]){Ha(t,n).forEach(t=>{t.allowIn.push(e)})}delete t[e].allowContentOf}function ja(t,e){for(const n of t[e].allowWhere){const i=t[n];if(i){const n=i.allowIn;t[e].allowIn.push(...n)}}delete t[e].allowWhere}function Va(t,e){for(const n of t[e].allowAttributesOf){const i=t[n];if(i){const n=i.allowAttributes;t[e].allowAttributes.push(...n)}}delete t[e].allowAttributesOf}function za(t,e){const n=t[e];for(const e of n.inheritTypesFrom){const i=t[e];if(i){const t=Object.keys(i).filter(t=>t.startsWith("is"));for(const e of t)e in n||(n[e]=i[e])}}delete n.inheritTypesFrom}function Ba(t,e){const n=t[e],i=n.allowIn.filter(e=>t[e]);n.allowIn=Array.from(new Set(i))}function Fa(t,e){const n=t[e];n.allowAttributes=Array.from(new Set(n.allowAttributes))}function Ua(t,e,n){for(const i of t)"string"==typeof i[n]?e[n].push(i[n]):Array.isArray(i[n])&&e[n].push(...i[n])}function Ha(t,e){const n=t[e];return function(t){return Object.keys(t).map(e=>t[e])}(t).filter(t=>t.allowIn.includes(n.name))}function qa(t){return"string"==typeof t?{name:t,*getAttributeKeys(){},getAttribute(){}}:{name:t.is("element")?t.name:"$text",*getAttributeKeys(){yield*t.getAttributeKeys()},getAttribute:e=>t.getAttribute(e)}}class Wa{constructor(t={}){this._splitParts=new Map,this._modelCursor=null,this.conversionApi=Object.assign({},t),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this)}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(t,e){let n;for(const i of new Ra(t)){const t={};for(const e of i.getAttributeKeys())t[e]=i.getAttribute(e);const o=e.createElement(i.name,t);n&&e.append(o,n),n=$s._createAt(o,0)}return n}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=Ia.createFrom(t),this.conversionApi.store={};const{modelRange:i}=this._convertItem(t,this._modelCursor),o=e.createDocumentFragment();if(i){this._removeEmptyElements();for(const t of Array.from(this._modelCursor.parent.getChildren()))e.append(t,o);o.markers=function(t,e){const n=new Set,i=new Map,o=Gs._createIn(t).getItems();for(const t of o)"$marker"==t.name&&n.add(t);for(const t of n){const n=t.getAttribute("data-name"),o=e.createPositionBefore(t);i.has(n)?i.get(n).end=o.clone():i.set(n,new Gs(o.clone())),e.remove(t)}return i}(o,e)}return this._modelCursor=null,this._splitParts.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,o}_convertItem(t,e){const n=Object.assign({viewItem:t,modelCursor:e,modelRange:null});if(t.is("element")?this.fire("element:"+t.name,n,this.conversionApi):t.is("text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof Gs))throw new Gn.b("view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){const n=new Gs(e);let i=e;for(const e of Array.from(t.getChildren())){const t=this._convertItem(e,i);t.modelRange instanceof Gs&&(n.end=t.modelRange.end,i=t.modelCursor)}return{modelRange:n,modelCursor:i}}_splitToAllowedParent(t,e){const n=this.conversionApi.schema.findAllowedParent(e,t);if(!n)return null;if(n===e.parent)return{position:e};if(this._modelCursor.parent.getAncestors().includes(n))return null;const i=this.conversionApi.writer.split(e,n),o=[];for(const t of i.range.getWalker())if("elementEnd"==t.type)o.push(t.item);else{const e=o.pop(),n=t.item;this._registerSplitPair(e,n)}return{position:i.position,cursorParent:i.range.end.parent}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);const n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t]}_removeEmptyElements(){let t=!1;for(const e of this._splitParts.keys())e.isEmpty&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}ci(Wa,ei);class Ya{constructor(t,e){this.model=t,this.processor=e,this.mapper=new Qs,this.downcastDispatcher=new Zs({mapper:this.mapper}),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const i=n.writer,o=n.mapper.toViewPosition(e.range.start),r=i.createText(e.item.data);i.insert(o,r)},{priority:"lowest"}),this.upcastDispatcher=new Wa({schema:t.schema}),this.upcastDispatcher.on("text",(t,e,n)=>{if(n.schema.checkChild(e.modelCursor,"$text")&&n.consumable.consume(e.viewItem)){const t=n.writer.createText(e.viewItem.data);n.writer.insert(t,e.modelCursor),e.modelRange=Gs._createFromPositionAndShift(e.modelCursor,t.offsetSize),e.modelCursor=e.modelRange.end}},{priority:"lowest"}),this.upcastDispatcher.on("element",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:i}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=i}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:i}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=i}},{priority:"lowest"}),this.decorate("init"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"})}get(t){const{rootName:e="main",trim:n="empty"}=t||{};if(!this._checkIfRootsExists([e]))throw new Gn.b("datacontroller-get-non-existent-root: Attempting to get data from a non-existing root.",this);const i=this.model.document.getRoot(e);return"empty"!==n||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i):""}stringify(t){const e=this.toView(t);return this.processor.toData(e)}toView(t){this.mapper.clearBindings();const e=Gs._createIn(t),n=new Ao,i=new To(new ro);if(this.mapper.bindElements(t,n),this.downcastDispatcher.convertInsert(e,i),!t.is("documentFragment")){const e=function(t){const e=[],n=t.root.document;if(!n)return[];const i=Gs._createIn(t);for(const t of n.model.markers){const n=i.getIntersection(t.getRange());n&&e.push([t.name,n])}return e}(t);for(const[t,n]of e)this.downcastDispatcher.convertMarkerAdd(t,n,i)}return n}init(t){if(this.model.document.version)throw new Gn.b("datacontroller-init-document-not-empty: Trying to set initial data to not empty document.",this);let e={};if("string"==typeof t?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new Gn.b("datacontroller-init-non-existent-root: Attempting to init data on a non-existing root.",this);return this.model.enqueueChange("transparent",t=>{for(const n of Object.keys(e)){const i=this.model.document.getRoot(n);t.insert(this.parse(e[n],i),i,0)}}),Promise.resolve()}set(t){let e={};if("string"==typeof t?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new Gn.b("datacontroller-set-non-existent-root: Attempting to set data on a non-existing root.",this);this.model.enqueueChange("transparent",t=>{t.setSelection(null),t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const n of Object.keys(e)){const i=this.model.document.getRoot(n);t.remove(t.createRangeIn(i)),t.insert(this.parse(e[n],i),i,0)}})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}destroy(){this.stopListening()}_checkIfRootsExists(t){for(const e of t)if(!this.model.document.getRootNames().includes(e))return!1;return!0}}ci(Ya,Fi);class $a{constructor(t,e){this._helpers=new Map,this._downcast=Array.isArray(t)?t:[t],this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Array.isArray(e)?e:[e],this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){const n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new Gn.b("conversion-add-alias-dispatcher-not-registered: Trying to register and alias for a dispatcher that nas not been registered.",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new Gn.b("conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(const{model:e,view:n}of Ga(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(const{model:e,view:n}of Ga(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(const{model:e,view:n}of Ga(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new Gn.b("conversion-group-exists: Trying to register a group name that has already been registered.",this);const i=n?new fa(e):new ka(e);this._helpers.set(t,i)}}function*Ga(t){if(t.model.values)for(const e of t.model.values){yield*Qa({key:t.model.key,value:e},t.view[e],t.upcastAlso?t.upcastAlso[e]:void 0)}else yield*Qa(t.model,t.view,t.upcastAlso)}function*Qa(t,e,n){if(yield{model:t,view:e},n){n=Array.isArray(n)?n:[n];for(const e of n)yield{model:t,view:e}}}class Ka{constructor(t="default"){this.operations=[],this.type=t}get baseVersion(){for(const t of this.operations)if(null!==t.baseVersion)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}class Ja{constructor(t){this.baseVersion=t,this.isDocumentOperation=null!==this.baseVersion,this.batch=null}_validate(){}toJSON(){const t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t){return new this(t.baseVersion)}}class Za{constructor(t){this.markers=new Map,this._children=new Us,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"==t||"model:documentFragment"==t}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(Hs.fromJSON(n)):e.push(Bs.fromJSON(n));return new Za(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new Bs(t)];pi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new Bs(t):t instanceof Fs?new Bs(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}}function Xa(t,e){const n=(e=nc(e)).reduce((t,e)=>t+e.offsetSize,0),i=t.parent;oc(t);const o=t.index;return i._insertChild(o,e),ic(i,o+e.length),ic(i,o),new Gs(t,t.getShiftedBy(n))}function tc(t){if(!t.isFlat)throw new Gn.b("operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.",this);const e=t.start.parent;oc(t.start),oc(t.end);const n=e._removeChildren(t.start.index,t.end.index-t.start.index);return ic(e,t.start.index),n}function ec(t,e){if(!t.isFlat)throw new Gn.b("operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.",this);const n=tc(t);return Xa(e=e._getTransformedByDeletion(t.start,t.end.offset-t.start.offset),n)}function nc(t){const e=[];t instanceof Array||(t=[t]);for(let n=0;n<t.length;n++)if("string"==typeof t[n])e.push(new Bs(t[n]));else if(t[n]instanceof Fs)e.push(new Bs(t[n].data,t[n].getAttributes()));else if(t[n]instanceof Za||t[n]instanceof Us)for(const i of t[n])e.push(i);else t[n]instanceof zs&&e.push(t[n]);for(let t=1;t<e.length;t++){const n=e[t],i=e[t-1];n instanceof Bs&&i instanceof Bs&&rc(n,i)&&(e.splice(t-1,2,new Bs(i.data+n.data,i.getAttributes())),t--)}return e}function ic(t,e){const n=t.getChild(e-1),i=t.getChild(e);if(n&&i&&n.is("text")&&i.is("text")&&rc(n,i)){const o=new Bs(n.data+i.data,n.getAttributes());t._removeChildren(e-1,2),t._insertChild(e-1,o)}}function oc(t){const e=t.textNode,n=t.parent;if(e){const i=t.offset-e.startOffset,o=e.index;n._removeChildren(o,1);const r=new Bs(e.data.substr(0,i),e.getAttributes()),s=new Bs(e.data.substr(i),e.getAttributes());n._insertChild(o,[r,s])}}function rc(t,e){const n=t.getAttributes(),i=e.getAttributes();for(const t of n){if(t[1]!==e.getAttribute(t[0]))return!1;i.next()}return i.next().done}var sc=function(t,e){return Kr(t,e)};class ac extends Ja{constructor(t,e,n,i,o){super(o),this.range=t.clone(),this.key=e,this.oldValue=void 0===n?null:n,this.newValue=void 0===i?null:i}get type(){return null===this.oldValue?"addAttribute":null===this.newValue?"removeAttribute":"changeAttribute"}clone(){return new ac(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new ac(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new Gn.b("attribute-operation-range-not-flat: The range to change is not flat.",this);for(const t of this.range.getItems({shallow:!0})){if(null!==this.oldValue&&!sc(t.getAttribute(this.key),this.oldValue))throw new Gn.b("attribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",this,{item:t,key:this.key,value:this.oldValue});if(null===this.oldValue&&null!==this.newValue&&t.hasAttribute(this.key))throw new Gn.b("attribute-operation-attribute-exists: The attribute with given key already exists.",this,{node:t,key:this.key})}}_execute(){sc(this.oldValue,this.newValue)||function(t,e,n){oc(t.start),oc(t.end);for(const i of t.getItems({shallow:!0})){const t=i.is("textProxy")?i.textNode:i;null!==n?t._setAttribute(e,n):t._removeAttribute(e),ic(t.parent,t.index)}ic(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new ac(Gs.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class cc extends Ja{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new Gn.b("detach-operation-on-document-node: Cannot detach document node.",this)}_execute(){tc(Gs._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class lc extends Ja{constructor(t,e,n,i){super(i),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return"$graveyard"==this.targetPosition.root.rootName?"remove":"$graveyard"==this.sourcePosition.root.rootName?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>t.maxOffset)throw new Gn.b("move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.",this);if(t===e&&n<i&&i<n+this.howMany)throw new Gn.b("move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.",this);if(this.sourcePosition.root==this.targetPosition.root&&"prefix"==li(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())){const t=this.sourcePosition.path.length-1;if(this.targetPosition.path[t]>=n&&this.targetPosition.path[t]<n+this.howMany)throw new Gn.b("move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.",this)}}_execute(){ec(Gs._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){const n=$s.fromJSON(t.sourcePosition,e),i=$s.fromJSON(t.targetPosition,e);return new this(n,t.howMany,i,t.baseVersion)}}class dc extends Ja{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new Us(nc(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const t=new Us([...this.nodes].map(t=>t._clone(!0))),e=new dc(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){const t=this.position.root.document.graveyard,e=new $s(t,[0]);return new lc(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new Gn.b("insert-operation-position-invalid: Insertion position is invalid.",this)}_execute(){const t=this.nodes;this.nodes=new Us([...t].map(t=>t._clone(!0))),Xa(this.position,t)}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){const n=[];for(const e of t.nodes)e.name?n.push(Hs.fromJSON(e)):n.push(Bs.fromJSON(e));const i=new dc($s.fromJSON(t.position,e),n,t.baseVersion);return i.shouldReceiveAttributes=t.shouldReceiveAttributes,i}}class hc extends Ja{constructor(t,e,n,i,o,r){super(r),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=o,this._markers=i}get type(){return"marker"}clone(){return new hc(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new hc(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const t=this.newRange?"_set":"_remove";this._markers[t](this.name,this.newRange,!0,this.affectsData)}toJSON(){const t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new hc(t.name,t.oldRange?Gs.fromJSON(t.oldRange,e):null,t.newRange?Gs.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}class uc extends Ja{constructor(t,e,n,i){super(i),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new uc(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new uc(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof Hs))throw new Gn.b("rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.",this);if(t.name!==this.oldName)throw new Gn.b("rename-operation-wrong-name: Element to change has different name than operation's old name.",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new uc($s.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class fc extends Ja{constructor(t,e,n,i,o){super(o),this.root=t,this.key=e,this.oldValue=n,this.newValue=i}get type(){return null===this.oldValue?"addRootAttribute":null===this.newValue?"removeRootAttribute":"changeRootAttribute"}clone(){return new fc(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new fc(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new Gn.b("rootattribute-operation-not-a-root: The element to change is not a root element.",this,{root:this.root,key:this.key});if(null!==this.oldValue&&this.root.getAttribute(this.key)!==this.oldValue)throw new Gn.b("rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",this,{root:this.root,key:this.key});if(null===this.oldValue&&null!==this.newValue&&this.root.hasAttribute(this.key))throw new Gn.b("rootattribute-operation-attribute-exists: The attribute with given key already exists.",this,{root:this.root,key:this.key})}_execute(){null!==this.newValue?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new Gn.b("rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.",this,{rootName:t.root});return new fc(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class mc extends Ja{constructor(t,e,n,i,o){super(o),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new $s(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new Gs(this.sourcePosition,t)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new $s(this.sourcePosition.root,e)._getTransformedByMergeOperation(this),i=new gc(t,this.howMany,this.graveyardPosition,this.baseVersion+1);return i.insertionPosition=n,i}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new Gn.b("merge-operation-source-position-invalid: Merge source position is invalid.",this);if(!e.parent)throw new Gn.b("merge-operation-target-position-invalid: Merge target position is invalid.",this);if(this.howMany!=t.maxOffset)throw new Gn.b("merge-operation-how-many-invalid: Merge operation specifies wrong number of nodes to move.",this)}_execute(){const t=this.sourcePosition.parent;ec(Gs._createIn(t),this.targetPosition),ec(Gs._createOn(t),this.graveyardPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){const n=$s.fromJSON(t.sourcePosition,e),i=$s.fromJSON(t.targetPosition,e),o=$s.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,i,o,t.baseVersion)}}class gc extends Ja{constructor(t,e,n,i){super(i),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=gc.getInsertionPosition(t),this.insertionPosition.stickiness="toNone",this.graveyardPosition=n?n.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const t=this.insertionPosition.path.slice();return t.push(0),new $s(this.insertionPosition.root,t)}get movedRange(){const t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new Gs(this.splitPosition,t)}clone(){const t=new this.constructor(this.splitPosition,this.howMany,this.graveyardPosition,this.baseVersion);return t.insertionPosition=this.insertionPosition,t}getReversed(){const t=this.splitPosition.root.document.graveyard,e=new $s(t,[0]);return new mc(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){const t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new Gn.b("split-operation-position-invalid: Split position is invalid.",this);if(!t.parent)throw new Gn.b("split-operation-split-in-root: Cannot split root element.",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new Gn.b("split-operation-how-many-invalid: Split operation specifies wrong number of nodes to move.",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new Gn.b("split-operation-graveyard-position-invalid: Graveyard position invalid.",this)}_execute(){const t=this.splitPosition.parent;if(this.graveyardPosition)ec(Gs._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const e=t._clone();Xa(this.insertionPosition,e)}ec(new Gs($s._createAt(t,this.splitPosition.offset),$s._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){const t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){const e=t.path.slice(0,-1);return e[e.length-1]++,new $s(t.root,e)}static fromJSON(t,e){const n=$s.fromJSON(t.splitPosition,e),i=$s.fromJSON(t.insertionPosition,e),o=t.graveyardPosition?$s.fromJSON(t.graveyardPosition,e):null,r=new this(n,t.howMany,o,t.baseVersion);return r.insertionPosition=i,r}}class pc extends Hs{constructor(t,e,n="main"){super(e),this._doc=t,this.rootName=n}get document(){return this._doc}is(t,e){const n=t.replace("model:","");return e?"rootElement"==n&&e==this.name||super.is(t,e):"rootElement"==n||super.is(t)}toJSON(){return this.rootName}}class bc{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new Bs(t,e)}createElement(t,e){return new Hs(t,e)}createDocumentFragment(){return new Za}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof Bs&&""==t.data)return;const i=$s._createAt(e,n);if(t.parent){if(yc(t.root,i.root))return void this.move(Gs._createOn(t),i);if(t.root.document)throw new Gn.b("model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree. It is forbidden to move a node that was already in a document outside of it.",this);this.remove(t)}const o=i.root.document?i.root.document.version:null,r=new dc(i,t,o);if(t instanceof Bs&&(r.shouldReceiveAttributes=!0),this.batch.addOperation(r),this.model.applyOperation(r),t instanceof Za)for(const[e,n]of t.markers){const t=$s._createAt(n.root,0),o={range:new Gs(n.start._getCombined(t,i),n.end._getCombined(t,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(e)?this.updateMarker(e,o):this.addMarker(e,o)}}insertText(t,e,n,i){e instanceof Za||e instanceof Hs||e instanceof $s?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,i)}insertElement(t,e,n,i){e instanceof Za||e instanceof Hs||e instanceof $s?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,i)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof Za||e instanceof Hs?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof Za||e instanceof Hs?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof Gs){const i=n.getMinimalFlatRanges();for(const n of i)wc(this,t,e,n)}else kc(this,t,e,n)}setAttributes(t,e){for(const[n,i]of Vs(t))this.setAttribute(n,i,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof Gs){const n=e.getMinimalFlatRanges();for(const e of n)wc(this,t,null,e)}else kc(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=t=>{for(const e of t.getAttributeKeys())this.removeAttribute(e,t)};if(t instanceof Gs)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof Gs))throw new Gn.b("writer-move-invalid-range: Invalid range to move.",this);if(!t.isFlat)throw new Gn.b("writer-move-range-not-flat: Range to move is not flat.",this);const i=$s._createAt(e,n);if(i.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!yc(t.root,i.root))throw new Gn.b("writer-move-different-document: Range is going to be moved between different documents.",this);const o=t.root.document?t.root.document.version:null,r=new lc(t.start,t.end.offset-t.start.offset,i,o);this.batch.addOperation(r),this.model.applyOperation(r)}remove(t){this._assertWriterUsedCorrectly();const e=(t instanceof Gs?t:Gs._createOn(t)).getMinimalFlatRanges().reverse();for(const t of e)this._addOperationForAffectedMarkers("move",t),vc(t.start,t.end.offset-t.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();const e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof Hs))throw new Gn.b("writer-merge-no-element-before: Node before merge position must be an element.",this);if(!(n instanceof Hs))throw new Gn.b("writer-merge-no-element-after: Node after merge position must be an element.",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(t,e,n){return this.model.createSelection(t,e,n)}_mergeDetached(t){const e=t.nodeBefore,n=t.nodeAfter;this.move(Gs._createIn(n),$s._createAt(e,"end")),this.remove(n)}_merge(t){const e=$s._createAt(t.nodeBefore,"end"),n=$s._createAt(t.nodeAfter,0),i=t.root.document.graveyard,o=new $s(i,[0]),r=t.root.document.version,s=new mc(n,t.nodeAfter.maxOffset,e,o,r);this.batch.addOperation(s),this.model.applyOperation(s)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof Hs))throw new Gn.b("writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.",this);const n=t.root.document?t.root.document.version:null,i=new uc($s._createBefore(t),t.name,e,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(t,e){this._assertWriterUsedCorrectly();let n,i,o=t.parent;if(!o.parent)throw new Gn.b("writer-split-element-no-parent: Element with no parent can not be split.",this);if(e||(e=o.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new Gn.b("writer-split-invalid-limit-element: Limit element is not a position ancestor.",this);do{const e=o.root.document?o.root.document.version:null,r=o.maxOffset-t.offset,s=new gc(t,r,null,e);this.batch.addOperation(s),this.model.applyOperation(s),n||i||(n=o,i=t.parent.nextSibling),o=(t=this.createPositionAfter(t.parent)).parent}while(o!==e);return{position:t,range:new Gs($s._createAt(n,"end"),$s._createAt(i,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new Gn.b("writer-wrap-range-not-flat: Range to wrap is not flat.",this);const n=e instanceof Hs?e:new Hs(e);if(n.childCount>0)throw new Gn.b("writer-wrap-element-not-empty: Element to wrap with is not empty.",this);if(null!==n.parent)throw new Gn.b("writer-wrap-element-attached: Element to wrap with is already attached to tree model.",this);this.insert(n,t.start);const i=new Gs(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(i,$s._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),null===t.parent)throw new Gn.b("writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.",this);this.move(Gs._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||"boolean"!=typeof e.usingOperation)throw new Gn.b("writer-addMarker-no-usingOperation: The options.usingOperation parameter is required when adding a new marker.",this);const n=e.usingOperation,i=e.range,o=void 0!==e.affectsData&&e.affectsData;if(this.model.markers.has(t))throw new Gn.b("writer-addMarker-marker-exists: Marker with provided name already exists.",this);if(!i)throw new Gn.b("writer-addMarker-no-range: Range parameter is required when adding a new marker.",this);return n?(_c(this,t,null,i,o),this.model.markers.get(t)):this.model.markers._set(t,i,n,o)}updateMarker(t,e){this._assertWriterUsedCorrectly();const n="string"==typeof t?t:t.name,i=this.model.markers.get(n);if(!i)throw new Gn.b("writer-updateMarker-marker-not-exists: Marker with provided name does not exists.",this);if(!e)return void this.model.markers._refresh(i);const o="boolean"==typeof e.usingOperation,r="boolean"==typeof e.affectsData,s=r?e.affectsData:i.affectsData;if(!o&&!e.range&&!r)throw new Gn.b("writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.",this);const a=i.getRange(),c=e.range?e.range:a;o&&e.usingOperation!==i.managedUsingOperations?e.usingOperation?_c(this,n,null,c,s):(_c(this,n,a,null,s),this.model.markers._set(n,c,void 0,s)):i.managedUsingOperations?_c(this,n,a,c,s):this.model.markers._set(n,c,void 0,s)}removeMarker(t){this._assertWriterUsedCorrectly();const e="string"==typeof t?t:t.name;if(!this.model.markers.has(e))throw new Gn.b("writer-removeMarker-no-marker: Trying to remove marker which does not exist.",this);const n=this.model.markers.get(e);n.managedUsingOperations?_c(this,e,n.getRange(),null,n.affectsData):this.model.markers._remove(e)}setSelection(t,e,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._setSelectionAttribute(t,e);else for(const[e,n]of Vs(t))this._setSelectionAttribute(e,n)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=sa._getStoreAttributeKey(t);this.setAttribute(i,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=sa._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new Gn.b("writer-incorrect-use: Trying to use a writer outside the change() block.",this)}_addOperationForAffectedMarkers(t,e){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let o=!1;if("move"==t)o=e.containsPosition(i.start)||e.start.isEqual(i.start)||e.containsPosition(i.end)||e.end.isEqual(i.end);else{const t=e.nodeBefore,n=e.nodeAfter,r=i.start.parent==t&&i.start.isAtEnd,s=i.end.parent==n&&0==i.end.offset,a=i.end.nodeAfter==n,c=i.start.nodeAfter==n;o=r||s||a||c}o&&this.updateMarker(n.name,{range:i})}}}function wc(t,e,n,i){const o=t.model,r=o.document;let s,a,c,l=i.start;for(const t of i.getWalker({shallow:!0}))c=t.item.getAttribute(e),s&&a!=c&&(a!=n&&d(),l=s),s=t.nextPosition,a=c;function d(){const i=new Gs(l,s),c=i.root.document?r.version:null,d=new ac(i,e,a,n,c);t.batch.addOperation(d),o.applyOperation(d)}s instanceof $s&&s!=l&&a!=n&&d()}function kc(t,e,n,i){const o=t.model,r=o.document,s=i.getAttribute(e);let a,c;if(s!=n){if(i.root===i){const t=i.document?r.version:null;c=new fc(i,e,s,n,t)}else{const o=(a=new Gs($s._createBefore(i),t.createPositionAfter(i))).root.document?r.version:null;c=new ac(a,e,s,n,o)}t.batch.addOperation(c),o.applyOperation(c)}}function _c(t,e,n,i,o){const r=t.model,s=r.document,a=new hc(e,n,i,r.markers,o,s.version);t.batch.addOperation(a),r.applyOperation(a)}function vc(t,e,n,i){let o;if(t.root.document){const n=i.document,r=new $s(n.graveyard,[0]);o=new lc(t,e,r,n.version)}else o=new cc(t,e);n.addOperation(o),i.applyOperation(o)}function yc(t,e){return t===e||t instanceof pc&&e instanceof pc}class xc{constructor(t){this._markerCollection=t,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null}get isEmpty(){return 0==this._changesInElement.size&&0==this._changedMarkers.size}refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize);const e=Gs._createOn(t);for(const t of this._markerCollection.getMarkersIntersectingRange(e)){const e=t.getRange();this.bufferMarkerChange(t.name,e,e,t.affectsData)}this._cachedChanges=null}bufferOperation(t){switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const e of t.range.getItems({shallow:!0}))this._isInInsertedElement(e.parent)||this._markAttribute(e);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const e=this._isInInsertedElement(t.sourcePosition.parent),n=this._isInInsertedElement(t.targetPosition.parent);e||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),n||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const e=Gs._createFromPositionAndShift(t.position,1);for(const t of this._markerCollection.getMarkersIntersectingRange(e)){const e=t.getRange();this.bufferMarkerChange(t.name,e,e,t.affectsData)}break}case"split":{const e=t.splitPosition.parent;this._isInInsertedElement(e)||this._markRemove(e,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const e=t.sourcePosition.parent;this._isInInsertedElement(e.parent)||this._markRemove(e.parent,e.startOffset,1);const n=t.graveyardPosition.parent;this._markInsert(n,t.graveyardPosition.offset,1);const i=t.targetPosition.parent;this._isInInsertedElement(i)||this._markInsert(i,t.targetPosition.offset,e.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n,i){const o=this._changedMarkers.get(t);o?(o.newRange=n,o.affectsData=i,null==o.oldRange&&null==o.newRange&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{oldRange:e,newRange:n,affectsData:i})}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.oldRange&&t.push({name:e,range:n.oldRange});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.newRange&&t.push({name:e,range:n.newRange});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(t=>({name:t[0],data:{oldRange:t[1].oldRange,newRange:t[1].newRange}}))}hasDataChanges(){for(const[,t]of this._changedMarkers)if(t.affectsData)return!0;return this._changesInElement.size>0}getChanges(t={includeChangesInGraveyard:!1}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();const e=[];for(const t of this._changesInElement.keys()){const n=this._changesInElement.get(t).sort((t,e)=>t.offset===e.offset?t.type!=e.type?"remove"==t.type?-1:1:0:t.offset<e.offset?-1:1),i=this._elementSnapshots.get(t),o=Ac(t.getChildren()),r=Tc(i.length,n);let s=0,a=0;for(const n of r)if("i"===n)e.push(this._getInsertDiff(t,s,o[s].name)),s++;else if("r"===n)e.push(this._getRemoveDiff(t,s,i[a].name)),a++;else if("a"===n){const n=o[s].attributes,r=i[a].attributes;let c;if("$text"==o[s].name)c=new Gs($s._createAt(t,s),$s._createAt(t,s+1));else{const e=t.offsetToIndex(s);c=new Gs($s._createAt(t,s),$s._createAt(t.getChild(e),0))}e.push(...this._getAttributesDiff(c,r,n)),s++,a++}else s++,a++}e.sort((t,e)=>t.position.root!=e.position.root?t.position.root.rootName<e.position.root.rootName?-1:1:t.position.isEqual(e.position)?t.changeCount-e.changeCount:t.position.isBefore(e.position)?-1:1);for(let t=1;t<e.length;t++){const n=e[t-1],i=e[t],o="remove"==n.type&&"remove"==i.type&&"$text"==n.name&&"$text"==i.name&&n.position.isEqual(i.position),r="insert"==n.type&&"insert"==i.type&&"$text"==n.name&&"$text"==i.name&&n.position.parent==i.position.parent&&n.position.offset+n.length==i.position.offset,s="attribute"==n.type&&"attribute"==i.type&&n.position.parent==i.position.parent&&n.range.isFlat&&i.range.isFlat&&n.position.offset+n.length==i.position.offset&&n.attributeKey==i.attributeKey&&n.attributeOldValue==i.attributeOldValue&&n.attributeNewValue==i.attributeNewValue;(o||r||s)&&(e[t-1].length++,s&&(e[t-1].range.end=e[t-1].range.end.getShiftedBy(1)),e.splice(t,1),t--)}for(const t of e)delete t.changeCount,"attribute"==t.type&&(delete t.position,delete t.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e.slice(),this._cachedChanges=e.slice().filter(Cc),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard:this._cachedChanges}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._cachedChanges=null}_markInsert(t,e,n){const i={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i)}_markRemove(t,e,n){const i={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let t=0;t<n.length;t++)n[t].howMany<1&&(n.splice(t,1),t--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,Ac(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const i=t.offset+t.howMany,o=n.offset+n.howMany;if("insert"==t.type&&("insert"==n.type&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<o&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),"remove"==n.type&&t.offset<n.offset&&(n.offset+=t.howMany),"attribute"==n.type))if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<o){const o=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:i,howMany:o-n.howMany,count:this._changeCount++})}if("remove"==t.type){if("insert"==n.type)if(i<=n.offset)n.offset-=t.howMany;else if(i<=o)if(t.offset<n.offset){const e=i-n.offset;n.offset=t.offset,n.howMany-=e,t.nodesToHandle-=e}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<o){const e=o-t.offset;n.howMany-=e,t.nodesToHandle-=e}if("remove"==n.type&&(i<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),"attribute"==n.type)if(i<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const e=i-n.offset;n.offset=t.offset,n.howMany-=e}else if(t.offset<o)if(i<=o){const i=n.howMany;n.howMany=t.offset-n.offset;const o=i-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:o,count:this._changeCount++})}else n.howMany-=o-t.offset}if("attribute"==t.type){if("insert"==n.type)if(t.offset<n.offset&&i>n.offset){if(i>o){const t={type:"attribute",offset:o,howMany:i-o,count:this._changeCount++};this._handleChange(t,e),e.push(t)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<o&&(i>o?(t.nodesToHandle=i-o,t.offset=o):t.nodesToHandle=0);if("remove"==n.type&&t.offset<n.offset&&i>n.offset){const o={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(o,e),e.push(o),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}"attribute"==n.type&&(t.offset>=n.offset&&i<=o?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&i>=o&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:$s._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:$s._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){const i=[];n=new Map(n);for(const[o,r]of e){const e=n.has(o)?n.get(o):null;e!==r&&i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:o,attributeOldValue:r,attributeNewValue:e,changeCount:this._changeCount++}),n.delete(o)}for(const[e,o]of n)i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:e,attributeOldValue:null,attributeNewValue:o,changeCount:this._changeCount++});return i}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),i=t.startOffset;if(n)for(const t of n)if("insert"==t.type&&i>=t.offset&&i<t.offset+t.howMany)return!0;return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const i=new Gs($s._createAt(t,e),$s._createAt(t,e+n));for(const t of i.getItems({shallow:!0}))t.is("element")&&(this._elementSnapshots.delete(t),this._changesInElement.delete(t),this._removeAllNestedChanges(t,0,t.maxOffset))}}function Ac(t){const e=[];for(const n of t)if(n.is("text"))for(let t=0;t<n.data.length;t++)e.push({name:"$text",attributes:new Map(n.getAttributes())});else e.push({name:n.name,attributes:new Map(n.getAttributes())});return e}function Tc(t,e){const n=[];let i=0,o=0;for(const t of e){if(t.offset>i){for(let e=0;e<t.offset-i;e++)n.push("e");o+=t.offset-i}if("insert"==t.type){for(let e=0;e<t.howMany;e++)n.push("i");i=t.offset+t.howMany}else if("remove"==t.type){for(let e=0;e<t.howMany;e++)n.push("r");i=t.offset,o+=t.howMany}else n.push(..."a".repeat(t.howMany).split("")),i=t.offset+t.howMany,o+=t.howMany}if(o<t)for(let e=0;e<t-o-i;e++)n.push("e");return n}function Cc(t){const e=t.position&&"$graveyard"==t.position.root.rootName,n=t.range&&"$graveyard"==t.range.root.rootName;return!e&&!n}class Pc{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set}addOperation(t){this._operations.includes(t)||this._operations.push(t)}getOperations(t=0,e=Number.POSITIVE_INFINITY){return t<0?[]:this._operations.slice(t,e)}getOperation(t){return this._operations[t]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}}function Sc(t,e){return function(t){return!!t&&1==t.length&&/[\ud800-\udbff]/.test(t)}(t.charAt(e-1))&&function(t){return!!t&&1==t.length&&/[\udc00-\udfff]/.test(t)}(t.charAt(e))}function Mc(t,e){return function(t){return!!t&&1==t.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t)}(t.charAt(e))}const Ec="$graveyard";class Ic{constructor(t){this.model=t,this.version=0,this.history=new Pc(this),this.selection=new sa(this),this.roots=new oo({idProperty:"rootName"}),this.differ=new xc(t.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Ec),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];if(n.isDocumentOperation&&n.baseVersion!==this.version)throw new Gn.b("model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.",this,{operation:n})},{priority:"highest"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&this.differ.bufferOperation(n)},{priority:"high"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&(this.version++,this.history.addOperation(n))},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(t,e,n,i)=>{this.differ.bufferMarkerChange(e.name,n,i,e.affectsData),null===n&&e.on("change",(t,n)=>{this.differ.bufferMarkerChange(e.name,n,e.getRange(),e.affectsData)})})}get graveyard(){return this.getRoot(Ec)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new Gn.b("model-document-createRoot-name-exists: Root with specified name already exists.",this,{name:e});const n=new pc(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>t!=Ec)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=hi(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model,n=e.schema,i=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(i)||e.createRange(i)}_validateSelectionRange(t){return Nc(t.start)&&Nc(t.end)}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(this.selection.refresh(),e=n(t))break}while(e)}}function Nc(t){const e=t.textNode;if(e){const n=e.data,i=t.offset-e.startOffset;return!Sc(n,i)&&!Mc(n,i)}return!0}ci(Ic,ei);class Oc{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){return this._markers.has(t)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,i=!1){const o=t instanceof Rc?t.name:t,r=this._markers.get(o);if(r){const t=r.getRange();let s=!1;return t.isEqual(e)||(r._attachLiveRange(oa.fromRange(e)),s=!0),n!=r.managedUsingOperations&&(r._managedUsingOperations=n,s=!0),"boolean"==typeof i&&i!=r.affectsData&&(r._affectsData=i,s=!0),s&&this.fire("update:"+o,r,t,e),r}const s=oa.fromRange(e),a=new Rc(o,s,n,i);return this._markers.set(o,a),this.fire("update:"+o,a,null,e),a}_remove(t){const e=t instanceof Rc?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire("update:"+e,n,n.getRange(),null),this._destroyMarker(n),!0)}_refresh(t){const e=t instanceof Rc?t.name:t,n=this._markers.get(e);if(!n)throw new Gn.b("markercollection-refresh-marker-not-exists: Marker with provided name does not exists.",this);const i=n.getRange();this.fire("update:"+e,n,i,i,n.managedUsingOperations,n.affectsData)}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)null!==e.getRange().getIntersection(t)&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}ci(Oc,ei);class Rc{constructor(t,e,n,i){this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._affectsData}getStart(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._liveRange.toRange()}is(t){return"marker"==t||"model:marker"==t}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}ci(Rc,ei);class Dc extends $s{constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new Gn.b("model-liveposition-root-not-rootelement: LivePosition's root has to be an instance of RootElement.",t);(function(){this.listenTo(this.root.document.model,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&function(t){const e=this.getTransformedByOperation(t);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}.call(this,n)},{priority:"low"})}).call(this)}detach(){this.stopListening()}is(t){return"livePosition"==t||"model:livePosition"==t||super.is(t)}toPosition(){return new $s(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}ci(Dc,ei);class Lc{constructor(t,e,n){this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(t,e){t=Array.from(t);for(let n=0;n<t.length;n++){const i=t[n];this._handleNode(i,{isFirst:0===n&&e.isFirst,isLast:n===t.length-1&&e.isLast})}this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}getSelectionRange(){return this.nodeToSelect?Gs._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new Gs(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t,e){if(this.schema.isObject(t))return void this._handleObject(t,e);this._checkAndSplitToAllowedPosition(t,e)?(this._insert(t),this._mergeSiblingsOf(t,e)):this._handleDisallowedNode(t,e)}_handleObject(t,e){this._checkAndSplitToAllowedPosition(t)?this._insert(t):this._tryAutoparagraphing(t,e)}_handleDisallowedNode(t,e){t.is("element")?this.handleNodes(t.getChildren(),e):this._tryAutoparagraphing(t,e)}_insert(t){if(!this.schema.checkChild(this.position,t))throw new Gn.b("insertcontent-wrong-position: Given node cannot be inserted on the given position.",this,{node:t,position:this.position});const e=Dc.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this.writer.insert(t,this.position),this.position=e.toPosition(),e.detach(),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=t:this.nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=Dc.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Dc.fromPosition(t,"toNext"))}_mergeSiblingsOf(t,e){if(!(t instanceof Hs))return;const n=this._canMergeLeft(t,e),i=this._canMergeRight(t,e),o=Dc._createBefore(t);o.stickiness="toNext";const r=Dc._createAfter(t);if(r.stickiness="toNext",n){const t=Dc.fromPosition(this.position);t.stickiness="toNext",this._affectedStart.isEqual(o)&&(this._affectedStart.detach(),this._affectedStart=Dc._createAt(o.nodeBefore,"end","toPrevious")),this.writer.merge(o),o.isEqual(this._affectedEnd)&&e.isLast&&(this._affectedEnd.detach(),this._affectedEnd=Dc._createAt(o.nodeBefore,"end","toNext")),this.position=t.toPosition(),t.detach()}if(i){if(!this.position.isEqual(r))throw new Gn.b("insertcontent-invalid-insertion-position",this);this.position=$s._createAt(r.nodeBefore,"end");const t=Dc.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(r)&&(this._affectedEnd.detach(),this._affectedEnd=Dc._createAt(r.nodeBefore,"end","toNext")),this.writer.merge(r),r.getShiftedBy(-1).isEqual(this._affectedStart)&&e.isFirst&&(this._affectedStart.detach(),this._affectedStart=Dc._createAt(r.nodeBefore,0,"toPrevious")),this.position=t.toPosition(),t.detach()}(n||i)&&this._filterAttributesOf.push(this.position.parent),o.detach(),r.detach()}_canMergeLeft(t,e){const n=t.previousSibling;return e.isFirst&&n instanceof Hs&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(n,t)}_canMergeRight(t,e){const n=t.nextSibling;return e.isLast&&n instanceof Hs&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(t,n)}_tryAutoparagraphing(t,e){const n=this.writer.createElement("paragraph");this._getAllowedIn(n,this.position.parent)&&this.schema.checkChild(n,t)&&(n._appendChild(t),this._handleNode(n,e))}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(t,this.position.parent);if(!e)return!1;for(;e!=this.position.parent;){if(this.schema.isLimit(this.position.parent))return!1;if(this.position.isAtStart){const t=this.position.parent;this.position=this.writer.createPositionBefore(t),t.isEmpty&&t.parent===e&&this.writer.remove(t)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const t=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=t,this.canMergeWith.add(this.position.nodeAfter)}}return!0}_getAllowedIn(t,e){return this.schema.checkChild(e,t)?e:e.parent?this._getAllowedIn(t,e.parent):null}}function jc(t,e,n={}){if(e.isCollapsed)return;const i=e.getFirstRange();if("$graveyard"==i.root.rootName)return;const o=t.schema;t.change(t=>{if(!n.doNotResetEntireContent&&function(t,e){const n=t.getLimitElement(e);if(!e.containsEntireContent(n))return!1;const i=e.getFirstRange();if(i.start.parent==i.end.parent)return!1;return t.checkChild(n,"paragraph")}(o,e))return void function(t,e){const n=t.model.schema.getLimitElement(e);t.remove(t.createRangeIn(n)),Vc(t,t.createPositionAt(n,0),e)}(t,e);const r=i.start,s=Dc.fromPosition(i.end,"toNext");if(i.start.isTouching(i.end)||t.remove(i),n.leaveUnmerged||(!function t(e,n,i){const o=n.parent;const r=i.parent;if(o==r)return;if(e.model.schema.isLimit(o)||e.model.schema.isLimit(r))return;if(!function(t,e,n){const i=new Gs(t,e);for(const t of i.getWalker())if(n.isLimit(t.item))return!1;return!0}(n,i,e.model.schema))return;n=e.createPositionAfter(o);i=e.createPositionBefore(r);i.isEqual(n)||e.insert(r,n);e.merge(n);for(;i.parent.isEmpty;){const t=i.parent;i=e.createPositionBefore(t),e.remove(t)}t(e,n,i)}(t,r,s),o.removeDisallowedAttributes(r.parent.getChildren(),t)),zc(t,e,r),function(t,e){const n=t.checkChild(e,"$text"),i=t.checkChild(e,"paragraph");return!n&&i}(o,r)){const i=o.getNearestSelectionRange(r);n.doNotAutoparagraph&&i?zc(t,e,i):Vc(t,r,e)}s.detach()})}function Vc(t,e,n){const i=t.createElement("paragraph");t.insert(i,e),zc(t,n,t.createPositionAt(i,0))}function zc(t,e,n){e instanceof sa?t.setSelection(n):e.setTo(n)}const Bc=' ,.?!:;"-()';function Fc(t,e,n={}){const i=t.schema,o="backward"!=n.direction,r=n.unit?n.unit:"character",s=e.focus,a=new qs({boundaries:function(t,e){const n=t.root,i=$s._createAt(n,e?"end":0);return e?new Gs(t,i):new Gs(i,t)}(s,o),singleCharacters:!0,direction:o?"forward":"backward"}),c={walker:a,schema:i,isForward:o,unit:r};let l;for(;l=a.next();){if(l.done)return;const n=Uc(c,l.value);if(n)return void(e instanceof sa?t.change(t=>{t.setSelectionFocus(n)}):e.setFocus(n))}}function Uc(t,e){if("text"==e.type)return"word"===t.unit?function(t,e){let n=t.position.textNode;if(n){let i=t.position.offset-n.startOffset;for(;!Hc(n.data,i,e)&&!qc(n,i,e);){t.next();const o=e?t.position.nodeAfter:t.position.nodeBefore;if(o&&o.is("text")){const i=o.data.charAt(e?0:o.data.length-1);Bc.includes(i)||(t.next(),n=t.position.textNode)}i=t.position.offset-n.startOffset}}return t.position}(t.walker,t.isForward):function(t,e){const n=t.position.textNode;if(n){const i=n.data;let o=t.position.offset-n.startOffset;for(;Sc(i,o)||"character"==e&&Mc(i,o);)t.next(),o=t.position.offset-n.startOffset}return t.position}(t.walker,t.unit,t.isForward);if(e.type==(t.isForward?"elementStart":"elementEnd")){if(t.schema.isObject(e.item))return $s._createAt(e.item,t.isForward?"after":"before");if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}else{if(t.schema.isLimit(e.item))return void t.walker.skip(()=>!0);if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}}function Hc(t,e,n){const i=e+(n?0:-1);return Bc.includes(t.charAt(i))}function qc(t,e,n){return e===(n?t.endOffset:0)}function Wc(t,e){const n=[];Array.from(t.getItems({direction:"backward"})).map(t=>e.createRangeOn(t)).filter(e=>{return(e.start.isAfter(t.start)||e.start.isEqual(t.start))&&(e.end.isBefore(t.end)||e.end.isEqual(t.end))}).forEach(t=>{n.push(t.start.parent),e.remove(t)}),n.forEach(t=>{let n=t;for(;n.parent&&n.isEmpty;){const t=e.createRangeOn(n);n=n.parent,e.remove(t)}})}function Yc(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.selection,i=e.schema,o=[];let r=!1;for(const t of n.getRanges()){const e=$c(t,i);e?(o.push(e),r=!0):o.push(t)}if(r){let e=o;if(o.length>1){const t=o[0].start,n=o[o.length-1].end;e=[new Gs(t,n)]}t.setSelection(e,{backward:n.isBackward})}})(e,t))}function $c(t,e){return t.isCollapsed?function(t,e){const n=t.start,i=e.getNearestSelectionRange(n);if(!i)return null;const o=i.start;if(n.isEqual(o))return null;if(o.nodeAfter&&e.isLimit(o.nodeAfter))return new Gs(o,$s._createAfter(o.nodeAfter));return new Gs(o)}(t,e):function(t,e){const n=t.start,i=t.end,o=e.checkChild(n,"$text"),r=e.checkChild(i,"$text"),s=e.getLimitElement(n),a=e.getLimitElement(i);if(s===a){if(o&&r)return null;if(function(t,e,n){const i=t.nodeAfter&&!n.isLimit(t.nodeAfter)||n.checkChild(t,"$text"),o=e.nodeBefore&&!n.isLimit(e.nodeBefore)||n.checkChild(e,"$text");return i||o}(n,i,e)){const t=n.nodeAfter&&e.isObject(n.nodeAfter),o=t?null:e.getNearestSelectionRange(n,"forward"),r=i.nodeBefore&&e.isObject(i.nodeBefore),s=r?null:e.getNearestSelectionRange(i,"backward"),a=o?o.start:n,c=s?s.start:i;return new Gs(a,c)}}const c=s&&!s.is("rootElement"),l=a&&!a.is("rootElement");if(c||l){const t=n.nodeAfter&&i.nodeBefore&&n.nodeAfter.parent===i.nodeBefore.parent,o=c&&(!t||!Qc(n.nodeAfter,e)),r=l&&(!t||!Qc(i.nodeBefore,e));let d=n,h=i;return o&&(d=$s._createBefore(Gc(s,e))),r&&(h=$s._createAfter(Gc(a,e))),new Gs(d,h)}return null}(t,e)}function Gc(t,e){let n=t,i=n;for(;e.isLimit(i)&&i.parent;)n=i,i=i.parent;return n}function Qc(t,e){return t&&e.isObject(t)}class Kc{constructor(){this.markers=new Oc,this.document=new Ic(this),this.schema=new Oa,this._pendingChanges=[],this._currentWriter=null,["insertContent","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$block",{allowIn:"$root",isBlock:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",isLimit:!0}),this.schema.extend("$text",{allowIn:"$clipboardHolder"}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if("$marker"===e.name)return!0}),Yc(this)}change(t){return 0===this._pendingChanges.length?(this._pendingChanges.push({batch:new Ka,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}enqueueChange(t,e){"string"==typeof t?t=new Ka(t):"function"==typeof t&&(e=t,t=new Ka),this._pendingChanges.push({batch:t,callback:e}),1==this._pendingChanges.length&&this._runPendingChanges()}applyOperation(t){t._execute()}insertContent(t,e,n){return function(t,e,n,i){return t.change(o=>{let r;const s=(r=n?n instanceof ta||n instanceof sa?n:o.createSelection(n,i):t.document.selection).getFirstPosition();r.isCollapsed||t.deleteContent(r,{doNotAutoparagraph:!0});const a=new Lc(t,o,s);let c;c=e.is("documentFragment")?e.getChildren():[e],a.handleNodes(c,{isFirst:!0,isLast:!0});const l=a.getSelectionRange();l&&(r instanceof sa?o.setSelection(l):r.setTo(l));const d=a.getAffectedRange()||t.createRange(s);return a.destroy(),d})}(this,t,e,n)}deleteContent(t,e){jc(this,t,e)}modifySelection(t,e){Fc(this,t,e)}getSelectedContent(t){return function(t,e){return t.change(t=>{const n=t.createDocumentFragment(),i=e.getFirstRange();if(!i||i.isCollapsed)return n;const o=i.start.root,r=i.start.getCommonPath(i.end),s=o.getNodeByPath(r);let a;const c=(a=i.start.parent==i.end.parent?i:t.createRange(t.createPositionAt(s,i.start.path[r.length]),t.createPositionAt(s,i.end.path[r.length]+1))).end.offset-a.start.offset;for(const e of a.getItems({shallow:!0}))e.is("textProxy")?t.appendText(e.data,e.getAttributes(),n):t.append(e._clone(!0),n);if(a!=i){const e=i._getTransformedByMove(a.start,t.createPositionAt(n,0),c)[0],o=t.createRange(t.createPositionAt(n,0),e.start);Wc(t.createRange(e.end,t.createPositionAt(n,"end")),t),Wc(o,t)}return n})}(this,t)}hasContent(t,e){const n=t instanceof Hs?Gs._createIn(t):t;if(n.isCollapsed)return!1;for(const t of this.markers.getMarkersIntersectingRange(n))if(t.affectsData)return!0;const{ignoreWhitespaces:i=!1}=e||{};for(const t of n.getItems())if(t.is("textProxy")){if(!i)return!0;if(-1!==t.data.search(/\S/))return!0}else if(this.schema.isObject(t))return!0;return!1}createPositionFromPath(t,e,n){return new $s(t,e,n)}createPositionAt(t,e){return $s._createAt(t,e)}createPositionAfter(t){return $s._createAfter(t)}createPositionBefore(t){return $s._createBefore(t)}createRange(t,e){return new Gs(t,e)}createRangeIn(t){return Gs._createIn(t)}createRangeOn(t){return Gs._createOn(t)}createSelection(t,e,n){return new ta(t,e,n)}createBatch(t){return new Ka(t)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new bc(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),t}}ci(Kc,Fi);class Jc{constructor(){this._listener=Object.create(lr)}listenTo(t){this._listener.listenTo(t,"keydown",(t,e)=>{this._listener.fire("_keydown:"+wo(e),e)})}set(t,e,n={}){const i=ko(t),o=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(t,n)=>{e(n,()=>{n.preventDefault(),n.stopPropagation(),t.stop()}),t.return=!0},{priority:o})}press(t){return!!this._listener.fire("_keydown:"+wo(t),t)}destroy(){this._listener.stopListening()}}class Zc extends Jc{constructor(t){super(),this.editor=t}set(t,e,n={}){if("string"==typeof e){const t=e;e=((e,n)=>{this.editor.execute(t),n()})}super.set(t,e,n)}}class Xc{constructor(t){const e=this.constructor.builtinPlugins;this.config=new Yn(t,this.constructor.defaultConfig),this.config.define("plugins",e),this.plugins=new Ta(this,e),this.commands=new Ca;const n=this.config.get("language")||{};this.locale=new Ma({uiLanguage:"string"==typeof n?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.set("isReadOnly",!1),this.model=new Kc,this.data=new Ya(this.model),this.editing=new Aa(this.model),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new $a([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new Zc(this),this.keystrokes.listenTo(this.editing.view.document)}initPlugins(){const t=this.config,e=t.get("plugins")||[],n=t.get("removePlugins")||[],i=t.get("extraPlugins")||[];return this.plugins.init(e.concat(i),n)}destroy(){let t=Promise.resolve();return"initializing"==this.state&&(t=new Promise(t=>this.once("ready",t))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()})}execute(...t){this.commands.execute(...t)}}ci(Xc,Fi);var tl={setData(t){this.data.set(t)},getData(t){return this.data.get(t)}};var el={updateSourceElement(){if(!this.sourceElement)throw new Gn.b("editor-missing-sourceelement: Cannot update the source element of a detached editor.",this);!function(t,e){t instanceof HTMLTextAreaElement&&(t.value=e),t.innerHTML=e}(this.sourceElement,this.data.get())}};class nl{getHtml(t){const e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class il{constructor(){this._domParser=new DOMParser,this._domConverter=new rr({blockFiller:jo}),this._htmlWriter=new nl}toData(t){const e=this._domConverter.viewToDom(t,document);return this._htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this._domConverter.domToView(e)}_toDom(t){const e=this._domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),i=e.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class ol{constructor(t){this.editor=t,this._components=new Map}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){if(this.has(t))throw new Gn.b("componentfactory-item-exists: The item already exists in the component factory.",this,{name:t});this._components.set(rl(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new Gn.b("componentfactory-item-missing: The required component is not registered in the factory.",this,{name:t});return this._components.get(rl(t)).callback(this.editor.locale)}has(t){return this._components.has(rl(t))}}function rl(t){return String(t).toLowerCase()}class sl{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(t){if(this._elements.has(t))throw new Gn.b("focusTracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(t),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}ci(sl,lr),ci(sl,Fi);class al{constructor(t){this.editor=t,this.componentFactory=new ol(t),this.focusTracker=new sl,this._editableElementsMap=new Map,this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}}ci(al,ei);n(14);const cl=new WeakMap;function ll(t){const{view:e,element:n,text:i,isDirectHost:o=!0}=t,r=e.document;cl.has(r)||(cl.set(r,new Map),r.registerPostFixer(t=>hl(r,t))),cl.get(r).set(n,{text:i,isDirectHost:o}),e.change(t=>hl(r,t))}function dl(t,e){return!!e.hasClass("ck-placeholder")&&(t.removeClass("ck-placeholder",e),!0)}function hl(t,e){const n=cl.get(t);let i=!1;for(const[t,o]of n)ul(e,t,o)&&(i=!0);return i}function ul(t,e,n){const{text:i,isDirectHost:o}=n,r=o?e:function(t){if(1===t.childCount){const e=t.getChild(0);if(e.is("element")&&!e.is("uiElement"))return e}return null}(e);let s=!1;return!!r&&(n.hostElement=r,r.getAttribute("data-placeholder")!==i&&(t.setAttribute("data-placeholder",i,r),s=!0),!function(t){const e=t.document;if(!e)return!1;const n=!Array.from(t.getChildren()).some(t=>!t.is("uiElement"));if(!e.isFocused&&n)return!0;const i=e.selection.anchor;return!(!n||!i||i.parent===t)}(r)?dl(t,r)&&(s=!0):function(t,e){return!e.hasClass("ck-placeholder")&&(t.addClass("ck-placeholder",e),!0)}(t,r)&&(s=!0),s)}class fl{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}class ml extends al{constructor(t,e){super(t),this.view=e,this._toolbarConfig=function(t){return Array.isArray(t)?{items:t}:t?Object.assign({items:[]},t):{items:[]}}(t.config.get("toolbar")),this._elementReplacer=new fl}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,i=e.editing.view,o=n.editable,r=i.document.getRoot();o.name=r.rootName,n.render();const s=o.element;this.setEditableElement(o.name,s),this.focusTracker.add(s),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(s),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy(),super.destroy()}_initToolbar(){const t=this.editor,e=this.view,n=t.editing.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,this._toolbarConfig.viewportTopOffset&&(e.stickyPanel.viewportTopOffset=this._toolbarConfig.viewportTopOffset),e.toolbar.fillFromConfig(this._toolbarConfig.items,this.componentFactory),function({origin:t,originKeystrokeHandler:e,originFocusTracker:n,toolbar:i,beforeFocus:o,afterBlur:r}){n.add(i.element),e.set("Alt+F10",(t,e)=>{n.isFocused&&!i.focusTracker.isFocused&&(o&&o(),i.focus(),e())}),i.keystrokes.set("Esc",(e,n)=>{i.focusTracker.isFocused&&(t.focus(),r&&r(),n())})}({origin:n,originFocusTracker:this.focusTracker,originKeystrokeHandler:t.keystrokes,toolbar:e.toolbar})}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement,o=t.config.get("placeholder")||i&&"textarea"===i.tagName.toLowerCase()&&i.getAttribute("placeholder");o&&ll({view:e,element:n,text:o,isDirectHost:!1})}}class gl extends oo{constructor(t){super({idProperty:"viewUid"}),this.on("add",(t,e,n)=>{e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[n])}),this.on("remove",(t,e)=>{e.element&&this._parentElement&&e.element.remove()}),this.locale=t,this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t}delegate(...t){if(!t.length||!function(t){return t.every(t=>"string"==typeof t)}(t))throw new Gn.b("ui-viewcollection-delegate-wrong-events: All event names must be strings.",this);return{to:e=>{for(const n of this)for(const i of t)n.delegate(i).to(e);this.on("add",(n,i)=>{for(const n of t)i.delegate(n).to(e)}),this.on("remove",(n,i)=>{for(const n of t)i.stopDelegating(n,e)})}}}}const pl="http://www.w3.org/1999/xhtml";class bl{constructor(t){Object.assign(this,Cl(Tl(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new Gn.b("ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)Il(n)?yield n:Nl(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,i)=>new kl({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:i}),if:(n,i,o)=>new _l({observable:t,emitter:e,attribute:n,valueIfTrue:i,callback:o})}}static extend(t,e){if(t._isRendered)throw new Gn.b("template-extend-render: Attempting to extend a template which has already been rendered.",[this,t]);!function t(e,n){n.attributes&&(e.attributes||(e.attributes={}),Ml(e.attributes,n.attributes));n.eventListeners&&(e.eventListeners||(e.eventListeners={}),Ml(e.eventListeners,n.eventListeners));n.text&&e.text.push(...n.text);if(n.children&&n.children.length){if(e.children.length!=n.children.length)throw new Gn.b("ui-template-extend-children-mismatch: The number of children in extended definition does not match.",e);let i=0;for(const o of n.children)t(e.children[i++],o)}}(t,Cl(Tl(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text)throw new Gn.b('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.',this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||pl,this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),vl(this.text)?this._bindToObservable({schema:this.text,updater:function(t){return{set(e){t.textContent=e},remove(){t.textContent=""}}}(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){let e,n,i,o;if(!this.attributes)return;const r=t.node,s=t.revertData;for(e in this.attributes)if(i=r.getAttribute(e),n=this.attributes[e],s&&(s.attributes[e]=i),o=B(n[0])&&n[0].ns?n[0].ns:null,vl(n)){const a=o?n[0].value:n;s&&Rl(e)&&a.unshift(i),this._bindToObservable({schema:a,updater:xl(r,e,o),data:t})}else"style"==e&&"string"!=typeof n[0]?this._renderStyleAttribute(n[0],t):(s&&i&&Rl(e)&&n.unshift(i),El(n=n.map(t=>t&&t.value||t).reduce((t,e)=>t.concat(e),[]).reduce(Sl,""))||r.setAttributeNS(o,e,n))}_renderStyleAttribute(t,e){const n=e.node;for(const i in t){const o=t[i];vl(o)?this._bindToObservable({schema:[o],updater:Al(n,i),data:e}):n.style[i]=o}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,i=t.isApplying;let o=0;for(const r of this.children)if(Ol(r)){if(!i){r.setParent(e);for(const t of r)n.appendChild(t.element)}}else if(Il(r))i||(r.isRendered||r.render(),n.appendChild(r.element));else if(Zo(r))n.appendChild(r);else if(i){const e={children:[],bindings:[],attributes:{}};t.revertData.children.push(e),r._renderNode({node:n.childNodes[o++],isApplying:!0,revertData:e})}else n.appendChild(r.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(n=>{const[i,o]=e.split("@");return n.activateDomEventListener(i,o,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const i=n.revertData;yl(t,e,n);const o=t.filter(t=>!El(t)).filter(t=>t.observable).map(i=>i.activateAttributeListener(t,e,n));i&&i.bindings.push(o)}_revertTemplateFromNode(t,e){for(const t of e.bindings)for(const e of t)e();if(e.text)t.textContent=e.text;else{for(const n in e.attributes){const i=e.attributes[n];null===i?t.removeAttribute(n):t.setAttribute(n,i)}for(let n=0;n<e.children.length;++n)this._revertTemplateFromNode(t.childNodes[n],e.children[n])}}}ci(bl,ei);class wl{constructor(t){Object.assign(this,t)}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const i=()=>yl(t,e,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,i),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,i)}}}class kl extends wl{activateDomEventListener(t,e,n){const i=(t,n)=>{e&&!n.target.matches(e)||("function"==typeof this.eventNameOrFunction?this.eventNameOrFunction(n):this.observable.fire(this.eventNameOrFunction,n))};return this.emitter.listenTo(n.node,t,i),()=>{this.emitter.stopListening(n.node,t,i)}}}class _l extends wl{getValue(t){return!El(super.getValue(t))&&(this.valueIfTrue||!0)}}function vl(t){return!!t&&(t.value&&(t=t.value),Array.isArray(t)?t.some(vl):t instanceof wl)}function yl(t,e,{node:n}){let i=function(t,e){return t.map(t=>t instanceof wl?t.getValue(e):t)}(t,n);El(i=1==t.length&&t[0]instanceof _l?i[0]:i.reduce(Sl,""))?e.remove():e.set(i)}function xl(t,e,n){return{set(i){t.setAttributeNS(n,e,i)},remove(){t.removeAttributeNS(n,e)}}}function Al(t,e){return{set(n){t.style[e]=n},remove(){t.style[e]=null}}}function Tl(t){return qn(t,t=>{if(t&&(t instanceof wl||Nl(t)||Il(t)||Ol(t)))return t})}function Cl(t){if("string"==typeof t?t=function(t){return{text:[t]}}(t):t.text&&function(t){Array.isArray(t.text)||(t.text=[t.text])}(t),t.on&&(t.eventListeners=function(t){for(const e in t)Pl(t,e);return t}(t.on),delete t.on),!t.text){t.attributes&&function(t){for(const e in t)t[e].value&&(t[e].value=[].concat(t[e].value)),Pl(t,e)}(t.attributes);const e=[];if(t.children)if(Ol(t.children))e.push(t.children);else for(const n of t.children)Nl(n)||Il(n)||Zo(n)?e.push(n):e.push(new bl(n));t.children=e}return t}function Pl(t,e){Array.isArray(t[e])||(t[e]=[t[e]])}function Sl(t,e){return El(e)?t:El(t)?e:`${t} ${e}`}function Ml(t,e){for(const n in e)t[n]?t[n].push(...e[n]):t[n]=e[n]}function El(t){return!t&&0!==t}function Il(t){return t instanceof Dl}function Nl(t){return t instanceof bl}function Ol(t){return t instanceof gl}function Rl(t){return"class"==t||"style"==t}n(16);class Dl{constructor(t){this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new oo,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=bl.bind(this,this)}createCollection(){const t=new gl;return this._viewCollections.add(t),t}registerChild(t){pi(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){pi(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new bl(t)}extendTemplate(t){bl.extend(this.template,t)}render(){if(this.isRendered)throw new Gn.b("ui-view-render-already-rendered: This View has already been rendered.",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}ci(Dl,lr),ci(Dl,Fi);n(18);class Ll extends Dl{constructor(t){super(t),this.body=this.createCollection()}render(){super.render(),this._renderBodyCollection()}destroy(){return this._bodyCollectionContainer.remove(),super.destroy()}_renderBodyCollection(){const t=this.locale,e=this._bodyCollectionContainer=new bl({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:t.uiLanguageDirection},children:this.body}).render();document.body.appendChild(e)}}n(20);class jl extends Dl{constructor(t){super(t),this.set("text"),this.set("for");const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],for:e.to("for")},children:[{text:e.to("text")}]})}}class Vl extends Ll{constructor(t){super(t);const e=Jn();this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":`ck-editor__aria-label_${e}`},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(t){const e=this.t,n=new jl;return n.text=e("bn"),n.extendTemplate({attributes:{id:`ck-editor__aria-label_${t}`,class:"ck-voice-label"}}),n}}class zl extends Dl{constructor(t,e,n){super(t),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const t=this._editingView;function e(e){t.change(n=>{const i=t.document.getRoot(e.name);n.addClass(e.isFocused?"ck-focused":"ck-blurred",i),n.removeClass(e.isFocused?"ck-blurred":"ck-focused",i)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(t,o,r)=>{r?n(i):e(i)})}(this):e(this)}}class Bl extends zl{constructor(t,e,n){super(t,e,n),this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();const t=this._editingView,e=this.t;t.change(n=>{const i=t.document.getRoot(this.name);n.setAttribute("aria-label",e("bm",[this.name]),i)})}}function Fl(t){return e=>e+t}n(22);const Ul=Fl("px");class Hl extends Dl{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new bl({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",t=>t?"block":"none"),height:e.to("isSticky",t=>t?Ul(this._panelRect.height):null)}}}).render(),this._contentPanel=new bl({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",t=>t?Ul(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",t=>t?Ul(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",t=>t?Ul(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(nr.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const t=this._panelRect=this._contentPanel.getBoundingClientRect();let e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Ul(-nr.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}class ql{constructor(t){if(Object.assign(this,t),t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];"string"==typeof n&&(n=[n]);for(const i of n)t.keystrokeHandler.set(i,(t,n)=>{this[e](),n()})}}get first(){return this.focusables.find(Wl)||null}get last(){return this.focusables.filter(Wl).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((e,n)=>{const i=e.element===this.focusTracker.focusedElement;return i&&(t=n),i}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(null===e)return this[1===t?"first":"last"];let i=(e+n+t)%n;do{const e=this.focusables.get(i);if(Wl(e))return e;i=(i+n+t)%n}while(i!==e);return null}}function Wl(t){return!(!t.focus||"none"==nr.window.getComputedStyle(t.element).display)}class Yl extends Dl{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}n(24);class $l extends Dl{constructor(t){super(t);const e=this.bindTemplate,n=this.t;this.set("ariaLabel",n("bl")),this.items=this.createCollection(),this.focusTracker=new sl,this.keystrokes=new Jc,this.set("isVertical",!1),this.set("class"),this._focusCycler=new ql({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:["arrowleft","arrowup"],focusNext:["arrowright","arrowdown"]}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar",e.if("isVertical","ck-toolbar_vertical"),e.to("class")],role:"toolbar","aria-label":e.to("ariaLabel")},children:this.items,on:{mousedown:function(t){return t.bindTemplate.to(e=>{e.target===t.element&&e.preventDefault()})}(this)}})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e){t.map(t=>{"|"==t?this.items.add(new Yl):e.has(t)?this.items.add(e.create(t)):console.warn(Object(Gn.a)("toolbarview-item-unavailable: The requested toolbar item is unavailable."),{name:t})})}}n(26);class Gl extends Vl{constructor(t,e){super(t),this.stickyPanel=new Hl(t),this.toolbar=new $l(t),this.editable=new Bl(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Ql extends Xc{constructor(t,e){super(e),Wn(t)&&(this.sourceElement=t),this.data.processor=new il,this.model.document.createRoot(),this.ui=new ml(this,new Gl(this.locale,this.editing.view)),function(t){if(!W(t.updateSourceElement))throw new Gn.b("attachtoform-missing-elementapi-interface: Editor passed to attachToForm() must implement ElementApi.",t);const e=t.sourceElement;if(e&&"textarea"===e.tagName.toLowerCase()&&e.form){let n;const i=e.form,o=()=>t.updateSourceElement();W(i.submit)&&(n=i.submit,i.submit=(()=>{o(),n.apply(i)})),i.addEventListener("submit",o),t.on("destroy",()=>{i.removeEventListener("submit",o),n&&(i.submit=n)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(Wn(t)?t:null)).then(()=>{if(!Wn(t)&&e.initialData)throw new Gn.b("editor-create-initial-data: The config.initialData option cannot be used together with initial data passed in Editor.create().",null);const n=e.initialData||function(t){return Wn(t)?function(t){return t instanceof HTMLTextAreaElement?t.value:t.innerHTML}(t):t}(t);return i.data.init(n)}).then(()=>i.fire("ready")).then(()=>i))})}}ci(Ql,tl),ci(Ql,el);class Kl{constructor(t){this.editor=t}destroy(){this.stopListening()}}ci(Kl,Fi);class Jl{constructor(t){this.files=function(t){const e=t.files?Array.from(t.files):[],n=t.items?Array.from(t.items):[];if(e.length)return e;return n.filter(t=>"file"===t.kind).map(t=>t.getAsFile())}(t),this._native=t}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}}class Zl extends ts{constructor(t){super(t);const e=this.document;function n(t,n){n.preventDefault();const i=n.dropRange?[n.dropRange]:Array.from(e.selection.getRanges()),o=new Kn(e,"clipboardInput");e.fire(o,{dataTransfer:n.dataTransfer,targetRanges:i}),o.stop.called&&n.stopPropagation()}this.domEventType=["paste","copy","cut","drop","dragover"],this.listenTo(e,"paste",n,{priority:"low"}),this.listenTo(e,"drop",n,{priority:"low"})}onDomEvent(t){const e={dataTransfer:new Jl(t.clipboardData?t.clipboardData:t.dataTransfer)};"drop"==t.type&&(e.dropRange=function(t,e){const n=e.target.ownerDocument,i=e.clientX,o=e.clientY;let r;n.caretRangeFromPoint&&n.caretRangeFromPoint(i,o)?r=n.caretRangeFromPoint(i,o):e.rangeParent&&((r=n.createRange()).setStart(e.rangeParent,e.rangeOffset),r.collapse(!0));return r?t.domConverter.domRangeToView(r):t.document.selection.getFirstRange()}(this.view,t)),this.fire(t.type,t,e)}}const Xl=["figcaption","li"];class td extends Kl{static get pluginName(){return"Clipboard"}init(){const t=this.editor,e=t.model.document,n=t.editing.view,i=n.document;function o(n,o){const r=o.dataTransfer;o.preventDefault();const s=t.data.toView(t.model.getSelectedContent(e.selection));i.fire("clipboardOutput",{dataTransfer:r,content:s,method:n.name})}this._htmlDataProcessor=new il,n.addObserver(Zl),this.listenTo(i,"clipboardInput",e=>{t.isReadOnly&&e.stop()},{priority:"highest"}),this.listenTo(i,"clipboardInput",(t,e)=>{const i=e.dataTransfer;let o="";i.getData("text/html")?o=function(t){return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>1==e.length?" ":e)}(i.getData("text/html")):i.getData("text/plain")&&(o=function(t){return(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"</p><p>").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).indexOf("</p><p>")>-1&&(t=`<p>${t}</p>`),t}(i.getData("text/plain"))),o=this._htmlDataProcessor.toView(o),this.fire("inputTransformation",{content:o,dataTransfer:i}),n.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(t,e)=>{if(!e.content.isEmpty){const t=this.editor.data,n=this.editor.model,i=t.toModel(e.content,"$clipboardHolder");if(0==i.childCount)return;n.insertContent(i)}},{priority:"low"}),this.listenTo(i,"copy",o,{priority:"low"}),this.listenTo(i,"cut",(e,n)=>{t.isReadOnly?n.preventDefault():o(e,n)},{priority:"low"}),this.listenTo(i,"clipboardOutput",(n,i)=>{i.content.isEmpty||(i.dataTransfer.setData("text/html",this._htmlDataProcessor.toData(i.content)),i.dataTransfer.setData("text/plain",function t(e){let n="";if(e.is("text")||e.is("textProxy"))n=e.data;else if(e.is("img")&&e.hasAttribute("alt"))n=e.getAttribute("alt");else{let i=null;for(const o of e.getChildren()){const e=t(o);i&&(i.is("containerElement")||o.is("containerElement"))&&(Xl.includes(i.name)||Xl.includes(o.name)?n+="\n":n+="\n\n"),n+=e,i=o}}return n}(i.content))),"cut"==i.method&&t.model.deleteContent(e.selection)},{priority:"low"})}}class ed{constructor(t){this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(t,e,n)=>{n?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),1==this._disableStack.size&&(this.on("set:isEnabled",nd,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),0==this._disableStack.size&&(this.off("set:isEnabled",nd),this.refresh())}execute(){}destroy(){this.stopListening()}}function nd(t){t.return=!1,t.stop()}function*id(t,e){for(const n of e)n&&t.getAttributeProperties(n[0]).copyOnEnter&&(yield n)}ci(ed,Fi);class od extends ed{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n,i){const o=n.isCollapsed,r=n.getFirstRange(),s=r.start.parent,a=r.end.parent;if(i.isLimit(s)||i.isLimit(a))return void(o||s!=a||t.deleteContent(n));if(o){const t=id(e.model.schema,n.getAttributes());rd(e,r.start),e.setSelectionAttribute(t)}else{const i=!(r.start.isAtStart&&r.end.isAtEnd),o=s==a;t.deleteContent(n,{leaveUnmerged:i}),i&&(o?rd(e,n.focus):e.setSelection(a,0))}}(this.editor.model,n,e.selection,t.schema),this.fire("afterExecute",{writer:n})})}}function rd(t,e){t.split(e),t.setSelection(e.parent.nextSibling,0)}class sd extends ur{constructor(t){super(t);const e=this.document;e.on("keydown",(t,n)=>{if(this.isEnabled&&n.keyCode==bo.enter){let i;e.once("enter",t=>i=t,{priority:"highest"}),e.fire("enter",new Xr(e,n.domEvent,{isSoft:n.shiftKey})),i&&i.stop.called&&t.stop()}})}observe(){}}class ad extends Kl{static get pluginName(){return"Enter"}init(){const t=this.editor,e=t.editing.view,n=e.document;e.addObserver(sd),t.commands.add("enter",new od(t)),this.listenTo(n,"enter",(n,i)=>{i.preventDefault(),i.isSoft||(t.execute("enter"),e.scrollToTheSelection())},{priority:"low"})}}class cd extends ed{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n){const i=n.isCollapsed,o=n.getFirstRange(),r=o.start.parent,s=o.end.parent,a=r==s;if(i){const i=id(t.schema,n.getAttributes());ld(e,o.end),e.removeSelectionAttribute(n.getAttributeKeys()),e.setSelectionAttribute(i)}else{const i=!(o.start.isAtStart&&o.end.isAtEnd);t.deleteContent(n,{leaveUnmerged:i}),a?ld(e,n.focus):i&&e.setSelection(s,0)}}(t,n,e.selection),this.fire("afterExecute",{writer:n})})}refresh(){const t=this.editor.model,e=t.document;this.isEnabled=function(t,e){if(e.rangeCount>1)return!1;const n=e.anchor;if(!n||!t.checkChild(n,"softBreak"))return!1;const i=e.getFirstRange(),o=i.start.parent,r=i.end.parent;if((dd(o,t)||dd(r,t))&&o!==r)return!1;return!0}(t.schema,e.selection)}}function ld(t,e){const n=t.createElement("softBreak");t.insert(n,e),t.setSelection(n,"after")}function dd(t,e){return!t.is("rootElement")&&(e.isLimit(t)||dd(t.parent,e))}class hd extends Kl{static get pluginName(){return"ShiftEnter"}init(){const t=this.editor,e=t.model.schema,n=t.conversion,i=t.editing.view,o=i.document;e.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(t,e)=>e.createEmptyElement("br")}),i.addObserver(sd),t.commands.add("shiftEnter",new cd(t)),this.listenTo(o,"enter",(e,n)=>{n.preventDefault(),n.isSoft&&(t.execute("shiftEnter"),i.scrollToTheSelection())},{priority:"low"})}}class ud{constructor(t,e=20){this.model=t,this.size=0,this.limit=e,this.isLocked=!1,this._changeCallback=((t,e)=>{"transparent"!=e.type&&e!==this._batch&&this._reset(!0)}),this._selectionChangeCallback=(()=>{this._reset()}),this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch()),this._batch}input(t){this.size+=t,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(t){this.isLocked&&!t||(this._batch=null,this.size=0)}}class fd extends ed{constructor(t,e){super(t),this._buffer=new ud(t.model,e),this._batches=new WeakSet}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(t={}){const e=this.editor.model,n=e.document,i=t.text||"",o=i.length,r=t.range||n.selection.getFirstRange(),s=t.resultRange;e.enqueueChange(this._buffer.batch,t=>{const a=r.isCollapsed;this._buffer.lock(),e.deleteContent(e.createSelection(r)),i&&e.insertContent(t.createText(i,n.selection.getAttributes()),r.start),s?t.setSelection(s):a&&t.setSelection(r.start.getShiftedBy(o)),this._buffer.unlock(),this._buffer.input(o),this._batches.add(this._buffer.batch)})}}function md(t){let e=null;const n=t.model,i=t.editing.view,o=t.commands.get("input");function r(t){const r=n.document,a=i.document.isComposing,c=e&&e.isEqual(r.selection);e=null,o.isEnabled&&(function(t){if(t.ctrlKey)return!0;return gd.includes(t.keyCode)}(t)||r.selection.isCollapsed||a&&229===t.keyCode||!a&&229===t.keyCode&&c||s())}function s(){const t=o.buffer;t.lock(),n.enqueueChange(t.batch,()=>{n.deleteContent(n.document.selection)}),t.unlock()}mo.isAndroid?i.document.on("beforeinput",(t,e)=>r(e),{priority:"lowest"}):i.document.on("keydown",(t,e)=>r(e),{priority:"lowest"}),i.document.on("compositionstart",function(){const t=n.document,e=1!==t.selection.rangeCount||t.selection.getFirstRange().isFlat;if(t.selection.isCollapsed||e)return;s()},{priority:"lowest"}),i.document.on("compositionend",()=>{e=n.createSelection(n.document.selection)},{priority:"lowest"})}const gd=[wo("arrowUp"),wo("arrowRight"),wo("arrowDown"),wo("arrowLeft"),9,16,17,18,19,20,27,33,34,35,36,45,91,93,144,145,173,174,175,176,177,178,179,255];for(let t=112;t<=135;t++)gd.push(t);function pd(t){if(t.newChildren.length-t.oldChildren.length!=1)return;const e=function(t,e){const n=[];let i,o=0;return t.forEach(t=>{"equal"==t?(r(),o++):"insert"==t?(s("insert")?i.values.push(e[o]):(r(),i={type:"insert",index:o,values:[e[o]]}),o++):s("delete")?i.howMany++:(r(),i={type:"delete",index:o,howMany:1})}),r(),n;function r(){i&&(n.push(i),i=null)}function s(t){return i&&i.type==t}}(Qo(t.oldChildren,t.newChildren,bd),t.newChildren);if(e.length>1)return;const n=e[0];return n.values[0]&&n.values[0].is("text")?n:void 0}function bd(t,e){return t&&t.is("text")&&e&&e.is("text")?t.data===e.data:t===e}class wd{constructor(t){this.editor=t,this.editing=this.editor.editing}handle(t,e){if(function(t){if(0==t.length)return!1;for(const e of t)if("children"===e.type&&!pd(e))return!0;return!1}(t))this._handleContainerChildrenMutations(t,e);else for(const n of t)this._handleTextMutation(n,e),this._handleTextNodeInsertion(n)}_handleContainerChildrenMutations(t,e){const n=function(t){const e=t.map(t=>t.node).reduce((t,e)=>t.getCommonAncestor(e,{includeSelf:!0}));if(!e)return;return e.getAncestors({includeSelf:!0,parentFirst:!0}).find(t=>t.is("containerElement")||t.is("rootElement"))}(t);if(!n)return;const i=this.editor.editing.view.domConverter.mapViewToDom(n),o=new rr,r=this.editor.data.toModel(o.domToView(i)).getChild(0),s=this.editor.editing.mapper.toModelElement(n);if(!s)return;const a=Array.from(r.getChildren()),c=Array.from(s.getChildren()),l=a[a.length-1],d=c[c.length-1];l&&l.is("softBreak")&&d&&!d.is("softBreak")&&a.pop();const h=this.editor.model.schema;if(!kd(a,h)||!kd(c,h))return;const u=a.map(t=>t.is("text")?t.data:"@").join("").replace(/\u00A0/g," "),f=c.map(t=>t.is("text")?t.data:"@").join("").replace(/\u00A0/g," ");if(f===u)return;const m=Qo(f,u),{firstChangeAt:g,insertions:p,deletions:b}=_d(m);let w=null;e&&(w=this.editing.mapper.toModelRange(e.getFirstRange()));const k=u.substr(g,p),_=this.editor.model.createRange(this.editor.model.createPositionAt(s,g),this.editor.model.createPositionAt(s,g+b));this.editor.execute("input",{text:k,range:_,resultRange:w})}_handleTextMutation(t,e){if("text"!=t.type)return;const n=t.newText.replace(/\u00A0/g," "),i=t.oldText.replace(/\u00A0/g," ");if(i===n)return;const o=Qo(i,n),{firstChangeAt:r,insertions:s,deletions:a}=_d(o);let c=null;e&&(c=this.editing.mapper.toModelRange(e.getFirstRange()));const l=this.editing.view.createPositionAt(t.node,r),d=this.editing.mapper.toModelPosition(l),h=this.editor.model.createRange(d,d.getShiftedBy(a)),u=n.substr(r,s);this.editor.execute("input",{text:u,range:h,resultRange:c})}_handleTextNodeInsertion(t){if("children"!=t.type)return;const e=pd(t),n=this.editing.view.createPositionAt(t.node,e.index),i=this.editing.mapper.toModelPosition(n),o=e.values[0].data;this.editor.execute("input",{text:o.replace(/\u00A0/g," "),range:this.editor.model.createRange(i)})}}function kd(t,e){return t.every(t=>e.isInline(t))}function _d(t){let e=null,n=null;for(let i=0;i<t.length;i++){"equal"!=t[i]&&(e=null===e?i:e,n=i)}let i=0,o=0;for(let r=e;r<=n;r++)"insert"!=t[r]&&i++,"delete"!=t[r]&&o++;return{insertions:o,deletions:i,firstChangeAt:e}}class vd extends Kl{static get pluginName(){return"Input"}init(){const t=this.editor,e=new fd(t,t.config.get("typing.undoStep")||20);t.commands.add("input",e),md(t),function(t){t.editing.view.document.on("mutations",(e,n,i)=>{new wd(t).handle(n,i)})}(t)}isInput(t){return this.editor.commands.get("input")._batches.has(t)}}class yd extends ed{constructor(t,e){super(t),this.direction=e,this._buffer=new ud(t.model,t.config.get("typing.undoStep"))}get buffer(){return this._buffer}execute(t={}){const e=this.editor.model,n=e.document;e.enqueueChange(this._buffer.batch,i=>{this._buffer.lock();const o=i.createSelection(t.selection||n.selection),r=o.isCollapsed;if(o.isCollapsed&&e.modifySelection(o,{direction:this.direction,unit:t.unit}),this._shouldEntireContentBeReplacedWithParagraph(t.sequence||1))return void this._replaceEntireContentWithParagraph(i);if(o.isCollapsed)return;let s=0;o.getFirstRange().getMinimalFlatRanges().forEach(t=>{s+=eo(t.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),e.deleteContent(o,{doNotResetEntireContent:r}),this._buffer.input(s),i.setSelection(o),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(t){if(t>1)return!1;const e=this.editor.model,n=e.document.selection,i=e.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(i)))return!1;if(!e.schema.checkChild(i,"paragraph"))return!1;const o=i.getChild(0);return!o||"paragraph"!==o.name}_replaceEntireContentWithParagraph(t){const e=this.editor.model,n=e.document.selection,i=e.schema.getLimitElement(n),o=t.createElement("paragraph");t.remove(t.createRangeIn(i)),t.insert(o,i),t.setSelection(o,0)}}class xd extends ur{constructor(t){super(t);const e=t.document;let n=0;function i(t,n,i){let o;e.once("delete",t=>o=t,{priority:Number.POSITIVE_INFINITY}),e.fire("delete",new Xr(e,n,i)),o&&o.stop.called&&t.stop()}e.on("keyup",(t,e)=>{e.keyCode!=bo.delete&&e.keyCode!=bo.backspace||(n=0)}),e.on("keydown",(t,e)=>{const o={};if(e.keyCode==bo.delete)o.direction="forward",o.unit="character";else{if(e.keyCode!=bo.backspace)return;o.direction="backward",o.unit="codePoint"}const r=mo.isMac?e.altKey:e.ctrlKey;o.unit=r?"word":o.unit,o.sequence=++n,i(t,e.domEvent,o)}),mo.isAndroid&&e.on("beforeinput",(e,n)=>{if("deleteContentBackward"!=n.domEvent.inputType)return;const o={unit:"codepoint",direction:"backward",sequence:1},r=n.domTarget.ownerDocument.defaultView.getSelection();r.anchorNode==r.focusNode&&r.anchorOffset+1!=r.focusOffset&&(o.selectionToRemove=t.domConverter.domSelectionToView(r)),i(e,n.domEvent,o)})}observe(){}}class Ad extends Kl{static get pluginName(){return"Delete"}init(){const t=this.editor,e=t.editing.view,n=e.document;if(e.addObserver(xd),t.commands.add("forwardDelete",new yd(t,"forward")),t.commands.add("delete",new yd(t,"backward")),this.listenTo(n,"delete",(n,i)=>{const o={unit:i.unit,sequence:i.sequence};if(i.selectionToRemove){const e=t.model.createSelection(),n=[];for(const e of i.selectionToRemove.getRanges())n.push(t.editing.mapper.toModelRange(e));e.setTo(n),o.selection=e}t.execute("forward"==i.direction?"forwardDelete":"delete",o),i.preventDefault(),e.scrollToTheSelection()}),mo.isAndroid){let t=null;this.listenTo(n,"delete",(e,n)=>{const i=n.domTarget.ownerDocument.defaultView.getSelection();t={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}},{priority:"lowest"}),this.listenTo(n,"keyup",(e,n)=>{if(t){const e=n.domTarget.ownerDocument.defaultView.getSelection();e.collapse(t.anchorNode,t.anchorOffset),e.extend(t.focusNode,t.focusOffset),t=null}})}}}class Td extends Kl{static get requires(){return[vd,Ad]}static get pluginName(){return"Typing"}}class Cd extends Ja{get type(){return"noop"}clone(){return new Cd(this.baseVersion)}getReversed(){return new Cd(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const Pd=new Map;function Sd(t,e,n){let i=Pd.get(t);i||(i=new Map,Pd.set(t,i)),i.set(e,n)}function Md(t){return[t]}function Ed(t,e,n={}){const i=function(t,e){const n=Pd.get(t);return n&&n.has(e)?n.get(e):Md}(t.constructor,e.constructor);try{return i(t=t.clone(),e,n)}catch(t){throw t}}function Id(t,e,n){t=t.slice(),e=e.slice();const i=new Nd(n.document,n.useRelations,n.forceWeakRemove);i.setOriginalOperations(t),i.setOriginalOperations(e);const o=i.originalOperations;if(0==t.length||0==e.length)return{operationsA:t,operationsB:e,originalOperations:o};const r=new WeakMap;for(const e of t)r.set(e,0);const s={nextBaseVersionA:t[t.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:t.length,originalOperationsBCount:e.length};let a=0;for(;a<t.length;){const n=t[a],o=r.get(n);if(o==e.length){a++;continue}const s=e[o],c=Ed(n,s,i.getContext(n,s,!0)),l=Ed(s,n,i.getContext(s,n,!1));i.updateRelation(n,s),i.setOriginalOperations(c,n),i.setOriginalOperations(l,s);for(const t of c)r.set(t,o+l.length);t.splice(a,1,...c),e.splice(o,1,...l)}if(n.padWithNoOps){const n=t.length-s.originalOperationsACount,i=e.length-s.originalOperationsBCount;Rd(t,i-n),Rd(e,n-i)}return Od(t,s.nextBaseVersionB),Od(e,s.nextBaseVersionA),{operationsA:t,operationsB:e,originalOperations:o}}class Nd{constructor(t,e,n=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(t,e=null){const n=e?this.originalOperations.get(e):null;for(const e of t)this.originalOperations.set(e,n||e)}updateRelation(t,e){switch(t.constructor){case lc:switch(e.constructor){case mc:t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter");break;case lc:t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter")}break;case gc:switch(e.constructor){case mc:t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");break;case lc:(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))&&this._setRelation(t,e,"splitBefore")}break;case mc:switch(e.constructor){case mc:t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement");break;case gc:t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource")}break;case hc:{const n=t.newRange;if(!n)return;switch(e.constructor){case lc:{const i=Gs._createFromPositionAndShift(e.sourcePosition,e.howMany),o=i.containsPosition(n.start)||i.start.isEqual(n.start),r=i.containsPosition(n.end)||i.end.isEqual(n.end);!o&&!r||i.containsRange(n)||this._setRelation(t,e,{side:o?"left":"right",path:o?n.start.path.slice():n.end.path.slice()});break}case mc:{const i=n.start.isEqual(e.targetPosition),o=n.start.isEqual(e.deletionPosition),r=n.end.isEqual(e.deletionPosition),s=n.end.isEqual(e.sourcePosition);(i||o||r||s)&&this._setRelation(t,e,{wasInLeftElement:i,wasStartBeforeMergedElement:o,wasEndBeforeMergedElement:r,wasInRightElement:s});break}}break}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){const e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){const n=this.originalOperations.get(e),i=this._history.getUndoneOperation(n);if(!i)return null;const o=this.originalOperations.get(t),r=this._relations.get(o);return r&&r.get(i)||null}_setRelation(t,e,n){const i=this.originalOperations.get(t),o=this.originalOperations.get(e);let r=this._relations.get(i);r||(r=new Map,this._relations.set(i,r)),r.set(o,n)}}function Od(t,e){for(const n of t)n.baseVersion=e++}function Rd(t,e){for(let n=0;n<e;n++)t.push(new Cd(0))}function Dd(t,e,n){const i=t.nodes.getNode(0).getAttribute(e);if(i==n)return null;const o=new Gs(t.position,t.position.getShiftedBy(t.howMany));return new ac(o,e,i,n,0)}function Ld(t,e){return null===t.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)}function jd(t,e){const n=[];for(let i=0;i<t.length;i++){const o=t[i],r=new lc(o.start,o.end.offset-o.start.offset,e,0);n.push(r);for(let e=i+1;e<t.length;e++)t[e]=t[e]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];e=e._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return n}Sd(ac,ac,(t,e,n)=>{if(t.key===e.key){const i=t.range.getDifference(e.range).map(e=>new ac(e,t.key,t.oldValue,t.newValue,0)),o=t.range.getIntersection(e.range);return o&&n.aIsStrong&&i.push(new ac(o,e.key,e.newValue,t.newValue,0)),0==i.length?[new Cd(0)]:i}return[t]}),Sd(ac,dc,(t,e)=>{if(t.range.start.hasSameParentAs(e.position)&&t.range.containsPosition(e.position)){const n=t.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(e=>new ac(e,t.key,t.oldValue,t.newValue,t.baseVersion));if(e.shouldReceiveAttributes){const i=Dd(e,t.key,t.oldValue);i&&n.unshift(i)}return n}return t.range=t.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[t]}),Sd(ac,mc,(t,e)=>{const n=[];t.range.start.hasSameParentAs(e.deletionPosition)&&(t.range.containsPosition(e.deletionPosition)||t.range.start.isEqual(e.deletionPosition))&&n.push(Gs._createFromPositionAndShift(e.graveyardPosition,1));const i=t.range._getTransformedByMergeOperation(e);return i.isCollapsed||n.push(i),n.map(e=>new ac(e,t.key,t.oldValue,t.newValue,t.baseVersion))}),Sd(ac,lc,(t,e)=>{return function(t,e){const n=Gs._createFromPositionAndShift(e.sourcePosition,e.howMany);let i=null,o=[];n.containsRange(t,!0)?i=t:t.start.hasSameParentAs(n.start)?(o=t.getDifference(n),i=t.getIntersection(n)):o=[t];const r=[];for(let t of o){t=t._getTransformedByDeletion(e.sourcePosition,e.howMany);const n=e.getMovedRangeStart(),i=t.start.hasSameParentAs(n);t=t._getTransformedByInsertion(n,e.howMany,i),r.push(...t)}i&&r.push(i._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,!1)[0]);return r}(t.range,e).map(e=>new ac(e,t.key,t.oldValue,t.newValue,t.baseVersion))}),Sd(ac,gc,(t,e)=>{if(t.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||t.range.end.offset++,[t];if(t.range.start.hasSameParentAs(e.splitPosition)&&t.range.containsPosition(e.splitPosition)){const n=t.clone();return n.range=new Gs(e.moveTargetPosition.clone(),t.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),t.range.end=e.splitPosition.clone(),t.range.end.stickiness="toPrevious",[t,n]}return t.range=t.range._getTransformedBySplitOperation(e),[t]}),Sd(dc,ac,(t,e)=>{const n=[t];if(t.shouldReceiveAttributes&&t.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(t.position)){const i=Dd(t,e.key,e.newValue);i&&n.push(i)}return n}),Sd(dc,dc,(t,e,n)=>t.position.isEqual(e.position)&&n.aIsStrong?[t]:(t.position=t.position._getTransformedByInsertOperation(e),[t])),Sd(dc,lc,(t,e)=>(t.position=t.position._getTransformedByMoveOperation(e),[t])),Sd(dc,gc,(t,e)=>(t.position=t.position._getTransformedBySplitOperation(e),[t])),Sd(dc,mc,(t,e)=>(t.position=t.position._getTransformedByMergeOperation(e),[t])),Sd(hc,dc,(t,e)=>(t.oldRange&&(t.oldRange=t.oldRange._getTransformedByInsertOperation(e)[0]),t.newRange&&(t.newRange=t.newRange._getTransformedByInsertOperation(e)[0]),[t])),Sd(hc,hc,(t,e,n)=>{if(t.name==e.name){if(!n.aIsStrong)return[new Cd(0)];t.oldRange=e.newRange?e.newRange.clone():null}return[t]}),Sd(hc,mc,(t,e)=>(t.oldRange&&(t.oldRange=t.oldRange._getTransformedByMergeOperation(e)),t.newRange&&(t.newRange=t.newRange._getTransformedByMergeOperation(e)),[t])),Sd(hc,lc,(t,e,n)=>{if(t.oldRange&&(t.oldRange=Gs._createFromRanges(t.oldRange._getTransformedByMoveOperation(e))),t.newRange){if(n.abRelation){const i=Gs._createFromRanges(t.newRange._getTransformedByMoveOperation(e));if("left"==n.abRelation.side&&e.targetPosition.isEqual(t.newRange.start))return t.newRange.start.path=n.abRelation.path,t.newRange.end=i.end,[t];if("right"==n.abRelation.side&&e.targetPosition.isEqual(t.newRange.end))return t.newRange.start=i.start,t.newRange.end.path=n.abRelation.path,[t]}t.newRange=Gs._createFromRanges(t.newRange._getTransformedByMoveOperation(e))}return[t]}),Sd(hc,gc,(t,e,n)=>{if(t.oldRange&&(t.oldRange=t.oldRange._getTransformedBySplitOperation(e)),t.newRange){if(n.abRelation){const i=t.newRange._getTransformedBySplitOperation(e);return t.newRange.start.isEqual(e.splitPosition)&&n.abRelation.wasStartBeforeMergedElement?t.newRange.start=$s._createAt(e.insertionPosition):t.newRange.start.isEqual(e.splitPosition)&&!n.abRelation.wasInLeftElement&&(t.newRange.start=$s._createAt(e.moveTargetPosition)),t.newRange.end.isEqual(e.splitPosition)&&n.abRelation.wasInRightElement?t.newRange.end=$s._createAt(e.moveTargetPosition):t.newRange.end.isEqual(e.splitPosition)&&n.abRelation.wasEndBeforeMergedElement?t.newRange.end=$s._createAt(e.insertionPosition):t.newRange.end=i.end,[t]}t.newRange=t.newRange._getTransformedBySplitOperation(e)}return[t]}),Sd(mc,dc,(t,e)=>(t.sourcePosition.hasSameParentAs(e.position)&&(t.howMany+=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByInsertOperation(e),t.targetPosition=t.targetPosition._getTransformedByInsertOperation(e),[t])),Sd(mc,mc,(t,e,n)=>{if(t.sourcePosition.isEqual(e.sourcePosition)&&t.targetPosition.isEqual(e.targetPosition)){if(n.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),t.sourcePosition=new $s(e.graveyardPosition.root,n),t.howMany=0,[t]}return[new Cd(0)]}if(t.sourcePosition.isEqual(e.sourcePosition)&&!t.targetPosition.isEqual(e.targetPosition)&&!n.bWasUndone&&"splitAtSource"!=n.abRelation){const i="$graveyard"==t.targetPosition.root.rootName,o="$graveyard"==e.targetPosition.root.rootName;if(o&&!i||!(i&&!o)&&n.aIsStrong){const n=e.targetPosition._getTransformedByMergeOperation(e),i=t.targetPosition._getTransformedByMergeOperation(e);return[new lc(n,t.howMany,i,0)]}return[new Cd(0)]}return t.sourcePosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByMergeOperation(e),t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),t.graveyardPosition.isEqual(e.graveyardPosition)&&n.aIsStrong||(t.graveyardPosition=t.graveyardPosition._getTransformedByMergeOperation(e)),[t]}),Sd(mc,lc,(t,e,n)=>{const i=Gs._createFromPositionAndShift(e.sourcePosition,e.howMany);return"remove"==e.type&&!n.bWasUndone&&!n.forceWeakRemove&&t.deletionPosition.hasSameParentAs(e.sourcePosition)&&i.containsPosition(t.sourcePosition)?[new Cd(0)]:(t.sourcePosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.sourcePosition.hasSameParentAs(e.sourcePosition)&&(t.howMany-=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByMoveOperation(e),t.targetPosition=t.targetPosition._getTransformedByMoveOperation(e),t.graveyardPosition.isEqual(e.targetPosition)||(t.graveyardPosition=t.graveyardPosition._getTransformedByMoveOperation(e)),[t])}),Sd(mc,gc,(t,e,n)=>{if(e.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),t.deletionPosition.isEqual(e.graveyardPosition)&&(t.howMany=e.howMany)),t.targetPosition.isEqual(e.splitPosition)){const i=0!=e.howMany,o=e.graveyardPosition&&t.deletionPosition.isEqual(e.graveyardPosition);if(i||o||"mergeTargetNotMoved"==n.abRelation)return t.sourcePosition=t.sourcePosition._getTransformedBySplitOperation(e),[t]}if(t.sourcePosition.isEqual(e.splitPosition)){if("mergeSourceNotMoved"==n.abRelation)return t.howMany=0,t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t];if("mergeSameElement"==n.abRelation||t.sourcePosition.offset>0)return t.sourcePosition=e.moveTargetPosition.clone(),t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t]}return t.sourcePosition.hasSameParentAs(e.splitPosition)&&(t.howMany=e.splitPosition.offset),t.sourcePosition=t.sourcePosition._getTransformedBySplitOperation(e),t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t]}),Sd(lc,dc,(t,e)=>{const n=Gs._createFromPositionAndShift(t.sourcePosition,t.howMany)._getTransformedByInsertOperation(e,!1)[0];return t.sourcePosition=n.start,t.howMany=n.end.offset-n.start.offset,t.targetPosition.isEqual(e.position)||(t.targetPosition=t.targetPosition._getTransformedByInsertOperation(e)),[t]}),Sd(lc,lc,(t,e,n)=>{const i=Gs._createFromPositionAndShift(t.sourcePosition,t.howMany),o=Gs._createFromPositionAndShift(e.sourcePosition,e.howMany);let r,s=n.aIsStrong,a=!n.aIsStrong;if("insertBefore"==n.abRelation||"insertAfter"==n.baRelation?a=!0:"insertAfter"!=n.abRelation&&"insertBefore"!=n.baRelation||(a=!1),r=t.targetPosition.isEqual(e.targetPosition)&&a?t.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):t.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Ld(t,e)&&Ld(e,t))return[e.getReversed()];if(i.containsPosition(e.targetPosition)&&i.containsRange(o,!0))return i.start=i.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),i.end=i.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),jd([i],r);if(o.containsPosition(t.targetPosition)&&o.containsRange(i,!0))return i.start=i.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),i.end=i.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),jd([i],r);const c=li(t.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if("prefix"==c||"extension"==c)return i.start=i.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),i.end=i.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),jd([i],r);"remove"!=t.type||"remove"==e.type||n.aWasUndone||n.forceWeakRemove?"remove"==t.type||"remove"!=e.type||n.bWasUndone||n.forceWeakRemove||(s=!1):s=!0;const l=[],d=i.getDifference(o);for(const t of d){t.start=t.start._getTransformedByDeletion(e.sourcePosition,e.howMany),t.end=t.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const n="same"==li(t.start.getParentPath(),e.getMovedRangeStart().getParentPath()),i=t._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,n);l.push(...i)}const h=i.getIntersection(o);return null!==h&&s&&(h.start=h.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),h.end=h.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),0===l.length?l.push(h):1==l.length?o.start.isBefore(i.start)||o.start.isEqual(i.start)?l.unshift(h):l.push(h):l.splice(1,0,h)),0===l.length?[new Cd(t.baseVersion)]:jd(l,r)}),Sd(lc,gc,(t,e,n)=>{let i=t.targetPosition.clone();t.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&"moveTargetAfter"!=n.abRelation||(i=t.targetPosition._getTransformedBySplitOperation(e));const o=Gs._createFromPositionAndShift(t.sourcePosition,t.howMany);if(o.end.isEqual(e.insertionPosition))return e.graveyardPosition||t.howMany++,t.targetPosition=i,[t];if(o.start.hasSameParentAs(e.splitPosition)&&o.containsPosition(e.splitPosition)){let t=new Gs(e.splitPosition,o.end);return t=t._getTransformedBySplitOperation(e),jd([new Gs(o.start,e.splitPosition),t],i)}t.targetPosition.isEqual(e.splitPosition)&&"insertAtSource"==n.abRelation&&(i=e.moveTargetPosition),t.targetPosition.isEqual(e.insertionPosition)&&"insertBetween"==n.abRelation&&(i=t.targetPosition);const r=[o._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const i=o.start.isEqual(e.graveyardPosition)||o.containsPosition(e.graveyardPosition);t.howMany>1&&i&&!n.aWasUndone&&r.push(Gs._createFromPositionAndShift(e.insertionPosition,1))}return jd(r,i)}),Sd(lc,mc,(t,e,n)=>{const i=Gs._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.deletionPosition.hasSameParentAs(t.sourcePosition)&&i.containsPosition(e.sourcePosition))if("remove"!=t.type||n.forceWeakRemove){if(1==t.howMany)return n.bWasUndone?(t.sourcePosition=e.graveyardPosition.clone(),t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),[t]):[new Cd(0)]}else if(!n.aWasUndone){const n=[];let i=e.graveyardPosition.clone(),o=e.targetPosition._getTransformedByMergeOperation(e);t.howMany>1&&(n.push(new lc(t.sourcePosition,t.howMany-1,t.targetPosition,0)),i=i._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany-1),o=o._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany-1));const r=e.deletionPosition._getCombined(t.sourcePosition,t.targetPosition),s=new lc(i,1,r,0),a=s.getMovedRangeStart().path.slice();a.push(0);const c=new $s(s.targetPosition.root,a);o=o._getTransformedByMove(i,r,1);const l=new lc(o,e.howMany,c,0);return n.push(s),n.push(l),n}const o=Gs._createFromPositionAndShift(t.sourcePosition,t.howMany)._getTransformedByMergeOperation(e);return t.sourcePosition=o.start,t.howMany=o.end.offset-o.start.offset,t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),[t]}),Sd(uc,dc,(t,e)=>(t.position=t.position._getTransformedByInsertOperation(e),[t])),Sd(uc,mc,(t,e)=>t.position.isEqual(e.deletionPosition)?(t.position=e.graveyardPosition.clone(),t.position.stickiness="toNext",[t]):(t.position=t.position._getTransformedByMergeOperation(e),[t])),Sd(uc,lc,(t,e)=>(t.position=t.position._getTransformedByMoveOperation(e),[t])),Sd(uc,uc,(t,e,n)=>{if(t.position.isEqual(e.position)){if(!n.aIsStrong)return[new Cd(0)];t.oldName=e.newName}return[t]}),Sd(uc,gc,(t,e)=>{if("same"==li(t.position.path,e.splitPosition.getParentPath())&&!e.graveyardPosition){return[t,new uc(t.position.getShiftedBy(1),t.oldName,t.newName,0)]}return t.position=t.position._getTransformedBySplitOperation(e),[t]}),Sd(fc,fc,(t,e,n)=>{if(t.root===e.root&&t.key===e.key){if(!n.aIsStrong||t.newValue===e.newValue)return[new Cd(0)];t.oldValue=e.newValue}return[t]}),Sd(gc,dc,(t,e)=>(t.splitPosition.hasSameParentAs(e.position)&&t.splitPosition.offset<e.position.offset&&(t.howMany+=e.howMany),t.splitPosition=t.splitPosition._getTransformedByInsertOperation(e),t.insertionPosition=gc.getInsertionPosition(t.splitPosition),[t])),Sd(gc,mc,(t,e,n)=>{if(!t.graveyardPosition&&!n.bWasUndone&&t.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const i=new $s(e.graveyardPosition.root,n),o=gc.getInsertionPosition(new $s(e.graveyardPosition.root,n)),r=new gc(i,0,null,0);return r.insertionPosition=o,t.splitPosition=t.splitPosition._getTransformedByMergeOperation(e),t.insertionPosition=gc.getInsertionPosition(t.splitPosition),t.graveyardPosition=r.insertionPosition.clone(),t.graveyardPosition.stickiness="toNext",[r,t]}return t.splitPosition.hasSameParentAs(e.deletionPosition)&&!t.splitPosition.isAfter(e.deletionPosition)&&t.howMany--,t.splitPosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.splitPosition=t.splitPosition._getTransformedByMergeOperation(e),t.insertionPosition=gc.getInsertionPosition(t.splitPosition),t.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedByMergeOperation(e)),[t]}),Sd(gc,lc,(t,e,n)=>{const i=Gs._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.graveyardPosition){const o=i.start.isEqual(t.graveyardPosition)||i.containsPosition(t.graveyardPosition);if(!n.bWasUndone&&o){const n=t.splitPosition._getTransformedByMoveOperation(e),i=t.graveyardPosition._getTransformedByMoveOperation(e),o=i.path.slice();o.push(0);const r=new $s(i.root,o);return[new lc(n,t.howMany,r,0)]}t.graveyardPosition=t.graveyardPosition._getTransformedByMoveOperation(e)}if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&i.containsPosition(t.splitPosition)){const n=e.howMany-(t.splitPosition.offset-e.sourcePosition.offset);return t.howMany-=n,t.splitPosition.hasSameParentAs(e.targetPosition)&&t.splitPosition.offset<e.targetPosition.offset&&(t.howMany+=e.howMany),t.splitPosition=e.sourcePosition.clone(),t.insertionPosition=gc.getInsertionPosition(t.splitPosition),[t]}return!t.splitPosition.isEqual(e.targetPosition)||"insertAtSource"!=n.baRelation&&"splitBefore"!=n.abRelation?(e.sourcePosition.isEqual(e.targetPosition)||(t.splitPosition.hasSameParentAs(e.sourcePosition)&&t.splitPosition.offset<=e.sourcePosition.offset&&(t.howMany-=e.howMany),t.splitPosition.hasSameParentAs(e.targetPosition)&&t.splitPosition.offset<e.targetPosition.offset&&(t.howMany+=e.howMany)),t.splitPosition.stickiness="toNone",t.splitPosition=t.splitPosition._getTransformedByMoveOperation(e),t.splitPosition.stickiness="toNext",t.graveyardPosition?t.insertionPosition=t.insertionPosition._getTransformedByMoveOperation(e):t.insertionPosition=gc.getInsertionPosition(t.splitPosition),[t]):(t.howMany+=e.howMany,t.splitPosition=t.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),t.insertionPosition=gc.getInsertionPosition(t.splitPosition),[t])}),Sd(gc,gc,(t,e,n)=>{if(t.splitPosition.isEqual(e.splitPosition)){if(!t.graveyardPosition&&!e.graveyardPosition)return[new Cd(0)];if(t.graveyardPosition&&e.graveyardPosition&&t.graveyardPosition.isEqual(e.graveyardPosition))return[new Cd(0)];if("splitBefore"==n.abRelation)return t.howMany=0,t.graveyardPosition=t.graveyardPosition._getTransformedBySplitOperation(e),[t]}if(t.graveyardPosition&&e.graveyardPosition&&t.graveyardPosition.isEqual(e.graveyardPosition)){const i="$graveyard"==t.splitPosition.root.rootName,o="$graveyard"==e.splitPosition.root.rootName;if(o&&!i||!(i&&!o)&&n.aIsStrong){const n=[];return e.howMany&&n.push(new lc(e.moveTargetPosition,e.howMany,e.splitPosition,0)),t.howMany&&n.push(new lc(t.splitPosition,t.howMany,t.moveTargetPosition,0)),n}return[new Cd(0)]}if(t.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedBySplitOperation(e)),t.splitPosition.isEqual(e.insertionPosition)&&"splitBefore"==n.abRelation)return t.howMany++,[t];if(e.splitPosition.isEqual(t.insertionPosition)&&"splitBefore"==n.baRelation){const n=e.insertionPosition.path.slice();n.push(0);const i=new $s(e.insertionPosition.root,n);return[t,new lc(t.insertionPosition,1,i,0)]}return t.splitPosition.hasSameParentAs(e.splitPosition)&&t.splitPosition.offset<e.splitPosition.offset&&(t.howMany-=e.howMany),t.splitPosition=t.splitPosition._getTransformedBySplitOperation(e),t.insertionPosition=gc.getInsertionPosition(t.splitPosition),[t]});class Vd extends ed{constructor(t){super(t),this._stack=[],this._createdBatches=new WeakSet,this.refresh()}refresh(){this.isEnabled=this._stack.length>0}addBatch(t){const e=this.editor.model.document.selection,n={ranges:e.hasOwnRange?Array.from(e.getRanges()):[],isBackward:e.isBackward};this._stack.push({batch:t,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(t,e,n){const i=this.editor.model,o=i.document,r=[];for(const e of t){const t=zd(e,n).find(t=>t.start.root!=o.graveyard);t&&r.push(t)}r.length&&i.change(t=>{t.setSelection(r,{backward:e})})}_undo(t,e){const n=this.editor.model,i=n.document;this._createdBatches.add(e);const o=t.operations.slice().filter(t=>t.isDocumentOperation);o.reverse();for(const t of o){const o=t.baseVersion+1,r=Array.from(i.history.getOperations(o)),s=Id([t.getReversed()],r,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(const o of s)e.addOperation(o),n.applyOperation(o),i.history.setOperationAsUndone(t,o)}}}function zd(t,e){const n=t.getTransformedByOperations(e);n.sort((t,e)=>t.start.isBefore(e.start)?-1:1);for(let t=1;t<n.length;t++){const e=n[t-1],i=n[t];e.end.isTouching(i.start)&&(e.end=i.end,n.splice(t,1),t--)}return n}class Bd extends Vd{execute(t=null){const e=t?this._stack.findIndex(e=>e.batch==t):this._stack.length-1,n=this._stack.splice(e,1)[0],i=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(i,()=>{this._undo(n.batch,i);const t=this.editor.model.document.history.getOperations(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,t),this.fire("revert",n.batch,i)}),this.refresh()}}class Fd extends Vd{execute(){const t=this._stack.pop(),e=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(e,()=>{const n=t.batch.operations[t.batch.operations.length-1].baseVersion+1,i=this.editor.model.document.history.getOperations(n);this._restoreSelection(t.selection.ranges,t.selection.isBackward,i),this._undo(t.batch,e)}),this.refresh()}}class Ud extends Kl{constructor(t){super(t),this._batchRegistry=new WeakSet}init(){const t=this.editor;this._undoCommand=new Bd(t),this._redoCommand=new Fd(t),t.commands.add("undo",this._undoCommand),t.commands.add("redo",this._redoCommand),this.listenTo(t.model,"applyOperation",(t,e)=>{const n=e[0];if(!n.isDocumentOperation)return;const i=n.batch,o=this._redoCommand._createdBatches.has(i),r=this._undoCommand._createdBatches.has(i);this._batchRegistry.has(i)||"transparent"==i.type&&!o&&!r||(o?this._undoCommand.addBatch(i):r||(this._undoCommand.addBatch(i),this._redoCommand.clearStack()),this._batchRegistry.add(i))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(t,e,n)=>{this._redoCommand.addBatch(n)}),t.keystrokes.set("CTRL+Z","undo"),t.keystrokes.set("CTRL+Y","redo"),t.keystrokes.set("CTRL+SHIFT+Z","redo")}}n(28);class Hd extends Dl{constructor(){super();const t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const t=(new DOMParser).parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");for(e&&(this.viewBox=e),this.element.innerHTML="";t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}n(30);class qd extends Dl{constructor(t){super(t),this.set("text",""),this.set("position","s");const e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",e.to("position",t=>"ck-tooltip_"+t),e.if("text","ck-hidden",t=>!t.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:e.to("text")}]}]})}}n(32);class Wd extends Dl{constructor(t){super(t);const e=this.bindTemplate,n=Jn();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new Hd,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("isVisible","ck-hidden",t=>!t),e.to("isOn",t=>t?"ck-on":"ck-off"),e.if("withText","ck-button_with-text")],type:e.to("type",t=>t||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,t=>!t),"aria-pressed":e.to("isOn",t=>!!this.isToggleable&&String(t))},children:this.children,on:{mousedown:e.to(t=>{t.preventDefault()}),click:e.to(t=>{this.isEnabled?this.fire("execute"):t.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView)}focus(){this.element.focus()}_createTooltipView(){const t=new qd;return t.bind("text").to(this,"_tooltipString"),t.bind("position").to(this,"tooltipPosition"),t}_createLabelView(t){const e=new Dl,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:this.bindTemplate.to("label")}]}),e}_getTooltipString(t,e,n){return t?"string"==typeof t?t:(n&&(n=function(t){return mo.isMac?_o(t).map(t=>po[t.toLowerCase()]||t).reduce((t,e)=>t.slice(-1)in go?t+e:t+"+"+e):t}(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var Yd='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',$d='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';class Gd extends Kl{init(){const t=this.editor,e=t.locale,n=t.t,i="ltr"==e.uiLanguageDirection?Yd:$d,o="ltr"==e.uiLanguageDirection?$d:Yd;this._addButton("undo",n("bj"),"CTRL+Z",i),this._addButton("redo",n("bk"),"CTRL+Y",o)}_addButton(t,e,n,i){const o=this.editor;o.ui.componentFactory.add(t,r=>{const s=o.commands.get(t),a=new Wd(r);return a.set({label:e,icon:i,keystroke:n,tooltip:!0}),a.bind("isEnabled").to(s,"isEnabled"),this.listenTo(a,"execute",()=>o.execute(t)),a})}}class Qd extends Kl{static get requires(){return[Ud,Gd]}static get pluginName(){return"Undo"}}class Kd extends Kl{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new oo({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if("string"!=typeof t)throw new Gn.b("pendingactions-add-invalid-message: The message must be a string.",this);const e=Object.create(Fi);return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}class Jd{constructor(){const t=new window.FileReader;this._reader=t,this._data=void 0,this.set("loaded",0),t.onprogress=(t=>{this.loaded=t.loaded})}get error(){return this._reader.error}get data(){return this._data}read(t){const e=this._reader;return this.total=t.size,new Promise((n,i)=>{e.onload=(()=>{const t=e.result;this._data=t,n(t)}),e.onerror=(()=>{i("error")}),e.onabort=(()=>{i("aborted")}),this._reader.readAsDataURL(t)})}abort(){this._reader.abort()}}ci(Jd,Fi);class Zd extends Kl{static get pluginName(){return"FileRepository"}static get requires(){return[Kd]}init(){this.loaders=new oo,this.loaders.on("add",()=>this._updatePendingAction()),this.loaders.on("remove",()=>this._updatePendingAction()),this._loadersMap=new Map,this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0)}getLoader(t){return this._loadersMap.get(t)||null}createLoader(t){if(!this.createUploadAdapter)return console.warn(Object(Gn.a)("filerepository-no-upload-adapter: Upload adapter is not defined.")),null;const e=new Xd(Promise.resolve(t),this.createUploadAdapter);return this.loaders.add(e),this._loadersMap.set(t,e),t instanceof Promise&&e.file.then(t=>{this._loadersMap.set(t,e)}),e.file.catch(()=>{}),e.on("change:uploaded",()=>{let t=0;for(const e of this.loaders)t+=e.uploaded;this.uploaded=t}),e.on("change:uploadTotal",()=>{let t=0;for(const e of this.loaders)e.uploadTotal&&(t+=e.uploadTotal);this.uploadTotal=t}),e}destroyLoader(t){const e=t instanceof Xd?t:this.getLoader(t);e._destroy(),this.loaders.remove(e),this._loadersMap.forEach((t,n)=>{t===e&&this._loadersMap.delete(n)})}_updatePendingAction(){const t=this.editor.plugins.get(Kd);if(this.loaders.length){if(!this._pendingAction){const e=this.editor.t,n=t=>`${e("aw")} ${parseInt(t)}%.`;this._pendingAction=t.add(n(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",n)}}else t.remove(this._pendingAction),this._pendingAction=null}}ci(Zd,Fi);class Xd{constructor(t,e){this.id=Jn(),this._filePromiseWrapper=this._createFilePromiseWrapper(t),this._adapter=e(this),this._reader=new Jd,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then(t=>this._filePromiseWrapper?t:null):Promise.resolve(null)}get data(){return this._reader.data}read(){if("idle"!=this.status)throw new Gn.b("filerepository-read-wrong-status: You cannot call read if the status is different than idle.",this);return this.status="reading",this._filePromiseWrapper.promise.then(t=>this._reader.read(t)).then(t=>(this.status="idle",t)).catch(t=>{if("aborted"===t)throw this.status="aborted","aborted";throw this.status="error",this._reader.error?this._reader.error:t})}upload(){if("idle"!=this.status)throw new Gn.b("filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.",this);return this.status="uploading",this._filePromiseWrapper.promise.then(()=>this._adapter.upload()).then(t=>(this.uploadResponse=t,this.status="idle",t)).catch(t=>{if("aborted"===this.status)throw"aborted";throw this.status="error",t})}abort(){const t=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?"reading"==t?this._reader.abort():"uploading"==t&&this._adapter.abort&&this._adapter.abort():this._filePromiseWrapper.rejecter("aborted"),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(t){const e={};return e.promise=new Promise((n,i)=>{e.resolver=n,e.rejecter=i,e.isFulfilled=!1,t.then(t=>{e.isFulfilled=!0,n(t)}).catch(t=>{e.isFulfilled=!0,i(t)})}),e}}ci(Xd,Fi);const th="ckCsrfToken",eh=40,nh="abcdefghijklmnopqrstuvwxyz0123456789";function ih(){let t=function(t){t=t.toLowerCase();const e=document.cookie.split(";");for(const n of e){const e=n.split("="),i=decodeURIComponent(e[0].trim().toLowerCase());if(i===t)return decodeURIComponent(e[1])}return null}(th);return t&&t.length==eh||(t=function(t){let e="";const n=new Uint8Array(t);window.crypto.getRandomValues(n);for(let t=0;t<n.length;t++){const i=nh.charAt(n[t]%nh.length);e+=Math.random()>.5?i.toUpperCase():i}return e}(eh),function(t,e){document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+";path=/"}(th,t)),t}class oh extends Kl{static get requires(){return[Zd]}static get pluginName(){return"CKFinderUploadAdapter"}init(){const t=this.editor.config.get("ckfinder.uploadUrl");t&&(this.editor.plugins.get(Zd).createUploadAdapter=(e=>new rh(e,t,this.editor.t)))}}class rh{constructor(t,e,n){this.loader=t,this.url=e,this.t=n}upload(){return this.loader.file.then(t=>new Promise((e,n)=>{this._initRequest(),this._initListeners(e,n,t),this._sendRequest(t)}))}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const t=this.xhr=new XMLHttpRequest;t.open("POST",this.url,!0),t.responseType="json"}_initListeners(t,e,n){const i=this.xhr,o=this.loader,r=(0,this.t)("a")+` ${n.name}.`;i.addEventListener("error",()=>e(r)),i.addEventListener("abort",()=>e()),i.addEventListener("load",()=>{const n=i.response;if(!n||!n.uploaded)return e(n&&n.error&&n.error.message?n.error.message:r);t({default:n.url})}),i.upload&&i.upload.addEventListener("progress",t=>{t.lengthComputable&&(o.uploadTotal=t.total,o.uploaded=t.loaded)})}_sendRequest(t){const e=new FormData;e.append("upload",t),e.append("ckCsrfToken",ih()),this.xhr.send(e)}}class sh{constructor(t,e,n){let i,o=null;"function"==typeof n?i=n:(o=t.commands.get(n),i=(()=>{t.execute(n)})),t.model.document.on("change",(n,r)=>{if(o&&!o.isEnabled)return;if("transparent"==r.type)return;const s=Array.from(t.model.document.differ.getChanges()),a=s[0];if(1!=s.length||"insert"!==a.type||"$text"!=a.name||1!=a.length)return;const c=a.position.textNode||a.position.nodeAfter;if(!c.parent.is("paragraph"))return;const l=e.exec(c.data);l&&t.model.enqueueChange(t=>{const e=t.createPositionAt(c.parent,0),n=t.createPositionAt(c.parent,l[0].length),o=new oa(e,n);!1!==i({match:l})&&t.remove(o),o.detach()})})}}class ah{constructor(t,e,n){let i,o,r,s;e instanceof RegExp?i=e:r=e,"string"==typeof n?o=n:s=n,r=r||(t=>{let e;const n=[],o=[];for(;null!==(e=i.exec(t))&&!(e&&e.length<4);){let{index:t,1:i,2:r,3:s}=e;const a=i+r+s,c=[t+=e[0].length-a.length,t+i.length],l=[t+i.length+r.length,t+i.length+r.length+s.length];n.push(c),n.push(l),o.push([t+i.length,t+i.length+r.length])}return{remove:n,format:o}}),s=s||((e,n)=>{const i=t.model.schema.getValidRanges(n,o);for(const t of i)e.setAttribute(o,!0,t);e.removeSelectionAttribute(o)}),t.model.document.on("change",(e,n)=>{if("transparent"==n.type)return;const i=t.model.document.selection;if(!i.isCollapsed)return;const o=Array.from(t.model.document.differ.getChanges()),a=o[0];if(1!=o.length||"insert"!==a.type||"$text"!=a.name||1!=a.length)return;const c=i.focus.parent,l=function(t){return Array.from(t.getChildren()).reduce((t,e)=>t+e.data,"")}(c).slice(0,i.focus.offset),d=r(l),h=ch(c,d.format,t.model),u=ch(c,d.remove,t.model);h.length&&u.length&&t.model.enqueueChange(t=>{if(!1!==s(t,h))for(const e of u.reverse())t.remove(e)})})}}function ch(t,e,n){return e.filter(t=>void 0!==t[0]&&void 0!==t[1]).map(e=>n.createRange(n.createPositionAt(t,e[0]),n.createPositionAt(t,e[1])))}function lh(t,e){return(n,i)=>{if(!t.commands.get(e).isEnabled)return!1;const o=t.model.schema.getValidRanges(i,e);for(const t of o)n.setAttribute(e,!0,t);n.removeSelectionAttribute(e)}}class dh extends ed{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,n=e.document.selection,i=void 0===t.forceValue?!this.value:t.forceValue;e.change(t=>{if(n.isCollapsed)i?t.setSelectionAttribute(this.attributeKey,!0):t.removeSelectionAttribute(this.attributeKey);else{const o=e.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const e of o)i?t.setAttribute(this.attributeKey,i,e):t.removeAttribute(this.attributeKey,e)}})}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,n=t.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const t of n.getRanges())for(const n of t.getItems())if(e.checkAttribute(n,this.attributeKey))return n.hasAttribute(this.attributeKey);return!1}}const hh="bold";class uh extends Kl{init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:hh}),t.model.schema.setAttributeProperties(hh,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:hh,view:"strong",upcastAlso:["b",{styles:{"font-weight":"bold"}}]}),t.commands.add(hh,new dh(t,hh)),t.keystrokes.set("CTRL+B",hh)}}var fh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>';const mh="bold";class gh extends Kl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(mh,n=>{const i=t.commands.get(mh),o=new Wd(n);return o.set({label:e("d"),icon:fh,keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>t.execute(mh)),o})}}const ph="italic";class bh extends Kl{init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:ph}),t.model.schema.setAttributeProperties(ph,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:ph,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(ph,new dh(t,ph)),t.keystrokes.set("CTRL+I",ph)}}var wh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>';const kh="italic";class _h extends Kl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(kh,n=>{const i=t.commands.get(kh),o=new Wd(n);return o.set({label:e("e"),icon:wh,keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>t.execute(kh)),o})}}function vh(t){const e=t.next();return e.done?null:e.value}class yh extends ed{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const e=this.editor.model,n=e.schema,i=e.document.selection,o=Array.from(i.getTopMostBlocks()),r=void 0===t.forceValue?!this.value:t.forceValue;e.change(t=>{if(r){const e=o.filter(t=>xh(t)||Th(n,t));this._applyQuote(t,e)}else this._removeQuote(t,o.filter(xh))})}_getValue(){const t=vh(this.editor.model.document.selection.getTopMostBlocks());return!(!t||!xh(t))}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=vh(t.getSelectedBlocks());return!!n&&Th(e,n)}_removeQuote(t,e){Ah(t,e).reverse().forEach(e=>{if(e.start.isAtStart&&e.end.isAtEnd)return void t.unwrap(e.start.parent);if(e.start.isAtStart){const n=t.createPositionBefore(e.start.parent);return void t.move(e,n)}e.end.isAtEnd||t.split(e.end);const n=t.createPositionAfter(e.end.parent);t.move(e,n)})}_applyQuote(t,e){const n=[];Ah(t,e).reverse().forEach(e=>{let i=xh(e.start);i||(i=t.createElement("blockQuote"),t.wrap(e,i)),n.push(i)}),n.reverse().reduce((e,n)=>e.nextSibling==n?(t.merge(t.createPositionAfter(e)),e):n)}}function xh(t){return"blockQuote"==t.parent.name?t.parent:null}function Ah(t,e){let n,i=0;const o=[];for(;i<e.length;){const r=e[i],s=e[i+1];n||(n=t.createPositionBefore(r)),s&&r.nextSibling==s||(o.push(t.createRange(n,t.createPositionAfter(r))),n=null),i++}return o}function Th(t,e){const n=t.checkChild(e.parent,"blockQuote"),i=t.checkChild(["$root","blockQuote"],e);return n&&i}class Ch extends Kl{init(){const t=this.editor,e=t.model.schema;t.commands.add("blockQuote",new yh(t)),e.register("blockQuote",{allowWhere:"$block",allowContentOf:"$root"}),e.addChildCheck((t,e)=>{if(t.endsWith("blockQuote")&&"blockQuote"==e.name)return!1}),t.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),t.model.document.registerPostFixer(n=>{const i=t.model.document.differ.getChanges();for(const t of i)if("insert"==t.type){const i=t.position.nodeAfter;if(!i)continue;if(i.is("blockQuote")&&i.isEmpty)return n.remove(i),!0;if(i.is("blockQuote")&&!e.checkChild(t.position,i))return n.unwrap(i),!0;if(i.is("element")){const t=n.createRangeIn(i);for(const i of t.getItems())if(i.is("blockQuote")&&!e.checkChild(n.createPositionBefore(i),i))return n.unwrap(i),!0}}else if("remove"==t.type){const e=t.position.parent;if(e.is("blockQuote")&&e.isEmpty)return n.remove(e),!0}return!1})}afterInit(){const t=this.editor.commands.get("blockQuote");this.listenTo(this.editor.editing.view.document,"enter",(e,n)=>{const i=this.editor.model.document,o=i.selection.getLastPosition().parent;i.selection.isCollapsed&&o.isEmpty&&t.value&&(this.editor.execute("blockQuote"),this.editor.editing.view.scrollToTheSelection(),n.preventDefault(),e.stop())})}}var Ph='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>';n(34);class Sh extends Kl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("blockQuote",n=>{const i=t.commands.get("blockQuote"),o=new Wd(n);return o.set({label:e("f"),icon:Ph,tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>t.execute("blockQuote")),o})}}var Mh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>';class Eh extends Kl{static get pluginName(){return"CKFinderUI"}init(){const t=this.editor,e=t.ui.componentFactory,n=t.t;e.add("ckfinder",e=>{const i=t.commands.get("ckfinder"),o=new Wd(e);return o.set({label:n("g"),icon:Mh,tooltip:!0}),o.bind("isEnabled").to(i),o.on("execute",()=>{t.execute("ckfinder"),t.editing.view.focus()}),o})}}class Ih extends Kl{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=`show:${t.type}`+(t.namespace?`:${t.namespace}`:"");this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class Nh extends ed{constructor(t){super(t),this.stopListening(this.editor.model.document,"change"),this.listenTo(this.editor.model.document,"change",()=>this.refresh(),{priority:"low"})}refresh(){const t=this.editor.commands.get("imageUpload"),e=this.editor.commands.get("link");this.isEnabled=t&&e&&(t.isEnabled||e.isEnabled)}execute(){const t=this.editor,e=this.editor.config.get("ckfinder.openerMethod")||"modal";if("popup"!=e&&"modal"!=e)throw new Gn.b('ckfinder-unknown-openerMethod: The openerMethod config option must by "popup" or "modal".',t);const n=this.editor.config.get("ckfinder.options")||{};n.chooseFiles=!0;const i=n.onInit;n.language||(n.language=t.locale.uiLanguage),n.onInit=(e=>{i&&i(e),e.on("files:choose",n=>{const i=n.data.files.toArray(),o=i.filter(t=>!t.isImage()),r=i.filter(t=>t.isImage());for(const e of o)t.execute("link",e.getUrl());const s=[];for(const t of r){const n=t.getUrl();s.push(n||e.request("file:getProxyUrl",{file:t}))}s.length&&Oh(t,s)}),e.on("file:choose:resizedImage",e=>{const n=e.data.resizedUrl;if(n)Oh(t,[n]);else{const e=t.plugins.get("Notification"),n=t.locale.t;e.showWarning(n("ar"),{title:n("as"),namespace:"ckfinder"})}})}),window.CKFinder[e](n)}}function Oh(t,e){if(t.commands.get("imageUpload").isEnabled)t.execute("imageInsert",{source:e});else{const e=t.plugins.get("Notification"),n=t.locale.t;e.showWarning(n("at"),{title:n("au"),namespace:"ckfinder"})}}class Rh extends Kl{static get pluginName(){return"CKFinderEditing"}static get requires(){return[Ih]}init(){const t=this.editor;t.commands.add("ckfinder",new Nh(t))}}const Dh=/^data:(\S*?);base64,/;class Lh{constructor(t,e,n){if(!t)throw new Gn.b("fileuploader-missing-file: File must be provided as the first argument",null);if(!e)throw new Gn.b("fileuploader-missing-token: Token must be provided as the second argument.",null);if(!n)throw new Gn.b("fileuploader-missing-api-address: Api address must be provided as the third argument.",null);this.file=function(t){if("string"!=typeof t)return!1;const e=t.match(Dh);return!(!e||!e.length)}(t)?function(t,e=512){try{const n=t.match(Dh)[1],i=atob(t.replace(Dh,"")),o=[];for(let t=0;t<i.length;t+=e){const n=i.slice(t,t+e),r=new Array(n.length);for(let t=0;t<n.length;t++)r[t]=n.charCodeAt(t);o.push(new Uint8Array(r))}return new Blob(o,{type:n})}catch(t){throw new Gn.b("fileuploader-decoding-image-data-error: Problem with decoding Base64 image data.",null)}}(t):t,this._token=e,this._apiAddress=n}onProgress(t){return this.on("progress",(e,n)=>t(n)),this}onError(t){return this.once("error",(e,n)=>t(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const t=new XMLHttpRequest;t.open("POST",this._apiAddress),t.setRequestHeader("Authorization",this._token.value),t.responseType="json",this.xhr=t}_attachXHRListeners(){const t=this,e=this.xhr;function n(e){return()=>t.fire("error",e)}e.addEventListener("error",n("Network Error")),e.addEventListener("abort",n("Abort")),e.upload&&e.upload.addEventListener("progress",t=>{t.lengthComputable&&this.fire("progress",{total:t.total,uploaded:t.loaded})}),e.addEventListener("load",()=>{const t=e.status,n=e.response;if(t<200||t>299)return this.fire("error",n.message||n.error)})}_sendRequest(){const t=new FormData,e=this.xhr;return t.append("file",this.file),new Promise((n,i)=>{e.addEventListener("load",()=>{const t=e.status,o=e.response;return t<200||t>299?o.message?i(new Gn.b("fileuploader-uploading-data-failed: Uploading file failed.",this,{message:o.message})):i(o.error):n(o)}),e.addEventListener("error",()=>i(new Error("Network Error"))),e.addEventListener("abort",()=>i(new Error("Abort"))),e.send(t)})}}ci(Lh,ei);const jh={refreshInterval:36e5,autoRefresh:!0};class Vh{constructor(t,e=jh){if(!t)throw new Gn.b("token-missing-token-url: A `tokenUrl` must be provided as the first constructor argument.",this);this.set("value",e.initValue),this._refresh="function"==typeof t?t:()=>(function(t){return new Promise((e,n)=>{const i=new XMLHttpRequest;i.open("GET",t),i.addEventListener("load",()=>{const t=i.status,o=i.response;return t<200||t>299?n(new Gn.b("token-cannot-download-new-token: Cannot download new token from the provided url.",null)):e(o)}),i.addEventListener("error",()=>n(new Error("Network Error"))),i.addEventListener("abort",()=>n(new Error("Abort"))),i.send()})})(t),this._options=Object.assign({},jh,e)}init(){return new Promise((t,e)=>{this._options.autoRefresh&&this._startRefreshing(),this.value?t(this):this._refreshToken().then(t).catch(e)})}_refreshToken(){return this._refresh().then(t=>this.set("value",t)).then(()=>this)}destroy(){this._stopRefreshing()}_startRefreshing(){this._refreshInterval=setInterval(()=>this._refreshToken(),this._options.refreshInterval)}_stopRefreshing(){clearInterval(this._refreshInterval)}static create(t,e=jh){return new Vh(t,e).init()}}ci(Vh,Fi);var zh=Vh;class Bh extends Kl{static get pluginName(){return"CloudServices"}init(){const t=this.editor.config.get("cloudServices")||{};for(const e in t)this[e]=t[e];if(this.tokenUrl)return this.token=new Bh.Token(this.tokenUrl),this.token.init();this.token=null}}Bh.Token=zh;class Fh extends Kl{static get requires(){return[Zd,Bh]}init(){const t=this.editor,e=t.plugins.get(Bh),n=e.token,i=e.uploadUrl;n&&(this._uploadGateway=new Fh._UploadGateway(n,i),t.plugins.get(Zd).createUploadAdapter=(t=>new Uh(this._uploadGateway,t)))}}class Uh{constructor(t,e){this.uploadGateway=t,this.loader=e}upload(){return this.loader.file.then(t=>(this.fileUploader=this.uploadGateway.upload(t),this.fileUploader.on("progress",(t,e)=>{this.loader.uploadTotal=e.total,this.loader.uploaded=e.uploaded}),this.fileUploader.send()))}abort(){this.fileUploader.abort()}}Fh._UploadGateway=class{constructor(t,e){if(!t)throw new Gn.b("uploadgateway-missing-token: Token must be provided.",null);if(!e)throw new Gn.b("uploadgateway-missing-api-address: Api address must be provided.",null);this._token=t,this._apiAddress=e}upload(t){return new Lh(t,this._token,this._apiAddress)}};class Hh extends ur{constructor(t){super(t),this._observedElements=new Set}observe(t,e){this.document.getRoot(e).on("change:children",(e,n)=>{this.view.once("render",()=>this._updateObservedElements(t,n))})}_updateObservedElements(t,e){if(!e.is("element")||e.is("attributeElement"))return;const n=this.view.domConverter.mapViewToDom(e);if(n){for(const t of n.querySelectorAll("img"))this._observedElements.has(t)||(this.listenTo(t,"load",(t,e)=>this._fireEvents(e)),this._observedElements.add(t));for(const e of this._observedElements)t.contains(e)||(this.stopListening(e),this._observedElements.delete(e))}}_fireEvents(t){this.isEnabled&&(this.document.fire("layoutChanged"),this.document.fire("imageLoaded",t))}destroy(){this._observedElements.clear(),super.destroy()}}function qh(t){return n=>{n.on(`attribute:${t}:image`,e)};function e(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const i=n.writer,o=n.mapper.toViewElement(e.item).getChild(0);null!==e.attributeNewValue?i.setAttribute(e.attributeKey,e.attributeNewValue,o):i.removeAttribute(e.attributeKey,o)}}class Wh{constructor(){this._stack=[]}add(t,e){const n=this._stack,i=n[0];this._insertDescriptor(t);const o=n[0];i===o||Yh(i,o)||this.fire("change:top",{oldDescriptor:i,newDescriptor:o,writer:e})}remove(t,e){const n=this._stack,i=n[0];this._removeDescriptor(t);const o=n[0];i===o||Yh(i,o)||this.fire("change:top",{oldDescriptor:i,newDescriptor:o,writer:e})}_insertDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t.id);if(Yh(t,e[n]))return;n>-1&&e.splice(n,1);let i=0;for(;e[i]&&$h(e[i],t);)i++;e.splice(i,0,t)}_removeDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t);n>-1&&e.splice(n,1)}}function Yh(t,e){return t&&e&&t.priority==e.priority&&Gh(t.classes)==Gh(e.classes)}function $h(t,e){return t.priority>e.priority||!(t.priority<e.priority)&&Gh(t.classes)>Gh(e.classes)}function Gh(t){return Array.isArray(t)?t.sort().join(","):t}ci(Wh,ei);var Qh='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>';const Kh="ck-widget",Jh="ck-widget_selected";function Zh(t){return!!t.is("element")&&!!t.getCustomProperty("widget")}function Xh(t,e,n={}){return mo.isEdge||e.setAttribute("contenteditable","false",t),e.addClass(Kh,t),e.setCustomProperty("widget",!0,t),t.getFillerOffset=iu,n.label&&function(t,e,n){n.setCustomProperty("widgetLabel",e,t)}(t,n.label,e),n.hasSelectionHandler&&function(t,e){const n=e.createUIElement("div",{class:"ck ck-widget__selection-handler"},function(t){const e=this.toDomElement(t),n=new Hd;return n.set("content",Qh),n.render(),e.appendChild(n.element),e});e.insert(e.createPositionAt(t,0),n),e.addClass(["ck-widget_with-selection-handler"],t)}(t,e),function(t,e,n,i){const o=new Wh;o.on("change:top",(e,o)=>{o.oldDescriptor&&i(t,o.oldDescriptor,o.writer),o.newDescriptor&&n(t,o.newDescriptor,o.writer)}),e.setCustomProperty("addHighlight",(t,e,n)=>o.add(e,n),t),e.setCustomProperty("removeHighlight",(t,e,n)=>o.remove(e,n),t)}(t,e,(t,e,n)=>n.addClass(i(e.classes),t),(t,e,n)=>n.removeClass(i(e.classes),t)),t;function i(t){return Array.isArray(t)?t:[t]}}function tu(t){const e=t.getCustomProperty("widgetLabel");return e?"function"==typeof e?e():e:""}function eu(t,e){return e.addClass(["ck-editor__editable","ck-editor__nested-editable"],t),mo.isEdge||(e.setAttribute("contenteditable",t.isReadOnly?"false":"true",t),t.on("change:isReadOnly",(n,i,o)=>{e.setAttribute("contenteditable",o?"false":"true",t)})),t.on("change:isFocused",(n,i,o)=>{o?e.addClass("ck-editor__nested-editable_focused",t):e.removeClass("ck-editor__nested-editable_focused",t)}),t}function nu(t,e){const n=t.getSelectedElement();if(n&&e.schema.isBlock(n))return e.createPositionAfter(n);const i=t.getSelectedBlocks().next().value;if(i){if(i.isEmpty)return e.createPositionAt(i,0);const n=e.createPositionAfter(i);return t.focus.isTouching(n)?n:e.createPositionBefore(i)}return t.focus}function iu(){return null}function ou(t){const e=t.getSelectedElement();return e&&function(t){return!!t.getCustomProperty("image")&&Zh(t)}(e)?e:null}function ru(t){return!!t&&t.is("image")}function su(t,e,n={}){const i=t.createElement("image",n),o=nu(e.document.selection,e);e.insertContent(i,o),i.parent&&t.setSelection(i,"on")}function au(t){const e=t.schema,n=t.document.selection;return function(t,e,n){const i=function(t,e){const n=nu(t,e).parent;if(n.isEmpty&&!n.is("$root"))return n.parent;return n}(t,n);return e.checkChild(i,"image")}(n,e,t)&&!function(t,e){const n=t.getSelectedElement();return n&&e.isObject(n)}(n,e)&&function(t){return[...t.focus.getAncestors()].every(t=>!t.is("image"))}(n)}class cu extends ed{refresh(){this.isEnabled=au(this.editor.model)}execute(t){const e=this.editor.model;e.change(n=>{const i=Array.isArray(t.source)?t.source:[t.source];for(const t of i)su(n,e,{src:t})})}}class lu extends Kl{init(){const t=this.editor,e=t.model.schema,n=t.t,i=t.conversion;t.editing.view.addObserver(Hh),e.register("image",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["alt","src","srcset"]}),i.for("dataDowncast").elementToElement({model:"image",view:(t,e)=>du(e)}),i.for("editingDowncast").elementToElement({model:"image",view:(t,e)=>(function(t,e,n){return e.setCustomProperty("image",!0,t),Xh(t,e,{label:function(){const e=t.getChild(0).getAttribute("alt");return e?`${e} ${n}`:n}})})(du(e),e,n("j"))}),i.for("downcast").add(qh("src")).add(qh("alt")).add(function(){return e=>{e.on("attribute:srcset:image",t)};function t(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const i=n.writer,o=n.mapper.toViewElement(e.item).getChild(0);if(null===e.attributeNewValue){const t=e.attributeOldValue;t.data&&(i.removeAttribute("srcset",o),i.removeAttribute("sizes",o),t.width&&i.removeAttribute("width",o))}else{const t=e.attributeNewValue;t.data&&(i.setAttribute("srcset",t.data,o),i.setAttribute("sizes","100vw",o),t.width&&i.setAttribute("width",t.width,o))}}}()),i.for("upcast").elementToElement({view:{name:"img",attributes:{src:!0}},model:(t,e)=>e.createElement("image",{src:t.getAttribute("src")})}).attributeToAttribute({view:{name:"img",key:"alt"},model:"alt"}).attributeToAttribute({view:{name:"img",key:"srcset"},model:{key:"srcset",value:t=>{const e={data:t.getAttribute("srcset")};return t.hasAttribute("width")&&(e.width=t.getAttribute("width")),e}}}).add(function(){return e=>{e.on("element:figure",t)};function t(t,e,n){if(!n.consumable.test(e.viewItem,{name:!0,classes:"image"}))return;const i=Array.from(e.viewItem.getChildren()).find(t=>t.is("img"));if(!i||!i.hasAttribute("src")||!n.consumable.test(i,{name:!0}))return;const o=n.convertItem(i,e.modelCursor),r=vh(o.modelRange.getItems());r&&(n.convertChildren(e.viewItem,n.writer.createPositionAt(r,0)),e.modelRange=o.modelRange,e.modelCursor=o.modelCursor)}}()),t.commands.add("imageInsert",new cu(t))}}function du(t){const e=t.createEmptyElement("img"),n=t.createContainerElement("figure",{class:"image"});return t.insert(t.createPositionAt(n,0),e),n}class hu extends ts{constructor(t){super(t),this.domEventType="mousedown"}onDomEvent(t){this.fire(t.type,t)}}n(36);const uu=ko("Ctrl+A");class fu extends Kl{static get pluginName(){return"Widget"}init(){const t=this.editor.editing.view,e=t.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(t,e,n)=>{this._clearPreviouslySelectedWidgets(n.writer);const i=n.writer,o=i.document.selection,r=o.getSelectedElement();let s=null;for(const t of o.getRanges())for(const e of t){const t=e.item;Zh(t)&&!mu(t,s)&&(i.addClass(Jh,t),this._previouslySelected.add(t),s=t,t==r&&i.setSelection(o.getRanges(),{fake:!0,label:tu(r)}))}},{priority:"low"}),t.addObserver(hu),this.listenTo(e,"mousedown",(...t)=>this._onMousedown(...t)),this.listenTo(e,"keydown",(...t)=>this._onKeydown(...t),{priority:"high"}),this.listenTo(e,"delete",(t,e)=>{this._handleDelete("forward"==e.direction)&&(e.preventDefault(),t.stop())},{priority:"high"})}_onMousedown(t,e){const n=this.editor,i=n.editing.view,o=i.document;let r=e.target;if(function(t){for(;t;){if(t.is("editableElement")&&!t.is("rootElement"))return!0;if(Zh(t))return!1;t=t.parent}return!1}(r)){if(mo.isSafari&&e.domEvent.detail>=3){const t=n.editing.mapper.toModelElement(r);this.editor.model.change(n=>{e.preventDefault(),n.setSelection(t,"in")})}return}if(!Zh(r)&&!(r=r.findAncestor(Zh)))return;e.preventDefault(),o.isFocused||i.focus();const s=n.editing.mapper.toModelElement(r);this._setSelectionOverElement(s)}_onKeydown(t,e){const n=e.keyCode,i=n==bo.arrowdown||n==bo.arrowright;let o=!1;!function(t){return t==bo.arrowright||t==bo.arrowleft||t==bo.arrowup||t==bo.arrowdown}(n)?!function(t){return wo(t)==uu}(e)?n===bo.enter&&(o=this._handleEnterKey(e.shiftKey)):o=this._selectAllNestedEditableContent()||this._selectAllContent():o=this._handleArrowKeys(i),o&&(e.preventDefault(),t.stop())}_handleDelete(t){if(this.editor.isReadOnly)return;const e=this.editor.model.document.selection;if(!e.isCollapsed)return;const n=this._getObjectElementNextToSelection(t);return n?(this.editor.model.change(t=>{let i=e.anchor.parent;for(;i.isEmpty;){const e=i;i=e.parent,t.remove(e)}this._setSelectionOverElement(n)}),!0):void 0}_handleArrowKeys(t){const e=this.editor.model,n=e.schema,i=e.document.selection,o=i.getSelectedElement();if(o&&n.isObject(o)){const o=t?i.getLastPosition():i.getFirstPosition(),r=n.getNearestSelectionRange(o,t?"forward":"backward");return r&&e.change(t=>{t.setSelection(r)}),!0}if(!i.isCollapsed)return;const r=this._getObjectElementNextToSelection(t);return r&&n.isObject(r)?(this._setSelectionOverElement(r),!0):void 0}_handleEnterKey(t){const e=this.editor.model,n=e.document.selection.getSelectedElement();if(function(t,e){return t&&e.isObject(t)&&!e.isInline(t)}(n,e.schema))return e.change(i=>{let o=i.createPositionAt(n,t?"before":"after");const r=i.createElement("paragraph");if(e.schema.isBlock(n.parent)){const t=e.schema.findAllowedParent(o,r);o=i.split(o,t).position}i.insert(r,o),i.setSelection(r,"in")}),!0}_selectAllNestedEditableContent(){const t=this.editor.model,e=t.document.selection,n=t.schema.getLimitElement(e);return e.getFirstRange().root!=n&&(t.change(t=>{t.setSelection(t.createRangeIn(n))}),!0)}_selectAllContent(){const t=this.editor.model,e=this.editor.editing,n=e.view.document.selection.getSelectedElement();if(n&&Zh(n)){const i=e.mapper.toModelElement(n.parent);return t.change(t=>{t.setSelection(t.createRangeIn(i))}),!0}return!1}_setSelectionOverElement(t){this.editor.model.change(e=>{e.setSelection(e.createRangeOn(t))})}_getObjectElementNextToSelection(t){const e=this.editor.model,n=e.schema,i=e.document.selection,o=e.createSelection(i);e.modifySelection(o,{direction:t?"forward":"backward"});const r=t?o.focus.nodeBefore:o.focus.nodeAfter;return r&&n.isObject(r)?r:null}_clearPreviouslySelectedWidgets(t){for(const e of this._previouslySelected)t.removeClass(Jh,e);this._previouslySelected.clear()}}function mu(t,e){return!!e&&Array.from(t.getAncestors()).includes(e)}class gu extends ed{refresh(){const t=this.editor.model.document.selection.getSelectedElement();this.isEnabled=ru(t),ru(t)&&t.hasAttribute("alt")?this.value=t.getAttribute("alt"):this.value=!1}execute(t){const e=this.editor.model,n=e.document.selection.getSelectedElement();e.change(e=>{e.setAttribute("alt",t.newValue,n)})}}class pu extends Kl{init(){this.editor.commands.add("imageTextAlternative",new gu(this.editor))}}function bu({emitter:t,activator:e,callback:n,contextElements:i}){t.listenTo(document,"mousedown",(t,{target:o})=>{if(e()){for(const t of i)if(t.contains(o))return;n()}})}n(38);class wu extends Dl{constructor(t,e){super(t);const n=`ck-input-${Jn()}`,i=`ck-status-${Jn()}`;this.set("label"),this.set("value"),this.set("isReadOnly",!1),this.set("errorText",null),this.set("infoText",null),this.labelView=this._createLabelView(n),this.inputView=this._createInputView(e,n,i),this.statusView=this._createStatusView(i),this.bind("_statusText").to(this,"errorText",this,"infoText",(t,e)=>t||e);const o=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-input",o.if("isReadOnly","ck-disabled")]},children:[this.labelView,this.inputView,this.statusView]})}_createLabelView(t){const e=new jl(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createInputView(t,e,n){const i=new t(this.locale,n);return i.id=e,i.ariaDescribedById=n,i.bind("value").to(this),i.bind("isReadOnly").to(this),i.bind("hasError").to(this,"errorText",t=>!!t),i.on("input",()=>{this.errorText=null}),i}_createStatusView(t){const e=new Dl(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-input__status",n.if("errorText","ck-labeled-input__status_error"),n.if("_statusText","ck-hidden",t=>!t)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}select(){this.inputView.select()}focus(){this.inputView.focus()}}n(40);class ku extends Dl{constructor(t){super(t),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById");const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{type:"text",class:["ck","ck-input","ck-input-text",e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById")},on:{input:e.to("input")}})}render(){super.render();const t=t=>{this.element.value=t||0===t?t:""};t(this.value),this.on("change:value",(e,n,i)=>{t(i)})}select(){this.element.select()}focus(){this.element.focus()}}function _u({view:t}){t.listenTo(t.element,"submit",(e,n)=>{n.preventDefault(),t.fire("submit")},{useCapture:!0})}var vu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',yu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>';n(42);class xu extends Dl{constructor(t){super(t);const e=this.locale.t;this.focusTracker=new sl,this.keystrokes=new Jc,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(e("bd"),vu,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("be"),yu,"ck-button-cancel","cancel"),this._focusables=new gl,this._focusCycler=new ql({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-text-alternative-form"],tabindex:"-1"},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),this.keystrokes.listenTo(this.element),_u({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)})}_createButton(t,e,n,i){const o=new Wd(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}_createLabeledInputView(){const t=this.locale.t,e=new wu(this.locale,ku);return e.label=t("ca"),e.inputView.placeholder=t("ca"),e}}function Au({element:t,target:e,positions:n,limiter:i,fitInViewport:o}){W(e)&&(e=e()),W(i)&&(i=i());const r=function(t){for(;t&&"html"!=t.tagName.toLowerCase();){if("static"!=nr.window.getComputedStyle(t).position)return t;t=t.parentElement}return null}(t.parentElement),s=new As(t),a=new As(e);let c,l;if(i||o){const t=i&&new As(i).getVisible(),e=o&&new As(nr.window);[l,c]=function(t,e,n,i,o){let r,s,a=0,c=0;const l=n.getArea();return t.some(t=>{const[d,h]=Tu(t,e,n);let u,f;if(i)if(o){const t=i.getIntersection(o);u=t?t.getIntersectionArea(h):0}else u=i.getIntersectionArea(h);function m(){c=f,a=u,r=h,s=d}return o&&(f=o.getIntersectionArea(h)),o&&!i?f>c&&m():!o&&i?u>a&&m():f>c&&u>=a?m():f>=c&&u>a&&m(),u===l}),r?[s,r]:null}(n,a,s,t,e)||Tu(n[0],a,s)}else[l,c]=Tu(n[0],a,s);let{left:d,top:h}=Cu(c);if(r){const t=Cu(new As(r)),e=ys(r);d-=t.left,h-=t.top,d+=r.scrollLeft,h+=r.scrollTop,d-=e.left,h-=e.top}return{left:d,top:h,name:l}}function Tu(t,e,n){const{left:i,top:o,name:r}=t(e,n);return[r,n.clone().moveTo(i,o)]}function Cu({left:t,top:e}){const{scrollX:n,scrollY:i}=nr.window;return{left:t+n,top:e+i}}n(44);const Pu=Fl("px"),Su=nr.document.body;class Mu extends Dl{constructor(t){super(t);const e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",t=>`ck-balloon-panel_${t}`),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("class")],style:{top:e.to("top",Pu),left:e.to("left",Pu)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();const e=Mu.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthWest,e.northArrowSouthEast],limiter:Su,fitInViewport:!0},t),i=Mu._getOptimalPosition(n),o=parseInt(i.left),r=parseInt(i.top),s=i.name;Object.assign(this,{top:r,left:o,position:s})}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=(()=>{this.isVisible?this._startPinning(t):this._stopPinning()}),this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);const e=Eu(t.target),n=t.limiter?Eu(t.limiter):Su;this.listenTo(nr.document,"scroll",(i,o)=>{const r=o.target,s=e&&r.contains(e),a=n&&r.contains(n);!s&&!a&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(nr.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(nr.document,"scroll"),this.stopListening(nr.window,"resize")}}function Eu(t){return Wn(t)?t:vs(t)?t.commonAncestorContainer:"function"==typeof t?Eu(t()):null}function Iu(t,e){return t.top-e.height-Mu.arrowVerticalOffset}function Nu(t){return t.bottom+Mu.arrowVerticalOffset}Mu.arrowHorizontalOffset=25,Mu.arrowVerticalOffset=10,Mu._getOptimalPosition=Au,Mu.defaultPositions={northArrowSouth:(t,e)=>({top:Iu(t,e),left:t.left+t.width/2-e.width/2,name:"arrow_s"}),northArrowSouthEast:(t,e)=>({top:Iu(t,e),left:t.left+t.width/2-e.width+Mu.arrowHorizontalOffset,name:"arrow_se"}),northArrowSouthWest:(t,e)=>({top:Iu(t,e),left:t.left+t.width/2-Mu.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouth:(t,e)=>({top:Iu(t,e),left:t.left-e.width/2,name:"arrow_s"}),northWestArrowSouthWest:(t,e)=>({top:Iu(t,e),left:t.left-Mu.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouthEast:(t,e)=>({top:Iu(t,e),left:t.left-e.width+Mu.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouth:(t,e)=>({top:Iu(t,e),left:t.right-e.width/2,name:"arrow_s"}),northEastArrowSouthEast:(t,e)=>({top:Iu(t,e),left:t.right-e.width+Mu.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouthWest:(t,e)=>({top:Iu(t,e),left:t.right-Mu.arrowHorizontalOffset,name:"arrow_sw"}),southArrowNorth:(t,e)=>({top:Nu(t),left:t.left+t.width/2-e.width/2,name:"arrow_n"}),southArrowNorthEast:(t,e)=>({top:Nu(t),left:t.left+t.width/2-e.width+Mu.arrowHorizontalOffset,name:"arrow_ne"}),southArrowNorthWest:(t,e)=>({top:Nu(t),left:t.left+t.width/2-Mu.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorth:(t,e)=>({top:Nu(t),left:t.left-e.width/2,name:"arrow_n"}),southWestArrowNorthWest:(t,e)=>({top:Nu(t),left:t.left-Mu.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorthEast:(t,e)=>({top:Nu(t),left:t.left-e.width+Mu.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorth:(t,e)=>({top:Nu(t),left:t.right-e.width/2,name:"arrow_n"}),southEastArrowNorthEast:(t,e)=>({top:Nu(t),left:t.right-e.width+Mu.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorthWest:(t,e)=>({top:Nu(t),left:t.right-Mu.arrowHorizontalOffset,name:"arrow_nw"})};var Ou='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z" /></svg>\n',Ru='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>\n';n(46),n(48);const Du=Fl("px");class Lu extends Kl{static get pluginName(){return"ContextualBalloon"}constructor(t){super(t),this.positionLimiter=(()=>{const t=this.editor.editing.view,e=t.document.selection.editableElement;return e?t.domConverter.mapViewToDom(e.root):null}),this.set("visibleView",null),this.view=new Mu(t.locale),t.ui.view.body.add(this.view),t.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this.hasView(t.view))throw new Gn.b("contextualballoon-add-view-exist: Cannot add configuration of the same view twice.",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new Gn.b("contextualballoon-remove-view-not-exist: Cannot remove the configuration of a non-existent view.",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(1===e.size?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),1===e.size?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new Gn.b("contextualballoon-showstack-stack-not-exist: Cannot show a stack that does not exist.",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new ju(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(t,e)=>!e&&t>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(t,n)=>{if(n<2)return"";const i=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("bp",[i,n])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new Vu(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,e)=>{return!e&&t>=2?Math.min(t-1,2):0}),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&!t.limiter&&(t=Object.assign({},t,{limiter:this.positionLimiter})),t}}class ju extends Dl{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new sl,this.buttonPrevView=this._createButtonView(e("bq"),Ou),this.buttonNextView=this._createButtonView(e("br"),Ru),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",t=>t?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new Wd(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class Vu extends Dl{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",t=>t?"":"ck-hidden")],style:{top:n.to("top",Du),left:n.to("left",Du),width:n.to("width",Du),height:n.to("height",Du)}},children:this.content}),this.on("change:numberOfPanels",(t,e,n,i)=>{n>i?this._addPanels(n-i):this._removePanels(i-n),this.updatePosition()})}_addPanels(t){for(;t--;){const t=new Dl;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(t){for(;t--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:i}=new As(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:i})}}}var zu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>';function Bu(t){const e=t.editing.view,n=Mu.defaultPositions;return{target:e.domConverter.viewToDom(e.document.selection.getSelectedElement()),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast]}}class Fu extends Kl{static get requires(){return[Lu]}static get pluginName(){return"ImageTextAlternativeUI"}init(){this._createButton(),this._createForm()}destroy(){super.destroy(),this._form.destroy()}_createButton(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageTextAlternative",n=>{const i=t.commands.get("imageTextAlternative"),o=new Wd(n);return o.set({label:e("bs"),icon:zu,tooltip:!0}),o.bind("isEnabled").to(i,"isEnabled"),this.listenTo(o,"execute",()=>this._showForm()),o})}_createForm(){const t=this.editor,e=t.editing.view.document;this._balloon=this.editor.plugins.get("ContextualBalloon"),this._form=new xu(t.locale),this._form.render(),this.listenTo(this._form,"submit",()=>{t.execute("imageTextAlternative",{newValue:this._form.labeledInput.inputView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,"cancel",()=>{this._hideForm(!0)}),this._form.keystrokes.set("Esc",(t,e)=>{this._hideForm(!0),e()}),this.listenTo(t.ui,"update",()=>{ou(e.selection)?this._isVisible&&function(t){const e=t.plugins.get("ContextualBalloon");if(ou(t.editing.view.document.selection)){const n=Bu(t);e.updatePosition(n)}}(t):this._hideForm(!0)}),bu({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;const t=this.editor,e=t.commands.get("imageTextAlternative"),n=this._form.labeledInput;this._isInBalloon||this._balloon.add({view:this._form,position:Bu(t)}),n.value=n.inputView.element.value=e.value||"",this._form.labeledInput.select()}_hideForm(t){this._isInBalloon&&(this._form.focusTracker.isFocused&&this._form.saveButtonView.focus(),this._balloon.remove(this._form),t&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView===this._form}get _isInBalloon(){return this._balloon.hasView(this._form)}}class Uu extends Kl{static get requires(){return[pu,Fu]}static get pluginName(){return"ImageTextAlternative"}}n(50);class Hu extends Kl{static get requires(){return[lu,fu,Uu]}static get pluginName(){return"Image"}}class qu extends Dl{constructor(t){super(t),this.buttonView=new Wd(t),this._fileInputView=new Wu(t),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class Wu extends Dl{constructor(t){super(t),this.set("acceptedType"),this.set("allowMultipleFiles",!1);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:e.to("acceptedType"),multiple:e.to("allowMultipleFiles")},on:{change:e.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}var Yu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>';function $u(t){return/^image\/(jpeg|png|gif|bmp)$/.test(t.type)}function Gu(t){return new Promise((e,n)=>{const i=t.getAttribute("src");fetch(i).then(t=>t.blob()).then(t=>{const o=function(t,e){return t.type?t.type:e.match(/data:(image\/\w+);base64/)?e.match(/data:(image\/\w+);base64/)[1].toLowerCase():"image/jpeg"}(t,i),r=function(t,e,n){try{return new File([t],e,{type:n})}catch(t){return null}}(t,`image.${o.replace("image/","")}`,o);r?e(r):n()}).catch(n)})}class Qu extends Kl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageUpload",n=>{const i=new qu(n),o=t.commands.get("imageUpload");return i.set({acceptedType:"image/*",allowMultipleFiles:!0}),i.buttonView.set({label:e("p"),icon:Yu,tooltip:!0}),i.buttonView.bind("isEnabled").to(o),i.on("done",(e,n)=>{const i=Array.from(n).filter($u);i.length&&t.execute("imageUpload",{file:i})}),i})}}var Ku='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><rect rx="4"/></svg>';n(52),n(54),n(56);class Ju extends Kl{constructor(t){super(t),this.placeholder="data:image/svg+xml;utf8,"+encodeURIComponent(Ku)}init(){this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image",(...t)=>this.uploadStatusChange(...t))}uploadStatusChange(t,e,n){const i=this.editor,o=e.item,r=o.getAttribute("uploadId");if(!n.consumable.consume(e.item,t.name))return;const s=i.plugins.get(Zd),a=r?e.attributeNewValue:null,c=this.placeholder,l=i.editing.mapper.toViewElement(o),d=n.writer;if("reading"==a)return Zu(l,d),void Xu(c,l,d);if("uploading"==a){const t=s.loaders.get(r);return Zu(l,d),void(t?(tf(l,d),function(t,e,n,i){const o=function(t){const e=t.createUIElement("div",{class:"ck-progress-bar"});return t.setCustomProperty("progressBar",!0,e),e}(e);e.insert(e.createPositionAt(t,"end"),o),n.on("change:uploadedPercent",(t,e,n)=>{i.change(t=>{t.setStyle("width",n+"%",o)})})}(l,d,t,i.editing.view),function(t,e,n){if(n.data){const i=t.getChild(0);e.setAttribute("src",n.data,i)}}(l,d,t)):Xu(c,l,d))}"complete"==a&&s.loaders.get(r)&&!mo.isEdge&&function(t,e,n){const i=e.createUIElement("div",{class:"ck-image-upload-complete-icon"});e.insert(e.createPositionAt(t,"end"),i),setTimeout(()=>{n.change(t=>t.remove(t.createRangeOn(i)))},3e3)}(l,d,i.editing.view),function(t,e){nf(t,e,"progressBar")}(l,d),tf(l,d),function(t,e){e.removeClass("ck-appear",t)}(l,d)}}function Zu(t,e){t.hasClass("ck-appear")||e.addClass("ck-appear",t)}function Xu(t,e,n){e.hasClass("ck-image-upload-placeholder")||n.addClass("ck-image-upload-placeholder",e);const i=e.getChild(0);i.getAttribute("src")!==t&&n.setAttribute("src",t,i),ef(e,"placeholder")||n.insert(n.createPositionAfter(i),function(t){const e=t.createUIElement("div",{class:"ck-upload-placeholder-loader"});return t.setCustomProperty("placeholder",!0,e),e}(n))}function tf(t,e){t.hasClass("ck-image-upload-placeholder")&&e.removeClass("ck-image-upload-placeholder",t),nf(t,e,"placeholder")}function ef(t,e){for(const n of t.getChildren())if(n.getCustomProperty(e))return n}function nf(t,e,n){const i=ef(t,n);i&&e.remove(e.createRangeOn(i))}class of{createDocumentFragment(t){return new Ao(t)}createElement(t,e,n){return new ki(t,e,n)}createText(t){return new fi(t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){const e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){const n=t.parent;if(n){const i=n.getChildIndex(t);return this.removeChildren(i,1,n),this.insertChild(i,e,n),!0}return!1}unwrapElement(t){const e=t.parent;if(e){const n=e.getChildIndex(t);this.remove(t),this.insertChild(n,t.getChildren(),e)}}rename(t,e){const n=new ki(t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){T(t)&&void 0===n&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}}class rf extends ed{refresh(){this.isEnabled=au(this.editor.model)}execute(t){const e=this.editor,n=e.model,i=e.plugins.get(Zd);n.change(e=>{const o=Array.isArray(t.file)?t.file:[t.file];for(const t of o)sf(e,n,i,t)})}}function sf(t,e,n,i){const o=n.createLoader(i);o&&su(t,e,{uploadId:o.id})}class af extends Kl{static get requires(){return[Zd,Ih]}init(){const t=this.editor,e=t.model.document,n=t.model.schema,i=t.conversion,o=t.plugins.get(Zd);n.extend("image",{allowAttributes:["uploadId","uploadStatus"]}),t.commands.add("imageUpload",new rf(t)),i.for("upcast").attributeToAttribute({view:{name:"img",key:"uploadId"},model:"uploadId"}),this.listenTo(t.editing.view.document,"clipboardInput",(e,n)=>{if(function(t){return Array.from(t.types).includes("text/html")&&""!==t.getData("text/html")}(n.dataTransfer))return;const i=Array.from(n.dataTransfer.files).filter(t=>!!t&&$u(t)),o=n.targetRanges.map(e=>t.editing.mapper.toModelRange(e));t.model.change(n=>{n.setSelection(o),i.length&&(e.stop(),t.model.enqueueChange("default",()=>{t.execute("imageUpload",{file:i})}))})}),t.plugins.has("Clipboard")&&this.listenTo(t.plugins.get("Clipboard"),"inputTransformation",(e,n)=>{const i=Array.from(t.editing.view.createRangeIn(n.content)).filter(t=>(function(t){return!(!t.is("element","img")||!t.getAttribute("src"))&&(t.getAttribute("src").match(/^data:image\/\w+;base64,/g)||t.getAttribute("src").match(/^blob:/g))})(t.item)&&!t.item.getAttribute("uploadProcessed")).map(t=>({promise:Gu(t.item),imageElement:t.item}));if(!i.length)return;const r=new of;for(const t of i){r.setAttribute("uploadProcessed",!0,t.imageElement);const e=o.createLoader(t.promise);e&&(r.setAttribute("src","",t.imageElement),r.setAttribute("uploadId",e.id,t.imageElement))}}),t.editing.view.document.on("dragover",(t,e)=>{e.preventDefault()}),e.on("change",()=>{const n=e.differ.getChanges({includeChangesInGraveyard:!0});for(const e of n)if("insert"==e.type&&"$text"!=e.name){const n=e.position.nodeAfter,i="$graveyard"==e.position.root.rootName;for(const e of cf(t,n)){const t=e.getAttribute("uploadId");if(!t)continue;const n=o.loaders.get(t);n&&(i?n.abort():"idle"==n.status&&this._readAndUpload(n,e))}}})}_readAndUpload(t,e){const n=this.editor,i=n.model,o=n.locale.t,r=n.plugins.get(Zd),s=n.plugins.get(Ih);return i.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","reading",e)}),t.read().then(()=>{const o=t.upload();if(mo.isSafari){const t=n.editing.mapper.toViewElement(e).getChild(0);n.editing.view.once("render",()=>{if(!t.parent)return;const e=n.editing.view.domConverter.mapViewToDom(t.parent);if(!e)return;const i=e.style.display;e.style.display="none",e._ckHack=e.offsetHeight,e.style.display=i})}return i.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","uploading",e)}),o}).then(t=>{i.enqueueChange("transparent",n=>{n.setAttributes({uploadStatus:"complete",src:t.default},e),this._parseAndSetSrcsetAttributeOnImage(t,e,n)}),a()}).catch(n=>{if("error"!==t.status&&"aborted"!==t.status)throw n;"error"==t.status&&n&&s.showWarning(n,{title:o("al"),namespace:"upload"}),a(),i.enqueueChange("transparent",t=>{t.remove(e)})});function a(){i.enqueueChange("transparent",t=>{t.removeAttribute("uploadId",e),t.removeAttribute("uploadStatus",e)}),r.destroyLoader(t)}}_parseAndSetSrcsetAttributeOnImage(t,e,n){let i=0;const o=Object.keys(t).filter(t=>{const e=parseInt(t,10);if(!isNaN(e))return i=Math.max(i,e),!0}).map(e=>`${t[e]} ${e}w`).join(", ");""!=o&&n.setAttribute("srcset",{data:o,width:i},e)}}function cf(t,e){return Array.from(t.model.createRangeOn(e)).filter(t=>t.item.is("image")).map(t=>t.item)}class lf extends Kl{static get pluginName(){return"ImageUpload"}static get requires(){return[af,Qu,Ju]}}class df extends ed{refresh(){const t=this.editor.model,e=vh(t.document.selection.getSelectedBlocks());this.value=!!e&&e.is("paragraph"),this.isEnabled=!!e&&hf(e,t.schema)}execute(t={}){const e=this.editor.model,n=e.document;e.change(i=>{const o=(t.selection||n.selection).getSelectedBlocks();for(const t of o)!t.is("paragraph")&&hf(t,e.schema)&&i.rename(t,"paragraph")})}}function hf(t,e){return e.checkChild(t.parent,"paragraph")&&!e.isObject(t)}class uf extends Kl{static get pluginName(){return"Paragraph"}init(){const t=this.editor,e=t.model,n=t.data;t.commands.add("paragraph",new df(t)),e.schema.register("paragraph",{inheritAllFrom:"$block"}),t.conversion.elementToElement({model:"paragraph",view:"p"}),t.conversion.for("upcast").elementToElement({model:(t,e)=>uf.paragraphLikeElements.has(t.name)?t.isEmpty?null:e.createElement("paragraph"):null,converterPriority:"low"}),n.upcastDispatcher.on("element",(t,e,n)=>{n.consumable.test(e.viewItem,{name:e.viewItem.name})&&mf(e.viewItem,e.modelCursor,n.schema)&&Object.assign(e,ff(e.viewItem,e.modelCursor,n))},{priority:"low"}),n.upcastDispatcher.on("text",(t,e,n)=>{e.modelRange||mf(e.viewItem,e.modelCursor,n.schema)&&Object.assign(e,ff(e.viewItem,e.modelCursor,n))},{priority:"lowest"}),e.document.registerPostFixer(t=>this._autoparagraphEmptyRoots(t)),t.data.on("ready",()=>{e.enqueueChange("transparent",t=>this._autoparagraphEmptyRoots(t))},{priority:"lowest"})}_autoparagraphEmptyRoots(t){const e=this.editor.model;for(const n of e.document.getRootNames()){const i=e.document.getRoot(n);if(i.isEmpty&&"$graveyard"!=i.rootName&&e.schema.checkChild(i,"paragraph"))return t.insertElement("paragraph",i),!0}}}function ff(t,e,n){const i=n.writer.createElement("paragraph");return n.writer.insert(i,e),n.convertItem(t,n.writer.createPositionAt(i,0))}function mf(t,e,n){const i=n.createContext(e);return!!n.checkChild(i,"paragraph")&&!!n.checkChild(i.push("paragraph"),t)}uf.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td"]);class gf extends ed{constructor(t,e){super(t),this.modelElements=e}refresh(){const t=vh(this.editor.model.document.selection.getSelectedBlocks());this.value=!!t&&this.modelElements.includes(t.name)&&t.name,this.isEnabled=!!t&&this.modelElements.some(e=>pf(t,e,this.editor.model.schema))}execute(t){const e=this.editor.model,n=e.document,i=t.value;e.change(t=>{const o=Array.from(n.selection.getSelectedBlocks()).filter(t=>pf(t,i,e.schema));for(const e of o)e.is(i)||t.rename(e,i)})}}function pf(t,e,n){return n.checkChild(t.parent,e)&&!n.isObject(t)}const bf="paragraph";class wf extends Kl{constructor(t){super(t),t.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[uf]}init(){const t=this.editor,e=t.config.get("heading.options"),n=[];for(const i of e)i.model!==bf&&(t.model.schema.register(i.model,{inheritAllFrom:"$block"}),t.conversion.elementToElement(i),n.push(i.model));this._addDefaultH1Conversion(t),t.commands.add("heading",new gf(t,n))}afterInit(){const t=this.editor,e=t.commands.get("enter"),n=t.config.get("heading.options");e&&this.listenTo(e,"afterExecute",(e,i)=>{const o=t.model.document.selection.getFirstPosition().parent;n.some(t=>o.is(t.model))&&!o.is(bf)&&0===o.childCount&&i.writer.rename(o,bf)})}_addDefaultH1Conversion(t){t.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:Zn.get("low")+1})}}class kf{constructor(t,e){e&&Li(this,e),t&&this.set(t)}}ci(kf,Fi);class _f extends Dl{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",t=>`ck-dropdown__panel_${t}`),e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(t=>t.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const t=this.children.last;"function"==typeof t.focusLast?t.focusLast():t.focus()}}}n(58);class vf extends Dl{constructor(t,e,n){super(t);const i=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("panelPosition","auto"),this.focusTracker=new sl,this.keystrokes=new Jc,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",t=>!t)]},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen&&("auto"===this.panelPosition?this.panelView.position=vf._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element),this.focusTracker.add(this.element);const t=(t,e)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,e())};this.keystrokes.set("arrowdown",(t,e)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,e())}),this.keystrokes.set("arrowright",(t,e)=>{this.isOpen&&e()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:t,southWest:e,northEast:n,northWest:i}=vf.defaultPanelPositions;return"ltr"===this.locale.uiLanguageDirection?[t,e,n,i]:[e,t,i,n]}}vf.defaultPanelPositions={southEast:t=>({top:t.bottom,left:t.left,name:"se"}),southWest:(t,e)=>({top:t.bottom,left:t.left-e.width+t.width,name:"sw"}),northEast:(t,e)=>({top:t.top-e.height,left:t.left,name:"ne"}),northWest:(t,e)=>({top:t.bottom-e.height,left:t.left-e.width+t.width,name:"nw"})},vf._getOptimalPosition=Au;var yf='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class xf extends Wd{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new Hd;return t.content=yf,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}n(60);class Af extends Dl{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new sl,this.keystrokes=new Jc,this._focusCycler=new ql({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Tf extends Dl{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class Cf extends Dl{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}n(62);class Pf extends Wd{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new Dl;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}n(64),n(66);function Sf(t,e=xf){const n=new e(t),i=new _f(t),o=new vf(t,n,i);return n.bind("isEnabled").to(o),n instanceof xf?n.bind("isOn").to(o,"isOpen"):n.arrowView.bind("isOn").to(o,"isOpen"),function(t){(function(t){t.on("render",()=>{bu({emitter:t,activator:()=>t.isOpen,callback:()=>{t.isOpen=!1},contextElements:[t.element]})})})(t),function(t){t.on("execute",e=>{e.source instanceof Pf||(t.isOpen=!1)})}(t),function(t){t.keystrokes.set("arrowdown",(e,n)=>{t.isOpen&&(t.panelView.focus(),n())}),t.keystrokes.set("arrowup",(e,n)=>{t.isOpen&&(t.panelView.focusLast(),n())})}(t)}(o),o}function Mf(t,e){const n=t.locale,i=t.listView=new Af(n);i.items.bindTo(e).using(({type:t,model:e})=>{if("separator"===t)return new Cf(n);if("button"===t||"switchbutton"===t){const i=new Tf(n);let o;return(o="button"===t?new Wd(n):new Pf(n)).bind(...Object.keys(e)).to(e),o.delegate("execute").to(i),i.children.add(o),i}}),t.panelView.children.add(i),i.items.delegate("execute").to(t)}n(10);class Ef extends Kl{init(){const t=this.editor,e=t.t,n=function(t){const e=t.t,n={Paragraph:e("bt"),"Heading 1":e("bu"),"Heading 2":e("bv"),"Heading 3":e("bw"),"Heading 4":e("bx"),"Heading 5":e("by"),"Heading 6":e("bz")};return t.config.get("heading.options").map(t=>{const e=n[t.title];return e&&e!=t.title&&(t.title=e),t})}(t),i=e("h"),o=e("i");t.ui.componentFactory.add("heading",e=>{const r={},s=new oo,a=t.commands.get("heading"),c=t.commands.get("paragraph"),l=[a];for(const t of n){const e={type:"button",model:new kf({label:t.title,class:t.class,withText:!0})};"paragraph"===t.model?(e.model.bind("isOn").to(c,"value"),e.model.set("commandName","paragraph"),l.push(c)):(e.model.bind("isOn").to(a,"value",e=>e===t.model),e.model.set({commandName:"heading",commandValue:t.model})),s.add(e),r[t.model]=t.title}const d=Sf(e);return Mf(d,s),d.buttonView.set({isOn:!1,withText:!0,tooltip:o}),d.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),d.bind("isEnabled").toMany(l,"isEnabled",(...t)=>t.some(t=>t)),d.buttonView.bind("label").to(a,"value",c,"value",(t,e)=>{const n=t||e&&"paragraph";return r[n]?r[n]:i}),this.listenTo(d,"execute",e=>{t.execute(e.source.commandName,e.source.commandValue?{value:e.source.commandValue}:void 0),t.editing.view.focus()}),d})}}function If(t){for(const e of t.getChildren())if(e&&e.is("caption"))return e;return null}function Nf(t){const e=t.parent;return"figcaption"==t.name&&e&&"figure"==e.name&&e.hasClass("image")?{name:!0}:null}class Of extends Kl{init(){const t=this.editor,e=t.editing.view,n=t.model.schema,i=t.data,o=t.editing,r=t.t;n.register("caption",{allowIn:"image",allowContentOf:"$block",isLimit:!0}),t.model.document.registerPostFixer(t=>this._insertMissingModelCaptionElement(t)),t.conversion.for("upcast").elementToElement({view:Nf,model:"caption"});i.downcastDispatcher.on("insert:caption",Rf(t=>t.createContainerElement("figcaption"),!1));const s=function(t,e){return n=>{const i=n.createEditableElement("figcaption");return n.setCustomProperty("imageCaption",!0,i),ll({view:t,element:i,text:e}),eu(i,n)}}(e,r("ak"));o.downcastDispatcher.on("insert:caption",Rf(s)),o.downcastDispatcher.on("insert",this._fixCaptionVisibility(t=>t.item),{priority:"high"}),o.downcastDispatcher.on("remove",this._fixCaptionVisibility(t=>t.position.parent),{priority:"high"}),e.document.registerPostFixer(t=>this._updateCaptionVisibility(t))}_updateCaptionVisibility(t){const e=this.editor.editing.mapper,n=this._lastSelectedCaption;let i;const o=this.editor.model.document.selection,r=o.getSelectedElement();if(r&&r.is("image")){const t=If(r);i=e.toViewElement(t)}const s=Df(o.getFirstPosition().parent);if(s&&(i=e.toViewElement(s)),i)return n?n===i?jf(i,t):(Lf(n,t),this._lastSelectedCaption=i,jf(i,t)):(this._lastSelectedCaption=i,jf(i,t));if(n){const e=Lf(n,t);return this._lastSelectedCaption=null,e}return!1}_fixCaptionVisibility(t){return(e,n,i)=>{const o=Df(t(n)),r=this.editor.editing.mapper,s=i.writer;if(o){const t=r.toViewElement(o);t&&(o.childCount?s.removeClass("ck-hidden",t):s.addClass("ck-hidden",t))}}}_insertMissingModelCaptionElement(t){const e=this.editor.model,n=e.document.differ.getChanges(),i=[];for(const t of n)if("insert"==t.type&&"$text"!=t.name){const n=t.position.nodeAfter;if(n.is("image")&&!If(n)&&i.push(n),!n.is("image")&&n.childCount)for(const t of e.createRangeIn(n).getItems())t.is("image")&&!If(t)&&i.push(t)}for(const e of i)t.appendElement("caption",e);return!!i.length}}function Rf(t,e=!0){return(n,i,o)=>{const r=i.item;if((r.childCount||e)&&ru(r.parent)){if(!o.consumable.consume(i.item,"insert"))return;const e=o.mapper.toViewElement(i.range.start.parent),n=t(o.writer),s=o.writer;r.childCount||s.addClass("ck-hidden",n),function(t,e,n,i){const o=i.writer.createPositionAt(n,"end");i.writer.insert(o,t),i.mapper.bindElements(e,t)}(n,i.item,e,o)}}}function Df(t){const e=t.getAncestors({includeSelf:!0}).find(t=>"caption"==t.name);return e&&e.parent&&"image"==e.parent.name?e:null}function Lf(t,e){return!t.childCount&&!t.hasClass("ck-hidden")&&(e.addClass("ck-hidden",t),!0)}function jf(t,e){return!!t.hasClass("ck-hidden")&&(e.removeClass("ck-hidden",t),!0)}n(69);class Vf extends ed{constructor(t,e){super(t),this.defaultStyle=!1,this.styles=e.reduce((t,e)=>(t[e.name]=e,e.isDefault&&(this.defaultStyle=e.name),t),{})}refresh(){const t=this.editor.model.document.selection.getSelectedElement();if(this.isEnabled=ru(t),t)if(t.hasAttribute("imageStyle")){const e=t.getAttribute("imageStyle");this.value=!!this.styles[e]&&e}else this.value=this.defaultStyle;else this.value=!1}execute(t){const e=t.value,n=this.editor.model,i=n.document.selection.getSelectedElement();n.change(t=>{this.styles[e].isDefault?t.removeAttribute("imageStyle",i):t.setAttribute("imageStyle",e,i)})}}function zf(t,e){for(const n of e)if(n.name===t)return n}var Bf='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm2.5 3V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06c-.585 0-1.06-.407-1.06-.91V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></svg>',Ff='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z"/></svg>',Uf='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm4.5 3V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></svg>',Hf='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm0 3V6h5.674v1.5zm0 3V9h5.674v1.5zm0 3V12h5.674v1.5zm8.5-6V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></svg>';const qf={full:{name:"full",title:"Full size image",icon:Bf,isDefault:!0},side:{name:"side",title:"Side image",icon:Hf,className:"image-style-side"},alignLeft:{name:"alignLeft",title:"Left aligned image",icon:Ff,className:"image-style-align-left"},alignCenter:{name:"alignCenter",title:"Centered image",icon:Uf,className:"image-style-align-center"},alignRight:{name:"alignRight",title:"Right aligned image",icon:Hf,className:"image-style-align-right"}},Wf={full:Bf,left:Ff,right:Hf,center:Uf};function Yf(t=[]){return t.map($f)}function $f(t){if("string"==typeof t){const e=t;qf[e]?t=Object.assign({},qf[e]):(console.warn(Object(Gn.a)("image-style-not-found: There is no such image style of given name."),{name:e}),t={name:e})}else if(qf[t.name]){const e=qf[t.name],n=Object.assign({},t);for(const i in e)t.hasOwnProperty(i)||(n[i]=e[i]);t=n}return"string"==typeof t.icon&&Wf[t.icon]&&(t.icon=Wf[t.icon]),t}class Gf extends Kl{static get pluginName(){return"ImageStyleEditing"}init(){const t=this.editor,e=t.model.schema,n=t.data,i=t.editing;t.config.define("image.styles",["full","side"]);const o=Yf(t.config.get("image.styles"));e.extend("image",{allowAttributes:"imageStyle"});const r=function(t){return(e,n,i)=>{if(!i.consumable.consume(n.item,e.name))return;const o=zf(n.attributeNewValue,t),r=zf(n.attributeOldValue,t),s=i.mapper.toViewElement(n.item),a=i.writer;r&&a.removeClass(r.className,s),o&&a.addClass(o.className,s)}}(o);i.downcastDispatcher.on("attribute:imageStyle:image",r),n.downcastDispatcher.on("attribute:imageStyle:image",r),n.upcastDispatcher.on("element:figure",function(t){const e=t.filter(t=>!t.isDefault);return(t,n,i)=>{if(!n.modelRange)return;const o=n.viewItem,r=vh(n.modelRange.getItems());if(i.schema.checkAttribute(r,"imageStyle"))for(const t of e)i.consumable.consume(o,{classes:t.className})&&i.writer.setAttribute("imageStyle",t.name,r)}}(o),{priority:"low"}),t.commands.add("imageStyle",new Vf(t,o))}}n(71);class Qf extends Kl{static get pluginName(){return"ImageStyleUI"}get localizedDefaultStylesTitles(){const t=this.editor.t;return{"Full size image":t("k"),"Side image":t("l"),"Left aligned image":t("m"),"Centered image":t("n"),"Right aligned image":t("o")}}init(){const t=function(t,e){for(const n of t)e[n.title]&&(n.title=e[n.title]);return t}(Yf(this.editor.config.get("image.styles")),this.localizedDefaultStylesTitles);for(const e of t)this._createButton(e)}_createButton(t){const e=this.editor,n=`imageStyle:${t.name}`;e.ui.componentFactory.add(n,n=>{const i=e.commands.get("imageStyle"),o=new Wd(n);return o.set({label:t.title,icon:t.icon,tooltip:!0,isToggleable:!0}),o.bind("isEnabled").to(i,"isEnabled"),o.bind("isOn").to(i,"value",e=>e===t.name),this.listenTo(o,"execute",()=>e.execute("imageStyle",{value:t.name})),o})}}class Kf extends Kl{static get requires(){return[Lu]}static get pluginName(){return"WidgetToolbarRepository"}init(){const t=this.editor;if(t.plugins.has("BalloonToolbar")){const e=t.plugins.get("BalloonToolbar");this.listenTo(e,"show",e=>{(function(t){const e=t.getSelectedElement();return!(!e||!Zh(e))})(t.editing.view.document.selection)&&e.stop()},{priority:"high"})}this._toolbarDefinitions=new Map,this._balloon=this.editor.plugins.get("ContextualBalloon"),this.listenTo(t.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}destroy(){super.destroy();for(const t of this._toolbarDefinitions.values())t.view.destroy()}register(t,{ariaLabel:e,items:n,getRelatedElement:i,balloonClassName:o="ck-toolbar-container"}){const r=this.editor,s=r.t,a=new $l(r.locale);if(a.ariaLabel=e||s("av"),this._toolbarDefinitions.has(t))throw new Gn.b("widget-toolbar-duplicated: Toolbar with the given id was already added.",this,{toolbarId:t});a.fillFromConfig(n,r.ui.componentFactory),this._toolbarDefinitions.set(t,{view:a,getRelatedElement:i,balloonClassName:o})}_updateToolbarsVisibility(){let t=0,e=null,n=null;for(const i of this._toolbarDefinitions.values()){const o=i.getRelatedElement(this.editor.editing.view.document.selection);if(this.editor.ui.focusTracker.isFocused)if(o){const r=o.getAncestors().length;r>t&&(t=r,e=o,n=i)}else this._isToolbarInBalloon(i)&&this._hideToolbar(i);else this._isToolbarVisible(i)&&this._hideToolbar(i)}n&&this._showToolbar(n,e)}_hideToolbar(t){this._balloon.remove(t.view),this.stopListening(this._balloon,"change:visibleView")}_showToolbar(t,e){this._isToolbarVisible(t)?Jf(this.editor,e):this._isToolbarInBalloon(t)||(this._balloon.add({view:t.view,position:Zf(this.editor,e),balloonClassName:t.balloonClassName}),this.listenTo(this._balloon,"change:visibleView",()=>{for(const t of this._toolbarDefinitions.values())if(this._isToolbarVisible(t)){const e=t.getRelatedElement(this.editor.editing.view.document.selection);Jf(this.editor,e)}}))}_isToolbarVisible(t){return this._balloon.visibleView===t.view}_isToolbarInBalloon(t){return this._balloon.hasView(t.view)}}function Jf(t,e){const n=t.plugins.get("ContextualBalloon"),i=Zf(t,e);n.updatePosition(i)}function Zf(t,e){const n=t.editing.view,i=Mu.defaultPositions;return{target:n.domConverter.mapViewToDom(e),positions:[i.northArrowSouth,i.northArrowSouthWest,i.northArrowSouthEast,i.southArrowNorth,i.southArrowNorthWest,i.southArrowNorthEast]}}function Xf(t,e,n){return n.createRange(tm(t,e,!0,n),tm(t,e,!1,n))}function tm(t,e,n,i){let o=t.textNode||(n?t.nodeBefore:t.nodeAfter),r=null;for(;o&&o.getAttribute("linkHref")==e;)r=o,o=n?o.previousSibling:o.nextSibling;return r?i.createPositionAt(r,n?"before":"after"):t}class em extends ed{constructor(t){super(t),this.manualDecorators=new oo}restoreManualDecoratorStates(){for(const t of this.manualDecorators)t.value=this._getDecoratorStateFromModel(t.id)}refresh(){const t=this.editor.model,e=t.document;this.value=e.selection.getAttribute("linkHref");for(const t of this.manualDecorators)t.value=this._getDecoratorStateFromModel(t.id);this.isEnabled=t.schema.checkAttributeInSelection(e.selection,"linkHref")}execute(t,e={}){const n=this.editor.model,i=n.document.selection,o=[],r=[];for(const t in e)e[t]?o.push(t):r.push(t);n.change(e=>{if(i.isCollapsed){const s=i.getFirstPosition();if(i.hasAttribute("linkHref")){const a=Xf(s,i.getAttribute("linkHref"),n);e.setAttribute("linkHref",t,a),o.forEach(t=>{e.setAttribute(t,!0,a)}),r.forEach(t=>{e.removeAttribute(t,a)}),e.setSelection(a)}else if(""!==t){const r=Vs(i.getAttributes());r.set("linkHref",t),o.forEach(t=>{r.set(t,!0)});const a=e.createText(t,r);n.insertContent(a,s),e.setSelection(e.createRangeOn(a))}}else{const s=n.schema.getValidRanges(i.getRanges(),"linkHref");for(const n of s)e.setAttribute("linkHref",t,n),o.forEach(t=>{e.setAttribute(t,!0,n)}),r.forEach(t=>{e.removeAttribute(t,n)})}})}_getDecoratorStateFromModel(t){return this.editor.model.document.selection.getAttribute(t)||!1}}class nm extends ed{refresh(){this.isEnabled=this.editor.model.document.selection.hasAttribute("linkHref")}execute(){const t=this.editor,e=this.editor.model,n=e.document.selection,i=t.commands.get("link");e.change(t=>{const o=n.isCollapsed?[Xf(n.getFirstPosition(),n.getAttribute("linkHref"),e)]:n.getRanges();for(const e of o)if(t.removeAttribute("linkHref",e),i)for(const n of i.manualDecorators)t.removeAttribute(n.id,e)})}}var im=function(t,e,n){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var r=Array(o);++i<o;)r[i]=t[i+e];return r};var om=function(t,e,n){var i=t.length;return n=void 0===n?i:n,!e&&n>=i?t:im(t,e,n)},rm=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var sm=function(t){return rm.test(t)};var am=function(t){return t.split("")},cm="[\\ud800-\\udfff]",lm="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",dm="\\ud83c[\\udffb-\\udfff]",hm="[^\\ud800-\\udfff]",um="(?:\\ud83c[\\udde6-\\uddff]){2}",fm="[\\ud800-\\udbff][\\udc00-\\udfff]",mm="(?:"+lm+"|"+dm+")"+"?",gm="[\\ufe0e\\ufe0f]?"+mm+("(?:\\u200d(?:"+[hm,um,fm].join("|")+")[\\ufe0e\\ufe0f]?"+mm+")*"),pm="(?:"+[hm+lm+"?",lm,um,fm,cm].join("|")+")",bm=RegExp(dm+"(?="+dm+")|"+pm+gm,"g");var wm=function(t){return t.match(bm)||[]};var km=function(t){return sm(t)?wm(t):am(t)};var _m=function(t,e){for(var n=-1,i=null==t?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o},vm=1/0,ym=o?o.prototype:void 0,xm=ym?ym.toString:void 0;var Am=function t(e){if("string"==typeof e)return e;if(Wt(e))return _m(e,t)+"";if(os(e))return xm?xm.call(e):"";var n=e+"";return"0"==n&&1/e==-vm?"-0":n};var Tm=function(t){return null==t?"":Am(t)};var Cm=function(t){return function(e){e=Tm(e);var n=sm(e)?km(e):void 0,i=n?n[0]:e.charAt(0),o=n?om(n,1).join(""):e.slice(1);return i[t]()+o}}("toUpperCase");const Pm=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Sm=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;function Mm(t,e){const n=e.createAttributeElement("a",{href:t},{priority:5});return e.setCustomProperty("link",!0,n),n}function Em(t){return function(t){return t.replace(Pm,"").match(Sm)}(t=String(t))?t:"#"}class Im{constructor(){this._definitions=new Set}get length(){return this._definitions.size}add(t){Array.isArray(t)?t.forEach(t=>this._definitions.add(t)):this._definitions.add(t)}getDispatcher(){return t=>{t.on("attribute:linkHref",(t,e,n)=>{if(!n.consumable.test(e.item,"attribute:linkHref"))return;const i=n.writer,o=i.document.selection;for(const t of this._definitions){const r=i.createAttributeElement("a",t.attributes,{priority:5});i.setCustomProperty("link",!0,r),t.callback(e.attributeNewValue)?e.item.is("selection")?i.wrap(o.getFirstRange(),r):i.wrap(n.mapper.toViewRange(e.range),r):i.unwrap(n.mapper.toViewRange(e.range),r)}},{priority:"high"})}}}class Nm{constructor({id:t,label:e,attributes:n}){this.id=t,this.set("value"),this.label=e,this.attributes=n}}ci(Nm,Fi);class Om{constructor(t,e,n){this.model=t,this.attribute=n,this._modelSelection=t.document.selection,this._overrideUid=null,this._isNextGravityRestorationSkipped=!1,e.listenTo(this._modelSelection,"change:range",(t,e)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!e.directChange&&Rm(this._modelSelection.getFirstPosition(),n)||this._restoreGravity())})}handleForwardMovement(t,e){const n=this.attribute;if(!(this._isGravityOverridden||t.isAtStart&&this._hasSelectionAttribute))return jm(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._removeSelectionAttribute(),!0):Dm(t,n)?(this._preventCaretMovement(e),this._overrideGravity(),!0):Lm(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._overrideGravity(),!0):void 0}handleBackwardMovement(t,e){const n=this.attribute;return this._isGravityOverridden?jm(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._restoreGravity(),this._removeSelectionAttribute(),!0):(this._preventCaretMovement(e),this._restoreGravity(),t.isAtStart&&this._removeSelectionAttribute(),!0):jm(t,n)&&!this._hasSelectionAttribute?(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtEnd&&Lm(t,n)?this._hasSelectionAttribute?void(Vm(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity())):(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtStart?this._hasSelectionAttribute?(this._removeSelectionAttribute(),this._preventCaretMovement(e),!0):void 0:void(Vm(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity()))}get _isGravityOverridden(){return!!this._overrideUid}get _hasSelectionAttribute(){return this._modelSelection.hasAttribute(this.attribute)}_overrideGravity(){this._overrideUid=this.model.change(t=>t.overrideSelectionGravity())}_restoreGravity(){this.model.change(t=>{t.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}_preventCaretMovement(t){t.preventDefault()}_removeSelectionAttribute(){this.model.change(t=>{t.removeSelectionAttribute(this.attribute)})}_setSelectionAttributeFromTheNodeBefore(t){const e=this.attribute;this.model.change(n=>{n.setSelectionAttribute(this.attribute,t.nodeBefore.getAttribute(e))})}_skipNextAutomaticGravityRestoration(){this._isNextGravityRestorationSkipped=!0}}function Rm(t,e){return Dm(t,e)||Lm(t,e)}function Dm(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e);return!!i&&i.hasAttribute(e)&&(!o||n.getAttribute(e)!==i.getAttribute(e))}function Lm(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e),r=!!i&&i.hasAttribute(e);return o&&(!r||n.getAttribute(e)!==i.getAttribute(e))}function jm(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e);if(!!i&&i.hasAttribute(e)&&o)return i.getAttribute(e)!==n.getAttribute(e)}function Vm(t,e){return Rm(t.getShiftedBy(-1),e)}n(73);const zm="ck-link_selected",Bm="automatic",Fm="manual",Um=/^(https?:)?\/\//;class Hm extends Kl{constructor(t){super(t),t.config.define("link",{addTargetToExternalLinks:!1})}init(){const t=this.editor,e=t.locale;t.model.schema.extend("$text",{allowAttributes:"linkHref"}),t.conversion.for("dataDowncast").attributeToElement({model:"linkHref",view:Mm}),t.conversion.for("editingDowncast").attributeToElement({model:"linkHref",view:(t,e)=>Mm(Em(t),e)}),t.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:t=>t.getAttribute("href")}}),t.commands.add("link",new em(t)),t.commands.add("unlink",new nm(t));const n=function(t,e){const n={"Open in a new tab":t("ax"),Downloadable:t("ay")};return e.forEach(t=>(t.label&&n[t.label]&&(t.label=n[t.label]),t)),e}(t.t,function(t){const e=[];if(t)for(const[n,i]of Object.entries(t)){const t=Object.assign({},i,{id:`link${Cm(n)}`});e.push(t)}return e}(t.config.get("link.decorators")));this._enableAutomaticDecorators(n.filter(t=>t.mode===Bm)),this._enableManualDecorators(n.filter(t=>t.mode===Fm)),function({view:t,model:e,emitter:n,attribute:i,locale:o}){const r=new Om(e,n,i),s=e.document.selection;n.listenTo(t.document,"keydown",(t,e)=>{if(!s.isCollapsed)return;if(e.shiftKey||e.altKey||e.ctrlKey)return;const n=e.keyCode==bo.arrowright,i=e.keyCode==bo.arrowleft;if(!n&&!i)return;const a=s.getFirstPosition(),c=o.contentLanguageDirection;let l;(l="ltr"===c&&n||"rtl"===c&&i?r.handleForwardMovement(a,e):r.handleBackwardMovement(a,e))&&t.stop()},{priority:Zn.get("high")+1})}({view:t.editing.view,model:t.model,emitter:this,attribute:"linkHref",locale:e}),this._setupLinkHighlight()}_enableAutomaticDecorators(t){const e=this.editor,n=new Im;e.config.get("link.addTargetToExternalLinks")&&n.add({id:"linkIsExternal",mode:Bm,callback:t=>Um.test(t),attributes:{target:"_blank",rel:"noopener noreferrer"}}),n.add(t),n.length&&e.conversion.for("downcast").add(n.getDispatcher())}_enableManualDecorators(t){if(!t.length)return;const e=this.editor,n=e.commands.get("link").manualDecorators;t.forEach(t=>{e.model.schema.extend("$text",{allowAttributes:t.id}),n.add(new Nm(t)),e.conversion.for("downcast").attributeToElement({model:t.id,view:(e,i)=>{if(e){const e=n.get(t.id).attributes,o=i.createAttributeElement("a",e,{priority:5});return i.setCustomProperty("link",!0,o),o}}}),e.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:n.get(t.id).attributes},model:{key:t.id}})})}_setupLinkHighlight(){const t=this.editor,e=t.editing.view,n=new Set;e.document.registerPostFixer(e=>{const i=t.model.document.selection;let o=!1;if(i.hasAttribute("linkHref")){const r=Xf(i.getFirstPosition(),i.getAttribute("linkHref"),t.model),s=t.editing.mapper.toViewRange(r);for(const t of s.getItems())t.is("a")&&!t.hasClass(zm)&&(e.addClass(zm,t),n.add(t),o=!0)}return o}),t.conversion.for("editingDowncast").add(t=>{function i(){e.change(t=>{for(const e of n.values())t.removeClass(zm,e),n.delete(e)})}t.on("insert",i,{priority:"highest"}),t.on("remove",i,{priority:"highest"}),t.on("attribute",i,{priority:"highest"}),t.on("selection",i,{priority:"highest"})})}}class qm extends ts{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}n(75);class Wm extends Dl{constructor(t,e=[]){super(t);const n=t.t;this.focusTracker=new sl,this.keystrokes=new Jc,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("bd"),vu,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("be"),yu,"ck-button-cancel","cancel"),this._manualDecoratorSwitches=this._createManualDecoratorSwitches(e),this.children=this._createFormChildren(e),this._focusables=new gl,this._focusCycler=new ql({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}});const i=["ck","ck-link-form"];e.length&&i.push("ck-link-form_layout-vertical"),this.setTemplate({tag:"form",attributes:{class:i,tabindex:"-1"},children:this.children})}getDecoratorSwitchesState(){return Array.from(this._manualDecoratorSwitches).reduce((t,e)=>(t[e.name]=e.isOn,t),{})}render(){super.render(),_u({view:this}),[this.urlInputView,...this._manualDecoratorSwitches,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const t=this.locale.t,e=new wu(this.locale,ku);return e.label=t("bf"),e.inputView.placeholder="https://example.com",e}_createButton(t,e,n,i){const o=new Wd(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}_createManualDecoratorSwitches(t){const e=this.createCollection();for(const n of t){const t=new Pf(this.locale);t.set({name:n.id,label:n.label,withText:!0}),t.bind("isOn").to(n,"value"),t.on("execute",()=>{n.set("value",!t.isOn)}),e.add(t)}return e}_createFormChildren(t){const e=this.createCollection();if(e.add(this.urlInputView),t.length){const t=new Dl;t.setTemplate({tag:"ul",children:this._manualDecoratorSwitches.map(t=>({tag:"li",children:[t],attributes:{class:["ck","ck-list__item"]}})),attributes:{class:["ck","ck-reset","ck-list"]}}),e.add(t)}return e.add(this.saveButtonView),e.add(this.cancelButtonView),e}}var Ym='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',$m='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z"/></svg>';n(77);class Gm extends Dl{constructor(t){super(t);const e=t.t;this.focusTracker=new sl,this.keystrokes=new Jc,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(e("az"),Ym,"unlink"),this.editButtonView=this._createButton(e("ba"),$m,"edit"),this.set("href"),this._focusables=new gl,this._focusCycler=new ql({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render(),[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createButton(t,e,n){const i=new Wd(this.locale);return i.set({label:t,icon:e,tooltip:!0}),i.delegate("execute").to(this,n),i}_createPreviewButton(){const t=new Wd(this.locale),e=this.bindTemplate,n=this.t;return t.set({withText:!0,tooltip:n("bb")}),t.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:e.to("href",t=>t&&Em(t)),target:"_blank"}}),t.bind("label").to(this,"href",t=>t||n("bc")),t.bind("isEnabled").to(this,"href",t=>!!t),t.template.tag="a",t.template.eventListeners={},t}}var Qm='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>';const Km="Ctrl+K";class Jm extends Kl{static get requires(){return[Lu]}static get pluginName(){return"LinkUI"}init(){const t=this.editor;t.editing.view.addObserver(qm),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=t.plugins.get(Lu),this._createToolbarLinkButton(),this._enableUserBalloonInteractions()}destroy(){super.destroy(),this.formView.destroy()}_createActionsView(){const t=this.editor,e=new Gm(t.locale),n=t.commands.get("link"),i=t.commands.get("unlink");return e.bind("href").to(n,"value"),e.editButtonView.bind("isEnabled").to(n),e.unlinkButtonView.bind("isEnabled").to(i),this.listenTo(e,"edit",()=>{this._addFormView()}),this.listenTo(e,"unlink",()=>{t.execute("unlink"),this._hideUI()}),e.keystrokes.set("Esc",(t,e)=>{this._hideUI(),e()}),e.keystrokes.set(Km,(t,e)=>{this._addFormView(),e()}),e}_createFormView(){const t=this.editor,e=t.commands.get("link"),n=new Wm(t.locale,e.manualDecorators);return n.urlInputView.bind("value").to(e,"value"),n.urlInputView.bind("isReadOnly").to(e,"isEnabled",t=>!t),n.saveButtonView.bind("isEnabled").to(e),this.listenTo(n,"submit",()=>{t.execute("link",n.urlInputView.inputView.element.value,n.getDecoratorSwitchesState()),this._closeFormView()}),this.listenTo(n,"cancel",()=>{this._closeFormView()}),n.keystrokes.set("Esc",(t,e)=>{this._closeFormView(),e()}),n}_createToolbarLinkButton(){const t=this.editor,e=t.commands.get("link"),n=t.t;t.keystrokes.set(Km,(t,n)=>{n(),e.isEnabled&&this._showUI(!0)}),t.ui.componentFactory.add("link",t=>{const i=new Wd(t);return i.isEnabled=!0,i.label=n("aq"),i.icon=Qm,i.keystroke=Km,i.tooltip=!0,i.isToggleable=!0,i.bind("isEnabled").to(e,"isEnabled"),i.bind("isOn").to(e,"value",t=>!!t),this.listenTo(i,"execute",()=>this._showUI(!0)),i})}_enableUserBalloonInteractions(){const t=this.editor.editing.view.document;this.listenTo(t,"click",()=>{this._getSelectedLinkElement()&&this._showUI()}),this.editor.keystrokes.set("Tab",(t,e)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),e())},{priority:"high"}),this.editor.keystrokes.set("Esc",(t,e)=>{this._isUIVisible&&(this._hideUI(),e())}),bu({emitter:this.formView,activator:()=>this._isUIInPanel,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;const t=this.editor.commands.get("link");this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this._balloon.visibleView===this.formView&&this.formView.urlInputView.select(),this.formView.urlInputView.inputView.element.value=t.value||""}_closeFormView(){const t=this.editor.commands.get("link");t.restoreManualDecoratorStates(),void 0!==t.value?this._removeFormView():this._hideUI()}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus())}_showUI(t=!1){this.editor.commands.get("link").isEnabled&&(this._getSelectedLinkElement()?(this._areActionsVisible?this._addFormView():this._addActionsView(),t&&this._balloon.showStack("main")):(this._addActionsView(),t&&this._balloon.showStack("main"),this._addFormView()),this._startUpdatingUI())}_hideUI(){if(!this._isUIInPanel)return;const t=this.editor;this.stopListening(t.ui,"update"),this.stopListening(this._balloon,"change:visibleView"),t.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView)}_startUpdatingUI(){const t=this.editor,e=t.editing.view.document;let n=this._getSelectedLinkElement(),i=r();const o=()=>{const t=this._getSelectedLinkElement(),e=r();n&&!t||!n&&e!==i?this._hideUI():this._isUIVisible&&this._balloon.updatePosition(this._getBalloonPositionData()),n=t,i=e};function r(){return e.selection.focus.getAncestors().reverse().find(t=>t.is("element"))}this.listenTo(t.ui,"update",o),this.listenTo(this._balloon,"change:visibleView",o)}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){const t=this.editor.editing.view,e=t.document,n=this._getSelectedLinkElement();return{target:n?t.domConverter.mapViewToDom(n):t.domConverter.viewRangeToDom(e.selection.getFirstRange())}}_getSelectedLinkElement(){const t=this.editor.editing.view,e=t.document.selection;if(e.isCollapsed)return Zm(e.getFirstPosition());{const n=e.getFirstRange().getTrimmed(),i=Zm(n.start),o=Zm(n.end);return i&&i==o&&t.createRangeIn(i).getTrimmed().isEqual(n)?i:null}}}function Zm(t){return t.getAncestors().find(t=>(function(t){return t.is("attributeElement")&&!!t.getCustomProperty("link")})(t))}class Xm extends ed{constructor(t,e){super(t),this.type=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document,n=Array.from(e.selection.getSelectedBlocks()).filter(e=>eg(e,t.schema)),i=!0===this.value;t.change(t=>{if(i){let e=n[n.length-1].nextSibling,i=Number.POSITIVE_INFINITY,o=[];for(;e&&"listItem"==e.name&&0!==e.getAttribute("listIndent");){const t=e.getAttribute("listIndent");t<i&&(i=t);const n=t-i;o.push({element:e,listIndent:n}),e=e.nextSibling}o=o.reverse();for(const e of o)t.setAttribute("listIndent",e.listIndent,e.element)}if(!i){let t=Number.POSITIVE_INFINITY;for(const e of n)e.is("listItem")&&e.getAttribute("listIndent")<t&&(t=e.getAttribute("listIndent"));tg(n,!0,t=0===t?1:t),tg(n,!1,t)}for(const e of n.reverse())i&&"listItem"==e.name?t.rename(e,"paragraph"):i||"listItem"==e.name?i||"listItem"!=e.name||e.getAttribute("listType")==this.type||t.setAttribute("listType",this.type,e):(t.setAttributes({listType:this.type,listIndent:0},e),t.rename(e,"listItem"))})}_getValue(){const t=vh(this.editor.model.document.selection.getSelectedBlocks());return!!t&&t.is("listItem")&&t.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=vh(t.getSelectedBlocks());return!!n&&eg(n,e)}}function tg(t,e,n){const i=e?t[0]:t[t.length-1];if(i.is("listItem")){let o=i[e?"previousSibling":"nextSibling"],r=i.getAttribute("listIndent");for(;o&&o.is("listItem")&&o.getAttribute("listIndent")>=n;)r>o.getAttribute("listIndent")&&(r=o.getAttribute("listIndent")),o.getAttribute("listIndent")==r&&t[e?"unshift":"push"](o),o=o[e?"previousSibling":"nextSibling"]}}function eg(t,e){return e.checkChild(t.parent,"listItem")&&!e.isObject(t)}class ng extends ed{constructor(t,e){super(t),this._indentBy="forward"==e?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document;let n=Array.from(e.selection.getSelectedBlocks());t.change(t=>{const e=n[n.length-1];let i=e.nextSibling;for(;i&&"listItem"==i.name&&i.getAttribute("listIndent")>e.getAttribute("listIndent");)n.push(i),i=i.nextSibling;this._indentBy<0&&(n=n.reverse());for(const e of n){const n=e.getAttribute("listIndent")+this._indentBy;n<0?t.rename(e,"paragraph"):t.setAttribute("listIndent",n,e)}})}_checkEnabled(){const t=vh(this.editor.model.document.selection.getSelectedBlocks());if(!t||!t.is("listItem"))return!1;if(this._indentBy>0){const e=t.getAttribute("listIndent"),n=t.getAttribute("listType");let i=t.previousSibling;for(;i&&i.is("listItem")&&i.getAttribute("listIndent")>=e;){if(i.getAttribute("listIndent")==e)return i.getAttribute("listType")==n;i=i.previousSibling}return!1}return!0}}function ig(t,e){const n=e.mapper,i=e.writer,o="numbered"==t.getAttribute("listType")?"ol":"ul",r=function(t){const e=t.createContainerElement("li");return e.getFillerOffset=lg,e}(i),s=i.createContainerElement(o,null);return i.insert(i.createPositionAt(s,0),r),n.bindElements(t,r),r}function og(t,e,n,i){const o=e.parent,r=n.mapper,s=n.writer;let a=r.toViewPosition(i.createPositionBefore(t));const c=ag(t.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:t.getAttribute("listIndent")}),l=t.previousSibling;if(c&&c.getAttribute("listIndent")==t.getAttribute("listIndent")){const t=r.toViewElement(c);a=s.breakContainer(s.createPositionAfter(t))}else a=l&&"listItem"==l.name?r.toViewPosition(i.createPositionAt(l,"end")):r.toViewPosition(i.createPositionBefore(t));if(a=sg(a),s.insert(a,o),l&&"listItem"==l.name){const t=r.toViewElement(l),n=s.createRange(s.createPositionAt(t,0),a).getWalker({ignoreElementEnd:!0});for(const t of n)if(t.item.is("li")){const i=s.breakContainer(s.createPositionBefore(t.item)),o=t.item.parent,r=s.createPositionAt(e,"end");rg(s,r.nodeBefore,r.nodeAfter),s.move(s.createRangeOn(o),r),n.position=i}}else{const n=o.nextSibling;if(n&&(n.is("ul")||n.is("ol"))){let i=null;for(const e of n.getChildren()){const n=r.toModelElement(e);if(!(n&&n.getAttribute("listIndent")>t.getAttribute("listIndent")))break;i=e}i&&(s.breakContainer(s.createPositionAfter(i)),s.move(s.createRangeOn(i.parent),s.createPositionAt(e,"end")))}}rg(s,o,o.nextSibling),rg(s,o.previousSibling,o)}function rg(t,e,n){return!e||!n||"ul"!=e.name&&"ol"!=e.name?null:e.name!=n.name||e.getAttribute("class")!==n.getAttribute("class")?null:t.mergeContainers(t.createPositionAfter(e))}function sg(t){return t.getLastMatchingPosition(t=>t.item.is("uiElement"))}function ag(t,e){const n=!!e.sameIndent,i=!!e.smallerIndent,o=e.listIndent;let r=t;for(;r&&"listItem"==r.name;){const t=r.getAttribute("listIndent");if(n&&o==t||i&&o>t)return r;r=r.previousSibling}return null}function cg(t,e,n,i){t.ui.componentFactory.add(e,o=>{const r=t.commands.get(e),s=new Wd(o);return s.set({label:n,icon:i,tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),s.on("execute",()=>t.execute(e)),s})}function lg(){const t=!this.isEmpty&&("ul"==this.getChild(0).name||"ol"==this.getChild(0).name);return this.isEmpty||t?0:xi.call(this)}function dg(t){return(e,n,i)=>{const o=i.consumable;if(!o.test(n.item,"insert")||!o.test(n.item,"attribute:listType")||!o.test(n.item,"attribute:listIndent"))return;o.consume(n.item,"insert"),o.consume(n.item,"attribute:listType"),o.consume(n.item,"attribute:listIndent");const r=n.item;og(r,ig(r,i),i,t)}}function hg(t,e,n){if(!n.consumable.consume(e.item,"attribute:listType"))return;const i=n.mapper.toViewElement(e.item),o=n.writer;o.breakContainer(o.createPositionBefore(i)),o.breakContainer(o.createPositionAfter(i));const r=i.parent,s="numbered"==e.attributeNewValue?"ol":"ul";o.rename(s,r)}function ug(t,e,n){const i=n.mapper.toViewElement(e.item).parent,o=n.writer;rg(o,i,i.nextSibling),rg(o,i.previousSibling,i);for(const t of e.item.getChildren())n.consumable.consume(t,"insert")}function fg(t,e,n){if("listItem"!=e.item.name){let t=n.mapper.toViewPosition(e.range.start);const i=n.writer,o=[];for(;("ul"==t.parent.name||"ol"==t.parent.name)&&"li"==(t=i.breakContainer(t)).parent.name;){const e=t,n=i.createPositionAt(t.parent,"end");if(!e.isEqual(n)){const t=i.remove(i.createRange(e,n));o.push(t)}t=i.createPositionAfter(t.parent)}if(o.length>0){for(let e=0;e<o.length;e++){const n=t.nodeBefore;if(t=i.insert(t,o[e]).end,e>0){const e=rg(i,n,n.nextSibling);e&&e.parent==n&&t.offset--}}rg(i,t.nodeBefore,t.nodeAfter)}}}function mg(t,e,n){const i=n.mapper.toViewPosition(e.position),o=i.nodeBefore,r=i.nodeAfter;rg(n.writer,o,r)}function gg(t,e,n){if(n.consumable.consume(e.viewItem,{name:!0})){const t=n.writer,i=this.conversionApi.store,o=t.createElement("listItem");i.indent=i.indent||0,t.setAttribute("listIndent",i.indent,o);const r=e.viewItem.parent&&"ol"==e.viewItem.parent.name?"numbered":"bulleted";t.setAttribute("listType",r,o),i.indent++;const s=n.splitToAllowedParent(o,e.modelCursor);if(!s)return;t.insert(o,s.position);const a=function(t,e,n){const{writer:i,schema:o}=n;let r=i.createPositionAfter(t);for(const s of e)if("ul"==s.name||"ol"==s.name)r=n.convertItem(s,r).modelCursor;else{const e=n.convertItem(s,i.createPositionAt(t,"end")),a=e.modelRange.start.nodeAfter,c=a&&a.is("element")&&!o.checkChild(t,a.name);c&&(t=e.modelCursor.parent.is("listItem")?e.modelCursor.parent:_g(e.modelCursor),r=i.createPositionAfter(t))}return r}(o,e.viewItem.getChildren(),n);i.indent--,e.modelRange=t.createRange(e.modelCursor,a),s.cursorParent?e.modelCursor=t.createPositionAt(s.cursorParent,0):e.modelCursor=e.modelRange.end}}function pg(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){const t=Array.from(e.viewItem.getChildren());for(const e of t)e.is("li")||e._remove()}}function bg(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){if(0===e.viewItem.childCount)return;const t=[...e.viewItem.getChildren()];let n=!1,i=!0;for(const e of t)!n||e.is("ul")||e.is("ol")||e._remove(),e.is("text")?(i&&(e._data=e.data.replace(/^\s+/,"")),(!e.nextSibling||e.nextSibling.is("ul")||e.nextSibling.is("ol"))&&(e._data=e.data.replace(/\s+$/,""))):(e.is("ul")||e.is("ol"))&&(n=!0),i=!1}}function wg(t){return(e,n)=>{if(n.isPhantom)return;const i=n.modelPosition.nodeBefore;if(i&&i.is("listItem")){const e=n.mapper.toViewElement(i),o=e.getAncestors().find(t=>t.is("ul")||t.is("ol")),r=t.createPositionAt(e,0).getWalker();for(const t of r){if("elementStart"==t.type&&t.item.is("li")){n.viewPosition=t.previousPosition;break}if("elementEnd"==t.type&&t.item==o){n.viewPosition=t.nextPosition;break}}}}}function kg(t,[e,n]){let i,o=e.is("documentFragment")?e.getChild(0):e;if(i=n?this.createSelection(n):this.document.selection,o&&o.is("listItem")){const t=i.getFirstPosition();let e=null;if(t.parent.is("listItem")?e=t.parent:t.nodeBefore&&t.nodeBefore.is("listItem")&&(e=t.nodeBefore),e){const t=e.getAttribute("listIndent");if(t>0)for(;o&&o.is("listItem");)o._setAttribute("listIndent",o.getAttribute("listIndent")+t),o=o.nextSibling}}}function _g(t){const e=new qs({startPosition:t});let n;do{n=e.next()}while(!n.value.item.is("listItem"));return n.value.item}function vg(t,e,n,i,o,r){const s=ag(e.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:t,foo:"b"}),a=o.mapper,c=o.writer,l=s?s.getAttribute("listIndent"):null;let d;if(s)if(l==t){const t=a.toViewElement(s).parent;d=c.createPositionAfter(t)}else{const t=r.createPositionAt(s,"end");d=a.toViewPosition(t)}else d=n;d=sg(d);for(const t of[...i.getChildren()])(t.is("ul")||t.is("ol"))&&(d=c.move(c.createRangeOn(t),d).end,rg(c,t,t.nextSibling),rg(c,t.previousSibling,t))}class yg extends Kl{static get requires(){return[uf]}init(){const t=this.editor;t.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});const e=t.data,n=t.editing;t.model.document.registerPostFixer(e=>(function(t,e){const n=t.document.differ.getChanges(),i=new Map;let o=!1;for(const t of n)if("insert"==t.type&&"listItem"==t.name)r(t.position);else if("insert"==t.type&&"listItem"!=t.name){if("$text"!=t.name){const n=t.position.nodeAfter;n.hasAttribute("listIndent")&&(e.removeAttribute("listIndent",n),o=!0),n.hasAttribute("listType")&&(e.removeAttribute("listType",n),o=!0)}r(t.position.getShiftedBy(t.length))}else"remove"==t.type&&"listItem"==t.name?r(t.position):"attribute"==t.type&&"listIndent"==t.attributeKey?r(t.range.start):"attribute"==t.type&&"listType"==t.attributeKey&&r(t.range.start);for(const t of i.values())s(t),a(t);return o;function r(t){const e=t.nodeBefore;if(e&&e.is("listItem")){let n=e;if(i.has(n))return;for(;n.previousSibling&&n.previousSibling.is("listItem");)if(n=n.previousSibling,i.has(n))return;i.set(t.nodeBefore,n)}else{const e=t.nodeAfter;e&&e.is("listItem")&&i.set(e,e)}}function s(t){let n=0,i=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(r>n){let s;null===i?(i=r-n,s=n):(i>r&&(i=r),s=r-i),e.setAttribute("listIndent",s,t),o=!0}else i=null,n=t.getAttribute("listIndent")+1;t=t.nextSibling}}function a(t){let n=[],i=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(i&&i.getAttribute("listIndent")>r&&(n=n.slice(0,r+1)),0!=r)if(n[r]){const i=n[r];t.getAttribute("listType")!=i&&(e.setAttribute("listType",i,t),o=!0)}else n[r]=t.getAttribute("listType");i=t,t=t.nextSibling}}})(t.model,e)),n.mapper.registerViewToModelLength("li",xg),e.mapper.registerViewToModelLength("li",xg),n.mapper.on("modelToViewPosition",wg(n.view)),n.mapper.on("viewToModelPosition",function(t){return(e,n)=>{const i=n.viewPosition,o=i.parent,r=n.mapper;if("ul"==o.name||"ol"==o.name){if(i.isAtEnd){const e=r.toModelElement(i.nodeBefore),o=r.getModelLength(i.nodeBefore);n.modelPosition=t.createPositionBefore(e).getShiftedBy(o)}else{const e=r.toModelElement(i.nodeAfter);n.modelPosition=t.createPositionBefore(e)}e.stop()}else if("li"==o.name&&i.nodeBefore&&("ul"==i.nodeBefore.name||"ol"==i.nodeBefore.name)){const s=r.toModelElement(o);let a=1,c=i.nodeBefore;for(;c&&(c.is("ul")||c.is("ol"));)a+=r.getModelLength(c),c=c.previousSibling;n.modelPosition=t.createPositionBefore(s).getShiftedBy(a),e.stop()}}}(t.model)),e.mapper.on("modelToViewPosition",wg(n.view)),n.downcastDispatcher.on("insert",fg,{priority:"high"}),n.downcastDispatcher.on("insert:listItem",dg(t.model)),e.downcastDispatcher.on("insert",fg,{priority:"high"}),e.downcastDispatcher.on("insert:listItem",dg(t.model)),n.downcastDispatcher.on("attribute:listType:listItem",hg,{priority:"high"}),n.downcastDispatcher.on("attribute:listType:listItem",ug,{priority:"low"}),n.downcastDispatcher.on("attribute:listIndent:listItem",function(t){return(e,n,i)=>{if(!i.consumable.consume(n.item,"attribute:listIndent"))return;const o=i.mapper.toViewElement(n.item),r=i.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s);r.remove(c),a&&a.nextSibling&&rg(r,a,a.nextSibling),vg(n.attributeOldValue+1,n.range.start,c.start,o,i,t),og(n.item,o,i,t);for(const t of n.item.getChildren())i.consumable.consume(t,"insert")}}(t.model)),n.downcastDispatcher.on("remove:listItem",function(t){return(e,n,i)=>{const o=i.mapper.toViewPosition(n.position).getLastMatchingPosition(t=>!t.item.is("li")).nodeAfter,r=i.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s),l=r.remove(c);a&&a.nextSibling&&rg(r,a,a.nextSibling),vg(i.mapper.toModelElement(o).getAttribute("listIndent")+1,n.position,c.start,o,i,t);for(const t of r.createRangeIn(l).getItems())i.mapper.unbindViewElement(t);e.stop()}}(t.model)),n.downcastDispatcher.on("remove",mg,{priority:"low"}),e.upcastDispatcher.on("element:ul",pg,{priority:"high"}),e.upcastDispatcher.on("element:ol",pg,{priority:"high"}),e.upcastDispatcher.on("element:li",bg,{priority:"high"}),e.upcastDispatcher.on("element:li",gg),t.model.on("insertContent",kg,{priority:"high"}),t.commands.add("numberedList",new Xm(t,"numbered")),t.commands.add("bulletedList",new Xm(t,"bulleted")),t.commands.add("indentList",new ng(t,"forward")),t.commands.add("outdentList",new ng(t,"backward"));const i=n.view.document;this.listenTo(i,"enter",(t,e)=>{const n=this.editor.model.document,i=n.selection.getLastPosition().parent;n.selection.isCollapsed&&"listItem"==i.name&&i.isEmpty&&(this.editor.execute("outdentList"),e.preventDefault(),t.stop())}),this.listenTo(i,"delete",(t,e)=>{if("backward"!==e.direction)return;const n=this.editor.model.document.selection;if(!n.isCollapsed)return;const i=n.getFirstPosition();if(!i.isAtStart)return;const o=i.parent;"listItem"===o.name&&(o.previousSibling&&"listItem"===o.previousSibling.name||(this.editor.execute("outdentList"),e.preventDefault(),t.stop()))},{priority:"high"});const o=t=>(e,n)=>{this.editor.commands.get(t).isEnabled&&(this.editor.execute(t),n())};t.keystrokes.set("Tab",o("indentList")),t.keystrokes.set("Shift+Tab",o("outdentList"))}afterInit(){const t=this.editor.commands,e=t.get("indent"),n=t.get("outdent");e&&e.registerChildCommand(t.get("indentList")),n&&n.registerChildCommand(t.get("outdentList"))}}function xg(t){let e=1;for(const n of t.getChildren())if("ul"==n.name||"ol"==n.name)for(const t of n.getChildren())e+=xg(t);return e}var Ag='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>',Tg='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>';class Cg extends Kl{init(){const t=this.editor.t;cg(this.editor,"numberedList",t("q"),Ag),cg(this.editor,"bulletedList",t("r"),Tg)}}function Pg(t,e){return t=>{t.on("attribute:url:media",n)};function n(n,i,o){if(!o.consumable.consume(i.item,n.name))return;const r=i.attributeNewValue,s=o.writer,a=o.mapper.toViewElement(i.item);s.remove(s.createRangeIn(a));const c=t.getMediaViewElement(s,r,e);s.insert(s.createPositionAt(a,0),c)}}function Sg(t,e,n,i){const o=t.createContainerElement("figure",{class:"media"});return o.getFillerOffset=Ig,t.insert(t.createPositionAt(o,0),e.getMediaViewElement(t,n,i)),o}function Mg(t){const e=t.getSelectedElement();return e&&e.is("media")?e:null}function Eg(t,e,n){t.change(i=>{const o=i.createElement("media",{url:e});t.insertContent(o,n),i.setSelection(o,"on")})}function Ig(){return null}class Ng extends ed{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema,i=e.getFirstPosition(),o=Mg(e);let r=i.parent;r!=r.root&&(r=r.parent),this.value=o?o.getAttribute("url"):null,this.isEnabled=n.checkChild(r,"media")}execute(t){const e=this.editor.model,n=e.document.selection,i=Mg(n);if(i)e.change(e=>{e.setAttribute("url",t,i)});else{const i=nu(n,e);Eg(e,t,i)}}}var Og='<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>';const Rg="0 0 64 42";class Dg{constructor(t,e){const n=e.providers,i=e.extraProviders||[],o=new Set(e.removeProviders),r=n.concat(i).filter(t=>{const e=t.name;return e?!o.has(e):(console.warn(Object(Gn.a)("media-embed-no-provider-name: The configured media provider has no name and cannot be used."),{provider:t}),!1)});this.locale=t,this.providerDefinitions=r}hasMedia(t){return!!this._getMedia(t)}getMediaViewElement(t,e,n){return this._getMedia(e).getViewElement(t,n)}_getMedia(t){if(!t)return new Lg(this.locale);t=t.trim();for(const e of this.providerDefinitions){const n=e.html;let i=e.url;Array.isArray(i)||(i=[i]);for(const e of i){const i=this._getUrlMatches(t,e);if(i)return new Lg(this.locale,t,i,n)}}return null}_getUrlMatches(t,e){let n=t.match(e);if(n)return n;let i=t.replace(/^https?:\/\//,"");return(n=i.match(e))?n:(n=(i=i.replace(/^www\./,"")).match(e))||null}}class Lg{constructor(t,e,n,i){this.url=this._getValidUrl(e),this._t=t.t,this._match=n,this._previewRenderer=i}getViewElement(t,e){const n={};if(e.renderForEditingView||e.renderMediaPreview&&this.url&&this._previewRenderer){this.url&&(n["data-oembed-url"]=this.url),e.renderForEditingView&&(n.class="ck-media__wrapper");const i=this._getPreviewHtml(e);return t.createUIElement("div",n,function(t){const e=this.toDomElement(t);return e.innerHTML=i,e})}return this.url&&(n.url=this.url),t.createEmptyElement("oembed",n)}_getPreviewHtml(t){return this._previewRenderer?this._previewRenderer(this._match):this.url&&t.renderForEditingView?this._getPlaceholderHtml():""}_getPlaceholderHtml(){const t=new qd,e=new Hd;return t.text=this._t("Open media in new tab"),e.content=Og,e.viewBox=Rg,new bl({tag:"div",attributes:{class:"ck ck-reset_all ck-media__placeholder"},children:[{tag:"div",attributes:{class:"ck-media__placeholder__icon"},children:[e]},{tag:"a",attributes:{class:"ck-media__placeholder__url",target:"_blank",rel:"noopener noreferrer",href:this.url},children:[{tag:"span",attributes:{class:"ck-media__placeholder__url__text"},children:[this.url]},t]}]}).render().outerHTML}_getValidUrl(t){return t?t.match(/^https?/)?t:"https://"+t:null}}n(79);class jg extends Kl{static get pluginName(){return"MediaEmbedEditing"}constructor(t){super(t),t.config.define("mediaEmbed",{providers:[{name:"dailymotion",url:/^dailymotion\.com\/video\/(\w+)/,html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; ">'+`<iframe src="https://www.dailymotion.com/embed/video/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>'}},{name:"spotify",url:[/^open\.spotify\.com\/(artist\/\w+)/,/^open\.spotify\.com\/(album\/\w+)/,/^open\.spotify\.com\/(track\/\w+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">'+`<iframe src="https://open.spotify.com/embed/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>'}},{name:"youtube",url:[/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,/^(?:m\.)?youtube\.com\/v\/([\w-]+)/,/^youtube\.com\/embed\/([\w-]+)/,/^youtu\.be\/([\w-]+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">'+`<iframe src="https://www.youtube.com/embed/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'}},{name:"vimeo",url:[/^vimeo\.com\/(\d+)/,/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/channels\/[^/]+\/(\d+)/,/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,/^player\.vimeo\.com\/video\/(\d+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">'+`<iframe src="https://player.vimeo.com/video/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'}},{name:"instagram",url:/^instagram\.com\/p\/(\w+)/},{name:"twitter",url:/^twitter\.com/},{name:"googleMaps",url:/^google\.com\/maps/},{name:"flickr",url:/^flickr\.com/},{name:"facebook",url:/^facebook\.com/}]}),this.registry=new Dg(t.locale,t.config.get("mediaEmbed"))}init(){const t=this.editor,e=t.model.schema,n=t.t,i=t.conversion,o=t.config.get("mediaEmbed.previewsInData"),r=this.registry;t.commands.add("mediaEmbed",new Ng(t)),e.register("media",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["url"]}),i.for("dataDowncast").elementToElement({model:"media",view:(t,e)=>{const n=t.getAttribute("url");return Sg(e,r,n,{renderMediaPreview:n&&o})}}),i.for("dataDowncast").add(Pg(r,{renderMediaPreview:o})),i.for("editingDowncast").elementToElement({model:"media",view:(t,e)=>{const i=t.getAttribute("url");return function(t,e,n){return e.setCustomProperty("media",!0,t),Xh(t,e,{label:n})}(Sg(e,r,i,{renderForEditingView:!0}),e,n("am"))}}),i.for("editingDowncast").add(Pg(r,{renderForEditingView:!0})),i.for("upcast").elementToElement({view:{name:"oembed",attributes:{url:!0}},model:(t,e)=>{const n=t.getAttribute("url");if(r.hasMedia(n))return e.createElement("media",{url:n})}}).elementToElement({view:{name:"div",attributes:{"data-oembed-url":!0}},model:(t,e)=>{const n=t.getAttribute("data-oembed-url");if(r.hasMedia(n))return e.createElement("media",{url:n})}})}}const Vg=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;class zg extends Kl{static get requires(){return[td,Qd]}static get pluginName(){return"AutoMediaEmbed"}constructor(t){super(t),this._timeoutId=null,this._positionToInsert=null}init(){const t=this.editor,e=t.model.document;this.listenTo(t.plugins.get(td),"inputTransformation",()=>{const t=e.selection.getFirstRange(),n=Dc.fromPosition(t.start);n.stickiness="toPrevious";const i=Dc.fromPosition(t.end);i.stickiness="toNext",e.once("change:data",()=>{this._embedMediaBetweenPositions(n,i),n.detach(),i.detach()},{priority:"high"})}),t.commands.get("undo").on("execute",()=>{this._timeoutId&&(nr.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)},{priority:"high"})}_embedMediaBetweenPositions(t,e){const n=this.editor,i=n.plugins.get(jg).registry,o=new oa(t,e),r=o.getWalker({ignoreElementEnd:!0});let s="";for(const t of r)t.item.is("textProxy")&&(s+=t.item.data);if(!(s=s.trim()).match(Vg))return;if(!i.hasMedia(s))return;n.commands.get("mediaEmbed").isEnabled&&(this._positionToInsert=Dc.fromPosition(t),this._timeoutId=nr.window.setTimeout(()=>{n.model.change(t=>{let e;this._timeoutId=null,t.remove(o),"$graveyard"!==this._positionToInsert.root.rootName&&(e=this._positionToInsert),Eg(n.model,s,e),this._positionToInsert.detach(),this._positionToInsert=null})},100))}}n(81);class Bg extends Dl{constructor(t,e){super(e);const n=e.t;this.focusTracker=new sl,this.keystrokes=new Jc,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("bd"),vu,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("be"),yu,"ck-button-cancel","cancel"),this._focusables=new gl,this._focusCycler=new ql({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this._validators=t,this.setTemplate({tag:"form",attributes:{class:["ck","ck-media-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),_u({view:this}),[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element);const t=t=>t.stopPropagation();this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t),this.listenTo(this.urlInputView.element,"selectstart",(t,e)=>{e.stopPropagation()},{priority:"high"})}focus(){this._focusCycler.focusFirst()}get url(){return this.urlInputView.inputView.element.value.trim()}set url(t){this.urlInputView.inputView.element.value=t.trim()}isValid(){this.resetFormStatus();for(const t of this._validators){const e=t(this);if(e)return this.urlInputView.errorText=e,!1}return!0}resetFormStatus(){this.urlInputView.errorText=null,this.urlInputView.infoText=this._urlInputViewInfoDefault}_createUrlInput(){const t=this.locale.t,e=new wu(this.locale,ku),n=e.inputView;return this._urlInputViewInfoDefault=t("bg"),this._urlInputViewInfoTip=t("bh"),e.label=t("bi"),e.infoText=this._urlInputViewInfoDefault,n.placeholder="https://example.com",n.on("input",()=>{e.infoText=n.element.value?this._urlInputViewInfoTip:this._urlInputViewInfoDefault}),e}_createButton(t,e,n,i){const o=new Wd(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}}var Fg='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18.68 2.53c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.08c0-.58-.01-.55.6-.55h17.38zM15.77 14.5v-10H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 6.677a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V6.676z"/></svg>';class Ug extends Kl{static get requires(){return[jg]}static get pluginName(){return"MediaEmbedUI"}init(){const t=this.editor,e=t.commands.get("mediaEmbed"),n=t.plugins.get(jg).registry;this.form=new Bg(function(t,e){return[e=>{if(!e.url.length)return t("ao")},n=>{if(!e.hasMedia(n.url))return t("ap")}]}(t.t,n),t.locale),t.ui.componentFactory.add("mediaEmbed",n=>{const i=Sf(n);return this._setUpDropdown(i,this.form,e,t),this._setUpForm(this.form,i,e),i})}_setUpDropdown(t,e,n){const i=this.editor,o=i.t,r=t.buttonView;function s(){i.editing.view.focus(),t.isOpen=!1}t.bind("isEnabled").to(n),t.panelView.children.add(e),r.set({label:o("an"),icon:Fg,tooltip:!0}),r.on("open",()=>{e.url=n.value||"",e.urlInputView.select(),e.focus()},{priority:"low"}),t.on("submit",()=>{e.isValid()&&(i.execute("mediaEmbed",e.url),s())}),t.on("change:isOpen",()=>e.resetFormStatus()),t.on("cancel",()=>s())}_setUpForm(t,e,n){t.delegate("submit","cancel").to(e),t.urlInputView.bind("value").to(n,"value"),t.urlInputView.bind("isReadOnly").to(n,"isEnabled",t=>!t),t.saveButtonView.bind("isEnabled").to(n)}}n(83);function Hg(t,e){if(!t.childCount)return;const n=new of,i=function(t,e){const n=e.createRangeIn(t),i=new bi({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),o=[];for(const t of n)if("elementStart"===t.type&&i.match(t.item)){const e=qg(t.item);o.push({element:t.item,id:e.id,order:e.order,indent:e.indent})}return o}(t,n);if(!i.length)return;let o=null;i.forEach((t,r)=>{if(!o||function(t,e){if(t.id!==e.id)return!0;const n=e.element.previousSibling;if(!n)return!0;return!Wg(n)}(i[r-1],t)){const i=function(t,e){const n=/mso-level-number-format:([^;]*);/gi,i=new RegExp(`@list l${t.id}:level${t.indent}\\s*({[^}]*)`,"gi").exec(e);let o="decimal";if(i&&i[1]){const t=n.exec(i[1]);t&&t[1]&&(o=t[1].trim())}return{type:"bullet"!==o&&"image"!==o?"ol":"ul",style:o}}(t,e);o=function(t,e,n){const i=new ki(t.type),o=e.parent.getChildIndex(e);return n.insertChild(o,i,e.parent),i}(i,t.element,n)}const s=function(t,e){return function(t,e){const n=new bi({name:"span",styles:{"mso-list":"Ignore"}}),i=e.createRangeIn(t);for(const t of i)"elementStart"===t.type&&n.match(t.item)&&e.remove(t.item)}(t,e),e.rename("li",t)}(t.element,n);n.appendChild(s,o)})}function qg(t){const e={},n=t.getStyle("mso-list");return n&&(e.id=parseInt(n.match(/(^|\s+)l(\d+)/i)[2]),e.order=parseInt(n.match(/\s*lfo(\d+)/i)[1]),e.indent=parseInt(n.match(/\s*level(\d+)/i)[1])),e}function Wg(t){return t.is("ol")||t.is("ul")}const Yg=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class $g{isActive(t){return Yg.test(t)}execute(t){const e=new of;!function(t,e){for(const n of t.getChildren())if(n.is("b")&&"normal"===n.getStyle("font-weight")){const i=t.getChildIndex(n);e.remove(n),e.insertChild(i,n.getChildren(),t)}}(t.content,e),function(t,e){for(const n of e.createRangeIn(t)){const t=n.item;if(t.is("li")){const n=t.nextSibling;n&&Wg(n)&&(e.remove(n),e.insertChild(t.childCount,n,t))}if(Wg(t)){let n=t.getChild(0);for(;Wg(n);)e.unwrapElement(n),n=t.getChild(0)}}}(t.content,e),function(t,e){for(const n of e.createRangeIn(t)){const t=n.item;if(t.is("li")){const n=t.getChild(0);n.is("p")&&e.unwrapElement(n)}}}(t.content,e)}}function Gg(t){return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>1===e.length?" ":Array(e.length+1).join("  ").substr(0,e.length))}function Qg(t){const e=new DOMParser,n=function(t){return Gg(Gg(t)).replace(/(<span style=['"]mso-spacerun:yes['"]>[\s]*?)[\r\n]+(\s*<\/span>)/g,"$1$2").replace(/<span style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g," </").replace(/ <o:p><\/o:p>/g," <o:p></o:p>").replace(/>(\s*[\r\n]\s*)</g,"><")}(function(t){const e=t.match(/<\/body>(.*?)(<\/html>|$)/);e&&e[1]&&(t=t.slice(0,e.index)+t.slice(e.index).replace(e[1],""));return t}(t=t.replace(/<!--\[if gte vml 1]>/g,""))),i=e.parseFromString(n,"text/html");!function(t){t.querySelectorAll("span[style*=spacerun]").forEach(t=>{const e=t.childNodes[0].data.length;t.innerHTML=Array(e+1).join("  ").substr(0,e)})}(i);const o=i.body.innerHTML,r=function(t){const e=new rr({blockFiller:jo}),n=t.createDocumentFragment(),i=t.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return e.domToView(n)}(i),s=function(t){const e=[],n=[],i=Array.from(t.getElementsByTagName("style"));for(const t of i)t.sheet&&t.sheet.cssRules&&t.sheet.cssRules.length&&(e.push(t.sheet),n.push(t.innerHTML));return{styles:e,stylesString:n.join(" ")}}(i);return{body:r,bodyString:o,styles:s.styles,stylesString:s.stylesString}}function Kg(t,e){if(!t.childCount)return;const n=new of;!function(t,e,n){const i=n.createRangeIn(e),o=new bi({name:"img"}),r=[];for(const e of i)if(o.match(e.item)){const n=e.item,i=n.getAttribute("v:shapes")?n.getAttribute("v:shapes").split(" "):[];i.length&&i.every(e=>t.indexOf(e)>-1)?r.push(n):n.getAttribute("src")||r.push(n)}for(const t of r)n.remove(t)}(function(t,e){const n=e.createRangeIn(t),i=new bi({name:/v:(.+)/}),o=[];for(const t of n){const e=t.item,n=e.previousSibling&&e.previousSibling.name||null;i.match(e)&&e.getAttribute("o:gfxdata")&&"v:shapetype"!==n&&o.push(t.item.getAttribute("id"))}return o}(t,n),t,n),function(t,e){const n=e.createRangeIn(t),i=new bi({name:/v:(.+)/}),o=[];for(const t of n)i.match(t.item)&&o.push(t.item);for(const t of o)e.remove(t)}(t,n);const i=function(t,e){const n=e.createRangeIn(t),i=new bi({name:"img"}),o=[];for(const t of n)i.match(t.item)&&t.item.getAttribute("src").startsWith("file://")&&o.push(t.item);return o}(t,n);i.length&&function(t,e,n){if(t.length===e.length)for(let i=0;i<t.length;i++){const o=`data:${e[i].type};base64,${Jg(e[i].hex)}`;n.setAttribute("src",o,t[i])}}(i,function(t){if(!t)return[];const e=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,n=new RegExp("(?:("+e.source+"))([\\da-fA-F\\s]+)\\}","g"),i=t.match(n),o=[];if(i)for(const t of i){let n=!1;t.includes("\\pngblip")?n="image/png":t.includes("\\jpegblip")&&(n="image/jpeg"),n&&o.push({hex:t.replace(e,"").replace(/[^\da-fA-F]/g,""),type:n})}return o}(e),n)}function Jg(t){return btoa(t.match(/\w{2}/g).map(t=>String.fromCharCode(parseInt(t,16))).join(""))}const Zg=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,Xg=/xmlns:o="urn:schemas-microsoft-com/i;class tp{isActive(t){return Zg.test(t)||Xg.test(t)}execute(t){const{body:e,stylesString:n}=Qg(t.dataTransfer.getData("text/html"));Hg(e,n),Kg(e,t.dataTransfer.getData("text/rtf")),t.content=e}}function ep(t,e){let n=e.parent;for(;n;){if(n.name===t)return n;n=n.parent}}function np(t,e,n,i,o=1){e>o?i.setAttribute(t,e,n):i.removeAttribute(t,n)}function ip(t,e,n={}){const i=t.createElement("tableCell",n);t.insertElement("paragraph",i),t.insert(i,e)}function op(){return t=>{t.on("element:table",(t,e,n)=>{const i=e.viewItem;if(!n.consumable.test(i,{name:!0}))return;const{rows:o,headingRows:r,headingColumns:s}=function(t){const e={headingRows:0,headingColumns:0},n=[],i=[];let o;for(const r of Array.from(t.getChildren()))if("tbody"===r.name||"thead"===r.name||"tfoot"===r.name){"thead"!==r.name||o||(o=r);const t=Array.from(r.getChildren()).filter(t=>t.is("element","tr"));for(const r of t)if("thead"===r.parent.name&&r.parent===o)e.headingRows++,n.push(r);else{i.push(r);const t=sp(r);t>e.headingColumns&&(e.headingColumns=t)}}return e.rows=[...n,...i],e}(i),a={};s&&(a.headingColumns=s),r&&(a.headingRows=r);const c=n.writer.createElement("table",a),l=n.splitToAllowedParent(c,e.modelCursor);if(l){if(n.writer.insert(c,l.position),n.consumable.consume(i,{name:!0}),o.length)o.forEach(t=>n.convertItem(t,n.writer.createPositionAt(c,"end")));else{const t=n.writer.createElement("tableRow");n.writer.insert(t,n.writer.createPositionAt(c,"end")),ip(n.writer,n.writer.createPositionAt(t,"end"))}e.modelRange=n.writer.createRange(n.writer.createPositionBefore(c),n.writer.createPositionAfter(c)),l.cursorParent?e.modelCursor=n.writer.createPositionAt(l.cursorParent,0):e.modelCursor=e.modelRange.end}})}}function rp(t){return e=>{e.on(`element:${t}`,(t,e,n)=>{const i=e.viewItem;if(!n.consumable.test(i,{name:!0}))return;const o=n.writer.createElement("tableCell"),r=n.splitToAllowedParent(o,e.modelCursor);if(!r)return;n.writer.insert(o,r.position),n.consumable.consume(i,{name:!0});const s=n.writer.createPositionAt(o,0);n.convertChildren(i,s),o.childCount||n.writer.insertElement("paragraph",s),e.modelRange=n.writer.createRange(n.writer.createPositionBefore(o),n.writer.createPositionAfter(o)),e.modelCursor=e.modelRange.end})}}function sp(t){let e=0,n=0;const i=Array.from(t.getChildren()).filter(t=>"th"===t.name||"td"===t.name);for(;n<i.length&&"th"===i[n].name;){const t=i[n];e+=parseInt(t.getAttribute("colspan")||1),n++}return e}class ap{constructor(t,e={}){this.table=t,this.startRow=e.startRow||0,this.endRow="number"==typeof e.endRow?e.endRow:void 0,this.includeSpanned=!!e.includeSpanned,this.column="number"==typeof e.column?e.column:void 0,this._skipRows=new Set,this._row=0,this._column=0,this._cellIndex=0,this._spannedCells=new Map,this._nextCellAtColumn=-1}[Symbol.iterator](){return this}next(){const t=this.table.getChild(this._row);if(!t||this._isOverEndRow())return{done:!0};let e,n,i;if(this._isSpanned(this._row,this._column))e=this._getSpanned(this._row,this._column),n=!this.includeSpanned||this._shouldSkipRow()||this._shouldSkipColumn(),i=this._formatOutValue(e,this._column,!0);else{if(!(e=t.getChild(this._cellIndex)))return this._row++,this._column=0,this._cellIndex=0,this._nextCellAtColumn=-1,this.next();const o=parseInt(e.getAttribute("colspan")||1),r=parseInt(e.getAttribute("rowspan")||1);(o>1||r>1)&&this._recordSpans(this._row,this._column,r,o,e),this._nextCellAtColumn=this._column+o,n=this._shouldSkipRow()||this._shouldSkipColumn(),i=this._formatOutValue(e,this._column,!1,r,o)}return this._column++,this._column==this._nextCellAtColumn&&this._cellIndex++,n?this.next():i}skipRow(t){this._skipRows.add(t)}_isOverEndRow(){return void 0!==this.endRow&&this._row>this.endRow}_formatOutValue(t,e,n,i=1,o=1){return{done:!1,value:{cell:t,row:this._row,column:e,isSpanned:n,rowspan:i,colspan:o,cellIndex:this._cellIndex}}}_shouldSkipRow(){const t=this._row<this.startRow,e=this._skipRows.has(this._row);return t||e}_shouldSkipColumn(){return void 0!==this.column&&this.column!=this._column}_isSpanned(t,e){if(!this._spannedCells.has(t))return!1;return this._spannedCells.get(t).has(e)}_getSpanned(t,e){return this._spannedCells.get(t).get(e)}_recordSpans(t,e,n,i,o){for(let n=e+1;n<=e+i-1;n++)this._markSpannedCell(t,n,o);for(let r=t+1;r<t+n;r++)for(let t=e;t<=e+i-1;t++)this._markSpannedCell(r,t,o)}_markSpannedCell(t,e,n){this._spannedCells.has(t)||this._spannedCells.set(t,new Map),this._spannedCells.get(t).set(e,n)}}function cp(t){return!!t.getCustomProperty("table")&&Zh(t)}function lp(t){const e=t.getSelectedElement();return e&&cp(e)?e:null}function dp(t){const e=ep("table",t.getFirstPosition());return e&&cp(e.parent)?e.parent:null}function hp(t={}){return e=>e.on("insert:table",(e,n,i)=>{const o=n.item;if(!i.consumable.consume(o,"insert"))return;i.consumable.consume(o,"attribute:headingRows:table"),i.consumable.consume(o,"attribute:headingColumns:table");const r=t&&t.asWidget,s=i.writer.createContainerElement("figure",{class:"table"}),a=i.writer.createContainerElement("table");let c;i.writer.insert(i.writer.createPositionAt(s,0),a),r&&(c=function(t,e){return e.setCustomProperty("table",!0,t),Xh(t,e,{hasSelectionHandler:!0})}(s,i.writer));const l=new ap(o),d={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},h=new Map;for(const e of l){const{row:n,cell:r}=e,s=yp(vp(n,d),a,i),c=o.getChild(n),l=h.get(n)||kp(c,n,s,i);h.set(n,l),i.consumable.consume(r,"insert"),wp(e,d,i.writer.createPositionAt(l,"end"),i,t)}const u=i.mapper.toViewPosition(n.range.start);i.mapper.bindElements(o,r?c:s),i.writer.insert(u,r?c:s)})}function up(t={}){return e=>e.on("insert:tableRow",(e,n,i)=>{const o=n.item;if(!i.consumable.consume(o,"insert"))return;const r=o.parent,s=Cp(i.mapper.toViewElement(r)),a=r.getChildIndex(o),c=new ap(r,{startRow:a,endRow:a}),l={headingRows:r.getAttribute("headingRows")||0,headingColumns:r.getAttribute("headingColumns")||0},d=new Map;for(const e of c){const n=yp(vp(a,l),s,i),r=d.get(a)||kp(o,a,n,i);d.set(a,r),i.consumable.consume(e.cell,"insert"),wp(e,l,i.writer.createPositionAt(r,"end"),i,t)}})}function fp(t={}){return e=>e.on("insert:tableCell",(e,n,i)=>{const o=n.item;if(!i.consumable.consume(o,"insert"))return;const r=o.parent,s=r.parent,a=s.getChildIndex(r),c=new ap(s,{startRow:a,endRow:a}),l={headingRows:s.getAttribute("headingRows")||0,headingColumns:s.getAttribute("headingColumns")||0};for(const e of c)if(e.cell===o){const n=i.mapper.toViewElement(r);return void wp(e,l,i.writer.createPositionAt(n,r.getChildIndex(o)),i,t)}})}function mp(t={}){const e=!!t.asWidget;return t=>t.on("attribute:headingRows:table",(t,n,i)=>{const o=n.item;if(!i.consumable.consume(n.item,t.name))return;const r=Cp(i.mapper.toViewElement(o)),s=n.attributeOldValue,a=n.attributeNewValue;if(a>s){const t=Array.from(o.getChildren()).filter(({index:t})=>c(t,s-1,a));Tp(t,yp("thead",r,i),i,"end");for(const n of t)for(const t of n.getChildren())pp(t,"th",i,e);Ap("tbody",r,i)}else{Tp(Array.from(o.getChildren()).filter(({index:t})=>c(t,a-1,s)).reverse(),yp("tbody",r,i),i,0);const t=new ap(o,{startRow:a?a-1:a,endRow:s-1}),n={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0};for(const o of t)bp(o,n,i,e);Ap("thead",r,i)}function c(t,e,n){return t>e&&t<n}})}function gp(t={}){const e=!!t.asWidget;return t=>t.on("attribute:headingColumns:table",(t,n,i)=>{const o=n.item;if(!i.consumable.consume(n.item,t.name))return;const r={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},s=n.attributeOldValue,a=n.attributeNewValue,c=(s>a?s:a)-1;for(const t of new ap(o))t.column>c||bp(t,r,i,e)})}function pp(t,e,n,i){const o=n.writer,r=n.mapper.toViewElement(t);if(!r)return;let s;if(i){s=eu(o.createEditableElement(e,r.getAttributes()),o),o.insert(o.createPositionAfter(r),s),o.move(o.createRangeIn(r),o.createPositionAt(s,0)),o.remove(o.createRangeOn(r))}else s=o.rename(e,r);n.mapper.unbindViewElement(r),n.mapper.bindElements(t,s)}function bp(t,e,n,i){const{cell:o}=t,r=_p(t,e),s=n.mapper.toViewElement(o);s&&s.name!==r&&pp(o,r,n,i)}function wp(t,e,n,i,o){const r=o&&o.asWidget,s=_p(t,e),a=r?eu(i.writer.createEditableElement(s),i.writer):i.writer.createContainerElement(s),c=t.cell,l=c.getChild(0),d=1===c.childCount&&"paragraph"===l.name;if(i.writer.insert(n,a),d&&!function(t){return!![...t.getAttributeKeys()].length}(l)){const t=c.getChild(0),e=i.writer.createPositionAt(a,"end");if(i.consumable.consume(t,"insert"),o.asWidget){const n=i.writer.createContainerElement("span");i.mapper.bindElements(t,n),i.writer.insert(e,n),i.mapper.bindElements(c,a)}else i.mapper.bindElements(c,a),i.mapper.bindElements(t,a)}else i.mapper.bindElements(c,a)}function kp(t,e,n,i){i.consumable.consume(t,"insert");const o=i.writer.createContainerElement("tr");i.mapper.bindElements(t,o);const r=t.parent.getAttribute("headingRows")||0,s=r>0&&e>=r?e-r:e,a=i.writer.createPositionAt(n,s);return i.writer.insert(a,o),o}function _p(t,e){const{row:n,column:i}=t,{headingColumns:o,headingRows:r}=e;return r&&r>n?"th":o&&o>i?"th":"td"}function vp(t,e){return t<e.headingRows?"thead":"tbody"}function yp(t,e,n){const i=xp(t,e);return i||function(t,e,n){const i=n.writer.createContainerElement(t),o=n.writer.createPositionAt(e,"tbody"==t?"end":0);return n.writer.insert(o,i),i}(t,e,n)}function xp(t,e){for(const n of e.getChildren())if(n.name==t)return n}function Ap(t,e,n){const i=xp(t,e);i&&0===i.childCount&&n.writer.remove(n.writer.createRangeOn(i))}function Tp(t,e,n,i){for(const o of t){const t=n.mapper.toViewElement(o);t&&n.writer.move(n.writer.createRangeOn(t),n.writer.createPositionAt(e,i))}}function Cp(t){for(const e of t.getChildren())if("table"===e.name)return e}class Pp extends ed{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema,i=function(t){const e=t.parent;return e===e.root?e:e.parent}(e.getFirstPosition());this.isEnabled=n.checkChild(i,"table")}execute(t={}){const e=this.editor.model,n=e.document.selection,i=this.editor.plugins.get("TableUtils"),o=parseInt(t.rows)||2,r=parseInt(t.columns)||2,s=nu(n,e);e.change(t=>{const n=i.createTable(t,o,r);e.insertContent(n,s),t.setSelection(t.createPositionAt(n.getNodeByPath([0,0,0]),0))})}}class Sp extends ed{constructor(t,e={}){super(t),this.order=e.order||"below"}refresh(){const t=ep("table",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i=ep("tableCell",e.getFirstPosition()).parent,o=i.parent,r=o.getChildIndex(i),s="below"===this.order?r+1:r;n.insertRows(o,{rows:1,at:s})}}class Mp extends ed{constructor(t,e={}){super(t),this.order=e.order||"right"}refresh(){const t=ep("table",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i=ep("tableCell",e.getFirstPosition()),o=i.parent.parent,{column:r}=n.getCellLocation(i),s="right"===this.order?r+1:r;n.insertColumns(o,{columns:1,at:s})}}class Ep extends ed{constructor(t,e={}){super(t),this.direction=e.direction||"horizontally"}refresh(){const t=ep("tableCell",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=ep("tableCell",this.editor.model.document.selection.getFirstPosition()),e="horizontally"===this.direction,n=this.editor.plugins.get("TableUtils");e?n.splitCellHorizontally(t,2):n.splitCellVertically(t,2)}}class Ip extends ed{constructor(t,e){super(t),this.direction=e.direction,this.isHorizontal="right"==this.direction||"left"==this.direction}refresh(){const t=this._getMergeableCell();this.isEnabled=!!t,this.value=t}execute(){const t=this.editor.model,e=ep("tableCell",t.document.selection.getFirstPosition()),n=this.value,i=this.direction;t.change(t=>{const o="right"==i||"down"==i,r=o?e:n,s=o?n:e,a=s.parent;!function(t,e,n){Np(t)||(Np(e)&&n.remove(n.createRangeIn(e)),n.move(n.createRangeIn(t),n.createPositionAt(e,"end")));n.remove(t)}(s,r,t);const c=this.isHorizontal?"colspan":"rowspan",l=parseInt(e.getAttribute(c)||1),d=parseInt(n.getAttribute(c)||1);t.setAttribute(c,l+d,r),t.setSelection(t.createRangeIn(r)),a.childCount||function(t,e){const n=t.parent,i=n.getChildIndex(t);for(const{cell:t,row:o,rowspan:r}of new ap(n,{endRow:i})){const n=o+r-1>=i;n&&np("rowspan",r-1,t,e)}e.remove(t)}(a,t)})}_getMergeableCell(){const t=ep("tableCell",this.editor.model.document.selection.getFirstPosition());if(!t)return;const e=this.editor.plugins.get("TableUtils"),n=this.isHorizontal?function(t,e,n){const i="right"==e?t.nextSibling:t.previousSibling;if(!i)return;const o="right"==e?t:i,r="right"==e?i:t,{column:s}=n.getCellLocation(o),{column:a}=n.getCellLocation(r),c=parseInt(o.getAttribute("colspan")||1);return s+c===a?i:void 0}(t,this.direction,e):function(t,e){const n=t.parent,i=n.parent,o=i.getChildIndex(n);if("down"==e&&o===i.childCount-1||"up"==e&&0===o)return;const r=parseInt(t.getAttribute("rowspan")||1),s=i.getAttribute("headingRows")||0;if(s&&("down"==e&&o+r===s||"up"==e&&o===s))return;const a=parseInt(t.getAttribute("rowspan")||1),c="down"==e?o+a:o,l=[...new ap(i,{endRow:c})],d=l.find(e=>e.cell===t).column,h=l.find(({row:t,rowspan:n,column:i})=>i===d&&("down"==e?t===c:c===t+n));return h&&h.cell}(t,this.direction);if(!n)return;const i=this.isHorizontal?"rowspan":"colspan",o=parseInt(t.getAttribute(i)||1);return parseInt(n.getAttribute(i)||1)===o?n:void 0}}function Np(t){return 1==t.childCount&&t.getChild(0).is("paragraph")&&t.getChild(0).isEmpty}class Op extends ed{refresh(){const t=ep("tableCell",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t&&t.parent.parent.childCount>1}execute(){const t=this.editor.model,e=ep("tableCell",t.document.selection.getFirstPosition()).parent,n=e.parent,i=n.getChildIndex(e),o=n.getAttribute("headingRows")||0;t.change(t=>{o&&i<=o&&np("headingRows",o-1,n,t,0);const r=[...new ap(n,{endRow:i})],s=new Map;r.filter(({row:t,rowspan:e})=>t===i&&e>1).forEach(({column:t,cell:e,rowspan:n})=>s.set(t,{cell:e,rowspanToSet:n-1})),r.filter(({row:t,rowspan:e})=>t<=i-1&&t+e>i).forEach(({cell:e,rowspan:n})=>np("rowspan",n-1,e,t));const a=i+1,c=new ap(n,{includeSpanned:!0,startRow:a,endRow:a});let l;for(const{row:e,column:i,cell:o}of[...c])if(s.has(i)){const{cell:o,rowspanToSet:r}=s.get(i),a=l?t.createPositionAfter(l):t.createPositionAt(n.getChild(e),0);t.move(t.createRangeOn(o),a),np("rowspan",r,o,t),l=o}else l=o;t.remove(e)})}}class Rp extends ed{refresh(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i=ep("tableCell",e.getFirstPosition());this.isEnabled=!!i&&n.getColumns(i.parent.parent)>1}execute(){const t=this.editor.model,e=ep("tableCell",t.document.selection.getFirstPosition()),n=e.parent,i=n.parent,o=i.getAttribute("headingColumns")||0,r=i.getChildIndex(n),s=[...new ap(i)],a=s.find(t=>t.cell===e).column;t.change(t=>{o&&r<=o&&t.setAttribute("headingColumns",o-1,i);for(const{cell:e,column:n,colspan:i}of s)n<=a&&i>1&&n+i>a?np("colspan",i-1,e,t):n===a&&t.remove(e)})}}class Dp extends ed{refresh(){const t=ep("tableCell",this.editor.model.document.selection.getFirstPosition()),e=!!t;this.isEnabled=e,this.value=e&&this._isInHeading(t,t.parent.parent)}execute(t={}){const e=this.editor.model,n=ep("tableCell",e.document.selection.getFirstPosition()).parent,i=n.parent,o=i.getAttribute("headingRows")||0,r=n.index;if(t.forceValue===this.value)return;const s=this.value?r:r+1;e.change(t=>{if(s){const e=function(t,e,n){const i=[],o=new ap(t,{startRow:e>n?n:0,endRow:e-1});for(const{row:t,rowspan:n,cell:r}of o)n>1&&t+n>e&&i.push(r);return i}(i,s,o);for(const n of e)Lp(n,s,t)}np("headingRows",s,i,t,0)})}_isInHeading(t,e){const n=parseInt(e.getAttribute("headingRows")||0);return!!n&&t.parent.index<n}}function Lp(t,e,n){const i=t.parent,o=i.parent,r=e-i.index,s={},a=parseInt(t.getAttribute("rowspan"))-r;a>1&&(s.rowspan=a);const c=parseInt(t.getAttribute("colspan")||1);c>1&&(s.colspan=c);const l=o.getChildIndex(i),d=l+r,h=[...new ap(o,{startRow:l,endRow:d,includeSpanned:!0})];let u;for(const{row:e,column:i,cell:r,cellIndex:a}of h)if(r===t&&void 0===u&&(u=i),void 0!==u&&u===i&&e===d){const t=o.getChild(e);ip(n,n.createPositionAt(t,a),s)}np("rowspan",r,t,n)}class jp extends ed{refresh(){const t=ep("tableCell",this.editor.model.document.selection.getFirstPosition()),e=!!t;this.isEnabled=e,this.value=e&&this._isInHeading(t,t.parent.parent)}execute(t={}){const e=this.editor.model,n=e.document.selection,i=this.editor.plugins.get("TableUtils"),o=ep("tableCell",n.getFirstPosition()),r=o.parent.parent,{column:s}=i.getCellLocation(o);if(t.forceValue===this.value)return;const a=this.value?s:s+1;e.change(t=>{np("headingColumns",a,r,t,0)})}_isInHeading(t,e){const n=parseInt(e.getAttribute("headingColumns")||0),i=this.editor.plugins.get("TableUtils"),{column:o}=i.getCellLocation(t);return!!n&&o<n}}class Vp extends Kl{static get pluginName(){return"TableUtils"}getCellLocation(t){const e=t.parent,n=e.parent,i=n.getChildIndex(e),o=new ap(n,{startRow:i,endRow:i});for(const{cell:e,row:n,column:i}of o)if(e===t)return{row:n,column:i}}createTable(t,e,n){const i=t.createElement("table");return zp(t,i,0,e,n),i}insertRows(t,e={}){const n=this.editor.model,i=e.at||0,o=e.rows||1;n.change(e=>{const n=t.getAttribute("headingRows")||0;if(n>i&&e.setAttribute("headingRows",n+o,t),0===i||i===t.childCount)return void zp(e,t,i,o,this.getColumns(t));const r=new ap(t,{endRow:i});let s=0;for(const{row:t,rowspan:n,colspan:a,cell:c}of r){t<i&&t+n>i&&e.setAttribute("rowspan",n+o,c),t===i&&(s+=a)}zp(e,t,i,o,s)})}insertColumns(t,e={}){const n=this.editor.model,i=e.at||0,o=e.columns||1;n.change(e=>{const n=t.getAttribute("headingColumns");i<n&&e.setAttribute("headingColumns",n+o,t);const r=this.getColumns(t);if(0===i||r===i){for(const n of t.getChildren())Bp(o,e,e.createPositionAt(n,i?"end":0));return}const s=new ap(t,{column:i,includeSpanned:!0});for(const{row:n,cell:r,cellIndex:a}of s){const c=parseInt(r.getAttribute("rowspan")||1),l=parseInt(r.getAttribute("colspan")||1);if(r.index!==i&&l>1){if(e.setAttribute("colspan",l+o,r),s.skipRow(n),c>1)for(let t=n+1;t<n+c;t++)s.skipRow(t)}else{const i=e.createPositionAt(t.getChild(n),a);Bp(o,e,i)}}})}splitCellVertically(t,e=2){const n=this.editor.model,i=t.parent.parent,o=parseInt(t.getAttribute("rowspan")||1),r=parseInt(t.getAttribute("colspan")||1);n.change(n=>{if(r>1){const{newCellsSpan:i,updatedSpan:s}=Fp(r,e);np("colspan",s,t,n);const a={};i>1&&(a.colspan=i),o>1&&(a.rowspan=o),Bp(r>e?e-1:r-1,n,n.createPositionAfter(t),a)}if(r<e){const s=e-r,a=[...new ap(i)],{column:c}=a.find(({cell:e})=>e===t),l=a.filter(({cell:e,colspan:n,column:i})=>{return e!==t&&i===c||i<c&&i+n>c});for(const{cell:t,colspan:e}of l)n.setAttribute("colspan",e+s,t);const d={};o>1&&(d.rowspan=o),Bp(s,n,n.createPositionAfter(t),d);const h=i.getAttribute("headingColumns")||0;h>c&&np("headingColumns",h+s,i,n)}})}splitCellHorizontally(t,e=2){const n=this.editor.model,i=t.parent,o=i.parent,r=o.getChildIndex(i),s=parseInt(t.getAttribute("rowspan")||1),a=parseInt(t.getAttribute("colspan")||1);n.change(n=>{if(s>1){const i=[...new ap(o,{startRow:r,endRow:r+s-1,includeSpanned:!0})],{newCellsSpan:c,updatedSpan:l}=Fp(s,e);np("rowspan",l,t,n);const{column:d}=i.find(({cell:e})=>e===t),h={};c>1&&(h.rowspan=c),a>1&&(h.colspan=a);for(const{column:t,row:e,cellIndex:s}of i){if(e>=r+l&&t===d&&(e+r+l)%c==0){Bp(1,n,n.createPositionAt(o.getChild(e),s),h)}}}if(s<e){const i=e-s,c=[...new ap(o,{startRow:0,endRow:r})];for(const{cell:e,rowspan:o,row:s}of c)if(e!==t&&s+o>r){const t=o+i;n.setAttribute("rowspan",t,e)}const l={};a>1&&(l.colspan=a),zp(n,o,r+1,i,1,l);const d=o.getAttribute("headingRows")||0;d>r&&np("headingRows",d+i,o,n)}})}getColumns(t){return[...t.getChild(0).getChildren()].reduce((t,e)=>{return t+parseInt(e.getAttribute("colspan")||1)},0)}}function zp(t,e,n,i,o,r={}){for(let s=0;s<i;s++){const i=t.createElement("tableRow");t.insert(i,e,n),Bp(o,t,t.createPositionAt(i,"end"),r)}}function Bp(t,e,n,i={}){for(let o=0;o<t;o++)ip(e,n,i)}function Fp(t,e){if(t<e)return{newCellsSpan:1,updatedSpan:1};const n=Math.floor(t/e);return{newCellsSpan:n,updatedSpan:t-n*e+n}}function Up(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.differ.getChanges();let i=!1;const o=new Set;for(const e of n){let n;"table"==e.name&&"insert"==e.type&&(n=e.position.nodeAfter),"tableRow"!=e.name&&"tableCell"!=e.name||(n=ep("table",e.position)),Wp(e)&&(n=ep("table",e.range.start)),n&&!o.has(n)&&(i=Hp(n,t)||i,i=qp(n,t)||i,o.add(n))}return i})(e,t))}function Hp(t,e){let n=!1;const i=function(t){const e=parseInt(t.getAttribute("headingRows")||0),n=t.childCount,i=[];for(const{row:o,rowspan:r,cell:s}of new ap(t)){if(r<2)continue;const t=o<e,a=t?e:n;if(o+r>a){const t=a-o;i.push({cell:s,rowspan:t})}}return i}(t);if(i.length){n=!0;for(const t of i)np("rowspan",t.rowspan,t.cell,e,1)}return n}function qp(t,e){let n=!1;const i=function(t){const e={};for(const{row:n}of new ap(t,{includeSpanned:!0}))e[n]||(e[n]=0),e[n]+=1;return e}(t),o=i[0];if(!Object.values(i).every(t=>t===o)){const o=Object.values(i).reduce((t,e)=>e>t?e:t,0);for(const[r,s]of Object.entries(i)){const i=o-s;if(i){for(let n=0;n<i;n++)ip(e,e.createPositionAt(t.getChild(r),"end"));n=!0}}}return n}function Wp(t){const e="attribute"===t.type,n=t.attributeKey;return e&&("headingRows"===n||"colspan"===n||"rowspan"===n)}function Yp(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.differ.getChanges();let i=!1;for(const e of n)"insert"==e.type&&"table"==e.name&&(i=$p(e.position.nodeAfter,t)||i),"insert"==e.type&&"tableRow"==e.name&&(i=Gp(e.position.nodeAfter,t)||i),"insert"==e.type&&"tableCell"==e.name&&(i=Qp(e.position.nodeAfter,t)||i),Kp(e)&&(i=Qp(e.position.parent,t)||i);return i})(e,t))}function $p(t,e){let n=!1;for(const i of t.getChildren())n=Gp(i,e)||n;return n}function Gp(t,e){let n=!1;for(const i of t.getChildren())n=Qp(i,e)||n;return n}function Qp(t,e){if(0==t.childCount)return e.insertElement("paragraph",t),!0;const n=Array.from(t.getChildren()).filter(t=>t.is("text"));for(const t of n)e.wrap(e.createRangeOn(t),"paragraph");return!!n.length}function Kp(t){return!(!t.position||!t.position.parent.is("tableCell"))&&("insert"==t.type&&"$text"==t.name||"remove"==t.type)}function Jp(t){t.document.registerPostFixer(()=>(function(t){const e=t.document.differ,n=new Set;for(const t of e.getChanges()){const e="insert"==t.type||"remove"==t.type?t.position.parent:t.range.start.parent;e.is("tableCell")&&Zp(e,t.type)&&n.add(e)}if(n.size){for(const t of n.values())e.refreshItem(t);return!0}return!1})(t))}function Zp(t,e){if(!Array.from(t.getChildren()).some(t=>t.is("paragraph")))return!1;if("attribute"==e){const e=Array.from(t.getChild(0).getAttributeKeys()).length;return 1===t.childCount&&e<2}return t.childCount<=("insert"==e?2:1)}n(85);class Xp extends Kl{init(){const t=this.editor,e=t.model,n=e.schema,i=t.conversion;n.register("table",{allowWhere:"$block",allowAttributes:["headingRows","headingColumns"],isLimit:!0,isObject:!0,isBlock:!0}),n.register("tableRow",{allowIn:"table",isLimit:!0}),n.register("tableCell",{allowIn:"tableRow",allowAttributes:["colspan","rowspan"],isLimit:!0}),n.extend("$block",{allowIn:"tableCell"}),n.addChildCheck((t,e)=>{if("table"==e.name&&Array.from(t.getNames()).includes("table"))return!1}),i.for("upcast").add(op()),i.for("editingDowncast").add(hp({asWidget:!0})),i.for("dataDowncast").add(hp()),i.for("upcast").elementToElement({model:"tableRow",view:"tr"}),i.for("editingDowncast").add(up({asWidget:!0})),i.for("dataDowncast").add(up()),i.for("downcast").add(t=>t.on("remove:tableRow",(t,e,n)=>{t.stop();const i=n.writer,o=n.mapper,r=o.toViewPosition(e.position).getLastMatchingPosition(t=>!t.item.is("tr")).nodeAfter,s=r.parent,a=i.createRangeOn(r),c=i.remove(a);for(const t of i.createRangeIn(c).getItems())o.unbindViewElement(t);s.childCount||i.remove(i.createRangeOn(s))},{priority:"higher"})),i.for("upcast").add(rp("td")),i.for("upcast").add(rp("th")),i.for("editingDowncast").add(fp({asWidget:!0})),i.for("dataDowncast").add(fp()),i.attributeToAttribute({model:"colspan",view:"colspan"}),i.attributeToAttribute({model:"rowspan",view:"rowspan"}),i.for("editingDowncast").add(gp({asWidget:!0})),i.for("dataDowncast").add(gp()),i.for("editingDowncast").add(mp({asWidget:!0})),i.for("dataDowncast").add(mp()),t.commands.add("insertTable",new Pp(t)),t.commands.add("insertTableRowAbove",new Sp(t,{order:"above"})),t.commands.add("insertTableRowBelow",new Sp(t,{order:"below"})),t.commands.add("insertTableColumnLeft",new Mp(t,{order:"left"})),t.commands.add("insertTableColumnRight",new Mp(t,{order:"right"})),t.commands.add("removeTableRow",new Op(t)),t.commands.add("removeTableColumn",new Rp(t)),t.commands.add("splitTableCellVertically",new Ep(t,{direction:"vertically"})),t.commands.add("splitTableCellHorizontally",new Ep(t,{direction:"horizontally"})),t.commands.add("mergeTableCellRight",new Ip(t,{direction:"right"})),t.commands.add("mergeTableCellLeft",new Ip(t,{direction:"left"})),t.commands.add("mergeTableCellDown",new Ip(t,{direction:"down"})),t.commands.add("mergeTableCellUp",new Ip(t,{direction:"up"})),t.commands.add("setTableColumnHeader",new jp(t)),t.commands.add("setTableRowHeader",new Dp(t)),Up(e),Jp(e),Yp(e),this.editor.keystrokes.set("Tab",(...t)=>this._handleTabOnSelectedTable(...t),{priority:"low"}),this.editor.keystrokes.set("Tab",this._getTabHandler(!0),{priority:"low"}),this.editor.keystrokes.set("Shift+Tab",this._getTabHandler(!1),{priority:"low"})}static get requires(){return[Vp]}_handleTabOnSelectedTable(t,e){const n=this.editor,i=n.model.document.selection;if(!i.isCollapsed&&1===i.rangeCount&&i.getFirstRange().isFlat){const t=i.getSelectedElement();if(!t||!t.is("table"))return;e(),n.model.change(e=>{e.setSelection(e.createRangeIn(t.getChild(0).getChild(0)))})}}_getTabHandler(t){const e=this.editor;return(n,i)=>{const o=ep("tableCell",e.model.document.selection.getFirstPosition());if(!o)return;i();const r=o.parent,s=r.parent,a=s.getChildIndex(r),c=r.getChildIndex(o),l=0===c;if(!t&&l&&0===a)return;const d=c===r.childCount-1,h=a===s.childCount-1;if(t&&h&&d&&(e.execute("insertTableRowBelow"),a===s.childCount-1))return;let u;if(t&&d){const t=s.getChild(a+1);u=t.getChild(0)}else if(!t&&l){const t=s.getChild(a-1);u=t.getChild(t.childCount-1)}else u=r.getChild(c+(t?1:-1));e.model.change(t=>{t.setSelection(t.createRangeIn(u))})}}}n(87);class tb extends Dl{constructor(t){super(t);const e=this.bindTemplate;this.items=this.createCollection(),this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",(t,e)=>`${e} × ${t}`),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},children:this.items},{tag:"div",attributes:{class:["ck-insert-table-dropdown__label"]},children:[{text:e.to("label")}]}],on:{mousedown:e.to(t=>{t.preventDefault()}),click:e.to(()=>{this.fire("execute")})}});for(let t=0;t<100;t++){const e=new eb;e.on("over",()=>{const e=Math.floor(t/10),n=t%10;this.set("rows",e+1),this.set("columns",n+1)}),this.items.add(e)}this.on("change:columns",()=>{this._highlightGridBoxes()}),this.on("change:rows",()=>{this._highlightGridBoxes()})}focus(){}focusLast(){}_highlightGridBoxes(){const t=this.rows,e=this.columns;this.items.map((n,i)=>{const o=Math.floor(i/10)<t&&i%10<e;n.set("isOn",o)})}}class eb extends Dl{constructor(t){super(t);const e=this.bindTemplate;this.set("isOn",!1),this.setTemplate({tag:"div",attributes:{class:["ck-insert-table-dropdown-grid-box",e.if("isOn","ck-on")]},on:{mouseover:e.to("over")}})}}var nb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',ib='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',ob='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',rb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>';class sb extends Kl{init(){const t=this.editor,e=this.editor.t;t.ui.componentFactory.add("insertTable",n=>{const i=t.commands.get("insertTable"),o=Sf(n);o.bind("isEnabled").to(i),o.buttonView.set({icon:nb,label:e("s"),tooltip:!0});const r=new tb(n);return o.panelView.children.add(r),r.delegate("execute").to(o),o.buttonView.on("open",()=>{r.rows=0,r.columns=0}),o.on("execute",()=>{t.execute("insertTable",{rows:r.rows,columns:r.columns}),t.editing.view.focus()}),o}),t.ui.componentFactory.add("tableColumn",t=>{const n=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:e("t"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableColumnLeft",label:e("u")}},{type:"button",model:{commandName:"insertTableColumnRight",label:e("v")}},{type:"button",model:{commandName:"removeTableColumn",label:e("w")}}];return this._prepareDropdown(e("x"),ib,n,t)}),t.ui.componentFactory.add("tableRow",t=>{const n=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:e("y"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowBelow",label:e("z")}},{type:"button",model:{commandName:"insertTableRowAbove",label:e("aa")}},{type:"button",model:{commandName:"removeTableRow",label:e("ab")}}];return this._prepareDropdown(e("ac"),ob,n,t)}),t.ui.componentFactory.add("mergeTableCells",t=>{const n=[{type:"button",model:{commandName:"mergeTableCellUp",label:e("ad")}},{type:"button",model:{commandName:"mergeTableCellRight",label:e("ae")}},{type:"button",model:{commandName:"mergeTableCellDown",label:e("af")}},{type:"button",model:{commandName:"mergeTableCellLeft",label:e("ag")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:e("ah")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:e("ai")}}];return this._prepareDropdown(e("aj"),rb,n,t)})}_prepareDropdown(t,e,n,i){const o=this.editor,r=Sf(i),s=[],a=new oo;for(const t of n)ab(t,o,s,a);return Mf(r,a),r.buttonView.set({label:t,icon:e,tooltip:!0}),r.bind("isEnabled").toMany(s,"isEnabled",(...t)=>t.some(t=>t)),this.listenTo(r,"execute",t=>{o.execute(t.source.commandName),o.editing.view.focus()}),r}}function ab(t,e,n,i){const o=t.model=new kf(t.model),{commandName:r,bindIsOn:s}=t.model;if("separator"!==t.type){const t=e.commands.get(r);n.push(t),o.set({commandName:r}),o.bind("isEnabled").to(t),s&&o.bind("isOn").to(t,"value")}o.set({withText:!0}),i.add(t)}n(89);n.d(e,"default",function(){return cb});class cb extends Ql{}cb.builtinPlugins=[class extends Kl{static get requires(){return[td,ad,hd,Td,Qd]}static get pluginName(){return"Essentials"}},oh,class extends Kl{static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats()}_addListAutoformats(){const t=this.editor.commands;t.get("bulletedList")&&new sh(this.editor,/^[*-]\s$/,"bulletedList"),t.get("numberedList")&&new sh(this.editor,/^1[.|)]\s$/,"numberedList")}_addBasicStylesAutoformats(){const t=this.editor.commands;if(t.get("bold")){const t=lh(this.editor,"bold");new ah(this.editor,/(\*\*)([^*]+)(\*\*)$/g,t),new ah(this.editor,/(__)([^_]+)(__)$/g,t)}if(t.get("italic")){const t=lh(this.editor,"italic");new ah(this.editor,/(?:^|[^*])(\*)([^*_]+)(\*)$/g,t),new ah(this.editor,/(?:^|[^_])(_)([^_]+)(_)$/g,t)}if(t.get("code")){const t=lh(this.editor,"code");new ah(this.editor,/(`)([^`]+)(`)$/g,t)}}_addHeadingAutoformats(){const t=this.editor.commands.get("heading");t&&t.modelElements.filter(t=>t.match(/^heading[1-6]$/)).forEach(e=>{const n=e[7],i=new RegExp(`^(#{${n}})\\s$`);new sh(this.editor,i,()=>{if(!t.isEnabled)return!1;this.editor.execute("heading",{value:e})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&new sh(this.editor,/^>\s$/,"blockQuote")}},class extends Kl{static get requires(){return[uh,gh]}static get pluginName(){return"Bold"}},class extends Kl{static get requires(){return[bh,_h]}static get pluginName(){return"Italic"}},class extends Kl{static get requires(){return[Ch,Sh]}static get pluginName(){return"BlockQuote"}},class extends Kl{static get pluginName(){return"CKFinder"}static get requires(){return[Rh,Eh,oh]}},class extends Kl{static get requires(){return[Fh,Hu,lf]}static get pluginName(){return"EasyImage"}},class extends Kl{static get requires(){return[wf,Ef]}static get pluginName(){return"Heading"}},Hu,class extends Kl{static get requires(){return[Of]}static get pluginName(){return"ImageCaption"}},class extends Kl{static get requires(){return[Gf,Qf]}static get pluginName(){return"ImageStyle"}},class extends Kl{static get requires(){return[Kf]}static get pluginName(){return"ImageToolbar"}afterInit(){const t=this.editor,e=t.t;t.plugins.get(Kf).register("image",{ariaLabel:e("b"),items:t.config.get("image.toolbar")||[],getRelatedElement:ou})}},lf,class extends Kl{static get requires(){return[Hm,Jm]}static get pluginName(){return"Link"}},class extends Kl{static get requires(){return[yg,Cg]}static get pluginName(){return"List"}},class extends Kl{static get requires(){return[jg,Ug,zg,fu]}static get pluginName(){return"MediaEmbed"}},uf,class extends Kl{static get pluginName(){return"PasteFromOffice"}static get requires(){return[td]}init(){const t=this.editor,e=[];e.push(new tp),e.push(new $g),t.plugins.get("Clipboard").on("inputTransformation",(t,n)=>{if(n.isTransformedWithPasteFromOffice)return;const i=n.dataTransfer.getData("text/html"),o=e.find(t=>t.isActive(i));o&&(o.execute(n),n.isTransformedWithPasteFromOffice=!0)},{priority:"high"})}},class extends Kl{static get requires(){return[Xp,sb,fu]}static get pluginName(){return"Table"}},class extends Kl{static get requires(){return[Kf]}static get pluginName(){return"TableToolbar"}afterInit(){const t=this.editor,e=t.t,n=t.plugins.get(Kf),i=t.config.get("table.contentToolbar"),o=t.config.get("table.tableToolbar");i&&n.register("tableContent",{ariaLabel:e("c"),items:i,getRelatedElement:dp}),o&&n.register("table",{ariaLabel:e("c"),items:o,getRelatedElement:lp})}}],cb.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","imageUpload","blockQuote","insertTable","mediaEmbed","undo","redo"]},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}}]).default});
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./resources/js/admin.js":
/*!*******************************!*\
  !*** ./resources/js/admin.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {});

var UploadAdapter =
/*#__PURE__*/
function () {
  function UploadAdapter(loader) {
    _classCallCheck(this, UploadAdapter);

    this.loader = loader;
    this.reject = undefined;
  }

  _createClass(UploadAdapter, [{
    key: "upload",
    value: function upload() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.reject = reject;
        var formData = new FormData();

        _this.loader.file.then(function (file) {
          formData.append('image', file);
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/admin/save-image', formData).then(function (_ref) {
            var data = _ref.data;
            resolve({
              "default": data.uri
            });
          });
        });
      });
    }
  }, {
    key: "abort",
    value: function abort() {
      this.reject();
    }
  }]);

  return UploadAdapter;
}();

_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default.a.create(document.querySelector('.js-ckeditor'), {
  removePlugins: ['ImageCaption', 'ImageStyle', 'ImageTextAlternative', 'ImageToolbar']
}).then(function (editor) {
  window.editor = editor;

  editor.plugins.get("FileRepository").createUploadAdapter = function (loader) {
    return new UploadAdapter(loader);
  };
})["catch"](function (err) {
  console.error(err.stack);
});

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/admin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aura/PhpstormProjects/Million-Flowers/resources/js/admin.js */"./resources/js/admin.js");


/***/ })

/******/ });