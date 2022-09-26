import { useEffect, useState, useContext } from "react";
import { SiteContext } from "SiteContext";
import { ETH } from "components/svg";
import { Checkbox, Input } from "components/elements";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import s from "./styles/products.module.scss";
import { useForm } from "react-hook-form";

const Sidebar = ({ open, filters, setFilters }) => {
  const { siteConfig } = useContext(SiteContext);
  const { control, reset, watch } = useForm();
  const [categories, setCategories] = useState([
    { label: "Art", value: "art" },
    { label: "Collectables", value: "collectables" },
    { label: "Music", value: "music" },
    { label: "Video", value: "video" },
  ]);
  if (!open) {
    return null;
  }
  return (
    <div className={s.sidebar}>
      {(siteConfig?.siteConfig?.browsePage?.sidebarFilters || []).includes(
        "category"
      ) && (
        <Section label={"Category"}>
          {categories.map((cat, i) => (
            <Checkbox
              key={i}
              control={control}
              name="category"
              label={cat.label}
            />
          ))}
        </Section>
      )}
      {(siteConfig?.siteConfig?.browsePage?.sidebarFilters || []).includes(
        "priceRange"
      ) && (
        <Section label={"Price"}>
          <Input control={control} name="minPrice" placeholder="MIN" />
          <Input control={control} name="maxPrice" placeholder="MAX" />
        </Section>
      )}
    </div>
  );
};

const Section = ({ label, children, className }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`${s.section} ${className || ""}`}>
      <div className={s.head} onClick={() => setOpen(!open)}>
        {label}
        {open ? <HiChevronDown /> : <HiChevronUp />}
      </div>
      {open && <div className={s.sectionContent}>{children}</div>}
    </div>
  );
};

export default Sidebar;
