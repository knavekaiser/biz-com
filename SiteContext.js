import React, { createContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export const SiteContext = createContext();
export const Provider = ({ children }) => {
  const router = useRouter();
  const [siteConfig, setSiteConfig] = useState({
    siteTitle: "Biz App",
  });
  const [user, setUser] = useState(null);
  useEffect(() => {
    // do something
  }, [user]);
  useEffect(() => {
    const portal = document.createElement("div");
    portal.id = "portal";
    document.querySelector("body").appendChild(portal);
    const prompt = document.createElement("div");
    prompt.id = "prompt";
    document.querySelector("body").appendChild(prompt);
  }, []);
  return (
    <SiteContext.Provider
      value={{
        user,
        setUser,
        siteConfig,
        setSiteConfig,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
