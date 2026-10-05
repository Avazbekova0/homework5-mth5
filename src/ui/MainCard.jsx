import React from "react";
import styles from "./HeaderCard.module.scss";

const MainCard = ({
  id,
  image,
  title,
  bg,
  timer,
  fork,
  type,
  selected,
}) => {
  return (
    <div
      className={`${styles.main_card} ${
        id === 6 ? styles.main_salad : ""
      }`}
      style={{ background: bg }}
    >
      <div className={styles.main_image_wrapper}>
        <img
          className={styles.main_product}
          src={image}
          alt={title}
        />

        {id !== 6 && (
          <img
            className={styles.main_favorite}
            src={selected}
            alt="Favorite"
          />
        )}
      </div>

      <h3 className={styles.main_title}>{title}</h3>

      {id !== 6 && (
        <div className={styles.main_info}>
          <div className={styles.main_item}>
            <img src={timer} alt="Timer" />
            <p>30 Minutes</p>
          </div>

          <div className={styles.main_item}>
            <img src={fork} alt="ForkKnife" />
            <p>{type}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCard;
