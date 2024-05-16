import React, { useContext, useEffect, useState } from "react";
import { SiteContext } from "SiteContext";
import s from "./style.module.scss";
import { useFetch } from "hooks";
import { endpoints } from "config";
import { Prompt } from "components/modal";
import { ProductThumb } from "components/ui/productThumbnail";

export default function Checkout({ product }) {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Products product={product} />
      </div>
    </div>
  );
}

const Products = () => {
  const { compare } = useContext(SiteContext);
  const [products, setProducts] = useState([]);

  const { get: getProducts, loading } = useFetch(endpoints.browse);
  useEffect(() => {
    if (compare.length) {
      getProducts({ query: { _ids: compare } })
        .then(({ data }) => {
          if (!data.success) {
            return Prompt({ type: "error", message: data.message });
          }
          setProducts(data.data);
        })
        .catch((err) => Prompt({ type: "error", message: err.message }));
    }
  }, []);
  return (
    <div className={s.products}>
      <h2>Product Comparison</h2>
      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products to compare</p>
      ) : (
        <CompareProducts products={products} />
      )}
    </div>
  );
};

export const CompareProducts = ({ products }) => {
  const { siteConfig } = useContext(SiteContext);
  const [fields, setFields] = useState([]);
  useEffect(() => {
    if (products.length) {
      setFields(
        siteConfig?.siteConfig?.productFields
          .filter(
            (item) =>
              !item.subcategory || item.subcategory === products[0].subcategory
          )
          .filter(
            (item) =>
              ![
                "title",
                "description",
                "images",
                "price",
                "whatsappNumber",
                "latlng",
                "specification",
                "variants",
                "category",
                "subcategory",
              ].includes(item.name)
          )
      );
    }
  }, [products]);
  return (
    <div className={s.itemWrapper}>
      <div className={s.product}>
        <div />
        {fields.map((item) => (
          <p key={item.name} className={s.detailLabel}>
            {item.label}
          </p>
        ))}
      </div>
      <div className={s.products}>
        {products.map((item, i) => (
          <Product key={i} product={item} fields={fields} />
        ))}
      </div>
    </div>
  );
};

const Product = ({ product, fields }) => {
  return (
    <div className={s.product}>
      <ProductThumb product={product} />
      {fields.map((item) => {
        const value = product[item.name];
        if (item.dataType === "array") {
          return (
            <p key={item.name} className={s.detail}>
              {value?.join(", ") || "N/A"}
            </p>
          );
        }
        return (
          <p key={item.name} className={s.detail}>
            {value || "N/A"}
          </p>
        );
      })}
    </div>
  );
};
