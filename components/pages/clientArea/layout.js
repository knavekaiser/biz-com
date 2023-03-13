import Sidebar from "./sidebar";
import s from "./styles/clientArea.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={s.clientDashboard}>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
