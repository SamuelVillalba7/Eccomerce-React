
import "./FormSingIn.css"
import {addUser} from "../../service/SpringBoot/index"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
export default function FormSingIn(){

    const [name,setName] = useState("")
    const [lastname,setLastname] = useState("")
    const [phone,setPhone] = useState("")
    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")
    const navegate= useNavigate() 

    const addHandle=()=>{
        const user ={
            name,
            lastname,
            phone,
            mail,
            password
        }
        addUser(user)
        navegate("/login")
    }
    return(
        <>
            <form className="login__form">
                    <label >Nombre</label>
                    <input type="text" className="login__input" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <label>Apellido</label>
                    <input type="text" className="login__input" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                    <label >Telefono</label>
                    <input type="text" className="login__input" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <label>Email</label>
                    <input type="text" className="login__input" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                    <label >Contraseña</label>
                    <input type="text" className="login__input" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    <button className="login__button" onClick={addHandle}>Registrar</button>
                   
                    
                </form>
        
        
        
        </>
    )
}