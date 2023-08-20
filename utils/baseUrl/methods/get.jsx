import { BaseUrlAxios } from "@/utils/baseUrl/api";
import {ProductApiAxios } from "../productApi";

//******************  get product api    ************ */

export const GETPRODUCT_DETAILS = async (data) => {
  console.log(data.productId,"LLLLL");
    try {
      const id = data.productId // Access _id from the object
      // Construct the URL using template literals
      return ProductApiAxios().get(`/api/v1/product/getProductDetails/${id}`);
    } catch (error) {
      console.log(error, "error in the productDetail api");
    }
};

  