import Header from "./_comp/Header";
import Hero from "./_comp/hero";
import TopSellers from "./_comp/topSellers";
import LiveAuction from "./_comp/liveAuction";
import Explore from "./_comp/explore";
import Footer from "./_comp/Footer";
import { RankBadge } from "components/svg";
import s from "./_comp/styles/landingPage.module.scss";

const LandingPage = () => {
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
