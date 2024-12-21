import { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";

export const useService=()=>{
    return  useContext(ServiceContext) 
}