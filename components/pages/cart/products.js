import { Combobox } from "components/elements";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SiteContext } from "SiteContext";
import Sidebar from "./sidebar";
import Image from "next/image";
import s from "./styles/cart.module.scss";

export default function Checkout({ product }) {
  return (
    <div className={`${s.container}`}>
      <div className={s.wrapper}>
        <Products product={product} />
        <Sidebar product={product} />
        <div className={s.notes}>
          <p>
            {
              "The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping Cart"
            }
          </p>
          <p>
            {
              "Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay."
            }
          </p>
        </div>
      </div>
    </div>
  );
}

const Products = () => {
  const { siteConfig, cart } = useContext(SiteContext);
  return (
    <div className={s.products}>
      <h2>{cart.length ? "Shopping Cart" : "Your Cart is empty"}</h2>

      <div className={s.items}>
        <span className={s.priceLabel}>Price</span>
        {cart.map((item, i) => (
          <Product key={i} product={item} />
        ))}
      </div>

      <p className={s.subtotal}>
        Subtotal ({cart.reduce((p, c) => p + c.qty, 0)} item):{" "}
        <strong>
          {siteConfig.siteConfig?.currency +
            " " +
            cart
              .reduce(
                (p, c) =>
                  p + (c.product.price + (c.variant?.price || 0)) * c.qty,
                0
              )
              .toLocaleString()}
        </strong>
      </p>
    </div>
  );
};

const Detail = ({ label, value }) => {
  return (
    <p className={s.detail}>
      <strong>{label}</strong>: <span>{value}</span>
    </p>
  );
};

const Product = ({ product }) => {
  const { siteConfig, addToCart, removeFromCart } = useContext(SiteContext);
  const { control, reset } = useForm();
  useEffect(() => {
    reset({ qty: product.qty });
  }, []);
  return (
    <div className={s.product}>
      <Image
        src={product.variant?.images[0] || product.product.images[0]}
        height={120}
        width={120}
        alt={product.title}
        className={s.thumbnail}
      />
      <div className={s.productDetail}>
        <h3>{product.product.title}</h3>
        {siteConfig?.siteConfig?.orderFields
          ?.find((item) => item.name === "products")
          ?.fields.filter(
            (item) => !["product", "variant", "qty"].includes(item.name)
          )
          .map((item) => (
            <Detail
              key={item.name}
              label={item.label}
              value={product[item.name]}
            />
          ))}
        <div className={s.actions}>
          {"qty" in product && (
            <Combobox
              className={s.qty}
              control={control}
              name="qty"
              options={(
                siteConfig.siteConfig.orderFields
                  ?.find((item) => item.name === "products")
                  ?.fields?.find((item) => item.name === "qty").options || []
              ).sort((a, b) => (a.value > b.value ? 1 : -1))}
              onChange={(opt) => addToCart(product, opt.value)}
            />
          )}
          <div className={s.devider} />
          <button
            className={`btn clear ${s.dltBtn}`}
            onClick={() => removeFromCart(product)}
          >
            Delete
          </button>
        </div>
      </div>
      <p className={s.price}>
        {siteConfig.siteConfig?.currency}{" "}
        {(
          (product.product.price + (product.variant?.price || 0)) *
          (product.qty || 1)
        ).toLocaleString()}
      </p>
    </div>
  );
};
