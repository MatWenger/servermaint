import { useState } from "react";
import "./App.css";
import MenuBar from "./components/menubar";

function App() {
  const [count, setCount] = useState(0);
  const [activeMenuItem, setActiveMenuItem] = useState("overview");

  const selectMenuItem = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <>
      <MenuBar
        selectedMenuItem={activeMenuItem}
        selectMenuItem={selectMenuItem}
      />
    </>
  );
}

export default App;
