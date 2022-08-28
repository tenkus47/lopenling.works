/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextList_TextListTab_js"],{

/***/ "./app/components/TextList/TextListTab.js":
/*!************************************************!*\
  !*** ./app/components/TextList/TextListTab.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TextList/TextListTab.css */ \"./app/components/TextList/TextListTab.css\");\n/* harmony import */ var components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar TextListTab = function TextListTab(props) {\n  var tabClassnames = [(components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default().tab)];\n\n  if (props.textListIsVisible) {\n    tabClassnames.push((components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default().hideTab));\n  } else {\n    tabClassnames.push((components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default().showTab));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0, tabClassnames),\n    onClick: props.tabClicked\n  }, \"Text List\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextListTab);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/TextListTab.js?");

/***/ }),

/***/ "./app/components/TextList/TextListTab.css":
/*!*************************************************!*\
  !*** ./app/components/TextList/TextListTab.css ***!
  \*************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"tab\":\"TextListTab---tab\",\"showTab\":\"TextListTab---showTab\",\"hideTab\":\"TextListTab---hideTab\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/TextListTab.css?");

/***/ })

}]);