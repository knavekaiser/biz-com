import { endpoints } from "config";

export const getSiteData = async (ctx) => {
  // Get Site detail
  // Title, Logo, favicon, theme, color-scheme,

  // console.log(ctx.req.headers.host);

  const siteData = await fetch(endpoints.server.siteConfig, {
    headers: { origin: ctx.req.headers.host },
  }).then((res) => res.json());

  return siteData?.success ? siteData.data : null;
};
