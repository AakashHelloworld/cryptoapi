
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {useGlobalcontext} from "./CONTEXT/Context";

import Home from "./PAGES/HOME/Home";
import Singlecoin from './PAGES/SINGLECOINS/Singlecoin';
function App() {

  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/coins/:id' element={ <Singlecoin/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
