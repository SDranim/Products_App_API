import { Route, Routes } from "react-router";
import Produstlist from "./Components/Produstlist";
import './Css/Card.css'
import './Css/Details.css'
import './Css/Spinner.css'
import Details from "./Components/Details";

function App() {

  return (
    <div style={{background:'#31353d'}}>
 <Routes>
<Route path="/" element={<Produstlist/>}/>
<Route path="/products/:id" element={<Details/>}/>
 </Routes>

    </div>
  );
}

export default App;
