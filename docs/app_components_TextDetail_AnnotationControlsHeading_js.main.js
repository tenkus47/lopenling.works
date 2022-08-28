/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail_AnnotationControlsHeading_js"],{

/***/ "./app/components/TextDetail/AddButton.js":
/*!************************************************!*\
  !*** ./app/components/TextDetail/AddButton.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AddButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddButton.css */ \"./app/components/TextDetail/AddButton.css\");\n/* harmony import */ var _AddButton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AddButton_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar AddButton = function AddButton(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_AddButton_css__WEBPACK_IMPORTED_MODULE_1___default().button),\n    title: props.title,\n    onClick: props.onClick\n  }, \"+\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddButton);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/AddButton.js?");

/***/ }),

/***/ "./app/components/TextDetail/AnnotationControlsHeading.js":
/*!****************************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControlsHeading.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/components/message.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/components/injectIntl.js\");\n/* harmony import */ var _AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnnotationControlsHeading.css */ \"./app/components/TextDetail/AnnotationControlsHeading.css\");\n/* harmony import */ var _AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddButton */ \"./app/components/TextDetail/AddButton.js\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar AnnotationControlsHeading = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AnnotationControlsHeading, _React$Component);\n\n  var _super = _createSuper(AnnotationControlsHeading);\n\n  function AnnotationControlsHeading() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnnotationControlsHeading);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnnotationControlsHeading, [{\n    key: \"render\",\n    value: function render() {\n      var button = null;\n\n      if (this.props.buttonOnClick) {\n        var title = this.props.buttonTitleId ? this.props.intl.formatMessage({\n          id: this.props.buttonTitleId\n        }) : \"\";\n        button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_AddButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          title: title,\n          onClick: this.props.buttonOnClick\n        });\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"h3\", {\n        className: (_AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_6___default().heading)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"span\", {\n        className: (_AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_6___default().title)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        id: this.props.titleId\n      })), button && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", {\n        className: (_AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_6___default().button)\n      }, button));\n    }\n  }]);\n\n  return AnnotationControlsHeading;\n}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(AnnotationControlsHeading));\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/AnnotationControlsHeading.js?");

/***/ }),

/***/ "./app/components/TextDetail/AddButton.css":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/AddButton.css ***!
  \*************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"button\":\"AddButton---button\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/AddButton.css?");

/***/ }),

/***/ "./app/components/TextDetail/AnnotationControlsHeading.css":
/*!*****************************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControlsHeading.css ***!
  \*****************************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"heading\":\"AnnotationControlsHeading---heading\",\"title\":\"AnnotationControlsHeading---title\",\"button\":\"AnnotationControlsHeading---button\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/AnnotationControlsHeading.css?");

/***/ })

}]);