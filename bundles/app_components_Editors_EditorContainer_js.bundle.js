"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkteminusclient"] = self["webpackChunkteminusclient"] || []).push([["app_components_Editors_EditorContainer_js"],{

/***/ "./app/components/Editors/EditorContainer.js":
/*!***************************************************!*\
  !*** ./app/components/Editors/EditorContainer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ \"./app/components/Editors/Editor.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ \"./app/actions/index.js\");\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_3__.getSelectedText(state);\n  var selectedText2 = reducers__WEBPACK_IMPORTED_MODULE_3__.getSelectedText2(state);\n  var selectedWitness;\n  var selectedWitness2;\n  var witnesses;\n  var witnesses2;\n\n  if (selectedText) {\n    witnesses = reducers__WEBPACK_IMPORTED_MODULE_3__.getTextWitnesses(state, selectedText.id);\n    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_3__.getSelectedTextWitnessId(state, selectedText.id);\n\n    if (selectedWitnessId) {\n      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_3__.getWitness(state, selectedWitnessId);\n    } else {\n      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_3__.getWorkingWitness(state, selectedText.id);\n    }\n  }\n\n  if (selectedText2) {\n    witnesses2 = reducers__WEBPACK_IMPORTED_MODULE_3__.getTextWitnesses2(state, selectedText2.id);\n    var selectedWitnessId2 = reducers__WEBPACK_IMPORTED_MODULE_3__.getSelectedTextWitnessId2(state, selectedText2.id);\n\n    if (selectedWitnessId2) {\n      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_3__.getWitness2(state, selectedWitnessId2);\n    } else {\n      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_3__.getWorkingWitness2(state, selectedText2.id);\n    }\n  }\n\n  if (!state.user.userId === -1) {\n    user = state.user;\n  }\n\n  return {\n    selectedText: selectedText,\n    selectedWitness: selectedWitness,\n    selectedText2: selectedText2,\n    selectedWitness2: selectedWitness2,\n    title: reducers__WEBPACK_IMPORTED_MODULE_3__.getTranslation(state, \"header.title\"),\n    page: state.page,\n    isAnnotating: reducers__WEBPACK_IMPORTED_MODULE_3__.isAnnotating(state),\n    isSecondWindowOpen: reducers__WEBPACK_IMPORTED_MODULE_3__.isSecondWindowOpen(state),\n    theme: reducers__WEBPACK_IMPORTED_MODULE_3__.getTheme(state),\n    isPanelLinked: reducers__WEBPACK_IMPORTED_MODULE_3__.isPanelLinked(state),\n    textListIsVisible: reducers__WEBPACK_IMPORTED_MODULE_3__.getTextListVisible(state)\n  };\n};\n\nvar matchDispatchToProps = function matchDispatchToProps(dispatch) {\n  return {\n    onChangedTextWidth: function onChangedTextWidth(width) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedTextListWidth(width));\n    },\n    onChangedTextListVisible: function onChangedTextListVisible(isVisible) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedTextListVisible(isVisible));\n    },\n    changeIsAnnotating: function changeIsAnnotating(payload) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changeIsAnnotating(payload));\n\n      if (payload === false) {\n        var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_4__.changedActiveTextAnnotation(null);\n        dispatch(dismissTextAnnotation);\n        dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changedActiveTextAnnotation(null));\n      }\n    },\n    onChangeWindowOpen: function onChangeWindowOpen(data, textId) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.toggleSecondWindow(data, textId));\n    },\n    onChangePanelLink: function onChangePanelLink(data) {\n      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.changePanelLink(data));\n    }\n  };\n};\n\nvar EditorContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, matchDispatchToProps)(_Editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9FZGl0b3JzL0VkaXRvckNvbnRhaW5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztFQUMvQixJQUFNQyxZQUFZLEdBQUdKLHFEQUFBLENBQXlCRyxLQUF6QixDQUFyQjtFQUNBLElBQU1HLGFBQWEsR0FBR04sc0RBQUEsQ0FBMEJHLEtBQTFCLENBQXRCO0VBRUEsSUFBSUssZUFBSjtFQUNBLElBQUlDLGdCQUFKO0VBQ0EsSUFBSUMsU0FBSjtFQUNBLElBQUlDLFVBQUo7O0VBQ0EsSUFBSVAsWUFBSixFQUFrQjtJQUNkTSxTQUFTLEdBQUdWLHNEQUFBLENBQTBCRyxLQUExQixFQUFpQ0MsWUFBWSxDQUFDUyxFQUE5QyxDQUFaO0lBQ0EsSUFBTUMsaUJBQWlCLEdBQUdkLDhEQUFBLENBQ3RCRyxLQURzQixFQUV0QkMsWUFBWSxDQUFDUyxFQUZTLENBQTFCOztJQUlBLElBQUlDLGlCQUFKLEVBQXVCO01BQ25CTixlQUFlLEdBQUdSLGdEQUFBLENBQW9CRyxLQUFwQixFQUEyQlcsaUJBQTNCLENBQWxCO0lBQ0gsQ0FGRCxNQUVPO01BQ0hOLGVBQWUsR0FBR1IsdURBQUEsQ0FDZEcsS0FEYyxFQUVkQyxZQUFZLENBQUNTLEVBRkMsQ0FBbEI7SUFJSDtFQUNKOztFQUNELElBQUlQLGFBQUosRUFBbUI7SUFDZkssVUFBVSxHQUFHWCx1REFBQSxDQUEyQkcsS0FBM0IsRUFBa0NHLGFBQWEsQ0FBQ08sRUFBaEQsQ0FBYjtJQUNBLElBQU1NLGtCQUFrQixHQUFHbkIsK0RBQUEsQ0FDdkJHLEtBRHVCLEVBRXZCRyxhQUFhLENBQUNPLEVBRlMsQ0FBM0I7O0lBSUEsSUFBSU0sa0JBQUosRUFBd0I7TUFDcEJWLGdCQUFnQixHQUFHVCxpREFBQSxDQUFxQkcsS0FBckIsRUFBNEJnQixrQkFBNUIsQ0FBbkI7SUFDSCxDQUZELE1BRU87TUFDSFYsZ0JBQWdCLEdBQUdULHdEQUFBLENBQ2ZHLEtBRGUsRUFFZkcsYUFBYSxDQUFDTyxFQUZDLENBQW5CO0lBSUg7RUFDSjs7RUFFRCxJQUFJLENBQUNWLEtBQUssQ0FBQ29CLElBQU4sQ0FBV0MsTUFBWixLQUF1QixDQUFDLENBQTVCLEVBQStCO0lBQzNCRCxJQUFJLEdBQUdwQixLQUFLLENBQUNvQixJQUFiO0VBQ0g7O0VBQ0QsT0FBTztJQUNIbkIsWUFBWSxFQUFaQSxZQURHO0lBRUhJLGVBQWUsRUFBZkEsZUFGRztJQUdIRixhQUFhLEVBQWJBLGFBSEc7SUFJSEcsZ0JBQWdCLEVBQWhCQSxnQkFKRztJQUtIZ0IsS0FBSyxFQUFFekIsb0RBQUEsQ0FBd0JHLEtBQXhCLEVBQStCLGNBQS9CLENBTEo7SUFNSHdCLElBQUksRUFBRXhCLEtBQUssQ0FBQ3dCLElBTlQ7SUFPSEMsWUFBWSxFQUFFNUIsa0RBQUEsQ0FBc0JHLEtBQXRCLENBUFg7SUFRSDBCLGtCQUFrQixFQUFFN0Isd0RBQUEsQ0FBNEJHLEtBQTVCLENBUmpCO0lBU0gyQixLQUFLLEVBQUU5Qiw4Q0FBQSxDQUFrQkcsS0FBbEIsQ0FUSjtJQVVINkIsYUFBYSxFQUFFaEMsbURBQUEsQ0FBdUJHLEtBQXZCLENBVlo7SUFXSDhCLGlCQUFpQixFQUFFakMsd0RBQUEsQ0FBNEJHLEtBQTVCO0VBWGhCLENBQVA7QUFhSCxDQXZERDs7QUF5REEsSUFBTWdDLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsUUFBRCxFQUFjO0VBQ3ZDLE9BQU87SUFDSEMsa0JBQWtCLEVBQUUsNEJBQUNDLEtBQUQsRUFBbUI7TUFDbkNGLFFBQVEsQ0FBQ25DLHlEQUFBLENBQTZCcUMsS0FBN0IsQ0FBRCxDQUFSO0lBQ0gsQ0FIRTtJQUlIRSx3QkFBd0IsRUFBRSxrQ0FBQ0MsU0FBRCxFQUF3QjtNQUM5Q0wsUUFBUSxDQUFDbkMsMkRBQUEsQ0FBK0J3QyxTQUEvQixDQUFELENBQVI7SUFDSCxDQU5FO0lBT0hFLGtCQUFrQixFQUFFLDRCQUFDQyxPQUFELEVBQWE7TUFDN0JSLFFBQVEsQ0FBQ25DLHVEQUFBLENBQTJCMkMsT0FBM0IsQ0FBRCxDQUFSOztNQUNBLElBQUlBLE9BQU8sS0FBSyxLQUFoQixFQUF1QjtRQUNuQixJQUFNQyxxQkFBcUIsR0FDdkI1QyxnRUFBQSxDQUFvQyxJQUFwQyxDQURKO1FBRUFtQyxRQUFRLENBQUNTLHFCQUFELENBQVI7UUFDQVQsUUFBUSxDQUFDbkMsZ0VBQUEsQ0FBb0MsSUFBcEMsQ0FBRCxDQUFSO01BQ0g7SUFDSixDQWZFO0lBZ0JIOEMsa0JBQWtCLEVBQUUsNEJBQUNDLElBQUQsRUFBZ0JDLE1BQWhCLEVBQTJCO01BQzNDYixRQUFRLENBQUNuQyx1REFBQSxDQUEyQitDLElBQTNCLEVBQWlDQyxNQUFqQyxDQUFELENBQVI7SUFDSCxDQWxCRTtJQW1CSEUsaUJBQWlCLEVBQUUsMkJBQUNILElBQUQsRUFBbUI7TUFDbENaLFFBQVEsQ0FBQ25DLG9EQUFBLENBQXdCK0MsSUFBeEIsQ0FBRCxDQUFSO0lBQ0g7RUFyQkUsQ0FBUDtBQXVCSCxDQXhCRDs7QUEwQkEsSUFBTUssZUFBZSxHQUFHdEQsb0RBQU8sQ0FBQ0csZUFBRCxFQUFrQmlDLG9CQUFsQixDQUFQLENBQStDdEMsK0NBQS9DLENBQXhCO0FBRUEsaUVBQWV3RCxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtaW51c2NsaWVudC8uL2FwcC9jb21wb25lbnRzL0VkaXRvcnMvRWRpdG9yQ29udGFpbmVyLmpzPzI4ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVkaXRvciBmcm9tIFwiLi9FZGl0b3JcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIHJlZHVjZXJzIGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCJhY3Rpb25zXCI7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IHJlZHVjZXJzLmdldFNlbGVjdGVkVGV4dChzdGF0ZSk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFRleHQyID0gcmVkdWNlcnMuZ2V0U2VsZWN0ZWRUZXh0MihzdGF0ZSk7XHJcblxyXG4gICAgbGV0IHNlbGVjdGVkV2l0bmVzcztcclxuICAgIGxldCBzZWxlY3RlZFdpdG5lc3MyO1xyXG4gICAgbGV0IHdpdG5lc3NlcztcclxuICAgIGxldCB3aXRuZXNzZXMyO1xyXG4gICAgaWYgKHNlbGVjdGVkVGV4dCkge1xyXG4gICAgICAgIHdpdG5lc3NlcyA9IHJlZHVjZXJzLmdldFRleHRXaXRuZXNzZXMoc3RhdGUsIHNlbGVjdGVkVGV4dC5pZCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRXaXRuZXNzSWQgPSByZWR1Y2Vycy5nZXRTZWxlY3RlZFRleHRXaXRuZXNzSWQoXHJcbiAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFRleHQuaWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFdpdG5lc3NJZCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFdpdG5lc3MgPSByZWR1Y2Vycy5nZXRXaXRuZXNzKHN0YXRlLCBzZWxlY3RlZFdpdG5lc3NJZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRXaXRuZXNzID0gcmVkdWNlcnMuZ2V0V29ya2luZ1dpdG5lc3MoXHJcbiAgICAgICAgICAgICAgICBzdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGV4dC5pZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZFRleHQyKSB7XHJcbiAgICAgICAgd2l0bmVzc2VzMiA9IHJlZHVjZXJzLmdldFRleHRXaXRuZXNzZXMyKHN0YXRlLCBzZWxlY3RlZFRleHQyLmlkKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFdpdG5lc3NJZDIgPSByZWR1Y2Vycy5nZXRTZWxlY3RlZFRleHRXaXRuZXNzSWQyKFxyXG4gICAgICAgICAgICBzdGF0ZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRUZXh0Mi5pZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkV2l0bmVzc0lkMikge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFdpdG5lc3MyID0gcmVkdWNlcnMuZ2V0V2l0bmVzczIoc3RhdGUsIHNlbGVjdGVkV2l0bmVzc0lkMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRXaXRuZXNzMiA9IHJlZHVjZXJzLmdldFdvcmtpbmdXaXRuZXNzMihcclxuICAgICAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXh0Mi5pZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXN0YXRlLnVzZXIudXNlcklkID09PSAtMSkge1xyXG4gICAgICAgIHVzZXIgPSBzdGF0ZS51c2VyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZWxlY3RlZFRleHQsXHJcbiAgICAgICAgc2VsZWN0ZWRXaXRuZXNzLFxyXG4gICAgICAgIHNlbGVjdGVkVGV4dDIsXHJcbiAgICAgICAgc2VsZWN0ZWRXaXRuZXNzMixcclxuICAgICAgICB0aXRsZTogcmVkdWNlcnMuZ2V0VHJhbnNsYXRpb24oc3RhdGUsIFwiaGVhZGVyLnRpdGxlXCIpLFxyXG4gICAgICAgIHBhZ2U6IHN0YXRlLnBhZ2UsXHJcbiAgICAgICAgaXNBbm5vdGF0aW5nOiByZWR1Y2Vycy5pc0Fubm90YXRpbmcoc3RhdGUpLFxyXG4gICAgICAgIGlzU2Vjb25kV2luZG93T3BlbjogcmVkdWNlcnMuaXNTZWNvbmRXaW5kb3dPcGVuKHN0YXRlKSxcclxuICAgICAgICB0aGVtZTogcmVkdWNlcnMuZ2V0VGhlbWUoc3RhdGUpLFxyXG4gICAgICAgIGlzUGFuZWxMaW5rZWQ6IHJlZHVjZXJzLmlzUGFuZWxMaW5rZWQoc3RhdGUpLFxyXG4gICAgICAgIHRleHRMaXN0SXNWaXNpYmxlOiByZWR1Y2Vycy5nZXRUZXh0TGlzdFZpc2libGUoc3RhdGUpLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hdGNoRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9uQ2hhbmdlZFRleHRXaWR0aDogKHdpZHRoOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5jaGFuZ2VkVGV4dExpc3RXaWR0aCh3aWR0aCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DaGFuZ2VkVGV4dExpc3RWaXNpYmxlOiAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMuY2hhbmdlZFRleHRMaXN0VmlzaWJsZShpc1Zpc2libGUpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZUlzQW5ub3RhdGluZzogKHBheWxvYWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5jaGFuZ2VJc0Fubm90YXRpbmcocGF5bG9hZCkpO1xyXG4gICAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc21pc3NUZXh0QW5ub3RhdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5jaGFuZ2VkQWN0aXZlVGV4dEFubm90YXRpb24obnVsbCk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChkaXNtaXNzVGV4dEFubm90YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5jaGFuZ2VkQWN0aXZlVGV4dEFubm90YXRpb24obnVsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNoYW5nZVdpbmRvd09wZW46IChkYXRhOiBib29sZWFuLCB0ZXh0SWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy50b2dnbGVTZWNvbmRXaW5kb3coZGF0YSwgdGV4dElkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNoYW5nZVBhbmVsTGluazogKGRhdGE6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5jaGFuZ2VQYW5lbExpbmsoZGF0YSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgRWRpdG9yQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hdGNoRGlzcGF0Y2hUb1Byb3BzKShFZGl0b3IpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQ29udGFpbmVyO1xyXG4iXSwibmFtZXMiOlsiRWRpdG9yIiwiUmVhY3QiLCJjb25uZWN0IiwicmVkdWNlcnMiLCJhY3Rpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJzZWxlY3RlZFRleHQiLCJnZXRTZWxlY3RlZFRleHQiLCJzZWxlY3RlZFRleHQyIiwiZ2V0U2VsZWN0ZWRUZXh0MiIsInNlbGVjdGVkV2l0bmVzcyIsInNlbGVjdGVkV2l0bmVzczIiLCJ3aXRuZXNzZXMiLCJ3aXRuZXNzZXMyIiwiZ2V0VGV4dFdpdG5lc3NlcyIsImlkIiwic2VsZWN0ZWRXaXRuZXNzSWQiLCJnZXRTZWxlY3RlZFRleHRXaXRuZXNzSWQiLCJnZXRXaXRuZXNzIiwiZ2V0V29ya2luZ1dpdG5lc3MiLCJnZXRUZXh0V2l0bmVzc2VzMiIsInNlbGVjdGVkV2l0bmVzc0lkMiIsImdldFNlbGVjdGVkVGV4dFdpdG5lc3NJZDIiLCJnZXRXaXRuZXNzMiIsImdldFdvcmtpbmdXaXRuZXNzMiIsInVzZXIiLCJ1c2VySWQiLCJ0aXRsZSIsImdldFRyYW5zbGF0aW9uIiwicGFnZSIsImlzQW5ub3RhdGluZyIsImlzU2Vjb25kV2luZG93T3BlbiIsInRoZW1lIiwiZ2V0VGhlbWUiLCJpc1BhbmVsTGlua2VkIiwidGV4dExpc3RJc1Zpc2libGUiLCJnZXRUZXh0TGlzdFZpc2libGUiLCJtYXRjaERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25DaGFuZ2VkVGV4dFdpZHRoIiwid2lkdGgiLCJjaGFuZ2VkVGV4dExpc3RXaWR0aCIsIm9uQ2hhbmdlZFRleHRMaXN0VmlzaWJsZSIsImlzVmlzaWJsZSIsImNoYW5nZWRUZXh0TGlzdFZpc2libGUiLCJjaGFuZ2VJc0Fubm90YXRpbmciLCJwYXlsb2FkIiwiZGlzbWlzc1RleHRBbm5vdGF0aW9uIiwiY2hhbmdlZEFjdGl2ZVRleHRBbm5vdGF0aW9uIiwib25DaGFuZ2VXaW5kb3dPcGVuIiwiZGF0YSIsInRleHRJZCIsInRvZ2dsZVNlY29uZFdpbmRvdyIsIm9uQ2hhbmdlUGFuZWxMaW5rIiwiY2hhbmdlUGFuZWxMaW5rIiwiRWRpdG9yQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/Editors/EditorContainer.js\n");

/***/ })

}]);