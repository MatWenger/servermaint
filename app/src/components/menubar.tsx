import styles from "./menubar.module.css";
import serverGlyph from "../assets/server monitor header.svg";
import { useState } from "react";
import Overview from "./menuItems/Overview";
import Servers from "./menuItems/Servers";
import Jobs from "./menuItems/Jobs";
import Backups from "./menuItems/Backups";
import Settings from "./menuItems/Settings";

export default function MenuBar({
  selectedMenuItem,
  selectMenuItem,
}: {
  selectedMenuItem: string;
  setActiveMenuItem: (menuItem: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.menuHeader}>
        <img src={serverGlyph} width={36} height={36} />
        <div className={styles.projectName}>Server Maintainer</div>
        <div className={styles.menuGlyph} onClick={handleMenuClick}>
          {/* <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
          <svg
            className={styles.hamburger}
            width="36px"
            height="36px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </header>
      <section className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
        <div className={styles.menuList}>
          <Overview
            menuStateHandler={(key) => {
              selectMenuItem(key);
            }}
          />
          <Servers
            menuStateHandler={(key) => {
              selectMenuItem(key);
            }}
          />
          <Jobs
            menuStateHandler={(key) => {
              selectMenuItem(key);
            }}
          />
          <Backups
            menuStateHandler={(key) => {
              selectMenuItem(key);
            }}
          />
          <Settings
            menuStateHandler={(key) => {
              selectMenuItem(key);
            }}
          />
        </div>
      </section>
    </div>
  );
}
