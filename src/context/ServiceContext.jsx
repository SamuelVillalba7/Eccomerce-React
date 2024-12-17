import { createContext, useState } from "react"
import {
    findAllCategoriesSP,
    findAllProductsSP,
    findByCategorySP,
    findProductByIdSP,
    loginSP,
    addUserSP} from "../service/SpringBoot/index"

import {
    findAllCategoriesFB,
    findAllProductsFB,
    findByCategoryFB,
    findProductByIdFB,
    loginFB,
    addUserFB} from "../service/firebase/indexFirebase" 



export const ServiceContext= createContext()


export function ServiceProvider({children}){
    
    const [service,setService]=useState({
        findAllCategories:findAllCategoriesFB ,
        findAllProducts:findAllProductsFB ,
        findByCategory:findByCategoryFB ,
        findProductById: findProductByIdFB,
        login:loginFB ,
        addUser : addUserFB
    })


    const switchToSpringBoot=()=>{
        setService({
            findAllCategories:findAllCategoriesSP ,
            findAllProducts:findAllProductsSP ,
            findByCategory:findByCategorySP ,
            findProductById: findProductByIdSP,
            login:loginSP ,
            addUser : addUserSP
        })
    }

    const switchToFirebase=()=>{
        setService({
            findAllCategories:findAllCategoriesFB ,
            findAllProducts:findAllProductsFB ,
            findByCategory:findByCategoryFB ,
            findProductById: findProductByIdFB,
            login:loginFB ,
            addUser : addUserFB
        })
    }

    const obj={
        service, 
        switchToSpringBoot,
        switchToFirebase
    }
    
    return(
        <ServiceContext.Provider value={obj}>
            {children}
        </ServiceContext.Provider>
    )
}