import React, { useState, useEffect, useRef, useCallback } from "react";
import { Prompt } from "components/modal";
import Sidebar from "./sidebar";
import { ProductThumb } from "components/ui/productThumbnail";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { endpoints, paths } from "config";
import { useFetch } from "hooks";
import { useRouter } from "next/router";
import s from "./styles/products.module.scss";
import { Paths } from "components/elements";

export default function Products({ showPath }) {
  const anchorRef = useRef();
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
  const [fields, setFields] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const { get: getCategories } = useFetch(endpoints.categories);
  const { get: fetchProducts, loading } = useFetch(endpoints.browse);

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

  const getProducts = useCallback(
    ({ page, pageSize } = {}) => {
      if (loading) return;
      fetchProducts({
        query: {
          ...router.query,
          page: page || metadata?.page || 1,
          pageSize: pageSize || metadata?.pageSize || 10,
        },
      })
        .then(({ data }) => {
          if (!data?.success) {
            if (data?.message) {
              Prompt({ type: "error", message: data.message });
            }
            return;
          }
          setProducts((prev) =>
            data.metadata?.page === 1 ? data.data : [...prev, ...data.data]
          );
          setMetadata(data.metadata);
        })
        .catch((err) => Prompt({ type: "error", message: err.message }));
    },
    [router.query, metadata, loading]
  );

  useEffect(() => {
    getProducts({ page: 1, pageSize: 10 });
  }, [router.query]);
  useEffect(() => {
    getCategories()
      .then(({ data }) => {
        if (data?.success) {
          setCategories(data.data);
        } else {
          Prompt({ type: "error", message: data.message });
        }
      })
      .catch((err) => Prompt({ type: "error", message: err.message }));
    if (window.innerWidth > 480) {
      setSidebarOpen(true);
    }
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handler = () => {
      let direction = lastScrollY < window.scrollY ? "down" : "up";
      lastScrollY = window.scrollY;
      const anchorVisible =
        anchorRef.current?.getBoundingClientRect().top < window.innerHeight;
      if (direction === "down" && !loading && anchorVisible) {
        getProducts({
          page: (metadata?.page || 0) + 1,
          pageSize: metadata?.pageSize || 10,
        });
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [loading, metadata]);
  return (
    <div className={`${s.container} ${sidebarOpen ? s.sidebarOpen : ""}`}>
      {showPath && (
        <Paths
          paths={[{ label: "Home", path: "/" }, { label: "Browse" }]}
          className={s.paths}
        />
      )}

      <button
        className={`btn ${s.sidebarToggle}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        Filters {sidebarOpen ? <HiChevronUp /> : <HiChevronDown />}
      </button>
      <Sidebar
        categories={categories}
        fields={fields}
        setFields={setFields}
        subcategory={subcategory}
        setSubCategory={setSubcategory}
        open={sidebarOpen}
        filters={filters}
        setFilters={setFilters}
      />
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
        {loading && <div className={s.loading}>Loading...</div>}
        {metadata?.totalRecord > products.length && !loading && (
          <div
            className="anchor"
            ref={anchorRef}
            style={{
              height: "1rem",
              width: "1rem",
            }}
          />
        )}
      </div>
    </div>
  );
}
