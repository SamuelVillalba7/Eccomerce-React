
import './App.css'

import {ServiceProvider} from './context/ServiceContext'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import SingIn from './components/SingIn/SingIn'
import { UserProvider } from './context/UserContext'
import Checkout from './components/Checkout/Checkout'
import Home from './components/home/Home'
import { NotificationProvider } from './context/NotificationContext'

function App() {
  

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <ServiceProvider>
          <UserProvider>
            <NotificationProvider>
              <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/category/:id' element={<Shop/>} />
                <Route path='/item-detail/:id' element={<ItemDetailContainer/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/singIn' element={<SingIn/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='/*' element={<h1>no flaco sali</h1>} />
              </Routes>
            </NotificationProvider>
          </UserProvider>
        </ServiceProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
