export interface IMeal{
    id_meal: number;
    name: string;
    price: number;
    image_path: string;
    // category: string;
    // subcategory: string;
    description: string;
}

export interface ICategory {
    name: string;
    subCategories: string[];
}