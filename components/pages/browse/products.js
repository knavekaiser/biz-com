import React, { useState, useEffect } from "react";
import { Prompt } from "components/modal";
import Sidebar from "./sidebar";
import { ProductThumb } from "components/ui/productThumbnail";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { endpoints, paths } from "config";
import { useFetch } from "hooks";
import { useRouter } from "next/router";
import s from "./styles/products.module.scss";

export default function Products() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    sort: "price-asc",
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [metadata, setMetadata] = useState({
    page: 1,
    pageSize: 10,
  });
  const { get: getProducts, loading } = useFetch(endpoints.browse);
  useEffect(() => {
    router.replace(
      {
        pathname: paths.browse,
        query: {
          ...Object.entries({ ...router.query, ...filters })
            .filter(([key, value], i) => value === 0 || value)
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
  useEffect(() => {
    if (window.innerWidth > 480) {
      setSidebarOpen(true);
    }
  }, []);
  return (
    <div className={`${s.container} ${sidebarOpen ? s.sidebarOpen : ""}`}>
      <button
        className={`btn ${s.sidebarToggle}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        Filters {sidebarOpen ? <HiChevronUp /> : <HiChevronDown />}
      </button>
      <Sidebar open={sidebarOpen} filters={filters} setFilters={setFilters} />
      <div className={`${s.content} ${s.products}`}>
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
