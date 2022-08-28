/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail_FontSize_js"],{

/***/ "./app/components/TextDetail/FontSize.js":
/*!***********************************************!*\
  !*** ./app/components/TextDetail/FontSize.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FontSize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FontSize.css */ \"./app/components/TextDetail/FontSize.css\");\n/* harmony import */ var _FontSize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FontSize_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar FontSize = function FontSize(props) {\n  var minimumSize = 14;\n  var maximumSize = 48;\n  var options = new Array(maximumSize - minimumSize).fill().map(function (value, index) {\n    var size = minimumSize + index;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: size,\n      key: size\n    }, size);\n  });\n\n  var onChange = function onChange(e) {\n    var target = event.target;\n    var fontSize = Number(target.value);\n    props.onChange(fontSize);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_FontSize_css__WEBPACK_IMPORTED_MODULE_1___default().fontSize)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"fontSize\"\n  }, \"Font Size\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    value: props.fontSize,\n    onChange: onChange\n  }, options));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontSize);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/FontSize.js?");

/***/ }),

/***/ "./app/components/TextDetail/FontSize.css":
/*!************************************************!*\
  !*** ./app/components/TextDetail/FontSize.css ***!
  \************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"fontSize\":\"FontSize---fontSize\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/FontSize.css?");

/***/ })

}]);