/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_UI_ShareButton_js"],{

/***/ "./app/components/UI/ShareButton.js":
/*!******************************************!*\
  !*** ./app/components/UI/ShareButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/FacebookShareButton.js\");\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/FacebookIcon.js\");\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/WhatsappShareButton.js\");\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/WhatsappIcon.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/components/message.js\");\n/* harmony import */ var _Sharebutton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sharebutton.css */ \"./app/components/UI/Sharebutton.css\");\n/* harmony import */ var _Sharebutton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sharebutton_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nvar ShareButton = function ShareButton(_ref) {\n  var _props$annotationData;\n\n  var props = _ref.props;\n  var content = props === null || props === void 0 ? void 0 : (_props$annotationData = props.annotationData) === null || _props$annotationData === void 0 ? void 0 : _props$annotationData.content;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_Sharebutton_css__WEBPACK_IMPORTED_MODULE_1___default().shareContainer)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_Sharebutton_css__WEBPACK_IMPORTED_MODULE_1___default().shareButton)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    id: \"annotation.share\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: (_Sharebutton_css__WEBPACK_IMPORTED_MODULE_1___default().facebookButton),\n    id: \"sharebutton\",\n    url: \"https://parkhang.lopenling.org\".concat(window.location.pathname),\n    quote: content,\n    hashtag: \"#openPecha\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: 16,\n    round: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: (_Sharebutton_css__WEBPACK_IMPORTED_MODULE_1___default().whatsappButton),\n    onClick: function onClick() {\n      return console.log(\"https://parkhang.lopenling.org\".concat(window.location.pathname));\n    },\n    title: \"Parkhang\",\n    url: \"https://parkhang.lopenling.org\".concat(window.location.pathname)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    size: 16,\n    round: true\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareButton);\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/ShareButton.js?");

/***/ }),

/***/ "./app/components/UI/Sharebutton.css":
/*!*******************************************!*\
  !*** ./app/components/UI/Sharebutton.css ***!
  \*******************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"shareContainer\":\"Sharebutton---shareContainer\",\"shareButton\":\"Sharebutton---shareButton\",\"facebookButton\":\"Sharebutton---facebookButton\",\"whatsappButton\":\"Sharebutton---whatsappButton\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/Sharebutton.css?");

/***/ })

}]);