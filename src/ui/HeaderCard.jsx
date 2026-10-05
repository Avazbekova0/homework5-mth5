import styles from "./HeaderCard.module.scss";

function HeaderCard({ image, title, bg }) {
  return (
    <div className={styles.card} style={{ background: bg }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default HeaderCard;