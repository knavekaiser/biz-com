import { useEffect, useContext } from "react";
import { SiteContext } from "SiteContext";
import Header from "components/ui/Header";

import Footer from "components/ui/Footer";

import DomainFallback from "components/ui/domainFallback";

import { endpoints } from "config";

import Profile from "components/pages/clientArea/profile";
import { AiOutlineLock } from "react-icons/ai";
import { useRouter } from "next/router";
import { paths } from "config";

export async function getServerSideProps(ctx) {
  const props = {};
  const siteData = await fetch(endpoints.server.siteConfig, {
    headers: { origin: ctx.req.headers.host },
  }).then((res) => res.json());

  if (siteData?.success) {
    props.siteData = siteData.data;
  }

  return { props: JSON.parse(JSON.stringify(props)) };
}

const Page = ({ siteData }) => {
  const { setSiteConfig, user } = useContext(SiteContext);
  useEffect(() => {
    if (siteData) {
      setSiteConfig(siteData);
    }
  }, [siteData]);
  const router = useRouter();
  if (!siteData) {
    return <DomainFallback />;
  }
  if (!user) {
    return (
      <main>
        <Header />
        <div className="privateRouteFallback">
          <div className="content">
            <span className="icon">
              <AiOutlineLock />
            </span>
            <span>Please log in to continue!</span>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
  return (
    <main>
      <Header />
      <Profile />
      <Footer />
    </main>
  );
};

export default Page;
