import { useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import Header from "components/ui/Header";
import Product from "./_comp/product";
import Footer from "components/ui/Footer";
import { useRouter } from "next/router";
import s from "./_comp/styles/products.module.scss";

import { endpoints } from "config";

export async function getServerSideProps(ctx) {
  const { id: productId } = ctx.query;
  const props = {};

  // Get Site detail
  // Title, Logo, favicon, theme, color-scheme,

  // console.log(ctx.req.headers.host);

  const siteData = await fetch(endpoints.server.siteConfig, {
    // headers: { origin: ctx.req.headers.host },
    headers: { origin: "infinai.loca.lt" },
  }).then((res) => res.json());

  if (siteData?.success) {
    props.siteData = siteData.data;
  }

  await fetch(endpoints.server.browse + `/${productId}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        props.product = data.data;
      }
    });

  return { props: JSON.parse(JSON.stringify(props)) };
}

const Item = ({ product, siteData }) => {
  const { setSiteConfig } = useContext(SiteContext);
  useEffect(() => {
    if (siteData) {
      setSiteConfig(siteData);
    }
  }, [siteData]);
  return (
    <main className={s.landingPage}>
      <Header />
      <Product product={product} />
      <Footer />
    </main>
  );
};

export default Item;
