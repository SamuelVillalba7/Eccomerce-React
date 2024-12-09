import TableCart from "../TableCart/TableCart";

export default function Cart(){
    return(
        <div className="container">
            <TableCart/>
            <button className="btn btn-primary">Finalizar compra</button>
        </div>
    )
}