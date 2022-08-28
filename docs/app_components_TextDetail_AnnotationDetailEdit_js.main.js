/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail_AnnotationDetailEdit_js"],{

/***/ "./app/components/TextDetail/AnnotationDetailEdit.js":
/*!***********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationDetailEdit.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/components/message.js\");\n/* harmony import */ var _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationDetail.css */ \"./app/components/TextDetail/AnnotationDetail.css\");\n/* harmony import */ var _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nvar AnnotationDetailEdit = function AnnotationDetailEdit(props) {\n  var content = props.annotationData.content;\n  var classes = [(_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_2___default().annotationDetail)];\n  var textarea = null;\n\n  if (props.isActive) {\n    classes.push((_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_2___default().active));\n  }\n\n  var auto_grow = function auto_grow(element) {\n    textarea.style.height = \"5px\";\n    textarea.style.height = textarea.scrollHeight + \"px\";\n  };\n\n  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0, classes);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: className\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, props.annotationData.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_2___default().editing)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    defaultValue: content,\n    autoFocus: true,\n    onInput: auto_grow,\n    ref: function ref(ta) {\n      return textarea = ta;\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_2___default().actionButtons)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_2___default().save),\n    onClick: function onClick() {\n      if (textarea) {\n        props.saveAnnotationHandler(textarea.value);\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    id: \"annotation.save\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_2___default().cancel),\n    onClick: props.cancelAnnotationHandler\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    id: \"annotation.cancel\"\n  })))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotationDetailEdit);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/AnnotationDetailEdit.js?");

/***/ }),

/***/ "./app/components/TextDetail/AnnotationDetail.css":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationDetail.css ***!
  \********************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"annotationDetail\":\"AnnotationDetail---annotationDetail\",\"active\":\"AnnotationDetail---active\",\"annotationHeader\":\"AnnotationDetail---annotationHeader\",\"activeIcon\":\"AnnotationDetail---activeIcon\",\"editing\":\"AnnotationDetail---editing\",\"actionButtons\":\"AnnotationDetail---actionButtons\",\"edit\":\"AnnotationDetail---edit\",\"editImage\":\"AnnotationDetail---editImage\",\"save\":\"AnnotationDetail---save\",\"cancel\":\"AnnotationDetail---cancel\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/AnnotationDetail.css?");

/***/ })

}]);