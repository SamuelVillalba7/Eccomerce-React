
import FormLogin from "../FormLogin/FormLogin";
import "./Login.css"

export default function Login(){
    

    return(
        <div className="login-container">
            <div className="login">
                <h2 className="login__title">Login</h2>
                <p className="login__p">introduce los datos de tu cuenta</p>
                <FormLogin/>
            </div>
        </div>
    )
}