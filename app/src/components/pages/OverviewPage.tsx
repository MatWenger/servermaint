import styles from "../pages.module.css";

export default function OverviewPage({}: {}) {
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1>Overview</h1>
          <h2>Your servers at a glance</h2>
        </div>
        <div>+ Add Server</div>
      </div>
    </section>
  );
}
