import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import "./ItemListContainer.css"
import { useService } from "../../hooks/useService";

export default function ItemListContainer(){


    const [products, setProducts]= useState([]);
    const {id}= useParams()
    const { service} = useService()
    useEffect(()=>{
       async function fetchProducts() {
        try{

            const fun = id ? service.findByCategory : service.findAllProducts;
            const data= await fun(parseInt(id))

            setProducts(data)
        }catch(error){
            console.log(error)
        }
       }
        fetchProducts()
    },[id,service])

    return(
        <div className="itemListContainer">
            <ItemList products={products}/>
        </div>
    )

}