import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useRouter } from "next/router";
import { useFetch } from "hooks";
import { endpoints } from "config";

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

  const logout = useCallback(() => {
    fetch(endpoints.logout, {
      method: "POST",
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("access_token");
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          localStorage.removeItem("access_token");
          setUser(null);
          router.push(
            siteConfig?.siteConfig?.landingPage?.viewLandingPage
              ? "/"
              : paths.browse
          );
        }
      })
      .catch((err) => console.log(err));
  }, [user, siteConfig]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      fetch(endpoints.profile, {
        headers: {
          "x-access-token": token,
        },
      })
        .then((res) => {
          if (res.status === 401) {
            localStorage.removeItem("access_token");
          }
          return res.json();
        })
        .then((data) => {
          if (data.success) {
            setUser(data.data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <SiteContext.Provider
      value={{
        user,
        setUser,
        siteConfig,
        setSiteConfig,
        logout,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
