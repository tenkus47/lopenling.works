/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail_ImageToggle_js"],{

/***/ "./app/components/TextDetail/ImageToggle.js":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/ImageToggle.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageToggle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageToggle.css */ \"./app/components/TextDetail/ImageToggle.css\");\n/* harmony import */ var _ImageToggle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageToggle_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar ImageToggle = function ImageToggle(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_ImageToggle_css__WEBPACK_IMPORTED_MODULE_1___default().imageToggle)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"showPageImages\"\n  }, \"Show Images\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"showPageImages\",\n    type: \"checkbox\",\n    checked: props.showImages,\n    onChange: function onChange(e) {\n      var target = event.target;\n      var checked = target.checked;\n      props.onChange(checked);\n    }\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageToggle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsL0ltYWdlVG9nZ2xlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFPQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0VBQUEsb0JBQ2hCO0lBQUssU0FBUyxFQUFFRixxRUFBa0JHO0VBQWxDLGdCQUNJO0lBQU8sT0FBTyxFQUFDO0VBQWYsaUJBREosZUFFSTtJQUNJLEVBQUUsRUFBQyxnQkFEUDtJQUVJLElBQUksRUFBQyxVQUZUO0lBR0ksT0FBTyxFQUFFRCxLQUFLLENBQUNFLFVBSG5CO0lBSUksUUFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQWM7TUFDcEIsSUFBTUMsTUFBTSxHQUFHQyxLQUFLLENBQUNELE1BQXJCO01BQ0EsSUFBTUUsT0FBTyxHQUFHRixNQUFNLENBQUNFLE9BQXZCO01BQ0FOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxPQUFmO0lBQ0g7RUFSTCxFQUZKLENBRGdCO0FBQUEsQ0FBcEI7O0FBZ0JBLGlFQUFlUCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtaW51c2NsaWVudC8uL2FwcC9jb21wb25lbnRzL1RleHREZXRhaWwvSW1hZ2VUb2dnbGUuanM/NmQ0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSW1hZ2VUb2dnbGUuY3NzXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgc2hvd0ltYWdlczogYm9vbGVhbixcclxuICAgIG9uQ2hhbmdlOiAoKSA9PiB2b2lkXHJcbn07XHJcblxyXG5jb25zdCBJbWFnZVRvZ2dsZSA9IChwcm9wczogUHJvcHMpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VUb2dnbGV9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2hvd1BhZ2VJbWFnZXNcIj5TaG93IEltYWdlczwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwic2hvd1BhZ2VJbWFnZXNcIlxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXtwcm9wcy5zaG93SW1hZ2VzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShjaGVja2VkKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiSW1hZ2VUb2dnbGUiLCJwcm9wcyIsImltYWdlVG9nZ2xlIiwic2hvd0ltYWdlcyIsImUiLCJ0YXJnZXQiLCJldmVudCIsImNoZWNrZWQiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/TextDetail/ImageToggle.js\n");

/***/ }),

/***/ "./app/components/TextDetail/ImageToggle.css":
/*!***************************************************!*\
  !*** ./app/components/TextDetail/ImageToggle.css ***!
  \***************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"imageToggle\":\"ImageToggle---imageToggle\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsL0ltYWdlVG9nZ2xlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbWludXNjbGllbnQvLi9hcHAvY29tcG9uZW50cy9UZXh0RGV0YWlsL0ltYWdlVG9nZ2xlLmNzcz8xNmJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJpbWFnZVRvZ2dsZVwiOlwiSW1hZ2VUb2dnbGUtLS1pbWFnZVRvZ2dsZVwifTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/TextDetail/ImageToggle.css\n");

/***/ })

}]);