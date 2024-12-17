/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/cart.js */ \"./js/cart.js\");\n/* harmony import */ var _js_cart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_cart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_NavElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/NavElement.js */ \"./js/NavElement.js\");\n/* harmony import */ var _js_NavElement_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_NavElement_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_cart_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/cart.scss */ \"./scss/cart.scss\");\n/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/footer.scss */ \"./scss/footer.scss\");\n/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/header.scss */ \"./scss/header.scss\");\n/* harmony import */ var _scss_home_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/home.scss */ \"./scss/home.scss\");\n/* harmony import */ var _scss_mission_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scss/mission.scss */ \"./scss/mission.scss\");\n/* harmony import */ var _scss_news_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scss/news.scss */ \"./scss/news.scss\");\n/* harmony import */ var _scss_services_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scss/services.scss */ \"./scss/services.scss\");\n/* harmony import */ var _scss_static_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scss/static.scss */ \"./scss/static.scss\");\n/* harmony import */ var _scss_team_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scss/team.scss */ \"./scss/team.scss\");\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/NavElement.js":
/*!**************************!*\
  !*** ./js/NavElement.js ***!
  \**************************/
/***/ (() => {

eval("class NavElement extends HTMLElement {\n  constructor() {\n    super();\n  }\n  connectedCallback() {\n    let a = document.createElement('a');\n    a.innerHTML = this.getAttribute(\"name\");\n    a.href = this.getAttribute(\"url\");\n    a.style.color = \"inherit\";\n    a.style.textDecoration = \"none\";\n    if (this.getAttribute(\"url\").includes('#')) {\n      this.onclick = () => {\n        let navbar = document.querySelector('.navbarAdaptive');\n        if (navbar.classList.contains('active')) {\n          navbar.classList.toggle('active');\n        }\n      };\n    }\n    this.append(a);\n  }\n  static get observedAttributes() {\n    return ['name', 'url'];\n  }\n}\ncustomElements.define(\"nav-element\", NavElement);\n\n//# sourceURL=webpack:///./js/NavElement.js?");

/***/ }),

/***/ "./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./js/cart.js?");

/***/ }),

/***/ "./scss/cart.scss":
/*!************************!*\
  !*** ./scss/cart.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/cart.scss?");

/***/ }),

/***/ "./scss/footer.scss":
/*!**************************!*\
  !*** ./scss/footer.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/footer.scss?");

/***/ }),

/***/ "./scss/header.scss":
/*!**************************!*\
  !*** ./scss/header.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/header.scss?");

/***/ }),

/***/ "./scss/home.scss":
/*!************************!*\
  !*** ./scss/home.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/home.scss?");

/***/ }),

/***/ "./scss/mission.scss":
/*!***************************!*\
  !*** ./scss/mission.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/mission.scss?");

/***/ }),

/***/ "./scss/news.scss":
/*!************************!*\
  !*** ./scss/news.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/news.scss?");

/***/ }),

/***/ "./scss/services.scss":
/*!****************************!*\
  !*** ./scss/services.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/services.scss?");

/***/ }),

/***/ "./scss/static.scss":
/*!**************************!*\
  !*** ./scss/static.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/static.scss?");

/***/ }),

/***/ "./scss/team.scss":
/*!************************!*\
  !*** ./scss/team.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/team.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;