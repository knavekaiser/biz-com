import React, { createContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { endpoints } from "config";
import { useFetch } from "hooks";

export const SiteContext = createContext();
export const Provider = ({ children }) => {
  const router = useRouter();

  const [siteConfig, setSiteConfig] = useState({
    siteTitle: "Biz App",
  });

  const [user, setUser] = useState(null);
  useEffect(() => {
    // do something
    if (user) {
      // load cart from backend
    } else {
      try {
        const _cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(_cart);
      } catch (err) {
        localStorage.setItem("cart", "[]");
      }
    }
  }, [user]);

  const [cart, setCart] = useState([]);
  const {
    get: getCart,
    post: updateCart,
    loading: loadingCart,
  } = useFetch(endpoints.cart);
  const addToCart = useCallback(
    async (product, qty) => {
      let newCart = [];
      try {
        newCart = JSON.parse(localStorage.getItem("cart") || "[]");
      } catch (err) {
        localStorage.setItem("cart", "[]");
      }

      const existingProductIndex = newCart.findIndex(
        (item) =>
          item.product._id === product.product._id &&
          (!product.variant
            ? !item.variant
            : item.variant?._id === product.variant._id)
      );

      if (existingProductIndex !== -1) {
        if (qty) {
          newCart[existingProductIndex].qty = qty;
        } else {
          newCart[existingProductIndex].qty += product.qty;
        }
      } else {
        newCart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
      if (user) {
        await updateCart({ products: newCart });
      }
    },
    [user]
  );
  const removeFromCart = useCallback(
    async (product) => {
      let newCart = [];
      try {
        newCart = JSON.parse(localStorage.getItem("cart") || "[]");
      } catch (err) {
        localStorage.setItem("cart", "[]");
      }

      const existingProductIndex = newCart.findIndex(
        (item) =>
          item.product._id === product.product._id &&
          (!product.variant
            ? !item.variant
            : item.variant?._id === product.variant._id)
      );
      if (existingProductIndex >= 0) {
        newCart.splice(existingProductIndex, 1);
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
      if (user) {
        await updateCart({ products: newCart });
      }
    },
    [user]
  );
  const emptyCart = useCallback(async () => {
    let newCart = [];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    if (user) {
      await updateCart({ products: newCart });
    }
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
        cart,
        addToCart,
        removeFromCart,
        emptyCart,
        loadingCart,
        logout,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
