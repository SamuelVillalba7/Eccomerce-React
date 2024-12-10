
import "./FormSingIn.css"
import {addUser} from "../../service/SpringBoot/index"
export default function FormSingIn(){


    const addHandle=()=>{
        addUser()
    }
    return(
        <>
            <form className="login__form">
                    <label >Nombre</label>
                    <input type="text" className="login__input" />
                    <label>Apellido</label>
                    <input type="text" className="login__input" />
                    <label >Telefono</label>
                    <input type="text" className="login__input" />
                    <label>Email</label>
                    <input type="text" className="login__input" />
                    <label >Contraseña</label>
                    <input type="text" className="login__input" />

                    <button className="login__button" onClick={addHandle}>Registrar</button>
                   
                    
                </form>
        
        
        
        </>
    )
}