import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../ItemDetail/ItemDetail"
import { useService } from "../../hooks/useService"


export default function  ItemDetailContainer(){

    const [product, setProduct]= useState({})
    const {id}= useParams()
    const { service } = useService()

    useEffect(()=>{
        async function fetch() {
            try{
                const res = await service.findProductById(id)
                setProduct(res)
            }catch(error){
                console.log(error)
            }
        }
        fetch()
    },[id,service])

    return(
        <ItemDetail item={product}/>
    )

}