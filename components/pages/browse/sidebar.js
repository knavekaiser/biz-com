import { useEffect, useState, useContext, useRef } from "react";
import { SiteContext } from "SiteContext";
import { ETH } from "components/svg";
import { Checkbox, Input, Select } from "components/elements";
import { HiChevronUp, HiChevronDown, HiOutlineX } from "react-icons/hi";
import s from "./styles/products.module.scss";
import { useForm } from "react-hook-form";
import { useFetch } from "hooks";
import { endpoints, paths } from "config";
import { useRouter } from "next/router";

const Sidebar = ({ open, filters, setFilters }) => {
  const queryLoaded = useRef(false);
  const fieldsRef = useRef({});
  const {
    siteConfig: { siteConfig },
  } = useContext(SiteContext);
  const router = useRouter();
  const { control, reset, watch, getValues } = useForm();

  useEffect(() => {
    if (
      siteConfig?.browsePage?.sidebarFilters?.length &&
      !queryLoaded.current
    ) {
      const values = {};
      siteConfig.browsePage.sidebarFilters.forEach((field) => {
        if (router.query[field.fieldName]) {
          values[field.fieldName] = router.query[field.fieldName];
        } else if (
          router.query[field.fieldName + "-min"] ||
          router.query[field.fieldName + "-max"]
        ) {
          values[field.fieldName + "-min"] =
            router.query[field.fieldName + "-min"];
          values[field.fieldName + "-max"] =
            router.query[field.fieldName + "-max"];
        }
      });

      reset(values);
      queryLoaded.current = true;
    }
  }, [siteConfig?.browsePage?.sidebarFilters, router.query]);

  if (!open) {
    return null;
  }

  const color = watch("color");
  return (
    <form className={s.sidebar}>
      {Object.keys(router.query).length > 1 && (
        <div className={s.clearFilters}>
          <button
            className="btn"
            type="button"
            onClick={() => {
              // setFilters({});
              reset(fieldsRef.current);
              router.replace(
                {
                  pathname: paths.browsePage,
                  query: { sort: router.query.sort },
                },
                undefined,
                { shallow: true }
              );
            }}
          >
            <HiOutlineX />
            Clear All Filters
          </button>
        </div>
      )}
      {siteConfig?.productFields &&
        (siteConfig?.browsePage?.sidebarFilters || []).map((f) => {
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

                    if (+e.target.value < +max) {
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
                    if (+e.target.value > +min) {
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
          {(field.optionsType === "predefined" ? field.options : options).map(
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
          {...(field.optionType === "predefined" && {
            options: field.options,
          })}
          {...(field.optionType === "collection" && {
            url: `${endpoints.elements}/${field.collection}`,
          })}
          getQuery={(inputValue, selected) => ({
            ...(inputValue && { [field.optionLabel]: inputValue }),
            ...(selected && { [field.optionValue]: selected }),
          })}
          handleData={(item) => ({
            label: item[field.optionLabel],
            value: item[field.optionValue],
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
