import Link from "next/link";
import { useContext } from "react";
import { SiteContext } from "SiteContext";
import { paths } from "config";
import s from "./styles/cart.module.scss";

const Sidebar = ({}) => {
  const { siteConfig, cart } = useContext(SiteContext);
  return (
    <div className={s.summary}>
      {/* <Detail
        label="Total item costs"
        value={siteConfig.siteConfig?.currency + " " + 69}
      />
      <Detail
        label="Total Shipping"
        value={siteConfig.siteConfig?.currency + " " + "12"}
      /> */}

      <p className={s.subtotal}>
        Subtotal ({cart.reduce((p, c) => p + (c.qty || 1), 0)} item):{" "}
        <strong>
          {siteConfig.siteConfig?.currency +
            " " +
            cart
              .reduce(
                (p, c) =>
                  p +
                  (c.product.price + (c.variant?.price || 0)) * (c.qty || 1),
                0
              )
              .toLocaleString()}
        </strong>
      </p>

      {cart?.length > 0 && (
        <div className={s.actions}>
          <Link href={paths.checkout}>
            <button className={`btn secondary fullWidth`}>Proceed</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
