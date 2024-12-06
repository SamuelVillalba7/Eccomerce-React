


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

