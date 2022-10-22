import { useContext, useEffect } from "react";
import { SiteContext } from "SiteContext";
import Head from "next/head";

import Header from "components/ui/Header";
import Footer from "components/ui/Footer";
import DomainFallback from "components/ui/domainFallback";
import { Paths } from "components/elements";

import Products from "components/pages/browse/products";
import s from "components/pages/browse/styles/products.module.scss";

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
    <main>
      <Head>
        <meta charSet="utf-8" />
        <title>{siteData.siteTitle}</title>
        <meta property="og:title" content={siteData.siteTitle} />
      </Head>
      <Header />
      {siteData?.siteConfig?.landingPage?.viewLandingPage && (
        <Paths
          paths={[{ label: "Home", path: "/" }, { label: "Browse" }]}
          className={s.paths}
        />
      )}
      <Products />
      <Footer />
    </main>
  );
};

export default Browse;
