import Header from "@components/Header/Header";
import { main } from "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className={main} />
    </>
  );
};

export default Home;
