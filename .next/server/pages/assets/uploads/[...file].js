"use strict";
(() => {
var exports = {};
exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ File),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1150);


const getServerSideProps = async (ctx)=>{
    // const file = await fetch(`${endpoints.server.baseApiUrl}${ctx.resolvedUrl}`, {
    //   headers: { origin: ctx.req.headers.host },
    // }).then((res) => res.blob());
    // console.log(ctx.res);
    // return { props: {} };
    return {
        redirect: {
            destination: `${config__WEBPACK_IMPORTED_MODULE_1__/* .endpoints.server.baseApiUrl */ .Hv.server.baseApiUrl}${ctx.resolvedUrl}`,
            permanent: false
        }
    };
// return ctx.res.sendFile(file);
};
function File({ url  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "ulr"
    });
}


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,150], () => (__webpack_exec__(344)));
module.exports = __webpack_exports__;

})();