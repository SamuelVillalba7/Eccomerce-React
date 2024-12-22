import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import "./ItemListContainer.css"
import { useService } from "../../hooks/useService";
import { useNotification } from "../../hooks/useNotification";
export default function ItemListContainer(){

    const {setNotification} = useNotification()
    const [products, setProducts]= useState([]);
    const {id}= useParams()
    const { service} = useService()
    useEffect(()=>{
       async function fetchProducts() {
        try{

            const fun = id ? service.findByCategory : service.findAllProducts;
            const data= await fun(parseInt(id))

            setProducts(data)
        }catch{
            setNotification("warning","error al buscar los productos" )
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