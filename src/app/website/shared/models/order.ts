export interface IOrder{
    id_order: number;
    user_id: number;
    meals_info: string;
    start_date: string;
    end_date: string;
    status: string;
    order_price: number;
    transport: string;
    meal_price: number;
}