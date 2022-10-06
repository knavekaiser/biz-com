import React, { useState, useEffect } from "react";
import { Combobox, Tabs } from "components/elements";
import Sidebar from "./sidebar";
import Form from "./form";
import { ProductThumb } from "components/ui/productThumbnail";
import { useForm } from "react-hook-form";
import s from "./styles/checkout.module.scss";

export default function Checkout({ product }) {
  const [filters, setFilters] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { control } = useForm({
    defaultValues: { sort: "popular", type: "buyNow" },
  });
  return (
    <div className={`${s.container}`}>
      <Form />
      <Sidebar product={product} />
      <Products product={product} />
    </div>
  );
}

const Products = ({ product }) => {
  return (
    <div className={s.products}>
      {product && (
        <div className={s.product}>
          <img src={product.images[0]} />
          <div className={s.productDetail}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
