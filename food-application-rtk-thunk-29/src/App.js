import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Success from './pages/Success';
import Home from './pages/Home';
import Error from './pages/Error';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}></Route>
      <Route path='/error' element={<Error/>}></Route>


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
