/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail2_SelectVersion_js"],{

/***/ "./node_modules/@mui/material/NativeSelect/NativeSelect.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/material/NativeSelect/NativeSelect.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ \"./node_modules/@mui/utils/esm/composeClasses/composeClasses.js\");\n/* harmony import */ var _NativeSelectInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NativeSelectInput */ \"./node_modules/@mui/material/NativeSelect/NativeSelectInput.js\");\n/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormControl/formControlState */ \"./node_modules/@mui/material/FormControl/formControlState.js\");\n/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FormControl/useFormControl */ \"./node_modules/@mui/material/FormControl/useFormControl.js\");\n/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ \"./node_modules/@mui/material/internal/svg-icons/ArrowDropDown.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Input */ \"./node_modules/@mui/material/Input/Input.js\");\n/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ \"./node_modules/@mui/material/styles/useThemeProps.js\");\n/* harmony import */ var _nativeSelectClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nativeSelectClasses */ \"./node_modules/@mui/material/NativeSelect/nativeSelectClasses.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\nconst _excluded = [\"className\", \"children\", \"classes\", \"IconComponent\", \"input\", \"inputProps\", \"variant\"],\n      _excluded2 = [\"root\"];\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useUtilityClasses = ownerState => {\n  const {\n    classes\n  } = ownerState;\n  const slots = {\n    root: ['root']\n  };\n  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slots, _nativeSelectClasses__WEBPACK_IMPORTED_MODULE_6__.getNativeSelectUtilityClasses, classes);\n};\n\nconst defaultInput = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {});\n/**\n * An alternative to `<Select native />` with a much smaller bundle size footprint.\n */\n\n\nconst NativeSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function NativeSelect(inProps, ref) {\n  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n    name: 'MuiNativeSelect',\n    props: inProps\n  });\n\n  const {\n    className,\n    children,\n    classes: classesProp = {},\n    IconComponent = _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    input = defaultInput,\n    inputProps\n  } = props,\n        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, _excluded);\n\n  const muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n  const fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({\n    props,\n    muiFormControl,\n    states: ['variant']\n  });\n\n  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    classes: classesProp\n  });\n\n  const classes = useUtilityClasses(ownerState);\n\n  const otherClasses = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(classesProp, _excluded2);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(input, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    // Most of the logic is implemented in `NativeSelectInput`.\n    // The `Select` component is a simple API wrapper to expose something better to play with.\n    inputComponent: _NativeSelectInput__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    inputProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      children,\n      classes: otherClasses,\n      IconComponent,\n      variant: fcs.variant,\n      type: undefined\n    }, inputProps, input ? input.props.inputProps : {}),\n    ref\n  }, other, {\n    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.root, input.props.className, className)\n  }));\n});\n true ? NativeSelect.propTypes\n/* remove-proptypes */\n= {\n  // ----------------------------- Warning --------------------------------\n  // | These PropTypes are generated from the TypeScript type definitions |\n  // |     To update them edit the d.ts file and run \"yarn proptypes\"     |\n  // ----------------------------------------------------------------------\n\n  /**\n   * The option elements to populate the select with.\n   * Can be some `<option>` elements.\n   */\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().node),\n\n  /**\n   * Override or extend the styles applied to the component.\n   * @default {}\n   */\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object),\n\n  /**\n   * @ignore\n   */\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),\n\n  /**\n   * The icon that displays the arrow.\n   * @default ArrowDropDownIcon\n   */\n  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().elementType),\n\n  /**\n   * An `Input` element; does not have to be a material-ui specific `Input`.\n   * @default <Input />\n   */\n  input: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().element),\n\n  /**\n   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes) applied to the `select` element.\n   */\n  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object),\n\n  /**\n   * Callback fired when a menu item is selected.\n   *\n   * @param {React.ChangeEvent<HTMLSelectElement>} event The event source of the callback.\n   * You can pull out the new value by accessing `event.target.value` (string).\n   */\n  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),\n\n  /**\n   * The system prop that allows defining system overrides as well as additional CSS styles.\n   */\n  sx: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_13___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_13___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object)]),\n\n  /**\n   * The `input` value. The DOM API casts this to a string.\n   */\n  value: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().any),\n\n  /**\n   * The variant to use.\n   */\n  variant: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['filled', 'outlined', 'standard'])\n} : 0;\nNativeSelect.muiName = 'Select';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NativeSelect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9OYXRpdmVTZWxlY3QvTmF0aXZlU2VsZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQzBDO0FBQ3BHO0FBQ0E7QUFDK0I7QUFDUDtBQUNXO0FBQ21DO0FBQ2xCO0FBQ1c7QUFDSjtBQUNTO0FBQ3ZDO0FBQ3VCO0FBQ2tCO0FBQ3RCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxREFBYyxRQUFRLCtFQUE2QjtBQUM1RDs7QUFFQSxrQ0FBa0Msc0RBQUksQ0FBQyw4Q0FBSyxJQUFJO0FBQ2hEO0FBQ0E7QUFDQTs7O0FBR0Esa0NBQWtDLDZDQUFnQjtBQUNsRCxnQkFBZ0IsaUVBQWE7QUFDN0I7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLG9CQUFvQix5RUFBaUI7QUFDckM7QUFDQTtBQUNBLElBQUk7QUFDSixnQkFBZ0IsbUdBQTZCOztBQUU3Qyx5QkFBeUIsd0VBQWM7QUFDdkMsY0FBYywwRUFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxxQkFBcUIsOEVBQVEsR0FBRztBQUNoQztBQUNBLEdBQUc7O0FBRUg7O0FBRUEsdUJBQXVCLG1HQUE2Qjs7QUFFcEQsc0JBQXNCLCtDQUFrQixRQUFRLDhFQUFRO0FBQ3hEO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQWlCO0FBQ3JDLGdCQUFnQiw4RUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxpREFBaUQ7QUFDdEQ7QUFDQSxHQUFHO0FBQ0gsZUFBZSxnREFBSTtBQUNuQixHQUFHO0FBQ0gsQ0FBQztBQUNELEtBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQWM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywyREFBZ0I7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkRBQWdCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnRUFBcUI7O0FBRXRDO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxTQUFTLDREQUFpQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsY0FBYywyREFBZ0I7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0NBQXNDO0FBQ25EO0FBQ0E7QUFDQSxZQUFZLHlEQUFjOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxNQUFNLDREQUFtQixFQUFFLDBEQUFpQixDQUFDLDREQUFtQixFQUFFLHlEQUFjLEVBQUUsMkRBQWdCLEVBQUUseURBQWMsS0FBSyx5REFBYyxFQUFFLDJEQUFnQjs7QUFFdko7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3REFBYTs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3REFBZTtBQUMxQixFQUFFLEVBQUUsQ0FBTTtBQUNWO0FBQ0EsaUVBQWUsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbWludXNjbGllbnQvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9OYXRpdmVTZWxlY3QvTmF0aXZlU2VsZWN0LmpzP2Q0MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmNvbnN0IF9leGNsdWRlZCA9IFtcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcIkljb25Db21wb25lbnRcIiwgXCJpbnB1dFwiLCBcImlucHV0UHJvcHNcIiwgXCJ2YXJpYW50XCJdLFxuICAgICAgX2V4Y2x1ZGVkMiA9IFtcInJvb3RcIl07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1bnN0YWJsZV9jb21wb3NlQ2xhc3NlcyBhcyBjb21wb3NlQ2xhc3NlcyB9IGZyb20gJ0BtdWkvYmFzZSc7XG5pbXBvcnQgTmF0aXZlU2VsZWN0SW5wdXQgZnJvbSAnLi9OYXRpdmVTZWxlY3RJbnB1dCc7XG5pbXBvcnQgZm9ybUNvbnRyb2xTdGF0ZSBmcm9tICcuLi9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlJztcbmltcG9ydCB1c2VGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbCc7XG5pbXBvcnQgQXJyb3dEcm9wRG93bkljb24gZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0Fycm93RHJvcERvd24nO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL0lucHV0JztcbmltcG9ydCB1c2VUaGVtZVByb3BzIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZVByb3BzJztcbmltcG9ydCB7IGdldE5hdGl2ZVNlbGVjdFV0aWxpdHlDbGFzc2VzIH0gZnJvbSAnLi9uYXRpdmVTZWxlY3RDbGFzc2VzJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5cbmNvbnN0IHVzZVV0aWxpdHlDbGFzc2VzID0gb3duZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc2VzXG4gIH0gPSBvd25lclN0YXRlO1xuICBjb25zdCBzbG90cyA9IHtcbiAgICByb290OiBbJ3Jvb3QnXVxuICB9O1xuICByZXR1cm4gY29tcG9zZUNsYXNzZXMoc2xvdHMsIGdldE5hdGl2ZVNlbGVjdFV0aWxpdHlDbGFzc2VzLCBjbGFzc2VzKTtcbn07XG5cbmNvbnN0IGRlZmF1bHRJbnB1dCA9IC8qI19fUFVSRV9fKi9fanN4KElucHV0LCB7fSk7XG4vKipcbiAqIEFuIGFsdGVybmF0aXZlIHRvIGA8U2VsZWN0IG5hdGl2ZSAvPmAgd2l0aCBhIG11Y2ggc21hbGxlciBidW5kbGUgc2l6ZSBmb290cHJpbnQuXG4gKi9cblxuXG5jb25zdCBOYXRpdmVTZWxlY3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXRpdmVTZWxlY3QoaW5Qcm9wcywgcmVmKSB7XG4gIGNvbnN0IHByb3BzID0gdXNlVGhlbWVQcm9wcyh7XG4gICAgbmFtZTogJ011aU5hdGl2ZVNlbGVjdCcsXG4gICAgcHJvcHM6IGluUHJvcHNcbiAgfSk7XG5cbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc2VzOiBjbGFzc2VzUHJvcCA9IHt9LFxuICAgIEljb25Db21wb25lbnQgPSBBcnJvd0Ryb3BEb3duSWNvbixcbiAgICBpbnB1dCA9IGRlZmF1bHRJbnB1dCxcbiAgICBpbnB1dFByb3BzXG4gIH0gPSBwcm9wcyxcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICBjb25zdCBtdWlGb3JtQ29udHJvbCA9IHVzZUZvcm1Db250cm9sKCk7XG4gIGNvbnN0IGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzLFxuICAgIG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWyd2YXJpYW50J11cbiAgfSk7XG5cbiAgY29uc3Qgb3duZXJTdGF0ZSA9IF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGNsYXNzZXM6IGNsYXNzZXNQcm9wXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VVdGlsaXR5Q2xhc3Nlcyhvd25lclN0YXRlKTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShjbGFzc2VzUHJvcCwgX2V4Y2x1ZGVkMik7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoaW5wdXQsIF9leHRlbmRzKHtcbiAgICAvLyBNb3N0IG9mIHRoZSBsb2dpYyBpcyBpbXBsZW1lbnRlZCBpbiBgTmF0aXZlU2VsZWN0SW5wdXRgLlxuICAgIC8vIFRoZSBgU2VsZWN0YCBjb21wb25lbnQgaXMgYSBzaW1wbGUgQVBJIHdyYXBwZXIgdG8gZXhwb3NlIHNvbWV0aGluZyBiZXR0ZXIgdG8gcGxheSB3aXRoLlxuICAgIGlucHV0Q29tcG9uZW50OiBOYXRpdmVTZWxlY3RJbnB1dCxcbiAgICBpbnB1dFByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzZXM6IG90aGVyQ2xhc3NlcyxcbiAgICAgIEljb25Db21wb25lbnQsXG4gICAgICB2YXJpYW50OiBmY3MudmFyaWFudCxcbiAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgIH0sIGlucHV0UHJvcHMsIGlucHV0ID8gaW5wdXQucHJvcHMuaW5wdXRQcm9wcyA6IHt9KSxcbiAgICByZWZcbiAgfSwgb3RoZXIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBpbnB1dC5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSlcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBOYXRpdmVTZWxlY3QucHJvcFR5cGVzXG4vKiByZW1vdmUtcHJvcHR5cGVzICovXG49IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb24gZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCB3aXRoLlxuICAgKiBDYW4gYmUgc29tZSBgPG9wdGlvbj5gIGVsZW1lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIEBkZWZhdWx0IHt9XG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRoYXQgZGlzcGxheXMgdGhlIGFycm93LlxuICAgKiBAZGVmYXVsdCBBcnJvd0Ryb3BEb3duSWNvblxuICAgKi9cbiAgSWNvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBBbiBgSW5wdXRgIGVsZW1lbnQ7IGRvZXMgbm90IGhhdmUgdG8gYmUgYSBtYXRlcmlhbC11aSBzcGVjaWZpYyBgSW5wdXRgLlxuICAgKiBAZGVmYXVsdCA8SW5wdXQgLz5cbiAgICovXG4gIGlucHV0OiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9zZWxlY3QjYXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYHNlbGVjdGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHN5c3RlbSBwcm9wIHRoYXQgYWxsb3dzIGRlZmluaW5nIHN5c3RlbSBvdmVycmlkZXMgYXMgd2VsbCBhcyBhZGRpdGlvbmFsIENTUyBzdHlsZXMuXG4gICAqL1xuICBzeDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5ib29sXSkpLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pLFxuXG4gIC8qKlxuICAgKiBUaGUgYGlucHV0YCB2YWx1ZS4gVGhlIERPTSBBUEkgY2FzdHMgdGhpcyB0byBhIHN0cmluZy5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydmaWxsZWQnLCAnb3V0bGluZWQnLCAnc3RhbmRhcmQnXSlcbn0gOiB2b2lkIDA7XG5OYXRpdmVTZWxlY3QubXVpTmFtZSA9ICdTZWxlY3QnO1xuZXhwb3J0IGRlZmF1bHQgTmF0aXZlU2VsZWN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@mui/material/NativeSelect/NativeSelect.js\n");

/***/ }),

/***/ "./app/components/TextDetail2/SelectVersion.js":
/*!*****************************************************!*\
  !*** ./app/components/TextDetail2/SelectVersion.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/components/injectIntl.js\");\n/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectVersion.css */ \"./app/components/TextDetail2/SelectVersion.css\");\n/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/Witness */ \"./app/lib/Witness.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/NativeSelect/NativeSelect.js\");\n\n\n\n\n\n\n\nvar SelectVersion = function SelectVersion(props) {\n  var witnesses = [];\n  var tabName = \"\";\n  var r = \"\";\n  var classes = [];\n\n  if (props.witnesses) {\n    witnesses = props.witnesses.map(function (witness) {\n      return witness;\n    });\n    if (props.activeWitness) r = props.witnesses.findIndex(function (l) {\n      return l.id === props.activeWitness.id;\n    });\n    witnesses.sort(function (a, b) {\n      if (a.isWorking) {\n        return -1;\n      }\n\n      if (b.isWorking) {\n        return 1;\n      }\n\n      if (a.isBase) {\n        return -1;\n      }\n\n      if (b.isBase) {\n        return 1;\n      }\n\n      return 0;\n    });\n    witnesses = witnesses.sort(function (a, b) {\n      return a.id - b.id;\n    });\n  }\n\n  var handleChangeWitness = function handleChangeWitness(e) {\n    if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(witnesses)) {\n      props.onSelectedWitness(witnesses[e.target.value]);\n    }\n  };\n\n  if (lodash__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(witnesses) && !props.activeWitness) return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onChange: handleChangeWitness,\n    className: (_SelectVersion_css__WEBPACK_IMPORTED_MODULE_2___default().selectVersion),\n    value: r,\n    label: \"Version2\",\n    classes: {\n      root: (_SelectVersion_css__WEBPACK_IMPORTED_MODULE_2___default().selectEmpty),\n      select: (_SelectVersion_css__WEBPACK_IMPORTED_MODULE_2___default().selectOptions)\n    }\n  }, witnesses.map(function (witness, key) {\n    var _props$activeWitness;\n\n    if (witness.id === ((_props$activeWitness = props.activeWitness) === null || _props$activeWitness === void 0 ? void 0 : _props$activeWitness.id)) classes.push((_SelectVersion_css__WEBPACK_IMPORTED_MODULE_2___default().selected));\n    tabName = witness.source.name;\n\n    if (witness.isWorking) {\n      tabName = props.intl.locale === \"en\" ? props.user.name === \"User\" ? \"Working\" : \"My Edition\" : \"མཉམ་འབྲེལ་པར་མ།\";\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      key: \"versionSelect2-\".concat(key),\n      value: key,\n      className: (_SelectVersion_css__WEBPACK_IMPORTED_MODULE_2___default().selectOptions)\n    }, tabName);\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react_intl__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(SelectVersion)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsMi9TZWxlY3RWZXJzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTVcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQWtCO0VBQ3BDLElBQUlDLFNBQVMsR0FBRyxFQUFoQjtFQUNBLElBQUlDLE9BQU8sR0FBRyxFQUFkO0VBQ0EsSUFBSUMsQ0FBQyxHQUFHLEVBQVI7RUFDQSxJQUFJQyxPQUFPLEdBQUcsRUFBZDs7RUFDQSxJQUFJSixLQUFLLENBQUNDLFNBQVYsRUFBcUI7SUFDakJBLFNBQVMsR0FBR0QsS0FBSyxDQUFDQyxTQUFOLENBQWdCSSxHQUFoQixDQUFvQixVQUFDQyxPQUFEO01BQUEsT0FBYUEsT0FBYjtJQUFBLENBQXBCLENBQVo7SUFDQSxJQUFJTixLQUFLLENBQUNPLGFBQVYsRUFDSUosQ0FBQyxHQUFHSCxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JPLFNBQWhCLENBQ0EsVUFBQ0MsQ0FBRDtNQUFBLE9BQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTVixLQUFLLENBQUNPLGFBQU4sQ0FBb0JHLEVBQXBDO0lBQUEsQ0FEQSxDQUFKO0lBR0pULFNBQVMsQ0FBQ1UsSUFBVixDQUFlLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO01BQ3JCLElBQUlELENBQUMsQ0FBQ0UsU0FBTixFQUFpQjtRQUNiLE9BQU8sQ0FBQyxDQUFSO01BQ0g7O01BQ0QsSUFBSUQsQ0FBQyxDQUFDQyxTQUFOLEVBQWlCO1FBQ2IsT0FBTyxDQUFQO01BQ0g7O01BQ0QsSUFBSUYsQ0FBQyxDQUFDRyxNQUFOLEVBQWM7UUFDVixPQUFPLENBQUMsQ0FBUjtNQUNIOztNQUNELElBQUlGLENBQUMsQ0FBQ0UsTUFBTixFQUFjO1FBQ1YsT0FBTyxDQUFQO01BQ0g7O01BQ0QsT0FBTyxDQUFQO0lBQ0gsQ0FkRDtJQWVBZCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ1UsSUFBVixDQUFlLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtNQUFBLE9BQVVELENBQUMsQ0FBQ0YsRUFBRixHQUFPRyxDQUFDLENBQUNILEVBQW5CO0lBQUEsQ0FBZixDQUFaO0VBQ0g7O0VBRUQsSUFBTU0sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxDQUFELEVBQU87SUFDL0IsSUFBSSxDQUFDeEIscURBQUEsQ0FBVVEsU0FBVixDQUFMLEVBQTJCO01BQ3ZCRCxLQUFLLENBQUNtQixpQkFBTixDQUF3QmxCLFNBQVMsQ0FBQ2dCLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQWpDO0lBQ0g7RUFDSixDQUpEOztFQU1BLElBQUk1QixxREFBQSxDQUFVUSxTQUFWLEtBQXdCLENBQUNELEtBQUssQ0FBQ08sYUFBbkMsRUFBa0QsT0FBTyxJQUFQO0VBRWxELG9CQUNJLDJEQUFDLHFEQUFEO0lBQ0ksUUFBUSxFQUFFUyxtQkFEZDtJQUVJLFNBQVMsRUFBRXBCLHlFQUZmO0lBR0ksS0FBSyxFQUFFTyxDQUhYO0lBSUksS0FBSyxFQUFDLFVBSlY7SUFLSSxPQUFPLEVBQUU7TUFDTG9CLElBQUksRUFBRTNCLHVFQUREO01BRUw2QixNQUFNLEVBQUU3Qix5RUFBb0I4QjtJQUZ2QjtFQUxiLEdBVUt6QixTQUFTLENBQUNJLEdBQVYsQ0FBYyxVQUFDQyxPQUFELEVBQVVxQixHQUFWLEVBQWtCO0lBQUE7O0lBQzdCLElBQUlyQixPQUFPLENBQUNJLEVBQVIsOEJBQWVWLEtBQUssQ0FBQ08sYUFBckIseURBQWUscUJBQXFCRyxFQUFwQyxDQUFKLEVBQ0lOLE9BQU8sQ0FBQ3dCLElBQVIsQ0FBYWhDLG9FQUFiO0lBQ0pNLE9BQU8sR0FBR0ksT0FBTyxDQUFDd0IsTUFBUixDQUFlQyxJQUF6Qjs7SUFFQSxJQUFJekIsT0FBTyxDQUFDUSxTQUFaLEVBQXVCO01BQ25CWixPQUFPLEdBQ0hGLEtBQUssQ0FBQ2dDLElBQU4sQ0FBV0MsTUFBWCxLQUFzQixJQUF0QixHQUNNakMsS0FBSyxDQUFDa0MsSUFBTixDQUFXSCxJQUFYLEtBQW9CLE1BQXBCLEdBQ0ksU0FESixHQUVJLFlBSFYsR0FJTSxpQkFMVjtJQU1IOztJQUVELG9CQUNJO01BQ0ksR0FBRywyQkFBb0JKLEdBQXBCLENBRFA7TUFFSSxLQUFLLEVBQUVBLEdBRlg7TUFHSSxTQUFTLEVBQUUvQix5RUFBb0I4QjtJQUhuQyxHQUtLeEIsT0FMTCxDQURKO0VBU0gsQ0F2QkEsQ0FWTCxDQURKO0FBcUNILENBMUVEOztBQTRFQSw4RUFBZVgsMkNBQUksQ0FBQ0ksc0RBQVUsQ0FBQ0ksYUFBRCxDQUFYLENBQW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtaW51c2NsaWVudC8uL2FwcC9jb21wb25lbnRzL1RleHREZXRhaWwyL1NlbGVjdFZlcnNpb24uanM/MjFlYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgbWVtbywgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bCB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VsZWN0VmVyc2lvbi5jc3NcIjtcclxuaW1wb3J0IFdpdG5lc3MgZnJvbSBcImxpYi9XaXRuZXNzXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNlbGVjdCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcblxyXG5leHBvcnQgdHlwZSBQcm9wcyA9IHtcclxuICAgIHdpdG5lc3NlczogV2l0bmVzc1tdLFxyXG4gICAgYWN0aXZlV2l0bmVzczogV2l0bmVzcyB8IG51bGwsXHJcbiAgICBvblNlbGVjdGVkV2l0bmVzczogKHdpdG5lc3M6IFdpdG5lc3MpID0+IHZvaWQsXHJcbiAgICB1c2VyOiB7fSxcclxufTtcclxuXHJcbmNvbnN0IFNlbGVjdFZlcnNpb24gPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgICBsZXQgd2l0bmVzc2VzID0gW107XHJcbiAgICBsZXQgdGFiTmFtZSA9IFwiXCI7XHJcbiAgICBsZXQgciA9IFwiXCI7XHJcbiAgICBsZXQgY2xhc3NlcyA9IFtdO1xyXG4gICAgaWYgKHByb3BzLndpdG5lc3Nlcykge1xyXG4gICAgICAgIHdpdG5lc3NlcyA9IHByb3BzLndpdG5lc3Nlcy5tYXAoKHdpdG5lc3MpID0+IHdpdG5lc3MpO1xyXG4gICAgICAgIGlmIChwcm9wcy5hY3RpdmVXaXRuZXNzKVxyXG4gICAgICAgICAgICByID0gcHJvcHMud2l0bmVzc2VzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgIChsKSA9PiBsLmlkID09PSBwcm9wcy5hY3RpdmVXaXRuZXNzLmlkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgd2l0bmVzc2VzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGEuaXNXb3JraW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGIuaXNXb3JraW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYS5pc0Jhc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYi5pc0Jhc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpdG5lc3NlcyA9IHdpdG5lc3Nlcy5zb3J0KChhLCBiKSA9PiBhLmlkIC0gYi5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlV2l0bmVzcyA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFfLmlzRW1wdHkod2l0bmVzc2VzKSkge1xyXG4gICAgICAgICAgICBwcm9wcy5vblNlbGVjdGVkV2l0bmVzcyh3aXRuZXNzZXNbZS50YXJnZXQudmFsdWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfLmlzRW1wdHkod2l0bmVzc2VzKSAmJiAhcHJvcHMuYWN0aXZlV2l0bmVzcykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF0aXZlU2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VXaXRuZXNzfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RWZXJzaW9ufVxyXG4gICAgICAgICAgICB2YWx1ZT17cn1cclxuICAgICAgICAgICAgbGFiZWw9XCJWZXJzaW9uMlwiXHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgIHJvb3Q6IHN0eWxlcy5zZWxlY3RFbXB0eSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdDogc3R5bGVzLnNlbGVjdE9wdGlvbnMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7d2l0bmVzc2VzLm1hcCgod2l0bmVzcywga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2l0bmVzcy5pZCA9PT0gcHJvcHMuYWN0aXZlV2l0bmVzcz8uaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHN0eWxlcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgICAgICB0YWJOYW1lID0gd2l0bmVzcy5zb3VyY2UubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2l0bmVzcy5pc1dvcmtpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJOYW1lID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW50bC5sb2NhbGUgPT09IFwiZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wcy51c2VyLm5hbWUgPT09IFwiVXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIldvcmtpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJNeSBFZGl0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLgvZjgvYngvZjgvIvgvaDgvZbgvrLgvbrgvaPgvIvgvZTgvaLgvIvgvZjgvI1cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgdmVyc2lvblNlbGVjdDItJHtrZXl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0T3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9OYXRpdmVTZWxlY3Q+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhpbmplY3RJbnRsKFNlbGVjdFZlcnNpb24pKTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtZW1vIiwidXNlTGF5b3V0RWZmZWN0IiwiXyIsIkZvcm1hdHRlZE1lc3NhZ2UiLCJpbmplY3RJbnRsIiwic3R5bGVzIiwiV2l0bmVzcyIsIk5hdGl2ZVNlbGVjdCIsIlNlbGVjdFZlcnNpb24iLCJwcm9wcyIsIndpdG5lc3NlcyIsInRhYk5hbWUiLCJyIiwiY2xhc3NlcyIsIm1hcCIsIndpdG5lc3MiLCJhY3RpdmVXaXRuZXNzIiwiZmluZEluZGV4IiwibCIsImlkIiwic29ydCIsImEiLCJiIiwiaXNXb3JraW5nIiwiaXNCYXNlIiwiaGFuZGxlQ2hhbmdlV2l0bmVzcyIsImUiLCJpc0VtcHR5Iiwib25TZWxlY3RlZFdpdG5lc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbGVjdFZlcnNpb24iLCJyb290Iiwic2VsZWN0RW1wdHkiLCJzZWxlY3QiLCJzZWxlY3RPcHRpb25zIiwia2V5IiwicHVzaCIsInNlbGVjdGVkIiwic291cmNlIiwibmFtZSIsImludGwiLCJsb2NhbGUiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/TextDetail2/SelectVersion.js\n");

/***/ }),

/***/ "./app/components/TextDetail2/SelectVersion.css":
/*!******************************************************!*\
  !*** ./app/components/TextDetail2/SelectVersion.css ***!
  \******************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"selectVersion\":\"SelectVersion---selectVersion\",\"selectEmpty\":\"SelectVersion---selectEmpty\",\"selectOptions\":\"SelectVersion---selectOptions\",\"styled-select\":\"SelectVersion---styled-select\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsMi9TZWxlY3RWZXJzaW9uLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbWludXNjbGllbnQvLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsMi9TZWxlY3RWZXJzaW9uLmNzcz9mZTkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJncmVlbi10aW50XCI6XCIjODhhZjhlXCIsXCJibHVlLXRpbnRcIjpcIiMwMjQyNzlcIixcImFjdGl2ZS1idXR0b25cIjpcIiMwMDc0NmJcIixcIm1haW5UaW50XCI6XCIjMDI0Mjc5XCIsXCJhY3RpdmVCdXR0b25cIjpcIiMwMDc0NmJcIixcInNlbGVjdFZlcnNpb25cIjpcIlNlbGVjdFZlcnNpb24tLS1zZWxlY3RWZXJzaW9uXCIsXCJzZWxlY3RFbXB0eVwiOlwiU2VsZWN0VmVyc2lvbi0tLXNlbGVjdEVtcHR5XCIsXCJzZWxlY3RPcHRpb25zXCI6XCJTZWxlY3RWZXJzaW9uLS0tc2VsZWN0T3B0aW9uc1wiLFwic3R5bGVkLXNlbGVjdFwiOlwiU2VsZWN0VmVyc2lvbi0tLXN0eWxlZC1zZWxlY3RcIn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/TextDetail2/SelectVersion.css\n");

/***/ })

}]);