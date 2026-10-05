import React from "react";
import styles from "./HeaderCard.module.scss";

const ProductsCard = ({
  image,
  title,
  timer,
  fork,
  type,
  selected,
}) => {
  return (
    <div className={styles.products_card}>
      <div className={styles.products_image_wrapper}>
        <img
          className={styles.products_image}
          src={image}
          alt={title}
        />

        {selected && (
          <img
            className={styles.products_favorite}
            src={selected}
            alt="Favorite"
          />
        )}
      </div>

      <h3 className={styles.products_title}>{title}</h3>

      <div className={styles.products_info}>
        <div className={styles.products_item}>
          <img src={timer} alt="Timer" />
          <p>30 Minutes</p>
        </div>

        <div className={styles.products_item}>
          <img src={fork} alt="Fork and knife" />
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
