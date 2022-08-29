"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_ErrorBoundary_ErrorBoundary_js"],{

/***/ "./app/components/ErrorBoundary/ErrorBoundary.js":
/*!*******************************************************!*\
  !*** ./app/components/ErrorBoundary/ErrorBoundary.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar ErrorBoundary = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ErrorBoundary, _React$Component);\n\n  var _super = _createSuper(ErrorBoundary);\n\n  function ErrorBoundary(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ErrorBoundary);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      hasError: false\n    };\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ErrorBoundary, [{\n    key: \"componentDidCatch\",\n    value: function componentDidCatch(error, errorInfo) {\n      // You can also log the error to an error reporting service\n      console.log(error, errorInfo);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.state.hasError) {\n        // You can render any custom fallback UI\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"h1\", null, \"Something went wrong.\");\n      }\n\n      return this.props.children;\n    }\n  }], [{\n    key: \"getDerivedStateFromError\",\n    value: function getDerivedStateFromError(error) {\n      // Update state so the next render will show the fallback UI.\n      return {\n        hasError: true\n      };\n    }\n  }]);\n\n  return ErrorBoundary;\n}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5L0Vycm9yQm91bmRhcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1DOzs7OztFQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7O0lBQ2YsMEJBQU1BLEtBQU47SUFDQSxNQUFLQyxLQUFMLEdBQWE7TUFBRUMsUUFBUSxFQUFFO0lBQVosQ0FBYjtJQUZlO0VBR2xCOzs7O1dBT0QsMkJBQWtCQyxLQUFsQixFQUF5QkMsU0FBekIsRUFBb0M7TUFDaEM7TUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVosRUFBbUJDLFNBQW5CO0lBQ0g7OztXQUVELGtCQUFTO01BQ0wsSUFBSSxLQUFLSCxLQUFMLENBQVdDLFFBQWYsRUFBeUI7UUFDckI7UUFDQSxvQkFBTywrRkFBUDtNQUNIOztNQUVELE9BQU8sS0FBS0YsS0FBTCxDQUFXTyxRQUFsQjtJQUNIOzs7V0FqQkQsa0NBQWdDSixLQUFoQyxFQUF1QztNQUNuQztNQUNBLE9BQU87UUFBRUQsUUFBUSxFQUFFO01BQVosQ0FBUDtJQUNIOzs7O0VBVHVCSjs7QUEwQjVCLGlFQUFlQyxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtaW51c2NsaWVudC8uL2FwcC9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkvRXJyb3JCb3VuZGFyeS5qcz9lMzgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgaGFzRXJyb3I6IGZhbHNlIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xyXG4gICAgICAgIC8vIFVwZGF0ZSBzdGF0ZSBzbyB0aGUgbmV4dCByZW5kZXIgd2lsbCBzaG93IHRoZSBmYWxsYmFjayBVSS5cclxuICAgICAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcclxuICAgICAgICAvLyBZb3UgY2FuIGFsc28gbG9nIHRoZSBlcnJvciB0byBhbiBlcnJvciByZXBvcnRpbmcgc2VydmljZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvckluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5oYXNFcnJvcikge1xyXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHJlbmRlciBhbnkgY3VzdG9tIGZhbGxiYWNrIFVJXHJcbiAgICAgICAgICAgIHJldHVybiA8aDE+U29tZXRoaW5nIHdlbnQgd3JvbmcuPC9oMT47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRXJyb3JCb3VuZGFyeSIsInByb3BzIiwic3RhdGUiLCJoYXNFcnJvciIsImVycm9yIiwiZXJyb3JJbmZvIiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/ErrorBoundary/ErrorBoundary.js\n");

/***/ })

}]);