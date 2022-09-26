import React, { useState, useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import s from "./styles/products.module.scss";

export default function Images({ product }) {
  const { siteConfig } = useContext(SiteContext);
  const [viewImage, setViewImage] = useState(0);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={s.images}>
      <div className={s.thumbnails}>
        {product.images.map((src, i) => (
          <img
            key={i}
            src={src}
            onClick={() => {
              setViewImage(i);
            }}
          />
        ))}
      </div>
      <div className={s.mainImg}>
        <img src={product.images[viewImage] || product.images[0]} />
      </div>
    </div>
  );
}
