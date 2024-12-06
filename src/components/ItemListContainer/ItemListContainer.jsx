import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {findAllProducts} from "../../service/SpringBoot/index"

export default function ItemListContainer(){


    const [products, setProducts]= useState([]);

    useEffect(()=>{
       async function fetchProducts() {
        try{
            const data= await findAllProducts()
            setProducts(data)
        }catch(error){
            console.log(error)
        }
       }
        fetchProducts()
    },[])
    return(
        <div className="container">
            <ItemList products={products}/>
        
        </div>

    )

}