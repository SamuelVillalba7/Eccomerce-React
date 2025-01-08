import { useEffect } from "react";
import RowAdminTable from "../RowAdminTable/RowAdminTable";
import "./AdminTable.css"

export default function AdminTable({thead,tbody,type,handleRefresh,setProduct}){

    useEffect(()=>{
        console.log("tabla actualizada", tbody);
    },[tbody])


    return (
        <>
            <table className="table table-hover">
                <thead >
                    <tr >
                        {thead.map((i,index)=>(
                            <th key={index} scope="col">{i}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                        {tbody.map((i)=>(
                            <RowAdminTable key={i.id} row={i} type={type} setProduct={setProduct} handleRefresh={handleRefresh} />
                        ))}
                </tbody>



            </table>
        
        </>
    )
}