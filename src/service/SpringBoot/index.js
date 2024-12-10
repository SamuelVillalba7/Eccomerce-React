


export async function findAllProducts(){
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

export async function findByCategory(id){
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


export async function findAllCategories() {
    
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


export async function findProductById(id) {
    
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



export async function addUser() {

    const user={
        "name": "Samuasdasdasdel",
        "lastname":"Villalba",
        "mail":"villalbasamuel@gmail.com",
        "password":"123",
        "admin": 0
    }
    const url = "http://localhost:8080/user/save"
    
    const config={
        method:"POST",
        body: JSON.stringify(user),
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


export async function login(obj){

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
    try{

        const response= await fetch(url,config)
        if(!response.ok){
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const data = await response.json()

        return data

    }catch(error){
        console.log(error)
    }



}