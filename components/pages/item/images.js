import React, { useEffect, useState } from "react";
import s from "./styles/products.module.scss";

export default function Images({ product, variant }) {
  const [viewImage, setViewImage] = useState(0);
  useEffect(() => {}, [variant]);
  return (
    <div className={s.images}>
      <div className={s.thumbnails}>
        {(variant?.images || product.images).map((src, i) => (
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
        <img
          src={
            (variant?.images || product.images)[viewImage] ||
            (variant?.images || product.images)[0]
          }
        />
      </div>
    </div>
  );
}
