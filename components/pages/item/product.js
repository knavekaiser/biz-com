import React, { useState } from "react";
import Sidebar from "./sidebar";
import Images from "./images";
import Reviews from "./reviews";
import RelatedProducts from "./relatedProducts";
import s from "./styles/products.module.scss";
import { RichText } from "components/elements";

export default function Products({ product }) {
  const [variant, setVariant] = useState(product.variants?.[0] || null);
  return (
    <div className={`${s.container}`}>
      <Images product={product} variant={variant} />
      <Sidebar product={product} variant={variant} setVariant={setVariant} />
      <Description product={product} />
      <Reviews product={product} />
      <RelatedProducts />
    </div>
  );
}

const Description = ({ product }) => {
  return (
    <div className={s.description}>
      <hr />
      <RichText data={product.description} />
    </div>
  );
};
