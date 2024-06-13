import React, { useCallback, useEffect } from "react";
import Sidebar from "./sidebar";
import Form from "./form";
import s from "./styles/checkout.module.scss";
import Image from "next/image";

export default function Checkout({ product }) {
  return (
    <div className={`${s.container}`}>
      <Form />
      <Sidebar product={product} />
      {/* <Products product={product} /> */}
    </div>
  );
}

const Products = ({ product }) => {
  return (
    <div className={s.products}>
      {product && (
        <div className={s.product}>
          <Image
            src={product.images[0]}
            height={120}
            width={120}
            alt={product.title}
          />
          <div className={s.productDetail}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
