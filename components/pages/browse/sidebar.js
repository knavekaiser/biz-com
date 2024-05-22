import { useEffect, useState, useContext, useRef } from "react";
import { SiteContext } from "SiteContext";
import { Input, Select, Combobox, Range, Checkbox } from "components/elements";
import { HiOutlineX } from "react-icons/hi";
import s from "./styles/products.module.scss";
import { useForm } from "react-hook-form";
import { useFetch } from "hooks";
import { endpoints, paths } from "config";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

const Sidebar = ({
  categories,
  subcategory,
  setSubcategory,
  fields,
  setFields,
  open,
  filters,
  setFilters,
}) => {
  const queryLoaded = useRef(false);
  const fieldsRef = useRef({});
  const {
    siteConfig: { siteConfig },
  } = useContext(SiteContext);
  const router = useRouter();
  const { control, reset, watch, getValues, setValue } = useForm({
    // defaultValues: { sort: router.query?.sort || "price-asc" },
  });

  useEffect(() => {
    if (!queryLoaded.current) {
      const values = {
        sort: router.query?.sort || "price-asc",
        category: router.query.category || undefined,
        subcategories: router.query.subcategories || [],
      };

      siteConfig?.browsePage?.sidebarFilters?.forEach((field) => {
        if (router.query[field.fieldName]) {
          values[field.fieldName] = router.query[field.fieldName];
        } else if (
          router.query[field.fieldName + "-min"] ||
          router.query[field.fieldName + "-max"]
        ) {
          if (field.filterType === "range") {
            values[field.fieldName + "-range"] = {
              min: +router.query[field.fieldName + "-min"],
              max: +router.query[field.fieldName + "-max"],
            };
          } else {
            values[field.fieldName + "-min"] =
              +router.query[field.fieldName + "-min"];
            values[field.fieldName + "-max"] =
              +router.query[field.fieldName + "-max"];
          }
        }
      });

      reset(values);
      setFilters(values);
      queryLoaded.current = true;
    }
  }, [siteConfig?.browsePage?.sidebarFilters, router.query]);

  if (!open) {
    return null;
  }

  return (
    <form className={s.sidebar}>
      {Object.keys(router.query).length > 1 && (
        <div className={s.clearFilters}>
          <button
            className="btn"
            type="button"
            onClick={() => {
              reset(fieldsRef.current);
              setFields(null);
              router.replace(
                {
                  pathname: paths.browsePage,
                  query: { sort: router.query.sort },
                },
                undefined,
                { shallow: true }
              );
              setTimeout(() => {
                setFilters({});
              }, 10);
            }}
          >
            <HiOutlineX />
            Clear All Filters
          </button>
        </div>
      )}
      <Section label="Sort">
        <Combobox
          control={control}
          name="sort"
          options={[
            // { label: "Popularity", value: "popular" },
            { label: "Price Low to High", value: "price-asc" },
            { label: "Price High to Low", value: "price-dsc" },
          ]}
          onChange={(opt) => setFilters({ ...filters, sort: opt.value })}
        />
      </Section>
      {!fields ? (
        <section className={s.categorySection}>
          <p>
            <strong>Categories</strong>
          </p>
          <ul className={s.categories}>
            {categories.map((cat) => (
              <li key={cat.name}>
                <Checkbox
                  label={cat.name}
                  checked={filters.category === cat.name}
                  onChange={(e) => {
                    if (filters.category === cat.name) {
                      setFilters((prev) => ({
                        ...prev,
                        category: undefined,
                        subcategories: [],
                      }));
                    } else {
                      setFilters((prev) => ({
                        ...prev,
                        category: cat.name,
                        subcategories: (cat.subcategories || []).map(
                          (sc) => sc.name
                        ),
                      }));
                    }
                  }}
                />
                {cat.subcategories?.length > 0 && (
                  <ul className={s.subcategories}>
                    {cat.subcategories.map((subCat) => (
                      <li key={subCat.name} label={subCat.name}>
                        <Checkbox
                          label={subCat.name}
                          checked={
                            filters.category === cat.name &&
                            (filters.subcategories || []).includes(subCat.name)
                          }
                          onChange={(e) => {
                            if (
                              filters.category === cat.name &&
                              (filters.subcategories || []).includes(
                                subCat.name
                              )
                            ) {
                              setFilters((prev) => ({
                                ...prev,
                                subcategories: prev.subcategories.filter(
                                  (sc) => sc !== subCat.name
                                ),
                              }));
                            } else {
                              setFilters((prev) => ({
                                ...prev,
                                category: cat.name,
                                subcategories:
                                  prev.category !== cat.name
                                    ? [subCat.name]
                                    : [
                                        ...(prev.subcategories || []).filter(
                                          (sc) =>
                                            (cat.subcategories || []).some(
                                              (item) => item.name === sc
                                            )
                                        ),
                                        subCat.name,
                                      ],
                              }));
                            }
                            setFields(
                              e.target.checked
                                ? siteConfig?.browsePage?.sidebarFilters.find(
                                    (item) =>
                                      item.category === cat.name &&
                                      item.subcategory === subCat.name
                                  )?.filters
                                : null
                            );
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section
          className={s.backToCategories}
          onClick={() => {
            setFields(null);
            setFilters((prev) => ({
              category: prev.category,
              subcategory: undefined,
            }));
          }}
        >
          <BsArrowLeft style={{ fontSize: "1.3em" }} />{" "}
          <p className="flex align-center gap_5">
            {filters.category} <FiChevronRight /> {filters.subcategory}
          </p>
        </section>
      )}
      {(fields || []).map((f) => {
        const field = siteConfig.productFields.find(
          (field) => field.name === f.fieldName
        );
        if (!field) {
          return null;
        }
        if (f.filterType === "textSearch" || f.filterType === "match") {
          fieldsRef.current = {
            ...fieldsRef.current,
            [field.name]: "",
          };
          return (
            <Section label={field.label} key={f.fieldName}>
              <Input
                control={control}
                name={field.name}
                type={field.inputType}
                onChange={(e) => {
                  setFilters((prev) => ({
                    ...prev,
                    [field.name]: e.target.value || "",
                  }));
                }}
              />
            </Section>
          );
        } else if (f.filterType === "minMax") {
          fieldsRef.current = {
            ...fieldsRef.current,
            [`${field.name}-min`]: "",
            [`${field.name}-max`]: "",
          };
          return (
            <Section label={field.label} key={f.fieldName}>
              <Input
                control={control}
                name={`${field.name}-min`}
                type={field.inputType}
                placeholder="MIN"
                onChange={(e) => {
                  const max = getValues(`${field.name}-max`);

                  if (+e.target.value <= +max) {
                    setFilters((prev) => ({
                      ...prev,
                      [`${field.name}-min`]: +e.target.value,
                      [`${field.name}-max`]: +max,
                    }));
                  } else {
                    setFilters((prev) => ({
                      ...prev,
                      [`${field.name}-min`]: "",
                      [`${field.name}-max`]: "",
                    }));
                  }
                }}
              />
              <Input
                control={control}
                name={`${field.name}-max`}
                type={field.inputType}
                placeholder="MAX"
                onChange={(e) => {
                  const min = getValues(`${field.name}-min`);
                  if (+e.target.value >= +min) {
                    setFilters((prev) => ({
                      ...prev,
                      [`${field.name}-max`]: +e.target.value,
                      [`${field.name}-min`]: +min,
                    }));
                  } else {
                    setFilters((prev) => ({
                      ...prev,
                      [`${field.name}-max`]: "",
                      [`${field.name}-min`]: "",
                    }));
                  }
                }}
              />

              {+getValues(`${field.name}-max`) <
                +getValues(`${field.name}-min`) && (
                <p className="subtitle1">Max must be greater then Min</p>
              )}
            </Section>
          );
        } else if (f.filterType === "range") {
          return (
            <Section label={field.label} key={f.fieldName}>
              <Range
                control={control}
                name={`${field.name}-range`}
                setValue={setValue}
                type={field.inputType}
                placeholder={`${field.label} range`}
                onChange={({ min, max }) => {
                  if (min <= max) {
                    setFilters((prev) => ({
                      ...prev,
                      [`${field.name}-min`]: min,
                      [`${field.name}-max`]: max,
                    }));
                  } else {
                    setFilters((prev) => ({
                      ...prev,
                      [`${field.name}-min`]: "",
                      [`${field.name}-max`]: "",
                    }));
                  }
                }}
                min={+f.min}
                max={+f.max}
              />
            </Section>
          );
        } else if (["list", "dropdown"].includes(f.filterStyle)) {
          fieldsRef.current = {
            ...fieldsRef.current,
            [field.name]: [],
          };
          return (
            <FilterList
              key={f.fieldName}
              field={field}
              sidebarItem={f}
              setFilters={setFilters}
              control={control}
            />
          );
        }
      })}
    </form>
  );
};

const FilterList = ({ field, setFilters, sidebarItem, control }) => {
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState([]);
  const { get: getOptions } = useFetch(
    endpoints.elements + `/${field?.collection || ""}`
  );

  useEffect(() => {
    if (sidebarItem.filterStyle === "list") {
      setFilters((prev) => {
        return {
          ...prev,
          [field.name]: selected?.length ? selected : "",
        };
      });
    }
  }, [selected]);

  useEffect(() => {
    if (field.optionType === "collection") {
      getOptions()
        .then(({ data }) => {
          if (data?.success) {
            return setOptions(
              data.data.map((item) => ({
                label: item[field.optionLabel],
                value: item[field.optionValue],
              }))
            );
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  if (sidebarItem.filterStyle === "list") {
    return (
      <Section label={field.label}>
        <ul className={s.filterList}>
          {(field.optionType === "array" ? field.options : options).map(
            (option, i) => (
              <li key={i}>
                <input
                  id={`${field.name}_${option.label}`}
                  type="checkbox"
                  checked={selected.includes(option.value)}
                  onChange={(e) => {
                    if (selected.includes(option.value)) {
                      setSelected((prev) =>
                        prev.filter((item) => item !== option.value)
                      );
                    } else {
                      setSelected((prev) => [...prev, option.value]);
                    }
                  }}
                />{" "}
                <label htmlFor={`${field.name}_${option.label}`}>
                  {option.label}
                </label>
              </li>
            )
          )}
        </ul>
      </Section>
    );
  } else if (sidebarItem.filterStyle === "dropdown") {
    return (
      <Section label={field.label}>
        <Select
          control={control}
          {...(field.optionType === "array" && {
            options: field.options,
          })}
          {...(field.optionType === "collection" && {
            url: `${endpoints.elements}/${field.collection}`,
            getQuery: (inputValue, selected) => ({
              ...(inputValue && { [field.optionLabel]: inputValue }),
              ...(selected && { [field.optionValue]: selected }),
            }),
            handleData: (item) => ({
              label: item[field.optionLabel],
              value: item[field.optionValue],
            }),
          })}
          multiple
          name={field.name}
          formOptions={{ required: field.required }}
          className={s.itemName}
          onChange={(e) => {
            setFilters((prev) => ({
              ...prev,
              [field.name]: e.length ? e.map((item) => item.value) : "",
            }));
          }}
        />
      </Section>
    );
  }

  return null;
};

const Section = ({ label, children, className }) => {
  const {
    siteConfig: { siteConfig },
  } = useContext(SiteContext);
  const [open, setOpen] = useState(
    true
    // siteConfig?.browsePage?.sidebarFiltersDefaultState === "open" ? true : false
  );

  return (
    <div className={`${s.section} ${className || ""}`}>
      <div className={s.head} onClick={() => setOpen(!open)}>
        {label}
        {/* {open ? <HiChevronUp /> : <HiChevronDown />} */}
      </div>
      {open && (
        <div className={s.sectionContent} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
