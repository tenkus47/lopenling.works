/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail_AnswerView_js"],{

/***/ "./app/components/TextDetail/AnswerView.js":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/AnswerView.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnswerView)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _AnswerView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnswerView.css */ \"./app/components/TextDetail/AnswerView.css\");\n/* harmony import */ var _AnswerView_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AnswerView_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnnotationControls.css */ \"./app/components/TextDetail/AnnotationControls.css\");\n/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button.css */ \"./app/components/TextDetail/Button.css\");\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/Annotation */ \"./app/lib/Annotation.js\");\n/* harmony import */ var lib_Answer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/Answer */ \"./app/lib/Answer.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/components/message.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar AnswerView = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AnswerView, _React$Component);\n\n  var _super = _createSuper(AnswerView);\n\n  function AnswerView() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnswerView);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnswerView, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", {\n        className: (_AnswerView_css__WEBPACK_IMPORTED_MODULE_6___default().answer)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"p\", {\n        className: (_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7___default().text),\n        dangerouslySetInnerHTML: {\n          __html: this.props.answer.content\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"p\", {\n        className: (_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7___default().subTitle)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        id: \"question.answeredBy\"\n      }), \" \", this.props.answer.name, \",\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedDate, {\n        value: this.props.answer.created\n      })));\n    }\n  }]);\n\n  return AnswerView;\n}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));\n\n\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/AnswerView.js?");

/***/ }),

/***/ "./app/components/TextDetail/AnnotationControls.css":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControls.css ***!
  \**********************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"inlineWidth\":\"280px\",\"annotationControls\":\"AnnotationControls---annotationControls\",\"annotationContent\":\"AnnotationControls---annotationContent\",\"subTitle\":\"AnnotationControls---subTitle\",\"title\":\"AnnotationControls---title\",\"sectionHeading\":\"AnnotationControls---sectionHeading\",\"text\":\"AnnotationControls---text\",\"padding\":\"AnnotationControls---padding\",\"arrowTop\":\"AnnotationControls---arrowTop\",\"arrowLeft\":\"AnnotationControls---arrowLeft\",\"arrowRight\":\"AnnotationControls---arrowRight\",\"inline\":\"AnnotationControls---inline\",\"arrow\":\"AnnotationControls---arrow\",\"arrowDs\":\"AnnotationControls---arrowDs\",\"nothingSelected\":\"AnnotationControls---nothingSelected\",\"anonymousMessage\":\"AnnotationControls---anonymousMessage\",\"noNotes\":\"AnnotationControls---noNotes\",\"breakButtons\":\"AnnotationControls---breakButtons\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/AnnotationControls.css?");

/***/ }),

/***/ "./app/components/TextDetail/AnswerView.css":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/AnswerView.css ***!
  \**************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"name\":\"AnswerView---name\",\"answer\":\"AnswerView---answer\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/AnswerView.css?");

/***/ }),

/***/ "./app/components/TextDetail/Button.css":
/*!**********************************************!*\
  !*** ./app/components/TextDetail/Button.css ***!
  \**********************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"save\":\"Button---save\",\"cancel\":\"Button---cancel\",\"buttonContainer\":\"Button---buttonContainer\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/Button.css?");

/***/ })

}]);