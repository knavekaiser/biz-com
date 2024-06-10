"use strict";
exports.id = 774;
exports.ids = [774];
exports.modules = {

/***/ 9711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ SiteContext),
/* harmony export */   "z": () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1150);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7807);





const SiteContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const Provider = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [siteConfig, setSiteConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        siteTitle: "Biz App"
    });
    const [compare, setCompare] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // do something
        if (user) {
        // load cart from backend
        } else {
            try {
                const _cart = JSON.parse(localStorage.getItem("cart") || "[]");
                setCart(_cart);
            } catch (err) {
                localStorage.setItem("cart", "[]");
            }
        }
    }, [
        user
    ]);
    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { get: getCart , post: updateCart , loading: loadingCart  } = (0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.cart */ .Hv.cart);
    const addToCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (product, qty)=>{
        let newCart = [];
        try {
            newCart = JSON.parse(localStorage.getItem("cart") || "[]");
        } catch (err) {
            localStorage.setItem("cart", "[]");
        }
        const existingProductIndex = newCart.findIndex((item)=>item.product._id === product.product._id && (!product.variant ? !item.variant : item.variant?._id === product.variant._id));
        if (existingProductIndex !== -1) {
            if (qty) {
                newCart[existingProductIndex].qty = qty;
            } else {
                newCart[existingProductIndex].qty += product.qty;
            }
        } else {
            newCart.push(product);
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart(newCart);
        if (user) {
            await updateCart({
                products: newCart
            });
        }
    }, [
        user
    ]);
    const removeFromCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (product)=>{
        let newCart = [];
        try {
            newCart = JSON.parse(localStorage.getItem("cart") || "[]");
        } catch (err) {
            localStorage.setItem("cart", "[]");
        }
        const existingProductIndex = newCart.findIndex((item)=>item.product._id === product.product._id && (!product.variant ? !item.variant : item.variant?._id === product.variant._id));
        if (existingProductIndex >= 0) {
            newCart.splice(existingProductIndex, 1);
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart(newCart);
        if (user) {
            await updateCart({
                products: newCart
            });
        }
    }, [
        user
    ]);
    const emptyCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        let newCart = [];
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart(newCart);
        if (user) {
            await updateCart({
                products: newCart
            });
        }
    }, [
        user
    ]);
    const logout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        fetch(config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.logout */ .Hv.logout, {
            method: "POST"
        }).then((res)=>{
            if (res.status === 401) {
                localStorage.removeItem("access_token");
            }
            return res.json();
        }).then((data)=>{
            if (data.success) {
                localStorage.removeItem("access_token");
                setUser(null);
                router.push(siteConfig?.siteConfig?.landingPage?.viewLandingPage ? "/" : paths.browse);
            }
        }).catch((err)=>console.log(err));
    }, [
        user,
        siteConfig
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getCart().then(({ data  })=>{
            if (data.success) {
                const serverCart = data.data;
                const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
                const newItems = localCart.filter((localItem)=>!serverCart.some((serverItem)=>localItem.product._id === serverItem.product._id));
                const newCart = [
                    ...serverCart,
                    ...newItems
                ];
                if (newCart.length) {
                    setCart(newCart);
                    return updateCart({
                        products: newCart
                    });
                }
            }
        }).catch((err)=>{});
    }, [
        user
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const token = localStorage.getItem("access_token");
        if (token) {
            fetch(config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.profile */ .Hv.profile, {
                headers: {
                    "x-access-token": token
                }
            }).then((res)=>{
                if (res.status === 401) {
                    localStorage.removeItem("access_token");
                }
                return res.json();
            }).then((data)=>{
                if (data.success) {
                    setUser(data.data);
                }
            }).catch((err)=>console.log(err));
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SiteContext.Provider, {
        value: {
            compare,
            setCompare,
            user,
            setUser,
            siteConfig,
            setSiteConfig,
            cart,
            addToCart,
            removeFromCart,
            emptyCart,
            loadingCart,
            logout
        },
        children: children
    });
};


/***/ }),

/***/ 3328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ myImageLoader)
/* harmony export */ });
function myImageLoader({ src , width , quality  }) {
    if (src.startsWith("/assets")) {
        return `${"https://biz.infinai.in"}${src}?w=${width}&q=${quality || 75}`;
    }
    return `${src}?w=${width}&q=${quality || 75}`;
}


/***/ }),

/***/ 7474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getSiteData)
/* harmony export */ });
/* unused harmony export loadScript */
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1150);

const getSiteData = async (ctx)=>{
    // Get Site detail
    // Title, Logo, favicon, theme, color-scheme,
    // console.log(ctx.req.headers.host);
    const siteData = await fetch(config__WEBPACK_IMPORTED_MODULE_0__/* .endpoints.server.siteConfig */ .Hv.server.siteConfig, {
        headers: {
            origin: ctx.req.headers.host
        }
    }).then((res)=>res.json());
    return siteData?.success ? siteData.data : null;
};
function loadScript(src) {
    return new Promise((res, rej)=>{
        if (!document.querySelector(`script[src="${src}"]`)) {
            const scr = document.createElement("script");
            scr.src = src;
            document.body.appendChild(scr);
            scr.onload = ()=>res(true);
            scr.onerror = ()=>rej(true);
        } else {
            res(true);
        }
    });
}


/***/ }),

/***/ 7807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ns": () => (/* reexport */ getServerSideProps),
  "ib": () => (/* reexport */ hooks_useFetch),
  "y4": () => (/* binding */ useYup)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./hooks/useFetch.js

const useFetch = (url, { headers: hookHeaders , defaultHeaders  } = {})=>{
    const [error, setError] = (0,external_react_.useState)(false);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const controller = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        controller.current = new AbortController();
        return ()=>{
            controller.current.abort();
            setError(false);
            setLoading(false);
        };
    }, [
        url
    ]);
    const onSubmit = (0,external_react_.useCallback)(async (payload = {}, method, { headers , params , query  } = {})=>{
        let _url = url;
        if (params) {
            Object.entries(params).forEach(([key, value])=>{
                _url = _url.replace(key, value);
            });
        }
        if (query) {
            _url += `${_url.includes("?") ? "" : "?"}&${new URLSearchParams(query).toString()}`;
        }
        setLoading(true);
        return new Promise((resolve, reject)=>{
            fetch(_url, {
                method: method,
                headers: {
                    ...!(typeof payload?.append === "function") && {
                        "Content-Type": "application/json"
                    },
                    ...defaultHeaders !== false && {
                        "x-access-token": localStorage.getItem("access_token")
                    },
                    ...hookHeaders,
                    ...headers
                },
                ...[
                    "POST",
                    "PUT",
                    "PATCH",
                    "DELETE"
                ].includes(method) && {
                    body: typeof payload?.append === "function" ? payload : JSON.stringify(payload)
                },
                signal: controller.current.signal
            }).then(async (res)=>{
                let data = await res.json();
                setLoading(false);
                resolve({
                    res,
                    data
                });
            }).catch((err)=>{
                setLoading(false);
                if ([
                    "The user aborted a request.",
                    "signal is aborted without reason"
                ].includes(err?.message)) {
                // user aborted
                } else {
                    setError(err);
                    reject(err);
                }
            });
        });
    }, [
        url
    ]);
    const post = (payload, options)=>onSubmit(payload, "POST", options);
    const get = (options)=>onSubmit(null, "GET", options);
    const remove = (payload, options)=>onSubmit(payload, "DELETE", options);
    const put = (payload, options)=>onSubmit(payload, "PUT", options);
    const patch = (payload, options)=>onSubmit(payload, "PATCH", options);
    return {
        get,
        post,
        put,
        remove,
        patch,
        loading,
        error,
        onSubmit
    };
};
/* harmony default export */ const hooks_useFetch = (useFetch);

// EXTERNAL MODULE: ./config/index.js + 3 modules
var config = __webpack_require__(1150);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(7474);
;// CONCATENATED MODULE: ./hooks/getServerSideProps.js


async function getServerSideProps(ctx) {
    const props = {
        siteData: await (0,helpers/* getSiteData */.z)(ctx)
    };
    return {
        props
    };
}

;// CONCATENATED MODULE: ./hooks/index.js



const useYup = (validationSchema)=>(0,external_react_.useCallback)(async (data)=>{
        try {
            const values = await validationSchema.validate(data, {
                abortEarly: false
            });
            return {
                values,
                errors: {}
            };
        } catch (errors) {
            return {
                values: {},
                errors: errors.inner?.reduce((allErrors, currentError)=>({
                        ...allErrors,
                        [currentError.path]: {
                            type: currentError.type ?? "validation",
                            message: currentError.message
                        }
                    }), {})
            };
        }
    }, [
        validationSchema
    ]);



/***/ })

};
;