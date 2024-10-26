import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
       <div className='container'>
       <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/movie/:imdbId" element={<MovieDetails />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>


          
        
      </Routes>

       </div>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
