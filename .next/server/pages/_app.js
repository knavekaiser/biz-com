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

/***/ 9037:
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
// EXTERNAL MODULE: ./hooks/index.js + 2 modules
var hooks = __webpack_require__(7807);
// EXTERNAL MODULE: ./config/index.js + 3 modules
var config = __webpack_require__(1150);
;// CONCATENATED MODULE: ./components/comifyChat/context.jsx




const ChatContext = /*#__PURE__*/ (0,external_react_.createContext)();
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
    const msgChannel = (0,external_react_.useRef)();
    const [currentPath, setCurrentPath] = (0,external_react_.useState)();
    const [chatbotConfig, setChatbotConfig] = (0,external_react_.useState)(null);
    const [toasts, setToasts] = (0,external_react_.useState)([]);
    const [convo, setConvo] = (0,external_react_.useState)(null);
    const [topics, setTopics] = (0,external_react_.useState)([]);
    const [messages, setMessages] = (0,external_react_.useState)([]);
    const [show, setShow] = (0,external_react_.useState)(false);
    const [standalone, setStandalone] = (0,external_react_.useState)(typeof defaultStand === "boolean" ? defaultStand : false);
    const [initMessages, setInitMessages] = (0,external_react_.useState)(generateMessages({
        topics: []
    }));
    const [botStatus, setBotStatus] = (0,external_react_.useState)("active");
    const { get: getChat  } = (0,hooks/* useFetch */.ib)(config/* endpoints.chat */.Hv.chat, {
        headers: {
            "x-chatbot-id": chatbotConfig?._id
        }
    });
    const { get: getConfig  } = (0,hooks/* useFetch */.ib)(config/* endpoints.chatbotConfig */.Hv.chatbotConfig, {
        headers: {
            "x-chatbot-id": chatbotConfig?._id
        }
    });
    const _pushToast = (0,external_react_.useCallback)((type, message)=>{
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
    const unmountChat = (0,external_react_.useCallback)(()=>{
        setTimeout(()=>{
            const container = document.getElementById(containerId);
            setBotStatus("inactive");
            if (container) {
                container.remove();
            }
        }, 3000);
    }, []);
    (0,external_react_.useEffect)(()=>{
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
    (0,external_react_.useEffect)(()=>{
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
    (0,external_react_.useEffect)(()=>{
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
    return /*#__PURE__*/ jsx_runtime.jsx(ChatContext.Provider, {
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

// EXTERNAL MODULE: ./components/comifyChat/style.module.scss
var style_module = __webpack_require__(9891);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./components/comifyChat/icons.jsx


const Close = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            })
        ]
    });
};
const Home = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"
        })
    });
};
const Clear = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
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
            /*#__PURE__*/ jsx_runtime.jsx("defs", {}),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
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
            /*#__PURE__*/ jsx_runtime.jsx("defs", {}),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"
            })
        ]
    });
};
const ThumbsUpOutline = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        })
    });
};
const ThumbsUp = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
        })
    });
};
const ThumbsDownOutline = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
        })
    });
};
const ThumbsDown = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
        })
    });
};
const Clipboard = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M19 3h-2.25a1 1 0 0 0-1-1h-7.5a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 17H5V5h2v2h10V5h2v15z"
        })
    });
};
const Check = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 16 16",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
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
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z"
        })
    });
};
const Contract = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M64 371.2h76.795V448H192V320H64v51.2zm76.795-230.4H64V192h128V64h-51.205v76.8zM320 448h51.2v-76.8H448V320H320v128zm51.2-307.2V64H320v128h128v-51.2h-76.8z"
        })
    });
};

;// CONCATENATED MODULE: ./components/comifyChat/toast.jsx





const Toast = ({ id , type , message  })=>{
    const { setToasts  } = (0,external_react_.useContext)(ChatContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: id,
        className: `${(style_module_default()).toast} ${(style_module_default())[type]}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                children: message
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                onClick: ()=>{
                    setToasts((prev)=>prev.filter((item)=>item.id !== id));
                    clearTimeout(window[`comify_toast_timeout_${id}`]);
                    delete window[`comify_toast_timeout_${id}`];
                },
                children: /*#__PURE__*/ jsx_runtime.jsx(Close, {})
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/comifyChat/moment.jsx


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
    return /*#__PURE__*/ jsx_runtime.jsx("time", {
        ...rest,
        "data-testid": "moment",
        children: moment(children, format)
    });
};

// EXTERNAL MODULE: ./components/ui/productThumbnail.js
var productThumbnail = __webpack_require__(4382);
;// CONCATENATED MODULE: ./components/comifyChat/index.jsx










function ComifyChat({ openAtStart  }) {
    const [fullScreen, setFullScreen] = (0,external_react_.useState)(false);
    const { chatbotConfig , toasts , standalone  } = (0,external_react_.useContext)(ChatContext);
    const [open, setOpen] = (0,external_react_.useState)(openAtStart || false);
    (0,external_react_.useEffect)(()=>{
        sessionStorage.setItem("crm_infinai_open", open.toString());
    }, [
        open
    ]);
    (0,external_react_.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `infinai_chat_container ${(style_module_default()).chatContainer} ${standalone ? (style_module_default()).standalone : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "infinaiChatTostContainer",
                className: `infinai_chat_toast_container ${(style_module_default()).toastContainer}`,
                children: toasts.map((item)=>/*#__PURE__*/ jsx_runtime.jsx(Toast, {
                        id: item.id,
                        type: item.type,
                        message: item.message
                    }, item.id))
            }),
            open || standalone ? /*#__PURE__*/ jsx_runtime.jsx(Chat, {
                setOpen: setOpen,
                fullScreen: fullScreen,
                setFullScreen: setFullScreen
            }) : /*#__PURE__*/ jsx_runtime.jsx(Avatar, {
                onClick: ()=>setOpen(true),
                src: chatbotConfig?.avatar
            }),
            /*#__PURE__*/ jsx_runtime.jsx("noscript", {
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
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
    const chatRef = (0,external_react_.useRef)();
    const { chatbotConfig , unmountChat: unmountChat1 , convo , setConvo , messages , msgChannel , setMessages , pushToast , initMessages , setInitMessages , topics , standalone  } = (0,external_react_.useContext)(ChatContext);
    const [currInput, setCurrInput] = (0,external_react_.useState)("");
    const messagesRef = (0,external_react_.useRef)();
    const { post: castVote , loading  } = (0,hooks/* useFetch */.ib)(config/* endpoints.message */.Hv.message, {
        headers: {
            "x-chatbot-id": chatbotConfig?._id
        }
    });
    const vote = (0,external_react_.useCallback)((msg_id, vote)=>{
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
    const { post: sendMessage , loading: initiatingChat  } = (0,hooks/* useFetch */.ib)(config/* endpoints.chat */.Hv.chat, {
        headers: {
            "x-chatbot-id": chatbotConfig?._id
        }
    });
    const initChat = (0,external_react_.useCallback)((msg, userDetail = {}, { reloadInit  } = {})=>{
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
        }).then(({ data  })=>{
            if (!data.success) {
                return pushToast.error(data.message);
            }
            localStorage.setItem("infinai_chat_id", data.data._id);
            localStorage.setItem("infinai_chat_user_name", data.data.user.name);
            localStorage.setItem("infinai_chat_user_email", data.data.user.email);
            if (reloadInit) {
                const topic = topics.find((t)=>t.topic === data.data.topic);
                const subTopic = topic?.subTopics?.find((t)=>t.topic === data.data.subTopic);
                setInitMessages(generateMessages({
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
        }).catch((err)=>{
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `infinai_chat ${(style_module_default()).chat} ${fullScreen ? (style_module_default()).fullScreen : ""}`,
        ref: chatRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (style_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (style_module_default()).left,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (style_module_default()).companyDetail,
                            children: [
                                chatbotConfig?.avatar && /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: config/* endpoints.baseUrlPublic */.Hv.baseUrlPublic + chatbotConfig.avatar
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: (style_module_default()).ellepsis,
                                            children: chatbotConfig?.display_name || "Infin AI"
                                        }),
                                        convo?.topic && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                title: convo.topic,
                                                className: `${(style_module_default()).title} ${(style_module_default()).ellepsis}`,
                                                children: convo.topic
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (style_module_default()).right,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: (style_module_default()).clearBtn,
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
                                    setInitMessages(generateMessages({
                                        topics
                                    }));
                                    setMessages([]);
                                    localStorage.removeItem("infinai_chat_id");
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(Clear, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: (style_module_default()).home,
                                onClick: ()=>{
                                    messagesRef.current.scrollTop = -messagesRef.current.scrollHeight;
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(Home, {})
                            }),
                            window.innerWidth >= 480 && /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: (style_module_default()).closeBtn,
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
                                children: fullScreen ? /*#__PURE__*/ jsx_runtime.jsx(Contract, {
                                    className: (style_module_default()).fullScreen
                                }) : /*#__PURE__*/ jsx_runtime.jsx(Expand, {
                                    className: (style_module_default()).fullScreen
                                })
                            }),
                            !standalone && /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: (style_module_default()).closeBtn,
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
                                children: /*#__PURE__*/ jsx_runtime.jsx(Close, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (style_module_default()).messages,
                ref: messagesRef,
                children: (convo?._id ? [
                    ...messages,
                    ...initMessages
                ] : initMessages).map((item, i, arr)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
                        children: [
                            item.type === "form" && /*#__PURE__*/ jsx_runtime.jsx(MessageForm, {
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
                                        setInitMessages(generateMessages({
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
                                        return setInitMessages(generateMessages({
                                            topics,
                                            topic: convo.topic,
                                            askQuery: true
                                        }));
                                    }
                                }
                            }),
                            item.type === "suggestion" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    item._id === "topicQuery" && /*#__PURE__*/ jsx_runtime.jsx(Topics, {
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
                                                return setInitMessages(generateMessages({
                                                    topics,
                                                    topic: input,
                                                    askUserDetail: true
                                                }));
                                            }
                                            setTimeout(()=>messagesRef.current.scrollTop = 0, 20);
                                            // if (!convo?._id) {
                                            if (!name || !email) {
                                                setCurrInput("userDetail");
                                                return;
                                            }
                                            setInitMessages(generateMessages({
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
                                        // } else {
                                        //   setInitMessages(
                                        //     generateMessages({
                                        //       topics,
                                        //       topic: input,
                                        //       name,
                                        //       email,
                                        //       askQuery: true,
                                        //     })
                                        //   );
                                        //   setCurrInput("query");
                                        //   setMessages([]);
                                        //   localStorage.removeItem("infinai_chat_id");
                                        //   messagesRef.current.scrollTop = 0;
                                        // }
                                        },
                                        style: {
                                            marginBottom: arr[i - 1]?.type === "suggestion" ? 5 : arr[i - 1] && arr[i - 1]?.role !== item.role ? 25 : 0
                                        }
                                    }),
                                    item._id === "subTopicQuery" && /*#__PURE__*/ jsx_runtime.jsx(Topics, {
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
                                            // if (!convo?._id) {
                                            setInitMessages(generateMessages({
                                                topics,
                                                topic: topic.topic,
                                                subTopics: topic.subTopics,
                                                subTopic: input,
                                                askQuery: true,
                                                askSubQuery: true
                                            }));
                                        // } else {
                                        //   setInitMessages(
                                        //     generateMessages({
                                        //       topics,
                                        //       topic: convo.topic,
                                        //       subTopic: input,
                                        //       askQuery: true,
                                        //     })
                                        //   );
                                        //   setCurrInput("query");
                                        //   setMessages([]);
                                        //   localStorage.removeItem("infinai_chat_id");
                                        //   messagesRef.current.scrollTop = 0;
                                        // }
                                        },
                                        style: {
                                            marginBottom: arr[i - 1]?.type === "suggestion" ? 5 : arr[i - 1] && arr[i - 1]?.role !== item.role ? 25 : 0
                                        }
                                    }),
                                    ![
                                        "topicQuery",
                                        "subTopicQuery"
                                    ].includes(item._id) && /*#__PURE__*/ jsx_runtime.jsx(Suggestions, {
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
                            !("type" in item) && /*#__PURE__*/ jsx_runtime.jsx(comifyChat_Message, {
                                msg: item,
                                loading: loading,
                                style: {
                                    marginBottom: arr[i - 1]?.type === "suggestion" ? 5 : arr[i - 1] && arr[i - 1]?.role !== item.role ? 25 : 0
                                },
                                castVote: vote
                            }),
                            new Date(item.createdAt).getDate() !== new Date(arr[i + 1]?.createdAt).getDate() && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (style_module_default()).msgDate,
                                children: /*#__PURE__*/ jsx_runtime.jsx(Moment, {
                                    format: "DD MMM YYYY",
                                    children: item.createdAt
                                })
                            })
                        ]
                    }, item._id))
            }),
            !convo?._id && currInput !== "userDetail" && /*#__PURE__*/ jsx_runtime.jsx(ChatForm, {
                onSubmit: (values, options)=>{
                    const name = convo?.user?.name || localStorage.getItem("infinai_chat_user_name");
                    const email = convo?.user?.email || localStorage.getItem("infinai_chat_user_email");
                    if (!name || !email) {
                        setInitMessages(generateMessages({
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
            convo?._id && /*#__PURE__*/ jsx_runtime.jsx(ChatForm, {
                scrollDown: ()=>{
                    messagesRef.current.scrollTop = 0;
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (style_module_default()).footer,
                children: [
                    "Powered by:",
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
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
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `infinai_chat_avatar ${(style_module_default()).avatar} ${src ? (style_module_default()).custom : ""}`,
        onClick: onClick,
        children: src ? /*#__PURE__*/ jsx_runtime.jsx("img", {
            src: config/* endpoints.baseUrlPublic */.Hv.baseUrlPublic + src
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (style_module_default()).circle
                }),
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    className: (style_module_default()).hand,
                    src: "/assets/img/chat-avatar/hand.webp"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "/assets/img/chat-avatar/body.webp"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    className: (style_module_default()).head,
                    src: "/assets/img/chat-avatar/head.webp"
                })
            ]
        })
    });
};
const comifyChat_Message = ({ msg , castVote , loading , style  })=>{
    const { chatbotConfig , convo  } = (0,external_react_.useContext)(ChatContext);
    let productList = null;
    if (msg.role === "assistant" && msg.content.startsWith("[") && msg.content.endsWith("]")) {
        try {
            productList = JSON.parse(msg.content);
        } catch (err) {
        //
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `${(style_module_default()).msg} ${(style_module_default())[msg.role]}`,
        style: style,
        children: [
            msg.role !== "user" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${(style_module_default()).msgAvatar} ${(style_module_default()).assistant} ${chatbotConfig?.avatar ? (style_module_default()).custom : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        className: (style_module_default()).hand,
                        src: chatbotConfig?.avatar ? config/* endpoints.baseUrlPublic */.Hv.baseUrlPublic + chatbotConfig?.avatar : "/assets/img/chat-avatar/full.webp"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Moment, {
                        format: "hh:mm",
                        children: msg.createdAt
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (style_module_default()).content,
                children: [
                    productList ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (style_module_default()).productList,
                        children: productList.map((product)=>/*#__PURE__*/ jsx_runtime.jsx(productThumbnail/* ProductThumb */.B, {
                                product: product
                            }, product._id))
                    }) : /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: msg.content
                    }),
                    msg.role === "assistant" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (style_module_default()).actions,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(CopyBtn, {
                                content: msg.content
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: (style_module_default()).btn,
                                title: "Like",
                                disabled: loading,
                                onClick: ()=>castVote(msg._id, msg.like ? null : true),
                                children: msg.like === true ? /*#__PURE__*/ jsx_runtime.jsx(ThumbsUp, {}) : /*#__PURE__*/ jsx_runtime.jsx(ThumbsUpOutline, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: (style_module_default()).btn,
                                title: "Dislike",
                                disabled: loading,
                                onClick: ()=>castVote(msg._id, msg.like === false ? null : false),
                                children: msg.like === false ? /*#__PURE__*/ jsx_runtime.jsx(ThumbsDown, {}) : /*#__PURE__*/ jsx_runtime.jsx(ThumbsDownOutline, {})
                            })
                        ]
                    })
                ]
            }),
            msg.role === "user" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (style_module_default()).msgAvatar,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (style_module_default()).img,
                        children: convo?.user?.name?.[0]?.toUpperCase() || "U"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Moment, {
                        format: "hh:mm",
                        children: msg.createdAt
                    })
                ]
            })
        ]
    });
};
const MessageForm = ({ msg , style , onSubmit  })=>{
    const [values, setValues] = (0,external_react_.useState)({});
    const { chatbotConfig  } = (0,external_react_.useContext)(ChatContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `${(style_module_default()).msg} ${(style_module_default()).form}`,
        style: style,
        children: [
            msg.role !== "user" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${(style_module_default()).msgAvatar} ${(style_module_default()).assistant} ${chatbotConfig?.avatar ? (style_module_default()).custom : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        className: (style_module_default()).hand,
                        src: chatbotConfig?.avatar ? config/* endpoints.baseUrlPublic */.Hv.baseUrlPublic + chatbotConfig?.avatar : "/assets/img/chat-avatar/full.webp"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Moment, {
                        format: "hh:mm",
                        children: msg.createdAt
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (style_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: msg.content
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        onSubmit: (e)=>{
                            e.preventDefault();
                            onSubmit(values);
                        },
                        children: [
                            (msg.fields || []).map((field)=>{
                                if (field.inputType === "input") {
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                htmlFor: field.name,
                                                children: field.label
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
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
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
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
    const { currentPath , topics  } = (0,external_react_.useContext)(ChatContext);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (style_module_default()).suggestions,
        style: {
            ...style
        },
        children: options.filter((item)=>{
            const topic = topics.find((t)=>t.topic === item);
            return !topic?.paths?.length || topic?.paths?.some((path)=>currentPath.match(new RegExp(`${path}$`)));
        }).map((item)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                disabled: item === active,
                className: `${(style_module_default()).chip} ${item === active ? (style_module_default()).active : ""}`,
                onClick: ()=>onChange(item),
                children: item
            }, item))
    });
};
const Suggestions = ({ options , active , onChange , style  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (style_module_default()).suggestions,
        style: {
            ...style
        },
        children: options.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                disabled: item === active,
                className: `${(style_module_default()).chip} ${item === active ? (style_module_default()).active : ""}`,
                onClick: ()=>onChange(item),
                children: item
            }, item))
    });
};
const CopyBtn = ({ content  })=>{
    const timer = (0,external_react_.useRef)();
    const [done, setDone] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime.jsx("button", {
        className: (style_module_default()).btn,
        title: "Copy",
        onClick: ()=>{
            navigator.clipboard.writeText(content);
            setDone(true);
            clearTimeout(timer.current);
            timer.current = setTimeout(()=>{
                setDone(false);
            }, 1000);
        },
        children: done ? /*#__PURE__*/ jsx_runtime.jsx(Check, {}) : /*#__PURE__*/ jsx_runtime.jsx(Clipboard, {
            className: (style_module_default()).clipboard
        })
    });
};
const ChatForm = ({ setOpen , inputOptions , scrollDown , onSubmit , loading: defaultLoading  })=>{
    const { chatbotConfig , convo , setMessages , msgChannel , pushToast  } = (0,external_react_.useContext)(ChatContext);
    const [msg, setMsg] = (0,external_react_.useState)("");
    const { post: sendMessage , loading  } = (0,hooks/* useFetch */.ib)(config/* endpoints.chat */.Hv.chat, {
        headers: {
            "x-chatbot-id": chatbotConfig?._id
        }
    });
    const submit = (0,external_react_.useCallback)((e)=>{
        e.preventDefault();
        scrollDown();
        sendMessage({
            content: msg
        }, {
            params: {
                ":chat_id": convo._id
            }
        }).then(({ data  })=>{
            if (!data.success) {
                return pushToast.error(data.message);
            }
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        className: (style_module_default()).chatForm,
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
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                autoFocus: true,
                readOnly: loading || defaultLoading,
                ...inputOptions,
                placeholder: "Type a message",
                value: msg,
                onChange: (e)=>setMsg(e.target.value),
                className: (style_module_default()).input
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                className: (style_module_default()).sendBtn,
                disabled: loading || defaultLoading || !msg.trim(),
                children: defaultLoading || loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: (style_module_default()).dot
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: (style_module_default()).dot
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: (style_module_default()).dot
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime.jsx(Send, {})
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js









// import { loadScript } from "helpers";
// import { endpoints } from "config";
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
function _app_resizeWindow() {
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
        window.addEventListener("resize", ()=>_app_resizeWindow());
        _app_resizeWindow();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(SiteContext/* Provider */.z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime.jsx(ChatContextProvider, {
                    containerId: "chatContainer",
                    standaloneContainerId: "chatWrapper",
                    children: /*#__PURE__*/ jsx_runtime.jsx(ComifyChat, {
                        openAtStart: false
                    })
                })
            ]
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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,150,774,382], () => (__webpack_exec__(9037)));
module.exports = __webpack_exports__;

})();