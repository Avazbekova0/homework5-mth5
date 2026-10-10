import styles from "./HeaderCard.module.scss";

function HeaderCard({ image, title, bg }) {
  return (
    <div className={styles.card} style={{ background: bg }}>
      <img className={styles.image} src={image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

export default HeaderCard;