self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\ejaza\\OneDrive\\Documents\\Development Projects\\Portfolio_1\\src\\components\\Acomplishments\\Acomplishments.js",
    _this = undefined;




var data = [{
  number: 20,
  text: "Open Source Projects"
}, {
  number: 1000,
  text: "Students"
}, {
  number: 1900,
  text: "Github Followers"
}, {
  number: 5000,
  text: "Github Stars"
}];

var Acomplishments = function Acomplishments() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      children: "Personal Achievements"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
      children: data.map(function (card, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
            children: "".concat(card.number, "+")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 6
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
            children: card.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 6
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 5
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 2
  }, _this);
};

_c = Acomplishments;
/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

var _c;

$RefreshReg$(_c, "Acomplishments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiZGF0YSIsIm51bWJlciIsInRleHQiLCJBY29tcGxpc2htZW50cyIsIm1hcCIsImNhcmQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFLQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNaO0FBQUVDLFFBQU0sRUFBRSxFQUFWO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQURZLEVBRVo7QUFBRUQsUUFBTSxFQUFFLElBQVY7QUFBZ0JDLE1BQUksRUFBRTtBQUF0QixDQUZZLEVBR1o7QUFBRUQsUUFBTSxFQUFFLElBQVY7QUFBZ0JDLE1BQUksRUFBRTtBQUF0QixDQUhZLEVBSVo7QUFBRUQsUUFBTSxFQUFFLElBQVY7QUFBZ0JDLE1BQUksRUFBRTtBQUF0QixDQUpZLENBQWI7O0FBT0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHNCQUN0Qiw4REFBQyw2REFBRDtBQUFBLDRCQUNDLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFFQyw4REFBQyx3REFBRDtBQUFBLGdCQUNFSCxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDVCw4REFBQyxzREFBRDtBQUFBLGtDQUNDLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQVlELElBQUksQ0FBQ0osTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUMsOERBQUMsMERBQUQ7QUFBQSxzQkFBVUksSUFBSSxDQUFDSDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQ7QUFBQSxXQUFVSSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFUO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBVUMsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURzQjtBQUFBLENBQXZCOztLQUFNSCxjO0FBZU4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmMwMTdkOWZjOTdmNzUzZTVkOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcblx0U2VjdGlvbixcblx0U2VjdGlvbkRpdmlkZXIsXG5cdFNlY3Rpb25UaXRsZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XG5pbXBvcnQgeyBCb3gsIEJveGVzLCBCb3hOdW0sIEJveFRleHQgfSBmcm9tIFwiLi9BY29tcGxpc2htZW50c1N0eWxlc1wiO1xuXG5jb25zdCBkYXRhID0gW1xuXHR7IG51bWJlcjogMjAsIHRleHQ6IFwiT3BlbiBTb3VyY2UgUHJvamVjdHNcIiB9LFxuXHR7IG51bWJlcjogMTAwMCwgdGV4dDogXCJTdHVkZW50c1wiIH0sXG5cdHsgbnVtYmVyOiAxOTAwLCB0ZXh0OiBcIkdpdGh1YiBGb2xsb3dlcnNcIiB9LFxuXHR7IG51bWJlcjogNTAwMCwgdGV4dDogXCJHaXRodWIgU3RhcnNcIiB9LFxuXTtcblxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoKSA9PiAoXG5cdDxTZWN0aW9uPlxuXHRcdDxTZWN0aW9uVGl0bGU+UGVyc29uYWwgQWNoaWV2ZW1lbnRzPC9TZWN0aW9uVGl0bGU+XG5cdFx0PEJveGVzPlxuXHRcdFx0e2RhdGEubWFwKChjYXJkLCBpbmRleCkgPT4gKFxuXHRcdFx0XHQ8Qm94IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdDxCb3hOdW0+e2Ake2NhcmQubnVtYmVyfStgfTwvQm94TnVtPlxuXHRcdFx0XHRcdDxCb3hUZXh0PntjYXJkLnRleHR9PC9Cb3hUZXh0PlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdCkpfVxuXHRcdDwvQm94ZXM+XG5cdFx0PFNlY3Rpb25EaXZpZGVyIC8+XG5cdDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFjb21wbGlzaG1lbnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==