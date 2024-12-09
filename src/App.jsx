
import './App.css'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'

function App() {
  

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<h1>Bienvenidos</h1>} />
          <Route path='/category' element={<Shop/>} />
          <Route path='/category/:id' element={<Shop/>} />
          <Route path='/item-detail/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/*' element={<h1>no flaco sali</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
