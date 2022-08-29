"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail_HeaderMenu_Refresh_js"],{

/***/ "./node_modules/@mui/icons-material/Refresh.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Refresh.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@mui/icons-material/utils/createSvgIcon.js\"));\n\nvar _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\nvar _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)(\"path\", {\n  d: \"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"\n}), 'Refresh');\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://teminusclient/./node_modules/@mui/icons-material/Refresh.js?");

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/Refresh.js":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Refresh.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Refresh */ \"./node_modules/@mui/icons-material/Refresh.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/IconButton/IconButton.js\");\n\n\n\n\nfunction Refresh(_ref) {\n  var isSecondWindowOpen = _ref.isSecondWindowOpen;\n  var handleRefresh = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    var updatelistBtn = document.getElementById(\"updateList\");\n    if (updatelistBtn) updatelistBtn.click();\n  }, [isSecondWindowOpen]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var timer = setTimeout(function () {\n      handleRefresh();\n    }, 500);\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [isSecondWindowOpen]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"text\",\n    size: \"small\",\n    disableRipple: true,\n    onClick: handleRefresh\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Refresh);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/HeaderMenu/Refresh.js?");

/***/ })

}]);