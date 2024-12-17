import { useService } from "../../hooks/useService"

export default function Home(){
    
    const {switchToSpringBoot,switchToFirebase} =useService()

    return (
        <>
        <h1>Bienvenido que db desea usar:</h1>
        <button className="btn btn-primary" onClick={switchToFirebase}>FireBase</button>
        <button className="btn btn-primary" onClick={switchToSpringBoot}>SpringBoot</button>
        </>

    )
}