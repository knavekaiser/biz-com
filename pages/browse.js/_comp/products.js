import React, { useState, useEffect } from "react";
import { Combobox } from "components/elements";
import { Prompt } from "components/modal";
import Sidebar from "./sidebar";
import Link from "next/link";
import { ProductThumb } from "components/ui/productThumbnail";
import { useForm } from "react-hook-form";
import { endpoints, paths } from "config";
import { useFetch } from "hooks";
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
  useEffect(() => {
    getProducts({ query: filters })
      .then(({ data }) => {
        if (data.success) {
          setProducts(data.data);
          setMetadata(data.metadata);
        } else {
          Prompt({ type: "error", message: data.message });
        }
      })
      .catch((err) => Prompt({ type: "error", message: err.message }));
  }, [filters]);
  return (
    <div className={`${s.container}`}>
      <Sidebar open={sidebarOpen} filters={filters} setFilters={setFilters} />
      <div className={`${s.content} ${s.products}`}>
        <div className={s.ribbon}>
          {
            //  <Combobox
            //   control={control}
            //   name="type"
            //   options={[
            //     { label: "Buy Now", value: "buyNow" },
            //     { label: "Ongoing Auction", value: "ongoingAuction" },
            //     { label: "Has Offers", value: "hasOffers" },
            //   ]}
            // />
          }
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
          {products.map((product, i) => (
            <Link href={paths.itemView.replace(":id", product._id)} key={i}>
              <a>
                <ProductThumb product={product} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
