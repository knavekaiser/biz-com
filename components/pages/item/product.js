import React, { useState } from "react";
import Sidebar from "./sidebar";
import Images from "./images";
import Reviews from "./reviews";
import RelatedProducts from "./relatedProducts";
import s from "./styles/products.module.scss";
import { Paths, RichText } from "components/elements";
import { paths } from "config";

export default function Products({ product, showHomePath }) {
  const [variant, setVariant] = useState(product.variants?.[0] || null);
  return (
    <div className={`${s.container}`}>
      <Paths
        paths={[
          ...(showHomePath ? [{ label: "Home", path: "/" }] : []),
          { label: "Browse", path: paths.browse },
          { label: product.title },
        ]}
        className={s.paths}
      />
      <div className={s.wrapper}>
        <Images product={product} variant={variant} />
        <Sidebar product={product} variant={variant} setVariant={setVariant} />
        <Description product={product} />
        <Reviews product={product} />
        <RelatedProducts />
      </div>
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
