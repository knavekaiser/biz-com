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
        <div className={s.details}>
          {siteConfig?.siteConfig?.productCard?.map((item) => {
            if (["string", "number"].includes(typeof product[item])) {
              if (item === "price") {
                return (
                  <span className={s.price} key={item}>
                    <span className={s.currentPrice}>
                      {siteConfig?.siteConfig?.currency}{" "}
                      {product.price.toLocaleString()}
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
              return (
                <span className={s.description} key={item}>
                  {product[item]}
                </span>
              );
            }
            if (item === "seller" && product.seller) {
              return (
                <div className={s.productSeller} key={item}>
                  <img src={product.seller.logo || product.seller.profileImg} />
                  <span className={s.productSeller}>{product.seller.name}</span>
                </div>
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
        </div>

        {
          // <span className={s.devider} />
        }
      </div>
    </div>
  );
};
