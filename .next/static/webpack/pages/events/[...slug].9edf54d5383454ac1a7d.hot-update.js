webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FilteredEvents; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummyData */ \"./dummyData.js\");\n/* harmony import */ var _components_events_EventList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/EventList */ \"./components/events/EventList.js\");\n/* harmony import */ var _results_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./results-title */ \"./pages/events/results-title.js\");\n/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/Button */ \"./components/ui/Button.js\");\n\n\n\nvar _jsxFileName = \"/Users/martinfeuillet/Desktop/vs code/next/next-js-course/nextjs-course-code/pages/events/[...slug].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction FilteredEvents() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var filterData = router.query.slug;\n\n  if (!filterData) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 16\n    }, this);\n  }\n\n  var filteredYear = filterData[0];\n  var filteredMonth = filterData[1];\n  var numYear = +filteredYear;\n  var numMonth = +filteredMonth;\n\n  if (isNaN(numMonth) || isNaN(numYear) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ErrorAlert, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Invalid filter. Please adjust your values\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 17\n        }, this), \";\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ui_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            link: \"/events\",\n            children: \"Show All Events\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }, this)\n    }, void 0, false);\n  }\n\n  var filterEvents = Object(_dummyData__WEBPACK_IMPORTED_MODULE_3__[\"getFilteredEvents\"])({\n    year: numYear,\n    month: numMonth\n  });\n\n  if (!filterEvents || filterEvents.length === 0) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"No events found for the chosen filter!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, this), \";\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ui_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          link: \"/events\",\n          children: \"Show All Events\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true);\n  }\n\n  var date = new Date(numYear, numMonth - 1);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_results_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      date: date\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_EventList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      items: filterEvents\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(FilteredEvents, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = FilteredEvents;\n\nvar _c;\n\n$RefreshReg$(_c, \"FilteredEvents\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz85ZGRmIl0sIm5hbWVzIjpbIkZpbHRlcmVkRXZlbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlsdGVyRGF0YSIsInF1ZXJ5Iiwic2x1ZyIsImZpbHRlcmVkWWVhciIsImZpbHRlcmVkTW9udGgiLCJudW1ZZWFyIiwibnVtTW9udGgiLCJpc05hTiIsImZpbHRlckV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIiwieWVhciIsIm1vbnRoIiwibGVuZ3RoIiwiZGF0ZSIsIkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFDckMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQWhDOztBQUVBLE1BQUksQ0FBQ0YsVUFBTCxFQUFpQjtBQUNiLHdCQUFPO0FBQUcsZUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUVELE1BQU1HLFlBQVksR0FBR0gsVUFBVSxDQUFDLENBQUQsQ0FBL0I7QUFDQSxNQUFNSSxhQUFhLEdBQUdKLFVBQVUsQ0FBQyxDQUFELENBQWhDO0FBRUEsTUFBTUssT0FBTyxHQUFHLENBQUNGLFlBQWpCO0FBQ0EsTUFBTUcsUUFBUSxHQUFHLENBQUNGLGFBQWxCOztBQUVBLE1BQ0lHLEtBQUssQ0FBQ0QsUUFBRCxDQUFMLElBQ0FDLEtBQUssQ0FBQ0YsT0FBRCxDQURMLElBRUFBLE9BQU8sR0FBRyxJQUZWLElBR0FBLE9BQU8sR0FBRyxJQUhWLElBSUFDLFFBQVEsR0FBRyxFQUpYLElBS0FBLFFBQVEsR0FBRyxDQU5mLEVBT0U7QUFDRSx3QkFDSTtBQUFBLDZCQUNBLHFFQUFDLFVBQUQ7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixvQkFFSTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGlDQUNJLHFFQUFDLDZEQUFEO0FBQVEsZ0JBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxxQkFESjtBQVVIOztBQUVELE1BQU1FLFlBQVksR0FBR0Msb0VBQWlCLENBQUM7QUFDbkNDLFFBQUksRUFBRUwsT0FENkI7QUFFbkNNLFNBQUssRUFBRUw7QUFGNEIsR0FBRCxDQUF0Qzs7QUFLQSxNQUFJLENBQUNFLFlBQUQsSUFBaUJBLFlBQVksQ0FBQ0ksTUFBYixLQUF3QixDQUE3QyxFQUFnRDtBQUM1Qyx3QkFDSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosb0JBRUk7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDSSxxRUFBQyw2REFBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUEsb0JBREo7QUFRSDs7QUFFRCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTVCxPQUFULEVBQWtCQyxRQUFRLEdBQUcsQ0FBN0IsQ0FBYjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsc0RBQUQ7QUFBYyxVQUFJLEVBQUVPO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLG9FQUFEO0FBQVcsV0FBSyxFQUFFTDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQU1IOztHQTNEdUJYLGM7VUFDTEUscUQ7OztLQURLRixjIiwiZmlsZSI6Ii4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0RmlsdGVyZWRFdmVudHMgfSBmcm9tIFwiLi4vLi4vZHVtbXlEYXRhXCI7XG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9FdmVudExpc3RcIjtcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSBcIi4vcmVzdWx0cy10aXRsZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9CdXR0b25cIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJlZEV2ZW50cygpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGZpbHRlckRhdGEgPSByb3V0ZXIucXVlcnkuc2x1ZztcblxuICAgIGlmICghZmlsdGVyRGF0YSkge1xuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiY2VudGVyXCI+TG9hZGluZzwvcD47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcbiAgICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXTtcblxuICAgIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xuICAgIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG5cbiAgICBpZiAoXG4gICAgICAgIGlzTmFOKG51bU1vbnRoKSB8fFxuICAgICAgICBpc05hTihudW1ZZWFyKSB8fFxuICAgICAgICBudW1ZZWFyID4gMjAzMCB8fFxuICAgICAgICBudW1ZZWFyIDwgMjAyMSB8fFxuICAgICAgICBudW1Nb250aCA+IDEyIHx8XG4gICAgICAgIG51bU1vbnRoIDwgMVxuICAgICkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxFcnJvckFsZXJ0PlxuICAgICAgICAgICAgICAgIDxwPkludmFsaWQgZmlsdGVyLiBQbGVhc2UgYWRqdXN0IHlvdXIgdmFsdWVzPC9wPjtcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxpbms9XCIvZXZlbnRzXCI+U2hvdyBBbGwgRXZlbnRzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Vycm9yQWxlcnQ+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJFdmVudHMgPSBnZXRGaWx0ZXJlZEV2ZW50cyh7XG4gICAgICAgIHllYXI6IG51bVllYXIsXG4gICAgICAgIG1vbnRoOiBudW1Nb250aCxcbiAgICB9KTtcblxuICAgIGlmICghZmlsdGVyRXZlbnRzIHx8IGZpbHRlckV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHA+Tm8gZXZlbnRzIGZvdW5kIGZvciB0aGUgY2hvc2VuIGZpbHRlciE8L3A+O1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGluaz1cIi9ldmVudHNcIj5TaG93IEFsbCBFdmVudHM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShudW1ZZWFyLCBudW1Nb250aCAtIDEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxSZXN1bHRzVGl0bGUgZGF0ZT17ZGF0ZX0gLz5cbiAgICAgICAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlckV2ZW50c30gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n");

/***/ })

})