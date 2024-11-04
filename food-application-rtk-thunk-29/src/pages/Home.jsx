import React from 'react';
import CategoryMenu from '../components/CategoryMenu';
import FoodItem from "../components/FoodItem";
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FoodItem />
      <Cart/>
    </div>
  );
}

export default Home;
