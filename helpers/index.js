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

export function loadScript(src) {
  return new Promise((res, rej) => {
    if (!document.querySelector(`script[src="${src}"]`)) {
      const scr = document.createElement("script");
      scr.src = src;
      document.body.appendChild(scr);
      scr.onload = () => res(true);
      scr.onerror = () => rej(true);
    } else {
      res(true);
    }
  });
}
