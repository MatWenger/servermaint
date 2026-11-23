import styles from "../pages.module.css";
import Card from "../shared/Card";
import PCStatus from "../widgets/PCStatus";
import { ServerList } from "../widgets/ServerList";
import page_styles from "./overviewpage.module.css";

//testing data
import type { ServerDefinition } from "../widgets/ServerList";
const serverStatus: ServerDefinition[] = [
  {
    game: "Palworld",
    name: "Friends World",
    image: "assets/palworld.png",
    running: true,
    activePlayers: 4,
    memoryUse: 5.4,
    uptime: "2h34m",
  },
  {
    game: "Valheim",
    name: "Northlands",
    image: "assets/valheim.png",
    running: false,
    activePlayers: 0,
    memoryUse: 0,
    uptime: null,
  },
];

export default function OverviewPage({}: {}) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1>Overview</h1>
          <span>Your servers at a glance</span>
        </div>
        <button className={page_styles["btn-addServer"]}>+ Add Server</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Card>
          <PCStatus />
        </Card>
        <h2>Servers</h2>
        <Card>
          <ServerList limit={2} servers={serverStatus} />
        </Card>
      </div>
    </section>
  );
}
