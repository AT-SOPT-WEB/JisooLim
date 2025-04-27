import { Global } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle.js";
import Header from "./components/Header.jsx";


function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Header />
    </>
  );
}

export default App;
