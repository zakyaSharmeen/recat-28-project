import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import {About} from "./pages/About.jsx"
import Country from "./pages/Country.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

import {Header} from "./components/ui/Header.jsx"
import {Footer} from "./components/ui/Footer.jsx"
import CountryDetails from './components/layout/CountryDetails.jsx';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/country" element={<Country />}></Route>
        <Route path="/country/:id" element={<CountryDetails />}></Route>


        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>


         
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
