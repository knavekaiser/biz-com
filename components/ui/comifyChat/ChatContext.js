import React, { createContext, useEffect, useState } from "react";

import { useFetch } from "./utils/useFetch";
import endpoints from "./utils/endpoints";

export const ChatContext = createContext();
export const ChatContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [convo, setConvo] = useState(null);
  const [topics, setTopics] = useState([]);
  const [messages, setMessages] = useState([]);

  const { get: getTopics } = useFetch(endpoints.topics);
  const { get: getChat } = useFetch(endpoints.chat);

  useEffect(() => {
    getTopics()
      .then(({ data }) => {
        if (data.success) {
          setTopics(data.data);
        } else {
          // alert(data.message);
        }
      })
      .catch((err) => alert(err.message));

    if (localStorage.getItem("comify_chat_id")) {
      getChat({
        params: {
          ":chat_id": localStorage.getItem("comify_chat_id"),
        },
      })
        .then(({ data }) => {
          if (data.success) {
            setConvo({ ...data.data, messages: undefined });
            setMessages(data.data.messages.reverse());
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        topics,
        setTopics,
        convo,
        setConvo,
        messages,
        setMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};