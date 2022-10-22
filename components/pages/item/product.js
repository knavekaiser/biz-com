import React, { useState, useEffect } from "react";
import { Combobox, Tabs } from "components/elements";
import Sidebar from "./sidebar";
import Images from "./images";
import { ProductThumb } from "components/ui/productThumbnail";
import RelatedProducts from "./relatedProducts";
import { useForm } from "react-hook-form";
import s from "./styles/products.module.scss";

export default function Products({ product }) {
  const [filters, setFilters] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { control } = useForm({
    defaultValues: { sort: "popular", type: "buyNow" },
  });
  return (
    <div className={`${s.container}`}>
      <Images product={product} />
      <Sidebar product={product} />
      <Description product={product} />
      <RelatedProducts />
    </div>
  );
}

const Description = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div className={s.description}>
      <Tabs
        secondary
        activeTab={activeTab}
        onChange={(tab) => setActiveTab(tab.value)}
        tabs={[
          {
            label: "Description",
            value: "description",
          },
          ...((product?.specification && {
            label: "Specifications",
            value: "specification",
          }) ||
            []),
        ]}
      />
      <div className={s.descriptionContent}>
        {activeTab === "description" && <>{product.description}</>}
      </div>
    </div>
  );
};
