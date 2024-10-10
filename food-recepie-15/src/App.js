import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Sidebar from "./components/Sidebar/Sidebar"
import { Category, Error, Home, MealDetails } from './pages';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/meal/:id" element={<MealDetails />}></Route>
        <Route path="/meal/category/:name" element={<Category />}></Route>
        <Route path="*" element={<Error />}></Route>

          
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
