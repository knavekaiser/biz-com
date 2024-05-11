exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 7301:
/***/ ((module) => {

// Exports
module.exports = {
	"productThumb": "productThumbnail_productThumb__QTSPW",
	"thumbnailWrapper": "productThumbnail_thumbnailWrapper__w1LoF",
	"thumbnail": "productThumbnail_thumbnail__U__tr",
	"productDetail": "productThumbnail_productDetail__txvrY",
	"productSeller": "productThumbnail_productSeller__N04U8",
	"productFavorite": "productThumbnail_productFavorite__9RFXc",
	"details": "productThumbnail_details__W1dzM",
	"price": "productThumbnail_price__3PlLI",
	"currentPrice": "productThumbnail_currentPrice__0ldcq",
	"originalPrice": "productThumbnail_originalPrice__vfcuY",
	"rating": "productThumbnail_rating__bE_sw",
	"value": "productThumbnail_value__zlc8K",
	"stars": "productThumbnail_stars__hp6Jc",
	"chev": "productThumbnail_chev__DtMTw",
	"reviewCount": "productThumbnail_reviewCount__KsiBn",
	"breakdown": "productThumbnail_breakdown__xbd7e",
	"subtitle": "productThumbnail_subtitle__YoIhp",
	"title": "productThumbnail_title__Fwpn_",
	"graph": "productThumbnail_graph__dfz_e",
	"bar": "productThumbnail_bar___8F9l",
	"fill": "productThumbnail_fill__9pT6p",
	"percent": "productThumbnail_percent__W0g2_",
	"whatsappBtn": "productThumbnail_whatsappBtn__kJ_Mk"
};


/***/ }),

/***/ 4382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ProductThumb)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var SiteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9711);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7301);
/* harmony import */ var _styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);









const ProductThumb = ({ product , onClick =()=>{}  })=>{
    const { siteConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .D);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().productThumb)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: `/item/${product._id}`,
            onClick: onClick,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().thumbnailWrapper),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                        src: product.images[0],
                        height: 328,
                        width: 328,
                        alt: product.title
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().productDetail),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: product.title
                        }),
                        siteConfig?.siteConfig?.productCard?.map((item)=>{
                            if (item === "whatsappNumber") {
                                return null;
                            }
                            if ([
                                "string",
                                "number"
                            ].includes(typeof product[item])) {
                                if (item === "price") {
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().price),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().currentPrice),
                                                children: [
                                                    siteConfig?.siteConfig?.currency,
                                                    " ",
                                                    product.price.toLocaleString()
                                                ]
                                            }),
                                            product.originalPrice > product.price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().originalPrice),
                                                children: [
                                                    siteConfig?.siteConfig?.currency,
                                                    " ",
                                                    product.originalPrice.toLocaleString()
                                                ]
                                            })
                                        ]
                                    }, item);
                                }
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().description),
                                    children: product[item]
                                }, item);
                            }
                            if (item === "seller" && product.seller) {
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().productSeller),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            src: product.seller.logo || product.seller.profileImg,
                                            height: 20,
                                            width: 20,
                                            alt: product.seller.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().productSeller),
                                            children: product.seller.name
                                        })
                                    ]
                                }, item);
                            }
                            return null;
                        }),
                        siteConfig?.siteConfig?.productCard?.map((item)=>{
                            if (item === "whatsappNumber" && (siteConfig.whatsappNumber || product.whatsappNumber)) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    style: {
                                        width: "min-content"
                                    },
                                    className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().whatsappBtn),
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        const a = document.createElement("a");
                                        a.href = `whatsapp://send/?${new URLSearchParams({
                                            phone: siteConfig.whatsappNumber || product.whatsappNumber,
                                            text: `I am interested to know more about this ${product.title}\n${window.location.origin}/item/${product._id}`
                                        }).toString()}`;
                                        a.rel = "noreferrer";
                                        a.target = "_blank";
                                        document.querySelector("body").append(a);
                                        a.click();
                                        a.remove();
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoLogoWhatsapp, {})
                                }, item);
                            }
                            if (item === "review") {
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().rating),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().value),
                                            children: product.rating || 0
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().stars),
                                            children: [
                                                product.rating >= 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarEmpty, {}),
                                                product.rating >= 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarEmpty, {}),
                                                product.rating >= 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarEmpty, {}),
                                                product.rating >= 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarEmpty, {}),
                                                product.rating >= 5 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarEmpty, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiChevronDown, {
                                            className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().chev)
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().reviewCount),
                                            children: [
                                                "(",
                                                product.totalReview || 0,
                                                ")"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().breakdown),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().stars),
                                                            children: [
                                                                product.rating >= 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarEmpty, {}),
                                                                product.rating >= 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarEmpty, {}),
                                                                product.rating >= 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarEmpty, {}),
                                                                product.rating >= 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarEmpty, {}),
                                                                product.rating >= 5 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImStarEmpty, {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                product.rating,
                                                                " out of 5"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().subtitle),
                                                    children: [
                                                        product.totalReview,
                                                        " global ratings"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().graph),
                                                    children: [
                                                        5,
                                                        4,
                                                        3,
                                                        2,
                                                        1
                                                    ].map((item, i)=>{
                                                        const rating = (product.ratingBreakdown || []).find((i)=>i.rating === item);
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        item,
                                                                        " star"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bar),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().fill),
                                                                        style: {
                                                                            width: `${((rating?.total || 0) / 5 * 100).fix()}%`
                                                                        }
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: (_styles_productThumbnail_module_scss__WEBPACK_IMPORTED_MODULE_8___default().percent),
                                                                    children: [
                                                                        ((rating?.total || 0) / 5 * 100).fix(),
                                                                        "%"
                                                                    ]
                                                                })
                                                            ]
                                                        }, item);
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }, item);
                            }
                            return null;
                        })
                    ]
                })
            ]
        })
    });
};


/***/ })

};
;