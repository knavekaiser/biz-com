import React, { useState } from "react";
import s from "./styles/products.module.scss";

export default function Images({ product }) {
  const [viewImage, setViewImage] = useState(0);
  return (
    <div className={s.images}>
      <div className={s.thumbnails}>
        {product.images.map((src, i) => (
          <img
            key={i}
            src={src}
            className={viewImage === i ? s.inView : ""}
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
