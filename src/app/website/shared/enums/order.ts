export enum OrderStatus{
    Przyjeto,
    WTrakcieRealizacji,
    Wyslano
}

export const OrderStatusDic = {
    [OrderStatus.Przyjeto]: 'Przyjęto',
    [OrderStatus.WTrakcieRealizacji]: 'W trakcie realizacji',
    [OrderStatus.Wyslano]: 'Wysłano'    
}

