import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext()

export function CartProvider({children}){

    const [cart,setCart]= useState([])

    const isInCart=(id)=>{
        return cart.some((i)=>{
            i.id==id
        })
    }


    const addItem=(i,quantity)=>{
        if(!isInCart(i.id)){
            const itemCart= {
                id: i.id,
                name: i.name ,
                quantity: quantity,
                price: i.price,
            }
            setCart((prev)=>[...prev,itemCart])

        }else{

            setCart((prev)=>
                prev.map((aux) =>
                    aux.id === i.id ?
                    {...aux,quantity: aux.quantity + quantity}:
                    aux
                )
            )
        }
    }

    const deleteById=(id)=>{
        setCart((prev)=>
            prev.filter((aux)=>{
                if(aux.id!=id){
                    return aux
                }
            })
        )

    }

    const obj ={
        cart, 
        setCart,
        isInCart,
        addItem,
        deleteById       
    }


    return(
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>

    )


}