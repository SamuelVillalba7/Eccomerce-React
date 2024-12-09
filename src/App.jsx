
import './App.css'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Filters from './components/Filters/filters'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>Bienvenidos</h1>} />
        <Route path='/category' element={<Filters/>} />
        <Route path='/category/:id' element={<Filters/>} />
        <Route path='/item-detail/:id' element={<ItemDetailContainer/>} />
        <Route path='/*' element={<h1>no flaco sali</h1>} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
