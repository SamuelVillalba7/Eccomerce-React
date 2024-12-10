import {login} from "../../service/SpringBoot/index"
import { useState } from "react"
import "./FormLogin.css"
import { Link } from "react-router-dom"
export default function FormLogin(){

    const[user,setUser]=useState({
        mail:"",
        password:""
    })
    const handleAdd =(event)=>{
        event.preventDefault();

        login(user).then((res)=>{
            //agregar al context user
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })


       
    }

    const handleChange=(event)=>{
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value // Actualiza el campo correspondiente en el estado.
        }));
    }

    return(
        <>
            <form className="login__form" onSubmit={handleAdd} >
                <label>Email</label>
                <input type="text" name="mail" value={user.mail} onChange={handleChange} className="login__input" />
                
                <label>Contraseña</label>
                <input type="text" name="password" value={user.password} onChange={handleChange} className="login__input" />
        

                <button className="login__button " type="submit" >Ingresar</button>
                
                <p>¿No tienes una cuenta? <Link to="/SingIn">Regístrate</Link></p>
            </form>  
        
        
        </>
    )
}