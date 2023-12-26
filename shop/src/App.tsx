
// import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Admin from './Admin/Admin';
function App() {

  return (
    <>
     <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>


     </Routes> 
    </>
  )
}

export default App
