import React, { createContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export const SiteContext = createContext();
export const Provider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    // do something
  }, [user]);
  useEffect(() => {
    const portal = document.createElement("div");
    portal.setAttribute("id", "portal");
    document.body.appendChild(portal);
  }, []);
  return (
    <SiteContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
