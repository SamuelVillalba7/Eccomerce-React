import { useCart } from "../../hooks/useCart"

export default function RowTableCart({item, flag}){
    
    const {deleteById}= useCart()
    const handleAdd=()=>{
        deleteById(item.id)
    }
    
    return(
        <tr>
            
            <th>{item.name}</th>
            <th>{item.quantity}</th>
            {flag === 1 ?(
                <>
                <th>{item.price * item.quantity}</th>
                <th onClick={handleAdd}>X</th>
                </>
            ):(
                <>
                 <th>{item.price}</th>
                 <th>{item.price * item.quantity}</th>
                </>
            )}

           
        </tr>
    )
}