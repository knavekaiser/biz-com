import { useCallback, useContext, useRef, useState } from "react";
import { AiOutlineMessage, AiOutlineSend } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { TiArrowMinimise } from "react-icons/ti";
import { BsClipboard } from "react-icons/bs";
import {
  HiThumbDown,
  HiThumbUp,
  HiOutlineThumbDown,
  HiOutlineThumbUp,
} from "react-icons/hi";
import s from "./style.module.css";
import { ChatContextProvider, ChatContext } from "./ChatContext";
import { useFetch } from "./utils/useFetch";
import endpoints from "./utils/endpoints";

export default function ComifyChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className={s.chatContainer}>
      {open ? (
        <Chat setOpen={setOpen} />
      ) : (
        <button className={s.chatTglBtn} onClick={() => setOpen(true)}>
          <AiOutlineMessage />
        </button>
      )}
    </div>
  );
}

const Chat = ({ setOpen }) => {
  const messagesRef = useRef();
  const { convo, setUser, setConvo, messages, setMessages } =
    useContext(ChatContext);

  const { post: castVote, loading } = useFetch(endpoints.message);
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
            return alert(data.message);
          }
          setMessages((prev) =>
            prev.map((item) =>
              item._id === msg_id ? { ...item, like: vote } : item
            )
          );
        })
        .catch((err) => alert(err.message));
    },
    [convo]
  );

  return (
    <div className={s.chat}>
      <div className={s.header}>
        {convo && (
          <button
            className={s.clearBtn}
            onClick={() => {
              setUser(convo.user);
              setConvo(null);
              setMessages([]);
              localStorage.removeItem("comify_chat_id");
            }}
          >
            <BiArrowBack />
          </button>
        )}
        <button className={s.closeBtn} onClick={() => setOpen(false)}>
          <TiArrowMinimise />
        </button>
      </div>

      <div className={s.messages} ref={messagesRef}>
        {!convo ? (
          <ConvoForm />
        ) : messages.length === 0 ? (
          <p className={s.placeholder}>No message yet!</p>
        ) : (
          messages.map((item, i, arr) => (
            <Message
              key={item._id}
              msg={item}
              loading={loading}
              style={{
                marginBottom: arr[i - 1]?.role !== item.role ? 5 : 0,
              }}
              castVote={vote}
            />
          ))
        )}
      </div>
      {convo && (
        <ChatForm
          convo={convo}
          setMessages={setMessages}
          scrollDown={() => {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
          }}
        />
      )}
    </div>
  );
};

const Message = ({ msg, castVote, loading, style }) => {
  return (
    <div className={`${s.msg} ${s[msg.role]}`} style={style}>
      {msg.role === "assistant" && (
        <div className={s.actions}>
          <button
            className={s.btn}
            title="Copy"
            onClick={() => navigator.clipboard.writeText(msg.content)}
          >
            <BsClipboard />
          </button>
          <button
            className={s.btn}
            title="Like"
            disabled={loading}
            onClick={() => castVote(msg._id, msg.like ? null : true)}
          >
            {msg.like ? <HiThumbUp /> : <HiOutlineThumbUp />}
          </button>
          <button
            className={s.btn}
            title="Dislike"
            disabled={loading}
            onClick={() => castVote(msg._id, msg.like === false ? null : false)}
          >
            {msg.like === false ? <HiThumbDown /> : <HiOutlineThumbDown />}
          </button>
        </div>
      )}
      <p>{msg.content}</p>
    </div>
  );
};

const ChatForm = ({ convo, setMessages, scrollDown }) => {
  const [msg, setMsg] = useState("");
  const { post: sendMessage, loading } = useFetch(endpoints.chat);
  const submit = useCallback(
    (e) => {
      e.preventDefault();
      scrollDown();

      sendMessage({ content: msg }, { params: { ":chat_id": convo._id } })
        .then(({ data }) => {
          if (!data.success) {
            return alert(data.message);
          }
          setMessages((prev) => {
            return [
              data.data,
              { _id: Math.random(), role: "user", name: "Guest", content: msg },
              ...prev,
            ];
          });
          setMsg("");
        })
        .catch((err) => alert(err.message));
    },
    [msg]
  );
  return (
    <form className={s.chatForm} onSubmit={submit}>
      <input
        placeholder="Type a message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className={s.input}
      />
      <button className={s.sendBtn} disabled={loading}>
        <AiOutlineSend />
      </button>
    </form>
  );
};

const ConvoForm = ({}) => {
  const { user, topics, setConvo, setMessages } = useContext(ChatContext);
  const [errors, setErrors] = useState({});
  const [source, setSource] = useState("");
  const [topic, setTopic] = useState("");
  const [url, setUrl] = useState("");
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [msg, setMsg] = useState("");

  const { post: initChat, loading } = useFetch(endpoints.chat);

  const submit = useCallback(
    (e) => {
      e.preventDefault();

      if (!source) {
        return setErrors((prev) => ({
          ...prev,
          source: "Please select a source",
        }));
      }

      if (source === "topic" && !topic) {
        return setErrors((prev) => ({
          ...prev,
          topic: "Please select a topic",
        }));
      }
      if (source === "url" && !url) {
        return setErrors((prev) => ({
          ...prev,
          url: "Please provide an URL",
        }));
      }

      initChat(
        {
          ...(topic && { topic }),
          ...(url && { url: url.startsWith("http") ? url : "http://" + url }),
          name,
          email,
          message: msg,
        },
        {
          params: {
            ":chat_id": "",
          },
        }
      )
        .then(({ data }) => {
          if (!data.success) {
            return alert(data.message);
          }
          localStorage.setItem("comify_chat_id", data.data._id);
          setConvo({ ...data.data, messages: undefined });
          setMessages(data.data.messages.reverse());
        })
        .catch((err) => alert(err.message));
    },
    [topic, name, source, email, url, msg]
  );

  return (
    <form className={s.convoForm} onSubmit={submit}>
      <section>
        <label className={s.label}>Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={s.input}
        />
      </section>
      <section>
        <label className={s.label}>Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={s.input}
        />
      </section>

      <section className={s.sources}>
        <label htmlFor="topic" className={s.label}>
          Source:
        </label>
        {
          <div className={s.radio}>
            <label htmlFor="topic" className={s.radioLabel}>
              <input
                id="topic"
                type="radio"
                value="topic"
                checked={source === "topic"}
                disabled={topics.length === 0}
                onChange={(e) => {
                  setSource(e.target.value);
                  setErrors((prev) => ({ ...prev, source: undefined }));
                }}
              />
              Topic
            </label>
          </div>
        }
        <div className={s.radio}>
          <label htmlFor="url" className={s.radioLabel}>
            <input
              id="url"
              type="radio"
              value="url"
              checked={source === "url"}
              onChange={(e) => {
                setSource(e.target.value);
                setErrors((prev) => ({ ...prev, source: undefined }));
              }}
            />
            URL
          </label>
        </div>
        {errors.source && <p className={s.err}>{errors.source}</p>}
      </section>

      {source === "topic" && (
        <section className={s.topics}>
          <label className={s.label}>Pick a Topic</label>
          <ul className={s.list}>
            {topics.map((item) => (
              <li
                key={item}
                className={`${s.topic} ${topic === item ? s.active : ""}`}
                onClick={() => {
                  setTopic(item);
                  setErrors((prev) => ({ ...prev, topic: undefined }));
                }}
              >
                {item}
              </li>
            ))}
          </ul>
          {errors.topic && <p className={s.err}>{errors.topic}</p>}
        </section>
      )}

      {source === "url" && (
        <section>
          <label className={s.label}>URL</label>
          <input
            required
            // type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={s.input}
          />
        </section>
      )}

      <section>
        <label className={s.label}>Message</label>
        <textarea
          required
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className={s.textarea}
        />
      </section>
      <button className={s.btn} disabled={loading}>
        Submit
      </button>
    </form>
  );
};

export { ChatContextProvider };