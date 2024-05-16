exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 7848:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "style_container__MVpGC",
	"wrapper": "style_wrapper__MBIS0",
	"products": "style_products__cGXnc",
	"items": "style_items___kUo9",
	"itemWrapper": "style_itemWrapper__QxseI",
	"product": "style_product__oAPk0",
	"detailLabel": "style_detailLabel__bgUQv",
	"detail": "style_detail__HYN3T"
};


/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Checkout),
/* harmony export */   "v": () => (/* binding */ CompareProducts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var SiteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9711);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7848);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7807);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1150);
/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8824);
/* harmony import */ var components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4382);








function Checkout({ product  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Products, {
                product: product
            })
        })
    });
}
const Products = ()=>{
    const { compare  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .D);
    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { get: getProducts , loading  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_4__/* .endpoints.browse */ .Hv.browse);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (compare.length) {
            getProducts({
                query: {
                    _ids: compare
                }
            }).then(({ data  })=>{
                if (!data.success) {
                    return (0,components_modal__WEBPACK_IMPORTED_MODULE_5__/* .Prompt */ .N)({
                        type: "error",
                        message: data.message
                    });
                }
                setProducts(data.data);
            }).catch((err)=>(0,components_modal__WEBPACK_IMPORTED_MODULE_5__/* .Prompt */ .N)({
                    type: "error",
                    message: err.message
                }));
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().products),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Product Comparison"
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Loading..."
            }) : products.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "No products to compare"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CompareProducts, {
                products: products
            })
        ]
    });
};
const CompareProducts = ({ products  })=>{
    const { siteConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .D);
    const [fields, setFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (products.length) {
            setFields(siteConfig?.siteConfig?.productFields.filter((item)=>!item.subcategory || item.subcategory === products[0].subcategory).filter((item)=>![
                    "title",
                    "description",
                    "images",
                    "price",
                    "whatsappNumber",
                    "latlng",
                    "specification",
                    "variants",
                    "category",
                    "subcategory"
                ].includes(item.name)));
        }
    }, [
        products
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().itemWrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().product),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                    fields.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().detailLabel),
                            children: item.label
                        }, item.name))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().products),
                children: products.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Product, {
                        product: item,
                        fields: fields
                    }, i))
            })
        ]
    });
};
const Product = ({ product , fields  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().product),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_6__/* .ProductThumb */ .B, {
                product: product
            }),
            fields.map((item)=>{
                const value = product[item.name];
                if (item.dataType === "array") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().detail),
                        children: value?.join(", ") || "N/A"
                    }, item.name);
                }
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().detail),
                    children: value || "N/A"
                }, item.name);
            })
        ]
    });
};


/***/ })

};
;