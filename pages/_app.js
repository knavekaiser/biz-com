import { useEffect, useState, useContext } from "react";
import "../styles/globals.scss";
import { Provider, SiteContext } from "SiteContext";
import NProgress from "nprogress";
import Head from "next/head";
import Router from "next/router";
import { ChatContextProvider } from "components/comifyChat/context";
import { ComifyChat } from "components/comifyChat";
// import { loadScript } from "helpers";
// import { endpoints } from "config";

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
  useEffect(() => {
    if (siteConfig.chatbot && !window.InfinAI) {
      // console.log("loading chatbot");
      // loadScript(endpoints.comifyChat).then(() => {
      //   if (window.InfinAI) {
      //     const { default: mountInfinAI } = window.InfinAI;
      //     mountInfinAI({
      //       baseUrl: endpoints.baseApiUrlPublic,
      //       chatbotId: siteConfig.chatbot._id,
      //       defaultUrl: siteConfig.domain,
      //     });
      //   }
      // });
    }
  }, [siteConfig]);
  return (
    <>
      <Head>
        <title>{siteConfig.siteTitle}</title>
      </Head>
      {children}
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
        <ChatContextProvider
          containerId="chatContainer"
          standaloneContainerId="chatWrapper"
        >
          <ComifyChat openAtStart={false} />
        </ChatContextProvider>
      </Wrapper>
    </Provider>
  );
}

export default MyApp;
