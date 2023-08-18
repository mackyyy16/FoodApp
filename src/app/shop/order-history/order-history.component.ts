import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/website/shared/http-services/orderService';
import { IOrder } from 'src/app/website/shared/models/order';
import { ShopItem } from '../shared/models/shop-item';
import { SharedParameters } from '../shared/shared-parameters';

@Component({
   templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
  public clientOrders: IOrder[];
  public toggleOrderedParts: boolean = false;
  public orderParts: ShopItem[];

  constructor(private readonly orderService: OrderService){
    this.orderService.getClientOrders(SharedParameters.userInfo.id_user).then(data => {
      this.clientOrders = data;
    });
  }

  showOrderedParts(order: IOrder): void{
    this.toggleOrderedParts = true;
    this.orderParts = JSON.parse(order.part_info);
  }

  closeEmptyDialogWindow(): void{
    this.toggleOrderedParts = false;
  }
 }