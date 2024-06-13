import { Prompt } from "components/modal";
import { paths, endpoints } from "config";
import { useFetch } from "hooks";
import { useRouter } from "next/router";
import { useContext, useCallback, useEffect } from "react";
import { SiteContext } from "SiteContext";
import s from "./styles/checkout.module.scss";
import { loadScript } from "helpers";

const Detail = ({ label, value }) => {
  return (
    <div className={s.detail}>
      <span className={s.label}>{label}</span>
      <span className={s.value}>{value}</span>
    </div>
  );
};

const Sidebar = () => {
  const { user, siteConfig, cart, emptyCart } = useContext(SiteContext);
  const { post, loading } = useFetch(endpoints.placeOrder);
  const router = useRouter();
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);
  const placeOrder = useCallback((paymentMethod) => {
    post({
      paymentMethod,
      cart,
      // some other address
    })
      .then(({ data }) => {
        if (data?.success) {
          if (paymentMethod === "cod") {
            Prompt({
              type: "success",
              message:
                "Your order has been placed. Thank you for shopping with us",
              callback: () => {
                emptyCart();
                router.push(paths.clientArea.orders);
              },
            });
          } else {
            const Razorpay = window.Razorpay;
            if (Razorpay) {
              const order = data.data;
              const rzp1 = new Razorpay({
                key: process.env.RAZORPAY_API_KEY,
                amount: order.amount,
                currency: "INR",
                accept_partial: false,
                image: siteConfig.logo,
                name: siteConfig.name,
                description: "Make Payment",
                order_id: order.payOrderId,
                handler: (res) => {
                  emptyCart();
                  Prompt({
                    type: "success",
                    message:
                      "Your order has been placed. Thank you for shopping with us",
                    callback: () => {
                      emptyCart();
                      router.push(paths.clientArea.orders);
                    },
                  });
                },
                modal: { ondismiss: () => {} },
                theme: { color: "#336cf9" },
                notify: { sms: true, email: true },
                reminder_enable: true,
              });
              rzp1.on("payment.failed", (res) => {
                setAddMoneyFailed(true);
                setLoading(false);
              });
              rzp1.open();
            }
          }
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

      {cart?.length > 0 && (
        <div className={s.actions}>
          <button
            className={`btn secondary fullWidth`}
            disabled={loading}
            onClick={() => placeOrder("prepaid")}
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
      )}
    </div>
  );
};

export default Sidebar;
