"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail_TextHeadingContainer_js-app_components_TextDetail_FontSize_css-app_-fb003e"],{

/***/ "./app/components/TextDetail/TextHeadingContainer.js":
/*!***********************************************************!*\
  !*** ./app/components/TextDetail/TextHeadingContainer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-batched-actions */ \"./node_modules/redux-batched-actions/lib/index.js\");\n/* harmony import */ var _TextHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextHeading */ \"./app/components/TextDetail/TextHeading.js\");\n/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions */ \"./app/actions/index.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/Witness */ \"./app/lib/Witness.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_6__.getSelectedText(state);\n  var witnesses = [];\n  var exportingWitness = false;\n  var selectedWitness;\n\n  if (selectedText) {\n    witnesses = reducers__WEBPACK_IMPORTED_MODULE_6__.getTextWitnesses(state, selectedText.id);\n    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_6__.getSelectedTextWitnessId(state, selectedText.id);\n\n    if (selectedWitnessId) {\n      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_6__.getWitness(state, selectedWitnessId);\n      exportingWitness = reducers__WEBPACK_IMPORTED_MODULE_6__.getExportingWitness(state, selectedWitnessId);\n    } else {\n      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_6__.getWorkingWitness(state, selectedText.id);\n    }\n  }\n\n  var showPageImages = reducers__WEBPACK_IMPORTED_MODULE_6__.showPageImages(state);\n  var textFontSize = reducers__WEBPACK_IMPORTED_MODULE_6__.getTextFontSize(state);\n  return {\n    witnesses: witnesses,\n    selectedText: selectedText,\n    selectedWitness: selectedWitness,\n    exportingWitness: exportingWitness,\n    showPageImages: showPageImages,\n    textFontSize: textFontSize\n  };\n};\n\nvar mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {\n  var dispatch = dispatchProps.dispatch;\n  var selectedText = stateProps.selectedText;\n  return _objectSpread(_objectSpread(_objectSpread({}, stateProps), ownProps), {}, {\n    onToggledPageImages: function onToggledPageImages(showImages) {\n      dispatch((0,actions__WEBPACK_IMPORTED_MODULE_5__.changedShowPageImages)(showImages));\n    },\n    onChangedFontSize: function onChangedFontSize(fontSize) {\n      dispatch((0,actions__WEBPACK_IMPORTED_MODULE_5__.changedTextFontSize)(fontSize));\n    },\n    onSelectedWitness: function onSelectedWitness(witness) {\n      dispatch((0,actions__WEBPACK_IMPORTED_MODULE_5__.selectedTextWitness)(selectedText.id, witness.id));\n    },\n    onExport: function onExport() {\n      dispatch((0,actions__WEBPACK_IMPORTED_MODULE_5__.exportWitness)(stateProps.selectedWitness.id, \"docx\"));\n    }\n  });\n};\n\nvar TextHeadingContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, null, mergeProps)(_TextHeading__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextHeadingContainer);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/TextHeadingContainer.js?");

/***/ })

}]);