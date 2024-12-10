import FormSingIn from "../FormSingIn/FormSingIn";
import "./SingIn.css"
export default function SingIn(){

    return(
        <>
            <div className="login-container">
                <div className="login">
                    <h2 className="login__title">Sing in</h2>
                    <p className="login__p">introduce los datos de tu cuenta</p>
                    <FormSingIn/>
                </div>
            </div>
        </>
    
    )
}