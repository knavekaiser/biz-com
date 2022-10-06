import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { SiteContext } from "SiteContext";
import Header from "components/ui/Header";

import Footer from "components/ui/Footer";

import Checkout from "components/pages/checkout/checkout";
import DomainFallback from "components/ui/domainFallback";
import s from "components/pages/checkout/styles/checkout.module.scss";

import { endpoints } from "config";

export async function getServerSideProps(ctx) {
  const { product_id } = ctx.query;
  const props = {};

  // Get Site detail
  // Title, Logo, favicon, theme, color-scheme,

  const siteData = await fetch(endpoints.server.siteConfig, {
    headers: { origin: ctx.req.headers.host },
  }).then((res) => res.json());

  if (siteData?.success) {
    props.siteData = siteData.data;
  }

  if (product_id) {
    await fetch(endpoints.server.browse + `/${product_id}`, {
      headers: { origin: ctx.req.headers.host },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          props.product = data.data;
        }
      });
  }

  return { props: JSON.parse(JSON.stringify(props)) };
}

const Page = ({ product, siteData }) => {
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
      {product ? (
        <Checkout product={product} />
      ) : (
        <h2>Sorry Product can not be found</h2>
      )}
      <Footer />
    </main>
  );
};

export default Page;
