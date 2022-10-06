import { endpoints } from "config";

export default async function getServerSideProps(ctx) {
  const props = {};

  // Get Site detail
  // Title, Logo, favicon, theme, color-scheme,

  // console.log(ctx.req.headers.host);

  const siteData = await fetch(endpoints.server.siteConfig, {
    headers: { origin: ctx.req.headers.host },
  }).then((res) => res.json());

  if (siteData?.success) {
    props.siteData = siteData.data;
  }

  return { props: JSON.parse(JSON.stringify(props)) };
}
