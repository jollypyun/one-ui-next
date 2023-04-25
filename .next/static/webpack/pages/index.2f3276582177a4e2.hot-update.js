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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst getTradeList = (params)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:8080/api/trade\", params);\n};\nconst Trade = ()=>{\n    _s();\n    const [pageNo, setPageNo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [numOfRow, setnumOfRow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"trade\",\n        pageNo\n    ], ()=>getTradeList(pageNo), {\n        keepPreviousData: true,\n        retry: 2\n    });\n    const data = query.data;\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: \"sds\"\n        }, void 0, false, {\n            fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/api/trade.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/api/trade.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Trade, \"o4sjpz9k5WmBaMEpOZ2eNLbGX20=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Trade;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trade);\nvar _c;\n$RefreshReg$(_c, \"Trade\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdHJhZGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdEO0FBQ3ZCO0FBQ087QUFFaEMsTUFBTUcsZUFBZSxDQUFDQyxTQUFXO0lBQzdCLE9BQU9ILGlEQUFTLENBQUMsbUNBQW1DRztBQUN4RDtBQUVBLE1BQU1FLFFBQVEsSUFBTTs7SUFDaEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNUyxRQUFRWCwrREFBUUEsQ0FBQztRQUFDO1FBQVNPO0tBQU8sRUFBRSxJQUFNSixhQUFhSSxTQUFTO1FBQ2xFSyxrQkFBa0IsSUFBSTtRQUN0QkMsT0FBTztJQUNYO0lBQ0EsTUFBTUMsT0FBT0gsTUFBTUcsSUFBSTtJQUN2QkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNJLDhEQUFDRztrQkFDRyw0RUFBQ0M7c0JBQUc7Ozs7Ozs7Ozs7O0FBUWhCO0dBbkJNWjs7UUFHWU4sMkRBQVFBOzs7S0FIcEJNO0FBcUJOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS90cmFkZS5qcz9mODFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgZ2V0VHJhZGVMaXN0ID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3RyYWRlXCIsIHBhcmFtcylcbn1cblxuY29uc3QgVHJhZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgW3BhZ2VObywgc2V0UGFnZU5vXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtudW1PZlJvdywgc2V0bnVtT2ZSb3ddID0gdXNlU3RhdGUoMTApO1xuICAgIGNvbnN0IHF1ZXJ5ID0gdXNlUXVlcnkoWyd0cmFkZScsIHBhZ2VOb10sICgpID0+IGdldFRyYWRlTGlzdChwYWdlTm8pLCB7XG4gICAgICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgICAgIHJldHJ5OiAyXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gcXVlcnkuZGF0YVxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5zZHM8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICAvLyA8dWw+XG4gICAgICAgIC8vICAgICB7ZGF0YS5kYXRhLm1hcCgoY291bnRyeSkgPT4gKFxuICAgICAgICAvLyAgICAgICAgIDxsaT57Y291bnRyeS5uYW1lfTwvbGk+XG4gICAgICAgIC8vICAgICApKX1cbiAgICAgICAgLy8gPC91bD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWRlOyJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImF4aW9zIiwidXNlU3RhdGUiLCJnZXRUcmFkZUxpc3QiLCJwYXJhbXMiLCJnZXQiLCJUcmFkZSIsInBhZ2VObyIsInNldFBhZ2VObyIsIm51bU9mUm93Iiwic2V0bnVtT2ZSb3ciLCJxdWVyeSIsImtlZXBQcmV2aW91c0RhdGEiLCJyZXRyeSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/trade.js\n"));

/***/ })

});