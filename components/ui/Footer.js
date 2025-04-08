import { useContext } from "react";
import { SiteContext } from "SiteContext";
import Link from "next/link";
import s from "./styles/footer.module.scss";
import Image from "next/image";

const Footer = () => {
  const { siteConfig } = useContext(SiteContext);
  return (
    <footer
      className={s.footer}
      style={{
        background: siteConfig?.siteConfig?.theme?.footerColor,
      }}
    >
      <div className={s.wrapper}>
        {(siteConfig?.siteConfig?.footer?.sections || []).map((section) => (
          <ul
            key={section.title}
            className={`${s.links} ${s[section.viewStyle]}`}
          >
            <li>
              <h4>{section.title}</h4>
            </li>
            {section.items.map((item) => (
              <li key={item.label}>
                {item.type === "dynamicPage" && (
                  <Link href={"/dynamic-page" + item.href}>{item.label}</Link>
                )}
                {item.type === "internalLink" && (
                  <Link href={item.href}>{item.label}</Link>
                )}
                {item.type === "externalLink" && (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className={s.branding}>
        {siteConfig.logo && (
          <Image
            src={process.env.NEXT_PUBLIC_R2_URL + siteConfig.logo}
            height={48}
            width={48}
            alt="Site Logo"
          />
        )}
        <h2>{siteConfig.siteConfig?.siteTitle}</h2>
      </div>
    </footer>
  );
};

export default Footer;
