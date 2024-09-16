import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/'
import Movies from './pages/Movies'
import Details from './pages/Details'

function App() {

  return (
   <>
    {/* <div className='bg-red-400'>App</div> */}
    <BrowserRouter>
    <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/movies' element={<Movies/>} />
       <Route path='/moviedetails/:id' element={<Details/>} />
       <Route path='*' element={<Navigate to="/"/>} />
     </Routes>
    </BrowserRouter> 
   </>

  )
}

export default App
