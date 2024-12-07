
import './App.css'
import Filters from './filters/filters'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar'

function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>Bienvenidos</h1>} />
        <Route path='/category/:id' element={<Filters/>} />
        <Route path='/item-detail/:id' element={<h1>404</h1>} />
        <Route path='/*' element={<h1>no flaco sali</h1>} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
