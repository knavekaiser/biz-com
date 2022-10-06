import { useContext, useEffect } from "react";
import { SiteContext } from "SiteContext";
import Header from "components/ui/Header";
import Products from "./_comp/products";
import Footer from "components/ui/Footer";
import DomainFallback from "components/ui/domainFallback";
import Head from "next/head";
import s from "./_comp/styles/products.module.scss";

export { getServerSideProps } from "hooks";

const Browse = ({ siteData }) => {
  const { setSiteConfig } = useContext(SiteContext);
  useEffect(() => {
    if (siteData) {
      setSiteConfig(siteData);
    }
  }, [siteData]);
  if (!siteData) {
    return <DomainFallback />;
  }
  return (
    <main className={s.landingPage}>
      <Head>
        <meta charSet="utf-8" />
        <title>{siteData.siteTitle}</title>
        <meta property="og:title" content={siteData.siteTitle} />
      </Head>
      <Header />
      <Products />
      <Footer />
    </main>
  );
};

export default Browse;
