export interface IOrder{
    id_order: number;
    id_client: number;
    part_info: string;
    start_date: string;
    end_date: string;
    status: string;
    order_price: number;
    transport: string;
    parts_price: number;
}