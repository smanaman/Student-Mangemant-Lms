
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import View from './components/view';
import Edit from "./components/Edit";
import Singin from "./components/Singin";
import Login from "./components/Login";
function App() {


  
  return (
    <div>


<BrowserRouter>
 <Routes>
  {/* <Route path="/" element={<Add/>} /> */}
  <Route path="/" element={<Add/>} />
  <Route path="/view" element={<View/>} />
  <Route path="/edit" element={<Edit/>} />
  <Route path="/singin" element={<Singin/>} />
  <Route path="/login" element={<Login/>} />

 </Routes>

</BrowserRouter>

    </div>
  )
}

export default App
