import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {findAllProducts, findByCategory} from "../../service/SpringBoot/index"
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"

export default function ItemListContainer(){


    const [products, setProducts]= useState([]);
    const {id}= useParams()

    useEffect(()=>{
       async function fetchProducts() {
        try{

            const fun = id ? findByCategory : findAllProducts;
            const data= await fun(id)
            setProducts(data)
        }catch(error){
            console.log(error)
        }
       }
        fetchProducts()
    },[id])

    return(
        <div className="itemListContainer">
            <ItemList products={products}/>
        </div>
    )

}