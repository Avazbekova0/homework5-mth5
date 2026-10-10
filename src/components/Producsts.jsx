import React from "react";
import { products } from "../units/unit";
import ProductsCard from "../ui/ProductsCard";
import styles from "../ui/ProductsCard.module.scss";

const Products = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>
          Try this delicious recipe
          <br />
          to make your day
        </h1>
      </div>

      <div className={styles.cards}>
        {products.map((item) => (
          <ProductsCard
            key={item.id}
            image={item.image}
            title={item.title}
            selected={item.selected}
            timer={item.timer}
            fork={item.fork}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;