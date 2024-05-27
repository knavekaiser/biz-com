(() => {
var exports = {};
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 2505:
/***/ ((module) => {

// Exports
module.exports = {
	"dynamicPage": "style_dynamicPage__bWErB"
};


/***/ }),

/***/ 8053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_ui_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(152);
/* harmony import */ var components_ui_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2860);
/* harmony import */ var components_ui_domainFallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8380);
/* harmony import */ var mammoth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5166);
/* harmony import */ var mammoth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mammoth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2905);
/* harmony import */ var components_pages_dynamic_style_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2505);
/* harmony import */ var components_pages_dynamic_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(components_pages_dynamic_style_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui_Header__WEBPACK_IMPORTED_MODULE_4__, html_react_parser__WEBPACK_IMPORTED_MODULE_8__]);
([components_ui_Header__WEBPACK_IMPORTED_MODULE_4__, html_react_parser__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











async function getServerSideProps(ctx) {
    const props = {};
    // Get Site detail
    // Title, Logo, favicon, theme, color-scheme,
    const siteData = await fetch(config__WEBPACK_IMPORTED_MODULE_9__/* .endpoints.server.siteConfig */ .Hv.server.siteConfig, {
        headers: {
            origin: ctx.req.headers.host
        }
    }).then((res)=>res.json());
    if (siteData?.success) {
        props.siteData = siteData.data;
    }
    let files = null;
    await fetch(config__WEBPACK_IMPORTED_MODULE_9__/* .endpoints.server.getDynamicPageFiles */ .Hv.server.getDynamicPageFiles + `/${ctx.query.path}`, {
        headers: {
            origin: ctx.req.headers.host
        }
    }).then((res)=>res.json()).then((data)=>{
        if (data.success) {
            props.metadata = data.data;
            files = data.data.files.map((item)=>item.url);
        }
    });
    if (files?.find((link)=>link.endsWith(".docx"))) {
        var options = {
        };
        props.content = await mammoth__WEBPACK_IMPORTED_MODULE_7___default().convertToHtml({
            buffer: await fetch(`${config__WEBPACK_IMPORTED_MODULE_9__/* .endpoints.server.baseApiUrl */ .Hv.server.baseApiUrl}${files.find((link)=>link.endsWith(".docx"))}`).then((res)=>res.arrayBuffer())
        }, options).then(async (result)=>{
            const styles = files?.find((link)=>link.endsWith(".css")) ? await fetch(`${config__WEBPACK_IMPORTED_MODULE_9__/* .endpoints.server.baseApiUrl */ .Hv.server.baseApiUrl}${files.find((link)=>link.endsWith(".css"))}`).then((res)=>res.text()).catch((err)=>console.log(err)) : null;
            return result.value ? (styles ? `<style scoped>${styles}</style>` : "") + result.value : null;
        }).catch((err)=>{
            return null;
        });
    }
    return {
        props: JSON.parse(JSON.stringify(props))
    };
}
const Item = ({ content , metadata , siteData  })=>{
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
        className: `${(components_pages_dynamic_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().dynamicPage)} dynamicPage`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: metadata?.title || siteData.siteConfig?.siteTitle
                    }),
                    metadata?.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: metadata.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:description",
                                content: metadata.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: metadata?.title || siteData.siteConfig?.siteTitle
                    }),
                    siteData?.favicon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: siteData.favicon
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: content ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_8__["default"])(content) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "404"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2433:
/***/ ((module) => {

"use strict";
module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 5166:
/***/ ((module) => {

"use strict";
module.exports = require("mammoth");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 8919:
/***/ ((module) => {

"use strict";
module.exports = require("phone");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4304:
/***/ ((module) => {

"use strict";
module.exports = require("react-date-range");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 7849:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/client");

/***/ }),

/***/ 1929:
/***/ ((module) => {

"use strict";
module.exports = require("react-select");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 2905:
/***/ ((module) => {

"use strict";
module.exports = import("html-react-parser");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 6157:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/bi");;

/***/ }),

/***/ 9650:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/bs");;

/***/ }),

/***/ 1301:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/fa");;

/***/ }),

/***/ 5521:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/go");;

/***/ }),

/***/ 1905:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/hi");;

/***/ }),

/***/ 6840:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/io");;

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/io5");;

/***/ }),

/***/ 4114:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/ri");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,946,150,774,441], () => (__webpack_exec__(8053)));
module.exports = __webpack_exports__;

})();