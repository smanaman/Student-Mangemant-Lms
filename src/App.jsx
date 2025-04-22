
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import View from './components/view';
import Edit from "./components/Edit";
function App() {
// const dispatch = useDispatch()  
//   const {StudentLmsData}=useSelector((state)=>state.StudentLmsData)
//   console.log(StudentLmsData);
  
//   useEffect(()=>{
//     dispatch(FeactData())
//     },[dispatch])

  

  
  return (
    <div>


<BrowserRouter>
 <Routes>
  {/* <Route path="/" element={<Add/>} /> */}
  <Route path="/" element={<Add/>} />
  <Route path="/view" element={<View/>} />
  <Route path="/edit" element={<Edit/>} />
  {/* <Route path="/delete/:id" element={<Delete/>} /> */}
 </Routes>

</BrowserRouter>

    </div>
  )
}

export default App
