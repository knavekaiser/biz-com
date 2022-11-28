import { getServerSideSitemap } from "next-sitemap";
import { endpoints } from "config";

export async function getServerSideProps(ctx) {
  const { data: urls } = await fetch(endpoints.server.sitemapUrls, {
    headers: { origin: ctx.req.headers.host },
  }).then((res) => res.json());
  const fields = [
    ...urls.map((item) => ({
      loc: item,
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: undefined,
    })),
  ];

  return getServerSideSitemap(ctx, fields);
}

const Default = () => null;
export default Default;
