import { useContext, useEffect } from "react";
import { SiteContext } from "SiteContext";
import Head from "next/head";

import Header from "components/ui/Header";
import Footer from "components/ui/Footer";
import DomainFallback from "components/ui/domainFallback";
import Categories from "components/ui/categories";

import Hero from "components/pages/index/hero";
import Shelves from "components/pages/index/shelves";
import s from "components/pages/index/styles/landingPage.module.scss";
import { paths } from "config";

import { getSiteData } from "helpers";

export async function getServerSideProps(ctx) {
  const props = {
    siteData: await getSiteData(ctx),
  };
  if (props.siteData) {
    if (!props.siteData.siteConfig?.landingPage?.viewLandingPage) {
      return {
        redirect: {
          destination: paths.browse,
          permanent: false,
        },
      };
    }
  }

  return { props };
}

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
        <title>{siteData.siteConfig?.siteTitle}</title>
        <meta property="og:title" content={siteData.siteConfig?.siteTitle} />
        <meta property="og:image" content={siteData.logo} />
        <meta
          property="description"
          content={siteData.siteConfig?.siteDescription}
        />
        <meta
          property="og:description"
          content={siteData.siteConfig?.siteDescription}
        />
        {siteData?.favicon && <link rel="icon" href={siteData.favicon} />}
      </Head>
      <Header />
      <Hero />
      <Categories />
      <Shelves />
      <Footer />
    </main>
  );
};

export default LandingPage;
