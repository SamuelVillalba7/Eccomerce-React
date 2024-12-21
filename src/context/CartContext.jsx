import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext()

export function CartProvider({children}){

    const [cart,setCart]= useState([])

    const isInCart=(id)=>{
        return cart.some((i)=>{
            return i.id==id
        })

        // const isInCart = (id) => cart.some((item) => item.id === id);
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

    const orderDetail =()=>{

        return cart.map(i => ({
            unitPrice: i.price,
            quantity: i.quantity,
            idProduct: i.id
        }));

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
    const getTotal=()=>{
        let acum = 0
        cart.forEach((i)=>{
            acum += i.price * i.quantity
        })
        return acum
    }

    const clearCart=()=>{
        setCart([])
    }

    const obj ={
        cart, 
        setCart,
        isInCart,
        addItem,
        deleteById,
        getTotal ,
        clearCart,
        orderDetail
    }


    return(
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>

    )


}