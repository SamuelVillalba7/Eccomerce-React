import { Link } from "react-router-dom";
import "./Item.css"

export default function Item({item}){

    return(
        <>
            <div className="product-box">
            <div className="product">
                <div className="product__img-container">
                    <img className="product__img" src={item.urlImage} alt="" />
                </div>
                <div className="product__text">
                    <h2 className="product__name">{item.name}</h2>
                    <span className="product__price">{item.price}</span>
                    <Link className="btn2" to={`/item-detail/${item.id}`} >ver detalle</Link>
                </div>
            </div>
        </div>
        
        </>

    )


}