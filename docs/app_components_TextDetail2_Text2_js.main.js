/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextDetail2_Text2_js"],{

/***/ "./app/components/TextDetail2/Text2.js":
/*!*********************************************!*\
  !*** ./app/components/TextDetail2/Text2.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"idForDeletedSegment\": () => (/* binding */ idForDeletedSegment),\n/* harmony export */   \"idForSegment\": () => (/* binding */ idForSegment)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Text2_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Text2.css */ \"./app/components/TextDetail2/Text2.css\");\n/* harmony import */ var _Text2_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Text2_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/TextSegment */ \"./app/lib/TextSegment.js\");\n/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/AnnotatedText */ \"./app/lib/AnnotatedText.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/SegmentedText */ \"./app/lib/SegmentedText.js\");\n/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/Annotation */ \"./app/lib/Annotation.js\");\n/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lib/Witness */ \"./app/lib/Witness.js\");\n/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! grapheme-splitter */ \"./node_modules/grapheme-splitter/index.js\");\n/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/styles */ \"./node_modules/@mui/styles/withTheme/withTheme.js\");\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction idForSegment(segment) {\n  return \"s2_\" + segment.start;\n}\nfunction idForDeletedSegment(segment) {\n  return \"ds_\" + segment.start;\n} // export function idForInsertion(segment: TextSegment): string {\n//     return \"i_\" + segment.start;\n// }\n// export function idForPageBreak(segment: TextSegment): string {\n//     return \"p_\" + (segment.end + 1);\n// }\n// export function idForLineBreak(segment: TextSegment): string {\n//     return \"l_\" + (segment.end + 1);\n// }\n\n// import ReactDOMServer from \"react-dom/server\";\n// import PageBreakIcon from \"images/page_break_icon.svg\";\n// const PARA_SYMBOL = String.fromCharCode(182);\n// const pageBreakIconString = ReactDOMServer.renderToStaticMarkup(\n//     <PageBreakIcon />\n// );\nvar Text2 = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Text2, _React$Component);\n\n  var _super = _createSuper(Text2);\n\n  function Text2(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Text2);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      segmentedText: props.segmentedText\n    };\n    _this.textAlignmentById = _this.props.textAlignmentById;\n    _this._renderedSegments = null;\n    _this._renderedHtml = null;\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Text2, [{\n    key: \"UNSAFE_componentWillReceiveProps\",\n    value: function UNSAFE_componentWillReceiveProps(nextProps) {\n      this.setState(function (prevState, props) {\n        return _objectSpread(_objectSpread({}, prevState), {}, {\n          segmentedText: nextProps.segmentedText\n        });\n      });\n    } // annotationsForSegment(segment: TextSegment): Annotation[] {\n    //     let annotations: Annotation[] = [];\n    //     const foundAnnotations = this.props.annotationPositions[\n    //         String(segment.start)\n    //     ];\n    //     if (foundAnnotations) {\n    //         annotations = foundAnnotations;\n    //     }\n    //     const insertions =\n    //         this.props.annotationPositions[INSERTION_KEY + segment.start] || [];\n    //     const deletions =\n    //         this.props.annotationPositions[DELETION_KEY + segment.start] || [];\n    //     const pageBreaks =\n    //         this.props.annotationPositions[\n    //             PAGE_BREAK_KEY + (segment.end + 1)\n    //         ] || [];\n    //     const lineBreaks =\n    //         this.props.annotationPositions[\n    //             LINE_BREAK_KEY + (segment.end + 1)\n    //         ] || [];\n    //     return annotations.concat(\n    //         insertions,\n    //         deletions,\n    //         pageBreaks,\n    //         lineBreaks\n    //     );\n    // }\n    // segmentsContainSegment(segments: TextSegment[], segment: TextSegment) {\n    //     for (let i = 0; i < segments.length; i++) {\n    //         let listSegment = segments[i];\n    //         if (\n    //             listSegment.start === segment.start &&\n    //             listSegment.text === segment.text\n    //         ) {\n    //             return true;\n    //         }\n    //     }\n    //     return false;\n    // }\n\n  }, {\n    key: \"selectedElement\",\n    value: function selectedElement(element) {\n      var sourceRangeSelection = [];\n      var targetRangeSelection = [];\n      var selection = document.getSelection();\n\n      if (element !== null && element !== void 0 && element.id.includes(\"s2_\") && this.props.isPanelLinked && this.props.condition) {\n        var clickId = parseInt(element.id.replace(\"s2_\", \"\"));\n        this.props.changeSyncIdOnClick(clickId);\n        this.props.changeScrollToId({\n          id: \"ua\",\n          from: \"ua\"\n        });\n\n        var _id = parseInt(element.id.replace(\"s2_\", \"\"));\n\n        var rangeUnique = this.textAlignmentById.find(function (l) {\n          return _id >= l.TStart && _id < l.TEnd;\n        });\n\n        if (rangeUnique) {\n          for (var i = rangeUnique.start; i < rangeUnique.end; i++) {\n            sourceRangeSelection.push(i);\n          }\n\n          for (var _i = rangeUnique.TStart; _i < rangeUnique.TEnd; _i++) {\n            targetRangeSelection.push(_i);\n          }\n\n          this.props.changeSelectedRange({\n            source: sourceRangeSelection,\n            target: targetRangeSelection\n          });\n        }\n      }\n\n      if (selection && selection.type === \"Range\") {\n        return;\n      }\n\n      this.props.selectedSegmentId(element.id);\n\n      if (!element.id) {\n        this.props.changeSelectedRange({\n          source: [],\n          target: []\n        });\n      }\n    }\n  }, {\n    key: \"generateHtml\",\n    value: function generateHtml(renderProps, renderState) {\n      var segments = renderState.segmentedText.segments;\n      var textLineClass = (_Text2_css__WEBPACK_IMPORTED_MODULE_9___default().textLine);\n      var segmentHTML = '<p class=\"' + textLineClass + '\">';\n      if (segments.length === 0) return {\n        __html: segmentHTML\n      };\n      var endPosition = segments[segments.length - 1].end + 1;\n      var highlightClass = (_Text2_css__WEBPACK_IMPORTED_MODULE_9___default().highlight);\n      var activeHighlightClass = (_Text2_css__WEBPACK_IMPORTED_MODULE_9___default().activeHighlight);\n      var activeSearchResultEnd = null;\n\n      for (var i = 0; i < segments.length; i++) {\n        var _renderProps$selected;\n\n        var segment = segments[i];\n        var classAttribute = \"\";\n        var classes = [];\n        var selectedCurrentDeletion = false;\n        var selectedCurrentPageBreak = false;\n        var selectedCurrentLineBreak = false;\n        var lineBreakAnnotation = false;\n        var pageBreakAnnotation = null; // It's an insertion at the end of the text, which should have just been added to the html.\n        // So break as we don't want anymore segment html adding.\n\n        if (segment.start === endPosition) {\n          break;\n        }\n\n        var _id2 = null;\n\n        if (segment.length === 0) {// id = idForDeletedSegment(segment);\n          // classes.push(styles.removedByAnnotation);\n          // if (deletionText) {\n          //     segment = new TextSegment(segment.start, deletionText);\n          // }\n        } else {\n          _id2 = idForSegment(segment);\n        } // if (\n        //     this.segmentsContainSegment(\n        //         renderProps.selectedAnnotatedSegments,\n        //         segment\n        //     ) ||\n        //     selectedCurrentDeletion\n        // ) {\n        //     classes.push(styles.selectedAnnotation);\n        // }\n\n\n        if ((_renderProps$selected = renderProps.selectedTargetRange) !== null && _renderProps$selected !== void 0 && _renderProps$selected.includes(segment.start) && renderProps.condition) {\n          var newClass = renderProps.theme.palette.mode === \"light\" ? (_Text2_css__WEBPACK_IMPORTED_MODULE_9___default().selectedRangelight) : (_Text2_css__WEBPACK_IMPORTED_MODULE_9___default().selectedRangeDark);\n          classes.push(newClass);\n        }\n\n        if (classes.length > 0) {\n          var className = classnames__WEBPACK_IMPORTED_MODULE_8___default().apply(void 0, classes);\n          classAttribute = 'class=\"' + className + '\"';\n        }\n\n        var segmentContent = segment.text; // Add search result highlight if required.\n\n        if (renderProps.searchStringPositions) {\n          var segmentStart = segment.start;\n          var _position = segmentStart;\n          segmentContent = \"\";\n          var highlight = highlightClass;\n\n          if (renderProps.selectedSearchResult && renderProps.selectedSearchResult.start <= _position && renderProps.selectedSearchResult.start + renderProps.selectedSearchResult.length > _position) {\n            highlight = activeHighlightClass;\n          }\n\n          for (var j = 0; j < segment.text.length; j++) {\n            var _char = segment.text.charAt(j);\n\n            _position = segmentStart + j;\n\n            if (activeSearchResultEnd) {\n              var _activeSearchResultEn = activeSearchResultEnd,\n                  _activeSearchResultEn2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_activeSearchResultEn, 2),\n                  start = _activeSearchResultEn2[0],\n                  end = _activeSearchResultEn2[1];\n\n              if (j === 0) {\n                segmentContent += '<span class=\"' + highlight + '\">';\n              }\n\n              if (_position === end) {\n                segmentContent += _char + \"</span>\";\n                activeSearchResultEnd = null;\n              } else if (j === segment.text.length - 1) {\n                segmentContent += _char + \"</span>\";\n              } else {\n                segmentContent += _char;\n              }\n            } else if (_position in renderProps.searchStringPositions) {\n              var _renderProps$searchSt = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(renderProps.searchStringPositions[_position], 2),\n                  _start = _renderProps$searchSt[0],\n                  _end = _renderProps$searchSt[1];\n\n              segmentContent += '<span class=\"' + highlight + '\">' + _char;\n\n              if (j === segment.text.length - 1 || _position === _end) {\n                segmentContent += \"</span>\";\n              }\n\n              if (_position < _end) {\n                activeSearchResultEnd = [_start, _end];\n              }\n            } else {\n              segmentContent += _char;\n            }\n          }\n        } // if (\n        //     this.props.textAlignmentById !== null\n        //     // && selectedTextId === TargetId\n        // ) {\n        //     let r = this.props.textAlignmentById.find(\n        //         (d) => d.TStart === segment.start\n        //     );\n        //     if (r) {\n        //         segmentHTML +=\n        //             \"<span id='alignment2_\" +\n        //             segment.start +\n        //             \"'>\" +\n        //             `<sup class=` +\n        //             styles.syncIdClass +\n        //             `>${r.id}</sup>` +\n        //             \"</span>\";\n        //     }\n        // }\n\n\n        segmentHTML += \"<span id=\" + _id2 + \" key=\" + _id2 + \" \" + classAttribute + \">\" + segmentContent + \"</span>\";\n      }\n\n      this._renderedSegments = segments;\n      segmentHTML += \"</p>\";\n      var html = {\n        __html: segmentHTML\n      };\n      return html;\n    }\n  }, {\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      var renderedHtml = this.generateHtml(nextProps, nextState);\n\n      if (this.props.fontSize !== nextProps.fontSize) {\n        return true;\n      } else if (this._renderedHtml && renderedHtml.__html === this._renderedHtml.__html) {\n        return false;\n      } else if (this._renderedHtml !== renderedHtml) {\n        this._renderedHtml = renderedHtml;\n        return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      this.textAlignmentById = this.props.textAlignmentById;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var classes = [(_Text2_css__WEBPACK_IMPORTED_MODULE_9___default().text)];\n\n      if (this.props.row === 0) {\n        classes.push((_Text2_css__WEBPACK_IMPORTED_MODULE_9___default().textFirstRow));\n      } // Generate HTML manually as it is much faster when\n      // creating large numbers of elements, such as these spans.\n\n\n      var html = this._renderedHtml ? this._renderedHtml : this.generateHtml(this.props, this.state);\n\n      if (!this._renderedHtml) {\n        this._renderedHtml = html;\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"div\", {\n        className: (_Text2_css__WEBPACK_IMPORTED_MODULE_9___default().textContainer)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_8___default().apply(void 0, classes),\n        dangerouslySetInnerHTML: html,\n        onClick: function onClick(e) {\n          return _this2.selectedElement(e.target);\n        },\n        style: {\n          fontSize: this.props.fontSize,\n          fontFamily: \"var(--tibetan-fonts2)\"\n        }\n      }));\n    }\n  }]);\n\n  return Text2;\n}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_17__[\"default\"])(Text2));\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail2/Text2.js?");

/***/ }),

/***/ "./app/components/TextDetail2/Text2.css":
/*!**********************************************!*\
  !*** ./app/components/TextDetail2/Text2.css ***!
  \**********************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"paddingSide\":\"20px\",\"maxWidth\":\"600px\",\"text\":\"Text2---text\",\"textFirstRow\":\"Text2---textFirstRow\",\"textLine\":\"Text2---textLine\",\"textline\":\"Text2---textline\",\"limitWidth\":\"Text2---limitWidth\",\"textContainer\":\"Text2---textContainer\",\"annotation\":\"Text2---annotation\",\"removedByAnnotation\":\"Text2---removedByAnnotation\",\"insertion\":\"Text2---insertion\",\"highlight\":\"Text2---highlight\",\"activeHighlight\":\"Text2---activeHighlight\",\"lineBreak\":\"Text2---lineBreak\",\"pageBreak\":\"Text2---pageBreak\",\"syncIdClass\":\"Text2---syncIdClass\",\"selectedRangelight\":\"Text2---selectedRangelight\",\"selectedRangeDark\":\"Text2---selectedRangeDark\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextDetail2/Text2.css?");

/***/ })

}]);