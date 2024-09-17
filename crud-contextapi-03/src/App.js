import './App.css';
import Home from './Components/Home';
import {ProductProvider} from './Context';


function App() {
  return (
   <> 
    <h1>hii zakya</h1>
    <ProductProvider/>
    <Home/>

   </> 
  );
}

export default App;
