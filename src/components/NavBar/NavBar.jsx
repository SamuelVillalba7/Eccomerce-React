import {Link} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar(){

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link " to="/">Home</Link>
                <Link className="nav-link" to="/shop">Shop</Link>
                <Link className="nav-link" to="/cart"><CartWidget /></Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/singIn">SingIn</Link>
                <Link className="nav-link" to="/admin-products">Admin</Link>
                
            </div>
            </div>
        </div>
        </nav>
    )

}