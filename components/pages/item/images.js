import React, { useEffect, useState } from "react";
import s from "./styles/products.module.scss";
import Image from "next/image";

export default function Images({ product, variant }) {
  const [viewImage, setViewImage] = useState(0);
  useEffect(() => {}, [variant]);
  return (
    <div className={s.images}>
      <div className={s.thumbnails}>
        {(variant?.images || product.images).map((src, i) => (
          <Image
            key={i}
            src={src}
            height={48}
            width={48}
            alt={product.name}
            className={viewImage === i ? s.inView : ""}
            onClick={() => {
              setViewImage(i);
            }}
          />
        ))}
      </div>
      <div className={s.mainImg}>
        <Image
          src={
            (variant?.images || product.images)[viewImage] ||
            (variant?.images || product.images)[0]
          }
          height={420}
          width={420}
          alt={product.name}
        />
      </div>
    </div>
  );
}
