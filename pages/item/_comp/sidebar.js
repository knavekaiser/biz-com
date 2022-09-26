import { useEffect, useState, useContext } from "react";
import { SiteContext } from "SiteContext";
import { Checkbox, Input } from "components/elements";
import { HiChevronUp, HiChevronDown, HiStar } from "react-icons/hi";
import s from "./styles/products.module.scss";
import { useForm } from "react-hook-form";

const Sidebar = ({ product }) => {
  const { siteConfig } = useContext(SiteContext);
  return (
    <div className={s.sidebar}>
      <h1>{product.title}</h1>

      <div className={s.rating}>
        <HiStar className={product.rating >= 1 ? s.lit : ""} />
        <HiStar className={product.rating >= 2 ? s.lit : ""} />
        <HiStar className={product.rating >= 3 ? s.lit : ""} />
        <HiStar className={product.rating >= 4 ? s.lit : ""} />
        <HiStar className={product.rating >= 5 ? s.lit : ""} />
      </div>

      <div className={s.seller}>
        <img src={product.seller.logo} />
        <span>{product.seller.name}</span>
      </div>

      <div className={s.price}>
        <h2>
          {siteConfig?.siteConfig?.currency} {product.price}
        </h2>
      </div>

      <div className={s.actions}>
        <button className={`btn primary`}>Buy Now</button>
        <button className={`btn secondary`}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Sidebar;
