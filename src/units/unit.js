import breakfast from "../img/breakfast.svg";
import vegan from "../img/vegan.svg";
import meat from "../img/meat.svg";
import dessert from "../img/dessert.svg";
import lunch from "../img/lunch.svg";
import chocolate from "../img/chocolate.svg";

import product1 from "../img/product1.jpg";
import product2 from "../img/product2.jpg";
import product3 from "../img/product3.jpg";
import product4 from "../img/product4.svg";
import product5 from "../img/product5.jpg";
import product6 from "../img/product6.jpg";
import salad from "../img/salad.jpg"
import product7 from "../img/product7.jpg";
import product8 from "../img/product8.jpg";
import product9 from "../img/product9.jpg";
import product10 from "../img/product10.jpg";
import product11 from "../img/product11.jpg";
import product12 from "../img/product12.jpg";
import product13 from "../img/product13.jpg";
import product14 from "../img/product14.jpg";
import product15 from "../img/product15.jpg";
import product16 from "../img/product16.jpg";
import timer from "../img/timer.svg"
import forkknife from "../img/forkknife.svg"
import heartpink from "../img/heartpink.svg"
import heartgrey from "../img/heartgrey.svg"

const categories = [
  {
    id: 1,
    title: "Breakfast",
    image: breakfast,
    bg: "linear-gradient(to top, #F3F3F3 0%, #FFFFFF 100%)",
  },
  {
    id: 2,
    title: "Vegan",
    image: vegan,
    bg: "linear-gradient(to top, rgba(142,255,142,.35) 0%, #fff 100%)",
  },
  {
    id: 3,
    title: "Meat",
    image: meat,
    bg: "linear-gradient(to top, rgba(255,170,170,.35) 0%, #fff 100%)",
  },
  {
    id: 4,
    title: "Dessert",
    image: dessert,
    bg: "linear-gradient(to top, rgba(255,231,160,.35) 0%, #fff 100%)",
  },
  {
    id: 5,
    title: "Lunch",
    image: lunch,
    bg: "linear-gradient(to top, #F3F3F3 0%, #FFFFFF 100%)",
  },
  {
    id: 6,
    title: "Chocolate",
    image: chocolate,
    bg: "linear-gradient(to top, rgba(255,170,170,.35) 0%, #fff 100%)",
  },
];

const paskeds = [
  {
    id: 1,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    selected: heartpink,
    image: product1,
    bg: "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
    timer: timer,
    fork: forkknife,
    type: "Snack",
  },
  {
    id: 2,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    selected: heartgrey,
    image: product2,
    bg: "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
    timer: timer,
    fork: forkknife,
    type: "Fish",
  },
  {
    id: 3,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    selected: heartgrey,
    image: product3,
    bg: "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
    timer: timer,
    fork: forkknife,
    type: "Breakfast",
  },
  {
    id: 4,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    selected: heartpink,
    image: product4,
    bg: "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
    timer: timer,
    fork: forkknife,
    type: "Healthy",
  },
  {
    id: 5,
    title: "Chicken Meatballs with Cream Cheese",
    selected: heartgrey,
    image: product5,
    bg: "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
    timer: timer,
    fork: forkknife,
    type: "Meat",
  },
  {
    id: 6,
    image: salad,
  },
  {
    id: 7,
    title: "Fruity Pancake with Orange & Blueberry",
    selected: heartpink,
    image: product6,
    bg: "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
    timer: timer,
    fork: forkknife,
    type: "Sweet",
  },
  {
    id: 8,
    title: "Fruity Pancake with Orange & Blueberry",
    selected: heartgrey,
    image: product7,
    bg: "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
    timer: timer,
    fork: forkknife,
    type: "Snack",
  },
  {
    id: 9,
    title: "The Best Easy One Pot Chicken and Rice",
    selected: heartgrey,
    image: product8,
    bg: "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
    timer: timer,
    fork: forkknife,
    type: "Noodles",
  },
];

const products = [
  {
    id: 1,
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    selected: heartpink,
    image: product9,
    timer: timer,
    fork: forkknife,
    type: "Healthy",
  },
  {
    id: 2,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    selected: heartgrey,
    image: product10,
    timer: timer,
    fork: forkknife,
    type: "Western",
  },
  {
    id: 3,
    title: "Healthy Japanese Fried Rice with Asparagus",
    selected: heartpink,
    image: product11,
    timer: timer,
    fork: forkknife,
    type: "Healthy",
  },
  {
    id: 4,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    selected: heartgrey,
    image: product12,
    timer: timer,
    fork: forkknife,
    type: "Eastern",
  },
  {
    id: 5,
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    selected: heartpink,
    image: product13,
    timer: timer,
    fork: forkknife,
    type: "Healthy",
  },
  {
    id: 6,
    title: "Barbeque Spicy Sandwiches with Chips",
    selected: heartgrey,
    image: product14,
    timer: timer,
    fork: forkknife,
    type: "Snack",
  },
  {
    id: 7,
    title: "Firecracker Vegan Lettuce Wraps - Spicy!",
    selected: heartpink,
    image: product15,
    timer: timer,
    fork: forkknife,
    type: "Japanese",
  },
  {
    id: 8,
    title: "Chicken Ramen Soup with Mushroom",
    selected: heartpink,
    image: product16,
    timer: timer,
    fork: forkknife,
    type: "Japanese",
  },
];

export { categories, paskeds, products };
