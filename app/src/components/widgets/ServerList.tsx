import Card from "../shared/Card";
import styles from "./servers.module.css";
// import shared from "./shared.module.css";

export type ServerDefinition = {
  game: string;
  name: string;
  image: string;
  running: boolean;
  activePlayers: number;
  memoryUse: number;
  uptime: string | null;
};

function Server({ serverData }: { serverData: any }) {
  return (
    <Card>
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
        <div
          className={`${styles.serverStats} ${!serverData.running && styles.idle}`}
        >
          <div>
            Players <br />
            {serverData.activePlayers}/16
          </div>

          {serverData.running && (
            <div>
              Memory <br />
              {serverData.memoryUse}GB / 32GB
            </div>
          )}

          {serverData.running ? (
            <div>
              Uptime <br />
              {serverData.uptime}
            </div>
          ) : (
            <div>
              Last Active <br />
              Yesterday
            </div>
          )}
        </div>
        <div
          className={`${styles.serverActions} ${!serverData.running && styles.idle}`}
        >
          <button>Manage</button>
          {serverData.running && (
            <>
              <button>Restart</button>

              <button className={styles.stop}>Stop</button>
            </>
          )}
          {!serverData.running && (
            <>
              <button className={styles.start}>Start</button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}

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
