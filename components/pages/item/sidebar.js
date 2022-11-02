import { useEffect, useState, useContext, Fragment } from "react";
import { SiteContext } from "SiteContext";
import { Checkbox, Input } from "components/elements";
import { HiChevronUp, HiChevronDown, HiStar } from "react-icons/hi";
import s from "./styles/products.module.scss";
import { useRouter } from "next/router";
import { paths } from "config";
import { useForm } from "react-hook-form";
import { IoLogoWhatsapp } from "react-icons/io";

const Sidebar = ({ product }) => {
  const router = useRouter();
  const {
    siteConfig: config,
    siteConfig: { siteConfig },
  } = useContext(SiteContext);
  return (
    <div className={s.sidebar}>
      <h1>{product.title}</h1>

      <div className={s.details}>
        {siteConfig?.productViewPage?.productElements?.map((item) => {
          if (["string", "number"].includes(typeof product[item])) {
            if (item === "price") {
              return (
                <span className={s.price} key={item}>
                  <span className={s.currentPrice}>
                    {siteConfig?.currency} {product.price.toLocaleString()}
                  </span>

                  {product.originalPrice > product.price && (
                    <span className={s.originalPrice}>
                      {siteConfig?.siteConfig?.currency}{" "}
                      {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </span>
              );
            }
            return <span key={item}>{product[item]}</span>;
          }
          if (item === "seller") {
            return (
              <div className={s.seller} key={item}>
                <img src={product.seller.logo} />
                <span>{product.seller.name}</span>
              </div>
            );
          }
          if (item === "review") {
            return (
              <div className={s.rating} key={item}>
                <HiStar className={product.rating >= 1 ? s.lit : ""} />
                <HiStar className={product.rating >= 2 ? s.lit : ""} />
                <HiStar className={product.rating >= 3 ? s.lit : ""} />
                <HiStar className={product.rating >= 4 ? s.lit : ""} />
                <HiStar className={product.rating >= 5 ? s.lit : ""} />
                {" · "}
                <span className={s.reviewCount}>
                  {product.totalReview || 0}{" "}
                  {product.totalReview > 1 ? "reviews" : "review"}
                </span>
              </div>
            );
          }
          return null;
        })}
      </div>

      {siteConfig?.productViewPage?.viewWhatsApp &&
        (config.whatsappNumber || product.whatsappNumber) && (
          <a
            style={{
              width: "min-content",
            }}
            href={
              `whatsapp://send/?${new URLSearchParams({
                phone: config.whatsappNumber || product.whatsappNumber,
                text: `I am interested to know more about this ${product.title}`,
              }).toString()}`
              // `https://api.whatsapp.com/send/?${new URLSearchParams({
              //   phone: config.whatsappNumber || product.whatsappNumber,
              //   text: `I am interested to know more about this ${product.title}`,
              //   type: "phone_number",
              //   // app_absent: 0,
              // }).toString()}`
            }
            rel="noreferrer"
            target="_blank"
          >
            <button className="btn whatsapp">
              <IoLogoWhatsapp />
              Chat On WhatsApp
            </button>
          </a>
        )}

      {
        //   <div className={s.actions}>
        //   <button
        //     className={`btn primary`}
        //     onClick={() =>
        //       router.push({
        //         pathname: paths.checkout,
        //         query: { product_id: product._id },
        //       })
        //     }
        //   >
        //     Buy Now
        //   </button>
        //   <button className={`btn secondary`}>Add to Cart</button>
        // </div>
      }
    </div>
  );
};

export default Sidebar;
