export class SummaryCost{
    globalTotalValue: number=0;
    globalTransportCost: number=0;
    globalPaymentCost: number=0;
    globalSum: number=0;
    transport: DelivaryAndPaymentCost = DelivaryAndPaymentCost.initValue;
    payment: DelivaryAndPaymentCost = DelivaryAndPaymentCost.initValue;
}

export class DelivaryAndPaymentCost{
    name: string;
    price: number;

    static initValue: DelivaryAndPaymentCost = {
        name: "",
        price: 0
    }
}