import React, { useState, useEffect } from "react";
import { Combobox } from "components/elements";
import { Prompt } from "components/modal";
import Sidebar from "./sidebar";
import Link from "next/link";
import { ProductThumb } from "components/ui/productThumbnail";
import { useForm } from "react-hook-form";
import { endpoints, paths } from "config";
import { useFetch } from "hooks";
import { useRouter } from "next/router";
import s from "./styles/products.module.scss";

export default function Products() {
  const [filters, setFilters] = useState({ sort: "price-asc" });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [products, setProducts] = useState([]);
  const [metadata, setMetadata] = useState({
    page: 1,
    pageSize: 10,
  });
  const { get: getProducts, loading } = useFetch(endpoints.browse);
  const { control } = useForm({
    defaultValues: { sort: "price-asc", type: "buyNow" },
  });
  const router = useRouter();
  useEffect(() => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...Object.entries({ ...router.query, ...filters })
            .filter(([key, value], i) => value)
            .reduce((p, c) => {
              p[c[0]] = c[1];
              return p;
            }, {}),
        },
      },
      undefined,
      { shallow: true }
    );
  }, [filters]);
  useEffect(() => {
    getProducts({ query: router.query })
      .then(({ data }) => {
        if (!data?.success) {
          if (data?.message) {
            Prompt({ type: "error", message: data.message });
          }
          return;
        }
        setProducts(data.data);
        setMetadata(data.metadata);
      })
      .catch((err) => Prompt({ type: "error", message: err.message }));
  }, [router.query]);
  return (
    <div className={`${s.container}`}>
      <Sidebar open={sidebarOpen} filters={filters} setFilters={setFilters} />
      <div className={`${s.content} ${s.products}`}>
        <div className={s.ribbon}>
          <Combobox
            control={control}
            name="sort"
            options={[
              // { label: "Popularity", value: "popular" },
              { label: "$-$$", value: "price-asc" },
              { label: "$$-$", value: "price-dsc" },
            ]}
            onChange={(opt) => setFilters({ ...filters, sort: opt.value })}
          />
        </div>
        <div className={s.products}>
          {products.length > 0 ? (
            products.map((product, i) => (
              <ProductThumb product={product} key={product._id} />
            ))
          ) : (
            <div className={s.placeholder}>
              {loading ? "Loading..." : "No Product found"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
