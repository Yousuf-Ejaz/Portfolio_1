self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\ejaza\\OneDrive\\Documents\\Development Projects\\Portfolio_1\\src\\components\\TimeLine\\TimeLine.js",
    _this = undefined,
    _s = $RefreshSig$();





var TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

var Timeline = function Timeline() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var scroll = function scroll(node, left) {
    return node.scrollTo({
      left: left,
      behavior: "smooth"
    });
  };

  var handleClick = function handleClick(e, i) {
    e.preventDefault();

    if (carouselRef.current) {
      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleResize = function handleResize() {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "I am passionate about building excellent software that improves the lives of those around me. I love in creating software and"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 3
  }, _this);
};

_s(Timeline, "qE2Y7awmqdFA9rYczLkhjQwwAdI=");

_c = Timeline;
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

var _c;

$RefreshReg$(_c, "Timeline");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiXSwibmFtZXMiOlsiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsInVzZVN0YXRlIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVdBO0FBTUE7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0MscUVBQTdCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDY0MsK0NBQVEsQ0FBQyxDQUFELENBRHRCO0FBQUEsTUFDZkMsVUFEZTtBQUFBLE1BQ0hDLGFBREc7O0FBRXRCLE1BQU1DLFdBQVcsR0FBR0MsNkNBQU0sRUFBMUI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQzlCLFdBQU9ELElBQUksQ0FBQ0UsUUFBTCxDQUFjO0FBQUVELFVBQUksRUFBSkEsSUFBRjtBQUFRRSxjQUFRLEVBQUU7QUFBbEIsS0FBZCxDQUFQO0FBQ0EsR0FGRDs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUM3QkQsS0FBQyxDQUFDRSxjQUFGOztBQUVBLFFBQUlWLFdBQVcsQ0FBQ1csT0FBaEIsRUFBeUI7QUFDeEIsVUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDbEJkLFdBQVcsQ0FBQ1csT0FBWixDQUFvQkksV0FBcEIsR0FDQyxHQURELElBRUVOLENBQUMsR0FBR2QscUVBRk4sQ0FEa0IsQ0FBbkI7QUFNQU8sWUFBTSxDQUFDRixXQUFXLENBQUNXLE9BQWIsRUFBc0JDLFVBQXRCLENBQU47QUFDQTtBQUNELEdBWkQ7O0FBY0EsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUMxQixRQUFJaEIsV0FBVyxDQUFDVyxPQUFoQixFQUF5QjtBQUN4QixVQUFNTSxLQUFLLEdBQUdKLElBQUksQ0FBQ0ssS0FBTCxDQUNabEIsV0FBVyxDQUFDVyxPQUFaLENBQW9CQyxVQUFwQixJQUNDWixXQUFXLENBQUNXLE9BQVosQ0FBb0JJLFdBQXBCLEdBQWtDLEdBRG5DLENBQUQsR0FFQ3BCLHFFQUhZLENBQWQ7QUFNQUksbUJBQWEsQ0FBQ2tCLEtBQUQsQ0FBYjtBQUNBO0FBQ0QsR0FWRCxDQXRCc0IsQ0FrQ3RCO0FBQ0E7OztBQUNBRSxrREFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCbEIsWUFBTSxDQUFDRixXQUFXLENBQUNXLE9BQWIsRUFBc0IsQ0FBdEIsQ0FBTjtBQUNBLEtBRkQ7O0FBSUFVLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NGLFlBQWxDO0FBQ0EsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNDLDhEQUFDLDZEQUFEO0FBQVMsTUFBRSxFQUFDLE9BQVo7QUFBQSw0QkFDQyw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUMsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVNBLENBckREOztHQUFNeEIsUTs7S0FBQUEsUTtBQXVETiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYWY5OWExYmU1YTc0NTc5NTUzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuXHRDYXJvdXNlbEJ1dHRvbixcblx0Q2Fyb3VzZWxCdXR0b25Eb3QsXG5cdENhcm91c2VsQnV0dG9ucyxcblx0Q2Fyb3VzZWxDb250YWluZXIsXG5cdENhcm91c2VsSXRlbSxcblx0Q2Fyb3VzZWxJdGVtSW1nLFxuXHRDYXJvdXNlbEl0ZW1UZXh0LFxuXHRDYXJvdXNlbEl0ZW1UaXRsZSxcblx0Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlLFxufSBmcm9tIFwiLi9UaW1lTGluZVN0eWxlc1wiO1xuaW1wb3J0IHtcblx0U2VjdGlvbixcblx0U2VjdGlvbkRpdmlkZXIsXG5cdFNlY3Rpb25UZXh0LFxuXHRTZWN0aW9uVGl0bGUsXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVGltZUxpbmVEYXRhIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcblx0Y29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XG5cblx0Y29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcblx0XHRyZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuXHRcdFx0Y29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoXG5cdFx0XHRcdGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKlxuXHRcdFx0XHRcdDAuNyAqXG5cdFx0XHRcdFx0KGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKVxuXHRcdFx0KTtcblxuXHRcdFx0c2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIHNjcm9sbExlZnQpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG5cdFx0aWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcblx0XHRcdGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChcblx0XHRcdFx0KGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXG5cdFx0XHRcdFx0KGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqXG5cdFx0XHRcdFx0VGltZUxpbmVEYXRhLmxlbmd0aFxuXHRcdFx0KTtcblxuXHRcdFx0c2V0QWN0aXZlSXRlbShpbmRleCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcblx0Ly8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcblx0XHRcdHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcblx0XHR9O1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuXHRcdFx0PFNlY3Rpb25UaXRsZT5BYm91dCBNZTwvU2VjdGlvblRpdGxlPlxuXHRcdFx0PFNlY3Rpb25UZXh0PlxuXHRcdFx0XHRJIGFtIHBhc3Npb25hdGUgYWJvdXQgYnVpbGRpbmcgZXhjZWxsZW50IHNvZnR3YXJlIHRoYXQgaW1wcm92ZXNcblx0XHRcdFx0dGhlIGxpdmVzIG9mIHRob3NlIGFyb3VuZCBtZS4gSSBsb3ZlIGluIGNyZWF0aW5nIHNvZnR3YXJlIGFuZCBcblx0XHRcdDwvU2VjdGlvblRleHQ+XG5cdFx0PC9TZWN0aW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XG4iXSwic291cmNlUm9vdCI6IiJ9