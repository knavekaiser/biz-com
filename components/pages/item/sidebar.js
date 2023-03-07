import { useContext, useEffect } from "react";
import { SiteContext } from "SiteContext";
import {
  CalendarInput,
  Combobox,
  CustomRadio,
  RichText,
} from "components/elements";
import s from "./styles/products.module.scss";
import { useForm } from "react-hook-form";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/router";

const Sidebar = ({ product, variant, setVariant }) => {
  const router = useRouter();
  const {
    siteConfig: { siteConfig, ...config },
    addToCart,
  } = useContext(SiteContext);
  const { handleSubmit, reset, control, getValues } = useForm();

  useEffect(() => {
    const data = { qty: 1 };
    if (product.variants?.length) {
      const variant = product.variants[0];
      // data[.field] = product.variants[0].value;
      siteConfig?.productFields
        .filter(
          (item) =>
            item.dataType === "array" &&
            ["select", "combobox"].includes(item.fieldType)
        )
        .forEach((item) => {
          data[item.name] = variant[item.name];
        });
    }
    reset(data);
  }, [siteConfig?.productFields]);
  return (
    <form
      onSubmit={handleSubmit((values) => {
        addToCart({
          product,
          ...values,
          variant,
        });
      })}
      className={s.sidebar}
    >
      <div className={s.left}>
        <h1>{product.title}</h1>

        <div className={s.details}>
          {siteConfig?.productViewPage?.productElements.includes("review") && (
            <div className={s.rating}>
              <span className={s.stars}>
                {product.rating >= 1 ? <ImStarFull /> : <ImStarEmpty />}
                {product.rating >= 2 ? <ImStarFull /> : <ImStarEmpty />}
                {product.rating >= 3 ? <ImStarFull /> : <ImStarEmpty />}
                {product.rating >= 4 ? <ImStarFull /> : <ImStarEmpty />}
                {product.rating >= 5 ? <ImStarFull /> : <ImStarEmpty />}
              </span>
              <FiChevronDown className={s.chev} />
              <span className={s.reviewCount}>
                {product.totalReview || 0} ratings
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
          )}
          {siteConfig?.productViewPage?.viewWhatsApp &&
            (config.whatsappNumber || product.whatsappNumber) && (
              <a
                style={{
                  width: "min-content",
                }}
                href={
                  `whatsapp://send/?${new URLSearchParams({
                    phone: config.whatsappNumber || product.whatsappNumber,
                    text: `I am interested to know more about this ${
                      product.title
                    }\n${window.location.href.replace(/\?.+/, "")}`,
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
          <hr />
          {siteConfig?.productViewPage?.productElements?.map((item) => {
            if (item === "dateRange") {
              return (
                <CalendarInput
                  label="Date"
                  key={item}
                  control={control}
                  dateWindow="futureIncludingToday"
                  name="dates"
                />
              );
            }
            if (Array.isArray(product[item])) {
              const field = siteConfig.productFields.find(
                (i) => i.name === item
              );
              return (
                <div key={item} className={s.variant}>
                  <strong>{field.label}:</strong>{" "}
                  <CustomRadio
                    control={control}
                    name={item}
                    formOptions={{
                      required: true,
                    }}
                    options={product[item].map((item) => ({
                      label: item,
                      value: item,
                    }))}
                    className={s.customRadio}
                    onChange={(_) => {
                      if (product.variants?.length) {
                        const variableFields = siteConfig.productFields
                          .filter(
                            (item) =>
                              Array.isArray(product[item.name]) &&
                              ["combobox", "select"].includes(item.fieldType)
                          )
                          .reduce((p, c) => {
                            p[c.name] = getValues(c.name);
                            return p;
                          }, {});
                        setVariant(
                          product.variants.find((item) => {
                            const itemValues = Object.values(item);
                            return Object.values(variableFields).every((item) =>
                              itemValues.includes(item)
                            );
                          })
                        );
                      }
                    }}
                    selectedClassName={s.selected}
                  />
                </div>
              );
            }
            if (["string", "number", ""].includes(typeof product[item])) {
              if (item === "price") {
                return (
                  <span className={s.price} key={item}>
                    <span className={s.currentPrice}>
                      {siteConfig?.currency}{" "}
                      {(product.price + (variant?.price || 0)).toLocaleString()}
                    </span>

                    {product.originalPrice >
                      product.price + (variant?.price || 0) && (
                      <span className={s.originalPrice}>
                        {siteConfig?.siteConfig?.currency}{" "}
                        {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </span>
                );
              }
              const field = siteConfig.productFields.find(
                (i) => i.name === item
              );
              return (
                <span key={item}>
                  <strong>{field.label}:</strong> {product[item]}
                </span>
              );
            }
            if (item === "seller") {
              return (
                <div className={s.seller} key={item}>
                  <img src={product.seller.logo} />
                  <span>{product.seller.name}</span>
                </div>
              );
            }
            return null;
          })}
        </div>

        {product.specification && "blocks" in product.specification && (
          <>
            <hr />
            <div className={s.specification}>
              <h4>About this item</h4>
              <RichText data={product.specification} />
            </div>
          </>
        )}
      </div>
      <div className={s.right}>
        <div>
          Ship to{" "}
          {Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/.*\//, "")}
        </div>

        <div>
          <h4 className={s.inventory}>In Stock</h4>
          <Combobox
            control={control}
            name="qty"
            label="Qty"
            options={[
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 },
              { label: 4, value: 4 },
              { label: 5, value: 5 },
              { label: 6, value: 6 },
              { label: 7, value: 7 },
              { label: 8, value: 8 },
              { label: 9, value: 9 },
              { label: 10, value: 10 },
              { label: 11, value: 11 },
              { label: 12, value: 12 },
              { label: 13, value: 13 },
              { label: 14, value: 14 },
              { label: 15, value: 15 },
              { label: 16, value: 16 },
              { label: 17, value: 17 },
              { label: 18, value: 18 },
              { label: 19, value: 19 },
              { label: 20, value: 20 },
              { label: 21, value: 21 },
              { label: 22, value: 22 },
              { label: 23, value: 23 },
              { label: 24, value: 24 },
              { label: 25, value: 25 },
              { label: 26, value: 26 },
              { label: 27, value: 27 },
              { label: 28, value: 28 },
              { label: 29, value: 29 },
              { label: 30, value: 30 },
            ]}
          />
        </div>

        <div className={s.actions}>
          <button className={`btn secondary ${s.addToCart}`}>
            Add to Cart
          </button>
          <button
            className={`btn primary ${s.buyNow}`}
            type="button"
            onClick={() =>
              router.push({
                pathname: paths.checkout,
                query: { product_id: product._id },
              })
            }
          >
            Buy Now
          </button>
        </div>

        {product.specification && "blocks" in product.specification && (
          <>
            <hr />
            <div className={s.specification}>
              <h4>About this item</h4>
              <RichText data={product.specification} />
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default Sidebar;
