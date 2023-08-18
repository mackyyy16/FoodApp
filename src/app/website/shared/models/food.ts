export interface IFood{
    id_part: number;
    name: string;
    producer: string;
    price: number;
    amount: number;
    path_to_image: string;
    category: string;
    subcategory: string;
}

export interface ICategory {
    name: string;
    subCategories: string[];
}