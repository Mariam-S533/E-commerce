import { category, subCategory } from "./Products.model";


export interface Brand {
	_id: string;
	name: string;
	slug: string;
	image: string;
}



export interface ProductDetails {
	brand: Brand;
	category: category;
	createdAt: string;
	description: string;
	id: string;
	imageCover: string;
	images: string[];
	price: number;
	quantity: number;
	ratingsAverage: number;
	ratingsQuantity: number;
	reviews: unknown;
	slug: string;
	sold: number;
	subcategory: subCategory[];
	title: string;
	updatedAt: string;
	__v: number;
	_id: string;
}