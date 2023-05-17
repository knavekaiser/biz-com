import React, { useEffect, useRef, useState } from "react";
import s from "./styles/products.module.scss";
import Image from "next/image";

export default function Images({ product, variant }) {
  const [viewImage, setViewImage] = useState(0);
  return (
    <div className={s.images}>
      <div className={s.thumbnails}>
        {(variant?.images || product.images).map((src, i) => (
          <Image
            key={i}
            src={src}
            height={48}
            width={48}
            alt={product.title}
            className={viewImage === i ? s.inView : ""}
            onClick={() => {
              setViewImage(i);
            }}
          />
        ))}
      </div>
      <MainImg
        src={
          (variant?.images || product.images)[viewImage] ||
          (variant?.images || product.images)[0]
        }
        alt={product.title}
      />
    </div>
  );
}

const MainImg = ({ src, alt }) => {
  const [browser, setBrowser] = useState(false);
  const mainImgRef = useRef();
  const imgRef = useRef();
  const [bounding, setBounding] = useState(null);
  useEffect(() => {
    setBounding(mainImgRef.current.getBoundingClientRect());
  }, [src]);
  useEffect(() => {
    setBrowser(false);
  }, []);
  return (
    <div
      className={s.mainImg}
      ref={mainImgRef}
      onMouseMove={(e) => {
        if (mainImgRef.current && imgRef.current) {
          const x = Math.round(
            ((e.clientX - (bounding?.x || 0)) / bounding?.width) * 100
          );
          const y = Math.round(
            ((e.clientY - (bounding?.y || 0)) / bounding?.height) * 100
          );
          imgRef.current.style.left = `-${x * 1.5}%`;
          imgRef.current.style.top = `-${y * 1.5}%`;
        }
      }}
    >
      <Image ref={imgRef} src={src} height={600} width={600} alt={alt} />
    </div>
  );
};
