"use strict";
(() => {
var exports = {};
exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 80:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getTradeList = (param)=>{
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/api/trade?pageNo=${param.pageNo}&numOfRows=${param.numOfRows}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTradeList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(80));
module.exports = __webpack_exports__;

})();