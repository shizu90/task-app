/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./electron/bridge.ts":
/*!****************************!*\
  !*** ./electron/bridge.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n\nvar api = {\n  /**\n   * Here you can expose functions to the renderer process\n   * so they can interact with the main (electron) side\n   * without security problems.\n   *\n   * The function below can accessed using `window.Main.sendMessage`\n   */\n\n  sendMessage: function sendMessage(message) {\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send('message', message);\n  },\n  /**\n   * Provide an easier way to listen to events\n   */\n  on: function on(channel, callback) {\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(channel, function (_, data) {\n      return callback(data);\n    });\n  }\n};\nelectron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld('Main', api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbGVjdHJvbi9icmlkZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRTlDLElBQU1FLEdBQUcsR0FBRztFQUNqQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRUMsV0FBVyxFQUFFLHFCQUFDQyxPQUFlLEVBQUs7SUFDaENILHNEQUFnQixDQUFDLFNBQVMsRUFBRUcsT0FBTyxDQUFDO0VBQ3RDLENBQUM7RUFFRDtBQUNGO0FBQ0E7RUFDRUUsRUFBRSxFQUFFLFlBQUNDLE9BQWUsRUFBRUMsUUFBa0IsRUFBSztJQUMzQ1Asb0RBQWMsQ0FBQ00sT0FBTyxFQUFFLFVBQUNFLENBQUMsRUFBRUMsSUFBSTtNQUFBLE9BQUtGLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDO0lBQUEsRUFBQztFQUN0RDtBQUNGLENBQUM7QUFFRFYscUVBQStCLENBQUMsTUFBTSxFQUFFRSxHQUFHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC10eXBlc2NyaXB0Ly4vZWxlY3Ryb24vYnJpZGdlLnRzP2UyZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIgfSBmcm9tICdlbGVjdHJvbidcblxuZXhwb3J0IGNvbnN0IGFwaSA9IHtcbiAgLyoqXG4gICAqIEhlcmUgeW91IGNhbiBleHBvc2UgZnVuY3Rpb25zIHRvIHRoZSByZW5kZXJlciBwcm9jZXNzXG4gICAqIHNvIHRoZXkgY2FuIGludGVyYWN0IHdpdGggdGhlIG1haW4gKGVsZWN0cm9uKSBzaWRlXG4gICAqIHdpdGhvdXQgc2VjdXJpdHkgcHJvYmxlbXMuXG4gICAqXG4gICAqIFRoZSBmdW5jdGlvbiBiZWxvdyBjYW4gYWNjZXNzZWQgdXNpbmcgYHdpbmRvdy5NYWluLnNlbmRNZXNzYWdlYFxuICAgKi9cblxuICBzZW5kTWVzc2FnZTogKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgIGlwY1JlbmRlcmVyLnNlbmQoJ21lc3NhZ2UnLCBtZXNzYWdlKVxuICB9LFxuXG4gIC8qKlxuICAgKiBQcm92aWRlIGFuIGVhc2llciB3YXkgdG8gbGlzdGVuIHRvIGV2ZW50c1xuICAgKi9cbiAgb246IChjaGFubmVsOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xuICAgIGlwY1JlbmRlcmVyLm9uKGNoYW5uZWwsIChfLCBkYXRhKSA9PiBjYWxsYmFjayhkYXRhKSlcbiAgfVxufVxuXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdNYWluJywgYXBpKVxuIl0sIm5hbWVzIjpbImNvbnRleHRCcmlkZ2UiLCJpcGNSZW5kZXJlciIsImFwaSIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsInNlbmQiLCJvbiIsImNoYW5uZWwiLCJjYWxsYmFjayIsIl8iLCJkYXRhIiwiZXhwb3NlSW5NYWluV29ybGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./electron/bridge.ts\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./electron/bridge.ts");
/******/ 	
/******/ })()
;