import { useCart } from "../../hooks/useCart"
import RowTableCart from "../RowTableCart/RowTableCart"

export default function TableCart(){
    
    const {cart}= useCart()
    
    return(
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                    </tr>
                </thead>

                <tbody>
                    {cart.map((item)=>(
                        <RowTableCart key={item.id} item={item} />
                    ))}

                </tbody>
                 
            </table>
        
        </>
    )
}