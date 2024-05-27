"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 9993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_sitemap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4279);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sitemap__WEBPACK_IMPORTED_MODULE_0__]);
next_sitemap__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getServerSideProps(ctx) {
    const { data: urls  } = await fetch(config__WEBPACK_IMPORTED_MODULE_1__/* .endpoints.server.sitemapUrls */ .Hv.server.sitemapUrls, {
        headers: {
            origin: ctx.req.headers.host
        }
    }).then((res)=>res.json());
    const fields = [
        ...urls.map((item)=>({
                loc: item,
                lastmod: new Date().toISOString(),
                priority: 0.7,
                changefreq: undefined
            }))
    ];
    return (0,next_sitemap__WEBPACK_IMPORTED_MODULE_0__.getServerSideSitemap)(ctx, fields);
}
const Default = ()=>null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4279:
/***/ ((module) => {

module.exports = import("next-sitemap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [150], () => (__webpack_exec__(9993)));
module.exports = __webpack_exports__;

})();