"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/api/trade.js":
/*!****************************!*\
  !*** ./pages/api/trade.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst getTradeList = async (params)=>{\n    return await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:8080/api/trade\", params);\n};\nconst Trade = ()=>{\n    _s();\n    const [pageNo, setPageNo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [numOfRow, setnumOfRow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"trade\",\n        pageNo\n    ], ()=>getTradeList(pageNo), {\n        retry: 4\n    });\n    const data = query.data;\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: data.data.map((country)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: country.name\n            }, void 0, false, {\n                fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/api/trade.js\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/api/trade.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Trade, \"o4sjpz9k5WmBaMEpOZ2eNLbGX20=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Trade;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trade);\nvar _c;\n$RefreshReg$(_c, \"Trade\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdHJhZGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdEO0FBQ3ZCO0FBQ087QUFFaEMsTUFBTUcsZUFBZSxPQUFNQyxTQUFXO0lBQ2xDLE9BQU8sTUFBTUgsaURBQVMsQ0FBQyxtQ0FBbUNHO0FBQzlEO0FBRUEsTUFBTUUsUUFBUSxJQUFNOztJQUNoQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1TLFFBQVFYLCtEQUFRQSxDQUFDO1FBQUM7UUFBU087S0FBTyxFQUFFLElBQU1KLGFBQWFJLFNBQVM7UUFDbEVLLE9BQU87SUFDWDtJQUNBLE1BQU1DLE9BQU9GLE1BQU1FLElBQUk7SUFDdkJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFDSSw4REFBQ0c7a0JBQ0lILEtBQUtBLElBQUksQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLHdCQUNaLDhEQUFDQzswQkFBSUQsUUFBUUUsSUFBSTs7Ozs7Ozs7Ozs7QUFJakM7R0FmTWQ7O1FBR1lOLDJEQUFRQTs7O0tBSHBCTTtBQWlCTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvdHJhZGUuanM/ZjgxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IGdldFRyYWRlTGlzdCA9IGFzeW5jKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3RyYWRlXCIsIHBhcmFtcylcbn1cblxuY29uc3QgVHJhZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgW3BhZ2VObywgc2V0UGFnZU5vXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtudW1PZlJvdywgc2V0bnVtT2ZSb3ddID0gdXNlU3RhdGUoMTApO1xuICAgIGNvbnN0IHF1ZXJ5ID0gdXNlUXVlcnkoWyd0cmFkZScsIHBhZ2VOb10sICgpID0+IGdldFRyYWRlTGlzdChwYWdlTm8pLCB7XG4gICAgICAgIHJldHJ5OiA0XG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gcXVlcnkuZGF0YVxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtkYXRhLmRhdGEubWFwKChjb3VudHJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpPntjb3VudHJ5Lm5hbWV9PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhZGU7Il0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiYXhpb3MiLCJ1c2VTdGF0ZSIsImdldFRyYWRlTGlzdCIsInBhcmFtcyIsImdldCIsIlRyYWRlIiwicGFnZU5vIiwic2V0UGFnZU5vIiwibnVtT2ZSb3ciLCJzZXRudW1PZlJvdyIsInF1ZXJ5IiwicmV0cnkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVsIiwibWFwIiwiY291bnRyeSIsImxpIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/trade.js\n"));

/***/ })

});