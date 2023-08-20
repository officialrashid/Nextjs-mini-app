import { BaseUrlAxios } from "@/utils/baseUrl/api";
import {ProductApiAxios } from "../productApi";

// Now you can use BaseUrlAxios and ProductApiAxios to differentiate between the two instances of Axios.


///***************   user api  //**************/

export const SIGNUP_API= async (data)=>{

    try{
        
        console.log(data,"bdfdbfbfbf0000");
        return BaseUrlAxios().post('/api/v1/user/register',data)

    }catch(error){
      console.log(error,"error in the signup api");
    }
}
export const LOGIN_API = async (data)=>{
console.log(data,"datacome to the LOGIN_API");
   try{
      return BaseUrlAxios().post('/api/v1/user/login',data)
   }catch(error){
    console.log(error,"error in the login api");
   }
}



///****************** product api *************/////

export const ADDPRODUCT_API = async (data)=>{
   console.log(data,"data come to the add product api il ethittaaamakkallee");
  try{
 return ProductApiAxios().post('/api/v1/product/addProduct',data)

  }catch(error){
    console.log(error,"error in the ADDPRODUCT_API");
  }

}

export const GETALL_PRODUCT = async ()=>{

   try{
    console.log("ivade get product il ethiyittund");
    return ProductApiAxios().get('/api/v1/product/getAllProduct')
   //   return fetch('http://13.233.55.149/api/v1/product/getAllProduct').then((res)=> res.json()).then((da)=>da)

   } catch(error){
    console.log(error,"error in the GETALL_PRODUCT API");
   }
}


////********************* order api  **************/
export const ORDER_PRODUCT = async (orderDetails)=>{
  
   try{
    
    return ProductApiAxios().post('/api/v1/product/buyProduct',orderDetails)

   } catch(error){
    console.log(error,"error in the ORDER_PRODUCT API");
   }
}