//App.js
import React, { useState } from "react";
import Menu from "./Menu";
import Category from "./Category";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
//calling all the categories and whenever user clicks
//on one of them then particular dish reated to the 
//category will be shown

function App() {

   //create states, fetch the data, map the data, pass the props
  //to the component

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
   //filter the products according to the category

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
