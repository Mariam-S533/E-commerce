import { Brand } from "./productDetails.model"
import { category, subCategory } from "./Products.model"


export interface wishListData{
    sold: number,
    images: string[],
    subcategory: subCategory[],
    ratingsQuantity: number,
    _id: string,
    title: string,
    slug: string,
    description: string,
    quantity: number,
    price:number,
    imageCover: string,
    category: category,
    brand: Brand,
    ratingsAverage: number,
    updatedAt: string,
    createdAt: string,
    __v: number,
    id: string
}


export interface WishListDetails{
    status: string,
    count: number,
    data: wishListData[]
}