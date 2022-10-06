import { useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import Head from "next/head";
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
      <Head>
        <meta charSet="utf-8" />
        <title>{`${product.title} | ${siteData.siteTitle}`}</title>
        <meta name="description" content={product.description} />
        <meta
          property="og:title"
          content={`${product.title} | ${siteData.siteTitle}`}
        />
        <meta property="og:description" content={product.description} />
      </Head>
      <Header />
      {product ? (
        <Product product={product} />
      ) : (
        <div>Sorry, Product can not be found</div>
      )}
      <Footer />
    </main>
  );
};

export default Item;
