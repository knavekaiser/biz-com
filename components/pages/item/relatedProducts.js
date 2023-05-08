import React, { useState, useEffect } from "react";
import { Fire } from "components/svg";
import { ProductThumb } from "components/ui/productThumbnail";
import { useRouter } from "next/router";
import { useFetch } from "hooks";
import { endpoints } from "config";
import s from "./styles/products.module.scss";

import { CompareProducts } from "components/pages/compare/products";

export default function Explore() {
  const [products, setProducts] = useState([]);
  const [comparisons, setComparisons] = useState([]);
  const router = useRouter();
  const { get: getProducts } = useFetch(
    endpoints.relatedItems + `/${router.query.id}`
  );
  useEffect(() => {
    getProducts()
      .then(({ data }) => {
        if (data?.success) {
          setProducts(data.data.recommendation || []);
          setComparisons(data.data.comparison || []);
        }
      })
      .catch((err) => console.log(err));
  }, [router.query.id]);
  if (products.length === 0 && comparisons.length === 0) {
    return null;
  }

  return (
    <>
      {products.length > 0 && (
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
      )}
      {comparisons.length > 0 && (
        <div className={s.comparison}>
          <div className={s.head}>
            <h2>Compare Products</h2>
          </div>
          <CompareProducts products={comparisons} />
        </div>
      )}
    </>
  );
}
