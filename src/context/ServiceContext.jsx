import { createContext, useState } from "react"
import {
    findAllCategoriesSP,
    findAllProductsSP,
    findByCategorySP,
    findProductByIdSP,
    loginSP,
    addUserSP,
    createOrderSP,
    findCategoryByIdSP,
    saveProductSP,
    updateProductSP,
    deleteProductSP,
    highLogicSP,
    lowLogicSP } from "../service/SpringBoot/index"

import {
    findAllCategoriesFB,
    findAllProductsFB,
    findByCategoryFB,
    findCategoryByIdFB,
    findProductByIdFB,
    loginFB,
    addUserFB,
    createOrderFB} from "../service/firebase/indexFirebase" 



export const ServiceContext= createContext()


export function ServiceProvider({children}){
    
    const [service,setService]=useState({
            findAllCategories:findAllCategoriesSP ,
            findAllProducts:findAllProductsSP ,
            findByCategory:findByCategorySP ,
            findProductById: findProductByIdSP,
            login:loginSP ,
            addUser : addUserSP,
            createOrder: createOrderSP,
            findCategoryById:findCategoryByIdSP,
            updateProduct :updateProductSP,
            saveProduct: saveProductSP,
            deleteProduct:deleteProductSP,
            highLogic:highLogicSP,
            lowLogic:lowLogicSP,
            bd : "SP"
    })


    const switchToSpringBoot=()=>{
        setService({
            findAllCategories:findAllCategoriesSP ,
            findAllProducts:findAllProductsSP ,
            findByCategory:findByCategorySP ,
            findProductById: findProductByIdSP,
            login:loginSP ,
            addUser : addUserSP,
            createOrder: createOrderSP,
            findCategoryById:findCategoryByIdSP,
            updateProduct :updateProductSP,
            saveProduct: saveProductSP,
            deleteProduct:deleteProductSP,
            highLogic:highLogicSP,
            lowLogic:lowLogicSP,
            bd : "SP"
        })
    }

    const switchToFirebase=()=>{
        setService({
            findAllCategories:findAllCategoriesFB ,
            findAllProducts:findAllProductsFB ,
            findByCategory:findByCategoryFB ,
            findProductById: findProductByIdFB,
            login:loginFB ,
            addUser : addUserFB,
            createOrder : createOrderFB,
            findCategoryById:findCategoryByIdFB,
            bd : "FB"
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