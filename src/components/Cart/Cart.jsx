import "./Cart.css"
import { Link } from "react-router-dom";
import Table from "../Table/Table";

export default function Cart(){

    return(
        <div className="container container-cart">
            <Table flag={1}/>
            <Link className="btn btn-primary" to={"/checkout"}>Finalizar compra</Link>
        </div>
    )
}