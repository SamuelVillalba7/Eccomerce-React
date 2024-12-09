import Dropdown from "../Dropdown/Dropdown"
import "./SectionFilters.css"

export default function SectionFilters(){
    return(
        <div className="section-filters">
            <div className="filter__search-container">
                <input className="filter__search-input" placeholder="Busca aqui" />
                <button className="filter__search-button"></button>
            </div>
            <br />

            <div className="filter__category">
                <p className="filter__category-text">Filtrar productos</p>
                <Dropdown name={"categories"}/>

            </div>
        </div>





    )
}