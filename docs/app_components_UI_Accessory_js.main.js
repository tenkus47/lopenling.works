/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_UI_Accessory_js"],{

/***/ "./app/components/UI/Accessory.js":
/*!****************************************!*\
  !*** ./app/components/UI/Accessory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accessoryTypes\": () => (/* binding */ accessoryTypes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Accessory_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accessory.css */ \"./app/components/UI/Accessory.css\");\n/* harmony import */ var _Accessory_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Accessory_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css/colour.css */ \"./app/css/colour.css\");\n/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(css_colour_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar accessoryTypes = {\n  ADD: \"+\",\n  DELETE: \"\\xD7\"\n};\n\nvar Accessory = function Accessory(props) {\n  var style = {};\n  style.backgroundColor = props.backgroundColor || \"\";\n  style.color = props.color || \"#fff\";\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_Accessory_css__WEBPACK_IMPORTED_MODULE_1___default().accessory),\n    title: props.title,\n    onClick: props.onClick,\n    style: style\n  }, accessoryTypes[props.type]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accessory);\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/Accessory.js?");

/***/ }),

/***/ "./app/components/UI/Accessory.css":
/*!*****************************************!*\
  !*** ./app/components/UI/Accessory.css ***!
  \*****************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"accessory\":\"Accessory---accessory\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/Accessory.css?");

/***/ }),

/***/ "./app/css/colour.css":
/*!****************************!*\
  !*** ./app/css/colour.css ***!
  \****************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\"};\n\n//# sourceURL=webpack://teminusclient/./app/css/colour.css?");

/***/ })

}]);