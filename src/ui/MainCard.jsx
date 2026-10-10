import styles from "./MainCard.module.scss";

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
      className={`${styles.card} ${
        id === 6 ? styles.salad : ""
      }`}
      style={{ background: bg }}
    >
      <div className={styles.image_wrapper}>
        <img className={styles.image} src={image} alt={title} />

        {id !== 6 && (
          <img
            className={styles.favorite}
            src={selected}
            alt="Favorite"
          />
        )}
      </div>

      <h3 className={styles.title}>{title}</h3>

      {id !== 6 && (
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
      )}
    </div>
  );
};

export default MainCard;