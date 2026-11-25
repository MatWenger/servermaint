import type { ServerDefinition } from "../widgets/ServerList";
import type { Activity } from "../widgets/ActivityLog";

import styles from "../pages.module.css";
import page_styles from "./overviewpage.module.css";

import PCStatus from "../widgets/PCStatus";
import Card from "../shared/Card";
import { ServerList } from "../widgets/ServerList";
import { ActivityLog } from "../widgets/ActivityLog";

//testing data

const systemStatus: SystemStatus = {
  ramAvailable: 32,
  storageAvailable: 512,

  cpuUsed: 18,
  ramUsed: 8.2,
  storageUsed: 186,
};

const serverStatus: ServerDefinition[] = [
  {
    game: "Palworld",
    name: "Friends World",
    image: "/game_heros/palworldsplash.png",
    running: true,
    activePlayers: 4,
    memoryUse: 5.4,
    uptime: "2h34m",
  },
  {
    game: "Valheim",
    name: "Northlands",
    image: "/game_heros/valheimsplash.png",
    running: false,
    activePlayers: 0,
    memoryUse: 0,
    uptime: null,
  },
];

const activities: Activity[] = [
  {
    id: "001",
    success: true,
    header: "Palworld started successfully",
    message:
      'Server "Palworld - Friends world" is now running and accepting connections',
    timestamp: new Date().toDateString(),
  },
  {
    id: "002",
    success: false,
    header: "Backup Completed",
    message: 'Created backup for server "Palworld - Friends world" (5.4GB)',
    timestamp: new Date().toDateString(),
  },
  {
    id: "003",
    success: false,
    header: "Stopping Valheim",
    message: "Shutting down Valheim server",
    timestamp: new Date().toDateString(),
  },
  {
    id: "004",
    success: true,
    header: "Backup Completed",
    message: 'Created backup for server "Valheim - Northlands" (4.2GB)',
    timestamp: new Date("").toDateString(),
  },
  {
    id: "005",
    success: true,
    header: "Backup Started",
    message: 'Creating backup for server "Valheim - Northlands"',
    timestamp: new Date("").toDateString(),
  },
];

// End testing data

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
          <PCStatus status={systemStatus} />
        </Card>
        <h2>Top Active Servers (2)</h2>
        <ServerList limit={2} servers={serverStatus} />
      </div>
      <h2> Recent Activity</h2>
      <Card>
        <ActivityLog limit={3} activities={activities} />
      </Card>
    </section>
  );
}
