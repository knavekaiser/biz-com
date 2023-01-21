import { useContext } from "react";
import { SiteContext } from "SiteContext";
import Link from "next/link";
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
    </footer>
  );
};

export default Footer;
