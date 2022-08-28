/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_TextList_TextList_js"],{

/***/ "./app/components/TextList/HighlightedString.js":
/*!******************************************************!*\
  !*** ./app/components/TextList/HighlightedString.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HighlightedString)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grapheme-splitter */ \"./node_modules/grapheme-splitter/index.js\");\n/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-string-replace */ \"./node_modules/react-string-replace/index.js\");\n/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_string_replace__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar HighlightedString = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HighlightedString, _React$Component);\n\n  var _super = _createSuper(HighlightedString);\n\n  function HighlightedString(props) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, HighlightedString);\n\n    return _super.call(this, props);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(HighlightedString, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var string = this.props.string;\n      var nameHtml = string;\n      var stringClass = this.props.stringClass || \"\";\n\n      if (this.props.searchTerm) {\n        var searchTerm = this.props.searchTerm;\n        var splitter = new (grapheme_splitter__WEBPACK_IMPORTED_MODULE_6___default())();\n        var graphemes = splitter.splitGraphemes(string);\n        var start = string.indexOf(searchTerm);\n        var end = start + searchTerm.length;\n        var position = 0;\n        var foundGraphemes = \"\";\n\n        if (start > -1) {\n          for (var i = 0; i < graphemes.length; i++) {\n            var grapheme = graphemes[i];\n\n            if (position >= start && position < end) {\n              foundGraphemes += grapheme;\n            }\n\n            position += grapheme.length;\n          }\n        }\n\n        if (foundGraphemes.length > 0) {\n          nameHtml = react_string_replace__WEBPACK_IMPORTED_MODULE_7___default()(string, foundGraphemes, function (match, i) {\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"span\", {\n              className: _this.props.highlightClass,\n              key: \"highlight-\".concat(i)\n            }, match);\n          });\n        }\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"span\", {\n        className: stringClass\n      }, nameHtml);\n    }\n  }]);\n\n  return HighlightedString;\n}(react__WEBPACK_IMPORTED_MODULE_5__.Component);\n\n\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/HighlightedString.js?");

/***/ }),

/***/ "./app/components/TextList/LoadMore.js":
/*!*********************************************!*\
  !*** ./app/components/TextList/LoadMore.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoadMore)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/components/message.js\");\n/* harmony import */ var _LoadMore_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadMore.css */ \"./app/components/TextList/LoadMore.css\");\n/* harmony import */ var _LoadMore_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LoadMore_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction LoadMore(props) {\n  var content;\n\n  if (props.loading) {\n    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      id: \"leftbar.loading\"\n    }));\n  } else {\n    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      id: \"leftbar.loadMore\"\n    }));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_LoadMore_css__WEBPACK_IMPORTED_MODULE_1___default().container)\n  }, content);\n}\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/LoadMore.js?");

/***/ }),

/***/ "./app/components/TextList/ResultCount.js":
/*!************************************************!*\
  !*** ./app/components/TextList/ResultCount.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResultCount)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextList.css */ \"./app/components/TextList/TextList.css\");\n/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TextList_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar ResultCount = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ResultCount, _React$Component);\n\n  var _super = _createSuper(ResultCount);\n\n  function ResultCount(props) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ResultCount);\n\n    return _super.call(this, props);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ResultCount, [{\n    key: \"render\",\n    value: function render() {\n      var countDisplay = this.props.count;\n      if (this.props.extra) countDisplay += \"+\";\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"span\", {\n        className: (_TextList_css__WEBPACK_IMPORTED_MODULE_6___default().searchTotal)\n      }, countDisplay);\n    }\n  }]);\n\n  return ResultCount;\n}(react__WEBPACK_IMPORTED_MODULE_5__.Component);\n\n\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/ResultCount.js?");

/***/ }),

/***/ "./app/components/TextList/TextList.js":
/*!*********************************************!*\
  !*** ./app/components/TextList/TextList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-virtualized/dist/es/AutoSizer */ \"./node_modules/react-virtualized/dist/es/AutoSizer/index.js\");\n/* harmony import */ var react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-virtualized/dist/es/CellMeasurer */ \"./node_modules/react-virtualized/dist/es/CellMeasurer/index.js\");\n/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-virtualized/styles.css */ \"./node_modules/react-virtualized/styles.css\");\n/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-virtualized/dist/es/List */ \"./node_modules/react-virtualized/dist/es/List/index.js\");\n/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! api */ \"./app/api/index.js\");\n/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/addTibetanShay */ \"./app/lib/addTibetanShay.js\");\n/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TextList.css */ \"./app/components/TextList/TextList.css\");\n/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_TextList_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _HighlightedString__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./HighlightedString */ \"./app/components/TextList/HighlightedString.js\");\n/* harmony import */ var _ResultCount__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ResultCount */ \"./app/components/TextList/ResultCount.js\");\n/* harmony import */ var _LoadMore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./LoadMore */ \"./app/components/TextList/LoadMore.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n // only needs to be imported once\n\n\n\n\n\n\n\n\n\nvar DEFAULT_ROW_HEIGHT = 60;\n\nvar TextList = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(TextList, _React$Component);\n\n  var _super = _createSuper(TextList);\n\n  function TextList(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TextList);\n\n    _this = _super.call(this, props);\n    _this.cache = new react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_9__.CellMeasurerCache({\n      fixedWidth: true,\n      defaultHeight: DEFAULT_ROW_HEIGHT,\n      minHeight: DEFAULT_ROW_HEIGHT\n    });\n    _this.rowRenderer = _this.rowRenderer.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TextList, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      this.cache.clearAll();\n      if (this.list) this.list.forceUpdateGrid();\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"rowRenderer\",\n    value: function rowRenderer(_ref) {\n      var _this2 = this;\n\n      var key = _ref.key,\n          index = _ref.index,\n          parent = _ref.parent,\n          style = _ref.style;\n      var selectedText = this.props.selectedText;\n      var selectedTextId = selectedText ? selectedText.id : -1;\n      var selectedSearchResult = this.props.selectedSearchResult;\n      var texts = this.props.texts;\n      var onSelectedText = this.props.onSelectedText;\n      var onSelectedSearchResult = this.props.onSelectedSearchResult;\n      var searchTerm = this.props.searchTerm;\n      var searchResults = this.props.searchResults;\n      var className = (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().textListRow);\n      var text = texts[index];\n\n      if (text.id === selectedTextId) {\n        className = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().selectedRow));\n      }\n\n      var name = (0,lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(text.name);\n      var nameHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"span\", {\n        className: (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().textName)\n      }, name);\n      var textSearchResults = [];\n      var resultsCount = null;\n      var extraRemaining = false;\n      var loadingResults = false;\n\n      if (searchTerm.length > 0) {\n        nameHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_HighlightedString__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n          string: name,\n          stringClass: (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().textName),\n          highlightClass: (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().highlight),\n          searchTerm: searchTerm\n        });\n\n        if (searchResults.hasOwnProperty(text.id)) {\n          textSearchResults = searchResults[text.id].results;\n          extraRemaining = searchResults[text.id].extra;\n          loadingResults = searchResults[text.id].loading;\n          resultsCount = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_ResultCount__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n            count: searchResults[text.id].total,\n            extra: extraRemaining\n          });\n        }\n      }\n\n      var cache = this.cache;\n      var textSearchResultRows = [];\n\n      if (textSearchResults.length > 0) {\n        textSearchResultRows = textSearchResults.map(function (result) {\n          var isSelected = selectedSearchResult && selectedSearchResult.textId === text.id && selectedSearchResult.start === result[0];\n          var className = isSelected ? (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().selectedSearchResult) : (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().searchResult);\n\n          if (isSelected) {// TODO: keeps getting rendered when selecting a syllable\n            // console.log(\"got selected result: %o\", result);\n          }\n\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n            key: text.id + \"_\" + result[0],\n            onClick: function onClick() {\n              onSelectedSearchResult(text, result[0], searchTerm.length, selectedText);\n            },\n            className: className\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_HighlightedString__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n            string: result[1],\n            highlightClass: (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().highlight),\n            searchTerm: searchTerm\n          }));\n        });\n      }\n\n      var searchText = function searchText() {\n        _this2.props.onSearchText(text, searchTerm);\n      };\n\n      if (searchResults !== null) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_9__.CellMeasurer, {\n        columnIndex: 0,\n        key: key,\n        parent: parent,\n        rowIndex: index,\n        cache: cache\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        key: \"listkeys-\".concat(key),\n        style: style,\n        className: className\n      }, searchTerm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().textNameRow),\n        onClick: function onClick() {\n          onSelectedText(texts[index]);\n        }\n      }, nameHtml, \" \", resultsCount), textSearchResults.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().searchResults)\n      }, textSearchResultRows), extraRemaining && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().loadMore),\n        onClick: searchText\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_LoadMore__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n        loading: loadingResults\n      }))));else return null;\n    }\n  }, {\n    key: \"findRowHeight\",\n    value: function findRowHeight(_ref2) {\n      var searchTerm = _ref2.searchTerm;\n      return searchTerm ? null : 40;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var texts = this.props.texts;\n      var rowCount = texts.length;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().textList)\n      }, this.props.texts && this.props.texts.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_8__.AutoSizer, null, function (_ref3) {\n        var height = _ref3.height,\n            width = _ref3.width;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_11__.List, {\n          ref: function ref(list) {\n            return _this3.list = list;\n          },\n          height: height,\n          rowCount: rowCount,\n          rowHeight: _this3.findRowHeight(_this3.props) || _this3.cache.rowHeight,\n          rowRenderer: _this3.rowRenderer,\n          width: width,\n          overscanRowCount: 1,\n          deferredMeasurementCache: _this3.cache\n        });\n      }) : this.props.searching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().textListLoader)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react_loader__WEBPACK_IMPORTED_MODULE_15___default()), {\n        loaded: !this.props.searching,\n        scale: 0.5\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"p\", {\n        className: (_TextList_css__WEBPACK_IMPORTED_MODULE_14___default().searching)\n      }, \"Searching\\u2026\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"ul\", {\n        className: \"textList\"\n      }));\n    }\n  }]);\n\n  return TextList;\n}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextList);\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/TextList.js?");

/***/ }),

/***/ "./app/components/TextList/LoadMore.css":
/*!**********************************************!*\
  !*** ./app/components/TextList/LoadMore.css ***!
  \**********************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"container\":\"LoadMore---container\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/LoadMore.css?");

/***/ }),

/***/ "./app/components/TextList/TextList.css":
/*!**********************************************!*\
  !*** ./app/components/TextList/TextList.css ***!
  \**********************************************/
/***/ ((module) => {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"green-tint\":\"#88af8e\",\"blue-tint\":\"#024279\",\"active-button\":\"#00746b\",\"mainTint\":\"#024279\",\"activeButton\":\"#00746b\",\"textList\":\"TextList---textList\",\"textListRow\":\"TextList---textListRow\",\"selectedRow\":\"TextList---selectedRow\",\"textNameRow\":\"TextList---textNameRow\",\"textName\":\"TextList---textName\",\"highlight\":\"TextList---highlight\",\"searchResults\":\"TextList---searchResults\",\"searchResult\":\"TextList---searchResult\",\"selectedSearchResult\":\"TextList---selectedSearchResult\",\"searchTotal\":\"TextList---searchTotal\",\"textListLoader\":\"TextList---textListLoader\",\"searching\":\"TextList---searching\",\"loadMore\":\"TextList---loadMore\"};\n\n//# sourceURL=webpack://teminusclient/./app/components/TextList/TextList.css?");

/***/ })

}]);