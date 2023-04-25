/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/_app.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUVkLFNBQVNBLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29uZS11aS1uZXh0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cbiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/api/getTradeList.js":
/*!***********************************!*\
  !*** ./pages/api/getTradeList.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getTradeList = (param)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`http://localhost:8080/api/trade?pageNo=${param.pageNo}&numOfRows=${param.numOfRows}`);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTradeList);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0VHJhZGVMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQ3pCLE1BQU1DLGVBQWUsQ0FBQ0MsUUFBVTtJQUM1QixPQUFPRixpREFBUyxDQUFDLENBQUMsdUNBQXVDLEVBQUVFLE1BQU1FLE1BQU0sQ0FBQyxXQUFXLEVBQUVGLE1BQU1HLFNBQVMsQ0FBQyxDQUFDO0FBQzFHO0FBRUEsaUVBQWVKLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmUtdWktbmV4dC8uL3BhZ2VzL2FwaS9nZXRUcmFkZUxpc3QuanM/YzcwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmNvbnN0IGdldFRyYWRlTGlzdCA9IChwYXJhbSkgPT4ge1xuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdHJhZGU/cGFnZU5vPSR7cGFyYW0ucGFnZU5vfSZudW1PZlJvd3M9JHtwYXJhbS5udW1PZlJvd3N9YClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0VHJhZGVMaXN0Il0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0VHJhZGVMaXN0IiwicGFyYW0iLCJnZXQiLCJwYWdlTm8iLCJudW1PZlJvd3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/getTradeList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _trade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade */ \"./pages/trade.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app */ \"./pages/_app.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _trade__WEBPACK_IMPORTED_MODULE_2__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _trade__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst MainPage = ()=>{\n    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_trade__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/index.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWtGO0FBQ3REO0FBQ0g7QUFFekIsTUFBTUssV0FBVyxJQUFNO0lBQ3JCLE1BQU1DLGNBQWMsSUFBSUwsOERBQVdBO0lBRW5DLHFCQUNFLDhEQUFDQyxzRUFBbUJBO1FBQUNLLFFBQVFEO2tCQUMzQiw0RUFBQ0gsOENBQUtBOzs7Ozs7Ozs7O0FBR1o7QUFFQSxpRUFBZUUsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29uZS11aS1uZXh0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIeWRyYXRlLCBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCBUcmFkZSBmcm9tIFwiLi90cmFkZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9fYXBwXCI7XG5cbmNvbnN0IE1haW5QYWdlID0gKCkgPT4ge1xuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpXG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxUcmFkZSAvPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTsiXSwibmFtZXMiOlsiSHlkcmF0ZSIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlRyYWRlIiwiQXBwIiwiTWFpblBhZ2UiLCJxdWVyeUNsaWVudCIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/trade.js":
/*!************************!*\
  !*** ./pages/trade.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_getTradeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/getTradeList */ \"./pages/api/getTradeList.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _api_getTradeList__WEBPACK_IMPORTED_MODULE_3__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _api_getTradeList__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst Trade = (props)=>{\n    const [pageNo1, setPageNo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [numOfRows, setnumOfRows] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10);\n    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([\n        \"trade\",\n        pageNo1\n    ], ()=>(0,_api_getTradeList__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pageInfo), {\n        keepPreviousData: true,\n        retry: 2\n    });\n    const data = query.data;\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: \"sds\"\n        }, void 0, false, {\n            fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/trade.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mz01-geunhyung/study/one-ui-next/pages/trade.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trade);\nconst getStaticProps = ()=>{\n    return {\n        props: {\n            pageNo: pageNo\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmFkZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEI7QUFDYztBQUU5QyxNQUFNRyxRQUFRLENBQUNDLFFBQVU7SUFDckIsTUFBTSxDQUFDQyxTQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNUSxRQUFRVCwrREFBUUEsQ0FBQztRQUFDO1FBQVNLO0tBQU8sRUFBRSxJQUFNSCw2REFBWUEsQ0FBQ1EsV0FBVztRQUNwRUMsa0JBQWtCLElBQUk7UUFDdEJDLE9BQU87SUFDWDtJQUNBLE1BQU1DLE9BQU9KLE1BQU1JLElBQUk7SUFDdkJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFDSSw4REFBQ0c7a0JBQ0csNEVBQUNDO3NCQUFHOzs7Ozs7Ozs7OztBQVFoQjtBQUVBLGlFQUFlZCxLQUFLQSxFQUFDO0FBRWQsTUFBTWUsaUJBQWlCLElBQU07SUFDaEMsT0FBTztRQUNIZCxPQUFPO1lBQ0hDLFFBQVFBO1FBQ1o7SUFDSjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmUtdWktbmV4dC8uL3BhZ2VzL3RyYWRlLmpzP2M0MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBnZXRUcmFkZUxpc3QgZnJvbSBcIi4vYXBpL2dldFRyYWRlTGlzdFwiO1xuXG5jb25zdCBUcmFkZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtwYWdlTm8sIHNldFBhZ2VOb10gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbbnVtT2ZSb3dzLCBzZXRudW1PZlJvd3NdID0gdXNlU3RhdGUoMTApO1xuICAgIGNvbnN0IHF1ZXJ5ID0gdXNlUXVlcnkoWyd0cmFkZScsIHBhZ2VOb10sICgpID0+IGdldFRyYWRlTGlzdChwYWdlSW5mbyksIHtcbiAgICAgICAga2VlcFByZXZpb3VzRGF0YTogdHJ1ZSxcbiAgICAgICAgcmV0cnk6IDJcbiAgICB9KVxuICAgIGNvbnN0IGRhdGEgPSBxdWVyeS5kYXRhXG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPnNkczwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIC8vIDx1bD5cbiAgICAgICAgLy8gICAgIHtkYXRhLmRhdGEubWFwKChjb3VudHJ5KSA9PiAoXG4gICAgICAgIC8vICAgICAgICAgPGxpPntjb3VudHJ5Lm5hbWV9PC9saT5cbiAgICAgICAgLy8gICAgICkpfVxuICAgICAgICAvLyA8L3VsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhZGU7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcGFnZU5vOiBwYWdlTm9cbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJ1c2VTdGF0ZSIsImdldFRyYWRlTGlzdCIsIlRyYWRlIiwicHJvcHMiLCJwYWdlTm8iLCJzZXRQYWdlTm8iLCJudW1PZlJvd3MiLCJzZXRudW1PZlJvd3MiLCJxdWVyeSIsInBhZ2VJbmZvIiwia2VlcFByZXZpb3VzRGF0YSIsInJldHJ5IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1bCIsImxpIiwiZ2V0U3RhdGljUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/trade.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();