(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4389:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "hero_hero__E71zm",
	"background": "hero_background__d42AQ",
	"wrapper": "hero_wrapper___mea1",
	"react-multi-carousel-track": "hero_react-multi-carousel-track__VTQ4Z",
	"react-multi-carousel-list": "hero_react-multi-carousel-list__gBGow",
	"heroOne": "hero_heroOne__41jwv",
	"heroItem": "hero_heroItem__nw1es",
	"heroTitle": "hero_heroTitle__mOsVx",
	"image": "hero_image__Sz7ec",
	"heroThumbnail": "hero_heroThumbnail__msRVa",
	"thumbnailWrapper": "hero_thumbnailWrapper__s4jTU",
	"selected": "hero_selected__a_o4x",
	"hero-item": "hero_hero-item__ywrQ0",
	"hero-thumbnail": "hero_hero-thumbnail__l33X7",
	"thumbnail-wrapper": "hero_thumbnail-wrapper__S7lr9"
};


/***/ }),

/***/ 2492:
/***/ ((module) => {

// Exports
module.exports = {
	"landingPage": "landingPage_landingPage__dxI4J",
	"shelf": "landingPage_shelf__pDo49",
	"shelfHead": "landingPage_shelfHead__2Cb_G",
	"shelfTitle": "landingPage_shelfTitle__62M4q",
	"more": "landingPage_more__lFu9F",
	"content": "landingPage_content__pKncH",
	"seller": "landingPage_seller__UTSyA",
	"sellerBenner": "landingPage_sellerBenner__a_AIU",
	"sellerDetail": "landingPage_sellerDetail__Y1dA_",
	"sellerProfilePic": "landingPage_sellerProfilePic__dLXuM",
	"detail": "landingPage_detail__EGsCN",
	"usdc": "landingPage_usdc__0nWf9",
	"horizontal": "landingPage_horizontal__TP1ub",
	"explore": "landingPage_explore__6MaX6",
	"devider": "landingPage_devider__gYXlr",
	"filters": "landingPage_filters__PrRR2",
	"chip": "landingPage_chip__ETZz4",
	"selected": "landingPage_selected__4mRkD",
	"shelfPlaceholder": "landingPage_shelfPlaceholder__cCoi0",
	"loading": "landingPage_loading__o_5QX",
	"countdown": "landingPage_countdown__0Ze9j"
};


/***/ }),

/***/ 1841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var SiteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9711);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5804);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_hero_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4389);
/* harmony import */ var _styles_hero_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_hero_module_scss__WEBPACK_IMPORTED_MODULE_4__);





function Hero() {
    const { siteConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .D);
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 0
            },
            items: 1
        }
    };
    if (siteConfig.siteConfig?.landingPage?.hero?.viewHeroSection && siteConfig.siteConfig?.landingPage?.hero?.slides?.length > 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_styles_hero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero)} heroGlobal`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {
                containerClass: (_styles_hero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
                responsive: responsive,
                dotListClass: (_styles_hero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dot),
                autoPlaySpeed: 1000,
                infinite: true,
                showDots: true,
                draggable: false,
                children: siteConfig.siteConfig?.landingPage?.hero?.slides.map((url)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: url
                    }, url))
            })
        });
    }
    return null;
}
const popularItems = [
    {
        label: "Top items",
        title: "Jordan Immortal #3 Rare Limited Edition",
        images: [
            "https://d1iczm3wxxz9zd.cloudfront.net/55d57c6d-0986-4ea3-ae31-76f61f5d7519/000000-0000000002/13217307497841280502913285800380124840902678847690935389542581177216891648005/ITEM_PREVIEW1.gif",
            "https://d1iczm3wxxz9zd.cloudfront.net/d014b825-5d57-4b9f-a280-b6137541c412/000000-0000000002/10127432022877634189365778124244719449024239341522417111769156633193654536487/ITEM_PREVIEW1.gif",
            "https://d1iczm3wxxz9zd.cloudfront.net/80adf45d-c5a9-42dc-874b-3b962b038feb/000000-0000000000/60972941801828568119289275729780257962306693057622454507545479710310788509792/ITEM_PREVIEW1.jpg"
        ]
    },
    {
        label: "Just dropped",
        title: "4 Abstract painting from Marek Okon",
        images: [
            "https://images.unsplash.com/photo-1633702879143-acd134698722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1638064867432-8d3e00905d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1632211198451-1e1b70c15b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        ]
    },
    {
        label: "Just dropped",
        title: "Images of some gold coins",
        images: [
            "https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3J5cHRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=60",
            "https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyeXB0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&h=500&q=60",
            "https://images.unsplash.com/photo-1621504450188-702fdbbfc9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNyeXB0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&h=500&q=60"
        ]
    }
];
function HeroOne() {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 0
            },
            items: 1
        }
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: `${s.heroOne} heroGlobal`,
        children: [
            /*#__PURE__*/ _jsx("img", {
                src: "/assets/hero_background.jpg",
                className: s.background
            }),
            /*#__PURE__*/ _jsx("div", {
                className: s.wrapper,
                children: /*#__PURE__*/ _jsx(Carousel, {
                    containerClass: s.wrapper,
                    responsive: responsive,
                    dotListClass: s.dot,
                    autoPlaySpeed: 1000,
                    infinite: true,
                    showDots: true,
                    draggable: false,
                    children: popularItems.map((item, i)=>/*#__PURE__*/ _jsx(HeroItem, {
                            item: item
                        }, i))
                })
            })
        ]
    });
}
const HeroItem = ({ item  })=>{
    const img_ref = useRef();
    const [img, setImg] = useState(item.images[0]);
    const [style, setStyle] = useState({
        transform: "translateY(0)"
    });
    useEffect(()=>{
        if (item.images.indexOf(img) !== item.images.length - 1) {
            const { height  } = img_ref.current.getBoundingClientRect();
            setStyle({
                transform: `translateY(-${(height + 8) * item.images.indexOf(img) - (height + 8)}px)`
            });
        }
    }, [
        img
    ]);
    return /*#__PURE__*/ _jsxs("div", {
        className: s.heroItem,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: s.heroTitle,
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        children: item.label
                    }),
                    /*#__PURE__*/ _jsx("h1", {
                        children: item.title
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: s.image,
                children: img && /*#__PURE__*/ _jsx("img", {
                    src: img
                })
            }),
            item.images.length > 1 && /*#__PURE__*/ _jsx("div", {
                className: s.heroThumbnail,
                children: /*#__PURE__*/ _jsx("div", {
                    className: s.thumbnailWrapper,
                    style: style,
                    children: item.images.map((_img)=>/*#__PURE__*/ _jsx("img", {
                            ref: img_ref,
                            className: img === _img ? "selected" : "",
                            src: _img,
                            onClick: ()=>setImg(_img),
                            draggable: false
                        }, _img))
                })
            })
        ]
    });
};


/***/ }),

/***/ 8933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Shelves)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4382);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7807);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1150);
/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8824);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2492);
/* harmony import */ var _styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9__);










function Shelves() {
    const [shelves, setShelves] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { get: getShelves , loading  } = (0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_5__/* .endpoints.landingPageShelves */ .Hv.landingPageShelves);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getShelves().then(({ data  })=>{
            if (data?.success) {
                setShelves(data.data);
            }
        }).catch((err)=>(0,components_modal__WEBPACK_IMPORTED_MODULE_6__/* .Prompt */ .N)({
                type: "error",
                message: err.message
            }));
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().loading)}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_8__.ImSpinner8, {
                className: "spinner"
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: shelves?.length > 0 ? (shelves?.map((shelf)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shelf)} ${(_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().products)}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shelfHead),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shelfTitle),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: shelf.title
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: {
                                    pathname: config__WEBPACK_IMPORTED_MODULE_5__/* .paths.browse */ .Hb.browse,
                                    query: shelf.query
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: `btn primary ${(_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().more)}`,
                                    children: [
                                        "See All ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineArrowNarrowRight, {})
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().content)} ${shelf.horizontalSlide ? (_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().horizontal) : ""}`,
                        children: shelf.products?.map((product, i1)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_3__/* .ProductThumb */ .B, {
                                product: product
                            }, product._id))
                    })
                ]
            }, shelf.title || i))) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shelfPlaceholder),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: config__WEBPACK_IMPORTED_MODULE_5__/* .paths.browse */ .Hb.browse,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: "btn primary",
                    children: [
                        "Browse all of our products ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineArrowNarrowRight, {})
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 6616:
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
/* harmony import */ var components_pages_index_hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1841);
/* harmony import */ var components_pages_index_shelves__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8933);
/* harmony import */ var components_pages_index_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2492);
/* harmony import */ var components_pages_index_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(components_pages_index_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1150);
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7474);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui_Header__WEBPACK_IMPORTED_MODULE_4__]);
components_ui_Header__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












async function getServerSideProps(ctx) {
    const props = {
        siteData: await (0,helpers__WEBPACK_IMPORTED_MODULE_10__/* .getSiteData */ .z)(ctx)
    };
    if (props.siteData) {
        if (!props.siteData.siteConfig?.landingPage?.viewLandingPage) {
            return {
                redirect: {
                    destination: config__WEBPACK_IMPORTED_MODULE_9__/* .paths.browse */ .Hb.browse,
                    permanent: false
                }
            };
        }
    }
    return {
        props
    };
}
const LandingPage = ({ siteData  })=>{
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
        className: (components_pages_index_styles_landingPage_module_scss__WEBPACK_IMPORTED_MODULE_11___default().landingPage),
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: siteData.logo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: siteData.siteDescription
                    }),
                    siteData?.favicon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: siteData.favicon
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_index_hero__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_index_shelves__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);

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

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 5856:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/go");

/***/ }),

/***/ 1111:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/hi");

/***/ }),

/***/ 924:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/im");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ 8098:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ri");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,880,150,711,57,382], () => (__webpack_exec__(6616)));
module.exports = __webpack_exports__;

})();