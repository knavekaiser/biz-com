import { useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import Header from "components/ui/Header";

import Footer from "components/ui/Footer";

import Content from "components/pages/compare/products";
import DomainFallback from "components/ui/domainFallback";
import s from "components/pages/compare/style.module.scss";

import { endpoints } from "config";

export async function getServerSideProps(ctx) {
  const props = {};

  // Get Site detail
  // Title, Logo, favicon, theme, color-scheme,

  const siteData = await fetch(endpoints.server.siteConfig, {
    headers: { origin: ctx.req.headers.host },
  }).then((res) => res.json());

  if (siteData?.success) {
    props.siteData = siteData.data;
  }

  return { props: JSON.parse(JSON.stringify(props)) };
}

const Page = ({ siteData }) => {
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
    <main className={s.checkout}>
      <Header />
      <Content />
      <Footer />
    </main>
  );
};

export default Page;
