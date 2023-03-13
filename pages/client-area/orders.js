import { useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import Header from "components/ui/Header";

import Footer from "components/ui/Footer";

import DomainFallback from "components/ui/domainFallback";
import s from "components/pages/checkout/styles/checkout.module.scss";

import { endpoints } from "config";
import Orders from "components/pages/clientArea/orders";

export async function getServerSideProps(ctx) {
  const props = {};
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
      <Orders />
      <Footer />
    </main>
  );
};

export default Page;
