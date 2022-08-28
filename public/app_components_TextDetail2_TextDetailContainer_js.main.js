"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail2_TextDetailContainer_js"],{

/***/ "./app/components/TextDetail2/TextDetailContainer.js":
/*!***********************************************************!*\
  !*** ./app/components/TextDetail2/TextDetailContainer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _TextDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextDetail */ \"./app/components/TextDetail2/TextDetail.js\");\n/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions */ \"./app/actions/index.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/AnnotatedText */ \"./app/lib/AnnotatedText.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var state_helpers_TextStore2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! state_helpers/TextStore2 */ \"./app/state_helpers/TextStore2.js\");\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\nvar DISMISS_CONTROLS_ON_CLICK = true;\n\nfunction getInsertionKey(annotation) {\n  return [annotation.start, annotation.length].join(\"-\");\n}\n\nvar _posAnnotatedText;\n\nvar _posAnnotations;\n\nvar _positions;\n\nvar _posVersion;\n\nvar getAnnotationPositions = function getAnnotationPositions(annotatedText, annotations) {\n  if (annotatedText === _posAnnotatedText && annotations === _posAnnotations && annotatedText.version === _posVersion) {\n    return _positions;\n  }\n\n  var positions = {};\n  var activeInsertions = {};\n\n  var _loop = function _loop(i) {\n    var annotation = annotations[i];\n\n    var _annotatedText$getPos = annotatedText.getPositionOfAnnotation(annotation),\n        _annotatedText$getPos2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_annotatedText$getPos, 2),\n        startPos = _annotatedText$getPos2[0],\n        length = _annotatedText$getPos2[1];\n\n    if (startPos == null) {\n      return \"continue\";\n    }\n\n    if (length === 0) {\n      if (annotation.isInsertion) {\n        // group with any active insertions at the same position\n        var activeKey = getInsertionKey(annotation);\n        var activeInsertionPositions = activeInsertions[activeKey];\n\n        if (activeInsertionPositions) {\n          activeInsertionPositions.map(function (pos) {\n            return positions[pos].push(annotation);\n          });\n          return \"continue\";\n        }\n\n        startPos = INSERTION_KEY + startPos;\n      }\n\n      if (annotation.isDeletion && annotation.length > 0) {\n        // active deletion\n        startPos = DELETION_KEY + startPos;\n      }\n\n      if (annotation.type === ANNOTATION_TYPES.pageBreak) {\n        startPos = PAGE_BREAK_KEY + startPos;\n      }\n\n      if (annotation.type === ANNOTATION_TYPES.lineBreak) {\n        startPos = LINE_BREAK_KEY + startPos;\n      }\n\n      if (positions[startPos] === undefined) {\n        positions[startPos] = [];\n      }\n\n      if (positions[startPos].indexOf(annotation) === -1) {\n        positions[startPos].push(annotation);\n      }\n    } else {\n      var annotationPositions = [];\n\n      for (var j = startPos; j < startPos + length; j++) {\n        if (positions[j] === undefined) {\n          positions[j] = [];\n        }\n\n        if (positions[j].indexOf(annotation) === -1) {\n          positions[j].push(annotation);\n        }\n\n        annotationPositions.push(j);\n      } // Store the positions this annotation is displayed at.\n      // This can then be used later to group with inactive insertions\n\n\n      if (annotation.isInsertion) {\n        var key = getInsertionKey(annotation);\n        activeInsertions[key] = annotationPositions;\n      }\n    }\n  };\n\n  for (var i = 0; i < annotations.length; i++) {\n    var _ret = _loop(i);\n\n    if (_ret === \"continue\") continue;\n  }\n\n  _posAnnotatedText = annotatedText;\n  _posAnnotations = annotations;\n  _positions = positions;\n  _posVersion = annotatedText.version;\n  return positions;\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var _selectedWitness;\n\n  var selectedWitness = {};\n  var annotatedText = null;\n  var workingWitness;\n  var textFontSize = reducers__WEBPACK_IMPORTED_MODULE_6__.getTextFontSize2(state);\n  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_6__.getSelectedText2(state);\n  var annotationPositions = {};\n  var annotations = [];\n\n  if (selectedText) {\n    workingWitness = reducers__WEBPACK_IMPORTED_MODULE_6__.getWorkingWitness2(state, selectedText.id) || {};\n    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_6__.getSelectedTextWitnessId2(state, selectedText.id);\n\n    if (selectedWitnessId) {\n      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_6__.getWitness2(state, selectedWitnessId);\n    }\n\n    if (lodash__WEBPACK_IMPORTED_MODULE_8___default().isEmpty(selectedWitness) && !lodash__WEBPACK_IMPORTED_MODULE_8___default().isEmpty(workingWitness)) ;\n    {\n      selectedWitness = workingWitness;\n    }\n  }\n\n  annotatedText = state_helpers_TextStore2__WEBPACK_IMPORTED_MODULE_9__.getWitnessText(state, (_selectedWitness = selectedWitness) === null || _selectedWitness === void 0 ? void 0 : _selectedWitness.id);\n  var loading = state.data2.loadingWitnesses;\n\n  if (annotatedText) {\n    annotationPositions = getAnnotationPositions(annotatedText, Object.values(annotations));\n  }\n\n  var isPanelLinked = reducers__WEBPACK_IMPORTED_MODULE_6__.isPanelLinked(state);\n  var scrollToId = reducers__WEBPACK_IMPORTED_MODULE_6__.getScrollToId(state);\n  var syncIdOnClick = reducers__WEBPACK_IMPORTED_MODULE_6__.getSyncIdOnClick(state);\n  var textAlignment = reducers__WEBPACK_IMPORTED_MODULE_6__.getTextAlignment(state);\n  var selectedWindow = reducers__WEBPACK_IMPORTED_MODULE_6__.getSelectedWindow(state);\n  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_6__.getSearchValue2(state);\n  return {\n    text: selectedText,\n    textFontSize: textFontSize,\n    annotatedText: annotatedText,\n    selectedWitness: selectedWitness,\n    loading: loading,\n    annotationPositions: annotationPositions,\n    isSecondWindowOpen: (0,reducers__WEBPACK_IMPORTED_MODULE_6__.isSecondWindowOpen)(state),\n    imageData: (0,reducers__WEBPACK_IMPORTED_MODULE_6__.getImageData)(state),\n    isPanelLinked: isPanelLinked,\n    selectedImage: (0,reducers__WEBPACK_IMPORTED_MODULE_6__.getSelectedImage)(state),\n    isImagePortrait: (0,reducers__WEBPACK_IMPORTED_MODULE_6__.isImagePortrait)(state),\n    isPanelVisible: (0,reducers__WEBPACK_IMPORTED_MODULE_6__.isPanelVisible)(state),\n    scrollToId: scrollToId,\n    syncIdOnClick: syncIdOnClick,\n    textAlignment: textAlignment,\n    textAlignmentById: reducers__WEBPACK_IMPORTED_MODULE_6__.getTextAlignmentById(state),\n    selectedWindow: selectedWindow,\n    selectedSourceRange: (0,reducers__WEBPACK_IMPORTED_MODULE_6__.getSelectedSourceRange)(state),\n    selectedTargetRange: (0,reducers__WEBPACK_IMPORTED_MODULE_6__.getSelectedTargetRange)(state),\n    showTableContent: reducers__WEBPACK_IMPORTED_MODULE_6__.getShowTableContent2(state),\n    searchResults: (0,reducers__WEBPACK_IMPORTED_MODULE_6__.getSearchResults2)(state, searchValue),\n    searchValue: searchValue,\n    syncIdOnSearch: reducers__WEBPACK_IMPORTED_MODULE_6__.getSyncIdOnSearch2(state)\n  };\n};\n\nvar mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {\n  var annotatedText = stateProps.annotatedText,\n      annotationPositions = stateProps.annotationPositions;\n  var dispatch = dispatchProps.dispatch;\n\n  var isDeletion = function isDeletion(id) {\n    return id.indexOf(\"ds2_\") !== -1;\n  };\n\n  var isInsertion = function isInsertion(id) {\n    return id.indexOf(\"i2_\") !== -1;\n  };\n\n  var isPageBreak = function isPageBreak(id) {\n    return id.indexOf(\"p2_\") !== -1;\n  };\n\n  var isLineBreak = function isLineBreak(id) {\n    return id.indexOf(\"l2_\") !== -1;\n  };\n\n  var idFromSegmentId = function idFromSegmentId(id) {\n    var start = 0;\n\n    if (isInsertion(id)) {\n      start = id.substr(2);\n    } else if (isDeletion(id)) {\n      start = id.substr(3);\n    } else {\n      start = id.substr(2);\n    }\n\n    return start;\n  };\n\n  var didSelectSegmentPosition = function didSelectSegmentPosition(segmentPosition, start, length) {\n    var segmentAnnotations = annotationPositions[segmentPosition];\n    var segmentVariants = [];\n    var segmentPageBreaks = [];\n    var segmentLineBreaks = [];\n\n    if (segmentAnnotations) {\n      segmentVariants = segmentAnnotations.filter(function (annotation) {\n        return annotation.type === ANNOTATION_TYPES.variant;\n      });\n      segmentPageBreaks = segmentAnnotations.filter(function (annotation) {\n        return annotation.type === ANNOTATION_TYPES.pageBreak;\n      });\n      segmentLineBreaks = segmentAnnotations.filter(function (annotation) {\n        return annotation.type === ANNOTATION_TYPES.lineBreak;\n      });\n    }\n\n    var activeAnnotations = lodash__WEBPACK_IMPORTED_MODULE_8___default().intersectionWith(segmentVariants.concat(segmentPageBreaks, segmentLineBreaks), annotatedText.annotations, function (a, b) {\n      return a.toString() == b.toString();\n    });\n\n    var activeAnnotation = null;\n\n    if (activeAnnotations.length > 0) {\n      // get any active annotations\n      activeAnnotation = activeAnnotations[0];\n    } else if (segmentVariants && segmentVariants.length > 0) {\n      // get base text annotation for longest annotation highlighted in text\n      var longestAvailable = getLongestAnnotation(segmentVariants);\n\n      var _annotatedText$getPos3 = annotatedText.getPositionOfAnnotation(longestAvailable),\n          _annotatedText$getPos4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_annotatedText$getPos3, 2),\n          _start = _annotatedText$getPos4[0],\n          textLength = _annotatedText$getPos4[1];\n\n      if (longestAvailable && longestAvailable.isInsertion) {\n        textLength = 0;\n      }\n\n      activeAnnotation = annotatedText.getBaseAnnotation(_start, textLength);\n    } else {\n      // get base annotation of just the segment\n      activeAnnotation = annotatedText.getBaseAnnotation(start, length);\n    } // dispatch(actions.changedActiveTextAnnotation(activeAnnotation));\n\n  };\n\n  return _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), {}, {\n    onChangedFontSize: function onChangedFontSize(fontSize) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_5__.changedTextFontSize(fontSize));\n    },\n    didSelectSegmentIds: function didSelectSegmentIds(segmentIds) {\n      if (segmentIds.length === 0) {\n        return;\n      }\n\n      var segmentAnnotations = [];\n      var segments = [];\n\n      var _iterator = _createForOfIteratorHelper(segmentIds),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var segmentId = _step.value;\n\n          if (isDeletion(segmentId) || isInsertion(segmentId)) {\n            continue;\n          }\n\n          var segmentPosition = idFromSegmentId(segmentId);\n          var textSegment = annotatedText.segmentedText.segmentAtPosition(segmentPosition);\n          segments.push(textSegment);\n          var annotations = annotationPositions[textSegment.start];\n\n          if (annotations) {\n            segmentAnnotations = segmentAnnotations.concat(annotations);\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      segmentAnnotations = lodash__WEBPACK_IMPORTED_MODULE_8___default().uniqWith(segmentAnnotations, function (a, b) {\n        return a.toString() == b.toString();\n      });\n\n      var activeAnnotations = lodash__WEBPACK_IMPORTED_MODULE_8___default().intersectionWith(segmentAnnotations, annotatedText.annotations, function (a, b) {\n        return a.toString() == b.toString();\n      });\n\n      var range = getSegmentsRange(segments, activeAnnotations, segmentAnnotations, stateProps.annotatedText);\n\n      if (!range) {\n        console.warn(\"No range for selected segment ids: %o\", segmentIds);\n        return;\n      }\n\n      var baseAnnotation = annotatedText.getBaseAnnotation(range.start, range.length);\n      var activeAnnotation = null;\n\n      if (range.annotation) {\n        activeAnnotation = range.annotation;\n      } else if (activeAnnotations.length > 0) {\n        var content = annotatedText.segmentedText.segmentsInRange(range.start, range.length).reduce(function (content, segment) {\n          return content + segment.text;\n        }, \"\"); // TODO: test this when editing non-working edition.\n        // Check if getTextWorkingWitness works as required\n\n        if (!stateProps.selectedWitness) {\n          console.log(\"no stateProps.selectedWitness: %o\", stateProps.selectedWitness);\n        }\n\n        activeAnnotation = new Annotation(WORKING_VERSION_ANNOTATION_ID, getTextWorkingWitness(stateProps.text), baseAnnotation.start, baseAnnotation.length, content, ANNOTATION_TYPES.variant, stateProps.selectedWitness, stateProps.user);\n      } else {\n        activeAnnotation = baseAnnotation;\n      } // dispatch(changedActiveTextAnnotation(activeAnnotation));\n\n    },\n    changeScrollToId: function changeScrollToId(payload) {\n      return dispatch(actions__WEBPACK_IMPORTED_MODULE_5__.changeScrollToId(payload));\n    },\n    changeSyncIdOnClick: function changeSyncIdOnClick(payload) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_5__.changeSyncIdOnClick(payload));\n    },\n    changeSelectedWindow: function changeSelectedWindow(payload) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_5__.changeSelectedWindow(payload));\n    },\n    changeSelectedRange: function changeSelectedRange(payload) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_5__.changeSelectedRange(payload));\n    },\n    changeShowTableContent: function changeShowTableContent(payload) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_5__.showTableContent2(payload));\n    },\n    selectedSegmentId: function selectedSegmentId(segmentId) {\n      var start = idFromSegmentId(segmentId);\n      var positionKey = start;\n\n      if (isInsertion(segmentId)) {\n        positionKey = INSERTION_KEY + start;\n      } else if (isDeletion(segmentId)) {\n        positionKey = DELETION_KEY + start;\n      } else if (isPageBreak(segmentId)) {\n        positionKey = PAGE_BREAK_KEY + start;\n      } else if (isLineBreak(segmentId)) {\n        positionKey = LINE_BREAK_KEY + start;\n      }\n\n      var segmentAnnotations = annotationPositions[positionKey];\n\n      if (DISMISS_CONTROLS_ON_CLICK && stateProps.activeAnnotation) {\n        var activeAnnotation = stateProps.activeAnnotation;\n\n        if (activeAnnotation) {\n          var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_5__.changedActiveTextAnnotation(null);\n          dispatch(dismissTextAnnotation);\n        }\n      } //  else {\n      //     if (\n      //         isInsertion(segmentId) ||\n      //         isDeletion(segmentId) ||\n      //         isPageBreak(segmentId) ||\n      //         isLineBreak(segmentId)\n      //     ) {\n      //         const length = 0;\n      //         didSelectSegmentPosition(positionKey, start, length);\n      //     } else {\n      //         let segmentPosition = Number(idFromSegmentId(segmentId));\n      //         let textSegment = annotatedText.segmentedText.segmentAtPosition(\n      //             segmentPosition\n      //         );\n      //         if (textSegment) {\n      //             didSelectSegmentPosition(\n      //                 textSegment.start,\n      //                 textSegment.start,\n      //                 textSegment.length\n      //             );\n      //         }\n      //     }\n      // }\n\n    }\n  });\n};\n\nvar TextDetailContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, null, mergeProps)(_TextDetail__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(TextDetailContainer));\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail2/TextDetailContainer.js?");

/***/ }),

/***/ "./app/state_helpers/TextStore2.js":
/*!*****************************************!*\
  !*** ./app/state_helpers/TextStore2.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTextAnnotation\": () => (/* binding */ addTextAnnotation),\n/* harmony export */   \"deleteTextAnnotation\": () => (/* binding */ deleteTextAnnotation),\n/* harmony export */   \"getWitnessAnnotations\": () => (/* binding */ getWitnessAnnotations),\n/* harmony export */   \"getWitnessText\": () => (/* binding */ getWitnessText),\n/* harmony export */   \"removeTextAnnotation\": () => (/* binding */ removeTextAnnotation)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/AnnotatedText */ \"./app/lib/AnnotatedText.js\");\n/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Witness */ \"./app/lib/Witness.js\");\n/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/Annotation */ \"./app/lib/Annotation.js\");\n/* harmony import */ var lib_segmentTibetanText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/segmentTibetanText */ \"./app/lib/segmentTibetanText.js\");\n/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/SegmentedText */ \"./app/lib/SegmentedText.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\nvar store = {};\nvar getWitnessText = function getWitnessText(state, witnessId) {\n  var text = null;\n\n  if (witnessId) {\n    text = generateAnnotatedText(state, witnessId);\n\n    if (text) {\n      store[witnessId] = text;\n    }\n  }\n\n  return text;\n};\nvar addTextAnnotation = function addTextAnnotation(state, witnessId, annotation) {\n  var text = getWitnessText(state, witnessId);\n\n  if (text) {\n    text.addAnnotation(annotation);\n  } // If witnessId is present, assume that getWitnessAnnotations\n  // has already been called.\n\n\n  if (annotationStore.hasOwnProperty(witnessId)) {\n    if (!annotationStore[witnessId].appliedAnnotations.hasOwnProperty(annotation.uniqueId)) {\n      annotationStore[witnessId].appliedAnnotations[annotation.uniqueId] = annotation;\n    }\n\n    if (!annotationStore[witnessId].allAnnotations.hasOwnProperty(annotation.uniqueId)) {\n      annotationStore[witnessId].allAnnotations[annotation.uniqueId] = annotation;\n    }\n  }\n};\nvar removeTextAnnotation = function removeTextAnnotation(state, witnessId, annotationId) {\n  var text = getWitnessText(state, witnessId);\n\n  if (text) {\n    text.removeAnnotation(annotationId);\n  }\n\n  if (annotationStore.hasOwnProperty(witnessId)) {\n    if (annotationStore[witnessId].appliedAnnotations.hasOwnProperty(annotationId)) {\n      delete annotationStore[witnessId].appliedAnnotations[annotationId];\n    }\n  }\n};\nvar deleteTextAnnotation = function deleteTextAnnotation(state, witnessId, annotationId) {\n  var text = getWitnessText(state, witnessId);\n\n  if (text) {\n    text.removeAnnotation(annotationId);\n  }\n\n  if (annotationStore.hasOwnProperty(witnessId)) {\n    if (annotationStore[witnessId].allAnnotations.hasOwnProperty(annotationId)) {\n      delete annotationStore[witnessId].allAnnotations[annotationId];\n    }\n\n    if (annotationStore[witnessId].appliedAnnotations.hasOwnProperty(annotationId)) {\n      delete annotationStore[witnessId].appliedAnnotations[annotationId];\n    }\n  }\n};\nvar annotationStore = {};\nvar getWitnessAnnotations = function getWitnessAnnotations(state, witness, workingWitness) {\n  if (annotationStore.hasOwnProperty(witness.id)) {\n    return [annotationStore[witness.id].appliedAnnotations, annotationStore[witness.id].allAnnotations];\n  }\n\n  var text = witness.text;\n  var workingAnnotationList = reducers__WEBPACK_IMPORTED_MODULE_2__.getAnnotationsForWitnessId(state, workingWitness.id);\n  var appliedAnnotations = getActiveAnnotations(state, witness.id, workingWitness.id);\n  var removedDefaultAnnotations = null; // Default annotations removed by the user.\n  // Usually these are available when viewing\n  // a non-working edition.\n\n  var nonActiveAnnotations = {};\n\n  if (witness.id !== workingWitness.id) {\n    // If we are not viewing the working version,\n    // get all the annotations created by the selected witness\n    // BUT NOT BY A USER to apply to the base text.\n    // User-created annotations need to be in appliedAnnotations.\n    removedDefaultAnnotations = reducers__WEBPACK_IMPORTED_MODULE_2__.getRemovedDefaultAnnotationsForWitnessId(state, witness.id);\n    var selectedWitnessAnnotations = {};\n\n    for (var key in workingAnnotationList) {\n      if (workingAnnotationList.hasOwnProperty(key)) {\n        var annotationData = workingAnnotationList[key];\n\n        if (annotationData.creator_witness === witness.id && !removedDefaultAnnotations.hasOwnProperty(annotationData.unique_id)) {\n          selectedWitnessAnnotations[annotationData.unique_id] = annotationData;\n        } else if (annotationData.creator_witness === witness.id) {\n          nonActiveAnnotations[annotationData.unique_id] = annotationData;\n        }\n      }\n    }\n\n    var selectedWitnessAnnotationsList = annotationsMapFromData(state, selectedWitnessAnnotations);\n    appliedAnnotations = _objectSpread(_objectSpread({}, selectedWitnessAnnotationsList), appliedAnnotations);\n    workingAnnotationList = selectedWitnessAnnotations;\n  }\n\n  var annotations = annotationsMapFromData(state, workingAnnotationList);\n  nonActiveAnnotations = annotationsMapFromData(state, nonActiveAnnotations);\n\n  if (Object.keys(nonActiveAnnotations).length > 0) {\n    annotations = _objectSpread(_objectSpread({}, annotations), nonActiveAnnotations);\n  }\n\n  annotations = _objectSpread(_objectSpread({}, appliedAnnotations), annotations);\n  annotations = lodash__WEBPACK_IMPORTED_MODULE_8___default().pickBy(annotations, function (annotation, key) {\n    return !(witness && annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_5__.ANNOTATION_TYPES.lineBreak && annotation.creatorWitness.id !== witness.id);\n  }); // Only cache if annotations have been loaded\n\n  if (reducers__WEBPACK_IMPORTED_MODULE_2__.hasLoadedWitnessAnnotations2(state, witness.id) && reducers__WEBPACK_IMPORTED_MODULE_2__.hasLoadedWitnessAppliedAnnotations(state, witness.id)) {\n    annotationStore[witness.id] = {\n      appliedAnnotations: appliedAnnotations,\n      allAnnotations: annotations\n    };\n  }\n\n  return [appliedAnnotations, annotations];\n};\n\nvar generateAnnotatedText = function generateAnnotatedText(state, witnessId) {\n  var witness = reducers__WEBPACK_IMPORTED_MODULE_2__.getWitness2(state, witnessId);\n\n  if (!witness) {\n    console.warn(\"no witness\");\n    return null;\n  }\n\n  var text = witness.text;\n  var workingWitness = reducers__WEBPACK_IMPORTED_MODULE_2__.getWorkingWitness2(state, text.id);\n  var baseWitness = reducers__WEBPACK_IMPORTED_MODULE_2__.getBaseWitness2(state, text.id);\n\n  if (!workingWitness || !baseWitness) {\n    return null;\n  }\n\n  var _getWitnessAnnotation = getWitnessAnnotations(state, witness, workingWitness),\n      _getWitnessAnnotation2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_getWitnessAnnotation, 2),\n      appliedAnnotations = _getWitnessAnnotation2[0],\n      availableAnnotations = _getWitnessAnnotation2[1];\n\n  var segmentedWorkingWitness = getSegmentedWitness(workingWitness);\n  var annotatedText = new lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_3__[\"default\"](segmentedWorkingWitness, Object.values(appliedAnnotations), function (text) {\n    return (0,lib_segmentTibetanText__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(text).segments;\n  }, workingWitness, witness);\n  return annotatedText;\n};\n\nvar getActiveAnnotations = function getActiveAnnotations(state, witnessId, baseWitnessId) {\n  var loadedAppliedAnnotations = reducers__WEBPACK_IMPORTED_MODULE_2__.hasLoadedWitnessAppliedAnnotations(state, witnessId);\n\n  if (!loadedAppliedAnnotations) {\n    return {};\n  }\n\n  var activeAnnotationList = reducers__WEBPACK_IMPORTED_MODULE_2__.getActiveAnnotationsForWitnessId(state, witnessId);\n\n  if (!activeAnnotationList) {\n    return {};\n  }\n\n  var activeAnnotationDataList = {};\n\n  for (var activeAnnotationId in activeAnnotationList) {\n    if (activeAnnotationList.hasOwnProperty(activeAnnotationId)) {\n      var activeAnnotationData = reducers__WEBPACK_IMPORTED_MODULE_2__.getAnnotationData(state, baseWitnessId, activeAnnotationId);\n\n      if (activeAnnotationData) {\n        activeAnnotationDataList[activeAnnotationData.unique_id] = activeAnnotationData;\n      }\n    }\n  }\n\n  return annotationsMapFromData(state, activeAnnotationDataList);\n};\n\nvar annotationsMapFromData = function annotationsMapFromData(state, annotationList) {\n  var annotations = {};\n\n  for (var key in annotationList) {\n    if (annotationList.hasOwnProperty(key)) {\n      var annotationData = annotationList[key];\n      var annotation = reducers__WEBPACK_IMPORTED_MODULE_2__.annotationFromData(state, annotationData);\n\n      if (annotation) {\n        annotations[key] = annotation;\n      }\n    }\n  }\n\n  return annotations;\n}; // TODO: clear cache when changing texts\n\n\nvar _segmentedWitnesses = {};\n\nfunction getSegmentedWitness(witness) {\n  if (!_segmentedWitnesses[witness.id]) {\n    _segmentedWitnesses[witness.id] = (0,lib_segmentTibetanText__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(witness.content || \"\");\n  }\n\n  return _segmentedWitnesses[witness.id];\n}\n\n//# sourceURL=webpack://teminusclient/./app/state_helpers/TextStore2.js?");

/***/ })

}]);