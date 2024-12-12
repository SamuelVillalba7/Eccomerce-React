import { useCart } from "../../hooks/useCart"
import RowTableCart from "../RowTableCart/RowTableCart"

export default function Table({flag}){
    
    const {cart}= useCart()

    return(
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Articulo</th>
                        <th scope="col">Cantidad</th>
                        {flag === 1 ? (
                            <>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Eliminar</th>
                            </>
                            
                            ):(
                            <>
                                <th scope="col">Precio Unitario</th> 
                                <th scope="col">Total</th>
                            </>
                            )}
                        
                       
                        
                        
                    </tr>
                </thead>

                <tbody>
                    {cart.map((item)=>(
                        <RowTableCart key={item.id} item={item} flag={flag} />
                    ))}

                </tbody>
                 
            </table>
        
        </>
    )
}