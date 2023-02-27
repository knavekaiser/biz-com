import React, { useState } from "react";
import Sidebar from "./sidebar";
import Images from "./images";
import Reviews from "./reviews";
import RelatedProducts from "./relatedProducts";
import s from "./styles/products.module.scss";
import { Tabs } from "components/elements";

export default function Products({ product }) {
  return (
    <div className={`${s.container}`}>
      <Images product={product} />
      <Sidebar product={product} />
      {/* <Description product={product} /> */}
      <Reviews product={product} />
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
