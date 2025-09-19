import { Brand } from "./productDetails.model";
import { category, subCategory } from "./Products.model";


export interface subProduct{
    brand: Brand,
    category: category,
    id: string,
    imageCover: string,
    quantity:number,
    ratingsAverage: number,
    subcategory: subCategory[],
    title: string,
    _id: string,
}

export interface CartProduct {
    count: number;
    price: number;
    product: subProduct; 
    _id: string;
}

// Cart data type
export interface CartData {
    cartOwner: string;
    createdAt: string;
    products: CartProduct[];
    totalCartPrice: number;
    updatedAt: string;
    __v: number;
    _id: string;
}

// Main CartDetails type
export interface CartDetails {
    cartId: string;
    data: CartData;
    numOfCartItems: number;
    status: string;
}