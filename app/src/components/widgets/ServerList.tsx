import styles from "./servers.module.css";
import shared from "./shared.module.css";

function Server({ serverData }: { serverData: any }) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "3.5cap 2cap 3cap 3cap",
          gridTemplateColumns: "50% 50%",
          columnGap: 10,
          fontSize: 16,
        }}
      >
        <img src={serverData.image} className={styles.heroImage} />
        <div className={styles.serverName}>
          {serverData.game} &middot; {serverData.name}
        </div>
        <div
          className={`${styles.serverStatus} ${serverData.running ? styles.running : ""}`}
        >
          {serverData.running === true ? "running" : "stopped"}
        </div>
        <div className={styles.serverStats}>1, 2, 3</div>
        <div className={styles.serverActions}>Manage, restart, stop</div>
      </div>
    </>
  );
}

export type ServerDefinition = {
  game: string;
  name: string;
  image: string;
  running: boolean;
  activePlayers: number;
  memoryUse: number;
  uptime: string | null;
};

export function ServerList({
  servers,
  limit,
}: {
  servers: ServerDefinition[];
  limit?: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {servers.slice(0, limit ? limit : servers.length).map((server) => (
        <>
          <Server serverData={server} />
        </>
      ))}
    </div>
  );
}
