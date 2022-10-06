import { useEffect, useState, useContext } from "react";
import { SiteContext } from "SiteContext";
import { Checkbox, Input } from "components/elements";
import { HiChevronUp, HiChevronDown, HiStar } from "react-icons/hi";
import s from "./styles/checkout.module.scss";
import { useForm } from "react-hook-form";

const Detail = ({ label, value }) => {
  return (
    <div className={s.detail}>
      <span className={s.label}>{label}</span>
      <span className={s.value}>{value}</span>
    </div>
  );
};

const Sidebar = ({ product }) => {
  const { siteConfig } = useContext(SiteContext);
  return (
    <div className={s.summary}>
      <h3>Summary</h3>

      <Detail
        label="Total item costs"
        value={siteConfig.siteConfig?.currency + " " + product.price}
      />
      <Detail
        label="Total Shipping"
        value={siteConfig.siteConfig?.currency + " " + "12"}
      />

      <div className={s.actions}>
        <button className={`btn primary`}>Pay Now</button>
      </div>
    </div>
  );
};

export default Sidebar;
