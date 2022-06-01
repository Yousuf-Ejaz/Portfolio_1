self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* harmony import */ var C_Users_ejaza_OneDrive_Documents_Development_Projects_Portfolio_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _ref;

var projects = [(_ref = {
  title: "House MarketPlace",
  description: "Built using React and Firebase. It is a full stack Application with all the CRUD operations. It can basically be used to post and view Listings. Furthermore, there can be two types of Listings: For Sale and for Rent. One can Login and view various available listings, listings presently on discount and also post their own listings ",
  image: "/images/house-marketplace.png",
  tags: ["React", "Firebase", "OAuth"],
  source: "https://github.com/Yousuf-Ejaz/house-marketplace"
}, (0,C_Users_ejaza_OneDrive_Documents_Development_Projects_Portfolio_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "source", "https://house-marketplace-ecru.vercel.app/"), (0,C_Users_ejaza_OneDrive_Documents_Development_Projects_Portfolio_1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "id", 0), _ref), {
  title: "E-Commerce",
  description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
  image: "/images/2.png",
  tags: ["React", "JavaScript"],
  source: "https://google.com",
  visit: "https://google.com",
  id: 1
}, {
  title: "WebRTC App",
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: "/images/3.jpg",
  tags: ["React", "WebRTC"],
  source: "https://google.com",
  visit: "https://google.com",
  id: 2
}, {
  title: "Unichat",
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: "/images/4.jpg",
  tags: ["React", "ChatEngine", "Firebase"],
  source: "https://google.com",
  visit: "https://google.com",
  id: 3
}];
var TimeLineData = [{
  year: 2017,
  text: "Started my journey"
}, {
  year: 2018,
  text: "Worked as a freelance developer"
}, {
  year: 2019,
  text: "Founded JavaScript Mastery"
}, {
  year: 2020,
  text: "Shared my projects with the world"
}, {
  year: 2021,
  text: "Started my own platform"
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTyxJQUFNQSxRQUFRLEdBQUc7QUFFdEJDLE9BQUssRUFBRSxtQkFGZTtBQUd0QkMsYUFBVyxFQUNWLDhVQUpxQjtBQUt0QkMsT0FBSyxFQUFFLCtCQUxlO0FBTXRCQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixPQUF0QixDQU5nQjtBQU90QkMsUUFBTSxFQUFFO0FBUGMsb0xBUWQsNENBUmMsZ0xBU2xCLENBVGtCLFVBV3ZCO0FBQ0NKLE9BQUssRUFBRSxZQURSO0FBRUNDLGFBQVcsRUFDVix1VUFIRjtBQUlDQyxPQUFLLEVBQUUsZUFKUjtBQUtDQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixDQUxQO0FBTUNDLFFBQU0sRUFBRSxvQkFOVDtBQU9DQyxPQUFLLEVBQUUsb0JBUFI7QUFRQ0MsSUFBRSxFQUFFO0FBUkwsQ0FYdUIsRUFxQnZCO0FBQ0NOLE9BQUssRUFBRSxZQURSO0FBRUNDLGFBQVcsRUFDViwrSkFIRjtBQUlDQyxPQUFLLEVBQUUsZUFKUjtBQUtDQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixDQUxQO0FBTUNDLFFBQU0sRUFBRSxvQkFOVDtBQU9DQyxPQUFLLEVBQUUsb0JBUFI7QUFRQ0MsSUFBRSxFQUFFO0FBUkwsQ0FyQnVCLEVBK0J2QjtBQUNDTixPQUFLLEVBQUUsU0FEUjtBQUVDQyxhQUFXLEVBQ1YsZ0lBSEY7QUFJQ0MsT0FBSyxFQUFFLGVBSlI7QUFLQ0MsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FMUDtBQU1DQyxRQUFNLEVBQUUsb0JBTlQ7QUFPQ0MsT0FBSyxFQUFFLG9CQVBSO0FBUUNDLElBQUUsRUFBRTtBQVJMLENBL0J1QixDQUFqQjtBQTJDQSxJQUFNQyxZQUFZLEdBQUcsQ0FDM0I7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDJCLEVBRTNCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYyQixFQUczQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMkIsRUFJM0I7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjJCLEVBSzNCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwyQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNmE4YmYzMjEwMjhlMmU4YmIxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuXHR7XG5cdFx0dGl0bGU6IFwiSG91c2UgTWFya2V0UGxhY2VcIixcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFwiQnVpbHQgdXNpbmcgUmVhY3QgYW5kIEZpcmViYXNlLiBJdCBpcyBhIGZ1bGwgc3RhY2sgQXBwbGljYXRpb24gd2l0aCBhbGwgdGhlIENSVUQgb3BlcmF0aW9ucy4gSXQgY2FuIGJhc2ljYWxseSBiZSB1c2VkIHRvIHBvc3QgYW5kIHZpZXcgTGlzdGluZ3MuIEZ1cnRoZXJtb3JlLCB0aGVyZSBjYW4gYmUgdHdvIHR5cGVzIG9mIExpc3RpbmdzOiBGb3IgU2FsZSBhbmQgZm9yIFJlbnQuIE9uZSBjYW4gTG9naW4gYW5kIHZpZXcgdmFyaW91cyBhdmFpbGFibGUgbGlzdGluZ3MsIGxpc3RpbmdzIHByZXNlbnRseSBvbiBkaXNjb3VudCBhbmQgYWxzbyBwb3N0IHRoZWlyIG93biBsaXN0aW5ncyBcIixcblx0XHRpbWFnZTogXCIvaW1hZ2VzL2hvdXNlLW1hcmtldHBsYWNlLnBuZ1wiLFxuXHRcdHRhZ3M6IFtcIlJlYWN0XCIsIFwiRmlyZWJhc2VcIiwgXCJPQXV0aFwiXSxcblx0XHRzb3VyY2U6IFwiaHR0cHM6Ly9naXRodWIuY29tL1lvdXN1Zi1FamF6L2hvdXNlLW1hcmtldHBsYWNlXCIsXG5cdFx0c291cmNlOiBcImh0dHBzOi8vaG91c2UtbWFya2V0cGxhY2UtZWNydS52ZXJjZWwuYXBwL1wiLFxuXHRcdGlkOiAwLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiRS1Db21tZXJjZVwiLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XCJXaGlsZSBidWlsZGluZyBpdCB5b3UncmUgZ29pbmcgdG8gbGVhcm4gbWFueSBhZHZhbmNlZCBSZWFjdCAmIEphdmFTY3JpcHQgdG9waWNzLCBhcyB3ZWxsIGFzIGhvdyB0byB1c2UgU3RyaXBlIGZvciBjYXJkIHRyYW5zYWN0aW9ucy4gT24gdG9wIG9mIHRoYXQsIGF0IHRoZSBlbmQgb2YgdGhlIHZpZGVvLCB5b3Ugd2lsbCBoYXZlIHRoaXMgdW5pcXVlIGFuZCBjb21wbGV4IHdlYnNob3AgYXBwIHRoYXQgeW91IHdpbGwgYmUgYWJsZSB0byBhZGQgdG8geW91ciBwb3J0Zm9saW8uIEFuZCB0cnVzdCBtZSwgZS1jb21tZXJjZSBhcHBsaWNhdGlvbnMgYXJlIGltcHJlc3NpdmUuXCIsXG5cdFx0aW1hZ2U6IFwiL2ltYWdlcy8yLnBuZ1wiLFxuXHRcdHRhZ3M6IFtcIlJlYWN0XCIsIFwiSmF2YVNjcmlwdFwiXSxcblx0XHRzb3VyY2U6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG5cdFx0dmlzaXQ6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG5cdFx0aWQ6IDEsXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJXZWJSVEMgQXBwXCIsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcblx0XHRpbWFnZTogXCIvaW1hZ2VzLzMuanBnXCIsXG5cdFx0dGFnczogW1wiUmVhY3RcIiwgXCJXZWJSVENcIl0sXG5cdFx0c291cmNlOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxuXHRcdHZpc2l0OiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxuXHRcdGlkOiAyLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiVW5pY2hhdFwiLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyB2aWRlbyB0dXRvcmlhbC4gSW4gdGhpcyB2aWRlbywgd2Ugd2lsbCBjcmVhdGUgYSBmdWxsIFJlYWx0aW1lIENoYXQgQXBwbGljYXRpb25cIixcblx0XHRpbWFnZTogXCIvaW1hZ2VzLzQuanBnXCIsXG5cdFx0dGFnczogW1wiUmVhY3RcIiwgXCJDaGF0RW5naW5lXCIsIFwiRmlyZWJhc2VcIl0sXG5cdFx0c291cmNlOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxuXHRcdHZpc2l0OiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxuXHRcdGlkOiAzLFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcblx0eyB5ZWFyOiAyMDE3LCB0ZXh0OiBcIlN0YXJ0ZWQgbXkgam91cm5leVwiIH0sXG5cdHsgeWVhcjogMjAxOCwgdGV4dDogXCJXb3JrZWQgYXMgYSBmcmVlbGFuY2UgZGV2ZWxvcGVyXCIgfSxcblx0eyB5ZWFyOiAyMDE5LCB0ZXh0OiBcIkZvdW5kZWQgSmF2YVNjcmlwdCBNYXN0ZXJ5XCIgfSxcblx0eyB5ZWFyOiAyMDIwLCB0ZXh0OiBcIlNoYXJlZCBteSBwcm9qZWN0cyB3aXRoIHRoZSB3b3JsZFwiIH0sXG5cdHsgeWVhcjogMjAyMSwgdGV4dDogXCJTdGFydGVkIG15IG93biBwbGF0Zm9ybVwiIH0sXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==