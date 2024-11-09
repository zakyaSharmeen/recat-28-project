import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './component/MainPage';
import MealInfo from './component/MealInfo';



function App() {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/:mealid" element={<MealInfo />}></Route>

          
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
