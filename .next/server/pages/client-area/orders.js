(() => {
var exports = {};
exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 1314:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "checkout_container__wAtOP",
	"summary": "checkout_summary__tTpw_",
	"detail": "checkout_detail__SGew3",
	"actions": "checkout_actions__xszzQ",
	"forms": "checkout_forms__AL7Ec",
	"contact": "checkout_contact__8ij8y",
	"address": "checkout_address__oJrh_",
	"products": "checkout_products__I2jqv",
	"product": "checkout_product__IIiL1"
};


/***/ }),

/***/ 3291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(846);
/* harmony import */ var _styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6159);
/* harmony import */ var _styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_2___default().clientDashboard),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 1423:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7807);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1150);
/* harmony import */ var _styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6159);
/* harmony import */ var _styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3291);
/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8824);
/* harmony import */ var SiteContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9711);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_modal__WEBPACK_IMPORTED_MODULE_5__]);
components_modal__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Orders = ()=>{
    const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { get: getOrders , loading  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.orders */ .Hv.orders);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getOrders().then(({ data  })=>{
            if (data && data.success) {
                return setOrders(data.data);
            } else if (data) {
                (0,components_modal__WEBPACK_IMPORTED_MODULE_5__/* .Prompt */ .N)({
                    type: "error",
                    message: data?.message
                });
            }
        }).catch((err)=>(0,components_modal__WEBPACK_IMPORTED_MODULE_5__/* .Prompt */ .N)({
                type: "error",
                message: err.message
            }));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content)} ${(_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().orders)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "Orders"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().items),
                    children: orders.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Order, {
                            order: item
                        }, item._id))
                })
            ]
        })
    });
};
const Order = ({ order  })=>{
    const { siteConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_6__/* .SiteContext */ .D);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().order),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().products),
                children: order.products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Product, {
                        product: product
                    }, product._id))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().state),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().price),
                        children: [
                            siteConfig.siteConfig?.currency,
                            " ",
                            order.products.reduce((p, c)=>p + (c.product.price + (c.variant?.price || 0)) * (c.qty || 1), 0).toLocaleString()
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().status),
                        children: siteConfig?.siteConfig?.orderFields.find((item)=>item.name === "status")?.options?.find((item)=>item.value === order.status)?.label || order.status
                    })
                ]
            })
        ]
    });
};
const Product = ({ product  })=>{
    const { siteConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_6__/* .SiteContext */ .D);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().product),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().thumbnail),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                    src: "https://crm.comify.in/" + (product.variant?.images || product.product.images)[0],
                    height: 120,
                    width: 120,
                    alt: product.title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().productDetail),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: product.product.title
                    }),
                    "qty" in product && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Detail, {
                        label: "Qty",
                        value: product.qty
                    }),
                    siteConfig?.siteConfig?.orderFields?.find((item)=>item.name === "products")?.fields.filter((item)=>![
                            "product",
                            "variant",
                            "qty"
                        ].includes(item.name)).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Detail, {
                            label: item.label,
                            value: product[item.name]
                        }, item.name))
                ]
            })
        ]
    });
};
const Detail = ({ label , value  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_8___default().detail),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                children: label
            }),
            ": ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: value
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Orders);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3733:
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
/* harmony import */ var components_ui_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(152);
/* harmony import */ var components_ui_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2860);
/* harmony import */ var components_ui_domainFallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8380);
/* harmony import */ var components_pages_checkout_styles_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1314);
/* harmony import */ var components_pages_checkout_styles_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(components_pages_checkout_styles_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1150);
/* harmony import */ var components_pages_clientArea_orders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1423);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7425);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui_Header__WEBPACK_IMPORTED_MODULE_3__, components_pages_clientArea_orders__WEBPACK_IMPORTED_MODULE_7__, react_icons_ai__WEBPACK_IMPORTED_MODULE_8__]);
([components_ui_Header__WEBPACK_IMPORTED_MODULE_3__, components_pages_clientArea_orders__WEBPACK_IMPORTED_MODULE_7__, react_icons_ai__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










async function getServerSideProps(ctx) {
    const props = {};
    const siteData = await fetch(config__WEBPACK_IMPORTED_MODULE_6__/* .endpoints.server.siteConfig */ .Hv.server.siteConfig, {
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
    const { setSiteConfig , user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .D);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (siteData) {
            setSiteConfig(siteData);
        }
    }, [
        siteData
    ]);
    if (!siteData) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_domainFallback__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
    }
    if (!user) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "privateRouteFallback",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "icon",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineLock, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Please log in to continue!"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (components_pages_checkout_styles_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().checkout),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_clientArea_orders__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
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

"use strict";
module.exports = require("@react-google-maps/api");

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

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 7425:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/ai");;

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
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,946,150,774,441,846], () => (__webpack_exec__(3733)));
module.exports = __webpack_exports__;

})();