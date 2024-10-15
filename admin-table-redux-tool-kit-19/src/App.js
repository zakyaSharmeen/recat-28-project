import './App.css';
import Navbar from './component/Navbar';
import UserDetails from './component/UserDetails';
import userSlice  from "../src/store/slice/UserSlice.jsx"

function App() {
  return (
  <>
  <div>
    <Navbar/>
    <UserDetails/>
    <userSlice/>
  </div>
  </>
  );
}

export default App;
