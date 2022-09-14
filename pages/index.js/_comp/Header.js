import React, { useEffect } from "react";
import { Logo, ETH } from "components/svg";
import { Searchbox, Combobox } from "components/elements";
import Link from "next/link";
import { useForm } from "react-hook-form";
import s from "./styles/header.module.scss";

const Header = () => {
  const { control, reset } = useForm();
  useEffect(() => {
    reset({
      currency: "eth",
      language: "english",
    });
  }, []);
  return (
    <header className={s.header}>
      <div className={s.ribbon}>
        <div className={s.northSection}>
          <span>
            <span className={s.label}>Etherium Contract:</span>
            <span>61a1e2b80230080b3a40e002</span>
          </span>
          <span className={s.devider} />
          <span>
            <span className={s.label}>BSC Contract:</span>
            <span>61a1e2b80230080b3a40e002</span>
          </span>
        </div>
        <div className={s.southSection}>
          <span>Get SPO</span>
          <span>-</span>
          <a href="/">Uniswap</a>
          <a href="/">Gate.io</a>
          <a href="/">PancakeSwap</a>
          <a href="/" className={s.btn}>
            Stake & Earn
          </a>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.northSection}>
          <Logo />
          <Combobox
            options={[
              {
                label: (
                  <>
                    <ETH /> <span>Ethereum Mainnet</span>
                  </>
                ),
                value: "eth",
              },
            ]}
            control={control}
            name="currency"
          />
          {
            // <Searchbox />
          }
        </div>
        <div className={s.southSection}>
          <Link href="/" className={s.onPage}>
            Explore
          </Link>
          <Link href="/">Launchpad</Link>
          <span className={s.devider} />
          <Link href="/">About us</Link>
          <Combobox
            className={"secondary"}
            control={control}
            name="language"
            options={[
              {
                label: "English",
                value: "english",
              },
              {
                label: "Arabic",
                value: "arabic",
              },
              {
                label: "German",
                value: "german",
              },
            ]}
          />
          <button className={`btn primary`}>Connect wallet</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
