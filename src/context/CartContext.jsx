import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext()

export function CartProvider({children}){

    const [cart,useCart]= useState([])

    const obj ={
        cart, 
        useCart,
       
    }


    return(
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>

    )


}