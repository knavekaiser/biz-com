import { useContext, useEffect, useState } from "react";
import { useFetch } from "hooks";
import { endpoints } from "config";
import s from "./styles/clientArea.module.scss";
import Layout from "./layout";
import { Prompt } from "components/modal";
import { SiteContext } from "SiteContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { get: getOrders, loading } = useFetch(endpoints.orders);

  useEffect(() => {
    getOrders()
      .then(({ data }) => {
        if (data && data.success) {
          return setOrders(data.data);
        } else if (data) {
          Prompt({ type: "error", message: data?.message });
        }
      })
      .catch((err) => Prompt({ type: "error", message: err.message }));
  }, []);
  return (
    <Layout>
      <div className={`${s.content} ${s.orders}`}>
        <h1>Orders</h1>
        <div className={s.items}>
          {orders.map((item) => (
            <Order order={item} key={item._id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const Order = ({ order }) => {
  const { siteConfig } = useContext(SiteContext);
  return (
    <div className={s.order}>
      <div className={s.products}>
        {order.products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className={s.state}>
        <p className={s.price}>
          {siteConfig.siteConfig?.currency}{" "}
          {order.products
            .reduce(
              (p, c) =>
                p + (c.product.price + (c.variant?.price || 0)) * (c.qty || 1),
              0
            )
            .toLocaleString()}
        </p>
        <p className={s.status}>
          {siteConfig?.siteConfig?.orderFields
            .find((item) => item.name === "status")
            ?.options?.find((item) => item.value === order.status)?.label ||
            order.status}
        </p>
      </div>
    </div>
  );
};

const Product = ({ product }) => {
  const { siteConfig } = useContext(SiteContext);
  return (
    <div className={s.product}>
      <div className={s.thumbnail}>
        <img src={(product.variant?.images || product.product.images)[0]} />
      </div>
      <div className={s.productDetail}>
        <h4>{product.product.title}</h4>
        {"qty" in product && <Detail label="Qty" value={product.qty} />}
        {siteConfig?.siteConfig?.orderFields
          ?.find((item) => item.name === "products")
          ?.fields.filter(
            (item) => !["product", "variant", "qty"].includes(item.name)
          )
          .map((item) => (
            <Detail
              key={item.name}
              label={item.label}
              value={product[item.name]}
            />
          ))}
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => {
  return (
    <p className={s.detail}>
      <strong>{label}</strong>: <span>{value}</span>
    </p>
  );
};

export default Orders;
