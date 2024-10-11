// api used
// https://www.themealdb.com/api.php  

import '../src/components/style.css';
import Meal from './components/Meal';
import { Routes, Route } from "react-router-dom";
import RecipeInfo from './components/RecipeInfo';


function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Meal />}> </Route>
        <Route path="/:MealId" element={<RecipeInfo />}> </Route>

         
       
      </Routes>
   </>
  );
}

export default App;
