"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_MediaComponent_Audio_js"],{

/***/ "./app/components/MediaComponent/Audio.js":
/*!************************************************!*\
  !*** ./app/components/MediaComponent/Audio.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Collapse/Collapse.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-howler-player'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/useTheme.js\");\n\n\n\n\n\nfunction Audio(props) {\n  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  var url = \"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3\";\n  var playerRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n\n  var handleSeek = function handleSeek(e) {\n    console.log(e);\n  };\n\n  var onPlayerReady = function onPlayerReady(data) {\n    console.log(data);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"in\": props.open\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-howler-player'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n    profile: \"top_progress\",\n    src: [url],\n    isDark: theme.palette.mode === \"dark\" ? true : false,\n    onLoad: onPlayerReady,\n    speedPanel: \"bottom\",\n    ref: playerRef,\n    onPlay: handleSeek\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Audio);\n\n//# sourceURL=webpack://teminusclient/./app/components/MediaComponent/Audio.js?");

/***/ })

}]);