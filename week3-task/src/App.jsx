import { Global } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle.js";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
    </>
  );
}

export default App;
