import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './modules/Home/Home';
import SingleProduct from './modules/SingleProduct/SingleProduct';
import Category from './modules/Category/Category';
import CategoryProducts from './modules/CategoryProducts/CategoryProducts';
import Cart from './modules/Cart/Cart';

function App() {
  return (
   <>
  
   
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/products/:id" element={ <SingleProduct/> }></Route>
        <Route path="/category" element={ <Category/> }></Route>
        <Route path="/category/:name" element={ <CategoryProducts/> }></Route>
        <Route path="/cart" element={ <Cart/> }></Route>


        {/* <Route path="/products" element={ <Products/> }></Route> */}



       
      </Routes>
      <Footer/>
    </BrowserRouter>
    

   </>
  );
}

export default App;
