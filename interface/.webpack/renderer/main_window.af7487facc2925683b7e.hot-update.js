"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectron_react_typescript"]("main_window",{

/***/ "./src/components/projectsList/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/projectsList/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectsList\": () => (/* binding */ ProjectsList)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _projectCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectCard */ \"./src/components/projectCard/index.tsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/components/projectsList/style.ts\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\nfunction ProjectsList(props) {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_style__WEBPACK_IMPORTED_MODULE_1__.ProjectsListStyle, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n      className: \"main\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n        className: \"create\",\n        children: \"+\"\n      }), props.data.map(function (project, index) {\n        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n          to: \"/dashboard/\".concat(project.id, \"/tasks\"),\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_projectCard__WEBPACK_IMPORTED_MODULE_0__.ProjectCard, {\n            data: project\n          })\n        }, project.id);\n      })]\n    })\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0c0xpc3QvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBRUs7QUFDRDtBQUFBO0FBQUE7QUFPcEMsU0FBU0csWUFBWSxDQUFDQyxLQUF3QixFQUFFO0VBQ25ELG9CQUNJLHVEQUFDLHFEQUFpQjtJQUFBLHVCQUNkO01BQUssU0FBUyxFQUFDLE1BQU07TUFBQSx3QkFDakI7UUFBSyxTQUFTLEVBQUMsUUFBUTtRQUFBO01BQUEsRUFFakIsRUFDTEEsS0FBSyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLEtBQUs7UUFBQSxvQkFDM0IsdURBQUMsa0RBQUk7VUFBa0IsRUFBRSx1QkFBZ0JELE9BQU8sQ0FBQ0UsRUFBRSxXQUFTO1VBQUEsdUJBQ3hELHVEQUFDLHFEQUFXO1lBQUMsSUFBSSxFQUFFRjtVQUFRO1FBQUUsR0FEdEJBLE9BQU8sQ0FBQ0UsRUFBRSxDQUVkO01BQUEsQ0FDVixDQUFDO0lBQUE7RUFDQSxFQUNVO0FBRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzTGlzdC9pbmRleC50c3g/NWM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi8uLi9AdHlwZXMvZGF0YVwiXG5pbXBvcnQgeyBQcm9qZWN0Q2FyZCB9IGZyb20gXCIuLi9wcm9qZWN0Q2FyZFwiXG5pbXBvcnQgeyBQcm9qZWN0c0xpc3RTdHlsZSB9IGZyb20gXCIuL3N0eWxlXCJcblxuaW50ZXJmYWNlIFByb2plY3RzTGlzdFByb3BzIHtcbiAgICBkYXRhOiBQcm9qZWN0W11cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdHNMaXN0KHByb3BzOiBQcm9qZWN0c0xpc3RQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm9qZWN0c0xpc3RTdHlsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17cHJvamVjdC5pZH0gdG89e2AvZGFzaGJvYXJkLyR7cHJvamVjdC5pZH0vdGFza3NgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZCBkYXRhPXtwcm9qZWN0fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb2plY3RzTGlzdFN0eWxlPlxuICAgIClcbn0iXSwibmFtZXMiOlsiTGluayIsIlByb2plY3RDYXJkIiwiUHJvamVjdHNMaXN0U3R5bGUiLCJQcm9qZWN0c0xpc3QiLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/projectsList/index.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c8ffa3f14cc7d30cae4e")
/******/ })();
/******/ 
/******/ }
);