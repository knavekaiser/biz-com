import { useEffect, useState, useContext } from "react";
import "../styles/globals.scss";
import { Provider, SiteContext } from "SiteContext";
import NProgress from "nprogress";
import Head from "next/head";
import Router from "next/router";
import { LoadScript } from "@react-google-maps/api";

require("react-multi-carousel/lib/styles.css");

Router.onRouteChangeStart = (url) => NProgress.start();

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = (err) => NProgress.done();

NProgress.configure({
  easing: "ease",
  speed: 500,
  minimum: 0.1,
  trickleSpeed: 200,
  showSpinner: false,
  parent: "#__next .gred",
});

function resizeWindow() {
  let vh = window.innerHeight * 0.01;
  document.body.style.setProperty("--vh", `${vh}px`);
}

const Wrapper = ({ children }) => {
  const { siteConfig } = useContext(SiteContext);
  const [browser, setBrowser] = useState(false);
  useEffect(() => {
    setBrowser(true);
  }, []);
  return (
    <>
      <Head>
        <title>{siteConfig.siteTitle}</title>
      </Head>
      {children}
      {/* {browser && !window.google && (
        <LoadScript
          loadingElement={<div style={{ display: "none" }}>Loading...</div>}
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
          // libraries={["places"]}
        />
      )} */}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("resize", () => resizeWindow());
    resizeWindow();
  }, []);

  return (
    <Provider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  );
}

export default MyApp;
