
import { Link } from "react-router-dom"
import "./ItemCategory.css"

export default function ItemCategory({item,tam}){
    return(
        <>

            {tam=="col-12" ? (<div className="col-12 categoria categoria-principal">
                <div className="categoria__caja categoria__caja--principal" style={{ background: item.color || 'transparent'}}>
                    <p className="categoria__p categoria__p--principal">{item.name}</p>
                    <Link className="categoria__boton categoria__boton--principal" to={`category/${item.id_category}`}>Browse</Link>
                    <img className="categoria__img categoria__img--principal" src={item.urlImage} alt="" />
                </div>
            </div>):(<div className={`${tam} categoria categoria-uno`}   >
                <div className="categoria__caja categoria__caja--uno" style={{ background: item.color || 'transparent'}}>
                    <p className="categoria__p ">{item.name}</p>
                    <Link className="categoria__boton categoria__boton--uno" to={`category/${item.id_category}`}>Browse</Link>
                    <img className="categoria__img " src={item.urlImage} alt="imagen de" />
                </div>
            </div>)}
            
        
        </>
    

    )
}