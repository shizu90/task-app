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

/***/ "./src/components/projectCard/style.ts":
/*!*********************************************!*\
  !*** ./src/components/projectCard/style.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectCardStyle\": () => (/* binding */ ProjectCardStyle)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _templateObject;\n\nvar ProjectCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    background-color: \", \";\\n    padding: 10px;\\n    border-radius: 5px;\\n    width: 260px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    cursor: pointer;\\n    transition: 0.2s background-color ease-out;\\n    &:hover {\\n        background-color: \", \"33;\\n    }\\n    &:hover>h4 {\\n        color: \", \";\\n    }\\n    h4 {\\n        font-size: \", \"px;\\n        span {\\n            font-size: \", \"px;\\n            color: \", \"55;\\n            margin-left: 10px;\\n        }\\n    }\\n    p {\\n        margin-top: 25px;\\n        font-size: \", \"px;\\n        color: \", \"cc;\\n    }\\n    span:not(h4>span) {\\n        display: flex;\\n        justify-content: flex-end;\\n        font-size: \", \"px; \\n        color: \", \"55;\\n    }\\n\"])), function (props) {\n  return props.theme.colors.accentTxt;\n}, function (props) {\n  return props.theme.colors.text;\n}, function (props) {\n  return props.theme.colors.primary;\n}, function (props) {\n  return props.theme.font.large;\n}, function (props) {\n  return props.theme.font.medium;\n}, function (props) {\n  return props.theme.colors.text;\n}, function (props) {\n  return props.theme.font.small;\n}, function (props) {\n  return props.theme.colors.text;\n}, function (props) {\n  return props.theme.font.small;\n}, function (props) {\n  return props.theme.colors.text;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0Q2FyZC9zdHlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUVoQyxJQUFNQyxnQkFBZ0IsR0FBR0QsNkRBQVUsZzRCQUNsQixVQUFBRyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUztBQUFBLEdBVWpDLFVBQUFILEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRSxJQUFJO0FBQUEsR0FHM0MsVUFBQUosS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNHLE9BQU87QUFBQSxHQUcvQixVQUFBTCxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNLLElBQUksQ0FBQ0MsS0FBSztBQUFBLEdBRTNCLFVBQUFQLEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0ssSUFBSSxDQUFDRSxNQUFNO0FBQUEsR0FDcEMsVUFBQVIsS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNFLElBQUk7QUFBQSxHQU1oQyxVQUFBSixLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNLLElBQUksQ0FBQ0csS0FBSztBQUFBLEdBQ25DLFVBQUFULEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRSxJQUFJO0FBQUEsR0FLNUIsVUFBQUosS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsS0FBSyxDQUFDSyxJQUFJLENBQUNHLEtBQUs7QUFBQSxHQUNuQyxVQUFBVCxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsSUFBSTtBQUFBLEVBRWhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RDYXJkL3N0eWxlLnRzPzFmM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RDYXJkU3R5bGUgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmFjY2VudFR4dH07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH0zMztcbiAgICB9XG4gICAgJjpob3Zlcj5oNCB7XG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udC5sYXJnZX1weDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udC5tZWRpdW19cHg7XG4gICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH01NTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udC5zbWFsbH1weDtcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9Y2M7XG4gICAgfVxuICAgIHNwYW46bm90KGg0PnNwYW4pIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnQuc21hbGx9cHg7IFxuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH01NTtcbiAgICB9XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIlByb2plY3RDYXJkU3R5bGUiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiYWNjZW50VHh0IiwidGV4dCIsInByaW1hcnkiLCJmb250IiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/projectCard/style.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5028994f9bf5d4940e9d")
/******/ })();
/******/ 
/******/ }
);