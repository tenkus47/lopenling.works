/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextList_TextListTabContainer_js"],{

/***/ "./app/components/TextList/TextListTab.js":
/*!************************************************!*\
  !*** ./app/components/TextList/TextListTab.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TextList/TextListTab.css */ \"./app/components/TextList/TextListTab.css\");\n/* harmony import */ var components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar TextListTab = function TextListTab(props) {\n  var tabClassnames = [(components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default().tab)];\n\n  if (props.textListIsVisible) {\n    tabClassnames.push((components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default().hideTab));\n  } else {\n    tabClassnames.push((components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default().showTab));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0, tabClassnames),\n    onClick: props.tabClicked\n  }, \"Text List\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextListTab);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/TextListTab.js?");

/***/ }),

/***/ "./app/components/TextList/TextListTabContainer.js":
/*!*********************************************************!*\
  !*** ./app/components/TextList/TextListTabContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-batched-actions */ \"./node_modules/redux-batched-actions/lib/index.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ \"./app/actions/index.js\");\n/* harmony import */ var components_TextList_TextListTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/TextList/TextListTab */ \"./app/components/TextList/TextListTab.js\");\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    textListIsVisible: (0,reducers__WEBPACK_IMPORTED_MODULE_3__.getTextListVisible)(state)\n  };\n};\n\nvar mapStateToDispatch = function mapStateToDispatch(dispatch) {\n  return {\n    tabClicked: function tabClicked() {\n      var textListIsVisible = true;\n      dispatch((0,actions__WEBPACK_IMPORTED_MODULE_4__.changedTextListVisible)(textListIsVisible));\n    }\n  };\n};\n\nvar TextListTabContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapStateToDispatch)(components_TextList_TextListTab__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextListTabContainer);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/TextListTabContainer.js?");

/***/ }),

/***/ "./app/components/TextList/TextListTab.css":
/*!*************************************************!*\
  !*** ./app/components/TextList/TextListTab.css ***!
  \*************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"tab\":\"TextListTab---tab\",\"showTab\":\"TextListTab---showTab\",\"hideTab\":\"TextListTab---hideTab\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/TextListTab.css?");

/***/ })

}]);