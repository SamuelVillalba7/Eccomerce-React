import ItemDropdown from "../ItemDropdown/ItemDropdown";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import {useService} from "../../hooks/useService"
import { useNotification } from "../../hooks/useNotification";

export default function Dropdown({name}){

    const [item,setItems]= useState([])
    const {service} = useService()
    const {setNotification} = useNotification()
    useEffect(()=>{
        async function fetchFuncion() {
            
            try{
                const res = await service.findAllCategories()
                setItems(res)
            }catch(err){
                setNotification("warning", err)
            }
        }

        fetchFuncion()


    },[service])

    return(
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {name}
                </button>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={`/shop`} >Todas</Link></li>
                   {item.map((i)=>(
                        <ItemDropdown key={i.id} item={i}/>
                    ))}
                </ul>
            </div>
        
        </>
    )
}