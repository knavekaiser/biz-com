import { useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import Head from "next/head";

import Header from "components/ui/Header";
import Footer from "components/ui/Footer";
import DomainFallback from "components/ui/domainFallback";

import Product from "components/pages/item/product";
import s from "components/pages/item/styles/products.module.scss";

import { endpoints, paths } from "config";

export async function getServerSideProps(ctx) {
  const { id: productId } = ctx.query;
  const props = {};

  // Get Site detail
  // Title, Logo, favicon, theme, color-scheme,

  const siteData = await fetch(endpoints.server.siteConfig, {
    headers: { origin: ctx.req.headers.host },
  }).then((res) => res.json());

  if (siteData?.success) {
    props.siteData = siteData.data;
  }

  await fetch(endpoints.server.browse + `/${productId}`, {
    headers: { origin: ctx.req.headers.host },
  })
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
  if (!siteData) {
    return <DomainFallback />;
  }
  if (!product) {
    return (
      <main className={s.landingPage}>
        <Head>
          <meta charSet="utf-8" />
          <title>{siteData.siteTitle}</title>
          <meta property="og:title" content={siteData.siteTitle} />
          {siteData?.favicon && <link rel="icon" href={siteData.favicon} />}
        </Head>
        <Header />
        <div>Sorry, Product can not be found</div>
        <Footer />
      </main>
    );
  }
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
        {siteData?.favicon && <link rel="icon" href={siteData.favicon} />}
      </Head>
      <Header />
      <Product
        product={product}
        showHomePath={siteData?.siteConfig?.landingPage?.viewLandingPage}
      />
      <Footer />
    </main>
  );
};

export default Item;
