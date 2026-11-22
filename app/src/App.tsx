import { useState } from "react";
import "./App.css";
import layout from "./layout.module.css";
import MenuBar from "./components/menubar";
import OverviewPage from "./components/pages/OverviewPage";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("overview");

  const selectMenuItem = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className={layout.app}>
      <MenuBar
        selectedMenuItem={activeMenuItem}
        selectMenuItem={selectMenuItem}
      />
      <section id="content">
        {activeMenuItem === "overview" ? (
          <>
            <OverviewPage></OverviewPage>
          </>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}

export default App;
