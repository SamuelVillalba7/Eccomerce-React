import { useEffect, useState } from "react"
import { useCart } from "../../hooks/useCart"
import "./CartWidget.css"
function CartWidget(){

    const {cart, getQuantity}=useCart()
    const [quantity, setQuantity]= useState(0)
    useEffect(()=>{
        setQuantity(getQuantity())
    },[cart])

    return(
        <div className="container">
            <img className="imagen" src="https://static.vecteezy.com/system/resources/previews/019/787/045/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="hola"/>
            <span className="badge text-bg-danger">{quantity}</span>
        </div>
    )
}

export default CartWidget