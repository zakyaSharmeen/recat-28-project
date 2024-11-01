import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleBlog from './components/singleBlog/SingleBlog';
import { Home } from './pages';

import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Sidebar/>

      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/blog/:id" element={<SingleBlog />}> </Route>

         
      
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
