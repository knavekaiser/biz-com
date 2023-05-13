import { useEffect, useContext, useState, useRef, useCallback } from "react";
import { SiteContext } from "SiteContext";
import { Input } from "components/elements";
import { Modal, Prompt } from "components/modal";
import { HiSearch, HiUserCircle, HiX, HiChevronLeft } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { paths, endpoints } from "config";
import { useYup, useFetch } from "hooks";
import { useRouter } from "next/router";
import { phone } from "phone";
import * as yup from "yup";
import s from "./styles/header.module.scss";
import Image from "next/image";

const Header = () => {
  const { siteConfig, cart } = useContext(SiteContext);
  const router = useRouter();
  return (
    <header className={s.header}>
      <span className={s.gred + ` gred`} />
      <div className={s.content}>
        <div className={s.northSection}>
          <Link href={paths.home} className={s.logo}>
            {siteConfig.logo && (
              <Image
                src={siteConfig.logo}
                height={48}
                width={48}
                alt="Site Logo"
              />
            )}
            <h2>{siteConfig.siteTitle}</h2>
          </Link>
        </div>
        <SearchForm />
        <div className={s.southSection}>
          <Account />
          <button
            className={s.icon}
            onClick={(e) => {
              router.push(paths.cart);
            }}
          >
            <span className={s.itemCount}>
              {cart.reduce((p, c) => p + c.qty, 0) || 0}
            </span>
            <RiShoppingCartLine /> <label>Cart</label>
          </button>
        </div>
      </div>
    </header>
  );
};

const SearchForm = () => {
  const { handleSubmit, control } = useForm();
  const router = useRouter();
  return (
    <form
      className={s.searchForm}
      onSubmit={handleSubmit((values) => {
        if (values.search) {
          router.push({
            pathname: paths.browse,
            query: {
              title: values.search,
            },
          });
        }
      })}
    >
      <Input
        className={s.input}
        placeholder="Search"
        // startAdornment={<HiSearch className={s.icon} />}
        control={control}
        name="search"
      />
      <button className="btn primary">
        <HiSearch />
      </button>
    </form>
  );
};

const Account = () => {
  const { user, setUser, logout } = useContext(SiteContext);
  const iconRef = useRef();
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState({});
  const [loginForm, setLoginForm] = useState(false);
  useEffect(() => {
    const boundingBox = iconRef.current.getBoundingClientRect();
    setStyle({
      top: boundingBox.y + boundingBox.height + 6,
      right: window.innerWidth - (boundingBox.x + boundingBox.width),
    });
  }, []);
  return (
    <div className={s.account}>
      <button
        className={s.icon}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        ref={iconRef}
      >
        <small>Hello,</small> {user?.name || "Sign In"}
      </button>

      <Modal
        open={open}
        setOpen={setOpen}
        onBackdropClick={() => setOpen(false)}
        className={s.accountModal}
        clickThroughBackdrop
        onOutsideClick={() => {
          setOpen(false);
        }}
        backdropClass={s.accountModalBackdrop}
        style={style}
      >
        <ul>
          {user ? (
            <>
              <Link href={paths.clientArea.profile}>
                <li>Profile</li>
              </Link>
              <Link href={paths.clientArea.orders}>
                <li>Orders</li>
              </Link>
              <li onClick={logout}>Logout</li>
            </>
          ) : (
            <>
              <li onClick={() => setLoginForm(true)}>Log in or sign up</li>
            </>
          )}
        </ul>
      </Modal>

      <Modal
        open={loginForm}
        setOpen={setLoginForm}
        className={s.loginFormModal}
        // label=
      >
        <LoginForm
          setOpen={setLoginForm}
          onSuccess={(user) => {
            setUser(user);
            setLoginForm(false);
          }}
        />
      </Modal>
    </div>
  );
};

const LoginForm = ({ setOpen, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [newUser, setNewUser] = useState(true);
  const { post: validateAccount, loading } = useFetch(
    endpoints.validateAccount
  );
  const { post: signup, loading: signingUp } = useFetch(endpoints.signup);
  const { post: login, loading: loggingIn } = useFetch(endpoints.login);
  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
    setError,
  } = useForm({
    resolver: useYup(
      yup.object({
        ...(step === 1 && {
          username: yup
            .string()
            .required("Field is required")
            .test({
              name: "username",
              test(v, ctx) {
                const number = phone(v, { country: this.parent.country?.iso2 });
                if (number.isValid) {
                  return true;
                } else if (
                  new RegExp(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  ).test(v)
                ) {
                  return true;
                } else {
                  return ctx.createError({
                    message: "Please enter a valid Phone number or email.",
                  });
                }
              },
            }),
        }),
        ...(step === 2 &&
          !newUser && {
            pass: yup.string().required("Field is required"),
          }),
        ...(step === 2 &&
          newUser && {
            name: yup.string().required("Field is required"),
            pass: yup.string().required("Field is required"),
            confirmPass: yup
              .string()
              .required("Field is required")
              .oneOf([yup.ref("pass")], "Password does not match"),
          }),
      })
    ),
  });
  const submit = useCallback(
    async (values) => {
      if (step === 1) {
        const number = phone(values.username, {
          country: values?.country?.iso2,
        });
        const payload = {};
        if (number.isValid) {
          payload.phone = number.phoneNumber;
        } else {
          payload.email = values.username;
        }
        validateAccount(payload)
          .then(({ data }) => {
            if (data.success) {
              setNewUser(data.data.newUser);
              setStep(2);
            } else if (data.success === false) {
              return Prompt({
                type: "error",
                message: data.message,
              });
            }
          })
          .catch((err) => {
            Prompt({
              type: "error",
              message: err.message,
            });
          });
      } else if (step === 2) {
        const number = phone(values.username);
        if (newUser) {
          const payload = { ...values, password: values.pass, pass: undefined };
          if (number.isValid) {
            payload.phone = number.phoneNumber;
          } else {
            payload.email = values.username;
          }
          signup(payload)
            .then(({ data }) => {
              if (data.success) {
                onSuccess(data.data);
                localStorage.setItem("access_token", data.token);
              } else if (data.success === false) {
                Prompt({
                  type: "error",
                  message: data.message,
                });
              }
            })
            .catch((err) => Prompt({ type: "error", message: err.message }));
        } else {
          const payload = {
            password: values.pass,
          };
          if (number.isValid) {
            payload.phone = number.phoneNumber;
          } else {
            payload.email = values.username;
          }
          login(payload)
            .then(({ data }) => {
              if (data.success) {
                onSuccess(data.data);
                localStorage.setItem("access_token", data.token);
              } else if (data.success === false) {
                Prompt({
                  type: "error",
                  message: data.message,
                });
              }
            })
            .catch((err) => Prompt({ type: "error", message: err.message }));
        }
      }
    },
    [step]
  );
  const username = watch("username");
  return (
    <div className={s.loginForm}>
      <div className={s.head}>
        <button
          className="clear"
          onClick={() => {
            if (step === 1) {
              setOpen(false);
            } else if (step === 2) {
              setStep(1);
            }
          }}
        >
          {step === 1 ? <HiX /> : <HiChevronLeft />}
        </button>
        <span className={s.title}>
          {step === 1 && "Log in or sign up"}
          {step === 2 && !newUser && "Log in"}
          {step === 2 && newUser && "Sign up"}
        </span>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        {step === 1 && (
          <>
            <Input
              control={control}
              name="username"
              label="Email or Phone"
              phone={new RegExp(/^\+?\d{2,}$/).test(username)}
              onChange={(e) => {
                if (e.country) {
                  setValue("country", e.country);
                }
              }}
              // onPaste={(e) => {
              //   console.log("paste ran", e.target.value);
              //   if (!new RegExp(/[a-z]/, "gi").test(e.target.value)) {
              //     // const number = Phone(e.target.value);
              //     // console.log(e.target.value, number);
              //     // if (number.isValid) {
              //     //   //
              //     // }
              //     return e.target.value.replace(/[^0-9+]/gi, "");
              //   }
              //   return e.target.value;
              // }}
            />
            <small>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
              <Link href="/" passHref target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Link>
            </small>
          </>
        )}

        {step === 2 && (
          <>
            {newUser ? (
              <>
                <Input
                  control={control}
                  name="name"
                  label="Full Name"
                  errors={errors.name}
                />
                <Input
                  control={control}
                  name="pass"
                  label="Password"
                  type="password"
                  errors={errors.pass}
                />
                <Input
                  control={control}
                  name="confirmPass"
                  label="Confirm Password"
                  type="password"
                  errors={errors.confirmPass}
                />
              </>
            ) : (
              <>
                <Input
                  control={control}
                  name="pass"
                  label="Password"
                  type="password"
                  errors={errors.pass}
                />
              </>
            )}
          </>
        )}

        <div className={s.btns}>
          <button
            className={`btn primary ${
              loading || signingUp || loggingIn ? "loading" : ""
            }`}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
