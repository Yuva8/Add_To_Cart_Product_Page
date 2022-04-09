import "./App.css";
 
 import Section from "./Section";
 import Productdescripation from "./Productdescripation";
 import { BrowserRouter,Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/" style={{marginLeft:'-730px'}}> Home page </Link> &nbsp;&nbsp;&nbsp;
      <Link to="/Productdescripation">Productdescripation </Link> &nbsp;
      <Routes>
        <Route path='/' element={<Section />}></Route>
        <Route path='/Productdescripation' element={<Productdescripation />}></Route>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
