"use strict";
exports.id = 150;
exports.ids = [150];
exports.modules = {

/***/ 1150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Hv": () => (/* reexport */ config_endpoints),
  "Hb": () => (/* reexport */ config_paths)
});

// UNUSED EXPORTS: appConfig

;// CONCATENATED MODULE: ./config/appConfig.js
Number.prototype.getPercentage = function(n) {
    return 100 - (this - n) / (this / 100);
};
Number.prototype.percent = function(n) {
    return this / 100 * n;
};
Number.prototype.fix = function(n, locale) {
    const decimal = this.toFixed(n).replace(/.*\./, "");
    if (locale) {
        return parseInt(this).toLocaleString(locale) + "." + decimal;
    }
    return +this.toFixed(n);
};
Number.prototype.pad = function(l) {
    let ziros = "";
    for(let i = 0; i < l; i++)ziros += "0";
    return ziros.length >= `${this}`.length ? (ziros + this).slice(-l) : this;
};
var a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen "
];
var b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];
Number.prototype.toWords = function() {
    if (parseInt(this).toString().length > 9) return this;
    let n = ("000000000" + parseInt(this)).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = "";
    str += n[1] !== 0 ? (a[+n[1]] || b[n[1][0]] + " " + a[n[1][1]]) + "crore " : "";
    str += n[2] !== 0 ? (a[+n[2]] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh " : "";
    str += n[3] !== 0 ? (a[+n[3]] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand " : "";
    str += n[4] !== 0 ? (a[+n[4]] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred " : "";
    str += n[5] !== 0 ? (str !== "" ? "and " : "") + (a[+n[5]] || b[n[5][0]] + " " + a[n[5][1]]) + "only " : "";
    return str;
};
Array.prototype.findUniqueObj = function() {
    return [
        ...new Set(this.map((obj)=>JSON.stringify(obj)))
    ].map((obj)=>JSON.parse(obj));
};
Date.prototype.deduct = function(time) {
    const [sec, min, hour, day, month, year] = time.split(" ").map((t)=>parseInt(t)).filter((t)=>!isNaN(t));
    let date = new Date(this);
    if (sec) {
        date = new Date(date.setSeconds(date.getSeconds() - sec));
    }
    if (min) {
        date = new Date(date.setMinutes(date.getMinutes() - min));
    }
    if (hour) {
        date = new Date(date.setHours(date.getHours() - hour));
    }
    if (day) {
        date = new Date(date.setDate(date.getDate() - day));
    }
    if (month) {
        date = new Date(date.setMonth(date.getMonth() - month));
    }
    if (year) {
        date = new Date(date.setYear(date.getFullYear() - year));
    }
    return date;
};
Date.prototype.add = function(time) {
    const [sec, min, hour, day, month, year] = time.split(" ").map((t)=>parseInt(t)).filter((t)=>!isNaN(t));
    let date = new Date(this);
    if (sec) {
        date = new Date(date.setSeconds(date.getSeconds() + sec));
    }
    if (min) {
        date = new Date(date.setMinutes(date.getMinutes() + min));
    }
    if (hour) {
        date = new Date(date.setHours(date.getHours() + hour));
    }
    if (day) {
        date = new Date(date.setDate(date.getDate() + day));
    }
    if (month) {
        date = new Date(date.setMonth(date.getMonth() + month));
    }
    if (year) {
        date = new Date(date.setYear(date.getFullYear() + year));
    }
    return date;
};
/* harmony default export */ const appConfig = ({
});

;// CONCATENATED MODULE: ./config/endpoints.js
const baseApiUrl = process.env.BIZ_APP_BASE_URL;
const baseApiUrlPublic = "http://localhost:8060";
const endpoints = {
    //------------Backend------------
    server: {
        baseApiUrl,
        siteConfig: `${baseApiUrl}/api/site-config`,
        browse: `${baseApiUrl}/api/browse`,
        getDynamicPageFiles: `${baseApiUrl}/api/dynamic-pages`,
        sitemapUrls: `${baseApiUrl}/api/sitemap-urls`
    },
    //------------Frontend-----------
    baseApiUrlPublic,
    browse: `${baseApiUrlPublic}/api/browse`,
    relatedItems: `${baseApiUrlPublic}/api/browse/related`,
    elements: `${baseApiUrlPublic}/api/elements`,
    landingPageShelves: `${baseApiUrlPublic}/api/browse/landing-page-shelves`,
    validateAccount: `${baseApiUrlPublic}/api/customers/validate-account`,
    signup: `${baseApiUrlPublic}/api/customers/signup`,
    login: `${baseApiUrlPublic}/api/customers/login`,
    logout: `${baseApiUrlPublic}/api/customers/logout`,
    profile: `${baseApiUrlPublic}/api/customers/profile`,
    reviews: `${baseApiUrlPublic}/api/reviews`,
    cart: `${baseApiUrlPublic}/api/cart`,
    orders: `${baseApiUrlPublic}/api/customers/orders`,
    placeOrder: `${baseApiUrlPublic}/api/place-order`,
    categories: `${baseApiUrlPublic}/api/categories`,
    topics: `${baseApiUrlPublic}/api/chat/topics`,
    chat: `${baseApiUrlPublic}/api/chat/:chat_id`,
    message: `${baseApiUrlPublic}/api/chat/:chat_id/:message_id`,
    chatbotConfig: `${baseApiUrlPublic}/api/get-chatbot`
};
/* harmony default export */ const config_endpoints = (endpoints);

;// CONCATENATED MODULE: ./config/paths.js
const paths = {
    home: "/",
    browse: "/browse",
    cart: "/cart",
    itemView: "/item/:id",
    checkout: "/checkout",
    compare: "/compare",
    clientArea: {
        baseUrl: "/client-area",
        orders: "/client-area/orders",
        payments: "/client-area/payments",
        profile: "/client-area/profile"
    }
};
/* harmony default export */ const config_paths = (paths);

;// CONCATENATED MODULE: ./config/index.js






/***/ })

};
;