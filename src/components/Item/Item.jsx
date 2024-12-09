import { Link } from "react-router-dom";

export default function Item({item}){

    return(
        <>
         <h1>{item.name}</h1>  
         <Link className="btn btn-primary" to={`/item-detail/${item.id}`} >ver detalle</Link> 
        
        </>

    )


}