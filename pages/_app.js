import "../styles/globals.scss";
import { Provider } from "SiteContext";

require("react-multi-carousel/lib/styles.css");

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
