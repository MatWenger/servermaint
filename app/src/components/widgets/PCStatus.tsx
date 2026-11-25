import styles from "./pcstatus.module.css";
import shared from "./shared.module.css";
import { ProgressBar } from "./shared/ProgressBar";

import type { progressThreshold } from "./shared/ProgressBar";

const thresholds: progressThreshold[] = [
  { min: 0, max: 59, color: "#53B697" },
  { min: 60, max: 79, color: "#B69F53" },
  { min: 80, max: 100, color: "#B65353" },
];

export default function PCStatus({ status }: { status: SystemStatus }) {
  return (
    <div className={styles.widgetContainer}>
      <div className={styles.widget}>
        <div className={styles.widgetIcon}>
          {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
          <svg
            className={shared.icon}
            stroke="currentColor"
            fill="#000000"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 9h6v6H9z" />
            <path d="M20 6c0-1.103-.897-2-2-2h-2V2h-2v2h-4V2H8v2H6c-1.103 0-2 .897-2 2v2H2v2h2v4H2v2h2v2c0 1.103.897 2 2 2h2v2h2v-2h4v2h2v-2h2c1.103 0 2-.897 2-2v-2h2v-2h-2v-4h2V8h-2V6zM6 18V6h12l.002 12H6z" />
          </svg>
        </div>
        <div className={styles.widgetData}>
          <span className={styles.widgetHeader}>CPU</span>
          <span className={styles.widgetValue}>18%</span>
        </div>
        <ProgressBar value={status.cpuUsed} max={100} thresholds={thresholds} />
      </div>
      <div className={styles.widget}>
        <div className={styles.widgetIcon}>
          {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
          <svg
            className={shared.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect y="119" width="512" height="274" />

            <g>
              <rect x="64" y="24" width="43" height="69" rx="18" />
              <rect x="149" y="24" width="43" height="69" rx="18" />
              <rect x="235" y="24" width="43" height="69" rx="18" />
              <rect x="320" y="24" width="43" height="69" rx="18" />
              <rect x="405" y="24" width="43" height="69" rx="18" />

              <rect x="64" y="420" width="43" height="68" rx="18" />
              <rect x="149" y="420" width="43" height="68" rx="18" />
              <rect x="235" y="420" width="43" height="68" rx="18" />
              <rect x="320" y="420" width="43" height="68" rx="18" />
              <rect x="405" y="420" width="43" height="68" rx="18" />
            </g>
          </svg>
        </div>
        <div className={styles.widgetData}>
          <span className={styles.widgetHeader}>RAM</span>
          <span className={styles.widgetValue}>
            {status.ramUsed} GB / {status.ramAvailable} GB
          </span>
        </div>
        <ProgressBar
          value={status.ramUsed}
          max={status.ramAvailable}
          thresholds={thresholds}
        />
      </div>
      <div className={styles.widget}>
        <div className={styles.widgetIcon}>
          {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
          <svg
            className={shared.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="2 3 20 18"
          >
            <path
              d="M18 7H18.01M15 7H15.01M18 17H18.01M15 17H15.01M6 10H18C18.9319 10 19.3978 10 19.7654 9.84776C20.2554 9.64477 20.6448 9.25542 20.8478 8.76537C21 8.39782 21 7.93188 21 7C21 6.06812 21 5.60218 20.8478 5.23463C20.6448 4.74458 20.2554 4.35523 19.7654 4.15224C19.3978 4 18.9319 4 18 4H6C5.06812 4 4.60218 4 4.23463 4.15224C3.74458 4.35523 3.35523 4.74458 3.15224 5.23463C3 5.60218 3 6.06812 3 7C3 7.93188 3 8.39782 3.15224 8.76537C3.35523 9.25542 3.74458 9.64477 4.23463 9.84776C4.60218 10 5.06812 10 6 10ZM6 20H18C18.9319 20 19.3978 20 19.7654 19.8478C20.2554 19.6448 20.6448 19.2554 20.8478 18.7654C21 18.3978 21 17.9319 21 17C21 16.0681 21 15.6022 20.8478 15.2346C20.6448 14.7446 20.2554 14.3552 19.7654 14.1522C19.3978 14 18.9319 14 18 14H6C5.06812 14 4.60218 14 4.23463 14.1522C3.74458 14.3552 3.35523 14.7446 3.15224 15.2346C3 15.6022 3 16.0681 3 17C3 17.9319 3 18.3978 3.15224 18.7654C3.35523 19.2554 3.74458 19.6448 4.23463 19.8478C4.60218 20 5.06812 20 6 20Z"
              stroke="currentColor"
              fill="transparent"
              viewBox="0 0 18 16"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className={styles.widgetData}>
          <span className={styles.widgetHeader}>Storage</span>
          <span className={styles.widgetValue}>
            {status.storageUsed} GB / {status.storageAvailable} GB
          </span>
        </div>
        <ProgressBar
          value={status.storageUsed}
          max={status.storageAvailable}
          thresholds={thresholds}
        />
      </div>
    </div>
  );
}
