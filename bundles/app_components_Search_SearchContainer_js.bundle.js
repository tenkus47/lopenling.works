/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("// import React, { useRef, useState } from \"react\";\n// import styles from \"./Search.css\";\n// // import Magnifier from \"images/magnifier.svg\";\n// import classnames from \"classnames\";\n// import { injectIntl } from \"react-intl\";\n// import * as reduxroute from \"redux-first-router\";\n// // import useLocalStorage from \"../../bodyComponent/utility/useLocalStorage\";\n// function Search(props) {\n//     const input = useRef(\"\");\n//     const [search, setSearch] = useState(props.searchValue);\n//     const [inputEmpty, setInputEmpty] = useState(\"\");\n//     const history = reduxroute.history();\n//     const handleSubmit = (e) => {\n//         e.preventDefault();\n//         props.changeSearchTerm(input.current.value);\n//         props.searchChanged(input.current.value);\n//         input.current.value = props.searchValue;\n//     };\n//     const handleReset = (e) => {\n//         input.current.value = \"\";\n//         setInputEmpty(\"\");\n//         setSearch(\"\");\n//     };\n//     let classes = [styles.resetButton];\n//     if (inputEmpty !== \"\") {\n//         classes.push(styles.active);\n//     }\n//     return (\n//         <div className={styles.searchContainer}>\n//             <form className={styles.Search} onSubmit={handleSubmit}>\n//                 <button className={styles.submit} type=\"submit\">\n//                     {/* <Magnifier />*/}\n//                     search\n//                 </button>\n//                 <input\n//                     type=\"text\"\n//                     ref={input}\n//                     value={search}\n//                     onChange={(e) => {\n//                         setInputEmpty(e.target.value);\n//                         setSearch(e.target.value);\n//                         props.searchChanged(e.target.value);\n//                     }}\n//                     placeholder={props.intl.formatMessage({\n//                         id: \"leftbar.search\",\n//                     })}\n//                 />\n//                 <button\n//                     type=\"reset\"\n//                     className={classnames(classes)}\n//                     onClick={handleReset}\n//                 >\n//                     x\n//                 </button>\n//             </form>\n//         </div>\n//     );\n// }\n// export default injectIntl(Search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoLmpzLmpzIiwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtaW51c2NsaWVudC8uL2FwcC9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2guanM/NjZkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NlYXJjaC5jc3NcIjtcclxuLy8gLy8gaW1wb3J0IE1hZ25pZmllciBmcm9tIFwiaW1hZ2VzL21hZ25pZmllci5zdmdcIjtcclxuLy8gaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gaW1wb3J0IHsgaW5qZWN0SW50bCB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XHJcbi8vIGltcG9ydCAqIGFzIHJlZHV4cm91dGUgZnJvbSBcInJlZHV4LWZpcnN0LXJvdXRlclwiO1xyXG4vLyAvLyBpbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gXCIuLi8uLi9ib2R5Q29tcG9uZW50L3V0aWxpdHkvdXNlTG9jYWxTdG9yYWdlXCI7XHJcbi8vIGZ1bmN0aW9uIFNlYXJjaChwcm9wcykge1xyXG4vLyAgICAgY29uc3QgaW5wdXQgPSB1c2VSZWYoXCJcIik7XHJcbi8vICAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUocHJvcHMuc2VhcmNoVmFsdWUpO1xyXG4vLyAgICAgY29uc3QgW2lucHV0RW1wdHksIHNldElucHV0RW1wdHldID0gdXNlU3RhdGUoXCJcIik7XHJcbi8vICAgICBjb25zdCBoaXN0b3J5ID0gcmVkdXhyb3V0ZS5oaXN0b3J5KCk7XHJcbi8vICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICBwcm9wcy5jaGFuZ2VTZWFyY2hUZXJtKGlucHV0LmN1cnJlbnQudmFsdWUpO1xyXG4vLyAgICAgICAgIHByb3BzLnNlYXJjaENoYW5nZWQoaW5wdXQuY3VycmVudC52YWx1ZSk7XHJcblxyXG4vLyAgICAgICAgIGlucHV0LmN1cnJlbnQudmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZTtcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zdCBoYW5kbGVSZXNldCA9IChlKSA9PiB7XHJcbi8vICAgICAgICAgaW5wdXQuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbi8vICAgICAgICAgc2V0SW5wdXRFbXB0eShcIlwiKTtcclxuLy8gICAgICAgICBzZXRTZWFyY2goXCJcIik7XHJcbi8vICAgICB9O1xyXG4vLyAgICAgbGV0IGNsYXNzZXMgPSBbc3R5bGVzLnJlc2V0QnV0dG9uXTtcclxuLy8gICAgIGlmIChpbnB1dEVtcHR5ICE9PSBcIlwiKSB7XHJcbi8vICAgICAgICAgY2xhc3Nlcy5wdXNoKHN0eWxlcy5hY3RpdmUpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hDb250YWluZXJ9PlxyXG4vLyAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5TZWFyY2h9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9IHR5cGU9XCJzdWJtaXRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7LyogPE1hZ25pZmllciAvPiovfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFxyXG4vLyAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dH1cclxuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dEVtcHR5KGUudGFyZ2V0LnZhbHVlKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VhcmNoQ2hhbmdlZChlLnRhcmdldC52YWx1ZSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibGVmdGJhci5zZWFyY2hcIixcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZXNldFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMpfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxyXG4vLyAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHhcclxuLy8gICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICA8L2Zvcm0+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKFNlYXJjaCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSJ9\n//# sourceURL=webpack-internal:///./app/components/Search/Search.js\n");

/***/ }),

/***/ "./app/components/Search/SearchContainer.js":
/*!**************************************************!*\
  !*** ./app/components/Search/SearchContainer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search */ \"./app/components/Search/Search.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Search__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ \"./app/actions/index.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n/* harmony import */ var redux_first_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-first-router */ \"./node_modules/redux-first-router/dist/es/index.js\");\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var searchTerm = reducers__WEBPACK_IMPORTED_MODULE_4__.getSearchValue(state);\n  return {\n    searchTerm: searchTerm,\n    searchValue: state.ui.searchValue\n  };\n};\n\nvar mapDisptchToProps = function mapDisptchToProps(dispatch) {\n  return {\n    changeSearchTerm: function changeSearchTerm(searchTerm) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.changedSearchTerm(searchTerm));\n    },\n    searchChanged: function searchChanged(searchTerm) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.changedSearchValue(searchTerm));\n    }\n  };\n};\n\nvar searchContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDisptchToProps)((_Search__WEBPACK_IMPORTED_MODULE_2___default()));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoQ29udGFpbmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBeUI7RUFDN0MsSUFBTUMsVUFBVSxHQUFHSixvREFBQSxDQUF3QkcsS0FBeEIsQ0FBbkI7RUFFQSxPQUFPO0lBQ0hDLFVBQVUsRUFBRUEsVUFEVDtJQUVIRSxXQUFXLEVBQUVILEtBQUssQ0FBQ0ksRUFBTixDQUFTRDtFQUZuQixDQUFQO0FBSUgsQ0FQRDs7QUFTQSxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLFFBQUQsRUFBYztFQUNwQyxPQUFPO0lBQ0hDLGdCQUFnQixFQUFFLDBCQUFDTixVQUFELEVBQWdCO01BQzlCSyxRQUFRLENBQUNWLHNEQUFBLENBQTBCSyxVQUExQixDQUFELENBQVI7SUFDSCxDQUhFO0lBSUhRLGFBQWEsRUFBRSx1QkFBQ1IsVUFBRCxFQUF3QjtNQUNuQ0ssUUFBUSxDQUFDVix1REFBQSxDQUEyQkssVUFBM0IsQ0FBRCxDQUFSO0lBQ0g7RUFORSxDQUFQO0FBUUgsQ0FURDs7QUFXQSxJQUFNVSxlQUFlLEdBQUdqQixvREFBTyxDQUFDSyxlQUFELEVBQWtCTSxpQkFBbEIsQ0FBUCxDQUE0Q1YsZ0RBQTVDLENBQXhCO0FBRUEsaUVBQWVnQixlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtaW51c2NsaWVudC8uL2FwcC9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2hDb250YWluZXIuanM/OGQwYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9TZWFyY2hcIjtcclxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gXCIuL1RleHRIZWFkaW5nXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcImFjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgcmVkdWNlcnMgZnJvbSBcInJlZHVjZXJzXCI7XHJcbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVkdXgtZmlyc3Qtcm91dGVyXCI7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcFN0YXRlKToge30gPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IHJlZHVjZXJzLmdldFNlYXJjaFZhbHVlKHN0YXRlKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlYXJjaFRlcm06IHNlYXJjaFRlcm0sXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6IHN0YXRlLnVpLnNlYXJjaFZhbHVlLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3B0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoYW5nZVNlYXJjaFRlcm06IChzZWFyY2hUZXJtKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMuY2hhbmdlZFNlYXJjaFRlcm0oc2VhcmNoVGVybSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoQ2hhbmdlZDogKHNlYXJjaFRlcm06IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLmNoYW5nZWRTZWFyY2hWYWx1ZShzZWFyY2hUZXJtKSk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBzZWFyY2hDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcHRjaFRvUHJvcHMpKFNlYXJjaCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJTZWFyY2giLCJhY3Rpb25zIiwicmVkdWNlcnMiLCJyZWRpcmVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic2VhcmNoVGVybSIsImdldFNlYXJjaFZhbHVlIiwic2VhcmNoVmFsdWUiLCJ1aSIsIm1hcERpc3B0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjaGFuZ2VTZWFyY2hUZXJtIiwiY2hhbmdlZFNlYXJjaFRlcm0iLCJzZWFyY2hDaGFuZ2VkIiwiY2hhbmdlZFNlYXJjaFZhbHVlIiwic2VhcmNoQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/Search/SearchContainer.js\n");

/***/ })

}]);