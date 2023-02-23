/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/autosize/dist/autosize.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.esm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var e=new Map;function t(t){var o=e.get(t);o&&o.destroy()}function o(t){var o=e.get(t);o&&o.update()}var r=null;"undefined"==typeof window?((r=function(e){return e}).destroy=function(e){return e},r.update=function(e){return e}):((r=function(t,o){return t&&Array.prototype.forEach.call(t.length?t:[t],function(t){return function(t){if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!e.has(t)){var o,r=null,n=window.getComputedStyle(t),i=(o=t.value,function(){a({testForHeightReduction:""===o||!t.value.startsWith(o),restoreTextAlign:null}),o=t.value}),l=function(o){t.removeEventListener("autosize:destroy",l),t.removeEventListener("autosize:update",s),t.removeEventListener("input",i),window.removeEventListener("resize",s),Object.keys(o).forEach(function(e){return t.style[e]=o[e]}),e.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,textAlign:t.style.textAlign,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",l),t.addEventListener("autosize:update",s),t.addEventListener("input",i),window.addEventListener("resize",s),t.style.overflowX="hidden",t.style.wordWrap="break-word",e.set(t,{destroy:l,update:s}),s()}function a(e){var o,i,l=e.restoreTextAlign,s=void 0===l?null:l,d=e.testForHeightReduction,u=void 0===d||d,c=n.overflowY;if(0!==t.scrollHeight&&("vertical"===n.resize?t.style.resize="none":"both"===n.resize&&(t.style.resize="horizontal"),u&&(o=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],o=e[1];t.style.scrollBehavior="auto",t.scrollTop=o,t.style.scrollBehavior=null})}}(t),t.style.height=""),i="content-box"===n.boxSizing?t.scrollHeight-(parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)):t.scrollHeight+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),"none"!==n.maxHeight&&i>parseFloat(n.maxHeight)?("hidden"===n.overflowY&&(t.style.overflow="scroll"),i=parseFloat(n.maxHeight)):"hidden"!==n.overflowY&&(t.style.overflow="hidden"),t.style.height=i+"px",s&&(t.style.textAlign=s),o&&o(),r!==i&&(t.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),r=i),c!==n.overflow&&!s)){var v=n.textAlign;"hidden"===n.overflow&&(t.style.textAlign="start"===v?"end":"start"),a({restoreTextAlign:v,testForHeightReduction:!0})}}function s(){a({testForHeightReduction:!0,restoreTextAlign:null})}}(t)}),t}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],t),e},r.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e});var n=r;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (n);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*#region CSS Reset Start */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/*#endregion CSS Reset End */", "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA,2BAA2B;AAC3B;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA,4BAA4B","sourcesContent":["/*#region CSS Reset Start */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/*#endregion CSS Reset End */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* #region GLOBALS */\n:root {\n  --main-font-color: black;\n  --pastel-yellow: #fdfd96;\n  --pepperoni-red: #b31925;\n  --box-shadow-thin: 2px 2px 5px #7a4b5454, -2px 2px 5px #7a4b5454;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  position: relative;\n}\n\nbutton {\n  text-align: left;\n  background-color: #ffffff;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  border-radius: 0.25rem;\n}\n\nbutton:hover {\n  background-color: #efefef;\n  font-weight: bold;\n}\n\ntextarea,\ninput[type=\"text\"] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n/* #endregion */\n\n/* #region HEADER */\nheader {\n  display: flex;\n  flex: 0 1 auto;\n  justify-content: center;\n  background-color: var(--pastel-yellow);\n  color: var(--main-font-color);\n  padding: 8px;\n}\n\naddress {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\naddress div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-style: italic;\n  font-weight: 540;\n  gap: 5px;\n}\n\naddress div img {\n  width: 1.5rem;\n}\n\naddress div p {\n  font-size: 12px;\n}\n/* #endregion */\n\n/* #region NAVIGATION */\n.nav-main {\n  padding: 20px;\n  display: flex;\n  flex: 0 1 auto;\n  justify-content: center;\n  box-shadow: var(--box-shadow-thin);\n}\n\n.nav-main ul {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 60%;\n}\n\n.nav-main ul img {\n  width: 64px;\n}\n\n.nav-main ul a {\n  text-decoration: none;\n  color: black;\n}\n\n.nav-main ul a:hover {\n  color: var(--pepperoni-red);\n}\n\n.nav-main ul .underline {\n  background-color: var(--pepperoni-red);\n  margin-top: 4px;\n  border: 1px solid black;\n}\n/* #endregion */\n\n/* #region FOOTER */\nfooter {\n  display: flex;\n  flex: 0 1 auto;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nfooter a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  color: black;\n  text-decoration: none;\n}\n\nfooter a:hover {\n  color: var(--pepperoni-red);\n}\n/* #endregion */\n\n/* #region HOME PAGE */\n\n#home-page {\n  flex: 1 1 auto;\n}\n\n#home-page main {\n}\n\n#home-page .content {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  gap: 10px;\n  position: relative;\n  max-width: 800px;\n  width: 100%;\n}\n\n#home-page .content h1 {\n  font-weight: bold;\n  font-size: 22px;\n}\n\n#header-div {\n  width: 100%;\n  display: flex;\n  align-items: end;\n  padding-top: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  gap: 10px;\n  box-sizing: border-box;\n}\n\n#header-date {\n  color: gray;\n  bottom: 1px;\n  position: relative;\n}\n\n#header-date {\n}\n\n#home-page .content #todo-master-container {\n  width: 100%;\n  padding-left: 5px;\n  padding-right: 5px;\n  box-sizing: border-box;\n  border-bottom: 1px solid rgb(221, 221, 221);\n\n}\n\n.todo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-top: 1px solid rgb(221, 221, 221);\n}\n\n.todo-left-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.check-icon {\n  padding: 3px;\n  border-radius: 0.25rem;\n}\n\n.check-icon:hover {\n  cursor: pointer;\n  background-color: rgba(221, 221, 221, 0.8);\n}\n\n.todo-meta-data-div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n}\n\n.todo-due-date {\n  background-color: yellowgreen;\n  color: white;\n  padding: 3px;\n  border-radius: 0.25rem;\n}\n\n.todo-due-date-overdue {\n  background-color: red;\n  color: white;\n  padding: 3px;\n  border-radius: 0.25rem;\n}\n\n.todo-list {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: grey;\n  color: white;\n}\n\n.todo-status-complete {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: blue;\n  color: white;\n}\n\n.todo-status-in-progress {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: lightblue;\n  color: white;\n}\n\n.todo-status-to-do {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: black;\n  color: white;\n}\n\n.todo-priority-high {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: crimson;\n  color: white;\n}\n\n.todo-priority-medium {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: orange;\n  color: white;\n}\n\n.todo-priority-low {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: lightgrey;\n  color: white;\n}\n\n.add-todo-btn {\n  width: 100%;\n  padding: 5px;\n  font-size: 16px;\n  color: rgb(124, 123, 123);\n}\n\n.task-form {\n  width: 100%;\n  border: 1px solid rgb(221, 221, 221);\n  padding: 3px;\n  box-sizing: border-box;\n  border-radius: 0.25rem;\n}\n\n.field {\n  margin-bottom: 5px;\n}\n\n.input {\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  border: 0;\n  font-size: 14px;\n  resize: none;\n}\n\n.extra-input {\n  border: 1px solid rgb(221, 221, 221);\n  padding: 3px;\n  border-radius: 0.25rem;\n  margin: 0;\n}\n\n.form-bottom-fields-container {\n  display: flex;\n}\n\n.extra-fields-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.submit-button-container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: end;\n  align-items: start;\n  gap: 5px;\n}\n\n.cancel-task-button {\n  border: 1px solid rgb(221, 221, 221);\n  padding: 3px;\n  padding-right: 15px;\n  padding-left: 15px;\n  font-size: 14px;\n  background-color: crimson;\n  color: white;\n  margin-top: 1px;\n}\n\n.submit-task-button {\n  border: 1px solid rgb(221, 221, 221);\n  padding: 3px;\n  padding-right: 15px;\n  padding-left: 15px;\n  font-size: 14px;\n  background-color: blue;\n  color: white;\n  margin-top: 1px;\n}\n\n.cancel-task-button:hover {\n  background-color:indianred;\n}\n\n.submit-task-button:hover {\n  background-color: cornflowerblue;\n}\n\n.delete-icon {\n  padding: 3px;\n  border-radius: 0.25rem;\n}\n\n.delete-icon:hover {\n  cursor: pointer;\n  background-color: rgba(221, 221, 221, 0.8);\n}\n\n/* #endregion */\n\n/* #region ABOUT PAGE */\n\n#about-page {\n  flex: 1 1 auto;\n}\n\n#about-page main {\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n#about-page main .content {\n  padding: 60px;\n  font-size: 26px;\n  align-items: start;\n  width: 80%;\n}\n\n/* #endregion */\n\n/* #region MENU PAGE */\n\n#menu-page {\n  flex: 1 1 auto;\n}\n\n#menu-page main {\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n#menu-page main .content {\n  padding: 60px;\n  font-size: 26px;\n  align-items: start;\n}\n\n/* #endregion */\n\n/* #region CONTACT PAGE */\n#contact-page {\n  flex: 1 1 auto;\n}\n\n#contact-page main {\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n#contact-page main .content {\n  padding: 60px;\n  font-size: 18px;\n  align-items: start;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 400px;\n}\n\n/* #endregion */\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["/* #region GLOBALS */\n:root {\n  --main-font-color: black;\n  --pastel-yellow: #fdfd96;\n  --pepperoni-red: #b31925;\n  --box-shadow-thin: 2px 2px 5px #7a4b5454, -2px 2px 5px #7a4b5454;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  position: relative;\n}\n\nbutton {\n  text-align: left;\n  background-color: #ffffff;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  border-radius: 0.25rem;\n}\n\nbutton:hover {\n  background-color: #efefef;\n  font-weight: bold;\n}\n\ntextarea,\ninput[type=\"text\"] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n/* #endregion */\n\n/* #region HEADER */\nheader {\n  display: flex;\n  flex: 0 1 auto;\n  justify-content: center;\n  background-color: var(--pastel-yellow);\n  color: var(--main-font-color);\n  padding: 8px;\n}\n\naddress {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\naddress div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-style: italic;\n  font-weight: 540;\n  gap: 5px;\n}\n\naddress div img {\n  width: 1.5rem;\n}\n\naddress div p {\n  font-size: 12px;\n}\n/* #endregion */\n\n/* #region NAVIGATION */\n.nav-main {\n  padding: 20px;\n  display: flex;\n  flex: 0 1 auto;\n  justify-content: center;\n  box-shadow: var(--box-shadow-thin);\n}\n\n.nav-main ul {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 60%;\n}\n\n.nav-main ul img {\n  width: 64px;\n}\n\n.nav-main ul a {\n  text-decoration: none;\n  color: black;\n}\n\n.nav-main ul a:hover {\n  color: var(--pepperoni-red);\n}\n\n.nav-main ul .underline {\n  background-color: var(--pepperoni-red);\n  margin-top: 4px;\n  border: 1px solid black;\n}\n/* #endregion */\n\n/* #region FOOTER */\nfooter {\n  display: flex;\n  flex: 0 1 auto;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nfooter a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  color: black;\n  text-decoration: none;\n}\n\nfooter a:hover {\n  color: var(--pepperoni-red);\n}\n/* #endregion */\n\n/* #region HOME PAGE */\n\n#home-page {\n  flex: 1 1 auto;\n}\n\n#home-page main {\n}\n\n#home-page .content {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  gap: 10px;\n  position: relative;\n  max-width: 800px;\n  width: 100%;\n}\n\n#home-page .content h1 {\n  font-weight: bold;\n  font-size: 22px;\n}\n\n#header-div {\n  width: 100%;\n  display: flex;\n  align-items: end;\n  padding-top: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  gap: 10px;\n  box-sizing: border-box;\n}\n\n#header-date {\n  color: gray;\n  bottom: 1px;\n  position: relative;\n}\n\n#header-date {\n}\n\n#home-page .content #todo-master-container {\n  width: 100%;\n  padding-left: 5px;\n  padding-right: 5px;\n  box-sizing: border-box;\n  border-bottom: 1px solid rgb(221, 221, 221);\n\n}\n\n.todo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-top: 1px solid rgb(221, 221, 221);\n}\n\n.todo-left-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.check-icon {\n  padding: 3px;\n  border-radius: 0.25rem;\n}\n\n.check-icon:hover {\n  cursor: pointer;\n  background-color: rgba(221, 221, 221, 0.8);\n}\n\n.todo-meta-data-div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n}\n\n.todo-due-date {\n  background-color: yellowgreen;\n  color: white;\n  padding: 3px;\n  border-radius: 0.25rem;\n}\n\n.todo-due-date-overdue {\n  background-color: red;\n  color: white;\n  padding: 3px;\n  border-radius: 0.25rem;\n}\n\n.todo-list {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: grey;\n  color: white;\n}\n\n.todo-status-complete {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: blue;\n  color: white;\n}\n\n.todo-status-in-progress {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: lightblue;\n  color: white;\n}\n\n.todo-status-to-do {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: black;\n  color: white;\n}\n\n.todo-priority-high {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: crimson;\n  color: white;\n}\n\n.todo-priority-medium {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: orange;\n  color: white;\n}\n\n.todo-priority-low {\n  border-radius: 0.25rem;\n  padding: 3px;\n  background-color: lightgrey;\n  color: white;\n}\n\n.add-todo-btn {\n  width: 100%;\n  padding: 5px;\n  font-size: 16px;\n  color: rgb(124, 123, 123);\n}\n\n.task-form {\n  width: 100%;\n  border: 1px solid rgb(221, 221, 221);\n  padding: 3px;\n  box-sizing: border-box;\n  border-radius: 0.25rem;\n}\n\n.field {\n  margin-bottom: 5px;\n}\n\n.input {\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  border: 0;\n  font-size: 14px;\n  resize: none;\n}\n\n.extra-input {\n  border: 1px solid rgb(221, 221, 221);\n  padding: 3px;\n  border-radius: 0.25rem;\n  margin: 0;\n}\n\n.form-bottom-fields-container {\n  display: flex;\n}\n\n.extra-fields-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.submit-button-container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: end;\n  align-items: start;\n  gap: 5px;\n}\n\n.cancel-task-button {\n  border: 1px solid rgb(221, 221, 221);\n  padding: 3px;\n  padding-right: 15px;\n  padding-left: 15px;\n  font-size: 14px;\n  background-color: crimson;\n  color: white;\n  margin-top: 1px;\n}\n\n.submit-task-button {\n  border: 1px solid rgb(221, 221, 221);\n  padding: 3px;\n  padding-right: 15px;\n  padding-left: 15px;\n  font-size: 14px;\n  background-color: blue;\n  color: white;\n  margin-top: 1px;\n}\n\n.cancel-task-button:hover {\n  background-color:indianred;\n}\n\n.submit-task-button:hover {\n  background-color: cornflowerblue;\n}\n\n.delete-icon {\n  padding: 3px;\n  border-radius: 0.25rem;\n}\n\n.delete-icon:hover {\n  cursor: pointer;\n  background-color: rgba(221, 221, 221, 0.8);\n}\n\n/* #endregion */\n\n/* #region ABOUT PAGE */\n\n#about-page {\n  flex: 1 1 auto;\n}\n\n#about-page main {\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n#about-page main .content {\n  padding: 60px;\n  font-size: 26px;\n  align-items: start;\n  width: 80%;\n}\n\n/* #endregion */\n\n/* #region MENU PAGE */\n\n#menu-page {\n  flex: 1 1 auto;\n}\n\n#menu-page main {\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n#menu-page main .content {\n  padding: 60px;\n  font-size: 26px;\n  align-items: start;\n}\n\n/* #endregion */\n\n/* #region CONTACT PAGE */\n#contact-page {\n  flex: 1 1 auto;\n}\n\n#contact-page main {\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n#contact-page main .content {\n  padding: 60px;\n  font-size: 18px;\n  align-items: start;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 400px;\n}\n\n/* #endregion */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listArray": () => (/* binding */ listArray),
/* harmony export */   "todoArray": () => (/* binding */ todoArray)
/* harmony export */ });
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _modules_pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pages/home */ "./src/modules/pages/home.ts");
/* harmony import */ var _modules_elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/elements/footer */ "./src/modules/elements/footer.ts");


// import { createHeader } from "./modules/elements/header";


var listArray = [];
var todoArray = [];
// Create initial list.
var initialList = {
    title: 'General'
};
listArray.push(initialList);
var content = document.body;
content.append(
//   createHeader(),
//   createNavMain(),
(0,_modules_pages_home__WEBPACK_IMPORTED_MODULE_2__.createHomePage)(), 
//   createAboutPage(),
//   createMenuPage(),
//   createContactPage(),
(0,_modules_elements_footer__WEBPACK_IMPORTED_MODULE_3__.createFooter)());

// animateNavMain()
// const hidePages = (...pages) => {
//   for (const page of pages) page.style.display = "none";
// };
// const homePage = document.querySelector("#home-page");
// const aboutPage = document.querySelector("#about-page");
// const menuPage = document.querySelector("#menu-page");
// const contactPage = document.querySelector("#contact-page");
// window.addEventListener("pageshow", () => hidePages(aboutPage, menuPage, contactPage));
// const pageLinks = document.querySelectorAll(".nav-main a");
// for (const pageLink of pageLinks) {
//   pageLink.addEventListener("click", () => {
//     if (pageLink.parentElement.classList.contains("home")) {
//       homePage.style.display = "flex";
//       hidePages(aboutPage, menuPage, contactPage);
//     }
//     if (pageLink.parentElement.classList.contains("about")) {
//       aboutPage.style.display = "flex";
//       hidePages(homePage, menuPage, contactPage);
//     }
//     if (pageLink.parentElement.classList.contains("menu")) {
//       menuPage.style.display = "flex";
//       hidePages(homePage, aboutPage, contactPage)
//     }
//     if (pageLink.parentElement.classList.contains("contact")) {
//       contactPage.style.display = "flex";
//       hidePages(homePage, aboutPage, menuPage);
//     }
//   });
// }


/***/ }),

/***/ "./src/modules/elements/footer.ts":
/*!****************************************!*\
  !*** ./src/modules/elements/footer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _img_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/github.svg */ "./src/img/github.svg");

var createFooter = function () {
    var createContent = function () {
        var githubIcon = document.createElement("img");
        githubIcon.src = _img_github_svg__WEBPACK_IMPORTED_MODULE_0__;
        githubIcon.alt = "Github icon";
        var caption = document.createElement("p");
        caption.textContent = "Euan Williams";
        var content = document.createElement("a");
        content.setAttribute("href", "https://github.com/EuanRW");
        content.setAttribute("target", "_blank");
        content.setAttribute("rel", "noopener noreferrer");
        content.append(caption, githubIcon);
        return content;
    };
    var footer = document.createElement("footer");
    footer.appendChild(createContent());
    return footer;
};



/***/ }),

/***/ "./src/modules/elements/todo.ts":
/*!**************************************!*\
  !*** ./src/modules/elements/todo.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.ts");
/* harmony import */ var _img_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/trash.svg */ "./src/img/trash.svg");
/* harmony import */ var _img_circle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/circle.svg */ "./src/img/circle.svg");
/* harmony import */ var _img_check_circle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/check-circle.svg */ "./src/img/check-circle.svg");
/* harmony import */ var _functions_removeTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/removeTodo */ "./src/modules/functions/removeTodo.ts");
/* harmony import */ var _functions_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/formatDate */ "./src/modules/functions/formatDate.ts");
/* harmony import */ var _functions_modifyTodo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/modifyTodo */ "./src/modules/functions/modifyTodo.ts");







var createTodo = function (todo) {
    //Update master todo list with this todo.
    ___WEBPACK_IMPORTED_MODULE_0__.todoArray.push(todo);
    //Create todo element.
    var todoDiv = document.createElement("div");
    todoDiv.setAttribute("id", "todo-".concat(todo.id));
    todoDiv.setAttribute("class", "todo");
    var createTodoLeftDiv = function () {
        var todoLeftDiv = document.createElement("div");
        todoLeftDiv.setAttribute("class", "todo-left-container");
        var createCheckIconContainer = function () {
            var checkDiv = document.createElement("div");
            checkDiv.setAttribute("id", "check-container");
            var createUncheckedIcon = function () {
                var icon = document.createElement("img");
                icon.setAttribute("class", "check-icon");
                icon.setAttribute("id", "unchecked-icon");
                icon.src = _img_circle_svg__WEBPACK_IMPORTED_MODULE_2__;
                icon.alt = "Unchecked task icon.";
                icon.addEventListener("click", function () {
                    icon.remove();
                    checkDiv.append(createCheckedIcon());
                    var checkedTodo = todo;
                    checkedTodo.status = "Complete";
                    (0,_functions_modifyTodo__WEBPACK_IMPORTED_MODULE_6__.modifyTodo)(checkedTodo);
                });
                return icon;
            };
            var createCheckedIcon = function () {
                var icon = document.createElement("img");
                icon.setAttribute("class", "check-icon");
                icon.setAttribute("id", "checked-icon");
                icon.src = _img_check_circle_svg__WEBPACK_IMPORTED_MODULE_3__;
                icon.alt = "Checked task icon.";
                icon.addEventListener("click", function () {
                    icon.remove();
                    checkDiv.append(createUncheckedIcon());
                    var uncheckedTodo = todo;
                    uncheckedTodo.status = "To do";
                    (0,_functions_modifyTodo__WEBPACK_IMPORTED_MODULE_6__.modifyTodo)(uncheckedTodo);
                });
                return icon;
            };
            checkDiv.append(createUncheckedIcon());
            return checkDiv;
        };
        var todoTitle = document.createElement("p");
        todoTitle.setAttribute("id", "todo-".concat(todo.id, "-title"));
        todoTitle.textContent = todo.title;
        todoLeftDiv.append(createCheckIconContainer(), todoTitle);
        return todoLeftDiv;
    };
    var createMetaDataDiv = function () {
        var todoMetaDataDiv = document.createElement("div");
        todoMetaDataDiv.setAttribute("class", "todo-meta-data-div");
        var dueDate = document.createElement("p");
        dueDate.setAttribute("id", "todo-".concat(todo.id, "-due-date"));
        var today = new Date();
        var differenceInMilliseconds = todo.dueDate.getTime() - today.getTime();
        var differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
        if (differenceInDays > 0) {
            dueDate.classList.add("todo-due-date");
        }
        else {
            dueDate.classList.add("todo-due-date-overdue");
        }
        dueDate.textContent = (0,_functions_formatDate__WEBPACK_IMPORTED_MODULE_5__.formatDate)(todo.dueDate);
        var status = document.createElement("p");
        status.setAttribute("id", "todo-".concat(todo.id, "-status"));
        status.textContent = todo.status;
        status.setAttribute("class", "status");
        if (todo.status == "Complete") {
            status.classList.add("todo-status-complete");
        }
        else if (todo.status == "To do") {
            status.classList.add("todo-status-to-do");
        }
        var priority = document.createElement("p");
        priority.setAttribute("id", "todo-".concat(todo.id, "-priority"));
        priority.textContent = todo.priority;
        priority.setAttribute("class", "priority");
        if (todo.priority == "High") {
            priority.classList.add("todo-priority-high");
        }
        else if (todo.priority == "Medium") {
            priority.classList.add("todo-priority-medium");
        }
        else if (todo.priority == "Low") {
            priority.classList.add("todo-priority-low");
        }
        var list = document.createElement("p");
        list.setAttribute("id", "todo-".concat(todo.id, "-list"));
        list.textContent = todo.list.title;
        list.setAttribute("class", "todo-list");
        var deleteIcon = document.createElement("img");
        deleteIcon.setAttribute("class", "delete-icon");
        deleteIcon.src = _img_trash_svg__WEBPACK_IMPORTED_MODULE_1__;
        deleteIcon.alt = "Delete task icon.";
        deleteIcon.addEventListener("click", function () {
            (0,_functions_removeTodo__WEBPACK_IMPORTED_MODULE_4__.removeTodo)(todoDiv);
        });
        todoMetaDataDiv.append(dueDate, status, priority, list, deleteIcon);
        return todoMetaDataDiv;
    };
    todoDiv.append(createTodoLeftDiv(), createMetaDataDiv());
    var content = document.body;
    content.appendChild(todoDiv);
    return todoDiv;
};



/***/ }),

/***/ "./src/modules/functions/createPage.ts":
/*!*********************************************!*\
  !*** ./src/modules/functions/createPage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPage": () => (/* binding */ createPage)
/* harmony export */ });
var createPage = function (pageName) {
    var page = document.createElement("div");
    page.setAttribute("id", "".concat(pageName, "-page"));
    var content = document.body;
    content.appendChild(page);
    return page;
};



/***/ }),

/***/ "./src/modules/functions/formatDate.ts":
/*!*********************************************!*\
  !*** ./src/modules/functions/formatDate.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate)
/* harmony export */ });
var formatDate = function (date) {
    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthsOfYear = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var dayOfWeek = daysOfWeek[date.getDay()];
    var dayOfMonth = date.getDate();
    var month = monthsOfYear[date.getMonth()];
    var formattedDate = "".concat(dayOfWeek, " ").concat(dayOfMonth, " ").concat(month);
    return formattedDate;
};



/***/ }),

/***/ "./src/modules/functions/handleFormSubmit.ts":
/*!***************************************************!*\
  !*** ./src/modules/functions/handleFormSubmit.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleFormSubmit": () => (/* binding */ handleFormSubmit)
/* harmony export */ });
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var handleFormSubmit = function (formElementID) {
    var e_1, _a;
    var formData = new FormData(document.querySelector(formElementID));
    var dataArray = [];
    try {
        for (var formData_1 = __values(formData), formData_1_1 = formData_1.next(); !formData_1_1.done; formData_1_1 = formData_1.next()) {
            var entry = formData_1_1.value;
            dataArray.push(entry);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (formData_1_1 && !formData_1_1.done && (_a = formData_1.return)) _a.call(formData_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var dataObject = Object.fromEntries(dataArray);
    return dataObject;
};



/***/ }),

/***/ "./src/modules/functions/modifyTodo.ts":
/*!*********************************************!*\
  !*** ./src/modules/functions/modifyTodo.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modifyTodo": () => (/* binding */ modifyTodo)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.ts");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatDate */ "./src/modules/functions/formatDate.ts");


var modifyTodo = function (todo) {
    //Update state array
    var modificationIndex = ___WEBPACK_IMPORTED_MODULE_0__.todoArray.map(function (e) { return e.id; }).indexOf(todo.id);
    ___WEBPACK_IMPORTED_MODULE_0__.todoArray[modificationIndex] = todo;
    //Update UI
    //Title
    var todoTitle = document.getElementById("todo-".concat(todo.id, "-title"));
    todoTitle.textContent = todo.title;
    //Due date
    var todoDueDate = document.getElementById("todo-".concat(todo.id, "-due-date"));
    todoDueDate.className = "";
    var today = new Date();
    var differenceInMilliseconds = todo.dueDate.getTime() - today.getTime();
    var differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    if (differenceInDays > 0) {
        todoDueDate.classList.add("todo-due-date");
    }
    else {
        todoDueDate.classList.add("todo-due-date-overdue");
    }
    todoDueDate.textContent = (0,_formatDate__WEBPACK_IMPORTED_MODULE_1__.formatDate)(todo.dueDate);
    //Status
    var todoStatus = document.getElementById("todo-".concat(todo.id, "-status"));
    todoStatus.textContent = todo.status;
    //Priority
    var todoPriority = document.getElementById("todo-".concat(todo.id, "-priority"));
    todoPriority.textContent = todo.priority;
    //List
    var todoList = document.getElementById("todo-".concat(todo.id, "-list"));
    todoList.textContent = todo.priority;
};



/***/ }),

/***/ "./src/modules/functions/removeTodo.ts":
/*!*********************************************!*\
  !*** ./src/modules/functions/removeTodo.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.ts");

var removeTodo = function (todoDiv) {
    // Remove from todoArray
    var id = +todoDiv.id.replace('todo-', '');
    ___WEBPACK_IMPORTED_MODULE_0__.todoArray.splice(___WEBPACK_IMPORTED_MODULE_0__.todoArray.findIndex(function (item) { return item.id === id; }), 1);
    // Remove todo element.
    todoDiv.remove();
};



/***/ }),

/***/ "./src/modules/objects/list.ts":
/*!*************************************!*\
  !*** ./src/modules/objects/list.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listExampleData": () => (/* binding */ listExampleData)
/* harmony export */ });
var listExampleData = {
    title: "General",
};



/***/ }),

/***/ "./src/modules/objects/todo.ts":
/*!*************************************!*\
  !*** ./src/modules/objects/todo.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoExampleData": () => (/* binding */ todoExampleData)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/modules/objects/list.ts");

var todoExampleData = {
    id: 1,
    title: "Complete TypeScript project",
    description: "Finish building a todo app with TypeScript",
    dueDate: new Date("2023-03-15"),
    list: _list__WEBPACK_IMPORTED_MODULE_0__.listExampleData,
    priority: "High",
    status: "To do"
};



/***/ }),

/***/ "./src/modules/pages/home.ts":
/*!***********************************!*\
  !*** ./src/modules/pages/home.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _functions_createPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createPage */ "./src/modules/functions/createPage.ts");
/* harmony import */ var _elements_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/todo */ "./src/modules/elements/todo.ts");
/* harmony import */ var _objects_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/todo */ "./src/modules/objects/todo.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.. */ "./src/index.ts");
/* harmony import */ var _functions_handleFormSubmit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/handleFormSubmit */ "./src/modules/functions/handleFormSubmit.ts");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.esm.js");
/* harmony import */ var _functions_formatDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/formatDate */ "./src/modules/functions/formatDate.ts");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};








var createMainContent = function () {
    var createContent = function () {
        var createHeader = function () {
            // TODO: Add list creating button.
            var headerDiv = document.createElement("div");
            headerDiv.setAttribute("id", "header-div");
            var header = document.createElement("h1");
            header.textContent = "All Todos";
            var date = document.createElement("p");
            date.setAttribute("id", "header-date");
            date.textContent = (0,_functions_formatDate__WEBPACK_IMPORTED_MODULE_6__.formatDate)(new Date());
            headerDiv.appendChild(header);
            headerDiv.appendChild(date);
            return headerDiv;
        };
        var createTodoContainer = function () {
            var todoContainer = document.createElement("div");
            todoContainer.setAttribute("id", "todo-master-container");
            todoContainer.append((0,_elements_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(_objects_todo__WEBPACK_IMPORTED_MODULE_2__.todoExampleData));
            return todoContainer;
        };
        var createAddTodoBtn = function () {
            var btn = document.createElement("button");
            btn.setAttribute("type", "button");
            btn.textContent = "Add todo...";
            btn.setAttribute("class", "add-todo-btn");
            btn.addEventListener("click", function () {
                btn.remove();
                content.append(createForm());
            });
            return btn;
        };
        var createForm = function () {
            var createTitleInput = function () {
                var field = document.createElement("div");
                field.setAttribute("class", "field");
                var input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("id", "task_title");
                input.setAttribute("name", "task_title");
                input.setAttribute("maxlength", "30");
                input.setAttribute("placeholder", "Task title");
                input.setAttribute("title", "Please enter a valid name (must only contain letters or numbers).");
                input.setAttribute("required", "");
                input.classList.add("input");
                field.append(input);
                return field;
            };
            var createDescriptionInput = function () {
                var field = document.createElement("div");
                field.setAttribute("class", "field");
                var input = document.createElement("textarea");
                input.setAttribute("id", "task_description");
                input.setAttribute("name", "task_description");
                input.setAttribute("cols", "20");
                input.setAttribute("rows", "1");
                input.setAttribute("placeholder", "Task description");
                input.setAttribute("title", "Please enter your message here.");
                input.setAttribute("required", "");
                input.classList.add("input");
                (0,autosize__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
                field.append(input);
                return field;
            };
            var createDueDateInput = function () {
                var field = document.createElement("div");
                field.setAttribute("class", "field");
                var input = document.createElement("input");
                input.setAttribute("type", "date");
                input.setAttribute("id", "task_due_date");
                input.setAttribute("name", "task_due_date");
                input.setAttribute("placeholder", "Task due date.");
                input.setAttribute("title", "Please enter task due date here.");
                input.setAttribute("required", "");
                input.setAttribute("value", (new Date()).toISOString().split('T')[0]);
                input.classList.add("extra-input");
                field.append(input);
                return field;
            };
            var createPriorityInput = function () {
                var field = document.createElement("div");
                field.setAttribute("class", "field");
                var input = document.createElement("select");
                input.setAttribute("type", "text");
                input.setAttribute("id", "task_priority");
                input.setAttribute("name", "task_priority");
                input.setAttribute("maxlength", "30");
                input.setAttribute("placeholder", "Task priority");
                input.setAttribute("title", "Please enter a valid name (must only contain letters or numbers).");
                input.setAttribute("required", "");
                input.classList.add("extra-input");
                var option1 = document.createElement("option");
                option1.value = "High";
                option1.text = "High";
                var option2 = document.createElement("option");
                option2.value = "Medium";
                option2.text = "Medium";
                var option3 = document.createElement("option");
                option3.value = "Low";
                option3.text = "Low";
                input.appendChild(option1);
                input.appendChild(option2);
                input.appendChild(option3);
                field.append(input);
                return field;
            };
            var createListInput = function () {
                var field = document.createElement("div");
                field.setAttribute("class", "field");
                var input = document.createElement("select");
                input.setAttribute("type", "text");
                input.setAttribute("id", "task_list");
                input.setAttribute("name", "task_list");
                input.setAttribute("maxlength", "30");
                input.setAttribute("placeholder", "Task list");
                input.setAttribute("title", "Please enter a valid name (must only contain letters or numbers).");
                input.setAttribute("required", "");
                input.classList.add("extra-input");
                var listTitlesArray = ___WEBPACK_IMPORTED_MODULE_3__.listArray.map(function (list) { return list.title; });
                //Create and append the options
                for (var i = 0; i < listTitlesArray.length; i++) {
                    var option = document.createElement("option");
                    option.value = listTitlesArray[i];
                    option.text = listTitlesArray[i];
                    input.appendChild(option);
                }
                field.append(input);
                return field;
            };
            var createCancelBtn = function () {
                var btn = document.createElement("button");
                btn.setAttribute("type", "reset");
                btn.setAttribute("class", "cancel-task-button");
                btn.textContent = "Cancel";
                btn.addEventListener("click", function () {
                    form.remove();
                    content.append(createAddTodoBtn());
                });
                return btn;
            };
            var createSubmitBtn = function () {
                var btn = document.createElement("button");
                btn.setAttribute("type", "reset");
                btn.setAttribute("class", "submit-task-button");
                btn.textContent = "Submit";
                btn.addEventListener("click", function () {
                    var todoMasterDiv = document.getElementById("todo-master-container");
                    var dataObject = (0,_functions_handleFormSubmit__WEBPACK_IMPORTED_MODULE_4__.handleFormSubmit)("#new-task-form");
                    var todo = {
                        id: Math.max.apply(Math, __spreadArray([], __read(___WEBPACK_IMPORTED_MODULE_3__.todoArray.map(function (o) { return o.id; })), false)) + 1,
                        title: dataObject.task_title.toString(),
                        description: dataObject.task_description.toString(),
                        dueDate: new Date(dataObject.task_due_date.toString()),
                        list: ___WEBPACK_IMPORTED_MODULE_3__.listArray.find(function (o) { return o.title === dataObject.task_list.toString(); }),
                        priority: dataObject.task_priority.toString(),
                        status: "To do",
                    };
                    todoMasterDiv.append((0,_elements_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(todo));
                    form.remove();
                    content.append(createAddTodoBtn());
                });
                return btn;
            };
            var createExtraFields = function () {
                var formBottomFields = document.createElement("div");
                formBottomFields.setAttribute("class", "form-bottom-fields-container");
                var extraFieldsDiv = document.createElement("div");
                extraFieldsDiv.setAttribute("class", "extra-fields-container");
                var submitButtonDiv = document.createElement("div");
                submitButtonDiv.setAttribute("class", "submit-button-container");
                extraFieldsDiv.append(createDueDateInput(), createPriorityInput(), createListInput());
                submitButtonDiv.append(createCancelBtn(), createSubmitBtn());
                formBottomFields.append(extraFieldsDiv, submitButtonDiv);
                return formBottomFields;
            };
            var form = document.createElement("form");
            form.setAttribute("action", "");
            form.setAttribute("method", "");
            form.setAttribute("class", "task-form");
            form.setAttribute("id", "new-task-form");
            form.append(createTitleInput(), createDescriptionInput(), createExtraFields());
            return form;
        };
        var content = document.createElement("div");
        content.setAttribute("class", "content");
        content.append(createHeader(), createTodoContainer(), createAddTodoBtn());
        return content;
    };
    var main = document.createElement("main");
    main.append(createContent());
    return main;
};
var createHomePage = function () {
    var homePage = (0,_functions_createPage__WEBPACK_IMPORTED_MODULE_0__.createPage)("home");
    homePage.appendChild(createMainContent());
    return homePage;
};



/***/ }),

/***/ "./src/img/check-circle.svg":
/*!**********************************!*\
  !*** ./src/img/check-circle.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36780d69060f0ff7699a.svg";

/***/ }),

/***/ "./src/img/circle.svg":
/*!****************************!*\
  !*** ./src/img/circle.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "201c4d244a7738ea39cc.svg";

/***/ }),

/***/ "./src/img/github.svg":
/*!****************************!*\
  !*** ./src/img/github.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04be58c17b3d5e974442.svg";

/***/ }),

/***/ "./src/img/trash.svg":
/*!***************************!*\
  !*** ./src/img/trash.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f56940babd76a5d39fe0.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFBMkYsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sV0FBVyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sV0FBVyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sV0FBVyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxXQUFXLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsYUFBYSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sV0FBVyxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZ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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvYXV0b3NpemUvZGlzdC9hdXRvc2l6ZS5lc20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvZWxlbWVudHMvZm9vdGVyLnRzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2VsZW1lbnRzL3RvZG8udHMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL2NyZWF0ZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL2Zvcm1hdERhdGUudHMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL2hhbmRsZUZvcm1TdWJtaXQudHMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL21vZGlmeVRvZG8udHMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL3JlbW92ZVRvZG8udHMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvb2JqZWN0cy9saXN0LnRzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL29iamVjdHMvdG9kby50cyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlcy9ob21lLnRzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGU9bmV3IE1hcDtmdW5jdGlvbiB0KHQpe3ZhciBvPWUuZ2V0KHQpO28mJm8uZGVzdHJveSgpfWZ1bmN0aW9uIG8odCl7dmFyIG89ZS5nZXQodCk7byYmby51cGRhdGUoKX12YXIgcj1udWxsO1widW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3c/KChyPWZ1bmN0aW9uKGUpe3JldHVybiBlfSkuZGVzdHJveT1mdW5jdGlvbihlKXtyZXR1cm4gZX0sci51cGRhdGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9KTooKHI9ZnVuY3Rpb24odCxvKXtyZXR1cm4gdCYmQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0Lmxlbmd0aD90Olt0XSxmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7aWYodCYmdC5ub2RlTmFtZSYmXCJURVhUQVJFQVwiPT09dC5ub2RlTmFtZSYmIWUuaGFzKHQpKXt2YXIgbyxyPW51bGwsbj13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KSxpPShvPXQudmFsdWUsZnVuY3Rpb24oKXthKHt0ZXN0Rm9ySGVpZ2h0UmVkdWN0aW9uOlwiXCI9PT1vfHwhdC52YWx1ZS5zdGFydHNXaXRoKG8pLHJlc3RvcmVUZXh0QWxpZ246bnVsbH0pLG89dC52YWx1ZX0pLGw9ZnVuY3Rpb24obyl7dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYXV0b3NpemU6ZGVzdHJveVwiLGwpLHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImF1dG9zaXplOnVwZGF0ZVwiLHMpLHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsaSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixzKSxPYmplY3Qua2V5cyhvKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiB0LnN0eWxlW2VdPW9bZV19KSxlLmRlbGV0ZSh0KX0uYmluZCh0LHtoZWlnaHQ6dC5zdHlsZS5oZWlnaHQscmVzaXplOnQuc3R5bGUucmVzaXplLHRleHRBbGlnbjp0LnN0eWxlLnRleHRBbGlnbixvdmVyZmxvd1k6dC5zdHlsZS5vdmVyZmxvd1ksb3ZlcmZsb3dYOnQuc3R5bGUub3ZlcmZsb3dYLHdvcmRXcmFwOnQuc3R5bGUud29yZFdyYXB9KTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJhdXRvc2l6ZTpkZXN0cm95XCIsbCksdC5hZGRFdmVudExpc3RlbmVyKFwiYXV0b3NpemU6dXBkYXRlXCIscyksdC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixpKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHMpLHQuc3R5bGUub3ZlcmZsb3dYPVwiaGlkZGVuXCIsdC5zdHlsZS53b3JkV3JhcD1cImJyZWFrLXdvcmRcIixlLnNldCh0LHtkZXN0cm95OmwsdXBkYXRlOnN9KSxzKCl9ZnVuY3Rpb24gYShlKXt2YXIgbyxpLGw9ZS5yZXN0b3JlVGV4dEFsaWduLHM9dm9pZCAwPT09bD9udWxsOmwsZD1lLnRlc3RGb3JIZWlnaHRSZWR1Y3Rpb24sdT12b2lkIDA9PT1kfHxkLGM9bi5vdmVyZmxvd1k7aWYoMCE9PXQuc2Nyb2xsSGVpZ2h0JiYoXCJ2ZXJ0aWNhbFwiPT09bi5yZXNpemU/dC5zdHlsZS5yZXNpemU9XCJub25lXCI6XCJib3RoXCI9PT1uLnJlc2l6ZSYmKHQuc3R5bGUucmVzaXplPVwiaG9yaXpvbnRhbFwiKSx1JiYobz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9W107ZSYmZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50OyllLnBhcmVudE5vZGUuc2Nyb2xsVG9wJiZ0LnB1c2goW2UucGFyZW50Tm9kZSxlLnBhcmVudE5vZGUuc2Nyb2xsVG9wXSksZT1lLnBhcmVudE5vZGU7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1lWzBdLG89ZVsxXTt0LnN0eWxlLnNjcm9sbEJlaGF2aW9yPVwiYXV0b1wiLHQuc2Nyb2xsVG9wPW8sdC5zdHlsZS5zY3JvbGxCZWhhdmlvcj1udWxsfSl9fSh0KSx0LnN0eWxlLmhlaWdodD1cIlwiKSxpPVwiY29udGVudC1ib3hcIj09PW4uYm94U2l6aW5nP3Quc2Nyb2xsSGVpZ2h0LShwYXJzZUZsb2F0KG4ucGFkZGluZ1RvcCkrcGFyc2VGbG9hdChuLnBhZGRpbmdCb3R0b20pKTp0LnNjcm9sbEhlaWdodCtwYXJzZUZsb2F0KG4uYm9yZGVyVG9wV2lkdGgpK3BhcnNlRmxvYXQobi5ib3JkZXJCb3R0b21XaWR0aCksXCJub25lXCIhPT1uLm1heEhlaWdodCYmaT5wYXJzZUZsb2F0KG4ubWF4SGVpZ2h0KT8oXCJoaWRkZW5cIj09PW4ub3ZlcmZsb3dZJiYodC5zdHlsZS5vdmVyZmxvdz1cInNjcm9sbFwiKSxpPXBhcnNlRmxvYXQobi5tYXhIZWlnaHQpKTpcImhpZGRlblwiIT09bi5vdmVyZmxvd1kmJih0LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIpLHQuc3R5bGUuaGVpZ2h0PWkrXCJweFwiLHMmJih0LnN0eWxlLnRleHRBbGlnbj1zKSxvJiZvKCksciE9PWkmJih0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYXV0b3NpemU6cmVzaXplZFwiLHtidWJibGVzOiEwfSkpLHI9aSksYyE9PW4ub3ZlcmZsb3cmJiFzKSl7dmFyIHY9bi50ZXh0QWxpZ247XCJoaWRkZW5cIj09PW4ub3ZlcmZsb3cmJih0LnN0eWxlLnRleHRBbGlnbj1cInN0YXJ0XCI9PT12P1wiZW5kXCI6XCJzdGFydFwiKSxhKHtyZXN0b3JlVGV4dEFsaWduOnYsdGVzdEZvckhlaWdodFJlZHVjdGlvbjohMH0pfX1mdW5jdGlvbiBzKCl7YSh7dGVzdEZvckhlaWdodFJlZHVjdGlvbjohMCxyZXN0b3JlVGV4dEFsaWduOm51bGx9KX19KHQpfSksdH0pLmRlc3Ryb3k9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJkFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZS5sZW5ndGg/ZTpbZV0sdCksZX0sci51cGRhdGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJkFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZS5sZW5ndGg/ZTpbZV0sbyksZX0pO3ZhciBuPXI7ZXhwb3J0IGRlZmF1bHQgbjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyojcmVnaW9uIENTUyBSZXNldCBTdGFydCAqL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG4vKiNlbmRyZWdpb24gQ1NTIFJlc2V0IEVuZCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJCQUEyQjtBQUMzQjs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7QUFDQSw0QkFBNEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyojcmVnaW9uIENTUyBSZXNldCBTdGFydCAqL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG4vKiNlbmRyZWdpb24gQ1NTIFJlc2V0IEVuZCAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICNyZWdpb24gR0xPQkFMUyAqL1xcbjpyb290IHtcXG4gIC0tbWFpbi1mb250LWNvbG9yOiBibGFjaztcXG4gIC0tcGFzdGVsLXllbGxvdzogI2ZkZmQ5NjtcXG4gIC0tcGVwcGVyb25pLXJlZDogI2IzMTkyNTtcXG4gIC0tYm94LXNoYWRvdy10aGluOiAycHggMnB4IDVweCAjN2E0YjU0NTQsIC0ycHggMnB4IDVweCAjN2E0YjU0NTQ7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbnRleHRhcmVhLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiAjcmVnaW9uIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhc3RlbC15ZWxsb3cpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbmFkZHJlc3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuYWRkcmVzcyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA1NDA7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuYWRkcmVzcyBkaXYgaW1nIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbmFkZHJlc3MgZGl2IHAge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogI3JlZ2lvbiBOQVZJR0FUSU9OICovXFxuLm5hdi1tYWluIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMCAxIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdGhpbik7XFxufVxcblxcbi5uYXYtbWFpbiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5uYXYtbWFpbiB1bCBpbWcge1xcbiAgd2lkdGg6IDY0cHg7XFxufVxcblxcbi5uYXYtbWFpbiB1bCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm5hdi1tYWluIHVsIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXBlcHBlcm9uaS1yZWQpO1xcbn1cXG5cXG4ubmF2LW1haW4gdWwgLnVuZGVybGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZXBwZXJvbmktcmVkKTtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogI3JlZ2lvbiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXBlcHBlcm9uaS1yZWQpO1xcbn1cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogI3JlZ2lvbiBIT01FIFBBR0UgKi9cXG5cXG4jaG9tZS1wYWdlIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cXG4jaG9tZS1wYWdlIG1haW4ge1xcbn1cXG5cXG4jaG9tZS1wYWdlIC5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNob21lLXBhZ2UgLmNvbnRlbnQgaDEge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbiNoZWFkZXItZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBnYXA6IDEwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jaGVhZGVyLWRhdGUge1xcbiAgY29sb3I6IGdyYXk7XFxuICBib3R0b206IDFweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2hlYWRlci1kYXRlIHtcXG59XFxuXFxuI2hvbWUtcGFnZSAuY29udGVudCAjdG9kby1tYXN0ZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcXG5cXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XFxufVxcblxcbi50b2RvLWxlZnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY2hlY2staWNvbiB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uY2hlY2staWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuOCk7XFxufVxcblxcbi50b2RvLW1ldGEtZGF0YS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnRvZG8tZHVlLWRhdGUtb3ZlcmR1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1zdGF0dXMtY29tcGxldGUge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLXN0YXR1cy1pbi1wcm9ncmVzcyB7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1zdGF0dXMtdG8tZG8ge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eS1oaWdoIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eS1tZWRpdW0ge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHktbG93IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogcmdiKDEyNCwgMTIzLCAxMjMpO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5maWVsZCB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmV4dHJhLWlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5mb3JtLWJvdHRvbS1maWVsZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5leHRyYS1maWVsZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmNhbmNlbC10YXNrLWJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG59XFxuXFxuLnN1Ym1pdC10YXNrLWJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG59XFxuXFxuLmNhbmNlbC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOmluZGlhbnJlZDtcXG59XFxuXFxuLnN1Ym1pdC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uIHtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5kZWxldGUtaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuOCk7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiAjcmVnaW9uIEFCT1VUIFBBR0UgKi9cXG5cXG4jYWJvdXQtcGFnZSB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuI2Fib3V0LXBhZ2UgbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI2Fib3V0LXBhZ2UgbWFpbiAuY29udGVudCB7XFxuICBwYWRkaW5nOiA2MHB4O1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qICNyZWdpb24gTUVOVSBQQUdFICovXFxuXFxuI21lbnUtcGFnZSB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuI21lbnUtcGFnZSBtYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4jbWVudS1wYWdlIG1haW4gLmNvbnRlbnQge1xcbiAgcGFkZGluZzogNjBweDtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qICNyZWdpb24gQ09OVEFDVCBQQUdFICovXFxuI2NvbnRhY3QtcGFnZSB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuI2NvbnRhY3QtcGFnZSBtYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4jY29udGFjdC1wYWdlIG1haW4gLmNvbnRlbnQge1xcbiAgcGFkZGluZzogNjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9CQUFvQjtBQUNwQjtFQUNFLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFD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dEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBDQUEwQztBQUM1Qzs7QUFFQSxlQUFlOztBQUVmLHVCQUF1Qjs7QUFFdkI7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZOztFQUVaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBLGVBQWU7O0FBRWYsc0JBQXNCOztBQUV0QjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7O0VBRVosYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQSxlQUFlOztBQUVmLHlCQUF5QjtBQUN6QjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7O0VBRVosYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUEsZUFBZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAjcmVnaW9uIEdMT0JBTFMgKi9cXG46cm9vdCB7XFxuICAtLW1haW4tZm9udC1jb2xvcjogYmxhY2s7XFxuICAtLXBhc3RlbC15ZWxsb3c6ICNmZGZkOTY7XFxuICAtLXBlcHBlcm9uaS1yZWQ6ICNiMzE5MjU7XFxuICAtLWJveC1zaGFkb3ctdGhpbjogMnB4IDJweCA1cHggIzdhNGI1NDU0LCAtMnB4IDJweCA1cHggIzdhNGI1NDU0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG50ZXh0YXJlYSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogI3JlZ2lvbiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXN0ZWwteWVsbG93KTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG5hZGRyZXNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbmFkZHJlc3MgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNTQwO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbmFkZHJlc3MgZGl2IGltZyB7XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG5hZGRyZXNzIGRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qICNyZWdpb24gTkFWSUdBVElPTiAqL1xcbi5uYXYtbWFpbiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXRoaW4pO1xcbn1cXG5cXG4ubmF2LW1haW4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4ubmF2LW1haW4gdWwgaW1nIHtcXG4gIHdpZHRoOiA2NHB4O1xcbn1cXG5cXG4ubmF2LW1haW4gdWwgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uYXYtbWFpbiB1bCBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wZXBwZXJvbmktcmVkKTtcXG59XFxuXFxuLm5hdi1tYWluIHVsIC51bmRlcmxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVwcGVyb25pLXJlZCk7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qICNyZWdpb24gRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wZXBwZXJvbmktcmVkKTtcXG59XFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qICNyZWdpb24gSE9NRSBQQUdFICovXFxuXFxuI2hvbWUtcGFnZSB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuI2hvbWUtcGFnZSBtYWluIHtcXG59XFxuXFxuI2hvbWUtcGFnZSAuY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaG9tZS1wYWdlIC5jb250ZW50IGgxIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4jaGVhZGVyLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2hlYWRlci1kYXRlIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgYm90dG9tOiAxcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNoZWFkZXItZGF0ZSB7XFxufVxcblxcbiNob21lLXBhZ2UgLmNvbnRlbnQgI3RvZG8tbWFzdGVyLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuXFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xcbn1cXG5cXG4udG9kby1sZWZ0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNoZWNrLWljb24ge1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLmNoZWNrLWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjgpO1xcbn1cXG5cXG4udG9kby1tZXRhLWRhdGEtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4udG9kby1kdWUtZGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlLW92ZXJkdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8tc3RhdHVzLWNvbXBsZXRlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1zdGF0dXMtaW4tcHJvZ3Jlc3Mge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8tc3RhdHVzLXRvLWRvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHktaGlnaCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHktbWVkaXVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLXByaW9yaXR5LWxvdyB7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHJnYigxMjQsIDEyMywgMTIzKTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uZmllbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5leHRyYS1pbnB1dCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZm9ybS1ib3R0b20tZmllbGRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZXh0cmEtZmllbGRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5jYW5jZWwtdGFzay1idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblxcbi5zdWJtaXQtdGFzay1idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblxcbi5jYW5jZWwtdGFzay1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjppbmRpYW5yZWQ7XFxufVxcblxcbi5zdWJtaXQtdGFzay1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxufVxcblxcbi5kZWxldGUtaWNvbiB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uZGVsZXRlLWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjgpO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogI3JlZ2lvbiBBQk9VVCBQQUdFICovXFxuXFxuI2Fib3V0LXBhZ2Uge1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcblxcbiNhYm91dC1wYWdlIG1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbiNhYm91dC1wYWdlIG1haW4gLmNvbnRlbnQge1xcbiAgcGFkZGluZzogNjBweDtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiAjcmVnaW9uIE1FTlUgUEFHRSAqL1xcblxcbiNtZW51LXBhZ2Uge1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcblxcbiNtZW51LXBhZ2UgbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI21lbnUtcGFnZSBtYWluIC5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDYwcHg7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiAjcmVnaW9uIENPTlRBQ1QgUEFHRSAqL1xcbiNjb250YWN0LXBhZ2Uge1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcblxcbiNjb250YWN0LXBhZ2UgbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI2NvbnRhY3QtcGFnZSBtYWluIC5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDYwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2Nzcy9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9lbGVtZW50cy9oZWFkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9wYWdlcy9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2VsZW1lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL21vZHVsZXMvb2JqZWN0cy90b2RvXCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vbW9kdWxlcy9vYmplY3RzL2xpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZUxpc3QgfSBmcm9tIFwiLi9tb2R1bGVzL2VsZW1lbnRzL2xpc3RcIjtcblxuY29uc3QgbGlzdEFycmF5Okxpc3RbXSA9IFtdO1xuY29uc3QgdG9kb0FycmF5OlRvZG9bXSAgPSBbXTtcblxuLy8gQ3JlYXRlIGluaXRpYWwgbGlzdC5cbmNvbnN0IGluaXRpYWxMaXN0OiBMaXN0ID0ge1xuICB0aXRsZTogJ0dlbmVyYWwnXG59XG5saXN0QXJyYXkucHVzaChpbml0aWFsTGlzdClcbiAgXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuYm9keTtcbmNvbnRlbnQuYXBwZW5kKFxuLy8gICBjcmVhdGVIZWFkZXIoKSxcbi8vICAgY3JlYXRlTmF2TWFpbigpLFxuICBjcmVhdGVIb21lUGFnZSgpLFxuLy8gICBjcmVhdGVBYm91dFBhZ2UoKSxcbi8vICAgY3JlYXRlTWVudVBhZ2UoKSxcbi8vICAgY3JlYXRlQ29udGFjdFBhZ2UoKSxcbiAgY3JlYXRlRm9vdGVyKClcbik7XG5cbmV4cG9ydCB7bGlzdEFycmF5LCB0b2RvQXJyYXl9XG5cbi8vIGFuaW1hdGVOYXZNYWluKClcblxuLy8gY29uc3QgaGlkZVBhZ2VzID0gKC4uLnBhZ2VzKSA9PiB7XG4vLyAgIGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykgcGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyB9O1xuXG4vLyBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS1wYWdlXCIpO1xuLy8gY29uc3QgYWJvdXRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dC1wYWdlXCIpO1xuLy8gY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtcGFnZVwiKTtcbi8vIGNvbnN0IGNvbnRhY3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXBhZ2VcIik7XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwgKCkgPT4gaGlkZVBhZ2VzKGFib3V0UGFnZSwgbWVudVBhZ2UsIGNvbnRhY3RQYWdlKSk7XG5cbi8vIGNvbnN0IHBhZ2VMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LW1haW4gYVwiKTtcbi8vIGZvciAoY29uc3QgcGFnZUxpbmsgb2YgcGFnZUxpbmtzKSB7XG4vLyAgIHBhZ2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgaWYgKHBhZ2VMaW5rLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaG9tZVwiKSkge1xuLy8gICAgICAgaG9tZVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuLy8gICAgICAgaGlkZVBhZ2VzKGFib3V0UGFnZSwgbWVudVBhZ2UsIGNvbnRhY3RQYWdlKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKHBhZ2VMaW5rLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWJvdXRcIikpIHtcbi8vICAgICAgIGFib3V0UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4vLyAgICAgICBoaWRlUGFnZXMoaG9tZVBhZ2UsIG1lbnVQYWdlLCBjb250YWN0UGFnZSk7XG4vLyAgICAgfVxuLy8gICAgIGlmIChwYWdlTGluay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnVcIikpIHtcbi8vICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbi8vICAgICAgIGhpZGVQYWdlcyhob21lUGFnZSwgYWJvdXRQYWdlLCBjb250YWN0UGFnZSlcbi8vICAgICB9XG4vLyAgICAgaWYgKHBhZ2VMaW5rLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29udGFjdFwiKSkge1xuLy8gICAgICAgY29udGFjdFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuLy8gICAgICAgaGlkZVBhZ2VzKGhvbWVQYWdlLCBhYm91dFBhZ2UsIG1lbnVQYWdlKTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfSIsImltcG9ydCBnaXRodWJJbWcgZnJvbSBcIi4uLy4uL2ltZy9naXRodWIuc3ZnXCI7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZ2l0aHViSWNvbi5zcmMgPSBnaXRodWJJbWc7XG4gICAgICAgIGdpdGh1Ykljb24uYWx0ID0gXCJHaXRodWIgaWNvblwiO1xuXG4gICAgICAgIGNvbnN0IGNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY2FwdGlvbi50ZXh0Q29udGVudCA9IFwiRXVhbiBXaWxsaWFtc1wiO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL0V1YW5SV1wiKTtcbiAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwibm9vcGVuZXIgbm9yZWZlcnJlclwiKTtcbiAgICAgICAgY29udGVudC5hcHBlbmQoY2FwdGlvbiwgZ2l0aHViSWNvbik7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50KCkpO1xuICAgIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZUZvb3RlclxufTsiLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4uL29iamVjdHMvdG9kb1wiO1xuaW1wb3J0IHsgdG9kb0FycmF5IH0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQgdHJhc2ggZnJvbSBcIi4uLy4uL2ltZy90cmFzaC5zdmdcIjtcbmltcG9ydCB1bmNoZWNrZWQgZnJvbSBcIi4uLy4uL2ltZy9jaXJjbGUuc3ZnXCI7XG5pbXBvcnQgY2hlY2tlZCBmcm9tIFwiLi4vLi4vaW1nL2NoZWNrLWNpcmNsZS5zdmdcIjtcbmltcG9ydCB7IHJlbW92ZVRvZG8gfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3JlbW92ZVRvZG9cIjtcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2Zvcm1hdERhdGVcIjtcbmltcG9ydCB7IG1vZGlmeVRvZG8gfSBmcm9tIFwiLi4vZnVuY3Rpb25zL21vZGlmeVRvZG9cIjtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICh0b2RvOiBUb2RvKSA9PiB7XG4gIC8vVXBkYXRlIG1hc3RlciB0b2RvIGxpc3Qgd2l0aCB0aGlzIHRvZG8uXG4gIHRvZG9BcnJheS5wdXNoKHRvZG8pO1xuXG4gIC8vQ3JlYXRlIHRvZG8gZWxlbWVudC5cbiAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvZG8tJHt0b2RvLmlkfWApO1xuICB0b2RvRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kb1wiKTtcblxuICBjb25zdCBjcmVhdGVUb2RvTGVmdERpdiA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvTGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0xlZnREaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWxlZnQtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY3JlYXRlQ2hlY2tJY29uQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2hlY2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNoZWNrLWNvbnRhaW5lcmApO1xuXG4gICAgICBjb25zdCBjcmVhdGVVbmNoZWNrZWRJY29uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNoZWNrLWljb25cIik7XG4gICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1bmNoZWNrZWQtaWNvblwiKTtcbiAgICAgICAgaWNvbi5zcmMgPSB1bmNoZWNrZWQ7XG4gICAgICAgIGljb24uYWx0ID0gXCJVbmNoZWNrZWQgdGFzayBpY29uLlwiO1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWNvbi5yZW1vdmUoKTtcbiAgICAgICAgICBjaGVja0Rpdi5hcHBlbmQoY3JlYXRlQ2hlY2tlZEljb24oKSk7XG4gICAgICAgICAgY29uc3QgY2hlY2tlZFRvZG8gPSB0b2RvXG4gICAgICAgICAgY2hlY2tlZFRvZG8uc3RhdHVzID0gXCJDb21wbGV0ZVwiXG4gICAgICAgICAgbW9kaWZ5VG9kbyhjaGVja2VkVG9kbylcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpY29uO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY3JlYXRlQ2hlY2tlZEljb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2hlY2staWNvblwiKTtcbiAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWNrZWQtaWNvblwiKTtcbiAgICAgICAgaWNvbi5zcmMgPSBjaGVja2VkO1xuICAgICAgICBpY29uLmFsdCA9IFwiQ2hlY2tlZCB0YXNrIGljb24uXCI7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBpY29uLnJlbW92ZSgpO1xuICAgICAgICAgIGNoZWNrRGl2LmFwcGVuZChjcmVhdGVVbmNoZWNrZWRJY29uKCkpO1xuICAgICAgICAgIGNvbnN0IHVuY2hlY2tlZFRvZG8gPSB0b2RvXG4gICAgICAgICAgdW5jaGVja2VkVG9kby5zdGF0dXMgPSBcIlRvIGRvXCJcbiAgICAgICAgICBtb2RpZnlUb2RvKHVuY2hlY2tlZFRvZG8pXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaWNvbjtcbiAgICAgIH07XG5cbiAgICAgIGNoZWNrRGl2LmFwcGVuZChjcmVhdGVVbmNoZWNrZWRJY29uKCkpO1xuXG4gICAgICByZXR1cm4gY2hlY2tEaXY7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdG9kby0ke3RvZG8uaWR9LXRpdGxlYCk7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgIHRvZG9MZWZ0RGl2LmFwcGVuZChjcmVhdGVDaGVja0ljb25Db250YWluZXIoKSwgdG9kb1RpdGxlKTtcblxuICAgIHJldHVybiB0b2RvTGVmdERpdjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVNZXRhRGF0YURpdiA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvTWV0YURhdGFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9NZXRhRGF0YURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tbWV0YS1kYXRhLWRpdlwiKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIGB0b2RvLSR7dG9kby5pZH0tZHVlLWRhdGVgKTtcblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHM6IG51bWJlciA9XG4gICAgICB0b2RvLmR1ZURhdGUuZ2V0VGltZSgpIC0gdG9kYXkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGRpZmZlcmVuY2VJbkRheXM6IG51bWJlciA9IE1hdGguZmxvb3IoXG4gICAgICBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgLyAoMTAwMCAqIDYwICogNjAgKiAyNClcbiAgICApO1xuXG4gICAgaWYgKGRpZmZlcmVuY2VJbkRheXMgPiAwKSB7XG4gICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWR1ZS1kYXRlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWR1ZS1kYXRlLW92ZXJkdWVcIik7XG4gICAgfVxuXG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUodG9kby5kdWVEYXRlKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHN0YXR1cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdG9kby0ke3RvZG8uaWR9LXN0YXR1c2ApO1xuICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IHRvZG8uc3RhdHVzO1xuICAgIHN0YXR1cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN0YXR1c1wiKTtcblxuICAgIGlmICh0b2RvLnN0YXR1cyA9PSBcIkNvbXBsZXRlXCIpIHtcbiAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwidG9kby1zdGF0dXMtY29tcGxldGVcIik7XG4gICAgfSBlbHNlIGlmICh0b2RvLnN0YXR1cyA9PSBcIlRvIGRvXCIpIHtcbiAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwidG9kby1zdGF0dXMtdG8tZG9cIik7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdG9kby0ke3RvZG8uaWR9LXByaW9yaXR5YCk7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJpb3JpdHlcIik7XG5cbiAgICBpZiAodG9kby5wcmlvcml0eSA9PSBcIkhpZ2hcIikge1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHktaGlnaFwiKTtcbiAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT0gXCJNZWRpdW1cIikge1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHktbWVkaXVtXCIpO1xuICAgIH0gZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcmlvcml0eS1sb3dcIik7XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvZG8tJHt0b2RvLmlkfS1saXN0YCk7XG4gICAgbGlzdC50ZXh0Q29udGVudCA9IHRvZG8ubGlzdC50aXRsZTtcbiAgICBsaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1saXN0XCIpO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZS1pY29uXCIpO1xuICAgIGRlbGV0ZUljb24uc3JjID0gdHJhc2g7XG4gICAgZGVsZXRlSWNvbi5hbHQgPSBcIkRlbGV0ZSB0YXNrIGljb24uXCI7XG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcmVtb3ZlVG9kbyh0b2RvRGl2KTtcbiAgICB9KTtcblxuICAgIHRvZG9NZXRhRGF0YURpdi5hcHBlbmQoZHVlRGF0ZSwgc3RhdHVzLCBwcmlvcml0eSwgbGlzdCwgZGVsZXRlSWNvbik7XG5cbiAgICByZXR1cm4gdG9kb01ldGFEYXRhRGl2O1xuICB9O1xuXG4gIHRvZG9EaXYuYXBwZW5kKGNyZWF0ZVRvZG9MZWZ0RGl2KCksIGNyZWF0ZU1ldGFEYXRhRGl2KCkpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5ib2R5O1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICByZXR1cm4gdG9kb0Rpdjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8gfTtcbiIsImNvbnN0IGNyZWF0ZVBhZ2UgPSAocGFnZU5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cGFnZU5hbWV9LXBhZ2VgKTtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgIHJldHVybiBwYWdlO1xufTtcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQYWdlXG59OyIsImNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICBjb25zdCBkYXlzT2ZXZWVrID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xuICBjb25zdCBtb250aHNPZlllYXIgPSBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF07XG5cbiAgY29uc3QgZGF5T2ZXZWVrID0gZGF5c09mV2Vla1tkYXRlLmdldERheSgpXTtcbiAgY29uc3QgZGF5T2ZNb250aCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCBtb250aCA9IG1vbnRoc09mWWVhcltkYXRlLmdldE1vbnRoKCldO1xuXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXlPZldlZWt9ICR7ZGF5T2ZNb250aH0gJHttb250aH1gO1xuXG4gIHJldHVybiBmb3JtYXR0ZWREYXRlO1xufTtcblxuZXhwb3J0IHsgZm9ybWF0RGF0ZSB9O1xuIiwiY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChmb3JtRWxlbWVudElEOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihmb3JtRWxlbWVudElEKSk7XG5cbiAgY29uc3QgZGF0YUFycmF5ID0gW107XG4gIGZvciAobGV0IGVudHJ5IG9mIGZvcm1EYXRhKSB7XG4gICAgZGF0YUFycmF5LnB1c2goZW50cnkpO1xuICB9XG5cbiAgY29uc3QgZGF0YU9iamVjdCA9IE9iamVjdC5mcm9tRW50cmllcyhkYXRhQXJyYXkpO1xuXG4gIHJldHVybiBkYXRhT2JqZWN0XG59O1xuXG5leHBvcnQge2hhbmRsZUZvcm1TdWJtaXR9IiwiLy8gVE9ETzogQ3JlYXRlIGZ1bmN0aW9uYWxpdHkgZm9yIHdoZW4gYSB0b2RvIGlzIG1vZGlmaWVkXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4uL29iamVjdHMvbGlzdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuLi9vYmplY3RzL3RvZG9cIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuLi8uLlwiO1xuaW1wb3J0IHsgdG9kb0FycmF5IH0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xuXG5jb25zdCBtb2RpZnlUb2RvID0gKHRvZG86IFRvZG8pID0+IHtcbiAgLy9VcGRhdGUgc3RhdGUgYXJyYXlcbiAgY29uc3QgbW9kaWZpY2F0aW9uSW5kZXggPSB0b2RvQXJyYXkubWFwKChlKSA9PiBlLmlkKS5pbmRleE9mKHRvZG8uaWQpO1xuXG4gIHRvZG9BcnJheVttb2RpZmljYXRpb25JbmRleF0gPSB0b2RvO1xuXG4gIC8vVXBkYXRlIFVJXG5cbiAgLy9UaXRsZVxuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9kby0ke3RvZG8uaWR9LXRpdGxlYCk7XG4gIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgLy9EdWUgZGF0ZVxuICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b2RvLSR7dG9kby5pZH0tZHVlLWRhdGVgKTtcbiAgdG9kb0R1ZURhdGUuY2xhc3NOYW1lID0gXCJcIjtcblxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kczogbnVtYmVyID1cbiAgICB0b2RvLmR1ZURhdGUuZ2V0VGltZSgpIC0gdG9kYXkuZ2V0VGltZSgpO1xuICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzOiBudW1iZXIgPSBNYXRoLmZsb29yKFxuICAgIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyAvICgxMDAwICogNjAgKiA2MCAqIDI0KVxuICApO1xuXG4gIGlmIChkaWZmZXJlbmNlSW5EYXlzID4gMCkge1xuICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWR1ZS1kYXRlXCIpO1xuICB9IGVsc2Uge1xuICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWR1ZS1kYXRlLW92ZXJkdWVcIik7XG4gIH1cblxuICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUodG9kby5kdWVEYXRlKTtcblxuICAvL1N0YXR1c1xuICBjb25zdCB0b2RvU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvZG8tJHt0b2RvLmlkfS1zdGF0dXNgKTtcbiAgdG9kb1N0YXR1cy50ZXh0Q29udGVudCA9IHRvZG8uc3RhdHVzO1xuXG4gIC8vUHJpb3JpdHlcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvZG8tJHt0b2RvLmlkfS1wcmlvcml0eWApO1xuICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuXG4gIC8vTGlzdFxuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b2RvLSR7dG9kby5pZH0tbGlzdGApO1xuICB0b2RvTGlzdC50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG5cbn07XG5cbmV4cG9ydCB7bW9kaWZ5VG9kb30iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4uL29iamVjdHMvdG9kb1wiO1xuaW1wb3J0IHsgdG9kb0FycmF5IH0gZnJvbSBcIi4uLy4uXCI7XG5cbmNvbnN0IHJlbW92ZVRvZG8gPSAodG9kb0RpdjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAvLyBSZW1vdmUgZnJvbSB0b2RvQXJyYXlcbiAgICBjb25zdCBpZCA9ICt0b2RvRGl2LmlkLnJlcGxhY2UoJ3RvZG8tJywnJyk7XG5cbiAgICB0b2RvQXJyYXkuc3BsaWNlKHRvZG9BcnJheS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBpZCksIDEpXG5cbiAgICAvLyBSZW1vdmUgdG9kbyBlbGVtZW50LlxuICAgIHRvZG9EaXYucmVtb3ZlKClcblxuICB9O1xuICBcbiAgZXhwb3J0IHtyZW1vdmVUb2RvfSIsImV4cG9ydCBpbnRlcmZhY2UgTGlzdCB7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IGxpc3RFeGFtcGxlRGF0YTogTGlzdCA9IHtcbiAgdGl0bGU6IFwiR2VuZXJhbFwiLFxufTtcblxuZXhwb3J0IHtsaXN0RXhhbXBsZURhdGF9IiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCB7IGxpc3RFeGFtcGxlRGF0YSB9IGZyb20gXCIuL2xpc3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUb2RvIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZHVlRGF0ZTogRGF0ZTtcbiAgbGlzdDogTGlzdDtcbiAgc3RhdHVzOiBcIlRvIGRvXCIgfCBcIkNvbXBsZXRlXCJcbiAgcHJpb3JpdHk6IFwiSGlnaFwiIHwgXCJNZWRpdW1cIiB8IFwiTG93XCI7IC8vIHByaW9yaXR5IGNhbiBvbmx5IGJlIG9uZSBvZiB0aGVzZSB0aHJlZSB2YWx1ZXNcbn1cblxuY29uc3QgdG9kb0V4YW1wbGVEYXRhOiBUb2RvID0ge1xuICBpZDogMSxcbiAgdGl0bGU6IFwiQ29tcGxldGUgVHlwZVNjcmlwdCBwcm9qZWN0XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkZpbmlzaCBidWlsZGluZyBhIHRvZG8gYXBwIHdpdGggVHlwZVNjcmlwdFwiLFxuICBkdWVEYXRlOiBuZXcgRGF0ZShcIjIwMjMtMDMtMTVcIiksXG4gIGxpc3Q6IGxpc3RFeGFtcGxlRGF0YSxcbiAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICBzdGF0dXM6IFwiVG8gZG9cIlxufTtcblxuZXhwb3J0IHt0b2RvRXhhbXBsZURhdGF9XG4iLCJpbXBvcnQgeyBjcmVhdGVQYWdlIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9jcmVhdGVQYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3RvZG9cIjtcbmltcG9ydCB7IHRvZG9FeGFtcGxlRGF0YSB9IGZyb20gXCIuLi9vYmplY3RzL3RvZG9cIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi4vb2JqZWN0cy90b2RvXCI7XG5pbXBvcnQgeyB0b2RvQXJyYXkgfSBmcm9tIFwiLi4vLi5cIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuLi8uLlwiO1xuaW1wb3J0IHsgaGFuZGxlRm9ybVN1Ym1pdCB9IGZyb20gXCIuLi9mdW5jdGlvbnMvaGFuZGxlRm9ybVN1Ym1pdFwiO1xuaW1wb3J0IGF1dG9zaXplIGZyb20gXCJhdXRvc2l6ZVwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi9mdW5jdGlvbnMvZm9ybWF0RGF0ZVwiO1xuXG5jb25zdCBjcmVhdGVNYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAvLyBUT0RPOiBBZGQgbGlzdCBjcmVhdGluZyBidXR0b24uXG4gICAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaGVhZGVyRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLWRpdlwiKTtcblxuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJBbGwgVG9kb3NcIjtcblxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci1kYXRlXCIpO1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUobmV3IERhdGUoKSk7XG5cbiAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgcmV0dXJuIGhlYWRlckRpdjtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlVG9kb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tbWFzdGVyLWNvbnRhaW5lclwiKTtcblxuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQoY3JlYXRlVG9kbyh0b2RvRXhhbXBsZURhdGEpKTtcblxuICAgICAgcmV0dXJuIHRvZG9Db250YWluZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUFkZFRvZG9CdG4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIHRvZG8uLi5cIjtcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZC10b2RvLWJ0blwiKTtcblxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGJ0bi5yZW1vdmUoKVxuICAgICAgICBjb250ZW50LmFwcGVuZChjcmVhdGVGb3JtKCkpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGJ0bjtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNyZWF0ZVRpdGxlSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmaWVsZFwiKTtcblxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGB0YXNrX3RpdGxlYCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYHRhc2tfdGl0bGVgKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMzBcIik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGFzayB0aXRsZVwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgICBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIG5hbWUgKG11c3Qgb25seSBjb250YWluIGxldHRlcnMgb3IgbnVtYmVycykuXCJcbiAgICAgICAgKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcblxuICAgICAgICBmaWVsZC5hcHBlbmQoaW5wdXQpO1xuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjcmVhdGVEZXNjcmlwdGlvbklucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmllbGRcIik7XG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGB0YXNrX2Rlc2NyaXB0aW9uYCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYHRhc2tfZGVzY3JpcHRpb25gKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjIwXCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiMVwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIGRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIlBsZWFzZSBlbnRlciB5b3VyIG1lc3NhZ2UgaGVyZS5cIik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG5cbiAgICAgICAgYXV0b3NpemUoaW5wdXQpO1xuXG4gICAgICAgIGZpZWxkLmFwcGVuZChpbnB1dCk7XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNyZWF0ZUR1ZURhdGVJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZpZWxkXCIpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2tfZHVlX2RhdGVgKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgdGFza19kdWVfZGF0ZWApO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRhc2sgZHVlIGRhdGUuXCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIlBsZWFzZSBlbnRlciB0YXNrIGR1ZSBkYXRlIGhlcmUuXCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJleHRyYS1pbnB1dFwiKTtcblxuICAgICAgICBmaWVsZC5hcHBlbmQoaW5wdXQpO1xuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjcmVhdGVQcmlvcml0eUlucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmllbGRcIik7XG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2tfcHJpb3JpdHlgKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgdGFza19wcmlvcml0eWApO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMFwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIHByaW9yaXR5XCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJ0aXRsZVwiLFxuICAgICAgICAgIFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbmFtZSAobXVzdCBvbmx5IGNvbnRhaW4gbGV0dGVycyBvciBudW1iZXJzKS5cIlxuICAgICAgICApO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImV4dHJhLWlucHV0XCIpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24xLnZhbHVlID0gXCJIaWdoXCI7XG4gICAgICAgIG9wdGlvbjEudGV4dCA9IFwiSGlnaFwiO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24yLnZhbHVlID0gXCJNZWRpdW1cIjtcbiAgICAgICAgb3B0aW9uMi50ZXh0ID0gXCJNZWRpdW1cIjtcblxuICAgICAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uMy52YWx1ZSA9IFwiTG93XCI7XG4gICAgICAgIG9wdGlvbjMudGV4dCA9IFwiTG93XCI7XG5cbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuICAgICAgICBmaWVsZC5hcHBlbmQoaW5wdXQpO1xuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjcmVhdGVMaXN0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmaWVsZFwiKTtcblxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGFza19saXN0YCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYHRhc2tfbGlzdGApO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMFwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIGxpc3RcIik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcInRpdGxlXCIsXG4gICAgICAgICAgXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBuYW1lIChtdXN0IG9ubHkgY29udGFpbiBsZXR0ZXJzIG9yIG51bWJlcnMpLlwiXG4gICAgICAgICk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiZXh0cmEtaW5wdXRcIik7XG5cbiAgICAgICAgY29uc3QgbGlzdFRpdGxlc0FycmF5ID0gbGlzdEFycmF5Lm1hcCgobGlzdCkgPT4gbGlzdC50aXRsZSk7XG5cbiAgICAgICAgLy9DcmVhdGUgYW5kIGFwcGVuZCB0aGUgb3B0aW9uc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RUaXRsZXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGxpc3RUaXRsZXNBcnJheVtpXTtcbiAgICAgICAgICBvcHRpb24udGV4dCA9IGxpc3RUaXRsZXNBcnJheVtpXTtcbiAgICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZmllbGQuYXBwZW5kKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY3JlYXRlQ2FuY2VsQnRuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYW5jZWwtdGFzay1idXR0b25cIik7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgZm9ybS5yZW1vdmUoKVxuICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUFkZFRvZG9CdG4oKSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBidG47XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjcmVhdGVTdWJtaXRCdG4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN1Ym1pdC10YXNrLWJ1dHRvblwiKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b2RvTWFzdGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICBcInRvZG8tbWFzdGVyLWNvbnRhaW5lclwiXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IGRhdGFPYmplY3QgPSBoYW5kbGVGb3JtU3VibWl0KFwiI25ldy10YXNrLWZvcm1cIilcblxuICAgICAgICAgIGNvbnN0IHRvZG86IFRvZG8gPSB7XG4gICAgICAgICAgICBpZDogTWF0aC5tYXgoLi4udG9kb0FycmF5Lm1hcChvID0+IG8uaWQpKSsxLFxuICAgICAgICAgICAgdGl0bGU6IGRhdGFPYmplY3QudGFza190aXRsZS50b1N0cmluZygpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGFPYmplY3QudGFza19kZXNjcmlwdGlvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0YU9iamVjdC50YXNrX2R1ZV9kYXRlLnRvU3RyaW5nKCkpLFxuICAgICAgICAgICAgbGlzdDogbGlzdEFycmF5LmZpbmQobyA9PiBvLnRpdGxlID09PSBkYXRhT2JqZWN0LnRhc2tfbGlzdC50b1N0cmluZygpKSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBkYXRhT2JqZWN0LnRhc2tfcHJpb3JpdHkudG9TdHJpbmcoKSBhcyAoXCJIaWdoXCIgfCBcIk1lZGl1bVwiIHwgXCJMb3dcIiksXG4gICAgICAgICAgICBzdGF0dXM6IFwiVG8gZG9cIixcbiAgICAgICAgICB9O1xuICAgICAgICAgIFxuXG4gICAgICAgICAgdG9kb01hc3RlckRpdi5hcHBlbmQoXG4gICAgICAgICAgICBjcmVhdGVUb2RvKHRvZG8pXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgZm9ybS5yZW1vdmUoKVxuICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUFkZFRvZG9CdG4oKSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNyZWF0ZUV4dHJhRmllbGRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtQm90dG9tRmllbGRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9ybUJvdHRvbUZpZWxkcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tYm90dG9tLWZpZWxkcy1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgZXh0cmFGaWVsZHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBleHRyYUZpZWxkc0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImV4dHJhLWZpZWxkcy1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3VibWl0QnV0dG9uRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3VibWl0LWJ1dHRvbi1jb250YWluZXJcIik7XG5cbiAgICAgICAgZXh0cmFGaWVsZHNEaXYuYXBwZW5kKFxuICAgICAgICAgIGNyZWF0ZUR1ZURhdGVJbnB1dCgpLFxuICAgICAgICAgIGNyZWF0ZVByaW9yaXR5SW5wdXQoKSxcbiAgICAgICAgICBjcmVhdGVMaXN0SW5wdXQoKVxuICAgICAgICApO1xuXG4gICAgICAgIHN1Ym1pdEJ1dHRvbkRpdi5hcHBlbmQoY3JlYXRlQ2FuY2VsQnRuKCksIGNyZWF0ZVN1Ym1pdEJ0bigpKTtcblxuICAgICAgICBmb3JtQm90dG9tRmllbGRzLmFwcGVuZChleHRyYUZpZWxkc0Rpdiwgc3VibWl0QnV0dG9uRGl2KTtcbiAgICAgICAgcmV0dXJuIGZvcm1Cb3R0b21GaWVsZHM7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBmb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiXCIpO1xuICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZm9ybVwiKTtcbiAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctdGFzay1mb3JtXCIpO1xuICAgICAgZm9ybS5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZVRpdGxlSW5wdXQoKSxcbiAgICAgICAgY3JlYXRlRGVzY3JpcHRpb25JbnB1dCgpLFxuICAgICAgICBjcmVhdGVFeHRyYUZpZWxkcygpXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZvcm07XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kKFxuICAgICAgY3JlYXRlSGVhZGVyKCksXG4gICAgICBjcmVhdGVUb2RvQ29udGFpbmVyKCksXG4gICAgICBjcmVhdGVBZGRUb2RvQnRuKCksXG4gICAgICAvLyBjcmVhdGVGb3JtKClcbiAgICApO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9O1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5hcHBlbmQoY3JlYXRlQ29udGVudCgpKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBjcmVhdGVIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgaG9tZVBhZ2UgPSBjcmVhdGVQYWdlKFwiaG9tZVwiKTtcbiAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoKSk7XG4gIHJldHVybiBob21lUGFnZTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=