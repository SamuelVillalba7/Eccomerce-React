import Dropdown from "../components/Dropdown/Dropdown";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


export default function Filters(){

    return(
    
    <div className="container">
        <ItemListContainer/>
        <Dropdown name={"categories"}/>
    </div>
        
    )


}