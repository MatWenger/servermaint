import styles from "./servers.module.css";
import shared from "./shared.module.css";

function Server({ serverData }: { serverData: any }) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "3.5cap 2cap 5.5cap 5.5cap",
          gridTemplateColumns: "repeat(2, calc(50% - 5px)",
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
        <div className={styles.serverStats}>
          <div>
            Players <br />
            {serverData.activePlayers}/16
          </div>

          <div>
            Memory <br />
            {serverData.memoryUse}GB / 32GB
          </div>

          <div>
            Uptime <br />
            {serverData.uptime}
          </div>
        </div>
        <div className={styles.serverActions}>
          <div>
            Manage <br />
          </div>

          <div>
            Restart <br />
          </div>

          <div>
            Stop <br />
          </div>
        </div>
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
        gap: "18px",
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
