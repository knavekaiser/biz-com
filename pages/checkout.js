import { useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import Header from "components/ui/Header";

import Footer from "components/ui/Footer";

import Checkout from "components/pages/checkout/checkout";
import DomainFallback from "components/ui/domainFallback";
import s from "components/pages/checkout/styles/checkout.module.scss";

import { endpoints } from "config";
import { AiOutlineLock } from "react-icons/ai";

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
  const { setSiteConfig, user } = useContext(SiteContext);
  useEffect(() => {
    if (siteData) {
      setSiteConfig(siteData);
    }
  }, [siteData]);
  if (!siteData) {
    return <DomainFallback />;
  }
  if (!user) {
    return (
      <main>
        <Header />
        <div className="privateRouteFallback">
          <div className="content">
            <span className="icon">
              <AiOutlineLock />
            </span>
            <span>Please log in to continue!</span>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
  return (
    <main className={s.checkout}>
      <Header />
      <Checkout />
      <Footer />
    </main>
  );
};

export default Page;
