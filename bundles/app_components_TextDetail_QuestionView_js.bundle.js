/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail_QuestionView_js"],{

/***/ "./app/components/TextDetail/AnswerView.js":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/AnswerView.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnswerView)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _AnswerView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnswerView.css */ \"./app/components/TextDetail/AnswerView.css\");\n/* harmony import */ var _AnswerView_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AnswerView_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnnotationControls.css */ \"./app/components/TextDetail/AnnotationControls.css\");\n/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button.css */ \"./app/components/TextDetail/Button.css\");\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/Annotation */ \"./app/lib/Annotation.js\");\n/* harmony import */ var lib_Answer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/Answer */ \"./app/lib/Answer.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/components/message.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar AnswerView = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AnswerView, _React$Component);\n\n  var _super = _createSuper(AnswerView);\n\n  function AnswerView() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnswerView);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnswerView, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", {\n        className: (_AnswerView_css__WEBPACK_IMPORTED_MODULE_6___default().answer)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"p\", {\n        className: (_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7___default().text),\n        dangerouslySetInnerHTML: {\n          __html: this.props.answer.content\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"p\", {\n        className: (_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7___default().subTitle)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        id: \"question.answeredBy\"\n      }), \" \", this.props.answer.name, \",\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedDate, {\n        value: this.props.answer.created\n      })));\n    }\n  }]);\n\n  return AnswerView;\n}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsL0Fuc3dlclZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFNcUJTOzs7Ozs7Ozs7Ozs7O1dBQ2pCLGtCQUFTO01BQ0wsb0JBQ0k7UUFBSyxTQUFTLEVBQUVSLCtEQUFhUztNQUE3QixnQkFDSTtRQUNJLFNBQVMsRUFBRVIscUVBRGY7UUFFSSx1QkFBdUIsRUFBRTtVQUNyQlUsTUFBTSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0gsTUFBWCxDQUFrQkk7UUFETDtNQUY3QixFQURKLGVBT0k7UUFBRyxTQUFTLEVBQUVaLHlFQUFzQmE7TUFBcEMsZ0JBQ0ksMkRBQUMsbURBQUQ7UUFBa0IsRUFBRSxFQUFDO01BQXJCLEVBREosRUFDa0QsR0FEbEQsRUFFSyxLQUFLRixLQUFMLENBQVdILE1BQVgsQ0FBa0JNLElBRnZCLE9BRThCLEdBRjlCLGVBR0ksMkRBQUMsc0RBQUQ7UUFBZSxLQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXSCxNQUFYLENBQWtCTztNQUF4QyxFQUhKLENBUEosQ0FESjtJQWVIOzs7O0VBakJtQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtaW51c2NsaWVudC8uL2FwcC9jb21wb25lbnRzL1RleHREZXRhaWwvQW5zd2VyVmlldy5qcz81Y2Y3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BbnN3ZXJWaWV3LmNzc1wiO1xyXG5pbXBvcnQgY29udHJvbFN0eWxlcyBmcm9tIFwiLi9Bbm5vdGF0aW9uQ29udHJvbHMuY3NzXCI7XHJcbmltcG9ydCBidXR0b25TdHlsZXMgZnJvbSBcIi4vQnV0dG9uLmNzc1wiO1xyXG5pbXBvcnQgQW5ub3RhdGlvbiBmcm9tIFwibGliL0Fubm90YXRpb25cIjtcclxuaW1wb3J0IEFuc3dlciBmcm9tIFwibGliL0Fuc3dlclwiO1xyXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBGb3JtYXR0ZWREYXRlIH0gZnJvbSBcInJlYWN0LWludGxcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBhbnN3ZXI6IEFuc3dlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5zd2VyVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyfT5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb250cm9sU3R5bGVzLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiB0aGlzLnByb3BzLmFuc3dlci5jb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NvbnRyb2xTdHlsZXMuc3ViVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwicXVlc3Rpb24uYW5zd2VyZWRCeVwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFuc3dlci5uYW1lfSx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZERhdGUgdmFsdWU9e3RoaXMucHJvcHMuYW5zd2VyLmNyZWF0ZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY29udHJvbFN0eWxlcyIsImJ1dHRvblN0eWxlcyIsIkFubm90YXRpb24iLCJBbnN3ZXIiLCJGb3JtYXR0ZWRNZXNzYWdlIiwiRm9ybWF0dGVkRGF0ZSIsImNsYXNzbmFtZXMiLCJBbnN3ZXJWaWV3IiwiYW5zd2VyIiwidGV4dCIsIl9faHRtbCIsInByb3BzIiwiY29udGVudCIsInN1YlRpdGxlIiwibmFtZSIsImNyZWF0ZWQiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/TextDetail/AnswerView.js\n");

/***/ }),

/***/ "./app/components/TextDetail/QuestionView.js":
/*!***************************************************!*\
  !*** ./app/components/TextDetail/QuestionView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QuestionView)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _QuestionView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QuestionView.css */ \"./app/components/TextDetail/QuestionView.css\");\n/* harmony import */ var _QuestionView_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_QuestionView_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnnotationControls.css */ \"./app/components/TextDetail/AnnotationControls.css\");\n/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button.css */ \"./app/components/TextDetail/Button.css\");\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/Annotation */ \"./app/lib/Annotation.js\");\n/* harmony import */ var lib_Question__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/Question */ \"./app/lib/Question.js\");\n/* harmony import */ var _AnswerView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AnswerView */ \"./app/components/TextDetail/AnswerView.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/components/message.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app_constants */ \"./app/app_constants/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar QuestionView = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(QuestionView, _React$Component);\n\n  var _super = _createSuper(QuestionView);\n\n  function QuestionView() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, QuestionView);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(QuestionView, [{\n    key: \"render\",\n    value: function render() {\n      var topicUrl = app_constants__WEBPACK_IMPORTED_MODULE_13__.QUESTION_URL + this.props.question.topicId;\n      var answerViews = [];\n      var answers = this.props.question.answers;\n      console.log(answers);\n\n      for (var i = 0; i < answers.length; i++) {\n        var answer = answers[i];\n        answerViews.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_AnswerView__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          answer: answer,\n          key: \"answer_\" + answer.created\n        }));\n      }\n\n      var name = this.props.question.name.length > 0 ? this.props.question.name : this.props.question.username;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()((_QuestionView_css__WEBPACK_IMPORTED_MODULE_6___default().question), (_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7___default().padding)),\n        sx: {\n          boxShadow: 2\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"span\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()((_QuestionView_css__WEBPACK_IMPORTED_MODULE_6___default().threadLink), (_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7___default().text))\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"a\", {\n        href: topicUrl,\n        target: \"_blank\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n        id: \"question.viewThread\"\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"p\", {\n        className: (_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7___default().text),\n        dangerouslySetInnerHTML: {\n          __html: this.props.question.content\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"p\", {\n        className: (_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_7___default().subTitle)\n      }, name, \",\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedDate, {\n        value: this.props.question.created\n      })), answerViews);\n    }\n  }]);\n\n  return QuestionView;\n}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsL1F1ZXN0aW9uVmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQU1xQlk7Ozs7Ozs7Ozs7Ozs7V0FDakIsa0JBQVM7TUFDTCxJQUFNQyxRQUFRLEdBQUdILHdEQUFZLEdBQUcsS0FBS0ksS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxPQUFwRDtNQUNBLElBQUlDLFdBQVcsR0FBRyxFQUFsQjtNQUNBLElBQUlDLE9BQU8sR0FBRyxLQUFLSixLQUFMLENBQVdDLFFBQVgsQ0FBb0JHLE9BQWxDO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaOztNQUNBLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsT0FBTyxDQUFDSSxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztRQUNyQyxJQUFNRSxNQUFNLEdBQUdMLE9BQU8sQ0FBQ0csQ0FBRCxDQUF0QjtRQUNBSixXQUFXLENBQUNPLElBQVosZUFDSSwyREFBQyxvREFBRDtVQUFZLE1BQU0sRUFBRUQsTUFBcEI7VUFBNEIsR0FBRyxFQUFFLFlBQVlBLE1BQU0sQ0FBQ0U7UUFBcEQsRUFESjtNQUdIOztNQUNELElBQU1DLElBQUksR0FDTixLQUFLWixLQUFMLENBQVdDLFFBQVgsQ0FBb0JXLElBQXBCLENBQXlCSixNQUF6QixHQUFrQyxDQUFsQyxHQUNNLEtBQUtSLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQlcsSUFEMUIsR0FFTSxLQUFLWixLQUFMLENBQVdDLFFBQVgsQ0FBb0JZLFFBSDlCO01BS0Esb0JBQ0ksMkRBQUMsc0RBQUQ7UUFDSSxTQUFTLEVBQUVsQixrREFBVSxDQUFDUixtRUFBRCxFQUFrQkMsd0VBQWxCLENBRHpCO1FBRUksRUFBRSxFQUFFO1VBQUUyQixTQUFTLEVBQUU7UUFBYjtNQUZSLGdCQUlJO1FBQ0ksU0FBUyxFQUFFcEIsa0RBQVUsQ0FDakJSLHFFQURpQixFQUVqQkMscUVBRmlCO01BRHpCLGdCQU1JO1FBQUcsSUFBSSxFQUFFVyxRQUFUO1FBQW1CLE1BQU0sRUFBQztNQUExQixnQkFDSSwyREFBQyxtREFBRDtRQUFrQixFQUFFLEVBQUM7TUFBckIsRUFESixDQU5KLENBSkosZUFjSTtRQUNJLFNBQVMsRUFBRVgscUVBRGY7UUFFSSx1QkFBdUIsRUFBRTtVQUNyQjhCLE1BQU0sRUFBRSxLQUFLbEIsS0FBTCxDQUFXQyxRQUFYLENBQW9Ca0I7UUFEUDtNQUY3QixFQWRKLGVBb0JJO1FBQUcsU0FBUyxFQUFFL0IseUVBQXNCZ0M7TUFBcEMsR0FDS1IsSUFETCxPQUNZLEdBRFosZUFFSSwyREFBQyxzREFBRDtRQUFlLEtBQUssRUFBRSxLQUFLWixLQUFMLENBQVdDLFFBQVgsQ0FBb0JVO01BQTFDLEVBRkosQ0FwQkosRUF3QktSLFdBeEJMLENBREo7SUE0Qkg7Ozs7RUE3Q3FDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1pbnVzY2xpZW50Ly4vYXBwL2NvbXBvbmVudHMvVGV4dERldGFpbC9RdWVzdGlvblZpZXcuanM/MzAzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUXVlc3Rpb25WaWV3LmNzc1wiO1xyXG5pbXBvcnQgY29udHJvbFN0eWxlcyBmcm9tIFwiLi9Bbm5vdGF0aW9uQ29udHJvbHMuY3NzXCI7XHJcbmltcG9ydCBidXR0b25TdHlsZXMgZnJvbSBcIi4vQnV0dG9uLmNzc1wiO1xyXG5pbXBvcnQgQW5ub3RhdGlvbiBmcm9tIFwibGliL0Fubm90YXRpb25cIjtcclxuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCJsaWIvUXVlc3Rpb25cIjtcclxuaW1wb3J0IEFuc3dlclZpZXcgZnJvbSBcIi4vQW5zd2VyVmlld1wiO1xyXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBGb3JtYXR0ZWREYXRlIH0gZnJvbSBcInJlYWN0LWludGxcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgUVVFU1RJT05fVVJMIH0gZnJvbSBcImFwcF9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBxdWVzdGlvbjogUXVlc3Rpb24sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvblZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB0b3BpY1VybCA9IFFVRVNUSU9OX1VSTCArIHRoaXMucHJvcHMucXVlc3Rpb24udG9waWNJZDtcclxuICAgICAgICBsZXQgYW5zd2VyVmlld3MgPSBbXTtcclxuICAgICAgICBsZXQgYW5zd2VycyA9IHRoaXMucHJvcHMucXVlc3Rpb24uYW5zd2VycztcclxuICAgICAgICBjb25zb2xlLmxvZyhhbnN3ZXJzKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYW5zd2VyID0gYW5zd2Vyc1tpXTtcclxuICAgICAgICAgICAgYW5zd2VyVmlld3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxBbnN3ZXJWaWV3IGFuc3dlcj17YW5zd2VyfSBrZXk9e1wiYW5zd2VyX1wiICsgYW5zd2VyLmNyZWF0ZWR9IC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5hbWUgPVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1ZXN0aW9uLm5hbWUubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLnF1ZXN0aW9uLm5hbWVcclxuICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5xdWVzdGlvbi51c2VybmFtZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5xdWVzdGlvbiwgY29udHJvbFN0eWxlcy5wYWRkaW5nKX1cclxuICAgICAgICAgICAgICAgIHN4PXt7IGJveFNoYWRvdzogMiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLnRocmVhZExpbmssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xTdHlsZXMudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dG9waWNVcmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInF1ZXN0aW9uLnZpZXdUaHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb250cm9sU3R5bGVzLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiB0aGlzLnByb3BzLnF1ZXN0aW9uLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NvbnRyb2xTdHlsZXMuc3ViVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfSx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZERhdGUgdmFsdWU9e3RoaXMucHJvcHMucXVlc3Rpb24uY3JlYXRlZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHthbnN3ZXJWaWV3c31cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJjb250cm9sU3R5bGVzIiwiYnV0dG9uU3R5bGVzIiwiQW5ub3RhdGlvbiIsIlF1ZXN0aW9uIiwiQW5zd2VyVmlldyIsIkZvcm1hdHRlZE1lc3NhZ2UiLCJGb3JtYXR0ZWREYXRlIiwiY2xhc3NuYW1lcyIsIlFVRVNUSU9OX1VSTCIsIkJveCIsIlF1ZXN0aW9uVmlldyIsInRvcGljVXJsIiwicHJvcHMiLCJxdWVzdGlvbiIsInRvcGljSWQiLCJhbnN3ZXJWaWV3cyIsImFuc3dlcnMiLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsImFuc3dlciIsInB1c2giLCJjcmVhdGVkIiwibmFtZSIsInVzZXJuYW1lIiwicGFkZGluZyIsImJveFNoYWRvdyIsInRocmVhZExpbmsiLCJ0ZXh0IiwiX19odG1sIiwiY29udGVudCIsInN1YlRpdGxlIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/TextDetail/QuestionView.js\n");

/***/ }),

/***/ "./app/components/TextDetail/AnnotationControls.css":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControls.css ***!
  \**********************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"inlineWidth\":\"280px\",\"annotationControls\":\"AnnotationControls---annotationControls\",\"annotationContent\":\"AnnotationControls---annotationContent\",\"subTitle\":\"AnnotationControls---subTitle\",\"title\":\"AnnotationControls---title\",\"sectionHeading\":\"AnnotationControls---sectionHeading\",\"text\":\"AnnotationControls---text\",\"padding\":\"AnnotationControls---padding\",\"arrowTop\":\"AnnotationControls---arrowTop\",\"arrowLeft\":\"AnnotationControls---arrowLeft\",\"arrowRight\":\"AnnotationControls---arrowRight\",\"inline\":\"AnnotationControls---inline\",\"arrow\":\"AnnotationControls---arrow\",\"arrowDs\":\"AnnotationControls---arrowDs\",\"nothingSelected\":\"AnnotationControls---nothingSelected\",\"anonymousMessage\":\"AnnotationControls---anonymousMessage\",\"noNotes\":\"AnnotationControls---noNotes\",\"breakButtons\":\"AnnotationControls---breakButtons\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsL0Fubm90YXRpb25Db250cm9scy5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1pbnVzY2xpZW50Ly4vYXBwL2NvbXBvbmVudHMvVGV4dERldGFpbC9Bbm5vdGF0aW9uQ29udHJvbHMuY3NzPzVlZWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImdyZWVuLXRpbnRcIjpcIiM4OGFmOGVcIixcImJsdWUtdGludFwiOlwiIzAyNDI3OVwiLFwiYWN0aXZlLWJ1dHRvblwiOlwiIzAwNzQ2YlwiLFwibWFpblRpbnRcIjpcIiMwMjQyNzlcIixcImFjdGl2ZUJ1dHRvblwiOlwiIzAwNzQ2YlwiLFwiaW5saW5lV2lkdGhcIjpcIjI4MHB4XCIsXCJhbm5vdGF0aW9uQ29udHJvbHNcIjpcIkFubm90YXRpb25Db250cm9scy0tLWFubm90YXRpb25Db250cm9sc1wiLFwiYW5ub3RhdGlvbkNvbnRlbnRcIjpcIkFubm90YXRpb25Db250cm9scy0tLWFubm90YXRpb25Db250ZW50XCIsXCJzdWJUaXRsZVwiOlwiQW5ub3RhdGlvbkNvbnRyb2xzLS0tc3ViVGl0bGVcIixcInRpdGxlXCI6XCJBbm5vdGF0aW9uQ29udHJvbHMtLS10aXRsZVwiLFwic2VjdGlvbkhlYWRpbmdcIjpcIkFubm90YXRpb25Db250cm9scy0tLXNlY3Rpb25IZWFkaW5nXCIsXCJ0ZXh0XCI6XCJBbm5vdGF0aW9uQ29udHJvbHMtLS10ZXh0XCIsXCJwYWRkaW5nXCI6XCJBbm5vdGF0aW9uQ29udHJvbHMtLS1wYWRkaW5nXCIsXCJhcnJvd1RvcFwiOlwiQW5ub3RhdGlvbkNvbnRyb2xzLS0tYXJyb3dUb3BcIixcImFycm93TGVmdFwiOlwiQW5ub3RhdGlvbkNvbnRyb2xzLS0tYXJyb3dMZWZ0XCIsXCJhcnJvd1JpZ2h0XCI6XCJBbm5vdGF0aW9uQ29udHJvbHMtLS1hcnJvd1JpZ2h0XCIsXCJpbmxpbmVcIjpcIkFubm90YXRpb25Db250cm9scy0tLWlubGluZVwiLFwiYXJyb3dcIjpcIkFubm90YXRpb25Db250cm9scy0tLWFycm93XCIsXCJhcnJvd0RzXCI6XCJBbm5vdGF0aW9uQ29udHJvbHMtLS1hcnJvd0RzXCIsXCJub3RoaW5nU2VsZWN0ZWRcIjpcIkFubm90YXRpb25Db250cm9scy0tLW5vdGhpbmdTZWxlY3RlZFwiLFwiYW5vbnltb3VzTWVzc2FnZVwiOlwiQW5ub3RhdGlvbkNvbnRyb2xzLS0tYW5vbnltb3VzTWVzc2FnZVwiLFwibm9Ob3Rlc1wiOlwiQW5ub3RhdGlvbkNvbnRyb2xzLS0tbm9Ob3Rlc1wiLFwiYnJlYWtCdXR0b25zXCI6XCJBbm5vdGF0aW9uQ29udHJvbHMtLS1icmVha0J1dHRvbnNcIn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/TextDetail/AnnotationControls.css\n");

/***/ }),

/***/ "./app/components/TextDetail/AnswerView.css":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/AnswerView.css ***!
  \**************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"name\":\"AnswerView---name\",\"answer\":\"AnswerView---answer\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsL0Fuc3dlclZpZXcuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtaW51c2NsaWVudC8uL2FwcC9jb21wb25lbnRzL1RleHREZXRhaWwvQW5zd2VyVmlldy5jc3M/NDhkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibmFtZVwiOlwiQW5zd2VyVmlldy0tLW5hbWVcIixcImFuc3dlclwiOlwiQW5zd2VyVmlldy0tLWFuc3dlclwifTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/TextDetail/AnswerView.css\n");

/***/ }),

/***/ "./app/components/TextDetail/Button.css":
/*!**********************************************!*\
  !*** ./app/components/TextDetail/Button.css ***!
  \**********************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"save\":\"Button---save\",\"cancel\":\"Button---cancel\",\"buttonContainer\":\"Button---buttonContainer\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsL0J1dHRvbi5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1pbnVzY2xpZW50Ly4vYXBwL2NvbXBvbmVudHMvVGV4dERldGFpbC9CdXR0b24uY3NzPzQ2YTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImdyZWVuLXRpbnRcIjpcIiM4OGFmOGVcIixcImJsdWUtdGludFwiOlwiIzAyNDI3OVwiLFwiYWN0aXZlLWJ1dHRvblwiOlwiIzAwNzQ2YlwiLFwibWFpblRpbnRcIjpcIiMwMjQyNzlcIixcImFjdGl2ZUJ1dHRvblwiOlwiIzAwNzQ2YlwiLFwic2F2ZVwiOlwiQnV0dG9uLS0tc2F2ZVwiLFwiY2FuY2VsXCI6XCJCdXR0b24tLS1jYW5jZWxcIixcImJ1dHRvbkNvbnRhaW5lclwiOlwiQnV0dG9uLS0tYnV0dG9uQ29udGFpbmVyXCJ9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/TextDetail/Button.css\n");

/***/ }),

/***/ "./app/components/TextDetail/QuestionView.css":
/*!****************************************************!*\
  !*** ./app/components/TextDetail/QuestionView.css ***!
  \****************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"question\":\"QuestionView---question\",\"threadLink\":\"QuestionView---threadLink\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsL1F1ZXN0aW9uVmlldy5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1pbnVzY2xpZW50Ly4vYXBwL2NvbXBvbmVudHMvVGV4dERldGFpbC9RdWVzdGlvblZpZXcuY3NzP2NiMWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInF1ZXN0aW9uXCI6XCJRdWVzdGlvblZpZXctLS1xdWVzdGlvblwiLFwidGhyZWFkTGlua1wiOlwiUXVlc3Rpb25WaWV3LS0tdGhyZWFkTGlua1wifTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/TextDetail/QuestionView.css\n");

/***/ })

}]);