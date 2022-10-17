import { endpoints } from "config";
import { getSiteData } from "helpers";

export default async function getServerSideProps(ctx) {
  const props = {
    siteData: await getSiteData(ctx),
  };

  return { props };
}
