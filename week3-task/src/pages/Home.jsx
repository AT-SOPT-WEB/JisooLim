import { useState } from "react";
import Header from "../components/Header/Header";
import GithubSearch from "./GithubSearch";
import NumberBaseball from "./NumberBaseball";

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState("github");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Header onMenuClick={handleMenuClick} selectedMenu={selectedMenu} />
      <main>
        {selectedMenu === "github" && <GithubSearch />}
        {selectedMenu === "baseball" && <NumberBaseball />}
      </main>
    </>
  );
};

export default Home;
