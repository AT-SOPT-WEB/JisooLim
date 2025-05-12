import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
