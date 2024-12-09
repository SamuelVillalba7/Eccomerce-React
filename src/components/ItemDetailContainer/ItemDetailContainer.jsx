import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {findProductById} from "../../service/SpringBoot/index"
import ItemDetail from "../ItemDetail/ItemDetail"

export default function  ItemDetailContainer(){

    const [product, setProduct]= useState({})
    const {id}= useParams()
    

    useEffect(()=>{
        async function fetch() {
            try{
                const res = await findProductById(id)
                setProduct(res)
            }catch(error){
                console.log(error)
            }
        }
        fetch()
    },[id])

    return(
        <ItemDetail item={product}/>
    )

}