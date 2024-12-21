import { useEffect, useState } from "react"
import { useService } from "../../hooks/useService"
import RowCategory from "../RowCategory/RowCategory"
import { useNotification } from "../../hooks/useNotification"
export default function CategoryContainer(){
    const {setNotification} = useNotification()
    const {service}= useService() 
    const [categories,setCategories]= useState([])
    useEffect(()=>{
        async function asyncfunction() {
          try{
            const res = await service.findAllCategories()
            setCategories(res)
          }catch(err){
            setNotification("warning",err)
          }     
        }
        asyncfunction()

    },[service])
  
    
    return ( 
        <div className="container-fluid cont">
            <RowCategory categories={categories} />
        </div>
    )

}