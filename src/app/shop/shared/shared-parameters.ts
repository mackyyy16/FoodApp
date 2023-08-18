import { SummaryCost } from "./models/summary-cost";
import { ShopItem } from "./models/shop-item";
import { DeliveryAddress } from "./models/delivery-address";
import { UserInfo } from "./models/user-info";

export class SharedParameters {      
    public static storeItems: ShopItem[] = [];
    public static costSummary: SummaryCost;
    public static deliveryAddress: DeliveryAddress = DeliveryAddress.initDeliveryAdressValue;
    public static userInfo: UserInfo;
}

