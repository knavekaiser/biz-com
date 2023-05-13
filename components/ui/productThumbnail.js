import { useContext, Fragment } from "react";
import { SiteContext } from "SiteContext";
import { HiStar } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import s from "./styles/productThumbnail.module.scss";
import Image from "next/image";

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
      <Link href={`/item/${product._id}`}>
        <div className={s.thumbnailWrapper}>
          <Image
            src={product.images[0]}
            height={328}
            width={328}
            alt={product.title}
          />
          {/* <Carousel
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
                <img src={url} />
            </Link>
          ))}
        </Carousel> */}
        </div>
        <div className={s.productDetail}>
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
                  <Image
                    src={product.seller.logo || product.seller.profileImg}
                    height={20}
                    width={20}
                    alt={product.seller.name}
                  />
                  <span className={s.productSeller}>{product.seller.name}</span>
                </div>
              );
            }
            return null;
          })}
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
                      text: `I am interested to know more about this ${product.title}\n${window.location.origin}/item/${product._id}`,
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
                  <span className={s.value}>{product.rating || 0}</span>
                  <span className={s.stars}>
                    {product.rating >= 1 ? <ImStarFull /> : <ImStarEmpty />}
                    {product.rating >= 2 ? <ImStarFull /> : <ImStarEmpty />}
                    {product.rating >= 3 ? <ImStarFull /> : <ImStarEmpty />}
                    {product.rating >= 4 ? <ImStarFull /> : <ImStarEmpty />}
                    {product.rating >= 5 ? <ImStarFull /> : <ImStarEmpty />}
                  </span>
                  <FiChevronDown className={s.chev} />
                  <span className={s.reviewCount}>
                    ({product.totalReview || 0})
                    {
                      //product.totalReview > 1 ? "reviews" : "review"
                    }
                  </span>

                  <div className={s.breakdown}>
                    <div className={s.title}>
                      <span className={s.stars}>
                        {product.rating >= 2 ? <ImStarFull /> : <ImStarEmpty />}
                        {product.rating >= 1 ? <ImStarFull /> : <ImStarEmpty />}
                        {product.rating >= 3 ? <ImStarFull /> : <ImStarEmpty />}
                        {product.rating >= 4 ? <ImStarFull /> : <ImStarEmpty />}
                        {product.rating >= 5 ? <ImStarFull /> : <ImStarEmpty />}
                      </span>

                      <span>{product.rating} out of 5</span>
                    </div>

                    <div className={s.subtitle}>
                      {product.totalReview} global ratings
                    </div>

                    <ul className={s.graph}>
                      {[5, 4, 3, 2, 1].map((item, i) => {
                        const rating = product.ratingBreakdown.find(
                          (i) => i.rating === item
                        );
                        return (
                          <li key={item}>
                            <span>{item} star</span>
                            <span className={s.bar}>
                              <span
                                className={s.fill}
                                style={{
                                  width: `${(
                                    ((rating?.total || 0) / 5) *
                                    100
                                  ).fix()}%`,
                                }}
                              />
                            </span>
                            <span className={s.percent}>
                              {(((rating?.total || 0) / 5) * 100).fix()}%
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </Link>
    </div>
  );
};

export const ProductThumbOld = ({ product }) => {
  const { siteConfig } = useContext(SiteContext);
  return (
    <div className={`${s.productThumb}`}>
      <Image
        src={product.images ? product.images[0] : product.img}
        height={328}
        width={328}
        alt={product.title}
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
                  <Image
                    src={product.seller.logo || product.seller.profileImg}
                    height={20}
                    width={20}
                    alt={product.seller.name}
                  />
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
