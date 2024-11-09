import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage, CategoryProduct, ProductSingle, CartPage, SearchPage} from "./pages/index"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import { Provider } from 'react-redux'
import { store } from './store/store';
import Checkout from './components/Checkout/Checkout';




function App() {
  return (
   <>
    <Provider store={store}>
    <BrowserRouter>
    <Header/>
    <Sidebar/>

      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/product/:id" element={<ProductSingle />}> </Route>
        <Route path="/cart" element={<CartPage />}> </Route>

        <Route path="/search/:searchTearm" element={<SearchPage />}> </Route>




        

        <Route path="/checkout" element={<Checkout />}> </Route>

          
       
      </Routes>

      <Footer/>
    </BrowserRouter>
    
  </Provider>,
   
   </>
  );
}

export default App;
