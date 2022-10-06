import { useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import Header from "components/ui/Header";
import Checkout from "./_comp/checkout";
import Footer from "components/ui/Footer";
import { useRouter } from "next/router";
import s from "./_comp/styles/checkout.module.scss";

import { endpoints } from "config";

export async function getServerSideProps(ctx) {
  const { product_id } = ctx.query;
  const props = {};

  // Get Site detail
  // Title, Logo, favicon, theme, color-scheme,

  const siteData = await fetch(endpoints.server.siteConfig, {
    // headers: { origin: ctx.req.headers.host },
    headers: { origin: "infinai.loca.lt" },
  }).then((res) => res.json());

  if (siteData?.success) {
    props.siteData = siteData.data;
  }

  if (product_id) {
    await fetch(endpoints.server.browse + `/${product_id}`)
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
  return (
    <main className={s.checkout}>
      <Header />
      <Checkout product={product} />
      <Footer />
    </main>
  );
};

export default Page;
