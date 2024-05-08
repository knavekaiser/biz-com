exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 6159:
/***/ ((module) => {

// Exports
module.exports = {
	"clientDashboard": "clientArea_clientDashboard__pbVyb",
	"sidebar": "clientArea_sidebar__yi9Jx",
	"links": "clientArea_links__6AFP1",
	"active": "clientArea_active__ulIWq",
	"disabled": "clientArea_disabled__rrW1I",
	"tag": "clientArea_tag__s3vb8",
	"content": "clientArea_content__bepCT",
	"orders": "clientArea_orders__3iPXl",
	"items": "clientArea_items__CeJNX",
	"order": "clientArea_order__dZjAi",
	"products": "clientArea_products__ZTEsZ",
	"product": "clientArea_product__wXZJW",
	"thumbnail": "clientArea_thumbnail__9UEEh",
	"productDetail": "clientArea_productDetail__HXg8B",
	"detail": "clientArea_detail__w9Yv1",
	"actions": "clientArea_actions__QkSof",
	"devider": "clientArea_devider___EfJN",
	"qty": "clientArea_qty__Dq6SU",
	"price": "clientArea_price__OOc4x",
	"state": "clientArea_state__yhCWl",
	"status": "clientArea_status__3ZuvO",
	"profile": "clientArea_profile__yHqJ5",
	"contact": "clientArea_contact__XLe3n",
	"address": "clientArea_address__PcQsk"
};


/***/ }),

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1150);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6159);
/* harmony import */ var _styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const Sidebar = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const routes = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)([
        {
            label: "Orders",
            path: config__WEBPACK_IMPORTED_MODULE_1__/* .paths.clientArea.orders */ .Hb.clientArea.orders
        },
        {
            label: "Payments",
            path: config__WEBPACK_IMPORTED_MODULE_1__/* .paths.clientArea.payments */ .Hb.clientArea.payments,
            disabled: true,
            tag: "Soon"
        },
        {
            label: "Profile",
            path: config__WEBPACK_IMPORTED_MODULE_1__/* .paths.clientArea.profile */ .Hb.clientArea.profile
        }
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sidebar),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_5___default().links),
            children: routes.current.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: item.path,
                    className: `${router.pathname === item.path ? (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active) : ""} ${item.disabled ? (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_5___default().disabled) : ""}`,
                    tabIndex: item.disabled ? "1" : "0",
                    children: [
                        item.label,
                        item.tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_clientArea_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tag),
                            children: item.tag
                        })
                    ]
                }, item.path))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ })

};
;