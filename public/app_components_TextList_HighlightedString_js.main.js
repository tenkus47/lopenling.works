"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextList_HighlightedString_js"],{

/***/ "./app/components/TextList/HighlightedString.js":
/*!******************************************************!*\
  !*** ./app/components/TextList/HighlightedString.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HighlightedString)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grapheme-splitter */ \"./node_modules/grapheme-splitter/index.js\");\n/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-string-replace */ \"./node_modules/react-string-replace/index.js\");\n/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_string_replace__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar HighlightedString = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HighlightedString, _React$Component);\n\n  var _super = _createSuper(HighlightedString);\n\n  function HighlightedString(props) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, HighlightedString);\n\n    return _super.call(this, props);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(HighlightedString, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var string = this.props.string;\n      var nameHtml = string;\n      var stringClass = this.props.stringClass || \"\";\n\n      if (this.props.searchTerm) {\n        var searchTerm = this.props.searchTerm;\n        var splitter = new (grapheme_splitter__WEBPACK_IMPORTED_MODULE_6___default())();\n        var graphemes = splitter.splitGraphemes(string);\n        var start = string.indexOf(searchTerm);\n        var end = start + searchTerm.length;\n        var position = 0;\n        var foundGraphemes = \"\";\n\n        if (start > -1) {\n          for (var i = 0; i < graphemes.length; i++) {\n            var grapheme = graphemes[i];\n\n            if (position >= start && position < end) {\n              foundGraphemes += grapheme;\n            }\n\n            position += grapheme.length;\n          }\n        }\n\n        if (foundGraphemes.length > 0) {\n          nameHtml = react_string_replace__WEBPACK_IMPORTED_MODULE_7___default()(string, foundGraphemes, function (match, i) {\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"span\", {\n              className: _this.props.highlightClass,\n              key: \"highlight-\".concat(i)\n            }, match);\n          });\n        }\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"span\", {\n        className: stringClass\n      }, nameHtml);\n    }\n  }]);\n\n  return HighlightedString;\n}(react__WEBPACK_IMPORTED_MODULE_5__.Component);\n\n\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/HighlightedString.js?");

/***/ })

}]);