import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home, Cart, CategoryProduct, ProductSingle,Search} from "./pages/index"

import Header from './components/Header/Header';


function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        {/* <Route path="/" element={<Layout />}></Route> */}
        
         
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
