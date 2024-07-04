(() => {
var exports = {};
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 6412:
/***/ ((module) => {

// Exports
module.exports = {
	"paths": "products_paths__55GlB",
	"container": "products_container__x7d_h",
	"sidebarOpen": "products_sidebarOpen__7Bdu9",
	"sidebar": "products_sidebar__b5QM9",
	"clearFilters": "products_clearFilters__wgank",
	"section": "products_section__a50fI",
	"head": "products_head__pbuC4",
	"sectionContent": "products_sectionContent__6yMTl",
	"filterList": "products_filterList__5ZzyN",
	"categorySection": "products_categorySection__BPRDk",
	"categories": "products_categories__OGk1q",
	"subcategories": "products_subcategories__GIiUY",
	"backToCategories": "products_backToCategories__Nh1Vw",
	"sidebarToggle": "products_sidebarToggle__tHi7m",
	"content": "products_content__Fq2Bz",
	"ribbon": "products_ribbon__b5c7V",
	"products": "products_products__9hKj8",
	"placeholder": "products_placeholder__ZT0QY",
	"loading": "products_loading__tx5k8"
};


/***/ }),

/***/ 631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Products)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8824);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9379);
/* harmony import */ var components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4382);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1905);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1150);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7807);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6412);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_elements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_modal__WEBPACK_IMPORTED_MODULE_2__, _sidebar__WEBPACK_IMPORTED_MODULE_3__, components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_4__, react_icons_hi__WEBPACK_IMPORTED_MODULE_5__, components_elements__WEBPACK_IMPORTED_MODULE_9__]);
([components_modal__WEBPACK_IMPORTED_MODULE_2__, _sidebar__WEBPACK_IMPORTED_MODULE_3__, components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_4__, react_icons_hi__WEBPACK_IMPORTED_MODULE_5__, components_elements__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Products({ showPath  }) {
    const anchorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        sort: "price-asc"
    });
    const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [metadata, setMetadata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        page: 1,
        pageSize: 10
    });
    const [fields, setFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [subcategory, setSubcategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { get: getCategories  } = (0,hooks__WEBPACK_IMPORTED_MODULE_7__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_6__/* .endpoints.categories */ .Hv.categories);
    const { get: fetchProducts , loading  } = (0,hooks__WEBPACK_IMPORTED_MODULE_7__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_6__/* .endpoints.browse */ .Hv.browse);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        router.replace({
            pathname: config__WEBPACK_IMPORTED_MODULE_6__/* .paths.browse */ .Hb.browse,
            query: {
                ...Object.entries({
                    ...router.query,
                    ...filters
                }).filter(([key, value], i)=>value === 0 || value).reduce((p, c)=>{
                    p[c[0]] = c[1];
                    return p;
                }, {})
            }
        }, undefined, {
            shallow: true
        });
    }, [
        filters
    ]);
    const getProducts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ page , pageSize  } = {})=>{
        if (loading) return;
        fetchProducts({
            query: {
                ...router.query,
                page: page || metadata?.page || 1,
                pageSize: pageSize || metadata?.pageSize || 10
            }
        }).then(({ data  })=>{
            if (!data?.success) {
                if (data?.message) {
                    (0,components_modal__WEBPACK_IMPORTED_MODULE_2__/* .Prompt */ .N)({
                        type: "error",
                        message: data.message
                    });
                }
                return;
            }
            setProducts((prev)=>data.metadata?.page === 1 ? data.data : [
                    ...prev,
                    ...data.data
                ]);
            setMetadata(data.metadata);
        }).catch((err)=>(0,components_modal__WEBPACK_IMPORTED_MODULE_2__/* .Prompt */ .N)({
                type: "error",
                message: err.message
            }));
    }, [
        router.query,
        metadata,
        loading
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getProducts({
            page: 1,
            pageSize: 10
        });
    }, [
        router.query
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getCategories().then(({ data  })=>{
            if (data?.success) {
                setCategories(data.data);
            } else {
                (0,components_modal__WEBPACK_IMPORTED_MODULE_2__/* .Prompt */ .N)({
                    type: "error",
                    message: data.message
                });
            }
        }).catch((err)=>(0,components_modal__WEBPACK_IMPORTED_MODULE_2__/* .Prompt */ .N)({
                type: "error",
                message: err.message
            }));
        if (window.innerWidth > 480) {
            setSidebarOpen(true);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let lastScrollY = window.scrollY;
        const handler = ()=>{
            let direction = lastScrollY < window.scrollY ? "down" : "up";
            lastScrollY = window.scrollY;
            const anchorVisible = anchorRef.current?.getBoundingClientRect().top < window.innerHeight;
            if (direction === "down" && !loading && anchorVisible) {
                getProducts({
                    page: (metadata?.page || 0) + 1,
                    pageSize: metadata?.pageSize || 10
                });
            }
        };
        window.addEventListener("scroll", handler);
        return ()=>{
            window.removeEventListener("scroll", handler);
        };
    }, [
        loading,
        metadata
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container)} ${sidebarOpen ? (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sidebarOpen) : ""}`,
        children: [
            showPath && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_9__/* .Paths */ .nB, {
                paths: [
                    {
                        label: "Home",
                        path: "/"
                    },
                    {
                        label: "Browse"
                    }
                ],
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10___default().paths)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: `btn ${(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sidebarToggle)}`,
                onClick: ()=>setSidebarOpen(!sidebarOpen),
                children: [
                    "Filters ",
                    sidebarOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiChevronUp, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiChevronDown, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                categories: categories,
                fields: fields,
                setFields: setFields,
                subcategory: subcategory,
                setSubCategory: setSubcategory,
                open: sidebarOpen,
                filters: filters,
                setFilters: setFilters
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10___default().content)} ${(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10___default().products)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10___default().products),
                        children: products.length > 0 ? products.map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_4__/* .ProductThumb */ .B, {
                                product: product
                            }, product._id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                            children: loading ? "Loading..." : "No Product found"
                        })
                    }),
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_10___default().loading),
                        children: "Loading..."
                    }),
                    metadata?.totalRecord > products.length && !loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "anchor",
                        ref: anchorRef,
                        style: {
                            height: "1rem",
                            width: "1rem"
                        }
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9379:
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
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1905);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6412);
/* harmony import */ var _styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7807);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1150);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9650);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1780);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_elements__WEBPACK_IMPORTED_MODULE_3__, react_icons_hi__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, react_icons_bs__WEBPACK_IMPORTED_MODULE_9__, react_icons_fi__WEBPACK_IMPORTED_MODULE_10__]);
([components_elements__WEBPACK_IMPORTED_MODULE_3__, react_icons_hi__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, react_icons_bs__WEBPACK_IMPORTED_MODULE_9__, react_icons_fi__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Sidebar = ({ categories , subcategory , setSubcategory , fields , setFields , open , filters , setFilters  })=>{
    const queryLoaded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const fieldsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    const { siteConfig: { siteConfig  }  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .D);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { control , reset , watch , getValues , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!queryLoaded.current) {
            const values = {
                sort: router.query?.sort || "price-asc",
                category: router.query.category || undefined,
                subcategories: router.query.subcategories || []
            };
            siteConfig?.browsePage?.sidebarFilters?.forEach((field)=>{
                if (router.query[field.fieldName]) {
                    values[field.fieldName] = router.query[field.fieldName];
                } else if (router.query[field.fieldName + "-min"] || router.query[field.fieldName + "-max"]) {
                    if (field.filterType === "range") {
                        values[field.fieldName + "-range"] = {
                            min: +router.query[field.fieldName + "-min"],
                            max: +router.query[field.fieldName + "-max"]
                        };
                    } else {
                        values[field.fieldName + "-min"] = +router.query[field.fieldName + "-min"];
                        values[field.fieldName + "-max"] = +router.query[field.fieldName + "-max"];
                    }
                }
            });
            reset(values);
            setFilters(values);
            queryLoaded.current = true;
        }
    }, [
        siteConfig?.browsePage?.sidebarFilters,
        router.query
    ]);
    if (!open) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar),
        children: [
            Object.keys(router.query).length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().clearFilters),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: "btn",
                    type: "button",
                    onClick: ()=>{
                        reset(fieldsRef.current);
                        setFields(null);
                        router.replace({
                            pathname: config__WEBPACK_IMPORTED_MODULE_7__/* .paths.browsePage */ .Hb.browsePage,
                            query: {
                                sort: router.query.sort
                            }
                        }, undefined, {
                            shallow: true
                        });
                        setTimeout(()=>{
                            setFilters({});
                        }, 10);
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiOutlineX, {}),
                        "Clear All Filters"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {
                label: "Sort",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .Combobox */ .hQ, {
                    control: control,
                    name: "sort",
                    options: [
                        // { label: "Popularity", value: "popular" },
                        {
                            label: "Price Low to High",
                            value: "price-asc"
                        },
                        {
                            label: "Price High to Low",
                            value: "price-dsc"
                        }
                    ],
                    onChange: (opt)=>setFilters({
                            ...filters,
                            sort: opt.value
                        })
                })
            }),
            !fields ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().categorySection),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "Categories"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().categories),
                        children: categories.map((cat)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .Checkbox */ .XZ, {
                                        label: cat.name,
                                        checked: filters.category === cat.name,
                                        onChange: (e)=>{
                                            if (filters.category === cat.name) {
                                                setFilters((prev)=>({
                                                        ...prev,
                                                        category: undefined,
                                                        subcategories: []
                                                    }));
                                            } else {
                                                setFilters((prev)=>({
                                                        ...prev,
                                                        category: cat.name,
                                                        subcategories: (cat.subcategories || []).map((sc)=>sc.name)
                                                    }));
                                            }
                                        }
                                    }),
                                    cat.subcategories?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().subcategories),
                                        children: cat.subcategories.map((subCat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                label: subCat.name,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .Checkbox */ .XZ, {
                                                    label: subCat.name,
                                                    checked: filters.category === cat.name && (filters.subcategories || []).includes(subCat.name),
                                                    onChange: (e)=>{
                                                        if (filters.category === cat.name && (filters.subcategories || []).includes(subCat.name)) {
                                                            setFilters((prev)=>({
                                                                    ...prev,
                                                                    subcategories: prev.subcategories.filter((sc)=>sc !== subCat.name)
                                                                }));
                                                        } else {
                                                            setFilters((prev)=>({
                                                                    ...prev,
                                                                    category: cat.name,
                                                                    subcategories: prev.category !== cat.name ? [
                                                                        subCat.name
                                                                    ] : [
                                                                        ...(prev.subcategories || []).filter((sc)=>(cat.subcategories || []).some((item)=>item.name === sc)),
                                                                        subCat.name
                                                                    ]
                                                                }));
                                                        }
                                                        setFields(e.target.checked ? siteConfig?.browsePage?.sidebarFilters.find((item)=>item.category === cat.name && item.subcategory === subCat.name)?.filters : null);
                                                    }
                                                })
                                            }, subCat.name))
                                    })
                                ]
                            }, cat.name))
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().backToCategories),
                onClick: ()=>{
                    setFields(null);
                    setFilters((prev)=>({
                            category: prev.category,
                            subcategory: undefined
                        }));
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsArrowLeft, {
                        style: {
                            fontSize: "1.3em"
                        }
                    }),
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "flex align-center gap_5",
                        children: [
                            filters.category,
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiChevronRight, {}),
                            " ",
                            filters.subcategory
                        ]
                    })
                ]
            }),
            (fields || []).map((f)=>{
                const field = siteConfig.productFields.find((field)=>field.name === f.fieldName);
                if (!field) {
                    return null;
                }
                if (f.filterType === "textSearch" || f.filterType === "match") {
                    fieldsRef.current = {
                        ...fieldsRef.current,
                        [field.name]: ""
                    };
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {
                        label: field.label,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
                            control: control,
                            name: field.name,
                            type: field.inputType,
                            onChange: (e)=>{
                                setFilters((prev)=>({
                                        ...prev,
                                        [field.name]: e.target.value || ""
                                    }));
                            }
                        })
                    }, f.fieldName);
                } else if (f.filterType === "minMax") {
                    fieldsRef.current = {
                        ...fieldsRef.current,
                        [`${field.name}-min`]: "",
                        [`${field.name}-max`]: ""
                    };
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Section, {
                        label: field.label,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
                                control: control,
                                name: `${field.name}-min`,
                                type: field.inputType,
                                placeholder: "MIN",
                                onChange: (e)=>{
                                    const max = getValues(`${field.name}-max`);
                                    if (+e.target.value <= +max) {
                                        setFilters((prev)=>({
                                                ...prev,
                                                [`${field.name}-min`]: +e.target.value,
                                                [`${field.name}-max`]: +max
                                            }));
                                    } else {
                                        setFilters((prev)=>({
                                                ...prev,
                                                [`${field.name}-min`]: "",
                                                [`${field.name}-max`]: ""
                                            }));
                                    }
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
                                control: control,
                                name: `${field.name}-max`,
                                type: field.inputType,
                                placeholder: "MAX",
                                onChange: (e)=>{
                                    const min = getValues(`${field.name}-min`);
                                    if (+e.target.value >= +min) {
                                        setFilters((prev)=>({
                                                ...prev,
                                                [`${field.name}-max`]: +e.target.value,
                                                [`${field.name}-min`]: +min
                                            }));
                                    } else {
                                        setFilters((prev)=>({
                                                ...prev,
                                                [`${field.name}-max`]: "",
                                                [`${field.name}-min`]: ""
                                            }));
                                    }
                                }
                            }),
                            +getValues(`${field.name}-max`) < +getValues(`${field.name}-min`) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "subtitle1",
                                children: "Max must be greater then Min"
                            })
                        ]
                    }, f.fieldName);
                } else if (f.filterType === "range") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {
                        label: field.label,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e6, {
                            control: control,
                            name: `${field.name}-range`,
                            setValue: setValue,
                            type: field.inputType,
                            placeholder: `${field.label} range`,
                            onChange: ({ min , max  })=>{
                                if (min <= max) {
                                    setFilters((prev)=>({
                                            ...prev,
                                            [`${field.name}-min`]: min,
                                            [`${field.name}-max`]: max
                                        }));
                                } else {
                                    setFilters((prev)=>({
                                            ...prev,
                                            [`${field.name}-min`]: "",
                                            [`${field.name}-max`]: ""
                                        }));
                                }
                            },
                            min: +f.min,
                            max: +f.max
                        })
                    }, f.fieldName);
                } else if ([
                    "list",
                    "dropdown"
                ].includes(f.filterStyle)) {
                    fieldsRef.current = {
                        ...fieldsRef.current,
                        [field.name]: []
                    };
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FilterList, {
                        field: field,
                        sidebarItem: f,
                        setFilters: setFilters,
                        control: control
                    }, f.fieldName);
                }
            })
        ]
    });
};
const FilterList = ({ field , setFilters , sidebarItem , control  })=>{
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { get: getOptions  } = (0,hooks__WEBPACK_IMPORTED_MODULE_6__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_7__/* .endpoints.elements */ .Hv.elements + `/${field?.collection || ""}`);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (sidebarItem.filterStyle === "list") {
            setFilters((prev)=>{
                return {
                    ...prev,
                    [field.name]: selected?.length ? selected : ""
                };
            });
        }
    }, [
        selected
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (field.optionType === "collection") {
            getOptions().then(({ data  })=>{
                if (data?.success) {
                    return setOptions(data.data.map((item)=>({
                            label: item[field.optionLabel],
                            value: item[field.optionValue]
                        })));
                }
            }).catch((err)=>console.log(err));
        }
    }, []);
    if (sidebarItem.filterStyle === "list") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {
            label: field.label,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().filterList),
                children: (field.optionType === "array" ? field.options : options).map((option, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: `${field.name}_${option.label}`,
                                type: "checkbox",
                                checked: selected.includes(option.value),
                                onChange: (e)=>{
                                    if (selected.includes(option.value)) {
                                        setSelected((prev)=>prev.filter((item)=>item !== option.value));
                                    } else {
                                        setSelected((prev)=>[
                                                ...prev,
                                                option.value
                                            ]);
                                    }
                                }
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: `${field.name}_${option.label}`,
                                children: option.label
                            })
                        ]
                    }, i))
            })
        });
    } else if (sidebarItem.filterStyle === "dropdown") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {
            label: field.label,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements__WEBPACK_IMPORTED_MODULE_3__/* .Select */ .Ph, {
                control: control,
                ...field.optionType === "array" && {
                    options: field.options
                },
                ...field.optionType === "collection" && {
                    url: `${config__WEBPACK_IMPORTED_MODULE_7__/* .endpoints.elements */ .Hv.elements}/${field.collection}`,
                    getQuery: (inputValue, selected)=>({
                            ...inputValue && {
                                [field.optionLabel]: inputValue
                            },
                            ...selected && {
                                [field.optionValue]: selected
                            }
                        }),
                    handleData: (item)=>({
                            label: item[field.optionLabel],
                            value: item[field.optionValue]
                        })
                },
                multiple: true,
                name: field.name,
                formOptions: {
                    required: field.required
                },
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().itemName),
                onChange: (e)=>{
                    setFilters((prev)=>({
                            ...prev,
                            [field.name]: e.length ? e.map((item)=>item.value) : ""
                        }));
                }
            })
        });
    }
    return null;
};
const Section = ({ label , children , className  })=>{
    const { siteConfig: { siteConfig  }  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .D);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().section)} ${className || ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().head),
                onClick: ()=>setOpen(!open),
                children: label
            }),
            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_products_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sectionContent),
                onClick: (e)=>e.stopPropagation(),
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ hooks__WEBPACK_IMPORTED_MODULE_11__.Ns)
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
/* harmony import */ var components_pages_browse_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(631);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1150);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7807);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui_Header__WEBPACK_IMPORTED_MODULE_4__, components_ui_categories__WEBPACK_IMPORTED_MODULE_7__, components_pages_browse_products__WEBPACK_IMPORTED_MODULE_8__]);
([components_ui_Header__WEBPACK_IMPORTED_MODULE_4__, components_ui_categories__WEBPACK_IMPORTED_MODULE_7__, components_pages_browse_products__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Browse = ({ siteData  })=>{
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: siteData.siteConfig?.siteTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: siteData.siteConfig?.siteTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: siteData.logo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "description",
                        content: siteData.siteConfig.siteDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: siteData.siteConfig.siteDescription
                    }),
                    siteData?.favicon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: siteData.favicon
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_categories__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_browse_products__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                showPath: siteData?.siteConfig?.landingPage?.viewLandingPage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            compare?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                href: config__WEBPACK_IMPORTED_MODULE_10__/* .paths.compare */ .Hb.compare,
                children: "Compare"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Browse);

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

/***/ 4114:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/ri");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,946,150,774,441,382,527], () => (__webpack_exec__(3879)));
module.exports = __webpack_exports__;

})();