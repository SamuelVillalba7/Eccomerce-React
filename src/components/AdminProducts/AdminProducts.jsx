import { useEffect , useState } from "react";
import AdminTable from "../AdminTable/AdminTable";
import {useService} from "../../hooks/useService"
import {useNotification} from "../../hooks/useNotification"
import FormProduct from "../FormProduct/FormProduct";

import "./AdminProducts.css"
export default function AdminProducts(){
    const {service} = useService()
    const [products , setProducts] = useState([])
    const {setNotification} = useNotification()
    const thead=["id","nombre","categoria","descripcion","precio","imagen","stock","estado","baja/alta logica","",""]
    const [product,setProduct]=useState({})       
    const [refresh,setRefresh]=useState(0)

    useEffect(()=>{
        async function fetch() {
            try{
                const res= await service.findAllProducts()
                setProducts(res)

                

            }catch{
                setNotification("warning","error al buscar los productos" )
                console.log("error find all")
            }
        
        }
        fetch()
    },[refresh])

    const handleRefresh = () => {
        setRefresh((prev) => prev+1); // Cambia el estado para forzar el re-render
        console.log(refresh)
    };
    
    return (
        <div className="container AdminProducts">
            <AdminTable thead={thead} tbody={products} type={1} setProduct={setProduct} handleRefresh={handleRefresh} />
            <FormProduct item={product} setItem={setProduct} handleRefresh={handleRefresh}/>
        
        </div>
    )
}