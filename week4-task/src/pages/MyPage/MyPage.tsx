import { Outlet } from "react-router-dom";
import Header from "@components/Header/Header";

const MyPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MyPage;
