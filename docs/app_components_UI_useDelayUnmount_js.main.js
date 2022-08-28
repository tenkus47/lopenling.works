"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_UI_useDelayUnmount_js"],{

/***/ "./app/components/UI/useDelayUnmount.js":
/*!**********************************************!*\
  !*** ./app/components/UI/useDelayUnmount.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useDelayUnmount)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useDelayUnmount(isMounted, delayTime) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      shouldRender = _useState2[0],\n      setShouldRender = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var timeoutId;\n\n    if (isMounted && !shouldRender) {\n      setShouldRender(true);\n    } else if (!isMounted && shouldRender) {\n      timeoutId = setTimeout(function () {\n        return setShouldRender(false);\n      }, delayTime);\n    }\n\n    return function () {\n      return clearTimeout(timeoutId);\n    };\n  }, [isMounted, delayTime, shouldRender]);\n  return shouldRender;\n}\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/useDelayUnmount.js?");

/***/ })

}]);