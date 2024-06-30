(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9891:
/***/ ((module) => {

// Exports
module.exports = {
	"chatContainer": "style_chatContainer__JWGoL",
	"avatar": "style_avatar__bBSOI",
	"hand": "style_hand__4hPbR",
	"handWaveAnimation": "style_handWaveAnimation__bxBna",
	"head": "style_head__8ReEG",
	"headNodAnimation": "style_headNodAnimation__ul_ys",
	"circle": "style_circle__smPsn",
	"custom": "style_custom__4Yzje",
	"chat": "style_chat__tg_i2",
	"header": "style_header__DNx6M",
	"left": "style_left__pqEYZ",
	"companyDetail": "style_companyDetail__b_vm_",
	"title": "style_title__IB7aH",
	"right": "style_right__k5KHH",
	"home": "style_home__8BT5D",
	"fullScreen": "style_fullScreen__92xh7",
	"closeBtn": "style_closeBtn__abgwI",
	"messages": "style_messages__RyHt5",
	"placeholder": "style_placeholder__r2Mod",
	"msg": "style_msg__wHupW",
	"content": "style_content__Lc3pL",
	"productWrapper": "style_productWrapper__CkVWU",
	"productList": "style_productList__JO3Y0",
	"user": "style_user__woDt2",
	"msgAvatar": "style_msgAvatar__JHwrn",
	"img": "style_img__iZQFx",
	"assistant": "style_assistant__2kbPH",
	"actions": "style_actions__NpgDU",
	"clipboard": "style_clipboard__yR5oX",
	"msgDate": "style_msgDate__vKlwC",
	"suggestions": "style_suggestions___maOY",
	"chatForm": "style_chatForm__AuLDO",
	"input": "style_input__frOAa",
	"sendBtn": "style_sendBtn__dB1BT",
	"footer": "style_footer__jJT36",
	"toastContainer": "style_toastContainer__hGDLC",
	"toast": "style_toast__uEVN_",
	"success": "style_success__KrUmd",
	"error": "style_error__WqfpH",
	"standalone": "style_standalone__1l52B",
	"chip": "style_chip__HUDgJ",
	"active": "style_active__JEHrv",
	"dot": "style_dot__UzLA1",
	"waveAnimation": "style_waveAnimation__rLNnk",
	"textarea": "style_textarea__Kb72v",
	"ellepsis": "style_ellepsis__X_7jv",
	"line-2": "style_line-2__gOXnM"
};


/***/ }),

/***/ 4632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rv": () => (/* binding */ ChatContextProvider),
/* harmony export */   "kA": () => (/* binding */ generateMessages),
/* harmony export */   "p5": () => (/* binding */ ChatContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7807);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1150);




const ChatContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const generateMessages = ({ chatStartedAt =new Date() , topics , topic , askUserDetail , askQuery , subTopics , subTopic , askSubQuery , queryResponse  })=>{
    const messages = [
        {
            _id: "greetings",
            role: "system",
            content: topics?.length ? "Hello, how may I help you today? Please pick a topic from below with which I can assist you:" : "Hello, how may I help you today?",
            createdAt: chatStartedAt
        }
    ];
    if (topics?.length) {
        messages.unshift({
            _id: "topicQuery",
            type: "suggestion",
            options: topics.map((item)=>item.topic),
            createdAt: chatStartedAt
        });
    }
    if (topic) {
        messages.unshift({
            _id: "topicResponse",
            role: "user",
            content: topic,
            createdAt: chatStartedAt
        });
    }
    if (queryResponse) {
        messages.unshift({
            _id: "queryResponse",
            role: "user",
            content: queryResponse,
            createdAt: chatStartedAt
        });
    }
    if (askUserDetail) {
        messages.unshift({
            _id: "askUserDetail",
            role: "system",
            type: "form",
            content: "We just need some information from you to proceed:",
            createdAt: chatStartedAt,
            fields: [
                {
                    inputType: "input",
                    label: "Name",
                    type: "text",
                    name: "name",
                    required: true
                },
                {
                    inputType: "input",
                    label: "Email",
                    type: "email",
                    name: "email",
                    required: true
                }
            ]
        });
    }
    if (askQuery) {
        // const subTopics = topics?.find((i) => i.topic === topic)?.subTopics || [];
        messages.unshift({
            _id: "queryQuery",
            role: "system",
            content: topics?.find((t)=>t.topic === topic)?.contextForUsers || "Please ask your question",
            createdAt: chatStartedAt
        });
        if (subTopics?.length) {
            messages.unshift({
                role: "system",
                _id: "subTopicQuery",
                type: "suggestion",
                options: subTopics.map((item)=>item.topic),
                createdAt: chatStartedAt
            });
            if (subTopic) {
                messages.unshift({
                    _id: "subTopicResponse",
                    role: "user",
                    content: subTopic,
                    createdAt: chatStartedAt
                });
            }
            if (askSubQuery) {
                messages.unshift({
                    _id: "subQueryQuery",
                    role: "system",
                    content: subTopics?.find((t)=>t.topic === subTopic)?.contextForUsers || "Please ask your question",
                    createdAt: chatStartedAt
                });
            }
        }
    }
    return messages;
};
function resizeWindow() {
    let vh = window.innerHeight * 0.01;
    document.body.style.setProperty("--vh", `${vh}px`);
}
function hexToRgba(hex) {
    // Remove the hash symbol if present
    hex = hex.replace("#", "");
    // Handle shorthand hex values and convert them to full-length
    if (hex.length === 3) {
        hex = hex.replace(/(.)/g, "$1$1");
    }
    // Extract the individual RGBA components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const a = hex.length === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : 1;
    return [
        r,
        g,
        b
    ];
}
const ChatContextProvider = ({ children , containerId , blacklistedPaths , paths , standalone: defaultStand  })=>{
    const msgChannel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [currentPath, setCurrentPath] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [chatbotConfig, setChatbotConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [toasts, setToasts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [convo, setConvo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [topics, setTopics] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [standalone, setStandalone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(typeof defaultStand === "boolean" ? defaultStand : false);
    const [initMessages, setInitMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(generateMessages({
        topics: []
    }));
    const [botStatus, setBotStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("active");
    const { get: getChat  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.chat */ .Hv.chat, {
        headers: {
            "x-chatbot-id": chatbotConfig?._id
        }
    });
    const { get: getConfig  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.chatbotConfig */ .Hv.chatbotConfig, {
        headers: {
            "x-chatbot-id": chatbotConfig?._id
        }
    });
    const _pushToast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((type, message)=>{
        const id = Math.random().toString(36).substring(2);
        setToasts((prev)=>[
                {
                    id,
                    type,
                    message
                },
                ...prev
            ]);
        window[`infinai_toast_timeout_${chatbotConfig?._id}_${id}`] = setTimeout(()=>{
            setToasts((prev)=>prev.filter((item)=>item.id !== id));
            delete window[`infinai_toast_timeout_${chatbotConfig?._id}_${id}`];
        }, 3000);
    }, [
        chatbotConfig
    ]);
    const pushToast = {
        success: (message)=>_pushToast("success", message),
        error: (message)=>_pushToast("error", message)
    };
    const unmountChat = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setTimeout(()=>{
            const container = document.getElementById(containerId);
            setBotStatus("inactive");
            if (container) {
                container.remove();
            }
        }, 3000);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("resize", ()=>resizeWindow());
        resizeWindow();
        getConfig({}).then(async ({ data  })=>{
            if (data.success) {
                const { topics , ...rest } = data.data;
                setChatbotConfig(rest);
                setTopics(topics);
                if (rest.primaryColor) {
                    const rgb = hexToRgba(rest.primaryColor);
                    if (rgb.length >= 3) {
                        document.querySelector(":root").style.setProperty("--primary-color", rgb.join(", "));
                    }
                }
                return {
                    topics,
                    config: rest
                };
            }
        }).then(({ config , topics  })=>{
            const chatId = localStorage.getItem("infinai_chat_id");
            if (chatId) {
                getChat({
                    params: {
                        ":chat_id": chatId
                    },
                    headers: {
                        "x-chatbot-id": config?._id
                    }
                }).then(({ data  })=>{
                    if (data.success) {
                        setConvo({
                            ...data.data,
                            topics,
                            messages: undefined
                        });
                        setMessages(data.data.messages.reverse());
                        const topic = topics.find((t)=>t.topic === data.data.topic);
                        const subTopic = topic?.subTopics?.find((t)=>t.topic === data.data.subTopic);
                        setInitMessages(generateMessages({
                            chatStartedAt: new Date(data.data.createdAt),
                            topics,
                            ...topic && {
                                topic: topic.topic,
                                askQuery: true,
                                ...subTopic && {
                                    subTopics: topic.subTopics,
                                    subTopic: subTopic.topic,
                                    askSubQuery: true
                                }
                            }
                        }));
                    } else {
                        setConvo({
                            user: {
                                name: localStorage.getItem("infinai_chat_user_name"),
                                email: localStorage.getItem("infinai_chat_user_email")
                            }
                        });
                    }
                }).catch((err)=>console.log(err));
            } else {
                setConvo({
                    user: {
                        name: localStorage.getItem("infinai_chat_user_name"),
                        email: localStorage.getItem("infinai_chat_user_email")
                    }
                });
                setInitMessages(generateMessages({
                    topics
                }));
            }
        }).catch((err)=>{
            pushToast.error(err.message);
            if (err.status === 401) {
                unmountChat();
            }
        });
        msgChannel.current = new BroadcastChannel(`infinai-chat-message-${chatbotConfig?._id}`);
        const handleMessage = ({ data: { messages  }  })=>{
            setMessages(messages);
        };
        msgChannel.current.addEventListener("message", handleMessage);
        return ()=>{
            msgChannel.current.removeEventListener("message", handleMessage);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let oldPathname = window.location.pathname;
        const body = document.querySelector("body");
        const observer = new MutationObserver((mutations)=>{
            const newPathname = window.location.pathname;
            if (oldPathname !== newPathname) {
                oldPathname = newPathname;
                setCurrentPath(newPathname);
            }
        });
        observer.observe(body, {
            childList: true,
            subtree: true
        });
        return ()=>{
            observer.disconnect();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShow((paths ? paths.some((path)=>currentPath.match(new RegExp(`${path}$`))) : true) && (blacklistedPaths ? !blacklistedPaths.includes(currentPath) : true));
        if (Array.isArray(defaultStand) && defaultStand.length) {
            if (defaultStand.includes(currentPath)) {
                setStandalone(true);
            } else {
                setStandalone(false);
            }
        }
    }, [
        currentPath
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatContext.Provider, {
        value: {
            topics,
            setTopics,
            convo,
            setConvo,
            messages,
            setMessages,
            toasts,
            setToasts,
            pushToast,
            msgChannel: msgChannel.current,
            initMessages,
            setInitMessages,
            chatbotConfig,
            setChatbotConfig,
            standalone,
            currentPath,
            setCurrentPath
        },
        children: chatbotConfig && botStatus === "active" && show ? children : null
    });
};


/***/ }),

/***/ 3380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CH": () => (/* binding */ Contract),
/* harmony export */   "DT": () => (/* binding */ ThumbsUpOutline),
/* harmony export */   "Jr": () => (/* binding */ Check),
/* harmony export */   "LX": () => (/* binding */ ThumbsDown),
/* harmony export */   "M0": () => (/* binding */ Expand),
/* harmony export */   "SK": () => (/* binding */ Home),
/* harmony export */   "TU": () => (/* binding */ Clipboard),
/* harmony export */   "UZ": () => (/* binding */ Clear),
/* harmony export */   "Vw": () => (/* binding */ ThumbsUp),
/* harmony export */   "vw": () => (/* binding */ Send),
/* harmony export */   "x8": () => (/* binding */ Close),
/* harmony export */   "yX": () => (/* binding */ ThumbsDownOutline)
/* harmony export */ });
/* unused harmony exports ArrowLeft, Message */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Close = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            })
        ]
    });
};
const Home = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"
        })
    });
};
const Clear = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        t: "1569683368540",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"
            })
        ]
    });
};
const ArrowLeft = ({ className  })=>{
    return /*#__PURE__*/ _jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"
        })
    });
};
const Send = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        t: "1569683742680",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"
            })
        ]
    });
};
const ThumbsUpOutline = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        })
    });
};
const ThumbsUp = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
        })
    });
};
const ThumbsDownOutline = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
        })
    });
};
const ThumbsDown = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
        })
    });
};
const Clipboard = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M19 3h-2.25a1 1 0 0 0-1-1h-7.5a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 17H5V5h2v2h10V5h2v15z"
        })
    });
};
const Check = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 16 16",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
        })
    });
};
const Message = ({ className  })=>{
    return /*#__PURE__*/ _jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 1024 1024",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
        })
    });
};
const Expand = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z"
        })
    });
};
const Contract = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M64 371.2h76.795V448H192V320H64v51.2zm76.795-230.4H64V192h128V64h-51.205v76.8zM320 448h51.2v-76.8H448V320H320v128zm51.2-307.2V64H320v128h128v-51.2h-76.8z"
        })
    });
};


/***/ }),

/***/ 1170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ ComifyChat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9891);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7807);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1150);
/* harmony import */ var _context_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4632);
/* harmony import */ var _toast_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8080);
/* harmony import */ var _icons_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3380);
/* harmony import */ var _moment_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5781);
/* harmony import */ var components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4382);
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7492);
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_use_measure__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_8__, react_markdown__WEBPACK_IMPORTED_MODULE_10__]);
([components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_8__, react_markdown__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function ComifyChat({ openAtStart  }) {
    const [fullScreen, setFullScreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { chatbotConfig , toasts , standalone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .ChatContext */ .p5);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(openAtStart || false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        sessionStorage.setItem("crm_infinai_open", open.toString());
    }, [
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handler = ()=>{
            console.log("location changed", window.location.pathname);
        };
        window.addEventListener("locationchange", handler);
        if (chatbotConfig.autoOpenAfter) {
            const time = chatbotConfig.autoOpenAfter;
            let ms = 0;
            if (time.endsWith("s")) {
                ms = parseInt(time) * 1000;
            } else if (time.endsWith("m")) {
                ms = parseInt(time) * (1000 * 60);
            }
            setTimeout(()=>{
                setOpen(true);
            }, ms);
        }
        return ()=>{
            window.removeEventListener("locationchange", handler);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `infinai_chat_container ${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatContainer)} ${standalone ? (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().standalone) : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "infinaiChatTostContainer",
                className: `infinai_chat_toast_container ${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toastContainer)}`,
                children: toasts.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_toast_jsx__WEBPACK_IMPORTED_MODULE_5__/* .Toast */ .F, {
                        id: item.id,
                        type: item.type,
                        message: item.message
                    }, item.id))
            }),
            open || standalone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Chat, {
                setOpen: setOpen,
                fullScreen: fullScreen,
                setFullScreen: setFullScreen
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Avatar, {
                onClick: ()=>setOpen(true),
                src: chatbotConfig?.avatar
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("noscript", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    height: "1",
                    width: "1",
                    style: "display:none",
                    src: "https://www.facebook.com/tr?id=648770637226233&ev=PageView&noscript=1"
                })
            })
        ]
    });
}
const wait = (ms)=>new Promise((res, rej)=>setTimeout(()=>res(true), ms));
const Chat = ({ setOpen , fullScreen , setFullScreen  })=>{
    const chatRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { chatbotConfig , unmountChat: unmountChat1 , convo , setConvo , messages , msgChannel , setMessages , pushToast , initMessages , setInitMessages , topics , standalone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .ChatContext */ .p5);
    const [currInput, setCurrInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { post: castVote , loading  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.message */ .Hv.message, {
        headers: {
            "x-chatbot-id": chatbotConfig?._id
        }
    });
    const vote = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((msg_id, vote)=>{
        castVote({
            like: vote
        }, {
            params: {
                ":chat_id": convo._id,
                ":message_id": msg_id
            }
        }).then(({ data  })=>{
            if (!data.success) {
                return pushToast.error(data.message);
            }
            setMessages((prev)=>{
                const messages = prev.map((item)=>item._id === msg_id ? {
                        ...item,
                        like: vote
                    } : item);
                msgChannel.postMessage({
                    messages
                });
                return messages;
            });
        }).catch((err)=>pushToast.error(err.message));
    }, [
        convo
    ]);
    const { post: sendMessage , loading: initiatingChat  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.chat */ .Hv.chat, {
        headers: {
            "x-chatbot-id": chatbotConfig?._id
        }
    });
    const initChat = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((msg, userDetail = {}, { reloadInit  } = {})=>{
        let payload = {
            name: convo?.user?.name,
            email: convo?.user?.email,
            ...userDetail,
            message: msg,
            topic: convo.subTopic || convo.topic,
            parentTopic: convo.subTopic ? convo.topic : undefined
        };
        sendMessage(payload, {
            params: {
                ":chat_id": ""
            }
        }).then(async ({ res , stream , data  })=>{
            const handleNewChat = function(data) {
                localStorage.setItem("infinai_chat_id", data.data._id);
                localStorage.setItem("infinai_chat_user_name", data.data.user.name);
                localStorage.setItem("infinai_chat_user_email", data.data.user.email);
                if (reloadInit) {
                    const topic = topics.find((t)=>t.topic === data.data.topic);
                    const subTopic = topic?.subTopics?.find((t)=>t.topic === data.data.subTopic);
                    setInitMessages((0,_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .generateMessages */ .kA)({
                        topics,
                        // ...(topics.some((t) => t.topic === data.data.topic) && {
                        //   topic: data.data.topic,
                        //   askQuery: true,
                        // }),
                        ...topic && {
                            topic: topic.topic,
                            askQuery: true,
                            ...subTopic && {
                                subTopics: topic.subTopics,
                                subTopic: subTopic.topic,
                                askSubQuery: true
                            }
                        }
                    }));
                }
                setConvo({
                    ...data.data,
                    messages: undefined
                });
                msgChannel.postMessage({
                    messages: data.data.messages.reverse()
                });
                setMessages(data.data.messages);
            };
            if (stream) {
                const reader = res.body.getReader();
                const decoder = new TextDecoder();
                let done = false;
                let firstBitReceived = false;
                while(!done){
                    const { value , done: streamDone  } = await reader.read();
                    done = streamDone;
                    if (value) {
                        let buffer = null;
                        const raw = decoder.decode(value, {
                            stream: true
                        });
                        const parts = raw.split("___msgEnd___").map((item)=>{
                            try {
                                const content = JSON.parse(item);
                                return content;
                            } catch (err) {
                                return null;
                            }
                        }).filter(Boolean);
                        parts.forEach((part)=>{
                            if (!buffer) {
                                buffer = part;
                            } else if (buffer?.user) {
                                buffer.messages[buffer.messages.length - 1].content += part.content;
                            } else {
                                buffer.content += part.content;
                            }
                        });
                        if (!firstBitReceived) {
                            handleNewChat({
                                data: buffer
                            });
                            firstBitReceived = true;
                        } else {
                            setMessages((prev)=>{
                                const messages = prev.map((m)=>m._id === buffer._id ? {
                                        ...m,
                                        role: "assistant",
                                        content: m.content + buffer.content
                                    } : m);
                                msgChannel.postMessage({
                                    messages
                                });
                                return messages;
                            });
                        }
                    }
                }
            } else {
                if (!data.success) {
                    return pushToast.error(data.message);
                }
                handleNewChat(data);
            }
        }).catch((err)=>{
            console.log(err);
            pushToast.error(err.message);
            if (err.status === 401) {
                setOpen(false);
                unmountChat1();
            }
        });
    }, [
        convo,
        chatbotConfig
    ]);
    const [headerRef, { width  }] = react_use_measure__WEBPACK_IMPORTED_MODULE_9___default()();
    const messagesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `infinai_chat ${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chat)} ${fullScreen ? (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().fullScreen) : ""}`,
        ref: chatRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().header),
                ref: headerRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().left),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().companyDetail),
                            children: [
                                chatbotConfig?.avatar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.baseUrlPublic */ .Hv.baseUrlPublic + chatbotConfig.avatar
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().ellepsis),
                                            children: convo?.title || chatbotConfig?.display_name || "Infin AI"
                                        }),
                                        convo?.topic && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                title: convo.topic,
                                                className: `${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title)} ${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().ellepsis)}`,
                                                children: convo.topic
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().right),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().clearBtn),
                                onClick: ()=>{
                                    setConvo((prev)=>{
                                        if (prev?.user?.name && prev?.user?.email) {
                                            localStorage.setItem("infinai_chat_user_name", prev.user.name);
                                            localStorage.setItem("infinai_chat_user_email", prev.user.email);
                                            return {
                                                user: prev.user
                                            };
                                        }
                                        return {};
                                    });
                                    setCurrInput("query");
                                    msgChannel.postMessage({
                                        messages: []
                                    });
                                    setInitMessages((0,_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .generateMessages */ .kA)({
                                        topics
                                    }));
                                    setMessages([]);
                                    localStorage.removeItem("infinai_chat_id");
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .Clear */ .UZ, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().home),
                                onClick: ()=>{
                                    messagesRef.current.scrollTop = -messagesRef.current.scrollHeight;
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .Home */ .SK, {})
                            }),
                            window.innerWidth >= 480 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().closeBtn),
                                onClick: ()=>{
                                    if (fullScreen) {
                                        if (document.exitFullscreen) {
                                            document.exitFullscreen();
                                        } else if (document.webkitExitFullscreen) {
                                            document.webkitExitFullscreen();
                                        } else if (document.msExitFullscreen) {
                                            document.msExitFullscreen();
                                        }
                                    } else {
                                        if (chatRef.current.requestFullscreen) {
                                            chatRef.current.requestFullscreen();
                                        } else if (chatRef.current.webkitRequestFullscreen) {
                                            elem.webkitRequestFullscreen();
                                        } else if (chatRef.current.msRequestFullscreen) {
                                            chatRef.current.msRequestFullscreen();
                                        }
                                    }
                                    setFullScreen(!fullScreen);
                                },
                                children: fullScreen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .Contract */ .CH, {
                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().fullScreen)
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .Expand */ .M0, {
                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().fullScreen)
                                })
                            }),
                            !standalone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().closeBtn),
                                onClick: ()=>{
                                    setOpen(false);
                                    if (fullScreen) {
                                        if (document.exitFullscreen) {
                                            document.exitFullscreen();
                                        } else if (document.webkitExitFullscreen) {
                                            document.webkitExitFullscreen();
                                        } else if (document.msExitFullscreen) {
                                            document.msExitFullscreen();
                                        }
                                        setFullScreen(false);
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .Close */ .x8, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().messages),
                ref: messagesRef,
                children: (convo?._id ? [
                    ...messages,
                    ...initMessages
                ] : initMessages).map((item, i, arr)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                        children: [
                            item.type === "form" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageForm, {
                                msg: item,
                                onSubmit: (values)=>{
                                    setConvo((prev)=>({
                                            ...prev,
                                            user: {
                                                name: values.name,
                                                email: values.email
                                            }
                                        }));
                                    const query = initMessages.find((item)=>item._id === "queryResponse")?.content;
                                    if (query) {
                                        setCurrInput("");
                                        setInitMessages((0,_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .generateMessages */ .kA)({
                                            topics,
                                            topic: convo.topic,
                                            queryResponse: query
                                        }));
                                        initChat(query, {
                                            name: values.name,
                                            email: values.email
                                        }, {
                                            reloadInit: true
                                        });
                                    } else {
                                        setCurrInput("query");
                                        return setInitMessages((0,_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .generateMessages */ .kA)({
                                            topics,
                                            topic: convo.topic,
                                            askQuery: true
                                        }));
                                    }
                                }
                            }),
                            item.type === "suggestion" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    item._id === "topicQuery" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Topics, {
                                        options: [
                                            ...item.options
                                        ],
                                        active: convo?.topic,
                                        onChange: async (input)=>{
                                            await wait(200);
                                            const name = convo?.user?.name;
                                            const email = convo?.user?.email;
                                            setConvo((prev)=>({
                                                    topic: input,
                                                    user: prev?.user
                                                }));
                                            if (!name || !email) {
                                                setCurrInput("userDetail");
                                                return setInitMessages((0,_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .generateMessages */ .kA)({
                                                    topics,
                                                    topic: input,
                                                    askUserDetail: true
                                                }));
                                            }
                                            setTimeout(()=>messagesRef.current.scrollTop = 0, 20);
                                            if (!name || !email) {
                                                setCurrInput("userDetail");
                                                return;
                                            }
                                            setInitMessages((0,_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .generateMessages */ .kA)({
                                                topics,
                                                topic: input,
                                                subTopics: topics.find((t)=>t.topic === input)?.subTopics,
                                                ...name ? {
                                                    name
                                                } : {
                                                    askName: true
                                                },
                                                ...email ? {
                                                    email
                                                } : {
                                                    askEmail: !!name
                                                },
                                                ...name && email ? {
                                                    askQuery: true
                                                } : {}
                                            }));
                                        },
                                        style: {
                                            marginBottom: arr[i - 1]?.type === "suggestion" ? 5 : arr[i - 1] && arr[i - 1]?.role !== item.role ? 25 : 0
                                        }
                                    }),
                                    item._id === "subTopicQuery" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Topics, {
                                        options: [
                                            ...item.options
                                        ],
                                        active: convo?.subTopic,
                                        onChange: async (input)=>{
                                            await wait(200);
                                            setConvo((prev)=>({
                                                    ...prev,
                                                    subTopic: input
                                                }));
                                            setTimeout(()=>messagesRef.current.scrollTop = 0, 20);
                                            const topic = topics.find((t)=>t.topic === convo.topic);
                                            setInitMessages((0,_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .generateMessages */ .kA)({
                                                topics,
                                                topic: topic.topic,
                                                subTopics: topic.subTopics,
                                                subTopic: input,
                                                askQuery: true,
                                                askSubQuery: true
                                            }));
                                        },
                                        style: {
                                            marginBottom: arr[i - 1]?.type === "suggestion" ? 5 : arr[i - 1] && arr[i - 1]?.role !== item.role ? 25 : 0
                                        }
                                    }),
                                    ![
                                        "topicQuery",
                                        "subTopicQuery"
                                    ].includes(item._id) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Suggestions, {
                                        options: [
                                            ...item.options
                                        ],
                                        active: convo?.topic,
                                        onChange: async (input)=>{
                                        // do something
                                        },
                                        style: {
                                            // marginLeft: item.role ? "unset" : "55px",
                                            marginBottom: arr[i - 1]?.type === "suggestion" ? 5 : arr[i - 1] && arr[i - 1]?.role !== item.role ? 25 : 0
                                        }
                                    })
                                ]
                            }),
                            !("type" in item) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Message, {
                                setOpen: setOpen,
                                msg: item,
                                loading: loading,
                                messageWrapperWidth: width,
                                style: {
                                    marginBottom: arr[i - 1]?.type === "suggestion" ? 5 : arr[i - 1] && arr[i - 1]?.role !== item.role ? 25 : 0
                                },
                                castVote: vote
                            }),
                            new Date(item.createdAt).getDate() !== new Date(arr[i + 1]?.createdAt).getDate() && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().msgDate),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_moment_jsx__WEBPACK_IMPORTED_MODULE_7__/* .Moment */ .W, {
                                    format: "DD MMM YYYY",
                                    children: item.createdAt
                                })
                            })
                        ]
                    }, item._id))
            }),
            !convo?._id && currInput !== "userDetail" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatForm, {
                onSubmit: (values, options)=>{
                    const name = convo?.user?.name || localStorage.getItem("infinai_chat_user_name");
                    const email = convo?.user?.email || localStorage.getItem("infinai_chat_user_email");
                    if (!name || !email) {
                        setInitMessages((0,_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .generateMessages */ .kA)({
                            queryResponse: values.msg,
                            askUserDetail: true
                        }));
                        setCurrInput("userDetail");
                        return;
                    }
                    initChat(values.msg, {
                        name,
                        email
                    }, {
                        reloadInit: true
                    });
                    setCurrInput("query");
                },
                scrollDown: ()=>{
                    messagesRef.current.scrollTop = 0;
                },
                loading: initiatingChat
            }),
            convo?._id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatForm, {
                scrollDown: ()=>{
                    messagesRef.current.scrollTop = 0;
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().footer),
                children: [
                    "Powered by:",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://infinai.in",
                        target: "_blank",
                        children: "Infin AI"
                    })
                ]
            })
        ]
    });
};
const Avatar = ({ onClick , src  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `infinai_chat_avatar ${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().avatar)} ${src ? (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().custom) : ""}`,
        onClick: onClick,
        children: src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.baseUrlPublic */ .Hv.baseUrlPublic + src
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().circle)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().hand),
                    src: "/assets/img/chat-avatar/hand.webp"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/assets/img/chat-avatar/body.webp"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().head),
                    src: "/assets/img/chat-avatar/head.webp"
                })
            ]
        })
    });
};
const Message = ({ setOpen , msg , castVote , loading , style , messageWrapperWidth  })=>{
    const { chatbotConfig , convo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .ChatContext */ .p5);
    let productList = null;
    let message = null;
    if (msg.role === "assistant" && msg.content.includes(`"response_type": "product_list"`)) {
        try {
            const parsedMsg = JSON.parse(msg.content);
            productList = parsedMsg.products;
            message = parsedMsg.message;
        } catch (err) {
        //
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().msg)} ${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default())[msg.role]}`,
        style: style,
        children: [
            msg.role !== "user" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().msgAvatar)} ${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().assistant)} ${chatbotConfig?.avatar ? (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().custom) : ""}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().hand),
                        src: chatbotConfig?.avatar ? config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.baseUrlPublic */ .Hv.baseUrlPublic + chatbotConfig?.avatar : "/assets/img/chat-avatar/full.webp"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_moment_jsx__WEBPACK_IMPORTED_MODULE_7__/* .Moment */ .W, {
                        format: "hh:mm",
                        children: msg.createdAt
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),
                style: {
                    maxWidth: `${messageWrapperWidth - 95}px`
                },
                children: [
                    productList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().productWrapper),
                        style: {
                            maxWidth: `${messageWrapperWidth - 95}px`
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().productList),
                            children: productList.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui_productThumbnail__WEBPACK_IMPORTED_MODULE_8__/* .ProductThumb */ .B, {
                                    onClick: ()=>setOpen(false),
                                    product: product
                                }, product._id))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "markdown",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            children: message || msg.content
                        })
                    }),
                    msg.role === "assistant" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().actions),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyBtn, {
                                content: msg.content
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().btn),
                                title: "Like",
                                disabled: loading,
                                onClick: ()=>castVote(msg._id, msg.like ? null : true),
                                children: msg.like === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .ThumbsUp */ .Vw, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .ThumbsUpOutline */ .DT, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().btn),
                                title: "Dislike",
                                disabled: loading,
                                onClick: ()=>castVote(msg._id, msg.like === false ? null : false),
                                children: msg.like === false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .ThumbsDown */ .LX, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .ThumbsDownOutline */ .yX, {})
                            })
                        ]
                    })
                ]
            }),
            msg.role === "user" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().msgAvatar),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().img),
                        children: convo?.user?.name?.[0]?.toUpperCase() || "U"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_moment_jsx__WEBPACK_IMPORTED_MODULE_7__/* .Moment */ .W, {
                        format: "hh:mm",
                        children: msg.createdAt
                    })
                ]
            })
        ]
    });
};
const MessageForm = ({ msg , style , onSubmit  })=>{
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { chatbotConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .ChatContext */ .p5);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().msg)} ${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().form)}`,
        style: style,
        children: [
            msg.role !== "user" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().msgAvatar)} ${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().assistant)} ${chatbotConfig?.avatar ? (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().custom) : ""}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().hand),
                        src: chatbotConfig?.avatar ? config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.baseUrlPublic */ .Hv.baseUrlPublic + chatbotConfig?.avatar : "/assets/img/chat-avatar/full.webp"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_moment_jsx__WEBPACK_IMPORTED_MODULE_7__/* .Moment */ .W, {
                        format: "hh:mm",
                        children: msg.createdAt
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: msg.content
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: (e)=>{
                            e.preventDefault();
                            onSubmit(values);
                        },
                        children: [
                            (msg.fields || []).map((field)=>{
                                if (field.inputType === "input") {
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: field.name,
                                                children: field.label
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: field.name,
                                                required: field.required,
                                                value: values[field.name] || "",
                                                type: field.type || "text",
                                                onChange: (e)=>setValues((prev)=>({
                                                            ...prev,
                                                            [field.name]: e.target.value
                                                        }))
                                            })
                                        ]
                                    }, field.name);
                                }
                                return null;
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                children: "Submit"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Topics = ({ options , active , onChange , style  })=>{
    const { currentPath , topics  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .ChatContext */ .p5);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().suggestions),
        style: {
            ...style
        },
        children: options.filter((item)=>{
            const topic = topics.find((t)=>t.topic === item);
            return !topic?.paths?.length || topic?.paths?.some((path)=>currentPath.match(new RegExp(`${path}$`)));
        }).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: item === active,
                className: `${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chip)} ${item === active ? (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().active) : ""}`,
                onClick: ()=>onChange(item),
                children: item
            }, item))
    });
};
const Suggestions = ({ options , active , onChange , style  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().suggestions),
        style: {
            ...style
        },
        children: options.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: item === active,
                className: `${(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chip)} ${item === active ? (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().active) : ""}`,
                onClick: ()=>onChange(item),
                children: item
            }, item))
    });
};
const CopyBtn = ({ content  })=>{
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [done, setDone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().btn),
        title: "Copy",
        onClick: ()=>{
            navigator.clipboard.writeText(content);
            setDone(true);
            clearTimeout(timer.current);
            timer.current = setTimeout(()=>{
                setDone(false);
            }, 1000);
        },
        children: done ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .Check */ .Jr, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .Clipboard */ .TU, {
            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().clipboard)
        })
    });
};
const ChatForm = ({ setOpen , inputOptions , scrollDown , onSubmit , loading: defaultLoading  })=>{
    const { chatbotConfig , convo , setMessages , msgChannel , pushToast  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_jsx__WEBPACK_IMPORTED_MODULE_4__/* .ChatContext */ .p5);
    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { post: sendMessage , loading  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useFetch */ .ib)(config__WEBPACK_IMPORTED_MODULE_3__/* .endpoints.chat */ .Hv.chat, {
        headers: {
            "x-chatbot-id": chatbotConfig?._id
        }
    });
    const submit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.preventDefault();
        scrollDown();
        sendMessage({
            content: msg
        }, {
            params: {
                ":chat_id": convo._id
            }
        }).then(async ({ res , stream , data  })=>{
            const handleNewMessage = (data)=>{
                setMessages((prev)=>{
                    const messages = [
                        data.data,
                        {
                            _id: Math.random().toString(36).substr(-8),
                            role: "user",
                            name: "Guest",
                            content: msg,
                            createdAt: new Date()
                        },
                        ...prev
                    ];
                    msgChannel.postMessage({
                        messages
                    });
                    return messages;
                });
                setMsg("");
                setTimeout(()=>scrollDown(), 50);
            };
            if (stream) {
                const reader = res.body.getReader();
                const decoder = new TextDecoder();
                let done = false;
                let firstBitReceived = false;
                while(!done){
                    const { value , done: streamDone  } = await reader.read();
                    done = streamDone;
                    if (value) {
                        let buffer = null;
                        const raw = decoder.decode(value, {
                            stream: true
                        });
                        const parts = raw.split("___msgEnd___").map((item)=>{
                            try {
                                const content = JSON.parse(item);
                                return content;
                            } catch (err) {
                                return null;
                            }
                        }).filter(Boolean);
                        parts.forEach((part)=>{
                            if (!buffer) {
                                buffer = part;
                            } else {
                                buffer.content += part.content;
                            }
                        });
                        if (!firstBitReceived) {
                            firstBitReceived = true;
                            handleNewMessage({
                                data: buffer
                            });
                        } else {
                            setMessages((prev)=>{
                                const messages = prev.map((m)=>m._id === buffer._id ? {
                                        ...m,
                                        role: "assistant",
                                        content: m.content + buffer.content
                                    } : m);
                                msgChannel.postMessage({
                                    messages
                                });
                                return messages;
                            });
                        }
                    }
                }
            } else {
                if (!data.success) {
                    return pushToast.error(data.message);
                }
                handleNewMessage(data);
            }
        }).catch((err)=>{
            pushToast.error(err.message);
            if (err.status === 401) {
                setOpen(false);
                unmountChat();
            }
        });
    }, [
        msg
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatForm),
        onSubmit: onSubmit ? (e)=>{
            e.preventDefault();
            onSubmit({
                msg
            }, {
                clearForm: ()=>{
                    setMsg("");
                }
            });
        } : submit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                autoFocus: true,
                readOnly: loading || defaultLoading,
                ...inputOptions,
                placeholder: "Type a message",
                value: msg,
                onChange: (e)=>setMsg(e.target.value),
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().input)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sendBtn),
                disabled: loading || defaultLoading || !msg.trim(),
                children: defaultLoading || loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dot)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dot)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dot)
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_6__/* .Send */ .vw, {})
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Moment)
/* harmony export */ });
/* unused harmony export moment */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function splitDate(str, parts) {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < str.length && j < parts.length){
        let format = parts[j];
        let char = (str + "").slice(i, i + format.length);
        if (char === format) {
            result.push(format);
            j++;
            i += format.length;
        } else {
            char = char[0];
            result.push(char);
            i++;
        }
    }
    return result;
}
const moment = (time, format)=>{
    if (isNaN(new Date(time || new Date()).getTime())) {
        return time;
    }
    const options = {
        year: format.includes("YYYY") ? "numeric" : "2-digit",
        month: format.includes("MMMM") ? "long" : format.includes("MMM") ? "short" : format.includes("MM") ? "2-digit" : "numeric",
        // ? "long"
        // : format.includes("ddd")
        // ? "short"
        // : "narrow",
        weekday: format.includes("dddd") ? "long" : format.includes("ddd") ? "short" : "narrow",
        day: format.includes("DD") ? "2-digit" : "numeric",
        hour: format.includes("hh") ? "2-digit" : "numeric",
        minute: format.includes("mm") ? "2-digit" : "numeric",
        second: format.includes("ss") ? "2-digit" : "numeric",
        hourCycle: format.includes("a") ? "h11" : "h23"
    };
    const values = {};
    new Intl.DateTimeFormat("en-IN", options).formatToParts(new Date(time || new Date())).map(({ type , value , ...rest })=>{
        values[type] = value;
    });
    const _values = {};
    const formatParts = format.match(/(YYYY|YY|M{2,3}|d{2,4}|D{1,2}|h{1,2}|m{1,2}|s{1,2}|a)/g);
    formatParts.forEach((part)=>{
        if (part.includes("Y")) {
            _values[part] = values.year;
        } else if (part.includes("M")) {
            _values[part] = values.month;
        } else if (part.includes("D")) {
            _values[part] = values.day;
        } else if (part.includes("h")) {
            _values[part] = values.hour;
        } else if (part.includes("m")) {
            _values[part] = values.minute;
        } else if (part.includes("s")) {
            _values[part] = values.second;
        } else if (part.includes("a")) {
            _values[part] = values.dayPeriod;
        } else if (values.includes("d")) {
            _values[part] = values.weekday;
        }
    });
    return splitDate(format, formatParts).map((item)=>_values[item] || item).join("");
};
const Moment = ({ format , children , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        ...rest,
        "data-testid": "moment",
        children: moment(children, format)
    });
};


/***/ }),

/***/ 8080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9891);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4632);
/* harmony import */ var _icons_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3380);





const Toast = ({ id , type , message  })=>{
    const { setToasts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_jsx__WEBPACK_IMPORTED_MODULE_2__/* .ChatContext */ .p5);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: id,
        className: `${(_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().toast)} ${(_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[type]}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>{
                    setToasts((prev)=>prev.filter((item)=>item.id !== id));
                    clearTimeout(window[`comify_toast_timeout_${id}`]);
                    delete window[`comify_toast_timeout_${id}`];
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_jsx__WEBPACK_IMPORTED_MODULE_3__/* .Close */ .x8, {})
            })
        ]
    });
};


/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3716);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var SiteContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9711);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_comifyChat_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4632);
/* harmony import */ var components_comifyChat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1170);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_comifyChat__WEBPACK_IMPORTED_MODULE_8__]);
components_comifyChat__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









// import { loadScript } from "helpers";
// import { endpoints } from "config";
__webpack_require__(2694);
(next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeStart) = (url)=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();
(next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeComplete) = ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
(next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeError) = (err)=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
nprogress__WEBPACK_IMPORTED_MODULE_4___default().configure({
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
    const { siteConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteContext__WEBPACK_IMPORTED_MODULE_3__/* .SiteContext */ .D);
    const [browser, setBrowser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setBrowser(true);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (siteConfig.chatbot && !window.InfinAI) {
        // console.log("loading chatbot");
        // loadScript(endpoints.comifyChat).then(() => {
        //   if (window.InfinAI) {
        //     const { default: mountInfinAI } = window.InfinAI;
        //     mountInfinAI({
        //       baseUrl: endpoints.baseApiUrlPublic,
        //       chatbotId: siteConfig.chatbot._id,
        //       defaultUrl: siteConfig.domain,
        //     });
        //   }
        // });
        }
    }, [
        siteConfig
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: siteConfig.siteConfig?.siteTitle
                })
            }),
            children
        ]
    });
};
function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("resize", ()=>resizeWindow());
        resizeWindow();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SiteContext__WEBPACK_IMPORTED_MODULE_3__/* .Provider */ .z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_comifyChat_context__WEBPACK_IMPORTED_MODULE_7__/* .ChatContextProvider */ .Rv, {
                    containerId: "chatContainer",
                    standaloneContainerId: "chatWrapper",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_comifyChat__WEBPACK_IMPORTED_MODULE_8__/* .ComifyChat */ .k, {
                        openAtStart: false
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2694:
/***/ (() => {



/***/ }),

/***/ 3716:
/***/ (() => {



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

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7492:
/***/ ((module) => {

"use strict";
module.exports = require("react-use-measure");

/***/ }),

/***/ 1780:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/fi");;

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

/***/ 3135:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,150,774,382], () => (__webpack_exec__(6004)));
module.exports = __webpack_exports__;

})();