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
      children: "The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
            "final": index === TOTAL_CAROUSEL_COUNT - 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
              index: index,
              id: "carousel__item-".concat(index),
              active: activeItem,
              onClick: function onClick(e) {
                return handleClick(e, index);
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
                children: ["".concat(item.year), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                  width: "208",
                  height: "6",
                  viewBox: "0 0 208 6",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                    fill: "url(#paint0_linear)",
                    "fill-opacity": "0.33"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                      id: "paint0_linear",
                      x1: "-4.30412e-10",
                      y1: "0.5",
                      x2: "208",
                      y2: "0.500295",
                      gradientUnits: "userSpaceOnUse",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        "stop-color": "white"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 13
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        offset: "0.79478",
                        "stop-color": "white",
                        "stop-opacity": "0"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                        columnNumber: 13
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 12
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 8
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: function onClick(e) {
            return handleClick(e, index);
          },
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 8
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 7
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiXSwibmFtZXMiOlsiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsInVzZVN0YXRlIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFXQTtBQU1BO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLHFFQUE3Qjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLCtDQUFRLENBQUMsQ0FBRCxDQUR0QjtBQUFBLE1BQ2ZDLFVBRGU7QUFBQSxNQUNIQyxhQURHOztBQUV0QixNQUFNQyxXQUFXLEdBQUdDLDZDQUFNLEVBQTFCOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUM5QixXQUFPRCxJQUFJLENBQUNFLFFBQUwsQ0FBYztBQUFFRCxVQUFJLEVBQUpBLElBQUY7QUFBUUUsY0FBUSxFQUFFO0FBQWxCLEtBQWQsQ0FBUDtBQUNBLEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFD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MTZiNzU4ZmUzMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcblx0Q2Fyb3VzZWxCdXR0b24sXG5cdENhcm91c2VsQnV0dG9uRG90LFxuXHRDYXJvdXNlbEJ1dHRvbnMsXG5cdENhcm91c2VsQ29udGFpbmVyLFxuXHRDYXJvdXNlbEl0ZW0sXG5cdENhcm91c2VsSXRlbUltZyxcblx0Q2Fyb3VzZWxJdGVtVGV4dCxcblx0Q2Fyb3VzZWxJdGVtVGl0bGUsXG5cdENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSxcbn0gZnJvbSBcIi4vVGltZUxpbmVTdHlsZXNcIjtcbmltcG9ydCB7XG5cdFNlY3Rpb24sXG5cdFNlY3Rpb25EaXZpZGVyLFxuXHRTZWN0aW9uVGV4dCxcblx0U2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCB7IFRpbWVMaW5lRGF0YSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gVGltZUxpbmVEYXRhLmxlbmd0aDtcblxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XG5cdGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xuXG5cdGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XG5cdFx0cmV0dXJuIG5vZGUuc2Nyb2xsVG8oeyBsZWZ0LCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGljayA9IChlLCBpKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcblx0XHRcdGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKFxuXHRcdFx0XHRjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICpcblx0XHRcdFx0XHQwLjcgKlxuXHRcdFx0XHRcdChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aClcblx0XHRcdCk7XG5cblx0XHRcdHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG5cdFx0XHRjb25zdCBpbmRleCA9IE1hdGgucm91bmQoXG5cdFx0XHRcdChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgL1xuXHRcdFx0XHRcdChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKlxuXHRcdFx0XHRcdFRpbWVMaW5lRGF0YS5sZW5ndGhcblx0XHRcdCk7XG5cblx0XHRcdHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG5cdC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG5cdFx0XHRzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XG5cdFx0fTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cblx0XHRcdDxTZWN0aW9uVGl0bGU+QWJvdXQgTWU8L1NlY3Rpb25UaXRsZT5cblx0XHRcdDxTZWN0aW9uVGV4dD5cblx0XHRcdFx0VGhlIHB1cnBvc2Ugb2YgSmF2YVNjcmlwdCBNYXN0ZXJ5IGlzIHRvIGhlbHAgYXNwaXJpbmcgYW5kXG5cdFx0XHRcdGVzdGFibGlzaGVkIGRldmVsb3BlcnMgdG8gdGFrZSB0aGVpciBkZXZlbG9wbWVudCBza2lsbHMgdG8gdGhlXG5cdFx0XHRcdG5leHQgbGV2ZWwgYW5kIGJ1aWxkIGF3ZXNvbWUgYXBwcy5cblx0XHRcdDwvU2VjdGlvblRleHQ+XG5cdFx0XHQ8Q2Fyb3VzZWxDb250YWluZXIgcmVmPXtjYXJvdXNlbFJlZn0gb25TY3JvbGw9e2hhbmRsZVNjcm9sbH0+XG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlXG5cdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXg9e2luZGV4fVxuXHRcdFx0XHRcdFx0XHRcdGlkPXtgY2Fyb3VzZWxfX2l0ZW0tJHtpbmRleH1gfVxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlSXRlbX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PENhcm91c2VsSXRlbVRpdGxlPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2Ake2l0ZW0ueWVhcn1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0PENhcm91c2VsSXRlbUltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjIwOFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDIwOCA2XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsLXJ1bGU9XCJldmVub2RkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGlwLXJ1bGU9XCJldmVub2RkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbC1vcGFjaXR5PVwiMC4zM1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkZWZzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaW5lYXJHcmFkaWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJwYWludDBfbGluZWFyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgxPVwiLTQuMzA0MTJlLTEwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHkxPVwiMC41XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgyPVwiMjA4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHkyPVwiMC41MDAyOTVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0b3Bcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0PVwiMC43OTQ3OFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0b3AtY29sb3I9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0b3Atb3BhY2l0eT1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpbmVhckdyYWRpZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2RlZnM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Nhcm91c2VsSXRlbUltZz5cblx0XHRcdFx0XHRcdFx0XHQ8L0Nhcm91c2VsSXRlbVRpdGxlPlxuXHRcdFx0XHRcdFx0XHRcdDxDYXJvdXNlbEl0ZW1UZXh0PntpdGVtLnRleHR9PC9DYXJvdXNlbEl0ZW1UZXh0PlxuXHRcdFx0XHRcdFx0XHQ8L0Nhcm91c2VsSXRlbT5cblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8Lz5cblx0XHRcdDwvQ2Fyb3VzZWxDb250YWluZXI+XG5cdFx0XHQ8Q2Fyb3VzZWxCdXR0b25zPlxuXHRcdFx0XHR7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PENhcm91c2VsQnV0dG9uXG5cdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdGluZGV4PXtpbmRleH1cblx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmVJdGVtfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PENhcm91c2VsQnV0dG9uRG90IGFjdGl2ZT17YWN0aXZlSXRlbX0gLz5cblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWxCdXR0b24+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L0Nhcm91c2VsQnV0dG9ucz5cblx0XHRcdDxTZWN0aW9uRGl2aWRlciAvPlxuXHRcdDwvU2VjdGlvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==