/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_Popover_index_js"],{

/***/ "./app/components/Popover/Popover.js":
/*!*******************************************!*\
  !*** ./app/components/Popover/Popover.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Popover)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Popover_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Popover.css */ \"./app/components/Popover/Popover.css\");\n/* harmony import */ var _Popover_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Popover_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Popover = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Popover, _React$Component);\n\n  var _super = _createSuper(Popover);\n\n  function Popover(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Popover);\n\n    _this = _super.call(this, props);\n    _this.popover = null;\n    _this.height = null;\n    _this.width = null;\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Popover, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.height = this.popover.offsetHeight;\n      this.width = this.popover.offsetWidth;\n      this.updatePosition();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      this.updatePosition();\n    }\n  }, {\n    key: \"updatePosition\",\n    value: function updatePosition() {\n      var top = this.props.position.top - this.height + \"px\";\n      var left = this.props.position.center - this.width / 2 + \"px\";\n      this.popover.style.top = top;\n      this.popover.style.left = left;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var classes = [(_Popover_css__WEBPACK_IMPORTED_MODULE_7___default().popover)];\n\n      if (!this.props.isVisible) {\n        classes.push((_Popover_css__WEBPACK_IMPORTED_MODULE_7___default().hidden));\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_6___default().apply(void 0, classes),\n        ref: function ref(popover) {\n          return _this2.popover = popover;\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", {\n        className: (_Popover_css__WEBPACK_IMPORTED_MODULE_7___default().controls)\n      }, \"Type:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"select\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"option\", null, \"Select...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"option\", null, \"Variant\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"option\", null, \"Marker\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"option\", null, \"Page break\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", {\n        className: (_Popover_css__WEBPACK_IMPORTED_MODULE_7___default().input)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"textarea\", null)));\n    }\n  }]);\n\n  return Popover;\n}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));\n\n\n\n//# sourceURL=webpack://teminusclient/./app/components/Popover/Popover.js?");

/***/ }),

/***/ "./app/components/Popover/index.js":
/*!*****************************************!*\
  !*** ./app/components/Popover/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Popover__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popover */ \"./app/components/Popover/Popover.js\");\n\n\n//# sourceURL=webpack://teminusclient/./app/components/Popover/index.js?");

/***/ }),

/***/ "./app/components/Popover/Popover.css":
/*!********************************************!*\
  !*** ./app/components/Popover/Popover.css ***!
  \********************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"popover\":\"Popover---popover\",\"controls\":\"Popover---controls\",\"hidden\":\"Popover---hidden\",\"input\":\"Popover---input\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/Popover/Popover.css?");

/***/ })

}]);