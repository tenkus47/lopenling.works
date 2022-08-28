/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail_ImageToggle_js"],{

/***/ "./app/components/TextDetail/ImageToggle.js":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/ImageToggle.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageToggle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageToggle.css */ \"./app/components/TextDetail/ImageToggle.css\");\n/* harmony import */ var _ImageToggle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageToggle_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar ImageToggle = function ImageToggle(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_ImageToggle_css__WEBPACK_IMPORTED_MODULE_1___default().imageToggle)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"showPageImages\"\n  }, \"Show Images\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"showPageImages\",\n    type: \"checkbox\",\n    checked: props.showImages,\n    onChange: function onChange(e) {\n      var target = event.target;\n      var checked = target.checked;\n      props.onChange(checked);\n    }\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageToggle);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/ImageToggle.js?");

/***/ }),

/***/ "./app/components/TextDetail/ImageToggle.css":
/*!***************************************************!*\
  !*** ./app/components/TextDetail/ImageToggle.css ***!
  \***************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"imageToggle\":\"ImageToggle---imageToggle\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/ImageToggle.css?");

/***/ })

}]);