
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import "./SectionProducts.css"
export default function SectionProducts(){
    return(
        <div className="sectionProducts">
            <div className="product-filter__info">
                <h2 className="product-filter__title">Shop</h2>
                <p className="product-filter__results"></p>
            </div>
            <ItemListContainer/>
        </div>
    )
}