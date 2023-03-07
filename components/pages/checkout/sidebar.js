import { endpoints } from "config";
import { useFetch } from "hooks";
import { useEffect, useState, useContext } from "react";
import { SiteContext } from "SiteContext";
import s from "./styles/checkout.module.scss";

const Detail = ({ label, value }) => {
  return (
    <div className={s.detail}>
      <span className={s.label}>{label}</span>
      <span className={s.value}>{value}</span>
    </div>
  );
};

const Sidebar = () => {
  const { siteConfig, cart } = useContext(SiteContext);
  const { post: placeOrder, loading } = useFetch(endpoints.placeOrder);
  return (
    <div className={s.summary}>
      <h3>Summary</h3>

      <Detail
        label="Total item costs"
        value={
          siteConfig.siteConfig?.currency +
          " " +
          cart
            .reduce(
              (p, c) => p + (c.product.price + (c.variant?.price || 0)) * c.qty,
              0
            )
            .toLocaleString()
        }
      />
      <Detail
        label="Total Shipping"
        value={siteConfig.siteConfig?.currency + " " + "0"}
      />

      <div className={s.actions}>
        <button className={`btn secondary fullWidth`}>Pay Now</button>
      </div>
    </div>
  );
};

export default Sidebar;
