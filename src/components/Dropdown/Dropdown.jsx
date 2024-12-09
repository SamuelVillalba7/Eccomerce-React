import ItemDropdown from "../ItemDropdown/ItermDropdown";
import {findAllCategories} from "../../service/SpringBoot/index.js"
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
export default function Dropdown({name}){

    const [item,setItems]= useState([])

    useEffect(()=>{

        async function fetchFuncion() {
            
            try{
                const res = await findAllCategories()
                setItems(res)
            }catch(error){
                console.log(error)
            }
            

        }

        fetchFuncion()


    },[])

    return(
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {name}
                </button>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={`/category`} >Todas</Link></li>
                   {item.map((i)=>(
                        <ItemDropdown key={i.id} item={i}/>
                    ))}
                </ul>
            </div>
        
        </>
    )
}