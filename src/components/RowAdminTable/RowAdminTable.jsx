import { useService } from "../../hooks/useService"

import "./RowAdminTable.css"

export default function RowAdminTable({row,type, setProduct,handleRefresh}){
    const {service} = useService()  
  
    const handleAddUpdate =()=>{
        setProduct(row)
        
    }
    
    const handleAddDelete= async () => {
        try{
            await service.deleteProduct(row.id)
            handleRefresh()
            console.log("borre")
        }catch(err){
            console.log(err)
        }
    }

    const handleAddLowState = async ()=>{
        try{
            await service.lowLogic(row.id)
            handleRefresh()
        }catch(err){
            console.log(err)
        }
    }
    const handleAddHighState = async ()=>{
        try{
            await service.highLogic(row.id)
            handleRefresh()
        }catch(err){
            console.log(err)
        }
    }


    return (
        <>
                {type===1?(
                    <tr>
                        <th>{row.id}</th>
                        <th>{row.name}</th>
                        <th>{row.idCategory}</th>
                        <th>{row.description}</th>
                        <th>{row.price}</th>
                        <th>{row.urlImage}</th>
                        <th>{row.stock}</th>
                        {row.state == true ?(
                            <>
                                <th>✔</th>
                                <th><button className="btn btn-lowState" onClick={handleAddLowState}>baja</button></th>
                            </>
                        ):(
                            <>
                                <th>❌</th>
                                <th><button className="btn btn-highState" onClick={handleAddHighState}>alta</button></th>
                            </>
                        )}
                        <th><button className="btn btn-update" onClick={handleAddUpdate}>editar</button></th>
                        <th><button className="btn btn-delete" onClick={handleAddDelete}>eliminar</button></th>
                        
                    </tr>
                ):(
                    <tr>
                        <th>{row.id}</th>
                        <th>{row.name}</th>
                        <th>{row.urlImage}</th>
                        <th>{row.color}</th>
                        <th>{row.state}</th>
                    </tr>
                )}
                
           
        
        </>
    )
}