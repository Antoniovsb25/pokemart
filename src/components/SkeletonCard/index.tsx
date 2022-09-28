import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./SkeletonCard.module.css";

const numberOfSkeletons = new Array(24).fill(0);

const SkeletonCard = () => {
  return (
    <>
      {numberOfSkeletons.map((_) => (
        <div className={styles["card-skeleton"]}>
          <div className={styles["img-col"]}>
            <Skeleton width={90} height={90} />
          </div>
          <div className={styles["info-col"]}>
            <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonCard;
