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

/***/ "./pages/trade.js":
/*!************************!*\
  !*** ./pages/trade.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_getTradeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/getTradeList */ \"./pages/api/getTradeList.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Trade = (props)=>{\n    var _query_data, _query_data_data, _query_data_data_data;\n    _s();\n    const [pageNo, setPageNo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [numOfRows, setNumOfRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const pageInfo = {\n        pageNo: pageNo,\n        numOfRows: numOfRows\n    };\n    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([\n        \"trade\",\n        pageInfo\n    ], async ()=>await (0,_api_getTradeList__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pageInfo), {\n        keepPreviousData: true,\n        refetchOnMount: false,\n        refetchOnWindowFocus: false\n    }).data;\n    const handlePaginationCahnge = (e, value)=>{\n        setPageNo(value);\n        router.push(\"?page=\".concat(value), undefined, {\n            shallow: true\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(query);\n    }, [\n        query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: (_query_data = query.data) === null || _query_data === void 0 ? void 0 : (_query_data_data = _query_data.data) === null || _query_data_data === void 0 ? void 0 : (_query_data_data_data = _query_data_data.data) === null || _query_data_data_data === void 0 ? void 0 : _query_data_data_data.map((country, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: country.name\n                    }, i, false, {\n                        fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/trade.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/trade.js\",\n                lineNumber: 31,\n                columnNumber: 14\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"sdsds\"\n            }, void 0, false, {\n                fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/trade.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/trade.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Trade, \"ehzoov2T/TPMvhpwCekE0rK81LM=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = Trade;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trade);\nvar _c;\n$RefreshReg$(_c, \"Trade\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmFkZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3RTtBQUM3QjtBQUNHO0FBQ047QUFFeEMsTUFBTUssUUFBUSxDQUFDQyxRQUFVO1FBMEJSQzs7SUF6QmIsTUFBSyxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3BDLE1BQUssQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMxQyxNQUFNVSxXQUFXO1FBQ2JKLFFBQVFBO1FBQ1JFLFdBQVdBO0lBQ2Y7SUFFQSxNQUFNSCxRQUFRUCwrREFBUUEsQ0FBQztRQUFDO1FBQVNZO0tBQVMsRUFBRSxVQUFXLE1BQU1ULDZEQUFZQSxDQUFDUyxXQUFXO1FBQ2pGQyxrQkFBa0IsSUFBSTtRQUN0QkMsZ0JBQWdCLEtBQUs7UUFDckJDLHNCQUFzQixLQUFLO0lBQy9CLEdBQUdDLElBQUk7SUFFUCxNQUFNQyx5QkFBeUIsQ0FBQ0MsR0FBR0MsUUFBVTtRQUN6Q1YsVUFBVVU7UUFDVkMsT0FBT0MsSUFBSSxDQUFDLFNBQWUsT0FBTkYsUUFBU0csV0FBVztZQUFDQyxTQUFTLElBQUk7UUFBQTtJQUMzRDtJQUVBdEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNadUIsUUFBUUMsR0FBRyxDQUFDbEI7SUFDaEIsR0FBRztRQUFDQTtLQUFNO0lBRVYscUJBQ0ksOERBQUNtQjs7MEJBQ0ksOERBQUNDOzBCQUNHcEIsQ0FBQUEsY0FBQUEsTUFBTVMsSUFBSSxjQUFWVCx5QkFBQUEsS0FBQUEsSUFBQUEsb0JBQUFBLFlBQVlTLGdEQUFaVCxLQUFBQSxJQUFBQSwwQ0FBa0JTLHFEQUFsQlQsS0FBQUEsSUFBQUEsc0JBQXdCcUIsSUFBSSxDQUFDQyxTQUFTQyxrQkFDbkMsOERBQUNDO2tDQUFZRixRQUFRRyxJQUFJO3VCQUFoQkY7Ozs7Ozs7Ozs7MEJBR2pCLDhEQUFDRzswQkFBRTs7Ozs7Ozs7Ozs7O0FBR2Y7R0FqQ001Qjs7UUFRWUwsMkRBQVFBOzs7S0FScEJLOztBQXVETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90cmFkZS5qcz9jNDI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBkZWh5ZHJhdGUsIHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBnZXRUcmFkZUxpc3QgZnJvbSBcIi4vYXBpL2dldFRyYWRlTGlzdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IFRyYWRlID0gKHByb3BzKSA9PiB7ICBcbiAgICBjb25zdFtwYWdlTm8sIHNldFBhZ2VOb10gPSB1c2VTdGF0ZSgxKVxuICAgIGNvbnN0W251bU9mUm93cywgc2V0TnVtT2ZSb3dzXSA9IHVzZVN0YXRlKDEwKVxuICAgIGNvbnN0IHBhZ2VJbmZvID0ge1xuICAgICAgICBwYWdlTm86IHBhZ2VObyxcbiAgICAgICAgbnVtT2ZSb3dzOiBudW1PZlJvd3NcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHVzZVF1ZXJ5KFsndHJhZGUnLCBwYWdlSW5mb10sIGFzeW5jKCkgPT4gYXdhaXQgZ2V0VHJhZGVMaXN0KHBhZ2VJbmZvKSwge1xuICAgICAgICBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLFxuICAgICAgICByZWZldGNoT25Nb3VudDogZmFsc2UsXG4gICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZVxuICAgIH0pLmRhdGFcblxuICAgIGNvbnN0IGhhbmRsZVBhZ2luYXRpb25DYWhuZ2UgPSAoZSwgdmFsdWUpID0+IHtcbiAgICAgICAgc2V0UGFnZU5vKHZhbHVlKVxuICAgICAgICByb3V0ZXIucHVzaChgP3BhZ2U9JHt2YWx1ZX1gLCB1bmRlZmluZWQsIHtzaGFsbG93OiB0cnVlfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgfSwgW3F1ZXJ5XSlcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7cXVlcnkuZGF0YT8uZGF0YT8uZGF0YT8ubWFwKChjb3VudHJ5LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9Pntjb3VudHJ5Lm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8cD5zZHNkczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICBwYWdlTm86IDEsXG4gICAgICAgIG51bU9mUm93czogMTBcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5xdWVyeS5wYWdlTm8pIHtcbiAgICAgICAgaW5mby5wYWdlTm8gPSBwYXJzZUludChjb250ZXh0LnF1ZXJ5LnBhZ2VObylcbiAgICB9XG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKVxuICAgIGF3YWl0IHF1ZXJ5Q2xpZW50LnByZWZldGNoUXVlcnkoXG4gICAgICAgIFtcInRyYWRlXCIsIHBhZ2VdLFxuICAgICAgICBhc3luYygpID0+IGF3YWl0IGdldFRyYWRlTGlzdChpbmZvKVxuICAgIClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7ZGVoeWRyYXRlZFN0YXRlIDogZGVoeWRyYXRlKHF1ZXJ5Q2xpZW50KX1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWRlOyJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0VHJhZGVMaXN0IiwidXNlUm91dGVyIiwiVHJhZGUiLCJwcm9wcyIsInF1ZXJ5IiwicGFnZU5vIiwic2V0UGFnZU5vIiwibnVtT2ZSb3dzIiwic2V0TnVtT2ZSb3dzIiwicGFnZUluZm8iLCJrZWVwUHJldmlvdXNEYXRhIiwicmVmZXRjaE9uTW91bnQiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsImRhdGEiLCJoYW5kbGVQYWdpbmF0aW9uQ2FobmdlIiwiZSIsInZhbHVlIiwicm91dGVyIiwicHVzaCIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJjb25zb2xlIiwibG9nIiwiZGl2IiwidWwiLCJtYXAiLCJjb3VudHJ5IiwiaSIsImxpIiwibmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/trade.js\n"));

/***/ })

});