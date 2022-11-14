import { useContext, Fragment } from "react";
import { SiteContext } from "SiteContext";
import { ETH } from "components/svg";
import { Countdown } from "components/elements";
import { HiStar } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import s from "./styles/productThumbnail.module.scss";

export const ProductThumb = ({ product }) => {
  const { siteConfig } = useContext(SiteContext);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={`${s.productThumb}`}>
      <div className={s.thumbnailWrapper}>
        <Carousel
          containerClass={`${s.thumbnail} productCardThumbGlobal`}
          responsive={responsive}
          dotListClass={s.dot}
          autoPlaySpeed={1000}
          infinite={true}
          showDots={true}
          draggable={false}
        >
          {product.images.map((url) => (
            <Link href={`/item/${product._id}`} key={url}>
              <a>
                <img src={url} />
              </a>
            </Link>
          ))}
        </Carousel>
      </div>
      <Link href={`/item/${product._id}`}>
        <a>
          <div className={s.productDetail}>
            <div className={s.left}>
              <h4>{product.title}</h4>
              {siteConfig?.siteConfig?.productCard?.map((item) => {
                if (item === "whatsappNumber") {
                  return null;
                }
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
                      <img
                        src={product.seller.logo || product.seller.profileImg}
                      />
                      <span className={s.productSeller}>
                        {product.seller.name}
                      </span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className={s.right}>
              {siteConfig?.siteConfig?.productCard?.map((item) => {
                if (
                  item === "whatsappNumber" &&
                  (siteConfig.whatsappNumber || product.whatsappNumber)
                ) {
                  return (
                    <button
                      style={{
                        width: "min-content",
                      }}
                      className={s.whatsappBtn}
                      key={item}
                      onClick={(e) => {
                        e.preventDefault();
                        const a = document.createElement("a");
                        a.href = `whatsapp://send/?${new URLSearchParams({
                          phone:
                            siteConfig.whatsappNumber || product.whatsappNumber,
                          text: `I am interested to know more about this ${product.title}`,
                        }).toString()}`;
                        a.rel = "noreferrer";
                        a.target = "_blank";

                        document.querySelector("body").append(a);
                        a.click();
                        a.remove();
                      }}
                    >
                      <IoLogoWhatsapp />
                    </button>
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
                      <span className={s.reviewCount}>
                        ({product.totalReview || 0})
                        {
                          //product.totalReview > 1 ? "reviews" : "review"
                        }
                      </span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export const ProductThumbOld = ({ product }) => {
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
