(() => {
var exports = {};
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 2370:
/***/ ((module) => {

// Exports
module.exports = {
	"paths": "products_paths__36bjE",
	"container": "products_container__3a1cB",
	"wrapper": "products_wrapper__lSWi3",
	"sidebar": "products_sidebar__tCMwj",
	"left": "products_left__ScAiq",
	"right": "products_right__5rFU1",
	"specification": "products_specification__NitiP",
	"rating": "products_rating__LB_cJ",
	"value": "products_value__klQsa",
	"stars": "products_stars__RJeJF",
	"chev": "products_chev__aZXqD",
	"reviewCount": "products_reviewCount__mHaC3",
	"breakdown": "products_breakdown__Uo5AY",
	"subtitle": "products_subtitle__Rn6xZ",
	"title": "products_title__o_kRH",
	"graph": "products_graph__Zdd2Q",
	"bar": "products_bar___6cyJ",
	"fill": "products_fill__FFAn4",
	"percent": "products_percent__pU0nx",
	"variant": "products_variant__R0bQl",
	"customRadio": "products_customRadio__zzRiz",
	"selected": "products_selected__0Bxbc",
	"seller": "products_seller__kquOG",
	"details": "products_details__WdvBf",
	"price": "products_price__WwjQ2",
	"currentPrice": "products_currentPrice__xdu9O",
	"originalPrice": "products_originalPrice__rprCp",
	"inventory": "products_inventory__FZwUE",
	"actions": "products_actions__j8izF",
	"addToCart": "products_addToCart__Ey5wF",
	"buyNow": "products_buyNow__RUUmd",
	"map": "products_map__tpNOT",
	"images": "products_images__nsvNs",
	"thumbnails": "products_thumbnails__n4DSb",
	"inView": "products_inView__7pFV1",
	"mainImgWrapper": "products_mainImgWrapper__85s5o",
	"slider": "products_slider__1Hvut",
	"sliderWrapper": "products_sliderWrapper__7UPXw",
	"slide": "products_slide__Ab_VD",
	"mainImg": "products_mainImg__km1Ss",
	"zoomBtn": "products_zoomBtn__gGqVE",
	"content": "products_content__gJpaK",
	"ribbon": "products_ribbon__jEqmT",
	"products": "products_products__sk8Kg",
	"description": "products_description__lAzck",
	"reviews": "products_reviews__5Vy6e",
	"reviewForm": "products_reviewForm__zVcrV",
	"ratingStars": "products_ratingStars__QjxFY",
	"btns": "products_btns__4RrZE",
	"allReviews": "products_allReviews__PitSC",
	"summary": "products_summary__4LKEW",
	"lit": "products_lit__gwHrk",
	"reviewWrapper": "products_reviewWrapper__9TcHj",
	"customer": "products_customer__zfWFc",
	"profilePic": "products_profilePic__xiAg2",
	"detail": "products_detail__YtgYl",
	"relatedProducts": "products_relatedProducts__5SgkI",
	"head": "products_head__n_6Pr",
	"comparison": "products_comparison__aismc",
	"compareLink": "products_compareLink__ldMI3"
};


/***/ }),

/***/ 1726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Images)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2370);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5804);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_pi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1154);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_pi__WEBPACK_IMPORTED_MODULE_4__]);
react_icons_pi__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Images({ product , variant  }) {
    const [viewImage, setViewImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setViewImage(0);
    }, [
        product._id
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().images),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().thumbnails),
                children: (variant?.images || product.images).map((src, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "https://crm.digibeat.co.in/crm/" + src,
                        height: 48,
                        width: 48,
                        alt: product.title,
                        className: viewImage === i ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inView) : "",
                        onClick: ()=>{
                            setViewImage(i);
                            setZoom(false);
                            carouselRef.current.goToSlide(i);
                        }
                    }, i))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mainImgWrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageSliderWithRef, {
                        title: product.title,
                        images: variant?.images || product.images,
                        ref: carouselRef,
                        setView: setViewImage
                    }),
                    zoom && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ZoomImg, {
                        src: (variant?.images || product.images)[viewImage] || (variant?.images || product.images)[0],
                        alt: product.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().zoomBtn),
                        onClick: ()=>setZoom(!zoom),
                        children: zoom ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.PiMagnifyingGlassMinusBold, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.PiMagnifyingGlassPlusBold, {})
                    })
                ]
            })
        ]
    });
}
const ImageSlider = ({ images , setView , title  }, carouselRef)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().slider)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {
            ref: (el)=>carouselRef.current = el,
            swipeable: true,
            draggable: true,
            containerClass: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sliderWrapper),
            itemClass: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().slide),
            ssr: true,
            responsive: {
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 0
                    },
                    items: 1
                }
            },
            showDots: false,
            showArrows: false,
            removeArrowOnDeviceType: [
                "tablet",
                "mobile",
                "desktop"
            ],
            afterChange: (previousSlide, { currentSlide , onMove  })=>{
                setView(currentSlide);
            },
            children: images.map((url)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    alt: title,
                    height: 400,
                    width: 400,
                    draggable: false,
                    src: "https://crm.digibeat.co.in/crm/" + url
                }, url))
        })
    });
};
const ImageSliderWithRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(ImageSlider);
const ZoomImg = ({ src , alt  })=>{
    const mainImgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [mouseDown, setMouseDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [imgStyle, setImgStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        left: "0",
        top: "0"
    });
    const moveHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (!mouseDown) return;
        if (e.type === "mousemove") {
            e.preventDefault();
        }
        if (mainImgRef.current && imgRef.current) {
            const travel = {
                x: mouseDown.x - (e.touches?.[0]?.clientX || e.clientX),
                y: mouseDown.y - (e.touches?.[0]?.clientY || e.clientY)
            };
            setImgStyle({
                left: `${Math.max(Math.min(mouseDown.startX - travel.x, 0), -(mainImgRef.current.clientWidth * 1.5))}px`,
                top: `${Math.max(Math.min(mouseDown.startY - travel.y, 0), -(mainImgRef.current.clientHeight * 1.5))}px`
            });
        }
    }, [
        mouseDown,
        imgStyle
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("mousemove", moveHandler);
        document.addEventListener("touchmove", moveHandler);
        return ()=>{
            document.removeEventListener("mousemove", moveHandler);
            document.removeEventListener("touchmove", moveHandler);
        };
    }, [
        moveHandler
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("mouseup", ()=>setMouseDown(false));
        document.addEventListener("touchend", ()=>setMouseDown(false));
        return ()=>{
            document.removeEventListener("mouseup", ()=>setMouseDown(false));
            document.removeEventListener("touchend", ()=>setMouseDown(false));
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mainImg),
        ref: mainImgRef,
        onMouseDown: (e)=>setMouseDown({
                x: e.clientX,
                y: e.clientY,
                startX: parseFloat(imgStyle.left),
                startY: parseFloat(imgStyle.top)
            }),
        onTouchStart: (e)=>{
            document.body.style.overflow = "hidden";
            setMouseDown({
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
                startX: parseFloat(imgStyle.left),
                startY: parseFloat(imgStyle.top)
            });
        },
        onTouchEnd: ()=>{
            document.body.style.overflow = "unset";
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            ref: imgRef,
            draggable: false,
            src: "https://crm.digibeat.co.in/crm/" + src,
            height: 800,
            width: 800,
            alt: alt,
            style: imgStyle
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Products)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1390);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1726);
/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5146);
/* harmony import */ var _relatedProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3695);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2370);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9234);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sidebar__WEBPACK_IMPORTED_MODULE_2__, _images__WEBPACK_IMPORTED_MODULE_3__, _reviews__WEBPACK_IMPORTED_MODULE_4__, _relatedProducts__WEBPACK_IMPORTED_MODULE_5__, components_elements__WEBPACK_IMPORTED_MODULE_6__]);
([_sidebar__WEBPACK_IMPORTED_MODULE_2__, _images__WEBPACK_IMPORTED_MODULE_3__, _reviews__WEBPACK_IMPORTED_MODULE_4__, _relatedProducts__WEBPACK_IMPORTED_MODULE_5__, components_elements__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Products({ product , showHomePath  }) {
    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(product.variants?.[0] || null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_6__/* .Paths */ .nB, {
                paths: [
                    ...showHomePath ? [
                        {
                            label: "Home",
                            path: "/"
                        }
                    ] : [],
                    {
                        label: "Browse",
                        path: config__WEBPACK_IMPORTED_MODULE_7__/* .paths.browse */ .Hb.browse
                    },
                    {
                        label: product.title
                    }
                ],
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8___default().paths)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_images__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        product: product,
                        variant: variant
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        product: product,
                        variant: variant,
                        setVariant: setVariant
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Description, {
                        product: product
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reviews__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        product: product
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_relatedProducts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}
const Description = ({ product  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8___default().description),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_6__/* .RichText */ .Ho, {
                data: product.description
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Explore)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9608);
/* harmony import */ var components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4382);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7807);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1150);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2370);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_pages_compare_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(230);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_3__, components_pages_compare_products__WEBPACK_IMPORTED_MODULE_7__]);
([components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_3__, components_pages_compare_products__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Explore() {
    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [comparisons, setComparisons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { get: getProducts  } = (0,hooks__WEBPACK_IMPORTED_MODULE_5__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_6__/* .endpoints.relatedItems */ .Hv.relatedItems + `/${router.query.id}`);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getProducts().then(({ data  })=>{
            if (data?.success) {
                setProducts(data.data.recommendation || []);
                setComparisons(data.data.comparison || []);
            }
        }).catch((err)=>console.log(err));
    }, [
        router.query.id
    ]);
    if (products.length === 0 && comparisons.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            products.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8___default().relatedProducts),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8___default().head),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_svg__WEBPACK_IMPORTED_MODULE_2__/* .Fire */ .O$, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Related Products"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8___default().products),
                        children: products.map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_3__/* .ProductThumb */ .B, {
                                product: product
                            }, product._id))
                    })
                ]
            }),
            comparisons.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8___default().comparison),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_8___default().head),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "Compare Products"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_compare_products__WEBPACK_IMPORTED_MODULE_7__/* .CompareProducts */ .v, {
                        products: comparisons
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Reviews)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var SiteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9711);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1905);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7807);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1150);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5641);
/* harmony import */ var components_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9234);
/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8824);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2370);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_hi__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__, components_elements__WEBPACK_IMPORTED_MODULE_8__, components_modal__WEBPACK_IMPORTED_MODULE_9__]);
([react_icons_hi__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__, components_elements__WEBPACK_IMPORTED_MODULE_8__, components_modal__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Reviews({ product  }) {
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .D);
    const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { get: getReviews  } = (0,hooks__WEBPACK_IMPORTED_MODULE_5__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_6__/* .endpoints.reviews */ .Hv.reviews + `/${router.query.id}`);
    const fetchReviews = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        getReviews().then(({ data  })=>{
            if (data?.success) {
                setReviews(data.data);
            }
        }).catch((err)=>console.log(err));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchReviews();
    }, [
        router.query.id
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().reviews),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().head),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Customer Reviews"
                })
            }),
            user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReviewForm, {
                product_id: router.query.id
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().allReviews),
                children: reviews.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().summary),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().stars),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiStar, {
                                            className: product.rating >= 1 ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().lit) : ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiStar, {
                                            className: product.rating >= 2 ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().lit) : ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiStar, {
                                            className: product.rating >= 3 ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().lit) : ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiStar, {
                                            className: product.rating >= 4 ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().lit) : ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiStar, {
                                            className: product.rating >= 5 ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().lit) : ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "\xb7"
                                }),
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        product.totalReview || 0,
                                        " reviews"
                                    ]
                                })
                            ]
                        }),
                        reviews.map((review)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Review, {
                                review: review
                            }, review._id))
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: `${(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().placeholder)} subtitle1`,
                    children: "No reviews yet"
                })
            })
        ]
    });
}
const ReviewForm = ({ product_id  })=>{
    const { handleSubmit , control , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({
        defaultValues: {
            rating: "5",
            review: ""
        }
    });
    const { post: addReview , loading  } = (0,hooks__WEBPACK_IMPORTED_MODULE_5__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_6__/* .endpoints.reviews */ .Hv.reviews);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().reviewForm),
        onSubmit: handleSubmit((values)=>{
            addReview({
                rating: +values.rating,
                review: values.review || "",
                product: product_id
            }).then(({ data  })=>{
                if (data.success) {
                    reset({
                        rating: "5",
                        review: ""
                    });
                    (0,components_modal__WEBPACK_IMPORTED_MODULE_9__/* .Prompt */ .N)({
                        type: "success",
                        message: "Review has been added successfully."
                    });
                } else if (data.success === false) {
                    (0,components_modal__WEBPACK_IMPORTED_MODULE_9__/* .Prompt */ .N)({
                        type: "error",
                        message: data.message
                    });
                }
            }).catch((err)=>(0,components_modal__WEBPACK_IMPORTED_MODULE_9__/* .Prompt */ .N)({
                    type: "error",
                    message: err.message
                }));
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_8__/* .CustomRadio */ .rG, {
                control: control,
                name: "rating",
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().ratingStars),
                selectedClassName: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().selected),
                formOptions: {
                    required: "Please select a rating"
                },
                options: [
                    {
                        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiStar, {}),
                        value: 1
                    },
                    {
                        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiStar, {}),
                        value: 2
                    },
                    {
                        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiStar, {}),
                        value: 3
                    },
                    {
                        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiStar, {}),
                        value: 4
                    },
                    {
                        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiStar, {}),
                        value: 5
                    }
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_8__/* .Textarea */ .gx, {
                control: control,
                name: "review",
                placeholder: "Write a review."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().btns),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: `btn primary ${loading ? "loading" : ""}`,
                    disabled: loading,
                    children: "Add Review"
                })
            })
        ]
    });
};
const Review = ({ review  })=>{
    const [showFull, setShowFull] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().reviewWrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().customer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().profilePic),
                        children: review.customer?.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                            src: "https://crm.digibeat.co.in/crm/" + review.customer.image,
                            height: 48,
                            width: 48,
                            alt: review.customer.name
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiOutlineUserCircle, {
                            className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().profilePicPlaceholder)
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().detail),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                children: review.customer.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_8__/* .Moment */ .W7, {
                                format: "MMM YYYY",
                                children: review.createdAt
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().review)} ${!showFull ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().trim) : ""}`,
                children: review.review
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var SiteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9711);
/* harmony import */ var components_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9234);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2370);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6840);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3254);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1780);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9650);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_elements__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, react_icons_io__WEBPACK_IMPORTED_MODULE_5__, react_icons_im__WEBPACK_IMPORTED_MODULE_6__, react_icons_fi__WEBPACK_IMPORTED_MODULE_7__, react_icons_bs__WEBPACK_IMPORTED_MODULE_9__]);
([components_elements__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, react_icons_io__WEBPACK_IMPORTED_MODULE_5__, react_icons_im__WEBPACK_IMPORTED_MODULE_6__, react_icons_fi__WEBPACK_IMPORTED_MODULE_7__, react_icons_bs__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Sidebar = ({ product , variant , setVariant  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { compare , setCompare , siteConfig: { siteConfig , ...config } , addToCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .D);
    const { handleSubmit , reset , control , getValues  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const data = {
            qty: 1
        };
        if (product.variants?.length) {
            const variant = product.variants[0];
            // data[.field] = product.variants[0].value;
            siteConfig?.productFields.filter((item)=>item.dataType === "variantArray").forEach((item)=>{
                data[item.name] = variant[item.name];
            });
        }
        reset(data);
    }, [
        siteConfig?.productFields
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit((values)=>{
            addToCart({
                product,
                ...values,
                variant
            });
        }),
        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().sidebar),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().left),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: product.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().details),
                        children: [
                            siteConfig?.productViewPage?.productElements.includes("review") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().rating),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().stars),
                                        children: [
                                            product.rating >= 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarEmpty, {}),
                                            product.rating >= 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarEmpty, {}),
                                            product.rating >= 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarEmpty, {}),
                                            product.rating >= 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarEmpty, {}),
                                            product.rating >= 5 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarEmpty, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiChevronDown, {
                                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().chev)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().reviewCount),
                                        children: [
                                            product.totalReview || 0,
                                            " ratings"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().breakdown),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().title),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().stars),
                                                        children: [
                                                            product.rating >= 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarEmpty, {}),
                                                            product.rating >= 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarEmpty, {}),
                                                            product.rating >= 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarEmpty, {}),
                                                            product.rating >= 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarEmpty, {}),
                                                            product.rating >= 5 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarFull, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImStarEmpty, {})
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
                                                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().subtitle),
                                                children: [
                                                    product.totalReview,
                                                    " global ratings"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().graph),
                                                children: [
                                                    5,
                                                    4,
                                                    3,
                                                    2,
                                                    1
                                                ].map((item, i)=>{
                                                    const rating = product.ratingBreakdown.find((i)=>i.rating === item);
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    item,
                                                                    " star"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().bar),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().fill),
                                                                    style: {
                                                                        width: `${((rating?.total || 0) / 5 * 100).fix()}%`
                                                                    }
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().percent),
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
                            }),
                            siteConfig?.productViewPage?.viewWhatsApp && (config.whatsappNumber || product.whatsappNumber) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "btn whatsapp",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    const a = document.createElement("a");
                                    a.href = `whatsapp://send/?${new URLSearchParams({
                                        phone: config.whatsappNumber || product.whatsappNumber,
                                        text: `I am interested to know more about this ${product.title}\n${window.location.href.replace(/\?.+/, "")}`
                                    }).toString()}`;
                                    // `https://api.whatsapp.com/send/?${new URLSearchParams({
                                    //   phone: config.whatsappNumber || product.whatsappNumber,
                                    //   text: `I am interested to know more about this ${product.title}`,
                                    //   type: "phone_number",
                                    //   // app_absent: 0,
                                    // }).toString()}`
                                    a.rel = "noreferrer";
                                    a.target = "_blank";
                                    document.querySelector("body").append(a);
                                    a.click();
                                    a.remove();
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoLogoWhatsapp, {}),
                                    "Chat On WhatsApp"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                            siteConfig?.productViewPage?.productElements?.map((item)=>{
                                if (item === "dateRange") {
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .CalendarInput */ .qe, {
                                        label: "Date",
                                        control: control,
                                        dateWindow: "futureIncludingToday",
                                        name: "dates"
                                    }, item);
                                }
                                if (item === "latlng" && product[item]) {
                                    const [lat, lng] = product[item].split(",").map((i)=>+i);
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Map, {
                                        lat: lat,
                                        lng: lng
                                    }, item);
                                }
                                if (item === "compare") {
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `btn ${compare.includes(product._id) ? "" : "primary"} small`,
                                        onClick: ()=>{
                                            setCompare((prev)=>compare.includes(product._id) ? prev.filter((item)=>item !== product._id) : [
                                                    ...prev,
                                                    product._id
                                                ]);
                                        },
                                        children: [
                                            compare.includes(product._id) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsCheckLg, {
                                                style: {
                                                    color: "#327e53",
                                                    marginRight: ".5rem"
                                                }
                                            }),
                                            " ",
                                            "Compare"
                                        ]
                                    }, item);
                                }
                                if (siteConfig.productFields.find((i)=>i.name === item)?.dataType === "variantArray" && Array.isArray(product[item])) {
                                    const field = siteConfig.productFields.find((i)=>i.name === item);
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().variant),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                children: [
                                                    field?.label,
                                                    ":"
                                                ]
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .CustomRadio */ .rG, {
                                                control: control,
                                                name: item,
                                                formOptions: {
                                                    required: true
                                                },
                                                options: product[item].map((item)=>({
                                                        label: item,
                                                        value: item
                                                    })),
                                                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().customRadio),
                                                onChange: (_)=>{
                                                    if (product.variants?.length) {
                                                        const variableFields = siteConfig.productFields.filter((item)=>item.dataType === "variantArray").reduce((p, c)=>{
                                                            p[c.name] = getValues(c.name);
                                                            return p;
                                                        }, {});
                                                        setVariant(product.variants.find((item)=>{
                                                            const itemValues = Object.values(item);
                                                            return Object.values(variableFields).every((item)=>itemValues.includes(item));
                                                        }));
                                                    }
                                                },
                                                selectedClassName: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().selected)
                                            })
                                        ]
                                    }, item);
                                }
                                if ([
                                    "string",
                                    "number",
                                    ""
                                ].includes(typeof product[item]) || Array.isArray(product[item])) {
                                    if (item === "price") {
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().price),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().currentPrice),
                                                    children: [
                                                        siteConfig?.currency,
                                                        " ",
                                                        (product.price + (variant?.price || 0)).toLocaleString()
                                                    ]
                                                }),
                                                product.originalPrice > product.price + (variant?.price || 0) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().originalPrice),
                                                    children: [
                                                        siteConfig?.siteConfig?.currency,
                                                        " ",
                                                        product.originalPrice.toLocaleString()
                                                    ]
                                                })
                                            ]
                                        }, item);
                                    }
                                    const field = siteConfig.productFields.find((i)=>i.name === item);
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                children: [
                                                    field?.label,
                                                    ":"
                                                ]
                                            }),
                                            " ",
                                            Array.isArray(product[item]) ? product[item].join(", ") : product[item]
                                        ]
                                    }, item);
                                }
                                if (item === "seller") {
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().seller),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                src: "https://crm.digibeat.co.in/crm/" + product.seller.logo,
                                                height: 48,
                                                width: 48,
                                                alt: product.seller.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: product.seller.name
                                            })
                                        ]
                                    }, item);
                                }
                                return null;
                            })
                        ]
                    }),
                    product.specification && "blocks" in product.specification && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().specification),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        children: "About this item"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .RichText */ .Ho, {
                                        data: product.specification
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            siteConfig?.productViewPage?.viewAddToCart && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().right),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            "Ship to",
                            " ",
                            Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/.*\//, "")
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().inventory),
                                children: "In Stock"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .Combobox */ .hQ, {
                                control: control,
                                name: "qty",
                                label: "Qty",
                                options: [
                                    {
                                        label: 1,
                                        value: 1
                                    },
                                    {
                                        label: 2,
                                        value: 2
                                    },
                                    {
                                        label: 3,
                                        value: 3
                                    },
                                    {
                                        label: 4,
                                        value: 4
                                    },
                                    {
                                        label: 5,
                                        value: 5
                                    },
                                    {
                                        label: 6,
                                        value: 6
                                    },
                                    {
                                        label: 7,
                                        value: 7
                                    },
                                    {
                                        label: 8,
                                        value: 8
                                    },
                                    {
                                        label: 9,
                                        value: 9
                                    },
                                    {
                                        label: 10,
                                        value: 10
                                    },
                                    {
                                        label: 11,
                                        value: 11
                                    },
                                    {
                                        label: 12,
                                        value: 12
                                    },
                                    {
                                        label: 13,
                                        value: 13
                                    },
                                    {
                                        label: 14,
                                        value: 14
                                    },
                                    {
                                        label: 15,
                                        value: 15
                                    },
                                    {
                                        label: 16,
                                        value: 16
                                    },
                                    {
                                        label: 17,
                                        value: 17
                                    },
                                    {
                                        label: 18,
                                        value: 18
                                    },
                                    {
                                        label: 19,
                                        value: 19
                                    },
                                    {
                                        label: 20,
                                        value: 20
                                    },
                                    {
                                        label: 21,
                                        value: 21
                                    },
                                    {
                                        label: 22,
                                        value: 22
                                    },
                                    {
                                        label: 23,
                                        value: 23
                                    },
                                    {
                                        label: 24,
                                        value: 24
                                    },
                                    {
                                        label: 25,
                                        value: 25
                                    },
                                    {
                                        label: 26,
                                        value: 26
                                    },
                                    {
                                        label: 27,
                                        value: 27
                                    },
                                    {
                                        label: 28,
                                        value: 28
                                    },
                                    {
                                        label: 29,
                                        value: 29
                                    },
                                    {
                                        label: 30,
                                        value: 30
                                    }
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().actions),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `btn secondary ${(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().addToCart)}`,
                                children: "Add to Cart"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `btn primary ${(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().buyNow)}`,
                                type: "button",
                                onClick: ()=>router.push({
                                        pathname: config__WEBPACK_IMPORTED_MODULE_11__/* .paths.checkout */ .Hb.checkout,
                                        query: {
                                            product_id: product._id
                                        }
                                    }),
                                children: "Buy Now"
                            })
                        ]
                    }),
                    product.specification && "blocks" in product.specification && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().specification),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        children: "About this item"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .RichText */ .Ho, {
                                        data: product.specification
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Map = ({ lat , lng  })=>{
    const [showMap, setShowMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_12___default().map),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: "Location:"
                    }),
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        onClick: ()=>setShowMap((prev)=>!prev),
                        children: [
                            showMap ? "Hide" : "Show on",
                            " Map"
                        ]
                    })
                ]
            }),
            showMap && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .GoogleMap */ .b6, {
                center: {
                    lat,
                    lng
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O$": () => (/* binding */ Fire)
/* harmony export */ });
/* unused harmony exports Logo, LogoStar, ETH, RankBadge */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Logo = ({ style  })=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "146",
        height: "40",
        viewBox: "0 0 146 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "logo",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M63.4166 31.4933C63.4166 31.5029 63.4166 31.5126 63.4166 31.5174L61.4842 34.8666L59.5518 31.5174C59.5518 31.5078 59.5518 31.5029 59.5518 31.4933C59.5518 31.4837 59.5518 31.474 59.5518 31.4692L61.4842 28.12L63.4166 31.4692C63.4166 31.474 63.4166 31.4837 63.4166 31.4933ZM66.3706 31.4933C66.3706 30.9921 66.2598 30.491 66.0429 30.1054L62.2889 23.5999C61.8504 22.8385 61.1276 22.8385 60.6891 23.5999L56.9351 30.1054C56.7134 30.4861 56.6074 30.9873 56.6074 31.4933C56.6074 31.9993 56.7182 32.4957 56.9351 32.8812L60.6891 39.3868C61.1276 40.1482 61.8504 40.1482 62.2889 39.3868L66.0429 32.8812C66.2598 32.4957 66.3706 31.9945 66.3706 31.4933Z",
                fill: style === "fullDark" ? "#21150C" : "#CFB675"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M63.4166 8.50698C63.4166 8.51662 63.4166 8.52626 63.4166 8.53107L61.4842 11.8802L59.5518 8.53107C59.5518 8.52144 59.5518 8.51662 59.5518 8.50698C59.5518 8.49734 59.5518 8.4877 59.5518 8.48288L61.4842 5.13371L63.4166 8.48288C63.4166 8.4877 63.4166 8.49734 63.4166 8.50698ZM66.3706 8.50698C66.3706 8.00581 66.2598 7.49982 66.0429 7.11912L62.2889 0.613527C61.8504 -0.147868 61.1276 -0.147868 60.6891 0.613527L56.9351 7.11912C56.7134 7.49982 56.6074 8.00099 56.6074 8.50698C56.6074 9.00815 56.7182 9.50932 56.9351 9.89484L60.6891 16.4004C61.1276 17.1618 61.8504 17.1618 62.2889 16.4004L66.0429 9.89484C66.2598 9.50932 66.3706 9.00815 66.3706 8.50698Z",
                fill: style === "fullDark" ? "#21150C" : "#CFB675"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M74.361 12.5649L72.4286 15.9141C72.4141 15.9237 72.3997 15.9334 72.3852 15.9382H68.5156L70.448 12.589C70.4625 12.5794 70.4769 12.5697 70.4914 12.5649H74.361ZM78.8571 10.3868C78.8571 9.93377 78.4957 9.61572 77.8692 9.61572H70.3612C69.4794 9.61572 68.3999 10.2374 67.9614 11.0036L64.2074 17.5044C64.0821 17.726 64.0195 17.9332 64.0195 18.1212C64.0195 18.579 64.3809 18.8922 65.0074 18.8922H72.5154C73.3972 18.8922 74.4767 18.2706 74.9152 17.5044L78.6691 10.9988C78.7992 10.7771 78.8571 10.5699 78.8571 10.3868Z",
                fill: style === "fullDark" ? "#21150C" : "#CFB675"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M54.4538 24.0581L52.5214 27.4073C52.5069 27.4169 52.4925 27.4265 52.478 27.4314H48.6084L50.5408 24.0822C50.5552 24.0725 50.5697 24.0629 50.5842 24.0581H54.4538ZM58.9499 21.8799C58.9499 21.4269 58.5884 21.1089 57.962 21.1089H50.4541C49.5722 21.1089 48.4928 21.7305 48.0542 22.4967L44.3003 28.9975C44.175 29.2192 44.1123 29.4264 44.1123 29.6143C44.1123 30.0721 44.4738 30.3854 45.1002 30.3854H52.6081C53.49 30.3854 54.5694 29.7637 55.008 28.9975L58.7619 22.4919C58.8921 22.2751 58.9499 22.063 58.9499 21.8799Z",
                fill: style === "fullDark" ? "#21150C" : "#CFB675"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M54.4538 15.9376H50.589C50.5746 15.928 50.5601 15.9232 50.5456 15.9135L48.6132 12.5644H52.4828C52.4973 12.574 52.5117 12.5788 52.5262 12.5885L54.4538 15.9376ZM58.9499 18.1206C58.9499 17.9327 58.8921 17.7255 58.7619 17.5038L55.008 10.9982C54.5694 10.2368 53.49 9.61035 52.6081 9.61035H45.1002C44.4738 9.61035 44.1123 9.92358 44.1123 10.3814C44.1123 10.5693 44.1701 10.7765 44.3003 10.9982L48.0542 17.499C48.4928 18.2604 49.5722 18.8868 50.4541 18.8868H57.962C58.5884 18.8917 58.9499 18.5736 58.9499 18.1206Z",
                fill: style === "fullDark" ? "#21150C" : "#CFB675"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M74.361 27.4313H70.4962C70.4817 27.4217 70.4673 27.4168 70.4528 27.4072L68.5204 24.058H72.3901C72.4045 24.0677 72.419 24.0725 72.4334 24.0821L74.361 27.4313ZM78.8571 29.6143C78.8571 29.4263 78.7944 29.2191 78.6691 28.9975L74.9152 22.4919C74.4767 21.7305 73.3972 21.104 72.5154 21.104H65.0074C64.3809 21.104 64.0195 21.4172 64.0195 21.875C64.0195 22.063 64.0821 22.2702 64.2074 22.4919L67.9614 28.9926C68.3999 29.754 69.4794 30.3757 70.3612 30.3805H77.8692C78.4957 30.3853 78.8571 30.0673 78.8571 29.6143Z",
                fill: style === "fullDark" ? "#21150C" : "#CFB675"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M3.54675 29.9993C2.05287 29.5463 0.872231 28.9391 0 28.1874L1.33486 25.19C2.183 25.8646 3.22871 26.414 4.46718 26.8381C5.70565 27.267 6.94412 27.479 8.19223 27.479C9.73429 27.479 10.8861 27.2332 11.6523 26.7369C12.4137 26.2405 12.7944 25.59 12.7944 24.7756C12.7944 24.1828 12.5823 23.6913 12.1583 23.3058C11.7342 22.9203 11.1944 22.6167 10.5391 22.3998C9.8885 22.183 8.99703 21.9324 7.86939 21.6577C6.28396 21.2818 5.00694 20.9059 4.02388 20.5301C3.04563 20.1542 2.20226 19.5663 1.49869 18.7615C0.795121 17.9616 0.443365 16.8773 0.443365 15.5135C0.443365 14.3666 0.75175 13.3209 1.37821 12.3812C1.99986 11.4415 2.9396 10.6946 4.19735 10.1404C5.4551 9.5862 6.99233 9.31152 8.81389 9.31152C10.0813 9.31152 11.3294 9.47055 12.5534 9.7886C13.7822 10.1067 14.8376 10.5596 15.7291 11.1524L14.5099 14.1498C13.5991 13.6149 12.6498 13.2101 11.6619 12.9306C10.674 12.6559 9.71025 12.5161 8.78501 12.5161C7.26222 12.5161 6.12974 12.7715 5.38762 13.2872C4.6455 13.8028 4.27441 14.4871 4.27441 15.3352C4.27441 15.928 4.48648 16.4147 4.91537 16.7905C5.33944 17.1664 5.87915 17.4652 6.52971 17.6821C7.18509 17.8989 8.0718 18.1495 9.19943 18.4242C10.7415 18.7808 12.0089 19.1518 12.9968 19.5374C13.9847 19.9229 14.8327 20.5108 15.5363 21.3059C16.2399 22.0962 16.5917 23.166 16.5917 24.5105C16.5917 25.6574 16.2784 26.6983 15.6568 27.6284C15.0351 28.5584 14.0906 29.3006 12.8232 29.8547C11.5559 30.4089 10.0138 30.6836 8.19223 30.6836C6.58751 30.6836 5.04062 30.4571 3.54675 29.9993Z",
                fill: style === "light" ? "white" : "#21150C"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M36.3449 10.5019C37.6798 11.0946 38.7062 11.9475 39.4194 13.0559C40.1326 14.1643 40.4892 15.4798 40.4892 17.0026C40.4892 18.5061 40.1326 19.8169 39.4194 20.9349C38.7062 22.0529 37.6846 22.9107 36.3449 23.5034C35.0101 24.0961 33.4439 24.3949 31.6416 24.3949H26.9479V30.3897H23.0928V9.61035H31.6416C33.4391 9.61035 35.0101 9.90913 36.3449 10.5019ZM35.2896 20.0579C36.1618 19.3446 36.5955 18.3278 36.5955 16.9978C36.5955 15.6726 36.1618 14.651 35.2896 13.9426C34.4174 13.2294 33.1451 12.8728 31.4585 12.8728H26.9479V21.1228H31.4585C33.1451 21.1277 34.4174 20.7711 35.2896 20.0579Z",
                fill: style === "light" ? "white" : "#21150C"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M97.6754 30.3849L93.4347 24.2985C93.2564 24.3178 92.9866 24.3274 92.6348 24.3274H87.9459V30.3801H84.0859V9.61035H92.6348C94.4371 9.61035 96.0032 9.90431 97.3381 10.5019C98.6729 11.0946 99.6994 11.9475 100.413 13.0559C101.126 14.1643 101.482 15.4798 101.482 17.0026C101.482 18.564 101.102 19.9133 100.34 21.0409C99.5789 22.1686 98.485 23.0119 97.0586 23.5661L101.839 30.3897H97.6754V30.3849ZM96.2827 13.9426C95.4105 13.2294 94.1383 12.8728 92.4517 12.8728H87.9411V21.1566H92.4517C94.1335 21.1566 95.4105 20.7952 96.2827 20.0723C97.155 19.3495 97.5887 18.3278 97.5887 16.9978C97.5887 15.6774 97.1502 14.6558 96.2827 13.9426Z",
                fill: style === "light" ? "white" : "#21150C"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M124.03 27.1514V30.3849H108.45V9.61035H123.615V12.8439H112.31V18.2459H122.343V21.4216H112.31V27.1514H124.03Z",
                fill: style === "light" ? "white" : "#21150C"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M132.988 29.9753C131.499 29.5223 130.319 28.9199 129.451 28.1682L130.786 25.1756C131.634 25.8454 132.675 26.3948 133.909 26.8189C135.142 27.2429 136.381 27.455 137.624 27.455C139.166 27.455 140.313 27.2044 141.074 26.7128C141.836 26.2165 142.217 25.5659 142.217 24.7563C142.217 24.1636 142.005 23.6721 141.581 23.2866C141.156 22.901 140.617 22.6023 139.966 22.3854C139.316 22.1637 138.424 21.918 137.301 21.6433C135.721 21.2674 134.444 20.8915 133.465 20.5157C132.487 20.1398 131.649 19.5519 130.95 18.7519C130.246 17.952 129.899 16.8725 129.899 15.5088C129.899 14.3619 130.213 13.321 130.834 12.3813C131.456 11.4416 132.396 10.6994 133.649 10.1453C134.901 9.59109 136.439 9.31641 138.251 9.31641C139.513 9.31641 140.756 9.47543 141.98 9.78866C143.204 10.1067 144.26 10.5597 145.147 11.1524L143.932 14.145C143.021 13.6101 142.077 13.2053 141.089 12.9306C140.101 12.6511 139.142 12.5162 138.217 12.5162C136.694 12.5162 135.566 12.7716 134.824 13.2872C134.082 13.8029 133.711 14.4823 133.711 15.3305C133.711 15.9232 133.923 16.4099 134.347 16.781C134.771 17.1568 135.311 17.4556 135.962 17.6725C136.612 17.8893 137.504 18.1351 138.626 18.4146C140.169 18.7712 141.431 19.1423 142.414 19.5278C143.402 19.9133 144.245 20.5012 144.949 21.2915C145.648 22.0818 146 23.1468 146 24.4913C146 25.6382 145.686 26.6743 145.065 27.5995C144.443 28.5296 143.498 29.2717 142.236 29.8211C140.973 30.3753 139.431 30.6499 137.615 30.6499C136.024 30.6596 134.482 30.4331 132.988 29.9753Z",
                fill: style === "light" ? "white" : "#21150C"
            })
        ]
    });
};
const LogoStar = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "176",
        height: "162",
        viewBox: "0 0 176 162",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M74.2347 207.91C74.2347 207.974 74.2347 208.037 74.2347 208.069L61.4984 230.143L48.762 208.069C48.762 208.005 48.762 207.974 48.762 207.91C48.762 207.846 48.762 207.783 48.762 207.751L61.4984 185.677L74.2347 207.751C74.2347 207.783 74.2347 207.846 74.2347 207.91ZM93.7041 207.91C93.7041 204.607 92.9738 201.304 91.5445 198.763L66.8023 155.885C63.912 150.867 59.1476 150.867 56.2573 155.885L31.5158 198.763C30.0548 201.272 29.3555 204.575 29.3555 207.91C29.3555 211.245 30.0865 214.516 31.5158 217.057L56.2573 259.935C59.1476 264.953 63.912 264.953 66.8023 259.935L91.5445 217.057C92.9738 214.516 93.7041 211.213 93.7041 207.91Z",
                fill: "#DECDA0"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M74.2367 56.407C74.2367 56.4706 74.2367 56.5341 74.2367 56.5659L61.5003 78.64L48.764 56.5659C48.764 56.5023 48.764 56.4706 48.764 56.407C48.764 56.3435 48.764 56.28 48.764 56.2482L61.5003 34.1741L74.2367 56.2482C74.2367 56.28 74.2367 56.3435 74.2367 56.407ZM93.706 56.407C93.706 53.1039 92.9757 49.7689 91.5465 47.2598L66.8042 4.38189C63.9139 -0.636411 59.1495 -0.636411 56.2592 4.38189L31.5178 47.2598C30.0567 49.7689 29.3574 53.0721 29.3574 56.407C29.3574 59.7102 30.0885 63.0134 31.5178 65.5543L56.2592 108.432C59.1495 113.451 63.9139 113.451 66.8042 108.432L91.5465 65.5543C92.9757 63.0134 93.706 59.7102 93.706 56.407Z",
                fill: "#DECDA0"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M146.366 83.1499L133.63 105.224C133.534 105.288 133.439 105.351 133.343 105.383H107.839L120.575 83.3087C120.671 83.2452 120.766 83.1816 120.861 83.1499H146.366ZM176 68.7937C176 65.8082 173.617 63.7119 169.488 63.7119H120.004C114.191 63.7119 107.077 67.8091 104.187 72.8592L79.4444 115.705C78.6186 117.166 78.2061 118.532 78.2061 119.771C78.2061 122.788 80.5883 124.853 84.7173 124.853H134.201C140.013 124.853 147.128 120.755 150.018 115.705L174.76 72.8274C175.618 71.3664 176 70.0007 176 68.7937Z",
                fill: "#DECDA0"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M15.1598 158.898L2.42347 180.972C2.32819 181.036 2.2334 181.099 2.13811 181.131H-23.3664L-10.63 159.057C-10.5347 158.993 -10.44 158.93 -10.3447 158.898H15.1598ZM44.7934 144.542C44.7934 141.556 42.4112 139.46 38.2822 139.46H-11.2023C-17.0146 139.46 -24.1291 143.557 -27.0194 148.607L-51.7616 191.453C-52.5874 192.914 -53 194.28 -53 195.519C-53 198.536 -50.6177 200.601 -46.4888 200.601H2.99496C8.8073 200.601 15.9226 196.503 18.8128 191.453L43.5543 148.575C44.4119 147.146 44.7934 145.749 44.7934 144.542Z",
                fill: "#DECDA0"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M15.1598 105.385H-10.3129C-10.4082 105.322 -10.5029 105.29 -10.5982 105.227L-23.3346 83.1523H2.16913C2.26442 83.2159 2.35998 83.2476 2.45527 83.3112L15.1598 105.385ZM44.7934 119.773C44.7934 118.535 44.3801 117.169 43.5543 115.708L18.8128 72.8299C15.9226 67.8116 8.8073 63.6826 2.99496 63.6826H-46.4888C-50.6177 63.6826 -53 65.7471 -53 68.7644C-53 70.0031 -52.6192 71.3689 -51.7616 72.8299L-27.0194 115.676C-24.1291 120.694 -17.0146 124.823 -11.2023 124.823H38.2822C42.4112 124.855 44.7934 122.759 44.7934 119.773Z",
                fill: "#DECDA0"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M146.366 181.133H120.893C120.798 181.07 120.702 181.038 120.607 180.975L107.871 158.9H133.375C133.47 158.964 133.566 158.996 133.661 159.059L146.366 181.133ZM176 195.521C176 194.283 175.586 192.917 174.76 191.456L150.018 148.578C147.128 143.56 140.013 139.431 134.201 139.431H84.7173C80.5883 139.431 78.2061 141.495 78.2061 144.512C78.2061 145.751 78.6186 147.117 79.4444 148.578L104.187 191.424C107.077 196.442 114.191 200.54 120.004 200.571H169.488C173.617 200.603 176 198.507 176 195.521Z",
                fill: "#DECDA0"
            })
        ]
    });
};
const ETH = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "13",
        height: "20",
        viewBox: "0 0 13 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M6.14089 0L6.00391 0.454795V13.6822L6.14089 13.8137L12.2779 10.1863L6.14089 0Z",
                fill: "#343434"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M6.14247 0L0 10.1863L6.14247 13.8137V7.39726V0Z",
                fill: "#8C8C8C"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M6.14214 14.9755L6.06543 15.0687V19.781L6.14214 20.0002L12.2846 11.3481L6.14214 14.9755Z",
                fill: "#3C3C3B"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M6.14247 20.0002V14.9755L0 11.3481L6.14247 20.0002Z",
                fill: "#8C8C8C"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M6.14062 13.8139L12.2776 10.1865L6.14062 7.39746V13.8139Z",
                fill: "#141414"
            })
        ]
    });
};
const RankBadge = ({ rank  })=>{
    if (rank < 4) {
        return /*#__PURE__*/ _jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M23.7723 12.9599C24.0759 12.3585 24.0759 11.6405 23.7723 11.0391L23.4578 10.4163C23.3893 10.2805 23.3654 10.1293 23.3886 9.979L23.4951 9.28956C23.5981 8.62378 23.3762 7.94085 22.9015 7.46274L22.4101 6.9676C22.3029 6.85964 22.2334 6.72322 22.2091 6.57307L22.0974 5.88442C21.9907 5.2268 21.5768 4.65141 20.9883 4.34084L20.3836 3.98423C20.3719 3.97734 20.36 3.97078 20.3479 3.96459C20.2127 3.89507 20.1045 3.78682 20.0349 3.65153L19.7159 3.03114C19.4151 2.44609 18.8016 2.01344 18.115 1.90206L17.4264 1.79039C17.2763 1.76602 17.1398 1.69654 17.0319 1.58943L16.5367 1.0979C16.0586 0.623299 15.3758 0.401562 14.71 0.504321L14.0205 0.610876C13.8701 0.634128 13.719 0.610173 13.5832 0.541636L12.9604 0.22722C12.359 -0.0763675 11.641 -0.0764144 11.0396 0.22722L10.4168 0.541636C10.2811 0.610126 10.13 0.634034 9.97952 0.610923L9.29007 0.504368C8.62416 0.401375 7.94137 0.623346 7.46325 1.09795L6.96807 1.58938C6.86016 1.69654 6.72374 1.76602 6.57359 1.79039L5.88489 1.90206C5.1983 2.01344 4.58489 2.44604 4.28407 3.03114L3.96506 3.65153C3.89549 3.78678 3.78725 3.89507 3.65196 3.96459L3.03151 4.28365C2.44647 4.58447 2.01382 5.19788 1.90248 5.88447L1.79077 6.57316C1.76644 6.72332 1.69692 6.85969 1.58976 6.96765L1.09837 7.46278C0.62377 7.9409 0.401892 8.62378 0.504791 9.28956L0.611394 9.97905C0.634646 10.1293 0.610691 10.2805 0.542107 10.4163L0.227691 11.0391C-0.0758968 11.6404 -0.0758968 12.3585 0.227691 12.9599L0.542107 13.5827C0.610644 13.7184 0.634599 13.8696 0.611394 14.02L0.504791 14.7095C0.401892 15.3752 0.623817 16.0581 1.09837 16.5362L1.58985 17.0314C1.69701 17.1394 1.76654 17.2757 1.79087 17.4259L1.90258 18.1145C2.01391 18.8012 2.44656 19.4146 3.03161 19.7154L3.652 20.0344C3.78729 20.104 3.89554 20.2122 3.96511 20.3475L4.28412 20.968C4.58498 21.553 5.19839 21.9857 5.88498 22.097L6.57363 22.2087C6.72378 22.2331 6.8602 22.3026 6.96812 22.4097L7.4633 22.9012C7.94151 23.3758 8.62435 23.5975 9.29007 23.4947L9.97957 23.3881C10.1298 23.3649 10.2811 23.3889 10.4168 23.4574L11.0396 23.7718C11.3403 23.9236 11.6702 23.9995 12 23.9995C12.3299 23.9995 12.6597 23.9236 12.9604 23.7718L13.5832 23.4574C13.719 23.3889 13.8702 23.365 14.0205 23.3881L14.7099 23.4947C15.3757 23.5975 16.0586 23.3757 16.5367 22.9011L17.0319 22.4096C17.1398 22.3025 17.2762 22.233 17.4264 22.2086L18.115 22.0969C18.7726 21.9903 19.3481 21.5764 19.6586 20.9878L20.0152 20.3831C20.0221 20.3714 20.0287 20.3595 20.0349 20.3474C20.1044 20.2122 20.2127 20.1039 20.3479 20.0344L20.9683 19.7154C21.5675 19.4073 21.9895 18.8264 22.0974 18.1614L22.2091 17.4728C22.2335 17.3226 22.3029 17.1862 22.4101 17.0782C22.4176 17.0707 22.9139 16.5238 22.9139 16.5238C23.38 16.0463 23.5972 15.3694 23.4951 14.7095L23.3886 14.02C23.3653 13.8697 23.3893 13.7184 23.4578 13.5827L23.7723 12.9599Z",
                    fill: "url(#paint0_linear_1151_40532)"
                }),
                /*#__PURE__*/ _jsx("path", {
                    d: "M11.9997 3.51514C7.34132 3.51514 3.51465 7.34284 3.51465 12.0002C3.51465 16.6586 7.34235 20.4853 11.9997 20.4853C16.6581 20.4853 20.4848 16.6576 20.4848 12.0002C20.4848 7.34181 16.657 3.51514 11.9997 3.51514Z",
                    fill: "url(#paint1_linear_1151_40532)"
                }),
                /*#__PURE__*/ _jsx("text", {
                    x: "50%",
                    y: "55%",
                    fill: "url(#paint0_linear_3202_34007)",
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    style: {
                        fontSize: `${rank}`.length > 1 ? ".65rem" : "0.8rem"
                    },
                    children: rank
                }),
                /*#__PURE__*/ _jsxs("defs", {
                    children: [
                        /*#__PURE__*/ _jsxs("linearGradient", {
                            id: "paint0_linear_1151_40532",
                            x1: "12",
                            y1: "23.9995",
                            x2: "12",
                            y2: "-0.000471115",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ _jsx("stop", {
                                    stopColor: "#FD5900"
                                }),
                                /*#__PURE__*/ _jsx("stop", {
                                    offset: "1",
                                    stopColor: "#FFDE00"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("linearGradient", {
                            id: "paint1_linear_1151_40532",
                            x1: "11.9997",
                            y1: "20.4853",
                            x2: "11.9997",
                            y2: "3.51514",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ _jsx("stop", {
                                    stopColor: "#FFE59A"
                                }),
                                /*#__PURE__*/ _jsx("stop", {
                                    offset: "1",
                                    stopColor: "#FFFFD5"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ _jsxs("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M12 3.51446C7.3416 3.51446 3.51493 7.34216 3.51493 11.9995C3.51493 16.6579 7.34263 20.4846 12 20.4846C16.6584 20.4846 20.4851 16.6569 20.4851 11.9995C20.4851 7.34113 16.6573 3.51446 12 3.51446ZM12 19.0782C8.09677 19.0782 4.92129 15.9028 4.92129 11.9995C4.92129 8.0963 8.09677 4.92082 12 4.92082C15.9032 4.92082 19.0787 8.0963 19.0787 11.9995C19.0787 15.9028 15.9032 19.0782 12 19.0782ZM23.7723 12.9599C24.0759 12.3585 24.0759 11.6405 23.7723 11.0391L23.4578 10.4163C23.3893 10.2805 23.3654 10.1293 23.3886 9.979L23.4951 9.28956C23.5981 8.62378 23.3762 7.94085 22.9015 7.46274L22.4101 6.9676C22.3029 6.85964 22.2334 6.72322 22.2091 6.57307L22.0974 5.88442C21.9907 5.2268 21.5768 4.65141 20.9883 4.34084C20.9883 4.34084 20.36 3.97073 20.3479 3.96454C20.2127 3.89502 20.1044 3.78678 20.0349 3.65148L19.7158 3.03109C19.415 2.44604 18.8016 2.0134 18.115 1.90201L17.4264 1.79035C17.2762 1.76597 17.1398 1.6965 17.0318 1.58938L16.5367 1.0979C16.0586 0.623299 15.3758 0.401562 14.71 0.504321L14.0205 0.610876C13.8701 0.634128 13.719 0.610173 13.5832 0.541636L12.9604 0.22722C12.359 -0.0763675 11.641 -0.0764144 11.0396 0.22722L10.4168 0.541636C10.2811 0.610126 10.13 0.634034 9.97952 0.610923L9.29007 0.504368C8.62416 0.401375 7.94137 0.623346 7.46325 1.09795L6.96807 1.58938C6.86016 1.69654 6.72374 1.76602 6.57359 1.79039L5.88489 1.90206C5.1983 2.01344 4.58489 2.44604 4.28407 3.03114L3.96506 3.65153C3.89549 3.78678 3.78725 3.89507 3.65196 3.96459L3.03151 4.28365C2.44647 4.58447 2.01382 5.19788 1.90248 5.88447L1.79077 6.57316C1.76644 6.72332 1.69692 6.85969 1.58976 6.96765L1.09837 7.46278C0.62377 7.9409 0.401892 8.62378 0.504791 9.28956L0.611394 9.97905C0.634646 10.1293 0.610691 10.2805 0.542107 10.4163L0.227691 11.0391C-0.0758968 11.6404 -0.0758968 12.3585 0.227691 12.9599L0.542107 13.5827C0.610644 13.7184 0.634599 13.8696 0.611394 14.02L0.504791 14.7095C0.401892 15.3752 0.623817 16.0581 1.09837 16.5362L1.58985 17.0314C1.69701 17.1394 1.76654 17.2757 1.79087 17.4259L1.90258 18.1145C2.01392 18.8012 2.44656 19.4146 3.03161 19.7154L3.652 20.0344C3.78729 20.104 3.89554 20.2122 3.96511 20.3475L4.28412 20.968C4.58499 21.553 5.19839 21.9857 5.88498 22.097L6.57363 22.2087C6.72379 22.2331 6.8602 22.3026 6.96812 22.4097L7.4633 22.9012C7.94151 23.3758 8.62435 23.5975 9.29007 23.4947L9.97957 23.3881C10.1298 23.3649 10.2811 23.3889 10.4168 23.4574L11.0396 23.7718C11.3403 23.9236 11.6702 23.9995 12 23.9995C12.3299 23.9995 12.6597 23.9236 12.9604 23.7718L13.5832 23.4574C13.719 23.3889 13.8702 23.365 14.0205 23.3881L14.7099 23.4947C15.3757 23.5975 16.0586 23.3757 16.5367 22.9011L17.0319 22.4096C17.1398 22.3025 17.2762 22.233 17.4264 22.2086L18.115 22.0969C18.7726 21.9903 19.3481 21.5764 19.6586 20.9878C19.6586 20.9878 20.0288 20.3595 20.0349 20.3474C20.1045 20.2121 20.2127 20.1039 20.348 20.0343L20.9684 19.7153C21.5675 19.4073 21.9896 18.8264 22.0975 18.1613L22.2091 17.4727C22.2335 17.3226 22.303 17.1862 22.4102 17.0782C22.4176 17.0707 22.4249 17.063 22.4319 17.0552L22.9139 16.5237C23.38 16.0462 23.5972 15.3694 23.4952 14.7094L23.3886 14.02C23.3654 13.8696 23.3893 13.7184 23.4578 13.5826L23.7723 12.9599ZM22.5168 12.3261L22.2024 12.9489C22.0009 13.3481 21.9304 13.7928 21.9987 14.2349L22.1053 14.9243C22.1404 15.1507 22.0649 15.383 21.9035 15.5455C21.896 15.553 21.8888 15.5607 21.8816 15.5685L21.3998 16.0999C21.0916 16.4153 20.8916 16.8118 20.8209 17.2476L20.7092 17.9362C20.6725 18.1623 20.529 18.3599 20.3253 18.4646L19.7048 18.7836C19.3137 18.9848 18.9994 19.2959 18.7946 19.6844C18.7946 19.6844 18.4245 20.3126 18.4183 20.3247C18.3136 20.5285 18.116 20.672 17.8899 20.7086L17.2013 20.8203C16.7597 20.892 16.3586 21.0964 16.0411 21.4114L15.546 21.9029C15.3834 22.0643 15.1511 22.1396 14.9248 22.1048L14.2354 21.9982C13.7933 21.9298 13.3486 22.0003 12.9493 22.2019L12.3266 22.5163C12.1221 22.6196 11.8779 22.6196 11.6734 22.5163L11.0506 22.2019C10.7503 22.0503 10.4244 21.9729 10.0932 21.9729C9.98398 21.9729 9.87423 21.9813 9.76463 21.9982L9.07514 22.1048C8.84857 22.1397 8.61652 22.0643 8.45399 21.903L7.95886 21.4115C7.64144 21.0965 7.2403 20.8921 6.79879 20.8204L6.11009 20.7087C5.86351 20.6687 5.63235 20.5145 5.53484 20.3248L5.21579 19.7044C5.01125 19.3067 4.6929 18.9883 4.29513 18.7837L3.67469 18.4647C3.48507 18.3672 3.33079 18.136 3.2908 17.8894L3.17909 17.2008C3.10751 16.7593 2.90311 16.3581 2.58799 16.0407L2.09652 15.5455C1.93511 15.3829 1.85968 15.1507 1.89466 14.9243L2.00121 14.2349C2.06956 13.7928 1.99915 13.3481 1.79752 12.9488L1.48311 12.3261C1.37983 12.1216 1.37983 11.8774 1.48311 11.6729L1.79752 11.0501C1.9991 10.6508 2.06956 10.2061 2.00121 9.76416L1.89466 9.07471C1.85964 8.84829 1.93511 8.61605 2.09652 8.45352L2.58795 7.95838C2.90307 7.64092 3.10751 7.23973 3.17904 6.79827L3.29075 6.10958C3.33074 5.863 3.48502 5.63183 3.67465 5.53433L4.29504 5.21527C4.69281 5.01078 5.01116 4.69243 5.21574 4.29462L5.53475 3.67417C5.63226 3.48455 5.86347 3.33022 6.11005 3.29024L6.79875 3.17857C7.24025 3.10694 7.64139 2.90255 7.95881 2.58748L8.45394 2.09605C8.61657 1.93464 8.8488 1.85935 9.07514 1.89418L9.76463 2.00079C10.2066 2.06904 10.6513 1.99868 11.0506 1.7971L11.6734 1.48268C11.8779 1.37941 12.1221 1.3795 12.3266 1.48268L12.9493 1.7971C13.3486 1.99868 13.7932 2.06904 14.2353 2.00079L14.9248 1.89418C15.1512 1.8594 15.3834 1.93464 15.5459 2.096L16.041 2.58748C16.3585 2.90255 16.7596 3.10699 17.2012 3.17857L17.8898 3.29024C18.1364 3.33022 18.3676 3.48455 18.4651 3.67417L18.7841 4.29457C18.9852 4.68568 19.2964 5.00005 19.6849 5.20486C19.6849 5.20486 20.3131 5.57492 20.3252 5.58111C20.5289 5.68584 20.6724 5.88339 20.7091 6.10953L20.8208 6.79818C20.8924 7.23964 21.0968 7.64083 21.4119 7.95829L21.9033 8.45343C22.0647 8.616 22.1402 8.84819 22.1052 9.07462L21.9986 9.76411C21.9303 10.2062 22.0007 10.6509 22.2023 11.0501L22.5167 11.6729C22.6201 11.8774 22.6201 12.1216 22.5168 12.3261Z",
                fill: "url(#paint0_linear_3202_34007)"
            }),
            /*#__PURE__*/ _jsx("text", {
                x: "50%",
                y: "55%",
                fill: "url(#paint0_linear_3202_34007)",
                textAnchor: "middle",
                dominantBaseline: "middle",
                style: {
                    fontSize: `${rank}`.length > 1 ? ".65rem" : "0.8rem"
                },
                children: rank
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsxs("linearGradient", {
                    id: "paint0_linear_3202_34007",
                    x1: "12",
                    y1: "23.9995",
                    x2: "12",
                    y2: "-0.000471115",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ _jsx("stop", {
                            stopColor: "#FD5900"
                        }),
                        /*#__PURE__*/ _jsx("stop", {
                            offset: "1",
                            stopColor: "#FFDE00"
                        })
                    ]
                })
            })
        ]
    });
};
const Fire = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "30",
        height: "39",
        viewBox: "0 0 30 39",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6.11201 12.2287C5.93388 14.1287 5.80888 17.4912 6.93076 18.9225C6.93076 18.9225 6.40263 15.2287 11.137 10.5943C13.0433 8.7287 13.4839 6.1912 12.8183 4.28808C12.4401 3.20995 11.7495 2.31933 11.1495 1.69745C10.7995 1.33183 11.0683 0.728704 11.5776 0.750579C14.6589 0.888079 19.6526 1.74433 21.7745 7.06933C22.7058 9.40683 22.7745 11.8225 22.3308 14.2787C22.0495 15.8475 21.0495 19.335 23.3308 19.7631C24.9589 20.0693 25.7464 18.7756 26.0995 17.8443C26.2464 17.4568 26.7558 17.36 27.0308 17.6693C29.7808 20.7975 30.0151 24.4818 29.4464 27.6537C28.3464 33.785 22.137 38.2475 15.9683 38.2475C8.262 38.2475 2.12763 33.8381 0.537005 25.8568C-0.10362 22.635 0.221381 16.26 5.19013 11.76C5.55888 11.4225 6.16201 11.7225 6.11201 12.2287Z",
                fill: "url(#paint0_radial_3202_682)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18.7846 23.6912C15.944 20.0349 17.2158 15.863 17.9127 14.2005C18.0065 13.9818 17.7565 13.7755 17.5596 13.9099C16.3377 14.7412 13.8346 16.6974 12.669 19.4505C11.0908 23.1724 11.2033 24.9943 12.1377 27.2193C12.7002 28.5599 12.0471 28.8443 11.719 28.8943C11.4002 28.9443 11.1065 28.7318 10.8721 28.5099C10.1978 27.8626 9.71735 27.0402 9.48459 26.1349C9.43459 25.9412 9.18146 25.888 9.06584 26.0474C8.19084 27.2568 7.73771 29.1974 7.71584 30.5693C7.64709 34.8099 11.1502 38.2474 15.3877 38.2474C20.7283 38.2474 24.619 32.3412 21.5502 27.4037C20.6596 25.9662 19.8221 25.0255 18.7846 23.6912Z",
                fill: "url(#paint1_radial_3202_682)"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", {
                        id: "paint0_radial_3202_682",
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "translate(14.4419 38.3446) rotate(-179.751) scale(22.0586 36.1938)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.314",
                                stopColor: "#FF9800"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.662",
                                stopColor: "#FF6D00"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.972",
                                stopColor: "#F44336"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", {
                        id: "paint1_radial_3202_682",
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "translate(15.6815 16.3907) rotate(90.5787) scale(23.0801 17.3695)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.214",
                                stopColor: "#FFF176"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.328",
                                stopColor: "#FFF27D"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.487",
                                stopColor: "#FFF48F"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.672",
                                stopColor: "#FFF7AD"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.793",
                                stopColor: "#FFF9C4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.822",
                                stopColor: "#FFF8BD",
                                stopOpacity: "0.804"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.863",
                                stopColor: "#FFF6AB",
                                stopOpacity: "0.529"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.91",
                                stopColor: "#FFF38D",
                                stopOpacity: "0.209"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.941",
                                stopColor: "#FFF176",
                                stopOpacity: "0"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 8075:
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
/* harmony import */ var components_ui_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2527);
/* harmony import */ var components_pages_item_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2643);
/* harmony import */ var components_pages_item_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2370);
/* harmony import */ var components_pages_item_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(components_pages_item_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1150);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui_Header__WEBPACK_IMPORTED_MODULE_4__, components_ui_categories__WEBPACK_IMPORTED_MODULE_7__, components_pages_item_product__WEBPACK_IMPORTED_MODULE_8__]);
([components_ui_Header__WEBPACK_IMPORTED_MODULE_4__, components_ui_categories__WEBPACK_IMPORTED_MODULE_7__, components_pages_item_product__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












async function getServerSideProps(ctx) {
    const { id: productId  } = ctx.query;
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
    await fetch(config__WEBPACK_IMPORTED_MODULE_9__/* .endpoints.server.browse */ .Hv.server.browse + `/${productId}`, {
        headers: {
            origin: ctx.req.headers.host
        }
    }).then((res)=>res.json()).then((data)=>{
        if (data.success) {
            props.product = data.data;
        }
    });
    return {
        props: JSON.parse(JSON.stringify(props))
    };
}
const Item = ({ product , siteData  })=>{
    const { compare , setSiteConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .D);
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
    if (!product) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: (components_pages_item_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().landingPage),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            charSet: "utf-8"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: siteData.siteTitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:title",
                            content: siteData.siteTitle
                        }),
                        siteData?.favicon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            href: siteData.favicon
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "Sorry, Product can not be found"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (components_pages_item_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().landingPage),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${product.title} | ${siteData.siteTitle}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: product.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: `${product.title} | ${siteData.siteTitle}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: product.description
                    }),
                    siteData?.favicon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: siteData.favicon
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_categories__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_item_product__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                product: product,
                showHomePath: siteData?.siteConfig?.landingPage?.viewLandingPage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            compare?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                href: config__WEBPACK_IMPORTED_MODULE_9__/* .paths.compare */ .Hb.compare,
                className: (components_pages_item_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().compareLink),
                children: "Compare"
            })
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

/***/ 5804:
/***/ ((module) => {

"use strict";
module.exports = require("react-multi-carousel");

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

/***/ 1780:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/fi");;

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

/***/ 3254:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/im");;

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

/***/ 1154:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/pi");;

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
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,946,150,774,441,382,527,230], () => (__webpack_exec__(8075)));
module.exports = __webpack_exports__;

})();