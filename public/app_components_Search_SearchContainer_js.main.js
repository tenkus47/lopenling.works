/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_Search_SearchContainer_js"],{

/***/ "./app/components/Search/Search.js":
/*!*****************************************!*\
  !*** ./app/components/Search/Search.js ***!
  \*****************************************/
/***/ (() => {

eval("// import React, { useRef, useState } from \"react\";\n// import styles from \"./Search.css\";\n// // import Magnifier from \"images/magnifier.svg\";\n// import classnames from \"classnames\";\n// import { injectIntl } from \"react-intl\";\n// import * as reduxroute from \"redux-first-router\";\n// // import useLocalStorage from \"../../bodyComponent/utility/useLocalStorage\";\n// function Search(props) {\n//     const input = useRef(\"\");\n//     const [search, setSearch] = useState(props.searchValue);\n//     const [inputEmpty, setInputEmpty] = useState(\"\");\n//     const history = reduxroute.history();\n//     const handleSubmit = (e) => {\n//         e.preventDefault();\n//         props.changeSearchTerm(input.current.value);\n//         props.searchChanged(input.current.value);\n//         input.current.value = props.searchValue;\n//     };\n//     const handleReset = (e) => {\n//         input.current.value = \"\";\n//         setInputEmpty(\"\");\n//         setSearch(\"\");\n//     };\n//     let classes = [styles.resetButton];\n//     if (inputEmpty !== \"\") {\n//         classes.push(styles.active);\n//     }\n//     return (\n//         <div className={styles.searchContainer}>\n//             <form className={styles.Search} onSubmit={handleSubmit}>\n//                 <button className={styles.submit} type=\"submit\">\n//                     {/* <Magnifier />*/}\n//                     search\n//                 </button>\n//                 <input\n//                     type=\"text\"\n//                     ref={input}\n//                     value={search}\n//                     onChange={(e) => {\n//                         setInputEmpty(e.target.value);\n//                         setSearch(e.target.value);\n//                         props.searchChanged(e.target.value);\n//                     }}\n//                     placeholder={props.intl.formatMessage({\n//                         id: \"leftbar.search\",\n//                     })}\n//                 />\n//                 <button\n//                     type=\"reset\"\n//                     className={classnames(classes)}\n//                     onClick={handleReset}\n//                 >\n//                     x\n//                 </button>\n//             </form>\n//         </div>\n//     );\n// }\n// export default injectIntl(Search);\n\n//# sourceURL=webpack://teminusclient/./app/components/Search/Search.js?");

/***/ }),

/***/ "./app/components/Search/SearchContainer.js":
/*!**************************************************!*\
  !*** ./app/components/Search/SearchContainer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search */ \"./app/components/Search/Search.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Search__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ \"./app/actions/index.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n/* harmony import */ var redux_first_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-first-router */ \"./node_modules/redux-first-router/dist/es/index.js\");\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var searchTerm = reducers__WEBPACK_IMPORTED_MODULE_4__.getSearchValue(state);\n  return {\n    searchTerm: searchTerm,\n    searchValue: state.ui.searchValue\n  };\n};\n\nvar mapDisptchToProps = function mapDisptchToProps(dispatch) {\n  return {\n    changeSearchTerm: function changeSearchTerm(searchTerm) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.changedSearchTerm(searchTerm));\n    },\n    searchChanged: function searchChanged(searchTerm) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.changedSearchValue(searchTerm));\n    }\n  };\n};\n\nvar searchContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDisptchToProps)((_Search__WEBPACK_IMPORTED_MODULE_2___default()));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchContainer);\n\n//# sourceURL=webpack://teminusclient/./app/components/Search/SearchContainer.js?");

/***/ })

}]);