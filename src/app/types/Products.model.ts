export interface Products{
    sold: number;
    images: string[]; 
    subcategory: subCategory[];
    ratingsQuantity:number;
    _id: string;
    title: string;
    slug: string;
    description: string;
    quantity:number;
    price:number;
    imageCover: string;
    category: category;
    brand: category;
    ratingsAverage:number;
    createdAt: string;
    updatedAt:string;
    id: string;
}

export interface subCategory{
    _id: string;
    name: string;
    slug: string;
    category: string;
}

export interface category{
    _id: string;
    name: string;
    slug: string;
    image: string;
}