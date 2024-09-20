import './App.css';
import Navbar from './Components/Navbar';
import Products from './Pages/Products';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Cart from './Pages/Cart';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Products></Products>} />
          <Route path="/cart" element={<Cart></Cart>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
