"use strict";
(() => {
var exports = {};
exports.id = 427;
exports.ids = [427];
exports.modules = {

/***/ 4891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var SiteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9711);
/* harmony import */ var components_ui_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(152);
/* harmony import */ var components_ui_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2860);
/* harmony import */ var components_pages_compare_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(230);
/* harmony import */ var components_ui_domainFallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8380);
/* harmony import */ var components_pages_compare_style_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7848);
/* harmony import */ var components_pages_compare_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(components_pages_compare_style_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui_Header__WEBPACK_IMPORTED_MODULE_3__, components_pages_compare_products__WEBPACK_IMPORTED_MODULE_5__]);
([components_ui_Header__WEBPACK_IMPORTED_MODULE_3__, components_pages_compare_products__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









async function getServerSideProps(ctx) {
    const props = {};
    // Get Site detail
    // Title, Logo, favicon, theme, color-scheme,
    const siteData = await fetch(config__WEBPACK_IMPORTED_MODULE_7__/* .endpoints.server.siteConfig */ .Hv.server.siteConfig, {
        headers: {
            origin: ctx.req.headers.host
        }
    }).then((res)=>res.json());
    if (siteData?.success) {
        props.siteData = siteData.data;
    }
    return {
        props: JSON.parse(JSON.stringify(props))
    };
}
const Page = ({ siteData  })=>{
    const { setSiteConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .D);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (siteData) {
            setSiteConfig(siteData);
        }
    }, [
        siteData
    ]);
    if (!siteData) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_domainFallback__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (components_pages_compare_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().checkout),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_compare_products__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2433:
/***/ ((module) => {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 8919:
/***/ ((module) => {

module.exports = require("phone");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4304:
/***/ ((module) => {

module.exports = require("react-date-range");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 7849:
/***/ ((module) => {

module.exports = require("react-dom/client");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 6157:
/***/ ((module) => {

module.exports = import("react-icons/bi");;

/***/ }),

/***/ 9650:
/***/ ((module) => {

module.exports = import("react-icons/bs");;

/***/ }),

/***/ 1301:
/***/ ((module) => {

module.exports = import("react-icons/fa");;

/***/ }),

/***/ 1780:
/***/ ((module) => {

module.exports = import("react-icons/fi");;

/***/ }),

/***/ 5521:
/***/ ((module) => {

module.exports = import("react-icons/go");;

/***/ }),

/***/ 1905:
/***/ ((module) => {

module.exports = import("react-icons/hi");;

/***/ }),

/***/ 3254:
/***/ ((module) => {

module.exports = import("react-icons/im");;

/***/ }),

/***/ 6840:
/***/ ((module) => {

module.exports = import("react-icons/io");;

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("react-icons/io5");;

/***/ }),

/***/ 4114:
/***/ ((module) => {

module.exports = import("react-icons/ri");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,946,150,774,441,382,230], () => (__webpack_exec__(4891)));
module.exports = __webpack_exports__;

})();