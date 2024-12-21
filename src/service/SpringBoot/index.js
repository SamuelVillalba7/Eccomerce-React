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