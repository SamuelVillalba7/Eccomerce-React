export const services={
    findAllCategoriesSP,
    findAllProductsSP,
    findByCategorySP,
    findProductByIdSP,
    loginSP,
    addUserSP
}


export async function findAllProductsSP(){
    const url = "http://localhost:8080/product/findAll";
    const method= {
        method: "GET"
    }

    try{
        const res= await fetch(url,method)
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const resJSON = await res.json()
        return resJSON
    }catch(error){
        console.log(error)
    }
   

}

export async function findByCategorySP(id){
    const url = `http://localhost:8080/product/findByCategory/${id}`;
    
    try{
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const resJSON = await res.json()
        return resJSON
    }catch(error){
        console.log(error)
    }

}


export async function findAllCategoriesSP() {
    
    const url = "http://localhost:8080/category/findAll";


    try{
        const res = await fetch(url)
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const resJSON = await res.json()
        return resJSON
    }catch(error){
        console.log(error)
    }

}


export async function findProductByIdSP(id) {
    
    const url= `http://localhost:8080/product/findById/${id}`

    try{
        const res = await fetch(url)
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const resJSON = await res.json()
        return resJSON

    }catch(error){
        console.log(error)
    }
}



export async function addUserSP(user) {

    const aux={
        "name": user.name,
        "lastname":user.lastname,
        "mail":user.mail,
        "phone":user.phone,
        "password":user.password,
        "admin": 0
    }
    const url = "http://localhost:8080/user/save"
    
    const config={
        method:"POST",
        body: JSON.stringify(aux),
        headers: {
            "Content-Type": "application/json",
          }
    }

    try{
       const response = await fetch(url,config)
       if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    }catch(error){
        console.log(error)
    }

    
}


export async function loginSP(obj){

    const user = {
        mail:obj.mail,
        password: obj.password
    }
    const url = "http://localhost:8080/user/login"
    const config= {
        method:"POST",
        body: JSON.stringify(user), 
        headers: {
            "Content-Type": "application/json",
          }
    }

        const response= await fetch(url,config)
        if(!response.ok){
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const data = await response.json()

        return data


}


export async function createOrderSP(order) {

    const url = "http://localhost:8080/order/save"
    const config = {
        method:"POST",
        body: JSON.stringify(order), 
        headers: {
            "Content-Type": "application/json",
          }
    }

    const response = await fetch(url,config)
    if(!response.ok){
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    const data = await response.json()

    return data

}

export async function findCategoryByIdSP(id) {
    const url= `http://localhost:8080/category/findById/${id}`
    const response  = await fetch(url)
    if(!response.ok){
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }
    const resJSON = await response.json()
    return resJSON
    
}


export async function updateProductSP(product) {
    const url = "http://localhost:8080/product/update"
    const config={
        method:"PUT",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json",
          }
    }

    const response = await fetch(url,config)
    if(!response.ok){
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }
    const resJSON = await response.json()
    console.log(resJSON)
    return resJSON 


}

export async function saveProductSP(product) {
    const url = "http://localhost:8080/product/save"
    const config={
        method:"POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json",
          }
    }

    const response = await fetch(url,config)
    if(!response.ok){
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }
    const resJSON = await response.json()
    console.log(resJSON)
    return resJSON 


}



export async function deleteProductSP(id){
    const idProduct = parseInt(id, 10);

    if (isNaN(idProduct)) {
        throw new Error("El ID del producto no es un número válido.");
    }
    const url=`http://localhost:8080/product/delete?id=${idProduct}`
    const config = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    };

    const response =  await fetch(url,config)
    if(!response.ok){
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

}




export async function lowLogicSP(id){

    const url= `http://localhost:8080/product/lowLogic?id=${id}`
    const config = {
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response= await fetch(url,config)
    if(!response.ok){
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

}


export async function highLogicSP(id){

    const url= `http://localhost:8080/product/highLogic?id=${id}`
    const config = {
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response= await fetch(url,config)
    if(!response.ok){
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

}