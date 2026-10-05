import HeaderCard from "../ui/HeaderCard";
import { categories } from "../units/unit";
import styles from "../ui/HeaderCard.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <h2>Categories</h2>

      <div className={styles.cards}>
        {categories.map((item) => (
          <HeaderCard
            key={item.id}
            image={item.image}
            title={item.title}
            bg={item.bg}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;
