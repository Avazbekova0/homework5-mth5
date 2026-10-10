import React from "react";
import { paskeds } from "../units/unit";
import MainCard from "../ui/MainCard";
import styles from "../ui/MainCard.module.scss";

const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>Simple and tasty recipes</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqut enim ad minim
        </p>
      </div>

      <div className={styles.cards}>
        {paskeds.map((item) => (
          <MainCard
            key={item.id}
            id={item.id}
            selected={item.selected}
            image={item.image}
            title={item.title}
            bg={item.bg}
            timer={item.timer}
            fork={item.fork}
            type={item.type}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;