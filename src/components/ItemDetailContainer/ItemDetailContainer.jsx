import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../ItemDetail/ItemDetail"
import { useService } from "../../hooks/useService"

import { useNotification } from "../../hooks/useNotification"
export default function  ItemDetailContainer(){
    const {setNotification} = useNotification()
    const [product, setProduct]= useState({})
    const {id}= useParams()
    const { service } = useService()

    useEffect(()=>{
        async function fetch() {
            try{
                const res = await service.findProductById(id)
                setProduct(res)
            }catch{
                setNotification("warning","error al buscar producto" )
            }
        }
        fetch()
    },[id,service])

    return(
        <ItemDetail item={product}/>
    )

}