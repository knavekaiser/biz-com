import { useContext } from "react";
import { SiteContext } from "SiteContext";
import { Logo, LogoStar } from "components/svg";
import Link from "next/link";
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io";
import s from "./styles/footer.module.scss";

const Footer = () => {
  const { siteConfig } = useContext(SiteContext);
  return (
    <footer className={s.footer}>
      <div className={s.watermark}>
        <img src={siteConfig.logo} />
      </div>
      <div className={s.wrapper}>
        <div className={s.branding}>
          <img src={siteConfig.logo} />
          <h2>{siteConfig.siteTitle}</h2>
        </div>
        <ul className={s.links}>
          <li>
            <h4>Menu</h4>
          </li>
          <li>
            <Link href="/">Explore</Link>
          </li>
          <li>
            <Link href="/">Loot box</Link>
          </li>
          <li>
            <Link href="/">Launchpad</Link>
          </li>
          <li>
            <Link href="/">Staking</Link>
          </li>
        </ul>
        <ul className={s.links}>
          <li>
            <h4>Community</h4>
          </li>
          <li>
            <Link href="/">Suggest feature</Link>
          </li>
          <li>
            <Link href="/">Help center</Link>
          </li>
        </ul>
        <ul className={s.links}>
          <li>
            <h4>Legal</h4>
          </li>
          <li>
            <Link href="/">Terms of use</Link>
          </li>
          <li>
            <Link href="/">Privacy policy</Link>
          </li>
          <li>
            <Link href="/">Cookie management</Link>
          </li>
        </ul>
        <ul className={`${s.links} ${s.social}`}>
          <li>
            <h4>Contact</h4>
          </li>
          <li className={s.social_icons}>
            <a href="/">
              <IoLogoYoutube />
            </a>
            <a href="/">
              <IoLogoFacebook />
            </a>
            <a href="/">
              <IoLogoWhatsapp />
            </a>
            <a href="/">
              <IoLogoLinkedin />
            </a>
            <a href="/">
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
