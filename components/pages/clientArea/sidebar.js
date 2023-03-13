import { paths } from "config";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import s from "./styles/clientArea.module.scss";

const Sidebar = () => {
  const router = useRouter();
  const routes = useRef([
    { label: "Orders", path: paths.clientArea.orders },
    { label: "Payments", path: paths.clientArea.payments },
    { label: "Profile", path: paths.clientArea.profile },
  ]);
  return (
    <div className={s.sidebar}>
      <div className={s.links}>
        {routes.current.map((item) => (
          <Link href={item.path} key={item.path}>
            <a className={router.pathname === item.path ? s.active : ""}>
              {item.label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
