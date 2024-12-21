
import {Link} from "react-router-dom"

export default function ItemDropdown({item}){

    return(
        <li><Link className="dropdown-item" 
     to={ item.id_category? `/category/${item.id_category}`:`/category/${item.id}`}
        >{item.name}</Link></li>
    )
}