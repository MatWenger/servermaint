export type progressThreshold = {
  color: string;
  min: number;
  max: number;
};

import styles from "./progressbar.module.css";

export function ProgressBar({
  value,
  max,
  thresholds,
}: {
  value: number;
  max: number;
  thresholds?: progressThreshold[];
}) {
  let color = "#53B697";

  const pctvalue = parseInt(((value / max) * 100).toFixed(0));

  if (thresholds && thresholds.length) {
    color = (
      thresholds.filter((threshold) => {
        return pctvalue > threshold.min && pctvalue <= threshold.max;
      })[0] || { color: "#FF0000" /*default bright red in case this fails*/ }
    ).color;
  }

  return (
    <>
      <div className={styles.progressbarOuter}>
        <div
          className={styles.progressbarInner}
          style={{ backgroundColor: color, width: `${pctvalue}%` }}
        ></div>
      </div>
    </>
  );
}
