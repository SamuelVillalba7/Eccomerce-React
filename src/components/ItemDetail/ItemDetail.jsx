import { useState } from "react"
import { useCart } from "../../hooks/useCart"
import "./ItemDetail.css"

export default function ItemDetail ({item}){
    
    const [cant, setCant]= useState(1)

    const{addItem}=useCart()
    
    const handleAdd =()=>{
        addItem(item,cant)
    }
    const handleChange =(e)=>{
        const value= parseInt(e.target.value, 10)
        setCant(value)
    }

    return(
        <div className="detalle-producto">

            <div className="detalle-producto__container-img">
                <img className="detalle-producto__img" src={item.urlImage} alt=""/>
            </div>
        
        
            <div className="detalle-producto__container-text">
                <h2 className="detalle-producto__name">{item.name}</h2>
                <p className="detalle-producto__price">{item.price}</p>
                <p className="detalle-producto__description">{item.description}</p>
                <div className="detalle-producto__container-buttons">
             
                    <input type="number" className="detalle-producto__cantidad" onChange={handleChange} value={cant} min="1"/>
        
                    <button className="detalle-producto__button" onClick={handleAdd} >Add to cart</button>
                
                </div>
    
                <p className="detalle-producto__categoria"></p>

            </div>
        
        
        </div>
        
    )
}



{
    /*
     <div className="detalle-producto">
        <div className="detalle-producto__container-img">
            <img className="detalle-producto__img" src="<%:articulo.Imagen %>" alt="">
        </div>
        <div className="detalle-producto__container-text">
            <h2 className="detalle-producto__name"> <%:articulo.Nombre %></h2>
            <p className="detalle-producto__price">$<%:articulo.PrecioFormateado %></p>
            <p className="detalle-producto__description"><%:articulo.Descripcion %>
            </p>
            <div className="detalle-producto__container-buttons">
                <%--<input type="number" className="detalle-producto__cantidad" name="quantity" value="1" title="Qty" size="4" min="1" max="" step="1" placeholder="" inputmode="numeric" autocomplete="off">--%>
                <asp:TextBox ID="txtCantidad" runat="server" type="number" min="1" max="<%:articulo.Stock %>" Text="1"></asp:TextBox>
                <asp:Label ID="lblError" runat="server" Text=""></asp:Label>                <asp:Button ID="btnAgregarAlCarrito" Onclick="Button1_Click" CssClass="detalle-producto__button" runat="server" Text="Add to cart" />
            
            </div>
            <div>
                <asp:Label className="detalle-producto__categoria" ID="Label1" runat="server" Text="" ForeColor="Red" ></asp:Label>
            </div>
    
            <p className="detalle-producto__categoria">Category:<%:articulo.Categoria.Nombre%></p>

        </div>
    </div>
    */



}