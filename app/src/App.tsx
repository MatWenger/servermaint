import { useState } from "react";
import "./App.css";
import layout from "./layout.module.css";
import MenuBar from "./components/Menubar";
import OverviewPage from "./components/pages/OverviewPage";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("overview");

  const selectMenuItem = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className={layout.app}>
      <div className={layout.menu}>
        <MenuBar
          selectedMenuItem={activeMenuItem}
          selectMenuItem={selectMenuItem}
        />
      </div>
      <section className={layout.content}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default App;
