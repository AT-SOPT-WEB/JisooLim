import "./styles/global.css";
import { themeClass } from "./styles/theme.css";
import Router from "./router/Router";

function App() {
  return (
    <div className={themeClass}>
      <Router />
    </div>
  );
}

export default App;
