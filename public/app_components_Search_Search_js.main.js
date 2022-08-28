/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_Search_Search_js"],{

/***/ "./app/components/Search/Search.js":
/*!*****************************************!*\
  !*** ./app/components/Search/Search.js ***!
  \*****************************************/
/***/ (() => {

eval("// import React, { useRef, useState } from \"react\";\n// import styles from \"./Search.css\";\n// // import Magnifier from \"images/magnifier.svg\";\n// import classnames from \"classnames\";\n// import { injectIntl } from \"react-intl\";\n// import * as reduxroute from \"redux-first-router\";\n// // import useLocalStorage from \"../../bodyComponent/utility/useLocalStorage\";\n// function Search(props) {\n//     const input = useRef(\"\");\n//     const [search, setSearch] = useState(props.searchValue);\n//     const [inputEmpty, setInputEmpty] = useState(\"\");\n//     const history = reduxroute.history();\n//     const handleSubmit = (e) => {\n//         e.preventDefault();\n//         props.changeSearchTerm(input.current.value);\n//         props.searchChanged(input.current.value);\n//         input.current.value = props.searchValue;\n//     };\n//     const handleReset = (e) => {\n//         input.current.value = \"\";\n//         setInputEmpty(\"\");\n//         setSearch(\"\");\n//     };\n//     let classes = [styles.resetButton];\n//     if (inputEmpty !== \"\") {\n//         classes.push(styles.active);\n//     }\n//     return (\n//         <div className={styles.searchContainer}>\n//             <form className={styles.Search} onSubmit={handleSubmit}>\n//                 <button className={styles.submit} type=\"submit\">\n//                     {/* <Magnifier />*/}\n//                     search\n//                 </button>\n//                 <input\n//                     type=\"text\"\n//                     ref={input}\n//                     value={search}\n//                     onChange={(e) => {\n//                         setInputEmpty(e.target.value);\n//                         setSearch(e.target.value);\n//                         props.searchChanged(e.target.value);\n//                     }}\n//                     placeholder={props.intl.formatMessage({\n//                         id: \"leftbar.search\",\n//                     })}\n//                 />\n//                 <button\n//                     type=\"reset\"\n//                     className={classnames(classes)}\n//                     onClick={handleReset}\n//                 >\n//                     x\n//                 </button>\n//             </form>\n//         </div>\n//     );\n// }\n// export default injectIntl(Search);\n\n//# sourceURL=webpack://teminusclient/./app/components/Search/Search.js?");

/***/ })

}]);