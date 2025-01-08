import { useEffect, useState } from "react"
import "./FormProduct.css"
import { useService } from "../../hooks/useService";

export default function FormProduct({item,setItem, handleRefresh}){

    const {service}=useService()

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [urlImage, setUrlImage] = useState("");
    
    const handleAddCancel=()=>{
        setItem({})
    }
    
    async function handleAdd(){
       
        try {
            if (item.id) {
                const product={
                    id:item.id,
                    name,
                    idCategory: category,
                    description,
                    price,
                    urlImage,
                    stock,
                }
               await service.updateProduct(product);
                console.log("actualice")
            } else {
                const product={
                    name,
                    idCategory: category,
                    description,
                    price,
                    urlImage,
                    stock,
                    state:true
                }
               await service.saveProduct(product);
                console.log("guarde")
            }
            handleRefresh()
            setItem({});
        } catch {
            console.error("Error al guardar el producto");
        }
    }
    
    useEffect(()=>{
        if(item){
            setName(item.name || "");
            setCategory(item.idCategory || "");
            setPrice(item.price || "");
            setDescription(item.description || "");
            setStock(item.stock || "");
            setUrlImage(item.urlImage || "");
            
        }
    },[item])
   
    return(
        <>
            <div className="form-section FormProduct">
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" placeholder="Ingrese su nombre" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Category</label>
                    <input type="text" placeholder="Ingrese el id de categoria"  value={category} onChange={(e)=>setCategory(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Price</label>
                    <input type="text" placeholder="Ingrese el precio" value={price} onChange={(e)=>setPrice(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Description</label>
                    <input type="text" placeholder="Ingrese la descripcion" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Stock</label>
                    <input type="text" placeholder="Ingrese el stock" value={stock} onChange={(e)=>setStock(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">UrlImage</label>
                    <input type="text" placeholder="Ingrese la url" value={urlImage} onChange={(e)=>setUrlImage(e.target.value)} className="form-control" />
                </div>
                <div className="buttons">
                    <button className="btn btn-primary" onClick={handleAdd}>{item.id ? ("Editar"):("Agregar")}</button>
                    <button className="btn btn-danger" onClick={handleAddCancel}>Cancelar</button>
                </div>
        
            </div>
      
        </> 
    )
}