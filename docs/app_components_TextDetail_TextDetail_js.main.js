/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail_TextDetail_js"],{

/***/ "./app/components/TextDetail/TableOfContent/TableOfContent.js":
/*!********************************************************************!*\
  !*** ./app/components/TextDetail/TableOfContent/TableOfContent.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TableOfContent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableOfContent.css */ \"./app/components/TextDetail/TableOfContent/TableOfContent.css\");\n/* harmony import */ var _TableOfContent_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TableOfContent_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/system/esm/colorManipulator.js\");\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Search */ \"./node_modules/@mui/icons-material/Search.js\");\n/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/InputBase */ \"./node_modules/@mui/material/InputBase/InputBase.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/Toolbar.js\");\n\n\n\n\n\n\n\n\n\nvar Search = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\")(function (_ref) {\n  var theme = _ref.theme;\n  return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    position: \"relative\",\n    borderRadius: theme.shape.borderRadius,\n    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.common.white, 0.15),\n    \"&:hover\": {\n      backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.common.white, 0.25)\n    },\n    marginLeft: 0,\n    width: \"100%\"\n  }, theme.breakpoints.up(\"sm\"), {\n    marginLeft: theme.spacing(1),\n    width: \"auto\"\n  });\n});\nvar SearchIconWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\")(function (_ref3) {\n  var theme = _ref3.theme;\n  return {\n    padding: theme.spacing(0, 2),\n    height: \"100%\",\n    position: \"absolute\",\n    pointerEvents: \"none\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  };\n});\nvar StyledInputBase = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function (_ref4) {\n  var theme = _ref4.theme;\n  return {\n    color: \"inherit\",\n    \"& .MuiInputBase-input\": (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      padding: theme.spacing(1, 1, 1, 0),\n      // vertical padding + font size from searchIcon\n      paddingLeft: \"calc(1em + \".concat(theme.spacing(4), \")\"),\n      transition: theme.transitions.create(\"width\"),\n      width: \"100%\"\n    }, theme.breakpoints.up(\"sm\"), {\n      width: \"0\",\n      cursor: \"pointer\",\n      \"&:focus\": {\n        width: \"20ch\"\n      }\n    })\n  };\n});\n\nfunction TableOfContent() {\n  var data = [{\n    Id: 1,\n    Title: \"chapter 1\",\n    segment_id: 0\n  }, {\n    Id: 2,\n    Title: \"chapter 2\",\n    segment_id: 400\n  }];\n  var loaded = data.length > 0 ? true : false;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: (_TableOfContent_css__WEBPACK_IMPORTED_MODULE_3___default().TableContent),\n    sx: {\n      bgcolor: \"heading.main\",\n      color: \"text.primary\",\n      width: \"100%\",\n      height: \"100%\",\n      paddingInline: 2\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    sx: {\n      justifyContent: \"space-between\",\n      paddingLeft: \"0 !important\",\n      margin: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    textTransform: \"uppercase\",\n    component: \"h6\"\n  }, \"Table Of Content\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Search, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SearchIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledInputBase, {\n    placeholder: \"Search\\u2026\",\n    inputProps: {\n      \"aria-label\": \"search\"\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, data.map(function (list, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: \"TableContent-\" + index,\n      sx: {\n        cursor: \"pointer\",\n        width: \"fit-content\",\n        \"&:hover\": {\n          fontWeight: \"bold\"\n        }\n      }\n    }, list.Title);\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(TableOfContent));\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/TableOfContent/TableOfContent.js?");

/***/ }),

/***/ "./app/components/TextDetail/TextDetail.js":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/TextDetail.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/MediaComponent/Image.css */ \"./app/components/MediaComponent/Image.css\");\n/* harmony import */ var components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnnotationControlsContainer */ \"./app/components/TextDetail/AnnotationControlsContainer.js\");\n/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/SplitText */ \"./app/lib/SplitText.js\");\n/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/Annotation */ \"./app/lib/Annotation.js\");\n/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/Witness */ \"./app/lib/Witness.js\");\n/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/AnnotatedText */ \"./app/lib/AnnotatedText.js\");\n/* harmony import */ var lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/text_splitters/lengthSplitter */ \"./app/lib/text_splitters/lengthSplitter.js\");\n/* harmony import */ var lib_text_splitters_positionSplitter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lib/text_splitters/positionSplitter */ \"./app/lib/text_splitters/positionSplitter.js\");\n/* harmony import */ var components_Header_Header_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Header/Header.css */ \"./app/components/Header/Header.css\");\n/* harmony import */ var components_Header_Header_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(components_Header_Header_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TextDetail.css */ \"./app/components/TextDetail/TextDetail.css\");\n/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_TextDetail_css__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! css/util.css */ \"./app/css/util.css\");\n/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(css_util_css__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lib/TextSegment */ \"./app/lib/TextSegment.js\");\n/* harmony import */ var _TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./TextDetailHeadingContainer */ \"./app/components/TextDetail/TextDetailHeadingContainer.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Slide/Slide.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./TableOfContent/TableOfContent */ \"./app/components/TextDetail/TableOfContent/TableOfContent.js\");\n/* harmony import */ var components_TextDetail_SplitText__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! components/TextDetail/SplitText */ \"./app/components/TextDetail/SplitText.js\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar textDetailId = 0;\n\nvar TextDetail = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TextDetail, _React$Component);\n\n  var _super = _createSuper(TextDetail);\n\n  function TextDetail() {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TextDetail);\n\n    _this = _super.call(this);\n    _this.key = textDetailId++;\n    _this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createRef();\n    _this.selectedWindow = null;\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TextDetail, [{\n    key: \"mouseEnter\",\n    value: function mouseEnter() {\n      if (this.selectedWindow === 2) this.props.changeSelectedWindow(1);\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.ref.current.addEventListener(\"mouseenter\", this.mouseEnter.bind(this));\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      this.selectedWindow = this.props.selectedWindow;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var text = {\n        name: \"\"\n      };\n\n      if (this.props.text) {\n        text = this.props.text;\n      }\n\n      var inlineControls = false;\n      var textComponent = null;\n      var splitText = null;\n\n      if (!this.props.annotatedText || !this.props.text || this.props.loading) {\n        textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", {\n          key: this.key\n        });\n      } else {\n        var limitWidth = false;\n        var splitter;\n\n        if (this.props.paginated) {\n          splitter = (0,lib_text_splitters_positionSplitter__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(this.props.pageBreaks);\n        } else {\n          splitter = (0,lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(1000, /^།[\\s]+(?!།[\\s]+)/, 2, 5);\n        }\n\n        splitText = new lib_SplitText__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this.props.annotatedText, splitter);\n        inlineControls = true;\n        textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(components_TextDetail_SplitText__WEBPACK_IMPORTED_MODULE_23__[\"default\"], {\n          splitText: splitText,\n          annotations: this.props.annotations,\n          activeAnnotations: this.props.activeAnnotations,\n          activeAnnotation: this.props.activeAnnotation,\n          limitWidth: limitWidth,\n          didSelectSegmentIds: this.props.didSelectSegmentIds,\n          selectedSegmentId: this.props.selectedSegmentId,\n          annotationPositions: this.props.annotationPositions,\n          selectedAnnotatedSegments: this.props.selectedAnnotatedSegments,\n          syncIdOnClick: this.props.syncIdOnClick,\n          textListVisible: this.props.textListVisible,\n          showImages: this.props.pageImagesVisible // showImages={this.props.selectedMedia.isImageVisible}\n          ,\n          imagesBaseUrl: this.props.imagesBaseUrl,\n          selectedWitness: this.props.selectedWitness,\n          selectedWitness2: this.props.selectedWitness2,\n          key: this.key,\n          selectedSearchResult: this.props.selectedSearchResult,\n          searchValue: this.props.searchValue,\n          fontSize: this.props.fontSize,\n          isSecondWindowOpen: this.props.isSecondWindowOpen,\n          changeScrollToId: this.props.changeScrollToId,\n          changeSyncIdOnClick: this.props.changeSyncIdOnClick,\n          imageData: this.props.imageData,\n          isPanelLinked: this.props.isPanelLinked,\n          selectedImage: this.props.selectedImage,\n          changeSelectedImage: this.props.changeSelectedImage,\n          isAnnotating: this.props.isAnnotating,\n          closeAnnotation: this.props.closeAnnotation,\n          textAlignment: this.props.textAlignment,\n          textAlignmentById: this.props.textAlignmentById,\n          isPanelVisible: this.props.isPanelVisible,\n          scrollToId: this.props.scrollToId,\n          selectedWindow: this.selectedWindow,\n          selectedSourceRange: this.props.selectedSourceRange,\n          selectedTargetRange: this.props.selectedTargetRange,\n          changeSelectedRange: this.props.changeSelectedRange,\n          searchResults: this.props.searchResults,\n          showTableContent: this.props.showTableContent,\n          selectedText: this.props.text,\n          syncIdOnSearch: this.props.syncIdOnSearch,\n          imageAlignmentById: this.props.imageAlignmentById,\n          changeImageScrollId: this.props.changeImageScrollId,\n          imageScrollId: this.props.imageScrollId,\n          condition: this.props.condition\n        });\n      }\n\n      var textComponents = [textComponent];\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__[\"default\"], {\n        sx: {\n          height: \"100%\",\n          flex: 1,\n          bgcolor: \"navbar.main\",\n          color: \"texts.main\"\n        },\n        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_TextDetail_css__WEBPACK_IMPORTED_MODULE_17___default().textDetail), (css_util_css__WEBPACK_IMPORTED_MODULE_18___default().flex), (css_util_css__WEBPACK_IMPORTED_MODULE_18___default().flexColumn)),\n        key: this.key,\n        ref: this.ref\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_20__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react_loader__WEBPACK_IMPORTED_MODULE_8___default()), {\n        loaded: !this.props.loading,\n        zIndex: 5\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__[\"default\"], {\n        style: {\n          display: \"flex\",\n          height: \"100%\",\n          width: \"100%\",\n          position: \"relative\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__[\"default\"], {\n        style: {\n          flex: 1\n        },\n        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_TextDetail_css__WEBPACK_IMPORTED_MODULE_17___default().textContainer), (css_util_css__WEBPACK_IMPORTED_MODULE_18___default().flex))\n      }, !this.props.loading ? textComponents : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"div\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__[\"default\"], {\n        direction: \"left\",\n        \"in\": this.props.showTableContent,\n        container: this.ref.current,\n        unmountOnExit: true,\n        mountOnEnter: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__[\"default\"], {\n        sx: {\n          position: \"absolute\",\n          height: \"100%\",\n          minWidth: \"50%\",\n          right: 0\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_22__[\"default\"], null)))));\n    }\n  }]);\n\n  return TextDetail;\n}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextDetail);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/TextDetail.js?");

/***/ }),

/***/ "./app/components/TextDetail/TextDetailHeadingContainer.js":
/*!*****************************************************************!*\
  !*** ./app/components/TextDetail/TextDetailHeadingContainer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _TextDetailHeading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextDetailHeading */ \"./app/components/TextDetail/TextDetailHeading.js\");\n/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ \"./app/actions/index.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_5__.getSelectedText(state);\n  var selectedText2 = reducers__WEBPACK_IMPORTED_MODULE_5__.getSelectedText2(state);\n  var witnesses = [];\n  var exportingWitness = false;\n  var selectedWitness;\n  var selectedWitness2;\n\n  if (selectedText) {\n    witnesses = reducers__WEBPACK_IMPORTED_MODULE_5__.getTextWitnesses(state, selectedText.id);\n    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_5__.getSelectedTextWitnessId(state, selectedText.id);\n\n    if (selectedWitnessId) {\n      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_5__.getWitness(state, selectedWitnessId);\n      exportingWitness = reducers__WEBPACK_IMPORTED_MODULE_5__.getExportingWitness(state, selectedWitnessId);\n    } else {\n      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_5__.getWorkingWitness(state, selectedText.id);\n    }\n  }\n\n  if (selectedText2) {\n    // witnesses = reducers.getTextWitnesses(state, selectedText2.id);\n    var selectedWitnessId2 = reducers__WEBPACK_IMPORTED_MODULE_5__.getSelectedTextWitnessId2(state, selectedText2.id);\n\n    if (selectedWitnessId2) {\n      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_5__.getWitness2(state, selectedWitnessId2);\n    } else {\n      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_5__.getWorkingWitness2(state, selectedText2.id);\n    }\n  }\n\n  var textFontSize = reducers__WEBPACK_IMPORTED_MODULE_5__.getTextFontSize(state);\n  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_5__.getSearchValue(state);\n  return {\n    witnesses: witnesses,\n    selectedText: selectedText,\n    selectedText2: selectedText2,\n    selectedWitness: selectedWitness,\n    selectedWitness2: selectedWitness2,\n    textFontSize: textFontSize,\n    exportingWitness: exportingWitness,\n    searchValue: searchValue,\n    showTableContent: reducers__WEBPACK_IMPORTED_MODULE_5__.getShowTableContent(state),\n    searchResults: reducers__WEBPACK_IMPORTED_MODULE_5__.getSearchResults(state, searchValue)\n  };\n};\n\nvar mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {\n  var _objectSpread2;\n\n  var navigationButtonClicked = function navigationButtonClicked() {\n    dispatchProps.dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedTextListVisible(!stateProps.textListIsVisible));\n  };\n\n  var dispatch = dispatchProps.dispatch;\n  var selectedText = stateProps.selectedText;\n  return _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), {}, (_objectSpread2 = {\n    navigationButtonClicked: navigationButtonClicked,\n    onSelectedWitness: function onSelectedWitness(witness) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.selectedTextWitness(selectedText === null || selectedText === void 0 ? void 0 : selectedText.id, witness === null || witness === void 0 ? void 0 : witness.id));\n    },\n    onChangedFontSize: function onChangedFontSize(fontSize) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedTextFontSize(fontSize));\n    },\n    onChangeWindowOpen: function onChangeWindowOpen(data, textId) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.toggleSecondWindow(data, textId));\n    },\n    onExport: function onExport() {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.exportWitness(stateProps.selectedWitness.id, \"docx\"));\n    }\n  }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, \"navigationButtonClicked\", function navigationButtonClicked() {\n    dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedTextListVisible(!stateProps.textListIsVisible));\n  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, \"changeIsAnnotating\", function changeIsAnnotating(payload) {\n    dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changeIsAnnotating(payload));\n\n    if (payload === false) {\n      var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_4__.changedActiveTextAnnotation(null);\n      dispatch(dismissTextAnnotation);\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedActiveTextAnnotation(null));\n    }\n  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, \"searchChanged\", function searchChanged(searchTerm) {\n    dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedSearchValue(searchTerm));\n  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, \"changeShowTableContent\", function changeShowTableContent(payload) {\n    dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.showTableContent(payload));\n  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, \"changeSelectSyncId\", function changeSelectSyncId(payload) {\n    dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changeSyncIdOnSearch(payload));\n  }), _objectSpread2));\n};\n\nvar TextDetailHeadingContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, null, mergeProps)(_TextDetailHeading__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextDetailHeadingContainer);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/TextDetailHeadingContainer.js?");

/***/ }),

/***/ "./app/lib/text_splitters/positionSplitter.js":
/*!****************************************************!*\
  !*** ./app/lib/text_splitters/positionSplitter.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ positionSplitter)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\n\n/**\r\n * Returns a function that accepts a string but simply\r\n * returns the initial array of positions passed to it.\r\n *\r\n * @param positions - The positions where a string should be split\r\n */\nfunction positionSplitter(positions) {\n  var newPositions = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(positions);\n\n  if (newPositions[0] === 0) {\n    newPositions.shift();\n  }\n\n  return function (string) {\n    return newPositions;\n  };\n}\n\n//# sourceURL=webpack://teminusclient/./app/lib/text_splitters/positionSplitter.js?");

/***/ }),

/***/ "./app/components/TextDetail/TableOfContent/TableOfContent.css":
/*!*********************************************************************!*\
  !*** ./app/components/TextDetail/TableOfContent/TableOfContent.css ***!
  \*********************************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"TableContent\":\"TableOfContent---TableContent\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/TableOfContent/TableOfContent.css?");

/***/ }),

/***/ "./app/components/TextDetail/TextDetail.css":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/TextDetail.css ***!
  \**************************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"textDetail\":\"TextDetail---textDetail\",\"textContainer\":\"TextDetail---textContainer\",\"tableContent\":\"TextDetail---tableContent\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail/TextDetail.css?");

/***/ })

}]);