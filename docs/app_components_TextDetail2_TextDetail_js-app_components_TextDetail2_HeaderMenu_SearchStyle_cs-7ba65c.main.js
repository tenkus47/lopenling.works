/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail2_TextDetail_js-app_components_TextDetail2_HeaderMenu_SearchStyle_cs-7ba65c"],{

/***/ "./app/components/TextDetail2/TableOfContent/TableOfContent.js":
/*!*********************************************************************!*\
  !*** ./app/components/TextDetail2/TableOfContent/TableOfContent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/system/esm/colorManipulator.js\");\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Search */ \"./node_modules/@mui/icons-material/Search.js\");\n/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/InputBase */ \"./node_modules/@mui/material/InputBase/InputBase.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/Toolbar.js\");\n\n\n\n\n\n\n\n\nvar Search = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"div\")(function (_ref) {\n  var theme = _ref.theme;\n  return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    position: \"relative\",\n    borderRadius: theme.shape.borderRadius,\n    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.common.white, 0.15),\n    \"&:hover\": {\n      backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.common.white, 0.25)\n    },\n    marginLeft: 0,\n    width: \"100%\"\n  }, theme.breakpoints.up(\"sm\"), {\n    marginLeft: theme.spacing(1),\n    width: \"auto\"\n  });\n});\nvar SearchIconWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"div\")(function (_ref3) {\n  var theme = _ref3.theme;\n  return {\n    padding: theme.spacing(0, 2),\n    height: \"100%\",\n    position: \"absolute\",\n    pointerEvents: \"none\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  };\n});\nvar StyledInputBase = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function (_ref4) {\n  var theme = _ref4.theme;\n  return {\n    color: \"inherit\",\n    \"& .MuiInputBase-input\": (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      padding: theme.spacing(1, 1, 1, 0),\n      // vertical padding + font size from searchIcon\n      paddingLeft: \"calc(1em + \".concat(theme.spacing(4), \")\"),\n      transition: theme.transitions.create(\"width\"),\n      width: \"100%\"\n    }, theme.breakpoints.up(\"sm\"), {\n      width: \"0\",\n      cursor: \"pointer\",\n      \"&:focus\": {\n        width: \"20ch\"\n      }\n    })\n  };\n});\n\nfunction TableOfContent() {\n  var data = [{\n    Id: 1,\n    Title: \"chapter 1\",\n    segment_id: 0\n  }, {\n    Id: 2,\n    Title: \"chapter 2\",\n    segment_id: 400\n  }];\n  var loaded = data.length > 0 ? true : false;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    sx: {\n      bgcolor: \"heading.main\",\n      color: \"text.primary\",\n      width: \"100%\",\n      height: \"100%\",\n      paddingInline: 2\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    sx: {\n      justifyContent: \"space-between\",\n      paddingLeft: \"0 !important\",\n      margin: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    textTransform: \"uppercase\",\n    component: \"h6\"\n  }, \"Table Of Content\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Search, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SearchIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledInputBase, {\n    placeholder: \"Search\\u2026\",\n    inputProps: {\n      \"aria-label\": \"search\"\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, data.map(function (list, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      key: \"TableContent-\" + index,\n      sx: {\n        cursor: \"pointer\",\n        width: \"fit-content\",\n        \"&:hover\": {\n          fontWeight: \"bold\"\n        }\n      }\n    }, list.Title);\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableOfContent);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail2/TableOfContent/TableOfContent.js?");

/***/ }),

/***/ "./app/components/TextDetail2/TextDetail.js":
/*!**************************************************!*\
  !*** ./app/components/TextDetail2/TextDetail.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextDetailHeadingContainer */ \"./app/components/TextDetail2/TextDetailHeadingContainer.js\");\n/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/SplitText */ \"./app/lib/SplitText.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/text_splitters/lengthSplitter */ \"./app/lib/text_splitters/lengthSplitter.js\");\n/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextDetail.css */ \"./app/components/TextDetail2/TextDetail.css\");\n/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TextDetail_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Slide/Slide.js\");\n/* harmony import */ var _TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TableOfContent/TableOfContent */ \"./app/components/TextDetail2/TableOfContent/TableOfContent.js\");\n/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! css/util.css */ \"./app/css/util.css\");\n/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(css_util_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/MediaComponent/Image.css */ \"./app/components/MediaComponent/Image.css\");\n/* harmony import */ var components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _SplitText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SplitText */ \"./app/components/TextDetail2/SplitText.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction TextDetail(props) {\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var text = {\n    name: \"\"\n  };\n\n  if (props.text) {\n    text = props.text;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var element = ref.current;\n    element.addEventListener(\"mouseenter\", mouseEnter);\n    return function () {\n      element.removeEventListener(\"mouseenter\", mouseEnter);\n    };\n  }, []);\n\n  function mouseEnter() {\n    props.changeSelectedWindow(2);\n  }\n\n  var inlineControls = false;\n  var textComponent = null;\n  var splitText = null;\n  var selectedWindow = props.selectedWindow;\n\n  if (!props.annotatedText || !props.text || props.loading) {\n    textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: \"key-\".concat(Math.random())\n    });\n  } else {\n    var limitWidth = false;\n    var splitter;\n\n    if (props.paginated) {\n      splitter = positionSplitter(props.pageBreaks);\n    } else {\n      splitter = (0,lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(800, /^།[\\s]+(?!།[\\s]+)/, 2, 5);\n    }\n\n    var key = 12;\n    splitText = new lib_SplitText__WEBPACK_IMPORTED_MODULE_2__[\"default\"](props.annotatedText, splitter);\n    inlineControls = true;\n    textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SplitText__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      splitText: splitText // annotations={this.props.annotations}\n      // activeAnnotations={this.props.activeAnnotations}\n      // activeAnnotation={this.props.activeAnnotation}\n      ,\n      limitWidth: limitWidth // didSelectSegmentIds={props.didSelectSegmentIds}\n      ,\n      selectedSegmentId: props.selectedSegmentId,\n      annotationPositions: props.annotationPositions,\n      selectedAnnotatedSegments: props === null || props === void 0 ? void 0 : props.selectedAnnotatedSegments // textListVisible={this.props.textListVisible}\n      // showImages={this.props.pageImagesVisible}\n      // imagesBaseUrl={this.props.imagesBaseUrl}\n      ,\n      selectedWitness: props.selectedWitness,\n      key: key // selectedSearchResult={this.props.selectedSearchResult}\n      // searchValue={this.props.searchValue}\n      ,\n      fontSize: props.textFontSize,\n      scrollToId: props.scrollToId,\n      syncIdOnClick: props.syncIdOnClick,\n      textAlignment: props.textAlignment,\n      textAlignmentById: props.textAlignmentById,\n      isPanelLinked: props.isPanelLinked,\n      changeScrollToId: props.changeScrollToId,\n      changeSyncIdOnClick: props.changeSyncIdOnClick,\n      selectedWindow: selectedWindow,\n      selectedSourceRange: props.selectedSourceRange,\n      selectedTargetRange: props.selectedTargetRange,\n      changeSelectedRange: props.changeSelectedRange,\n      searchResults: props.searchResults,\n      searchValue: props.searchValue,\n      selectedText: props.text,\n      syncIdOnSearch: props.syncIdOnSearch\n    });\n  }\n\n  var textComponents = [textComponent];\n  var thirdWindowHeight = (components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_9___default().ThirdWindowHeight);\n  var bodyHeight = \"calc(100% - \" + thirdWindowHeight + \")\"; // let condition = props.isPanelVisible;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    ref: ref,\n    className: (_TextDetail_css__WEBPACK_IMPORTED_MODULE_5___default().textDetail2),\n    sx: {\n      height: \"100%\",\n      flex: 1,\n      bgcolor: \"navbar.main\",\n      color: \"texts.main\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_loader__WEBPACK_IMPORTED_MODULE_3___default()), {\n    loaded: !props.loading\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    style: {\n      display: \"flex\",\n      height: \"100%\",\n      width: \"100%\",\n      position: \"relative\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    style: {\n      flex: 1\n    },\n    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_TextDetail_css__WEBPACK_IMPORTED_MODULE_5___default().textContainer2), (css_util_css__WEBPACK_IMPORTED_MODULE_7___default().flex))\n  }, !props.loading ? textComponents : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    direction: \"left\",\n    \"in\": props.showTableContent,\n    container: ref.current,\n    unmountOnExit: true,\n    mountOnEnter: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    sx: {\n      position: \"absolute\",\n      height: \"100%\",\n      minWidth: \"50%\",\n      right: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextDetail);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail2/TextDetail.js?");

/***/ }),

/***/ "./app/components/TextDetail2/TextDetailHeadingContainer.js":
/*!******************************************************************!*\
  !*** ./app/components/TextDetail2/TextDetailHeadingContainer.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _TextDetailHeading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextDetailHeading */ \"./app/components/TextDetail2/TextDetailHeading.js\");\n/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ \"./app/actions/index.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var user = reducers__WEBPACK_IMPORTED_MODULE_5__.getUser(state);\n  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_5__.getSelectedText2(state);\n  var witnesses = [];\n  var exportingWitness = false;\n  var selectedWitness;\n\n  if (selectedText) {\n    witnesses = reducers__WEBPACK_IMPORTED_MODULE_5__.getTextWitnesses2(state, selectedText.id);\n    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_5__.getSelectedTextWitnessId2(state, selectedText.id);\n\n    if (selectedWitnessId) {\n      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_5__.getWitness2(state, selectedWitnessId); // exportingWitness = reducers.getExportingWitness(\n      //     state,\n      //     selectedWitnessId\n      // );\n    } else {\n      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_5__.getWorkingWitness2(state, selectedText.id);\n    }\n  }\n\n  var textFontSize = reducers__WEBPACK_IMPORTED_MODULE_5__.getTextFontSize2(state);\n  var showTableContent = (0,reducers__WEBPACK_IMPORTED_MODULE_5__.getShowTableContent2)(state);\n  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_5__.getSearchValue2(state);\n  return {\n    witnesses: witnesses,\n    selectedText: selectedText,\n    selectedWitness: selectedWitness,\n    textListIsVisible: (0,reducers__WEBPACK_IMPORTED_MODULE_5__.getTextListVisible)(state),\n    accountOverlayVisible: (0,reducers__WEBPACK_IMPORTED_MODULE_5__.getAccountOverlayVisible)(state),\n    textFontSize: textFontSize,\n    user: user,\n    searchValue: searchValue,\n    showTableContent: showTableContent,\n    searchResults: reducers__WEBPACK_IMPORTED_MODULE_5__.getSearchResults2(state, searchValue)\n  };\n};\n\nvar mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {\n  var navigationButtonClicked = function navigationButtonClicked() {\n    dispatchProps.dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedTextListVisible(!stateProps.textListIsVisible));\n  };\n\n  var dispatch = dispatchProps.dispatch;\n  var selectedText = stateProps.selectedText;\n  return _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), {}, {\n    navigationButtonClicked: navigationButtonClicked,\n    onSelectedWitness: function onSelectedWitness(witness) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.selectedTextWitness2(selectedText === null || selectedText === void 0 ? void 0 : selectedText.id, witness === null || witness === void 0 ? void 0 : witness.id));\n    },\n    onChangedFontSize: function onChangedFontSize(fontSize) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedTextFontSize2(fontSize));\n    },\n    changeShowTableContent: function changeShowTableContent(payload) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.showTableContent2(payload));\n    },\n    searchChanged: function searchChanged(searchTerm) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedSearchValue2(searchTerm));\n    },\n    changeSelectSyncId: function changeSelectSyncId(payload) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changeSyncIdOnSearch2(payload));\n    }\n  });\n};\n\nvar TextDetailHeadingContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, null, mergeProps)(_TextDetailHeading__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextDetailHeadingContainer);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail2/TextDetailHeadingContainer.js?");

/***/ }),

/***/ "./app/components/MediaComponent/Image.css":
/*!*************************************************!*\
  !*** ./app/components/MediaComponent/Image.css ***!
  \*************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"ThirdWindow-Height\":\"300px\",\"header-Height\":\"35px\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"ThirdWindowHeight\":\"250px\",\"ThirdWindow\":\"Image---ThirdWindow\",\"ThirdWindowPortrait\":\"Image---ThirdWindowPortrait\",\"header\":\"Image---header\",\"listOfImages\":\"Image---listOfImages\",\"ImageStyle\":\"Image---ImageStyle\",\"imageSection\":\"Image---imageSection\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/MediaComponent/Image.css?");

/***/ }),

/***/ "./app/components/TextDetail2/TextDetail.css":
/*!***************************************************!*\
  !*** ./app/components/TextDetail2/TextDetail.css ***!
  \***************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"textDetail2\":\"TextDetail---textDetail2\",\"textContainer2\":\"TextDetail---textContainer2\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail2/TextDetail.css?");

/***/ })

}]);