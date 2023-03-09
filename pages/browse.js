import { useContext, useEffect } from "react";
import { SiteContext } from "SiteContext";
import Head from "next/head";

import Header from "components/ui/Header";
import Footer from "components/ui/Footer";
import DomainFallback from "components/ui/domainFallback";

import Products from "components/pages/browse/products";

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
        <meta property="og:image" content={siteData.logo} />
        <meta property="og:description" content={siteData.siteDescription} />
        {siteData?.favicon && <link rel="icon" href={siteData.favicon} />}
      </Head>
      <Header />
      <Products showPath={siteData?.siteConfig?.landingPage?.viewLandingPage} />
      <Footer />
    </main>
  );
};

export default Browse;
