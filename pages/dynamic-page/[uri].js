import { useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import { useRouter } from "next/router";
import Head from "next/head";

import Header from "components/ui/Header";
import Footer from "components/ui/Footer";
import DomainFallback from "components/ui/domainFallback";
import { Paths } from "components/elements";
import mammoth from "mammoth";
import parseHtml from "html-react-parser";

import s from "components/pages/dynamic/style.module.scss";

import { endpoints, paths } from "config";

export async function getServerSideProps(ctx) {
  const { uri: pageId } = ctx.query;
  const props = {};

  // Get Site detail
  // Title, Logo, favicon, theme, color-scheme,

  const siteData = await fetch(endpoints.server.siteConfig, {
    headers: { origin: ctx.req.headers.host },
  }).then((res) => res.json());

  if (siteData?.success) {
    props.siteData = siteData.data;
  }

  let fileLinks = null;

  await fetch(endpoints.server.getDynamicPageFiles + `/${pageId}`, {
    headers: { origin: ctx.req.headers.host },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        fileLinks = data.data;
      }
    });

  let content = null;

  if (fileLinks?.find((link) => link.endsWith(".docx"))) {
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
            `${endpoints.server.baseApiUrl}${fileLinks.find((link) =>
              link.endsWith(".docx")
            )}`
          ).then((res) => res.buffer()),
        },
        options
      )
      .then(async (result) => {
        const styles = fileLinks?.find((link) => link.endsWith(".css"))
          ? await fetch(
              `${endpoints.server.baseApiUrl}${fileLinks.find((link) =>
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

const Item = ({ content, siteData }) => {
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
        <title>{siteData.siteTitle}</title>
        <meta property="og:title" content={siteData.siteTitle} />
        {siteData?.favicon && <link rel="icon" href={siteData.favicon} />}
      </Head>
      <Header />
      <main>{content ? parseHtml(content) : <p>Dynamic content</p>}</main>
      <Footer />
    </main>
  );
};

export default Item;
