import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from "./components/Navbar"


import { store } from './store/store';
import { Provider } from "react-redux";



function App() {
  return (
    <>
    
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>

          
        
      </Routes>
    </BrowserRouter>
   
  </Provider>
   
    
    </>
  );
}

export default App;
