"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_Editors_EditorContainer_js"],{

/***/ "./app/components/Editors/EditorContainer.js":
/*!***************************************************!*\
  !*** ./app/components/Editors/EditorContainer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ \"./app/components/Editors/Editor.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ \"./app/actions/index.js\");\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_3__.getSelectedText(state);\n  var selectedText2 = reducers__WEBPACK_IMPORTED_MODULE_3__.getSelectedText2(state);\n  var selectedWitness;\n  var selectedWitness2;\n  var witnesses;\n  var witnesses2;\n\n  if (selectedText) {\n    witnesses = reducers__WEBPACK_IMPORTED_MODULE_3__.getTextWitnesses(state, selectedText.id);\n    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_3__.getSelectedTextWitnessId(state, selectedText.id);\n\n    if (selectedWitnessId) {\n      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_3__.getWitness(state, selectedWitnessId);\n    } else {\n      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_3__.getWorkingWitness(state, selectedText.id);\n    }\n  }\n\n  if (selectedText2) {\n    witnesses2 = reducers__WEBPACK_IMPORTED_MODULE_3__.getTextWitnesses2(state, selectedText2.id);\n    var selectedWitnessId2 = reducers__WEBPACK_IMPORTED_MODULE_3__.getSelectedTextWitnessId2(state, selectedText2.id);\n\n    if (selectedWitnessId2) {\n      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_3__.getWitness2(state, selectedWitnessId2);\n    } else {\n      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_3__.getWorkingWitness2(state, selectedText2.id);\n    }\n  }\n\n  if (!state.user.userId === -1) {\n    user = state.user;\n  }\n\n  return {\n    selectedText: selectedText,\n    selectedWitness: selectedWitness,\n    selectedText2: selectedText2,\n    selectedWitness2: selectedWitness2,\n    title: reducers__WEBPACK_IMPORTED_MODULE_3__.getTranslation(state, \"header.title\"),\n    page: state.page,\n    isAnnotating: reducers__WEBPACK_IMPORTED_MODULE_3__.isAnnotating(state),\n    isSecondWindowOpen: reducers__WEBPACK_IMPORTED_MODULE_3__.isSecondWindowOpen(state),\n    theme: reducers__WEBPACK_IMPORTED_MODULE_3__.getTheme(state),\n    isPanelLinked: reducers__WEBPACK_IMPORTED_MODULE_3__.isPanelLinked(state),\n    textListIsVisible: reducers__WEBPACK_IMPORTED_MODULE_3__.getTextListVisible(state)\n  };\n};\n\nvar matchDispatchToProps = function matchDispatchToProps(dispatch) {\n  return {\n    onChangedTextWidth: function onChangedTextWidth(width) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedTextListWidth(width));\n    },\n    onChangedTextListVisible: function onChangedTextListVisible(isVisible) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedTextListVisible(isVisible));\n    },\n    changeIsAnnotating: function changeIsAnnotating(payload) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changeIsAnnotating(payload));\n\n      if (payload === false) {\n        var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_4__.changedActiveTextAnnotation(null);\n        dispatch(dismissTextAnnotation);\n        dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedActiveTextAnnotation(null));\n      }\n    },\n    onChangeWindowOpen: function onChangeWindowOpen(data, textId) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.toggleSecondWindow(data, textId));\n    },\n    onChangePanelLink: function onChangePanelLink(data) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changePanelLink(data));\n    }\n  };\n};\n\nvar EditorContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, matchDispatchToProps)(_Editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorContainer);\n\n//# sourceURL=webpack://teminusclient/./app/components/Editors/EditorContainer.js?");

/***/ })

}]);