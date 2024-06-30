import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  useContext,
  Fragment,
} from "react";
import s from "./style.module.scss";
import { useFetch } from "hooks";
import { endpoints } from "config";
import { ChatContext, generateMessages } from "./context.jsx";
import { Toast } from "./toast.jsx";
import {
  Check,
  Clear,
  Expand,
  ThumbsDown,
  ThumbsDownOutline,
  ThumbsUp,
  ThumbsUpOutline,
  Contract,
  Close,
  Home,
  Clipboard,
  Send,
} from "./icons.jsx";
import { Moment } from "./moment.jsx";
import { ProductThumb } from "components/ui/productThumbnail";
import useMeasure from "react-use-measure";
import Markdown from "react-markdown";

export function ComifyChat({ openAtStart }) {
  const [fullScreen, setFullScreen] = useState(false);
  const { chatbotConfig, toasts, standalone } = useContext(ChatContext);
  const [open, setOpen] = useState(openAtStart || false);

  useEffect(() => {
    sessionStorage.setItem("crm_infinai_open", open.toString());
  }, [open]);

  useEffect(() => {
    const handler = () => {
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
      setTimeout(() => {
        setOpen(true);
      }, ms);
    }

    return () => {
      window.removeEventListener("locationchange", handler);
    };
  }, []);

  return (
    <div
      className={`infinai_chat_container ${s.chatContainer} ${
        standalone ? s.standalone : ""
      }`}
    >
      <div
        id="infinaiChatTostContainer"
        className={`infinai_chat_toast_container ${s.toastContainer}`}
      >
        {toasts.map((item) => (
          <Toast
            key={item.id}
            id={item.id}
            type={item.type}
            message={item.message}
          />
        ))}
      </div>
      {open || standalone ? (
        <Chat
          setOpen={setOpen}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
        />
      ) : (
        <Avatar onClick={() => setOpen(true)} src={chatbotConfig?.avatar} />
      )}
      <noscript>
        <img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=648770637226233&ev=PageView&noscript=1"
        />
      </noscript>
    </div>
  );
}

const wait = (ms) => new Promise((res, rej) => setTimeout(() => res(true), ms));

const Chat = ({ setOpen, fullScreen, setFullScreen }) => {
  const chatRef = useRef();
  const {
    chatbotConfig,
    unmountChat,
    convo,
    setConvo,
    messages,
    msgChannel,
    setMessages,
    pushToast,
    initMessages,
    setInitMessages,
    topics,
    standalone,
  } = useContext(ChatContext);
  const [currInput, setCurrInput] = useState("");

  const { post: castVote, loading } = useFetch(endpoints.message, {
    headers: { "x-chatbot-id": chatbotConfig?._id },
  });
  const vote = useCallback(
    (msg_id, vote) => {
      castVote(
        { like: vote },
        {
          params: {
            ":chat_id": convo._id,
            ":message_id": msg_id,
          },
        }
      )
        .then(({ data }) => {
          if (!data.success) {
            return pushToast.error(data.message);
          }

          setMessages((prev) => {
            const messages = prev.map((item) =>
              item._id === msg_id ? { ...item, like: vote } : item
            );
            msgChannel.postMessage({ messages });
            return messages;
          });
        })
        .catch((err) => pushToast.error(err.message));
    },
    [convo]
  );

  const { post: sendMessage, loading: initiatingChat } = useFetch(
    endpoints.chat,
    { headers: { "x-chatbot-id": chatbotConfig?._id } }
  );
  const initChat = useCallback(
    (msg, userDetail = {}, { reloadInit } = {}) => {
      let payload = {
        name: convo?.user?.name,
        email: convo?.user?.email,
        ...userDetail,
        message: msg,
        topic: convo.subTopic || convo.topic,
        parentTopic: convo.subTopic ? convo.topic : undefined,
      };
      sendMessage(payload, { params: { ":chat_id": "" } })
        .then(async ({ res, stream, data }) => {
          const handleNewChat = function (data) {
            localStorage.setItem("infinai_chat_id", data.data._id);
            localStorage.setItem("infinai_chat_user_name", data.data.user.name);
            localStorage.setItem(
              "infinai_chat_user_email",
              data.data.user.email
            );
            if (reloadInit) {
              const topic = topics.find((t) => t.topic === data.data.topic);
              const subTopic = topic?.subTopics?.find(
                (t) => t.topic === data.data.subTopic
              );
              setInitMessages(
                generateMessages({
                  topics,
                  // ...(topics.some((t) => t.topic === data.data.topic) && {
                  //   topic: data.data.topic,
                  //   askQuery: true,
                  // }),
                  ...(topic && {
                    topic: topic.topic,
                    askQuery: true,
                    ...(subTopic && {
                      subTopics: topic.subTopics,
                      subTopic: subTopic.topic,
                      askSubQuery: true,
                    }),
                  }),
                })
              );
            }
            setConvo({ ...data.data, messages: undefined });
            msgChannel.postMessage({ messages: data.data.messages.reverse() });
            setMessages(data.data.messages);
          };
          if (stream) {
            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let done = false;
            let firstBitReceived = false;

            while (!done) {
              const { value, done: streamDone } = await reader.read();
              done = streamDone;
              if (value) {
                let buffer = null;
                const raw = decoder.decode(value, { stream: true });
                const parts = raw
                  .split("___msgEnd___")
                  .map((item) => {
                    try {
                      const content = JSON.parse(item);
                      return content;
                    } catch (err) {
                      return null;
                    }
                  })
                  .filter(Boolean);
                parts.forEach((part) => {
                  if (!buffer) {
                    buffer = part;
                  } else if (buffer?.user) {
                    buffer.messages[buffer.messages.length - 1].content +=
                      part.content;
                  } else {
                    buffer.content += part.content;
                  }
                });

                if (!firstBitReceived) {
                  handleNewChat({ data: buffer });
                  firstBitReceived = true;
                } else {
                  setMessages((prev) => {
                    const messages = prev.map((m) =>
                      m._id === buffer._id
                        ? {
                            ...m,
                            role: "assistant",
                            content: m.content + buffer.content,
                          }
                        : m
                    );
                    msgChannel.postMessage({ messages });
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
        })
        .catch((err) => {
          console.log(err);
          pushToast.error(err.message);
          if (err.status === 401) {
            setOpen(false);
            unmountChat();
          }
        });
    },
    [convo, chatbotConfig]
  );

  const [headerRef, { width }] = useMeasure();
  const messagesRef = useRef();
  return (
    <div
      className={`infinai_chat ${s.chat} ${fullScreen ? s.fullScreen : ""}`}
      ref={chatRef}
    >
      <div className={s.header} ref={headerRef}>
        <div className={s.left}>
          <div className={s.companyDetail}>
            {chatbotConfig?.avatar && (
              <img src={endpoints.baseUrlPublic + chatbotConfig.avatar} />
            )}
            <div>
              <p className={s.ellepsis}>
                {convo?.title || chatbotConfig?.display_name || "Infin AI"}
              </p>
              {convo?.topic && (
                <>
                  {/* <span>•</span> */}
                  <span
                    title={convo.topic}
                    className={`${s.title} ${s.ellepsis}`}
                  >
                    {convo.topic}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={s.right}>
          <button
            className={s.clearBtn}
            onClick={() => {
              setConvo((prev) => {
                if (prev?.user?.name && prev?.user?.email) {
                  localStorage.setItem(
                    "infinai_chat_user_name",
                    prev.user.name
                  );
                  localStorage.setItem(
                    "infinai_chat_user_email",
                    prev.user.email
                  );
                  return { user: prev.user };
                }
                return {};
              });
              setCurrInput("query");
              msgChannel.postMessage({ messages: [] });
              setInitMessages(generateMessages({ topics }));
              setMessages([]);
              localStorage.removeItem("infinai_chat_id");
            }}
          >
            <Clear />
          </button>
          <button
            className={s.home}
            onClick={() => {
              messagesRef.current.scrollTop = -messagesRef.current.scrollHeight;
            }}
          >
            <Home />
          </button>
          {window.innerWidth >= 480 && (
            <button
              className={s.closeBtn}
              onClick={() => {
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
              }}
            >
              {fullScreen ? (
                <Contract className={s.fullScreen} />
              ) : (
                <Expand className={s.fullScreen} />
              )}
            </button>
          )}
          {!standalone && (
            <button
              className={s.closeBtn}
              onClick={() => {
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
              }}
            >
              <Close />
            </button>
          )}
        </div>
      </div>

      <div className={s.messages} ref={messagesRef}>
        {(convo?._id ? [...messages, ...initMessages] : initMessages).map(
          (item, i, arr) => (
            <Fragment key={item._id}>
              {item.type === "form" && (
                <MessageForm
                  msg={item}
                  onSubmit={(values) => {
                    setConvo((prev) => ({
                      ...prev,
                      user: {
                        name: values.name,
                        email: values.email,
                      },
                    }));
                    const query = initMessages.find(
                      (item) => item._id === "queryResponse"
                    )?.content;
                    if (query) {
                      setCurrInput("");
                      setInitMessages(
                        generateMessages({
                          topics,
                          topic: convo.topic,
                          queryResponse: query,
                        })
                      );
                      initChat(
                        query,
                        {
                          name: values.name,
                          email: values.email,
                        },
                        { reloadInit: true }
                      );
                    } else {
                      setCurrInput("query");
                      return setInitMessages(
                        generateMessages({
                          topics,
                          topic: convo.topic,
                          askQuery: true,
                        })
                      );
                    }
                  }}
                />
              )}
              {item.type === "suggestion" && (
                <>
                  {item._id === "topicQuery" && (
                    <Topics
                      options={[...item.options]}
                      active={convo?.topic}
                      onChange={async (input) => {
                        await wait(200);

                        const name = convo?.user?.name;
                        const email = convo?.user?.email;

                        setConvo((prev) => ({
                          topic: input,
                          user: prev?.user,
                        }));

                        if (!name || !email) {
                          setCurrInput("userDetail");
                          return setInitMessages(
                            generateMessages({
                              topics,
                              topic: input,
                              askUserDetail: true,
                            })
                          );
                        }

                        setTimeout(
                          () => (messagesRef.current.scrollTop = 0),
                          20
                        );

                        if (!name || !email) {
                          setCurrInput("userDetail");
                          return;
                        }
                        setInitMessages(
                          generateMessages({
                            topics,
                            topic: input,
                            subTopics: topics.find((t) => t.topic === input)
                              ?.subTopics,
                            ...(name ? { name } : { askName: true }),
                            ...(email ? { email } : { askEmail: !!name }),
                            ...(name && email ? { askQuery: true } : {}),
                          })
                        );
                      }}
                      style={{
                        marginBottom:
                          arr[i - 1]?.type === "suggestion"
                            ? 5
                            : arr[i - 1] && arr[i - 1]?.role !== item.role
                            ? 25
                            : 0,
                      }}
                    />
                  )}
                  {item._id === "subTopicQuery" && (
                    <Topics
                      options={[...item.options]}
                      active={convo?.subTopic}
                      onChange={async (input) => {
                        await wait(200);

                        setConvo((prev) => ({
                          ...prev,
                          subTopic: input,
                        }));

                        setTimeout(
                          () => (messagesRef.current.scrollTop = 0),
                          20
                        );

                        const topic = topics.find(
                          (t) => t.topic === convo.topic
                        );

                        setInitMessages(
                          generateMessages({
                            topics,
                            topic: topic.topic,
                            subTopics: topic.subTopics,
                            subTopic: input,
                            askQuery: true,
                            askSubQuery: true,
                          })
                        );
                      }}
                      style={{
                        marginBottom:
                          arr[i - 1]?.type === "suggestion"
                            ? 5
                            : arr[i - 1] && arr[i - 1]?.role !== item.role
                            ? 25
                            : 0,
                      }}
                    />
                  )}
                  {!["topicQuery", "subTopicQuery"].includes(item._id) && (
                    <Suggestions
                      options={[...item.options]}
                      active={convo?.topic}
                      onChange={async (input) => {
                        // do something
                      }}
                      style={{
                        // marginLeft: item.role ? "unset" : "55px",
                        marginBottom:
                          arr[i - 1]?.type === "suggestion"
                            ? 5
                            : arr[i - 1] && arr[i - 1]?.role !== item.role
                            ? 25
                            : 0,
                      }}
                    />
                  )}
                </>
              )}
              {!("type" in item) && (
                <Message
                  setOpen={setOpen}
                  msg={item}
                  loading={loading}
                  messageWrapperWidth={width}
                  style={{
                    marginBottom:
                      arr[i - 1]?.type === "suggestion"
                        ? 5
                        : arr[i - 1] && arr[i - 1]?.role !== item.role
                        ? 25
                        : 0,
                  }}
                  castVote={vote}
                />
              )}
              {new Date(item.createdAt).getDate() !==
                new Date(arr[i + 1]?.createdAt).getDate() && (
                <div className={s.msgDate}>
                  <Moment format="DD MMM YYYY">{item.createdAt}</Moment>
                </div>
              )}
            </Fragment>
          )
        )}
      </div>

      {!convo?._id && currInput !== "userDetail" && (
        <ChatForm
          onSubmit={(values, options) => {
            const name =
              convo?.user?.name ||
              localStorage.getItem("infinai_chat_user_name");
            const email =
              convo?.user?.email ||
              localStorage.getItem("infinai_chat_user_email");

            if (!name || !email) {
              setInitMessages(
                generateMessages({
                  queryResponse: values.msg,
                  askUserDetail: true,
                })
              );
              setCurrInput("userDetail");
              return;
            }
            initChat(values.msg, { name, email }, { reloadInit: true });
            setCurrInput("query");
          }}
          scrollDown={() => {
            messagesRef.current.scrollTop = 0;
          }}
          loading={initiatingChat}
        />
      )}

      {convo?._id && (
        <ChatForm
          scrollDown={() => {
            messagesRef.current.scrollTop = 0;
          }}
        />
      )}
      <div className={s.footer}>
        Powered by:{" "}
        <a href="https://infinai.in" target="_blank">
          Infin AI
        </a>
      </div>
    </div>
  );
};

const Avatar = ({ onClick, src }) => {
  return (
    <div
      className={`infinai_chat_avatar ${s.avatar} ${src ? s.custom : ""}`}
      onClick={onClick}
    >
      {src ? (
        <img src={endpoints.baseUrlPublic + src} />
      ) : (
        <>
          <div className={s.circle} />
          <img className={s.hand} src={"/assets/img/chat-avatar/hand.webp"} />
          <img src={"/assets/img/chat-avatar/body.webp"} />
          <img className={s.head} src={"/assets/img/chat-avatar/head.webp"} />
        </>
      )}
    </div>
  );
};

const Message = ({
  setOpen,
  msg,
  castVote,
  loading,
  style,
  messageWrapperWidth,
}) => {
  const { chatbotConfig, convo } = useContext(ChatContext);
  let productList = null;
  let message = null;
  if (
    msg.role === "assistant" &&
    msg.content.includes(`"response_type": "product_list"`)
  ) {
    try {
      const parsedMsg = JSON.parse(msg.content);
      productList = parsedMsg.products;
      message = parsedMsg.message;
    } catch (err) {
      //
    }
  }
  return (
    <div className={`${s.msg} ${s[msg.role]}`} style={style}>
      {msg.role !== "user" && (
        <div
          className={`${s.msgAvatar} ${s.assistant} ${
            chatbotConfig?.avatar ? s.custom : ""
          }`}
        >
          <img
            className={s.hand}
            src={
              chatbotConfig?.avatar
                ? endpoints.baseUrlPublic + chatbotConfig?.avatar
                : "/assets/img/chat-avatar/full.webp"
            }
          />
          <Moment format="hh:mm">{msg.createdAt}</Moment>
        </div>
      )}
      <div
        className={s.content}
        style={{ maxWidth: `${messageWrapperWidth - 95}px` }}
      >
        {productList && (
          <div
            className={s.productWrapper}
            style={{ maxWidth: `${messageWrapperWidth - 95}px` }}
          >
            <div className={s.productList}>
              {productList.map((product) => (
                <ProductThumb
                  key={product._id}
                  onClick={() => setOpen(false)}
                  product={product}
                />
              ))}
            </div>
          </div>
        )}
        <div className="markdown">
          <Markdown>{message || msg.content}</Markdown>
        </div>
        {msg.role === "assistant" && (
          <div className={s.actions}>
            <CopyBtn content={msg.content} />
            <button
              className={s.btn}
              title="Like"
              disabled={loading}
              onClick={() => castVote(msg._id, msg.like ? null : true)}
            >
              {msg.like === true ? <ThumbsUp /> : <ThumbsUpOutline />}
            </button>
            <button
              className={s.btn}
              title="Dislike"
              disabled={loading}
              onClick={() =>
                castVote(msg._id, msg.like === false ? null : false)
              }
            >
              {msg.like === false ? <ThumbsDown /> : <ThumbsDownOutline />}
            </button>
          </div>
        )}
      </div>
      {msg.role === "user" && (
        <div className={s.msgAvatar}>
          <div className={s.img}>
            {convo?.user?.name?.[0]?.toUpperCase() || "U"}
          </div>
          <Moment format="hh:mm">{msg.createdAt}</Moment>
        </div>
      )}
    </div>
  );
};

const MessageForm = ({ msg, style, onSubmit }) => {
  const [values, setValues] = useState({});
  const { chatbotConfig } = useContext(ChatContext);

  return (
    <div className={`${s.msg} ${s.form}`} style={style}>
      {msg.role !== "user" && (
        <div
          className={`${s.msgAvatar} ${s.assistant} ${
            chatbotConfig?.avatar ? s.custom : ""
          }`}
        >
          <img
            className={s.hand}
            src={
              chatbotConfig?.avatar
                ? endpoints.baseUrlPublic + chatbotConfig?.avatar
                : "/assets/img/chat-avatar/full.webp"
            }
          />
          <Moment format="hh:mm">{msg.createdAt}</Moment>
        </div>
      )}
      <div className={s.content}>
        <p>{msg.content}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(values);
          }}
        >
          {(msg.fields || []).map((field) => {
            if (field.inputType === "input") {
              return (
                <section key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    name={field.name}
                    required={field.required}
                    value={values[field.name] || ""}
                    type={field.type || "text"}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        [field.name]: e.target.value,
                      }))
                    }
                  />
                </section>
              );
            }
            return null;
          })}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const Topics = ({ options, active, onChange, style }) => {
  const { currentPath, topics } = useContext(ChatContext);
  return (
    <div className={s.suggestions} style={{ ...style }}>
      {options
        .filter((item) => {
          const topic = topics.find((t) => t.topic === item);
          return (
            !topic?.paths?.length ||
            topic?.paths?.some((path) =>
              currentPath.match(new RegExp(`${path}$`))
            )
          );
        })
        .map((item) => (
          <button
            disabled={item === active}
            className={`${s.chip} ${item === active ? s.active : ""}`}
            key={item}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        ))}
    </div>
  );
};

const Suggestions = ({ options, active, onChange, style }) => {
  return (
    <div className={s.suggestions} style={{ ...style }}>
      {options.map((item) => (
        <button
          disabled={item === active}
          className={`${s.chip} ${item === active ? s.active : ""}`}
          key={item}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

const CopyBtn = ({ content }) => {
  const timer = useRef();
  const [done, setDone] = useState(false);
  return (
    <button
      className={s.btn}
      title="Copy"
      onClick={() => {
        navigator.clipboard.writeText(content);
        setDone(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          setDone(false);
        }, 1000);
      }}
    >
      {done ? <Check /> : <Clipboard className={s.clipboard} />}
    </button>
  );
};

const ChatForm = ({
  setOpen,
  inputOptions,
  scrollDown,
  onSubmit,
  loading: defaultLoading,
}) => {
  const { chatbotConfig, convo, setMessages, msgChannel, pushToast } =
    useContext(ChatContext);
  const [msg, setMsg] = useState("");
  const { post: sendMessage, loading } = useFetch(endpoints.chat, {
    headers: { "x-chatbot-id": chatbotConfig?._id },
  });
  const submit = useCallback(
    (e) => {
      e.preventDefault();
      scrollDown();

      sendMessage({ content: msg }, { params: { ":chat_id": convo._id } })
        .then(async ({ res, stream, data }) => {
          const handleNewMessage = (data) => {
            setMessages((prev) => {
              const messages = [
                data.data,
                {
                  _id: Math.random().toString(36).substr(-8),
                  role: "user",
                  name: "Guest",
                  content: msg,
                  createdAt: new Date(),
                },
                ...prev,
              ];
              msgChannel.postMessage({ messages });
              return messages;
            });
            setMsg("");
            setTimeout(() => scrollDown(), 50);
          };
          if (stream) {
            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let done = false;
            let firstBitReceived = false;

            while (!done) {
              const { value, done: streamDone } = await reader.read();
              done = streamDone;
              if (value) {
                let buffer = null;
                const raw = decoder.decode(value, { stream: true });
                const parts = raw
                  .split("___msgEnd___")
                  .map((item) => {
                    try {
                      const content = JSON.parse(item);
                      return content;
                    } catch (err) {
                      return null;
                    }
                  })
                  .filter(Boolean);
                parts.forEach((part) => {
                  if (!buffer) {
                    buffer = part;
                  } else {
                    buffer.content += part.content;
                  }
                });

                if (!firstBitReceived) {
                  firstBitReceived = true;
                  handleNewMessage({ data: buffer });
                } else {
                  setMessages((prev) => {
                    const messages = prev.map((m) =>
                      m._id === buffer._id
                        ? {
                            ...m,
                            role: "assistant",
                            content: m.content + buffer.content,
                          }
                        : m
                    );
                    msgChannel.postMessage({ messages });
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
        })
        .catch((err) => {
          pushToast.error(err.message);
          if (err.status === 401) {
            setOpen(false);
            unmountChat();
          }
        });
    },
    [msg]
  );
  return (
    <form
      className={s.chatForm}
      onSubmit={
        onSubmit
          ? (e) => {
              e.preventDefault();
              onSubmit(
                { msg },
                {
                  clearForm: () => {
                    setMsg("");
                  },
                }
              );
            }
          : submit
      }
    >
      <input
        autoFocus
        readOnly={loading || defaultLoading}
        {...inputOptions}
        placeholder="Type a message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className={s.input}
      />
      <button
        className={s.sendBtn}
        disabled={loading || defaultLoading || !msg.trim()}
      >
        {defaultLoading || loading ? (
          <>
            <span className={s.dot} />
            <span className={s.dot} />
            <span className={s.dot} />
          </>
        ) : (
          <Send />
        )}
      </button>
    </form>
  );
};
