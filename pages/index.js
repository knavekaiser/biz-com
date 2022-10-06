import { useContext, useEffect } from "react";
import { SiteContext } from "SiteContext";
import Head from "next/head";

import Header from "components/ui/Header";
import Footer from "components/ui/Footer";
import DomainFallback from "components/ui/domainFallback";

import Hero from "components/pages/index/hero";
import TopSellers from "components/pages/index/topSellers";
import LiveAuction from "components/pages/index/liveAuction";
import Explore from "components/pages/index/explore";
import s from "components/pages/index/styles/landingPage.module.scss";

export { getServerSideProps } from "hooks";

const LandingPage = ({ siteData }) => {
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
      <Hero />
      <TopSellers />
      <LiveAuction />
      <Explore />
      <Footer />
    </main>
  );
};

export default LandingPage;
