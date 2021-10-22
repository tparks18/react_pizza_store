export const foodItems = [
  {
    name: "Pepperoni Pizza",
    img: "/img/pepperoni-pizza.jpg",
    section: "Pizza"
  },
  {
    name: "Spinach Pizza",
    img: "/img/spinach-pizza.jpg",
    section: "Pizza"
  },
  {
    name: "Fries",
    img: "/img/fries.jpg",
    section: "Sides"
  },
  {
    name: "Hamburger",
    img: "/img/hamburger.jpg",
    section: "Sandwiches"
  },
  {
    name: "Chicken Tenders",
    img: "/img/chicken-tenders.jpg",
    section: "Sides"
  },
];


export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});