
import "./Filters.css"
import Section from "../Section/Section"
import SectionFilters from "../SectionFilters/SectionFilters"
import SectionProducts from "../SectionProducts/SectionProducts"


export default function Filters(){

    return(
    <>
        <Section/>
        <div className="filters-container">
            <SectionFilters/>
            <SectionProducts/>
        </div>
    </>
    
        
    )


}















{/* <div class="product-filter">
    <div class="product-filter__info">
        <h2 class="product-filter__title">Shop</h2>
        <p class="product-filter__results"></p>
    </div>

    <div class="product-container">

        <% foreach (dominio.Articulo art in ListaArticulo)
            { %>

        <div class="product-box" onclick="window.location.href='productoDescripcion.aspx?productoId=<%: art.Id %>'">
            <div class="product">
                <div class="product__img-container">
                    <img class="product__img" src="<%: art.Imagen %>" alt="" />
                </div>
                <div class="product__text">
                    <h2 class="product__name"><%: art.Nombre %></h2>
                    <span class="product__price">$<%: art.PrecioFormateado %></span>
                    <a href="productoDescripcion.aspx?productoId=<%: art.Id %>" class="btn2">Ver detalle</a>
                </div>
            </div>
        </div>
        <% } %>
    </div>

</div>
</div> */}