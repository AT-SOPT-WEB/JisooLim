import { Global } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle.js";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Home />
    </>
  );
}

export default App;
