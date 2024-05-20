import { useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import Head from "next/head";

import Header from "components/ui/Header";
import Footer from "components/ui/Footer";
import DomainFallback from "components/ui/domainFallback";
import mammoth from "mammoth";
import parseHtml from "html-react-parser";

import s from "components/pages/dynamic/style.module.scss";

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

  let files = null;

  await fetch(endpoints.server.getDynamicPageFiles + `/${ctx.query.path}`, {
    headers: { origin: ctx.req.headers.host },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        props.metadata = data.data;
        files = data.data.files.map((item) => item.url);
      }
    });

  if (files?.find((link) => link.endsWith(".docx"))) {
    var options = {
      // styleMap: [
      //     "p[style-name='Section Title'] => h1:fresh",
      //     "p[style-name='Subsection Title'] => h2:fresh"
      // ]
    };
    props.content = await mammoth
      .convertToHtml(
        {
          buffer: await fetch(
            `${endpoints.server.baseApiUrl}${files.find((link) =>
              link.endsWith(".docx")
            )}`
          ).then((res) => res.arrayBuffer()),
        },
        options
      )
      .then(async (result) => {
        const styles = files?.find((link) => link.endsWith(".css"))
          ? await fetch(
              `${endpoints.server.baseApiUrl}${files.find((link) =>
                link.endsWith(".css")
              )}`
            )
              .then((res) => res.text())
              .catch((err) => console.log(err))
          : null;

        return result.value
          ? (styles ? `<style scoped>${styles}</style>` : "") + result.value
          : null;
      })
      .catch((err) => {
        return null;
      });
  }

  return { props: JSON.parse(JSON.stringify(props)) };
}

const Item = ({ content, metadata, siteData }) => {
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
    <main className={`${s.dynamicPage} dynamicPage`}>
      <Head>
        <meta charSet="utf-8" />
        <title>{metadata?.title || siteData.siteConfig?.siteTitle}</title>
        {metadata?.description && (
          <>
            <meta name="description" content={metadata.description} />
            <meta property="og:description" content={metadata.description} />
          </>
        )}
        <meta
          property="og:title"
          content={metadata?.title || siteData.siteConfig?.siteTitle}
        />
        {siteData?.favicon && <link rel="icon" href={siteData.favicon} />}
      </Head>
      <Header />
      <main>{content ? parseHtml(content) : <h1>404</h1>}</main>
      <Footer />
    </main>
  );
};

export default Item;
