import React, { useState, useEffect } from "react";
import { Fire } from "components/svg";
import { Combobox } from "components/elements";
import { ProductThumb } from "components/ui/productThumbnail";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFetch } from "hooks";
import { endpoints, paths } from "config";
import s from "./styles/products.module.scss";

export default function Explore() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { get: getProducts } = useFetch(
    endpoints.relatedItems + `/${router.query.id}`
  );
  useEffect(() => {
    getProducts()
      .then(({ data }) => {
        if (data?.success) {
          setProducts(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, [router.query.id]);
  if (products.length === 0) {
    return null;
  }
  return (
    <div className={s.relatedProducts}>
      <div className={s.head}>
        <Fire />
        <h2>Related Products</h2>
      </div>
      <div className={s.products}>
        {products.map((product, i) => (
          <ProductThumb product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}
