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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectCardStyle\": () => (/* binding */ ProjectCardStyle)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _templateObject;\n\nvar ProjectCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    background-color: \", \";\\n    padding: 10px;\\n    border-radius: 5px;\\n    width: 260px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    cursor: pointer;\\n    transition: 0.2s background-color ease-out;\\n    &:hover {\\n        background-color: \", \"33;\\n    }\\n    &:hover>h4 {\\n        color: \", \";\\n    }\\n    h4 {\\n        font-size: \", \"px;\\n        span {\\n            font-size: \", \"px;\\n            color: \", \"55;\\n            margin-left: 10px;\\n        }\\n    }\\n    p {\\n        margin-top: 25px;\\n        font-size: \", \"px;\\n        color: \", \"cc;\\n    }\\n    span:not(h4>span) {\\n        display: flex;\\n        justify-content: flex-end;\\n        font-size: \", \"px; \\n        color: \", \"55;\\n    }\\n\"])), function (props) {\n  return props.theme.colors.accentTxt;\n}, function (props) {\n  return props.theme.colors.text;\n}, function (props) {\n  return props.theme.colors.accent;\n}, function (props) {\n  return props.theme.font.large;\n}, function (props) {\n  return props.theme.font.medium;\n}, function (props) {\n  return props.theme.colors.text;\n}, function (props) {\n  return props.theme.font.small;\n}, function (props) {\n  return props.theme.colors.text;\n}, function (props) {\n  return props.theme.font.small;\n}, function (props) {\n  return props.theme.colors.text;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0Q2FyZC9zdHlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUVoQyxJQUFNQyxnQkFBZ0IsR0FBR0QsNkRBQVUsZzRCQUNsQixVQUFBRyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUztBQUFBLEdBVWpDLFVBQUFILEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRSxJQUFJO0FBQUEsR0FHM0MsVUFBQUosS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNHLE1BQU07QUFBQSxHQUc5QixVQUFBTCxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNLLElBQUksQ0FBQ0MsS0FBSztBQUFBLEdBRTNCLFVBQUFQLEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0ssSUFBSSxDQUFDRSxNQUFNO0FBQUEsR0FDcEMsVUFBQVIsS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNFLElBQUk7QUFBQSxHQU1oQyxVQUFBSixLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNLLElBQUksQ0FBQ0csS0FBSztBQUFBLEdBQ25DLFVBQUFULEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRSxJQUFJO0FBQUEsR0FLNUIsVUFBQUosS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsS0FBSyxDQUFDSyxJQUFJLENBQUNHLEtBQUs7QUFBQSxHQUNuQyxVQUFBVCxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsSUFBSTtBQUFBLEVBRWhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RDYXJkL3N0eWxlLnRzPzFmM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RDYXJkU3R5bGUgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmFjY2VudFR4dH07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH0zMztcbiAgICB9XG4gICAgJjpob3Zlcj5oNCB7XG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5hY2NlbnR9O1xuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250LmxhcmdlfXB4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250Lm1lZGl1bX1weDtcbiAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTU1O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250LnNtYWxsfXB4O1xuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH1jYztcbiAgICB9XG4gICAgc3Bhbjpub3QoaDQ+c3Bhbikge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udC5zbWFsbH1weDsgXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTU1O1xuICAgIH1cbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiUHJvamVjdENhcmRTdHlsZSIsImRpdiIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRUeHQiLCJ0ZXh0IiwiYWNjZW50IiwiZm9udCIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/projectCard/style.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("158ee9c425ba7dd16703")
/******/ })();
/******/ 
/******/ }
);