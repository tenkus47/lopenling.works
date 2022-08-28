/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_UI_Slider_js"],{

/***/ "./app/components/UI/Slider.js":
/*!*************************************!*\
  !*** ./app/components/UI/Slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.css */ \"./app/components/UI/Slider.css\");\n/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Slider(_ref) {\n  var max = _ref.max,\n      min = _ref.min,\n      initialvalue = _ref.initialvalue,\n      _ref$changeSize = _ref.changeSize,\n      changeSize = _ref$changeSize === void 0 ? function (r) {\n    return console.log(r);\n  } : _ref$changeSize;\n  var initialPercent = initialvalue / max * 100;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialPercent),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      tempValue = _useState2[0],\n      setTempValue = _useState2[1];\n\n  var submitValue = lodash__WEBPACK_IMPORTED_MODULE_3___default().debounce(function (e) {\n    var currentPercent = tempValue / 100 * max;\n    changeSize(Math.floor(parseInt(currentPercent)));\n  }, 500);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Slider_css__WEBPACK_IMPORTED_MODULE_2___default().inputRanges)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    style: {\n      fontSize: 13,\n      top: \"-5px\"\n    },\n    onClick: function onClick() {\n      return changeSize(initialvalue - 2);\n    }\n  }, \"\\u0F40\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"range\",\n    style: {\n      width: \"70%\"\n    },\n    className: (_Slider_css__WEBPACK_IMPORTED_MODULE_2___default().inputRange),\n    min: 40,\n    max: 100,\n    smooth: \"yes\",\n    step: 1,\n    value: tempValue,\n    onChange: function onChange(e) {\n      return setTempValue(e.target.value);\n    },\n    onMouseUp: submitValue,\n    onTouchEnd: submitValue\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    style: {\n      fontSize: 18,\n      top: \"-10px\"\n    },\n    onClick: function onClick() {\n      return changeSize(initialvalue + 2);\n    }\n  }, \"\\u0F40\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/Slider.js?");

/***/ }),

/***/ "./app/components/UI/Slider.css":
/*!**************************************!*\
  !*** ./app/components/UI/Slider.css ***!
  \**************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"inputRanges\":\"Slider---inputRanges\",\"inputRange\":\"Slider---inputRange\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/Slider.css?");

/***/ })

}]);