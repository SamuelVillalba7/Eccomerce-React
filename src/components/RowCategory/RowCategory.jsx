import { useEffect, useState } from "react";
import ItemCategory from "../ItemCategory/ItemCategory";
import "./RowCategory.css"
import {useService} from "../../hooks/useService"

export default function RowCategory({categories = []}){

    const {service} = useService()
    const [category,setCategory]= useState({})
    useEffect(()=>{
        service.findCategoryById("5tVoXdHwgXg80M8IYuHp").then((res)=>{
            setCategory(res)
        })
    },[])
    const filteredCategories = categories.filter((item) => item.id !== "5tVoXdHwgXg80M8IYuHp");
    return ( 
        <div className="row fila">
            <ItemCategory  item={category} tam={"col-12"}/> 
          
        {filteredCategories.map((item,index)=>(
            index==2 || index ==3 ? (<ItemCategory key={item.id} item={item} tam={"col-6"}/> ):(<ItemCategory key={item.id} item={item} tam={"col-3"}/> )
           
        ))}
        </div>
    )

}