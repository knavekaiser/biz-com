import React from "react";
import Sidebar from "./sidebar";
import Form from "./form";
import s from "./styles/checkout.module.scss";

export default function Checkout({ product }) {
  return (
    <div className={`${s.container}`}>
      <Form />
      <Sidebar product={product} />
      <Products product={product} />
    </div>
  );
}

const Products = ({ product }) => {
  return (
    <div className={s.products}>
      {product && (
        <div className={s.product}>
          <img src={product.images[0]} />
          <div className={s.productDetail}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
