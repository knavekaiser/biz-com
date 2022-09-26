import { useContext, useEffect } from "react";
import { SiteContext } from "SiteContext";
import Header from "components/ui/Header";
import Products from "./_comp/products";
import Footer from "components/ui/Footer";
import s from "./_comp/styles/products.module.scss";

export { getServerSideProps } from "hooks";

const Browse = ({ siteData }) => {
  const { setSiteConfig } = useContext(SiteContext);
  useEffect(() => {
    if (siteData) {
      setSiteConfig(siteData);
    }
  }, [siteData]);
  return (
    <main className={s.landingPage}>
      <Header />
      <Products />
      <Footer />
    </main>
  );
};

export default Browse;
