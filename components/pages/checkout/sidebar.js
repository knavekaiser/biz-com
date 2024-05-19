import { Prompt } from "components/modal";
import { paths , endpoints} from "config";
import { useFetch } from "hooks";
import { useRouter } from "next/router";
import {  useContext, useCallback } from "react";
import { SiteContext } from "SiteContext";
import s from "./styles/checkout.module.scss";

const Detail = ({ label, value }) => {
  return (
    <div className={s.detail}>
      <span className={s.label}>{label}</span>
      <span className={s.value}>{value}</span>
    </div>
  );
};

const Sidebar = () => {
  const { siteConfig, cart, emptyCart } = useContext(SiteContext);
  const { post, loading } = useFetch(endpoints.placeOrder);
  const router = useRouter();
  const placeOrder = useCallback((payment_method) => {
    post({
      payment_method,
      // some other address
    })
      .then(({ data }) => {
        if (data?.success) {
          Prompt({
            type: "success",
            message: data.message,
            callback: () => {
              emptyCart();
              router.push(paths.clientArea.orders);
            },
          });
        } else if (data) {
          Prompt({ type: "error", message: data.message });
        }
      })
      .catch((err) => Prompt({ type: "error", message: err.message }));
  }, []);
  return (
    <div className={s.summary}>
      <h3>Summary</h3>

      <Detail
        label="Total item costs"
        value={
          siteConfig.siteConfig?.currency +
          " " +
          cart
            .reduce(
              (p, c) => p + (c.product.price + (c.variant?.price || 0)) * c.qty,
              0
            )
            .toLocaleString()
        }
      />
      <Detail
        label="Total Shipping"
        value={siteConfig.siteConfig?.currency + " " + "0"}
      />

      <div className={s.actions}>
        <button
          className={`btn secondary fullWidth`}
          disabled={loading}
          onClick={() => placeOrder("payNow")}
        >
          Pay Now
        </button>
        <button
          className={`btn fullWidth`}
          disabled={loading}
          onClick={() => placeOrder("cod")}
        >
          Cash On delivery
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
