exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 8511:
/***/ ((module) => {

// Exports
module.exports = {
	"categories": "categories_categories__MKcxU",
	"category": "categories_category__xdbMO"
};


/***/ }),

/***/ 2527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Shelves)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7807);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1150);
/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8824);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3254);
/* harmony import */ var _styles_categories_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8511);
/* harmony import */ var _styles_categories_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_categories_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_modal__WEBPACK_IMPORTED_MODULE_5__, react_icons_im__WEBPACK_IMPORTED_MODULE_6__]);
([components_modal__WEBPACK_IMPORTED_MODULE_5__, react_icons_im__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Shelves() {
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { get: getCategories , loading  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_4__/* .endpoints.landingPageCategories */ .Hv.landingPageCategories);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getCategories().then(({ data  })=>{
            if (data?.success) {
                setCategories(data.data);
            }
        }).catch((err)=>(0,components_modal__WEBPACK_IMPORTED_MODULE_5__/* .Prompt */ .N)({
                type: "error",
                message: err.message
            }));
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_styles_categories_module_scss__WEBPACK_IMPORTED_MODULE_8___default().loading)}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImSpinner8, {
                className: "spinner"
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_categories_module_scss__WEBPACK_IMPORTED_MODULE_8___default().categories),
        children: categories?.length > 0 && categories?.map((cat, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: {
                    pathname: config__WEBPACK_IMPORTED_MODULE_4__/* .paths.browse */ .Hb.browse,
                    query: {
                        category: cat.name
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_categories_module_scss__WEBPACK_IMPORTED_MODULE_8___default().category),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                            height: 70,
                            width: 70,
                            src: "https://crm.digibeat.co.in/" + cat.image
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: cat.name
                        })
                    ]
                }, i)
            }, cat._id))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;