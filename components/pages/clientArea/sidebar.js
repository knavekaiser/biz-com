import { paths } from "config";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import s from "./styles/clientArea.module.scss";

const Sidebar = () => {
  const router = useRouter();
  const routes = useRef([
    { label: "Orders", path: paths.clientArea.orders },
    {
      label: "Payments",
      path: paths.clientArea.payments,
      disabled: true,
      tag: "Soon",
    },
    { label: "Profile", path: paths.clientArea.profile },
  ]);
  return (
    <div className={s.sidebar}>
      <div className={s.links}>
        {routes.current.map((item) => (
          <Link href={item.path} key={item.path}>
            <a
              className={`${router.pathname === item.path ? s.active : ""} ${
                item.disabled ? s.disabled : ""
              }`}
              tabIndex={item.disabled ? "1" : "0"}
            >
              {item.label}
              {item.tag && <span className={s.tag}>{item.tag}</span>}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
