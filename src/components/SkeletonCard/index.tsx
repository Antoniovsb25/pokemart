import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from "./SkeletonCard.module.css"

interface SkeletonProps {
    cards: number;
}

const SkeletonCard = ({ cards } : SkeletonProps) => {
    return Array(cards)
      .fill(0)
      .map((_, i) => (
        <div className={styles["card-skeleton"]} key={i}>
          <div className={styles["img-col"]}>
            <Skeleton width={90} height={90} />
          </div>
          <div className={styles["info-col"]}>
            <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
          </div>
        </div>
      ));
  };

export default SkeletonCard;