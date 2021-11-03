import "./App.css";
import Switch from "./components/Switch";
import Gate from "./components/Gate";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [isToggle1, setIsToggle1] = useState(false);
  const [isToggle2, setIsToggle2] = useState(false);
  const [isToggle3, setIsToggle3] = useState(false);

  const areAllButtonOn = () => {
    if (isToggle1 && isToggle2 && isToggle3) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <div className="all-switches">
          <Switch isToggle={isToggle1} setIsToggle={setIsToggle1} />
          <Switch isToggle={isToggle2} setIsToggle={setIsToggle2} />
          <Switch isToggle={isToggle3} setIsToggle={setIsToggle3} />
        </div>
        <div className="div-gate">
          <Gate areAllButtonOn={areAllButtonOn} />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
