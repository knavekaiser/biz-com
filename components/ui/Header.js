import { useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import { ETH } from "components/svg";
import { Searchbox, Combobox, Input } from "components/elements";
import { HiSearch } from "react-icons/hi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { paths } from "config";
import s from "./styles/header.module.scss";

const Header = () => {
  const { siteConfig } = useContext(SiteContext);
  const { control } = useForm({
    defaultValues: { currency: "eth", language: "english" },
  });

  return (
    <header className={s.header}>
      <span className={s.gred + ` gred`} />
      <div className={s.content}>
        <div className={s.northSection}>
          <Link href={paths.home}>
            <a className={s.logo}>
              <img src={siteConfig.logo} />
              <h2>{siteConfig.siteTitle}</h2>
            </a>
          </Link>
          {
            //   <Combobox
            //   options={[
            //     {
            //       label: (
            //         <>
            //           <ETH /> <span>Ethereum Mainnet</span>
            //         </>
            //       ),
            //       value: "eth",
            //     },
            //   ]}
            //   control={control}
            //   name="currency"
            // />
          }
          {
            //   <Input
            //   control={control}
            //   name="search"
            //   className={s.search}
            //   startAdornment={<HiSearch />}
            // />
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
