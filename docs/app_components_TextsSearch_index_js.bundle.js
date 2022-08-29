/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextsSearch_index_js"],{

/***/ "./app/images/search.svg":
/*!*******************************!*\
  !*** ./app/images/search.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _path;\n\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar SvgSearch = function SvgSearch(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", _extends({\n    width: 24,\n    height: 24\n  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M9 2C5.146 2 2 5.146 2 9s3.146 7 7 7a6.959 6.959 0 004.574-1.719l.426.426V16l6 6 2-2-6-6h-1.293l-.426-.426A6.959 6.959 0 0016 9c0-3.854-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5z\"\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSearch);\n\n//# sourceURL=webpack://teminusclient/./app/images/search.svg?");

/***/ }),

/***/ "./app/components/TextsSearch/TextsSearch.js":
/*!***************************************************!*\
  !*** ./app/components/TextsSearch/TextsSearch.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TextsSearch_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextsSearch.css */ \"./app/components/TextsSearch/TextsSearch.css\");\n/* harmony import */ var _TextsSearch_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TextsSearch_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app_constants */ \"./app/app_constants/index.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/components/injectIntl.js\");\n/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Button */ \"./app/components/UI/Button.js\");\n/* harmony import */ var images_search_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! images/search.svg */ \"./app/images/search.svg\");\n\n\n\n\n\n\n\n\nvar TextsSearch = function TextsSearch(props) {\n  var textInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createRef();\n\n  var _useTransition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useTransition)(),\n      _useTransition2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useTransition, 2),\n      ispending = _useTransition2[0],\n      startTransition = _useTransition2[1];\n\n  var initiateSearch = function initiateSearch(e) {\n    e.preventDefault();\n\n    if (textInput.current instanceof HTMLInputElement) {\n      var _searchTerm = textInput.current.value;\n      startTransition(function () {\n        props.searchChanged(_searchTerm);\n      });\n    }\n  };\n\n  var handleChange = function handleChange(e) {\n    startTransition(function () {\n      if (e.target.value === \"\") {\n        props.searchChanged(null);\n        return;\n      }\n\n      props.searchChanged(e.target.value);\n    });\n  };\n\n  console.log(props.textListWidth);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_TextsSearch_css__WEBPACK_IMPORTED_MODULE_2___default().textsSearchContainer),\n    style: {\n      maxWidth: props.textListWidth\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_TextsSearch_css__WEBPACK_IMPORTED_MODULE_2___default().textsSearch)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"form\", {\n    onSubmit: initiateSearch\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    onChange: handleChange,\n    style: {\n      outline: \"none\",\n      width: 150\n    },\n    type: \"text\",\n    id: \"textSearchInput\",\n    placeholder: props.intl.formatMessage({\n      id: \"leftbar.search\"\n    }),\n    ref: textInput\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    backgroundColor: \"#35BF5C\",\n    onClick: initiateSearch // title={props.intl.formatMessage({\n    //     id: \"leftbar.search\",\n    // })}\n    ,\n    noBezel: true,\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(images_search_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TextsSearch));\n\n//# sourceURL=webpack://teminusclient/./app/components/TextsSearch/TextsSearch.js?");

/***/ }),

/***/ "./app/components/TextsSearch/TextsSearchContainer.js":
/*!************************************************************!*\
  !*** ./app/components/TextsSearch/TextsSearchContainer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _TextsSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextsSearch */ \"./app/components/TextsSearch/TextsSearch.js\");\n/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ \"./app/actions/index.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    searchTerm: reducers__WEBPACK_IMPORTED_MODULE_4__.getSearchValue(state),\n    searchValue: state.ui.searchValue,\n    textListWidth: reducers__WEBPACK_IMPORTED_MODULE_4__.getTextListWidth(state)\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  // const { dispatch } = dispatchProps;\n  // const { selectedText } = stateProps;\n  return {\n    searchChanged: function searchChanged(searchTerm) {\n      dispatch((0,actions__WEBPACK_IMPORTED_MODULE_3__.changedSearchValue)(searchTerm));\n    }\n  };\n};\n\nvar TextsSearchContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_TextsSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextsSearchContainer);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextsSearch/TextsSearchContainer.js?");

/***/ }),

/***/ "./app/components/TextsSearch/index.js":
/*!*********************************************!*\
  !*** ./app/components/TextsSearch/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _TextsSearchContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _TextsSearchContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextsSearchContainer */ \"./app/components/TextsSearch/TextsSearchContainer.js\");\n\n\n//# sourceURL=webpack://teminusclient/./app/components/TextsSearch/index.js?");

/***/ }),

/***/ "./app/components/UI/Accessory.js":
/*!****************************************!*\
  !*** ./app/components/UI/Accessory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accessoryTypes\": () => (/* binding */ accessoryTypes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Accessory_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accessory.css */ \"./app/components/UI/Accessory.css\");\n/* harmony import */ var _Accessory_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Accessory_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css/colour.css */ \"./app/css/colour.css\");\n/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(css_colour_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar accessoryTypes = {\n  ADD: \"+\",\n  DELETE: \"\\xD7\"\n};\n\nvar Accessory = function Accessory(props) {\n  var style = {};\n  style.backgroundColor = props.backgroundColor || \"\";\n  style.color = props.color || \"#fff\";\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_Accessory_css__WEBPACK_IMPORTED_MODULE_1___default().accessory),\n    title: props.title,\n    onClick: props.onClick,\n    style: style\n  }, accessoryTypes[props.type]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accessory);\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/Accessory.js?");

/***/ }),

/***/ "./app/components/UI/ApplyTooltip.js":
/*!*******************************************!*\
  !*** ./app/components/UI/ApplyTooltip.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/components/message.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Tooltip/Tooltip.js\");\n\n\n\n\nfunction ApplyTooltip(_ref) {\n  var children = _ref.children,\n      tooltipName = _ref.tooltipName,\n      _ref$format = _ref.format,\n      format = _ref$format === void 0 ? null : _ref$format,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className,\n      _ref$shortcut = _ref.shortcut,\n      shortcut = _ref$shortcut === void 0 ? \"\" : _ref$shortcut,\n      _ref$on = _ref.on,\n      on = _ref$on === void 0 ? false : _ref$on;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    \"data-tip\": true,\n    \"data-for\": tooltipName,\n    className: className,\n    style: {\n      width: \"100%\"\n    }\n  }, !on ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    placement: \"top\",\n    followCursor: true,\n    title: format ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      id: format\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, tooltipName, \" [\".concat(shortcut, \"]\"))\n  }, children) : children));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplyTooltip);\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/ApplyTooltip.js?");

/***/ }),

/***/ "./app/components/UI/Button.js":
/*!*************************************!*\
  !*** ./app/components/UI/Button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! css/colour.css */ \"./app/css/colour.css\");\n/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(css_colour_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button.css */ \"./app/components/UI/Button.css\");\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Accessory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Accessory */ \"./app/components/UI/Accessory.js\");\n/* harmony import */ var _ApplyTooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ApplyTooltip */ \"./app/components/UI/ApplyTooltip.js\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar Button = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Button, _React$Component);\n\n  var _super = _createSuper(Button);\n\n  function Button() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Button);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Button, [{\n    key: \"render\",\n    value: function render() {\n      var color = this.props.color || \"#ffffff\";\n      var bgColour = this.props.backgroundColor || (css_colour_css__WEBPACK_IMPORTED_MODULE_7___default().mainTint);\n      var fontSize = this.props.fontSize || \"14px\";\n      var classNames = this.props.noBezel ? [(_Button_css__WEBPACK_IMPORTED_MODULE_8___default().buttonNoBezel)] : [(_Button_css__WEBPACK_IMPORTED_MODULE_8___default().button)];\n      var tooltipTitle = this.props.tooltipTitle || \"\";\n      if (this.props.isActive) classNames.push((_Button_css__WEBPACK_IMPORTED_MODULE_8___default().active));\n      var className = classnames__WEBPACK_IMPORTED_MODULE_6___default().apply(void 0, classNames);\n      var shortcut = this.props.shortcut || \"\";\n      var style = {\n        fontSize: fontSize,\n        color: color,\n        backgroundColor: bgColour\n      };\n      if (this.props.align) style.textAlign = this.props.align;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_ApplyTooltip__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        tooltipName: tooltipTitle,\n        shortcut: shortcut,\n        on: this.props.disabled\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"button\", {\n        style: style,\n        className: className,\n        onClick: this.props.onClick,\n        disabled: this.props.disabled\n      }, this.props.icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", {\n        className: (_Button_css__WEBPACK_IMPORTED_MODULE_8___default().icon)\n      }, this.props.icon), this.props.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"span\", {\n        className: (_Button_css__WEBPACK_IMPORTED_MODULE_8___default().title)\n      }, this.props.title)));\n    }\n  }]);\n\n  return Button;\n}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));\n\n\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/Button.js?");

/***/ }),

/***/ "./app/components/TextsSearch/TextsSearch.css":
/*!****************************************************!*\
  !*** ./app/components/TextsSearch/TextsSearch.css ***!
  \****************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"textsSearchContainer\":\"TextsSearch---textsSearchContainer\",\"textsSearch\":\"TextsSearch---textsSearch\",\"minify\":\"TextsSearch---minify\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextsSearch/TextsSearch.css?");

/***/ }),

/***/ "./app/components/UI/Accessory.css":
/*!*****************************************!*\
  !*** ./app/components/UI/Accessory.css ***!
  \*****************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"accessory\":\"Accessory---accessory\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/Accessory.css?");

/***/ }),

/***/ "./app/components/UI/Button.css":
/*!**************************************!*\
  !*** ./app/components/UI/Button.css ***!
  \**************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"button\":\"Button---button\",\"buttonNoBezel\":\"Button---buttonNoBezel\",\"active\":\"Button---active\",\"leftAlign\":\"Button---leftAlign\",\"title\":\"Button---title\",\"icon\":\"Button---icon\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/UI/Button.css?");

/***/ }),

/***/ "./app/css/colour.css":
/*!****************************!*\
  !*** ./app/css/colour.css ***!
  \****************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\"};\n\n//# sourceURL=webpack://teminusclient/./app/css/colour.css?");

/***/ })

}]);