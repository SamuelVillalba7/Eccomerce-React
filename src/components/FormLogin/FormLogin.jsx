//import {loginSP} from "../../service/SpringBoot/index"
import { useState } from "react"
import "./FormLogin.css"
import { Link, useNavigate } from "react-router-dom"
import useUser from "../../hooks/useUser"
import { useService } from "../../hooks/useService"
import { useNotification } from "../../hooks/useNotification"

export default function FormLogin(){
     const {setNotification} = useNotification()
    const navigate = useNavigate()
    const [error,setError]=useState("")
    const [mail,setMail]=useState("")
    const [password,setPassword]=useState("")
    const {setUser}= useUser()
    const { service } = useService()
    const handleAdd =(event)=>{
        event.preventDefault();
        const user={
            mail,
            password
        }
        service.login(user).then((res)=>{
            setUser(res)
            setNotification("success","Bienvenido!!!")
            navigate("/shop")
        })
        .catch(()=>{   
            setError("Usuario o contraseña invalida.")
        })


    }

    return(
        <>
            <form className="login__form" onSubmit={handleAdd} >
                <label>Email</label>
                <input type="text" name="mail" value={mail} onChange={(e)=>setMail(e.target.value)} className="login__input" />
                
                <label>Contraseña</label>
                <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="login__input" />
        
                <button className="login__button " type="submit" >Ingresar</button>
                <p className="error">{error}</p>
                
                <p>¿No tienes una cuenta? <Link to="/SingIn">Regístrate</Link></p>
            </form>  
        
        
        </>
    )
}