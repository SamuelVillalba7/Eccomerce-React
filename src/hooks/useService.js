import { useContext } from "react";
import { ServiceContext } from "../context/serviceContext";

export const useService=()=>{
    return  useContext(ServiceContext) 
}