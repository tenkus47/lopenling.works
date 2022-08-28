"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_MediaComponent_index_js-app_components_MediaComponent_Image_css-app_components-dcbd0a"],{

/***/ "./app/components/MediaComponent/DraggableMedia.js":
/*!*********************************************************!*\
  !*** ./app/components/MediaComponent/DraggableMedia.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Close */ \"./node_modules/@mui/icons-material/Close.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/Paper.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-resizable'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Video */ \"./app/components/MediaComponent/Video.js\");\n/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Audio */ \"./app/components/MediaComponent/Audio.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/IconButton/IconButton.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction PaperComponent(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react_draggable__WEBPACK_IMPORTED_MODULE_3___default()), {\n    handle: \"#draggable-dialog-title\",\n    bounds: \"parent\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], props));\n}\n\nfunction DraggableMedia(props) {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),\n      _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      hide = _React$useState2[0],\n      setHide = _React$useState2[1];\n\n  var handleClose = function handleClose() {\n    props.changeMediaSelection(null);\n  };\n\n  var toggleHide = function toggleHide() {\n    setHide(function (prev) {\n      return !prev;\n    });\n  };\n\n  if (props.selectedMedia.isImageVisible) return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(PaperComponent, {\n    sx: {\n      position: \"absolute\",\n      zIndex: 1,\n      right: 0\n    } // onClose={handleClose}\n\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"Resizable-media-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    style: {\n      cursor: \"move\",\n      paddingInline: 20,\n      paddingTop: 10,\n      display: \"flex\",\n      justifyContent: \"space-between\",\n      alignItems: \"center\"\n    },\n    id: \"draggable-dialog-title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"h3\", null, props.selectedMedia.isVideoVisible && \"VIDEO\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"h3\", null, props.selectedMedia.isAudioVisible && \"AUDIO\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"buttons-hide-close\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onClick: toggleHide,\n    disableRipple: true\n  }, hide ? \"-\" : \"+\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onClick: handleClose,\n    disableRipple: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, props.selectedMedia.isVideoVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Video__WEBPACK_IMPORTED_MODULE_5__[\"default\"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    open: hide,\n    setOpen: setHide\n  })), props.selectedMedia.isAudioVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Audio__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: hide,\n    setOpen: setHide\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DraggableMedia);\n\n//# sourceURL=webpack://teminusclient/./app/components/MediaComponent/DraggableMedia.js?");

/***/ }),

/***/ "./app/components/MediaComponent/MediaContainer.js":
/*!*********************************************************!*\
  !*** ./app/components/MediaComponent/MediaContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ \"./app/actions/index.js\");\n/* harmony import */ var _MediaOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaOptions */ \"./app/components/MediaComponent/MediaOptions.js\");\n/* harmony import */ var _DraggableMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DraggableMedia */ \"./app/components/MediaComponent/DraggableMedia.js\");\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var scrollToId = reducers__WEBPACK_IMPORTED_MODULE_2__.getScrollToId(state);\n  var syncIdOnClick = reducers__WEBPACK_IMPORTED_MODULE_2__.getSyncIdOnClick(state);\n  var imageData = reducers__WEBPACK_IMPORTED_MODULE_2__.getImageData(state);\n  var videoData = reducers__WEBPACK_IMPORTED_MODULE_2__.getVideoData(state);\n  var Media = reducers__WEBPACK_IMPORTED_MODULE_2__.getMediaData(state);\n  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_2__.getSelectedText(state);\n  var isImagePortrait = reducers__WEBPACK_IMPORTED_MODULE_2__.isImagePortrait(state);\n  var alignmentData = reducers__WEBPACK_IMPORTED_MODULE_2__.getAlignment(state);\n  var witness = reducers__WEBPACK_IMPORTED_MODULE_2__.getSelectedTextWitnessId(state, selectedText.id);\n  var witnesses = reducers__WEBPACK_IMPORTED_MODULE_2__.getTextWitnesses(state, selectedText.id);\n  var ImageVersion = reducers__WEBPACK_IMPORTED_MODULE_2__.getSelectedImageVersion(state);\n  var selectedImage = reducers__WEBPACK_IMPORTED_MODULE_2__.getSelectedImage(state);\n  var imageScrollId = reducers__WEBPACK_IMPORTED_MODULE_2__.getImageScrollId(state);\n  var imageAlignmentById = reducers__WEBPACK_IMPORTED_MODULE_2__.getImageAlignmentById(state); //  const selectedSegmentId=reducers.getSelectedSegmentId(state);\n\n  return {\n    scrollToId: scrollToId,\n    syncIdOnClick: syncIdOnClick,\n    imageData: imageData,\n    videoData: videoData,\n    selectedMedia: Media,\n    selectedText: selectedText,\n    isImagePortrait: isImagePortrait,\n    // selectedSegmentId,\n    alignmentData: alignmentData,\n    witness: witness,\n    witnesses: witnesses,\n    ImageVersion: ImageVersion,\n    selectedImage: selectedImage,\n    imageScrollId: imageScrollId,\n    imageAlignmentById: imageAlignmentById\n  };\n};\n\nvar matchDispatchToProps = function matchDispatchToProps(dispatch) {\n  var toggleImage = function toggleImage(data) {\n    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.changedShowPageImages(data));\n  };\n\n  var changeMediaSelection = function changeMediaSelection(data) {\n    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.mediaSelection(data));\n  };\n\n  var changeIsImagePortrait = function changeIsImagePortrait(payload) {\n    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.setIsImagePortrait(payload));\n  };\n\n  var changeImageVersion = function changeImageVersion(imageVersionId) {\n    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.selectImageVersion(imageVersionId));\n  };\n\n  var changeSelectedImage = function changeSelectedImage(payload) {\n    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.selectImage(payload));\n  };\n\n  var onSelectedSearchResult = function onSelectedSearchResult(text, start, length, selectedText) {\n    if (!selectedText || selectedText.id !== text.id) {\n      dispatch(batchActions([actions__WEBPACK_IMPORTED_MODULE_3__.selectedSearchResult(text.id, start, length), actions__WEBPACK_IMPORTED_MODULE_3__.selectedText(text)]));\n    } else {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.selectedSearchResult(text.id, start, length));\n    }\n  };\n\n  return {\n    toggleImage: toggleImage,\n    onSelectedSearchResult: onSelectedSearchResult,\n    changeMediaSelection: changeMediaSelection,\n    changeIsImagePortrait: changeIsImagePortrait,\n    changeImageVersion: changeImageVersion,\n    changeSelectedImage: changeSelectedImage,\n    changeSelectedRange: function changeSelectedRange(payload) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.changeSelectedRange(payload));\n    },\n    changeScrollToId: function changeScrollToId(payload) {\n      return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__.changeScrollToId(payload));\n    }\n  };\n};\n\nvar MediaContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, matchDispatchToProps)(_DraggableMedia__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaContainer);\n\n//# sourceURL=webpack://teminusclient/./app/components/MediaComponent/MediaContainer.js?");

/***/ }),

/***/ "./app/components/MediaComponent/index.js":
/*!************************************************!*\
  !*** ./app/components/MediaComponent/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _MediaContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _MediaContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaContainer */ \"./app/components/MediaComponent/MediaContainer.js\");\n\n\n//# sourceURL=webpack://teminusclient/./app/components/MediaComponent/index.js?");

/***/ })

}]);