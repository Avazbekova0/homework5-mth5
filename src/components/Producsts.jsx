import React from "react";
import { products } from "../units/unit";
import ProductsCard from "../ui/ProductsCard";
import styles from "../ui/HeaderCard.module.scss";

const Products = () => {
  return (
    <section className={styles.products_container}>
      <div className={styles.products_header}>
        <h1>
          Try this delicious recipe
          <br />
          to make your day
        </h1>
      </div>

      <div className={styles.products_grid}>
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
