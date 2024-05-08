(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__(3716);
// EXTERNAL MODULE: ./SiteContext.js
var SiteContext = __webpack_require__(9711);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(7474);
// EXTERNAL MODULE: ./config/index.js + 3 modules
var config = __webpack_require__(1150);
;// CONCATENATED MODULE: ./pages/_app.js









__webpack_require__(2694);
(router_default()).onRouteChangeStart = (url)=>external_nprogress_default().start();
(router_default()).onRouteChangeComplete = ()=>external_nprogress_default().done();
(router_default()).onRouteChangeError = (err)=>external_nprogress_default().done();
external_nprogress_default().configure({
    easing: "ease",
    speed: 500,
    minimum: 0.1,
    trickleSpeed: 200,
    showSpinner: false,
    parent: "#__next .gred"
});
function resizeWindow() {
    let vh = window.innerHeight * 0.01;
    document.body.style.setProperty("--vh", `${vh}px`);
}
const Wrapper = ({ children  })=>{
    const { siteConfig  } = (0,external_react_.useContext)(SiteContext/* SiteContext */.D);
    const [browser, setBrowser] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setBrowser(true);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (siteConfig.chatbot && !window.InfinAI) {
            console.log("loading chatbot");
            (0,helpers/* loadScript */.v)(config/* endpoints.comifyChat */.Hv.comifyChat).then(()=>{
                if (window.InfinAI) {
                    const { default: mountInfinAI  } = window.InfinAI;
                    mountInfinAI({
                        baseUrl: config/* endpoints.baseApiUrlPublic */.Hv.baseApiUrlPublic,
                        chatbotId: siteConfig.chatbot._id,
                        defaultUrl: siteConfig.domain
                    });
                }
            });
        }
    }, [
        siteConfig
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: siteConfig.siteTitle
                })
            }),
            children
        ]
    });
};
function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("resize", ()=>resizeWindow());
        resizeWindow();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(SiteContext/* Provider */.z, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Wrapper, {
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2694:
/***/ (() => {



/***/ }),

/***/ 3716:
/***/ (() => {



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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,150,711], () => (__webpack_exec__(5827)));
module.exports = __webpack_exports__;

})();