import styles from "./shared.module.css";

export default function Card({ children }: { children?: any }) {
  if (children === null) {
    return <></>;
  }

  return <div className={styles.card}>{children}</div>;
}
