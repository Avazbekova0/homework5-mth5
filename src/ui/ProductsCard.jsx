import styles from "../ui/ProductsCard.module.scss";

const ProductsCard = ({
  image,
  title,
  timer,
  fork,
  type,
  selected,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_wrapper}>
        <img className={styles.image} src={image} alt={title} />

        {selected && (
          <img
            className={styles.favorite}
            src={selected}
            alt="Favorite"
          />
        )}
      </div>

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.info}>
        <div className={styles.item}>
          <img src={timer} alt="Timer" />
          <p>30 Minutes</p>
        </div>

        <div className={styles.item}>
          <img src={fork} alt="Fork and knife" />
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;