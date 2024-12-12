import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";

const useIsLogin = () => {
    const { user } = useUser(); // Obtenemos información del usuario desde tu hook personalizado
    const navigate = useNavigate(); // Hook para navegación

    useEffect(() => {
        if (!user?.id) { // Verifica si el usuario no está logueado
            navigate("/shop"); // Redirige a la página de inicio de sesión o tienda
        }
    }, [user, navigate]); // Se ejecuta cuando `user` o `navigate` cambien
};

export default useIsLogin;

