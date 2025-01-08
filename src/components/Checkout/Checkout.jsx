
import { useCart } from "../../hooks/useCart"
import Table from "../Table/Table"
import { useService } from "../../hooks/useService"
import { useState } from "react"

import useUser from "../../hooks/useUser"
import "./Checkout.css"
import { useNavigate } from "react-router-dom"
import { useNotification } from "../../hooks/useNotification"

export default function Checkout(){
    const {setNotification} = useNotification()
    const {service}= useService()
    const [name,setName] = useState("")
    const [lastname,setLastname] = useState("")
    const [phone,setPhone] = useState("")
    const [mail,setMail] = useState("")
    const navegate = useNavigate()
    const {user} = useUser()
    const {getTotal,orderDetail,cart,clearCart}= useCart()
     

      async function handleAdd(){
        const idUser = user.id
        const total = getTotal()
        const orderDetails = orderDetail()

   
        const userAux={
            name,
            lastname,
            phone,
            mail
        }
           



        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Meses van de 0 a 11
        const dd = String(today.getDate()).padStart(2, '0');
    
        
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    
        const order = {
            idUser: idUser,
            totalAmount: total,
            paymentMethod:"credito",
            orderDetails: orderDetails,
            date: formattedDate,
            userAux,
            getTotal,
            clearCart,
            cart
        }
        
        try{
            const res = await service.createOrder(order)
            const resJson = await JSON.stringify(res)
            setNotification("success",resJson)
        }catch(err){
            setNotification("warning",err)
        }
    
        navegate("/")
    }


    
    return(
        <>
        <div className="container mt-5">
            <h2 className="text-center">Finalizar Compra</h2>
            <hr />

            <div className="form-section">
                <div className="step-title">1. Revisión del Carrito</div>
                <Table flag={0}/>
                <div className="total-container text-right">
                    <p className="total">Total es : $ {getTotal()}</p>
                </div>
            </div>


            <div className="form-section">
                <div className="step-title">2. Datos del Cliente</div>
                <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <input type="text" placeholder="Ingrese su nombre" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Apellido</label>
                    <input type="text" placeholder="Ingrese su apellido" value={lastname} onChange={(e)=>setLastname(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="text" placeholder="Ingrese su email" value={mail} onChange={(e)=>setMail(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Telefono</label>
                    <input type="text" placeholder="Ingrese su telefono" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" />
                </div>
            </div>
            <button className="btn btn-primary" onClick={handleAdd}>Finalizar compra</button>




        </div>
        </>
    )
}








