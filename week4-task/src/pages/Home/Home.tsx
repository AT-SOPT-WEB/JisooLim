import Header from "../../components/Header/Header";
import Signup from "../Signup/Signup";
import { main } from "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className={main}>
        <Signup />
      </main>
    </>
  );
};

export default Home;
