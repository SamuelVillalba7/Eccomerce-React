import { useEffect, useState } from "react";
import ItemCategory from "../ItemCategory/ItemCategory";
import "./RowCategory.css"
import {useService} from "../../hooks/useService"

export default function RowCategory({categories = []}){

    const {service} = useService()
    const [category,setCategory]= useState({})
    useEffect(()=>{

        
        service.findCategoryById(service.bd == "FB"? "5tVoXdHwgXg80M8IYuHp": "1").then((res)=>{
            setCategory(res)
        })
    },[service])
    const filteredCategories = categories.filter((item) => item.id != (service.bd == "FB"? "5tVoXdHwgXg80M8IYuHp": "1"));
   
    return ( 
        <div className="row fila">
            <ItemCategory  item={category} tam={"col-12"}/> 
          
        {filteredCategories.map((item,index)=>(
            index==2 || index ==3 ? (<ItemCategory key={item.id} item={item} tam={"col-6"}/> ):(<ItemCategory key={item.id} item={item} tam={"col-3"}/> )
           
        ))}
        </div>
    )

}