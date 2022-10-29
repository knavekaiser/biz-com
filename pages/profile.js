import { useContext, useEffect } from "react";
import { SiteContext } from "SiteContext";
import Head from "next/head";

import Header from "components/ui/Header";
import Footer from "components/ui/Footer";
import DomainFallback from "components/ui/domainFallback";

import { paths } from "config";

import { getSiteData } from "helpers";

export async function getServerSideProps(ctx) {
  const props = {
    siteData: await getSiteData(ctx),
  };
  if (props.siteData) {
    if (!props.siteData.siteConfig.landingPage.viewLandingPage) {
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
    <main>
      <Head>
        <meta charSet="utf-8" />
        <title>{siteData.siteTitle}</title>
        <meta property="og:title" content={siteData.siteTitle} />
      </Head>
      <Header />
      <h1>Coming Soon</h1>
      <Footer />
    </main>
  );
};

export default LandingPage;
