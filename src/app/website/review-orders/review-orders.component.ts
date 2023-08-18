import { Component } from '@angular/core';
import { ShopItem } from 'src/app/shop/shared/models/shop-item';
import { OrderStatusDic } from '../shared/enums/order';
import { OrderService } from '../shared/http-services/orderService';
import { IOrder } from '../shared/models/order';

@Component({
   templateUrl: './review-orders.component.html',
  styleUrls: ['./review-orders.component.css']
})
export class ReviewOrdersComponent {

  public orders: IOrder[] = [];
  public statusList: string[] = Object.values(OrderStatusDic);
  public selectedValueCategories: string;
  public toggleOrderedParts: boolean = false;
  public orderParts: ShopItem[];

  constructor(private orderService: OrderService){
    this.getOrdersFromDb();
  }

  updateOrder(order: IOrder): void{
    debugger;
    let orderTemp;
    this.orderService.updateOrder(order).subscribe({
      next: ordersFromApi => orderTemp = ordersFromApi,
      error:err => err=err
    }); 

    this.getOrdersFromDb();
  }

  getOrdersFromDb(): void{ 
    this.orderService.getOrders().then(data => {
      this.orders = data;
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