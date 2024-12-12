
import { useCart } from "../../hooks/useCart"
import Table from "../Table/Table"
import "./Checkout.css"
export default function Checkout(){
    
    const{total}=useCart()
    
    
    
    return(
        <>
        <div className="container mt-5">
            <h2 className="text-center">Finalizar Compra</h2>
            <hr />

            <div className="form-section">
                <div className="step-title">1. Revisión del Carrito</div>
                <Table flag={0}/>
                <div className="total-container text-right">
                    <p className="total">Total es : $ {total()}</p>
                </div>
            </div>


            <div className="form-section">
                <div className="step-title">2. Datos del Cliente</div>
                <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <input type="text" placeholder="Ingrese su nombre"  className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Apellido</label>
                    <input type="text" placeholder="Ingrese su apellido"  className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="text" placeholder="Ingrese su email"  className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Telefono</label>
                    <input type="text" placeholder="Ingrese su telefono"  className="form-control" />
                </div>
            </div>
            <button className="btn btn-primary">Finalizar compra</button>













        </div>
        </>
    )
}








/*
<div className="container mt-5">
<h2 className="text-center">Finalizar Compra</h2>
<hr />

<!-- Revisión del Carrito -->
<div className="form-section">
    <div className="step-title">1. Revisión del Carrito</div>
    <asp:GridView ID="gvCarrito" runat="server" AutoGenerateColumns="False" CssClass="table table-hover">
        <Columns>
            <asp:BoundField DataField="Articulo" HeaderText="Producto" />
            <asp:BoundField DataField="Cantidad" HeaderText="Cantidad" />
            <asp:BoundField DataField="Precio" HeaderText="Precio Unitario" DataFormatString="{0:C}" />
            <asp:BoundField DataField="Subtotal" HeaderText="Total" DataFormatString="{0:C}" />
        </Columns>
    </asp:GridView>
    <div className="total-container text-right">
        <p>Total 1</p>
    </div>
</div>

<!-- Selección de Método de Pago -->
<div className="form-section">
    <div className="step-title">2. Método de Pago</div>
    <asp:DropDownList ID="ddlMetodoPago" runat="server" CssClass="form-control">
        <asp:ListItem Text="Seleccione un método" Value="" />
        <asp:ListItem Text="Transferencia Bancaria" Value="1" />
        <asp:ListItem Text="Tarjeta de Débito" Value="2" />
        <asp:ListItem Text="Tarjeta de Crédito" Value="3" />
    </asp:DropDownList>
</div>

<!-- Datos del Cliente -->
<div className="form-section">
    <div className="step-title">3. Datos del Cliente</div>
    <div className="form-group">
        <label className="form-label">Nombre Completo</label>
        <asp:TextBox ID="txtNombre" runat="server" CssClass="form-control" placeholder="Ingrese su nombre completo"></asp:TextBox>
    </div>
    <div className="form-group">
        <label className="form-label">Email</label>
        <asp:TextBox ID="txtEmail" runat="server" CssClass="form-control" placeholder="Ingrese su correo electrónico"></asp:TextBox>
    </div>
    <div className="form-group">
        <label className="form-label">Teléfono</label>
        <asp:TextBox ID="txtTelefono" runat="server" CssClass="form-control" placeholder="Ingrese su número de teléfono"></asp:TextBox>
    </div>
  

</div>


<!-- Opciones de Entrega -->
<div className="form-section" >
    <div className="step-title">4. Opciones de Entrega</div>
    <asp:RadioButtonList ID="rblEntrega" runat="server" CssClass="form-check" OnSelectedIndexChanged="rblEntrega_SelectedIndexChanged" AutoPostBack="True">
        <asp:ListItem Text="Retiro en tienda" Value="0" />
        <asp:ListItem Text="Envío a domicilio" Value="1" Selected="True" />
    </asp:RadioButtonList>
    <asp:TextBox ID="txtDireccionEnvio" runat="server" CssClass="form-control mt-2" placeholder="Dirección de envío" Visible="false"></asp:TextBox>
</div>

 <div className="form-section" ID="FormDatosEnvio" runat="server"  >
   <div className="form-group">
      <div className="step-title">5. Datos de Envio</div>
       <div className="form-group">
           <label className="form-label" for="ddlProvincias">Provincia</label> <br>
           <asp:DropDownList  ID="ddlProvincias" CssClass="form-control" runat="server"  >
           </asp:DropDownList>

        </div>
       <label className="form-label">Ciudad</label>
       <asp:TextBox ID="txtCiudad" runat="server" CssClass="form-control" placeholder="Ingrese su ciudad"></asp:TextBox>
   </div>
   <div className="form-group">
       <label className="form-label">Codigo Postal</label>
       <asp:TextBox ID="txtCodigoPostal" runat="server" CssClass="form-control" placeholder="Ingrese su codigo postal"></asp:TextBox>
   </div>

     <div className="form-group">
         <label className="form-label">Dirección</label>
         <asp:TextBox ID="txtDireccion" runat="server" CssClass="form-control" placeholder="Ingrese su dirección"></asp:TextBox>
     </div>

</div>

<!-- Confirmación de Compra -->
<div className="text-center mt-4">
    <asp:Button ID="btnConfirmarCompra" runat="server" CssClass="btn btn-finalizar btn-lg" Text="Confirmar Compra" OnClick="btnConfirmarCompra_Click" />
    <br />
    <asp:Label ID="lblError" runat="server" CssClass="text-danger mt-3" Visible="false"></asp:Label>
</div>
</div>

*/