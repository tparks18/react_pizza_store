export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const foodItems = [
  {
    name: "Pepperoni Pizza",
    img: "/img/pepperoni-pizza.jpg",
    section: "Pizza",
    price: 3,
  },
  {
    name: "Spinach Pizza",
    img: "/img/spinach-pizza.jpg",
    section: "Pizza",
    price: 2,
  },
  {
    name: "Fries",
    img: "/img/fries.jpg",
    section: "Sides",
    price: 1,
  },
  {
    name: "Hamburger",
    img: "/img/hamburger.jpg",
    section: "Sandwiches",
    price: 4,
  },
  {
    name: "Chicken Tenders",
    img: "/img/chicken-tenders.jpg",
    section: "Sides",
    price: 3,
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
