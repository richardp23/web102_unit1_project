import "./App.css";
import BUF_logo from "/src/assets/logos/BUF.svg";

import Schedule from "./components/Schedule.jsx";

function App() {
  return (
    <>
      <header>
        <h1>Buffalo Bills Schedule 2023</h1>
        <img src={BUF_logo} alt={"BUF Logo"} />
      </header>

      <Schedule />
    </>
  );
}

export default App;
