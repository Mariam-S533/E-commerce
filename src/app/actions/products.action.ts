"use server"

import axios from "axios"


async function getProducts(brandId?: string) {

    try {

    const url = brandId 
                ? `https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`
                : `https://ecommerce.routemisr.com/api/v1/products`;

    const response = await axios.get(url);

            return {
                data: response?.data?.data,
                status: response?.status,
                message: response?.data.message,
            }
    } 
    catch (error :unknown) {
        if(axios.isAxiosError(error)){
        return{
            data: [],
            status: error.response?.status,
            message: error?.response?.data.message || "error occur"
        }
      }
    }
}



async function getProductDetails(id : string) {

    try {
            const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

            return {
                data: response?.data?.data,
                status: response?.status,
                message: response?.data.message,
            }
    } 
    catch (error :unknown) {
        if(axios.isAxiosError(error)){
        return{
            data: [],
            status: error.response?.status,
            message: error?.response?.data.message || "error occur"
        }
      }
    }
}


export { getProducts, getProductDetails }
