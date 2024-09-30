import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
   <>
<BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
          
        
      </Routes>
      <Footer />
    </BrowserRouter>
       </>
  );
}

export default App;
