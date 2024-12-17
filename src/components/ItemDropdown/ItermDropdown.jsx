
import {Link} from "react-router-dom"

export default function ItemDropdown({item}){
    return(
        <li><Link className="dropdown-item" to={`/category/${item.id_category}`} >{item.name}</Link></li>
    )
}