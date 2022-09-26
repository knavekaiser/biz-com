import { useContext, Fragment } from "react";
import { SiteContext } from "SiteContext";
import { ETH } from "components/svg";
import { Countdown } from "components/elements";
import { HiStar } from "react-icons/hi";
import s from "./styles/productThumbnail.module.scss";

export const ProductThumb = ({ product }) => {
  const { siteConfig } = useContext(SiteContext);
  return (
    <div className={`${s.productThumb}`}>
      <img
        src={product.images ? product.images[0] : product.img}
        className={s.thumbnail}
      />
      <div className={s.productDetail}>
        <h4>{product.title}</h4>
        {siteConfig?.siteConfig?.productCard &&
          siteConfig.siteConfig.productCard.map((item) => {
            if (item === "seller" && product.seller) {
              return (
                <div className={s.productSeller} key={item}>
                  <img src={product.seller.logo || product.seller.profileImg} />
                  <span className={s.productSeller}>{product.seller.name}</span>
                </div>
              );
            }
            if (item === "price") {
              return (
                <span className={s.price} key={item}>
                  {siteConfig?.siteConfig?.currency}{" "}
                  {product.price.toLocaleString()}
                </span>
              );
            }
            if (item === "description") {
              return (
                <span className={s.description} key={item}>
                  {product.description}
                </span>
              );
            }
            if (item === "rating") {
              return (
                <div className={s.rating} key={item}>
                  <HiStar className={product.rating >= 1 ? s.lit : ""} />
                  <HiStar className={product.rating >= 2 ? s.lit : ""} />
                  <HiStar className={product.rating >= 3 ? s.lit : ""} />
                  <HiStar className={product.rating >= 4 ? s.lit : ""} />
                  <HiStar className={product.rating >= 5 ? s.lit : ""} />
                </div>
              );
            }
            return <Fragment key={item} />;
          })}

        {
          // <span className={s.devider} />
        }
      </div>
    </div>
  );
};
