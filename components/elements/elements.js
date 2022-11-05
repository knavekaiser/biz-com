import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  forwardRef,
  Fragment,
  useCallback,
} from "react";
import { IoIosClose } from "react-icons/io";
import { FaUpload, FaSearch, FaRegTrashAlt, FaTimes } from "react-icons/fa";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { GoCalendar } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { DateRangePicker } from "react-date-range";
import { Modal } from "../modal";

import s from "./elements.module.scss";
import countries from "../countries";
import { useFetch } from "hooks";
import { phone as Phone } from "phone";
import { Table, TableActions } from "./Table";

import { Combobox } from "./combobox";

export const Input = ({
  control,
  name,
  formOptions,
  className,
  startAdornment,
  endAdornment,
  type,
  label,
  onChange: customOnChange,
  // onPaste: customOnPaste,
  phone,
  ...rest
}) => {
  const [_type, setType] = useState(type);
  const { control: phCtrl, watch } = useForm({
    defaultValues: {
      country: phone?.code ||
        countries.find(
          (c) => c.timezone === Intl.DateTimeFormat().resolvedOptions().timeZone
        ) || { iso2: "IN", code: "+91" },
    },
  });
  const country = watch("country");
  return (
    <Controller
      control={control}
      name={name}
      rules={formOptions}
      render={({
        field: { onChange, onBlur, value = "", name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => {
        return (
          <section
            className={`${s.input} ${className || ""} ${error ? s.err : ""}`}
          >
            {label && (
              <label>
                {label} {formOptions?.required && "*"}
              </label>
            )}
            <div className={s.wrapper}>
              <div className={s.field}>
                <span className={s.startAdornment}>
                  {phone && (
                    <>
                      <Combobox
                        control={phCtrl}
                        name="country"
                        className={s.countries}
                        options={countries.map((c) => ({
                          value: c,
                          label: c.name,
                        }))}
                        renderValue={(selected) => {
                          return selected ? (
                            <>
                              <img
                                src={`https://flagcdn.com/w20/${country?.iso2?.toLowerCase()}.webp`}
                              />
                              {selected?.code}
                            </>
                          ) : (
                            "No"
                          );
                        }}
                        onChange={(opt) => {
                          const number = Phone(value, country.iso2);
                          customOnChange &&
                            customOnChange({
                              phoneNumber: number,
                              country: opt.value,
                            });
                        }}
                        optionsStyle={{
                          minWidth: "max-content",
                        }}
                      />
                    </>
                  )}
                  {startAdornment}
                </span>
                <input
                  ref={ref}
                  type={type === "password" ? _type : type || "text"}
                  id={rest.id || name}
                  value={value}
                  onChange={(e) => {
                    let value = e.target.value;
                    if (phone) {
                      const number = Phone(value, {
                        country: country?.iso2,
                      });
                      if (number?.isValid) {
                        value = number.phoneNumber.replace(
                          number.countryCode,
                          ""
                        );
                        e.phoneNumber = number;
                        e.country = country;
                      }
                    }
                    onChange(value);
                    customOnChange && customOnChange(e);
                  }}
                  // onPaste={(e) => {
                  //   if (customOnPaste) {
                  //     const value = customOnPaste(e);
                  //     // e.preventDefault();
                  //     console.log("setting value", value);
                  //     onChange("test");
                  //   }
                  // }}
                  {...rest}
                  placeholder={rest.placeholder || "Enter"}
                />
                <span className={s.endAdornment}>
                  {type === "password" && (
                    <button
                      type="button"
                      className={`btn ${s.eye}`}
                      onClick={() =>
                        setType(_type === "password" ? "text" : "password")
                      }
                    >
                      {_type === "password" ? <HiEye /> : <HiEyeOff />}
                    </button>
                  )}
                  {["date", "datetime-local"].includes(type) && (
                    <label htmlFor={rest.id || name} className={s.calenderIcon}>
                      <GoCalendar />
                    </label>
                  )}
                  {endAdornment}
                </span>
              </div>
              {error && <span className={s.errMsg}>{error.message}</span>}
            </div>
          </section>
        );
      }}
    />
  );
};

export const SearchField = ({
  url,
  data: defaultData,
  getQuery,
  type,
  custom,
  processData,
  renderListItem,
  label,
  onChange,
  watch,
  name,
  setValue,
  register,
  formOptions,
  error,
  renderField,
  clearErrors,
  className,
  ...rest
}) => {
  const [data, setData] = useState([]);
  const value = watch(name);
  const [showResult, setShowResult] = useState(false);
  const [style, setStyle] = useState({});
  const clickHandlerAdded = useState(false);
  const container = useRef();

  const { get: getData } = useFetch(url);

  useLayoutEffect(() => {
    const { width, height, x, y } = container.current.getBoundingClientRect();
    setStyle({
      position: "absolute",
      left: x,
      top: Math.max(
        Math.min(
          y + height,
          window.innerHeight - Math.min(35 * (data.length || 0) + 8, 320)
          // window.innerHeight - (35 * (options?.length || 0) + 8)
        ),
        8
      ),
      width: width,
      maxHeight: Math.min(window.innerHeight - 16, 300),
    });
  }, [showResult, data]);
  useEffect(() => {
    const clickHandler = (e) => {
      if (e.path && !e.path.includes(container.current)) {
        setShowResult(false);
      }
    };
    if (!clickHandlerAdded.current) {
      document.addEventListener("click", clickHandler);
      return () => {
        document.removeEventListener("click", clickHandler);
      };
    }
  }, [showResult]);
  useEffect(() => {
    if (value) {
      if (url) {
        getData(null, { query: getQuery(value) || {} }).then(({ data }) => {
          const _data = processData(data, value);
          setData(_data);
        });
      } else if (defaultData) {
        setData(
          defaultData.filter((item) =>
            new RegExp(value.replace(/[#-.]|[[-^]|[?|{}]/g, "\\$&"), "ig").test(
              item.label
            )
          )
        );
      }
    }
  }, [value]);
  return (
    <section ref={container} className={className || ""}>
      {renderField ? (
        renderField({
          register,
          watch,
          setValue,
          name,
          formOptions,
          error,
          clearErrors,
          setShowResult,
        })
      ) : (
        <Input
          label={label}
          onFocus={(e) => setShowResult(true)}
          {...register(name, formOptions)}
          autoComplete="off"
          onBlur={(e) => {
            if (!value) {
              setData([]);
            }
          }}
          error={error}
          type={type || "text"}
          icon={<FaSearch />}
        />
      )}
      <Modal
        open={showResult && data.length > 0}
        className={s.searchFieldModal}
        backdropClass={s.searchFieldModalBackdrop}
        style={style}
        onBackdropClick={() => setShowResult(false)}
        clickThroughBackdrop
      >
        <ul className={s.options}>
          {data.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                setValue(name, item.label);
                onChange(item.data || item);
              }}
            >
              {renderListItem(item)}
            </li>
          ))}
        </ul>
      </Modal>
    </section>
  );
};

export const FileInput = ({
  label,
  thumbnail,
  required,
  multiple,
  onChange,
  prefill,
}) => {
  const id = useRef(Math.random().toString(36).substr(4));
  const prefillLoaded = useRef(false);
  const [files, setFiles] = useState([]);
  const [showFiles, setShowFiles] = useState(false);
  useEffect(() => {
    if (prefill?.length !== files.length) {
      setFiles(
        prefill?.map((file) =>
          typeof file === "string" ? { name: file, uploadFilePath: file } : file
        ) || []
      );
    }
  }, [prefill?.length]);
  useEffect(() => {
    if (prefill?.length !== files.length) {
      onChange?.(files);
    }
  }, [files?.length]);
  return (
    <section data-testid="fileInput" className={s.fileInput}>
      <div className={s.label}>
        <label>
          {label} {required && "*"}
        </label>
        {!thumbnail && (
          <span className={s.fileCount} onClick={() => setShowFiles(true)}>
            {files.length} files selected
          </span>
        )}
      </div>
      <input
        id={id.current}
        style={{ display: "none" }}
        type="file"
        multiple={multiple}
        required={required}
        onChange={(e) => {
          if (e.target.files.length > 0) {
            if (multiple) {
              setFiles((prev) => [
                ...prev,
                ...[...e.target.files].filter(
                  (item) =>
                    !files.some(
                      (file) =>
                        (file.name || file.fileName) ===
                        (item.name || item.fileName)
                    )
                ),
              ]);
            } else {
              setFiles([e.target.files[0]]);
            }
            // e.target.files = {};
          }
        }}
      />
      {thumbnail ? (
        <ul className={s.files}>
          {files.map((file, i) => {
            const ClearBtn = () => (
              <button
                className={`clear ${s.clear}`}
                type="button"
                onClick={() =>
                  setFiles((prev) =>
                    prev.filter((f) =>
                      typeof f === "string"
                        ? f !== file
                        : (f.name || f.fileName) !==
                          (file.name || file.fileName)
                    )
                  )
                }
              >
                <FaTimes />
              </button>
            );

            if (
              !file.size &&
              new RegExp(/\.(jpg|jpeg|png|gif|webp)$/).test(file.name)
            ) {
              return (
                <li className={s.file} key={i}>
                  <ClearBtn />
                  <img src={file.name} />
                </li>
              );
            }

            if (new RegExp(/\.(jpg|jpeg|png|gif|webp)$/).test(file?.name)) {
              const url = URL.createObjectURL(file);
              return (
                <li className={s.file} key={i}>
                  <ClearBtn />
                  <img src={url} />
                </li>
              );
            }
            return (
              <li className={s.file} key={i}>
                <ClearBtn />
                {file.name || "__file--"}
              </li>
            );
          })}
          {(multiple || (!multiple && !files.length)) && (
            <li className={s.fileInput}>
              <label htmlFor={id.current}>
                <FaUpload />
              </label>
            </li>
          )}
        </ul>
      ) : (
        <div className={s.inputField}>
          <label htmlFor={id.current}>
            <span className={s.fileNames}>
              {files.reduce((p, a) => {
                return p + (a.name || a.fileName) + ", ";
              }, "") || "Item select"}
            </span>
            <span className={s.btn}>
              <FaUpload />
            </span>
          </label>
        </div>
      )}
      {!thumbnail && (
        <Modal
          open={showFiles}
          className={s.fileInputModal}
          setOpen={setShowFiles}
          head={true}
          label="Files"
        >
          <div className={s.container}>
            File Preview
            {
              <Table columns={[{ label: "File" }, { label: "Action" }]}>
                {files.map((file, i) => (
                  <tr key={i}>
                    <td>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={file.uploadFilePath}
                      >
                        {file.name || file.fileName || file.uploadFilePath}
                      </a>
                    </td>
                    <TableActions
                      actions={[
                        {
                          icon: <FaRegTrashAlt />,
                          label: "Remove",
                          callBack: () => {
                            setFiles((prev) =>
                              prev.filter((f) =>
                                typeof f === "string"
                                  ? f !== file
                                  : (f.name || f.fileName) !==
                                    (file.name || file.fileName)
                              )
                            );
                          },
                        },
                      ]}
                    />
                  </tr>
                ))}
              </Table>
            }
          </div>
        </Modal>
      )}
    </section>
  );
};
export const uploadFiles = async ({ files, uploadFiles }) => {
  let links = [];
  let error = null;
  if (files?.length) {
    const formData = new FormData();
    const uploaded = [];
    const newFiles = [];

    for (var _file of files) {
      if (typeof _file === "string" || _file.uploadFilePath) {
        uploaded.push(_file);
      } else {
        newFiles.push(_file);
        formData.append("files", _file);
      }
    }

    if (newFiles.length) {
      const newLinks = await uploadFiles(formData)
        .then(
          ({ data }) =>
            data?.map((item, i) => ({
              ...item,
              name: newFiles[i].name,
            })) || []
        )
        .catch((err) => {
          error = err;
        });

      links = [...uploaded, ...newLinks];
    }
  }
  return { links, error };
};

export const Textarea = ({
  control,
  name,
  formOptions,
  className,
  label,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={formOptions}
      render={({
        field: { onChange, onBlur, value = "", name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => {
        return (
          <section
            className={`${s.input} ${s.textarea} ${className || ""} ${
              error ? s.err : ""
            }`}
          >
            {label && (
              <label>
                {label} {formOptions?.required && "*"}
              </label>
            )}
            <span className={s.field}>
              <textarea
                ref={ref}
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                {...rest}
              />
              {error && (
                <span
                  className={s.errIcon}
                  style={!label ? { transform: "translateY(-6px)" } : {}}
                >
                  <BsFillExclamationTriangleFill />
                </span>
              )}
              {error && <span className={s.errMsg}>{error.message}</span>}
            </span>
          </section>
        );
      }}
    />
  );
};

export const Radio = ({
  register = () => {},
  formOptions,
  name,
  options,
  onChange,
  error,
}) => {
  return (
    <section
      className={`${s.radio} ${error ? s.err : ""}`}
      data-testid="radioInput"
    >
      {options.map(({ label, value: v, hint, disabled }, i) => (
        <label
          key={i}
          htmlFor={name + v}
          className={disabled ? s.disabled : ""}
        >
          <input
            {...register(name, { ...formOptions })}
            type="radio"
            name={name}
            id={name + v}
            className="label"
            value={v}
          />
          {label}
          {hint && <span className={s.hint}>{hint}</span>}
        </label>
      ))}
      {error && <span className={s.errMsg}>{error.message}</span>}
    </section>
  );
};
export const CustomRadio = ({
  control,
  name,
  formOptions,
  label,
  options,
  multiple,
  className,
  selectedClassName,
}) => (
  <Controller
    control={control}
    name={name}
    rules={formOptions}
    render={({
      field: { onChange, onBlur, value = multiple ? [] : "", name, ref },
      fieldState: { invalid, isTouched, isDirty, error },
    }) => (
      <section
        className={`${s.customRadio} ${className || ""}`}
        data-testid="customRadioInput"
      >
        {label && (
          <label>
            {label} {formOptions?.required && "*"}
          </label>
        )}
        <div className={s.options}>
          {options.map(({ label, value: v, disabled }, i) => (
            <label
              htmlFor={name + v}
              key={i}
              className={`${s.option} ${
                value.includes(v)
                  ? s.selected + " " + (selectedClassName || "")
                  : ""
              } ${disabled ? s.disabled : ""}`}
            >
              <input
                type="checkbox"
                name={name}
                id={name + v}
                value={v}
                checked={value === v || value.includes(v) || ""}
                ref={ref}
                onChange={(e) => {
                  const _v = e.target.value;
                  if (_v === value || value.includes(_v)) {
                    if (multiple) {
                      onChange(value.filter((v) => v !== _v));
                    }
                  } else {
                    if (multiple) {
                      onChange([...value, _v]);
                    } else {
                      onChange(_v);
                    }
                  }
                }}
              />
              {label}
            </label>
          ))}
        </div>
        {error && <span className={s.errMsg}>{error.message}</span>}
      </section>
    )}
  />
);

export const SwitchInput = ({
  register = () => {},
  name,
  setValue = () => {},
  watch = () => {},
  label,
  readOnly,
  defaultValue,
  onChange,
  onLabel,
  offLabel,
  required,
}) => {
  const value = watch(name);
  return (
    <div data-testid="switchInput" className={s.switchInput}>
      <label>
        {label} {required && "*"}
      </label>
      <input
        type="checkbox"
        {...register(name)}
        style={{ display: "none" }}
        name={name}
      />
      <div
        className={s.btns}
        tabIndex={0}
        onKeyDown={(e) => {
          if ([32, 13, 39, 37].includes(e.keyCode)) {
            e.preventDefault();
            if ([32, 13].includes(e.keyCode)) {
              setValue(name, !value);
            }
            if (e.keyCode === 39) {
              setValue(name, false);
            }
            if (e.keyCode === 37) {
              setValue(name, true);
            }
          }
        }}
      >
        <span
          className={`${value ? s.active : ""} ${s.on}`}
          onClick={() => setValue(name, true)}
        >
          {onLabel || "Yes"}
        </span>
        <span
          className={`${!value ? s.active : ""} ${s.off}`}
          onClick={() => setValue(name, false)}
        >
          {offLabel || "No"}
        </span>
      </div>
    </div>
  );
};
export const Toggle = ({ name, control, formOptions, disabled }) => {
  const id = useRef(Math.random().toString(36).substr(-8));

  return (
    <Controller
      control={control}
      name={name}
      rules={formOptions}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => {
        return (
          <section
            data-testid="toggleInput"
            className={`${s.toggle} ${value || value ? s.on : ""} ${
              disabled ? s.disabled : ""
            }`}
            onClick={(e) => {
              e.target.querySelector("label")?.click();
            }}
            tabIndex={0}
            onKeyDown={(e) => {
              if ([32, 13, 39, 37].includes(e.keyCode)) {
                e.preventDefault();
                // if ([32, 13].includes(e.keyCode)) {
                //   setValue(name, !value);
                // }
                // if (e.keyCode === 39) {
                //   setValue(name, false);
                // }
                // if (e.keyCode === 37) {
                //   setValue(name, true);
                // }
              }
            }}
          >
            <input
              ref={ref}
              type="checkbox"
              checked={!!value}
              onChange={onChange}
              style={{ display: "none" }}
              name={name}
              id={id.current}
            />
            <label className={s.ball} htmlFor={id.current} />
            {error && <span className={s.errMsg}>{error.message}</span>}
          </section>
        );
      }}
    />
  );
};

const CheckboxComp = ({ label, readOnly, ...rest }, ref) => {
  const id = useRef(Math.random().toString(36).substr(-8));
  return (
    <section
      className={s.checkbox}
      style={readOnly ? { pointerEvents: "none" } : {}}
      data-testid="checkbox-input"
    >
      <input ref={ref} id={id.current} type="checkbox" {...rest} />
      {label && <label htmlFor={id.current}>{label}</label>}
    </section>
  );
};
export const Checkbox = forwardRef(CheckboxComp);

export const Tabs = ({
  tabs,
  activeTab,
  onChange,
  className,
  secondary,
  tertiary,
}) => {
  const router = useRouter();
  useEffect(() => {
    if (
      !onChange &&
      !tabs.some((tab) =>
        location.pathname.includes(tab.path.replace("/*", ""))
      )
    ) {
      router.push(tabs[0].path, { replace: true });
    }
  }, []);
  return (
    <div
      className={`${s.tabs} ${className || ""} ${
        secondary ? s.secondary : ""
      } ${tertiary ? s.tertiary : ""}`}
      data-testid="tabs"
    >
      {tabs.map((tab) =>
        onChange ? (
          <a
            key={tab.value}
            className={tab.value === activeTab ? s.active : ""}
            onClick={() => onChange(tab)}
          >
            {tab.label}
          </a>
        ) : (
          <Link
            key={tab.path}
            href={{
              pathname: tab.path,
              ...(tab.search && {
                query: tab.search,
              }),
            }}
          >
            <a
              className={
                // location?.pathname.endsWith(path) ? s.active : ""
                location?.pathname.includes(tab.path.replace("/*", ""))
                  ? s.active
                  : ""
              }
            >
              {tab.label}
            </a>
          </Link>
        )
      )}
      <span className={s.fill} />
    </div>
  );
};

export const Chip = ({ label, remove }) => {
  return (
    <span className={s.chip}>
      {label}{" "}
      <button
        type="button"
        onClick={() => {
          remove?.();
        }}
        className="clear"
      >
        <IoIosClose />
      </button>
    </span>
  );
};

export const DatePicker = ({ control, name, formOptions }) => {
  <Controller
    control={control}
    name={name}
    rules={formOptions}
    render={({ field: { onChange, onBlur, value, name, ref } }) => (
      <DateRangePicker onChange={onChange} />
    )}
  />;
};

export const Paths = ({ paths, className }) => {
  return (
    <div className={`${s.paths} ${className || ""}`}>
      {paths.map((item, i) => (
        <Fragment key={item.label}>
          {item.path ? (
            <Link href={item.path}>
              <a>{item.label}</a>
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {paths[i + 1] ? <span className={s.divider}>/</span> : null}
        </Fragment>
      ))}
    </div>
  );
};

export const Slider = ({
  control,
  name,
  label,
  formOptions,
  onChange: customOnChange,
  error,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={formOptions}
      render={({
        field: { onChange, onBlur, value = "", name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => {
        return (
          <section
            className={`${s.input} ${className || ""} ${error ? s.err : ""}`}
          >
            {label && (
              <label>
                {label} {formOptions?.required && "*"}
              </label>
            )}
            <div className={s.wrapper}>
              <div className={s.field}>
                <input
                  ref={ref}
                  type={type === "password" ? _type : type || "text"}
                  id={rest.id || name}
                  value={value}
                  onChange={(e) => {
                    let value = e.target.value;
                    if (phone) {
                      const number = Phone(value, {
                        country: country?.iso2,
                      });
                      if (number?.isValid) {
                        value = number.phoneNumber.replace(
                          number.countryCode,
                          ""
                        );
                        e.phoneNumber = number;
                        e.country = country;
                      }
                    }
                    onChange(value);
                    customOnChange && customOnChange(e);
                  }}
                  {...rest}
                  placeholder={rest.placeholder || "Enter"}
                />
              </div>
              {error && <span className={s.errMsg}>{error.message}</span>}
            </div>
          </section>
        );
      }}
    />
  );
};

export const Range = ({
  control,
  name,
  label,
  formOptions,
  onChange: customOnChange,
  className,
  error,
  min = 0,
  max = 100,
  step,
}) => {
  const valueLoaded = useRef(false);
  const [activeHandle, setActiveHandle] = useState(false);
  const [minPos, setMinPos] = useState(0);
  const [maxPos, setMaxPos] = useState(100);
  const trackRef = useRef();

  const handleTrackMove = useCallback(
    (e) => {
      e.stopPropagation();
      if (activeHandle) {
        const track = trackRef.current;
        const boundingBox = track.getBoundingClientRect();
        const val = Math.max(
          Math.min(
            +(
              (e.clientX - boundingBox.x - 10) /
              (boundingBox.width - 20)
            ).toFixed(2),
            1
          ),
          0
        );
        if (activeHandle === "min") {
          setMinPos(Math.min(maxPos, +(val * 100).toFixed(step)));
        }
        if (activeHandle === "max") {
          setMaxPos(Math.max(minPos, +(val * 100).toFixed(step)));
        }
      }
    },
    [activeHandle, minPos, maxPos]
  );
  const updateValue = useCallback(
    (onChange) => {
      const value = {
        min: +(minPos / (100 / (max - min)) + min).toFixed(step),
        max: +(maxPos / (100 / (max - min)) + min).toFixed(step),
      };
      onChange(value);
      customOnChange && customOnChange(value);
    },
    [min, max, minPos, maxPos]
  );

  useEffect(() => {
    const mouseUpHandler = () => {
      setActiveHandle(null);
    };
    document.addEventListener("mouseup", mouseUpHandler);
    return () => {
      document.removeEventListener("mouseup", mouseUpHandler);
    };
  }, []);

  useEffect(() => {
    if (!valueLoaded.current && control._formValues[name]) {
      let { min: valueMin, max: valueMax } = control._formValues[name];
      if (["", undefined].includes(valueMin)) {
        valueMin = min;
      } else {
        valueMin = valueMin - min;
      }
      if (["", undefined].includes(valueMax)) {
        valueMax = max;
      } else {
        valueMax = valueMax - min;
      }
      setMinPos(
        +((valueMin / max) * 100 + ((valueMin / max) * 100) / 100).toFixed(step)
      );
      setMaxPos(
        (+((valueMax / max) * 100) + ((valueMax / max) * 100) / 100).toFixed(
          step
        )
      );
      valueLoaded.current = true;
    }
  }, [control._formValues[name]]);
  return (
    <Controller
      control={control}
      name={name}
      rules={formOptions}
      render={({
        field: { onChange, onBlur, value = { min, max }, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => {
        return (
          <section
            className={`${s.range} ${className || ""} ${error ? s.err : ""}`}
          >
            {label && (
              <label>
                {label} {formOptions?.required && "*"}
              </label>
            )}
            <div className={s.wrapper}>
              <div className={s.field}>
                <div
                  className={s.track}
                  ref={trackRef}
                  onMouseMove={handleTrackMove}
                  onTouchMove={handleTrackMove}
                  onMouseOut={() => {
                    if (activeHandle) {
                      updateValue(onChange);
                    }
                  }}
                >
                  <span
                    className={`${s.handle} ${s.min}`}
                    onMouseDown={() => setActiveHandle("min")}
                    onTouchStart={() => setActiveHandle("min")}
                    onMouseUp={() => {
                      setActiveHandle(null);
                      updateValue(onChange);
                    }}
                    style={{
                      left: `${Math.min(98, Math.max(2, minPos))}%`,
                      zIndex: minPos > 50 ? 2 : 1,
                    }}
                  />
                  <span
                    className={s.fill}
                    style={{
                      left: `${Math.min(98, Math.max(2, minPos))}%`,
                      right: `${Math.min(98, Math.max(2, 100 - maxPos))}%`,
                    }}
                  />
                  <span
                    className={`${s.handle} ${s.max}`}
                    onMouseDown={() => setActiveHandle("max")}
                    onTouchStart={() => setActiveHandle("max")}
                    onMouseUp={() => {
                      setActiveHandle(null);
                      updateValue(onChange);
                    }}
                    style={{
                      left: `${Math.min(98, Math.max(2, maxPos))}%`,
                      zIndex: maxPos < 50 ? 2 : 1,
                    }}
                  />
                </div>
                <div className={s.values}>
                  <span className={s.min}>
                    {+(minPos / (100 / (max - min)) + min).toFixed(step)}
                  </span>
                  <span className={s.max}>
                    {+(maxPos / (100 / (max - min)) + min).toFixed(step)}
                  </span>
                </div>
                {
                  // <>
                  //   <div className={s.values}>
                  //     <span className={s.min}>{minPos}</span>
                  //     <span className={s.max}>{maxPos}</span>
                  //   </div>
                  //   <div className={s.values}>
                  //     <span className={s.min}>{value.min}</span>
                  //     <span className={s.max}>{value.max}</span>
                  //   </div>
                  // </>
                }
              </div>
              {error && <span className={s.errMsg}>{error.message}</span>}
            </div>
          </section>
        );
      }}
    />
  );
};
