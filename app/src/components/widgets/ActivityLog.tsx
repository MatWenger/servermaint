import styles from "./activitylog.module.css";

export type Activity = {
  id: string;
  success: boolean;
  header: string;
  message: string;
  timestamp: string;
};

function Activity({ activity }: { activity: Activity }) {
  return (
    <div className={styles.activity}>
      <div
        className={`${styles.activityIcon} ${activity.success && styles.success}`}
      >
        {activity.success ? <>✓</> : <>❌</>}
      </div>

      <div className={styles.activityMessage}>
        <span>{activity.header}</span> <br />
        <span>{activity.message}</span>
      </div>

      <div className={styles.activityTimestamp}>{activity.timestamp}</div>
    </div>
  );
}

export function ActivityLog({
  activities,
  limit,
}: {
  activities: Activity[];
  limit?: number;
}) {
  return (
    <div className={styles.activityList}>
      {activities
        .slice(0, limit ? limit : activities.length)
        .map((activity: Activity) => (
          <Activity activity={activity} />
        ))}
    </div>
  );
}
