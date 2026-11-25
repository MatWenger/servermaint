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
      <div className={layout.menu}>
        <MenuBar
          selectedMenuItem={activeMenuItem}
          selectMenuItem={selectMenuItem}
        />
      </div>
      <section className={layout.content}>
        {activeMenuItem === "overview" ? (
          <>
            <OverviewPage></OverviewPage>
          </>
        ) : (
          <></>
        )}
      </section>
      {/* Convert to component */}
      <footer className={layout.footer}> Footer </footer>
    </div>
  );
}

export default App;
