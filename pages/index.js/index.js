import { useContext, useEffect } from "react";
import { SiteContext } from "SiteContext";
import Header from "components/ui/Header";
import Hero from "./_comp/hero";
import TopSellers from "./_comp/topSellers";
import LiveAuction from "./_comp/liveAuction";
import Explore from "./_comp/explore";
import Footer from "components/ui/Footer";
import { RankBadge } from "components/svg";
import Head from "next/head";
import s from "./_comp/styles/landingPage.module.scss";

export { getServerSideProps } from "hooks";

const LandingPage = ({ siteData }) => {
  const { setSiteConfig } = useContext(SiteContext);
  useEffect(() => {
    if (siteData) {
      setSiteConfig(siteData);
    }
  }, [siteData]);
  return (
    <main className={s.landingPage}>
      <Header />
      <Hero />
      <TopSellers />
      <LiveAuction />
      <Explore />
      <Footer />
    </main>
  );
};

export default LandingPage;
