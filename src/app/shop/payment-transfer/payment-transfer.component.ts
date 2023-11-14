import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderStatus, OrderStatusDic } from 'src/app/website/shared/enums/order';
import { OrderService } from 'src/app/website/shared/http-services/orderService';
import { PartService } from 'src/app/website/shared/http-services/mealService';
import { IOrder } from 'src/app/website/shared/models/order';
import { IMeal } from 'src/app/website/shared/models/food';
import { SharedParameters } from '../shared/shared-parameters';

@Component({
   templateUrl: './payment-transfer.component.html',
  styleUrls: ['./payment-transfer.component.css']
})
export class PaymentTransferComponent {
  //Symulacja ze po 1min ktos zrobil przelew sam
  //bez symulacji wlasciciel strony musi sprzwdzic
  //przelew ktory mu przyszedl na konto, ktore zamowienia oplaca
  //np na podstawie id zamowienia ktore jest w tytule przelewu
  //lub mozna bez timer'a i zakonczyc ta strona 

  public orders: IOrder[] = [];
  
  constructor(private readonly router: Router,
    private readonly partService: PartService,
    private readonly orderService: OrderService){
      this.orderService.getOrders().then(data => {
        this.orders = data;
      });
    }

  acceptBlik(): void {
    setTimeout(()=>{ this.navigateToFinishPage(this); },5000);
  }

  navigateToFinishPage(value: any){
    this.refreshDataInDb();
    this.addOrderToDb();
    this.router.navigate(['/finish-payment']);
  }

  refreshDataInDb(): void{
    //dodanie zamowienia do uzytkownika jak zalogowany, co jak nie?
    //zmienienie ilosci elementow w bazie o te kupione
    //wyczyszczenie sharedparameters
    debugger;
    const parts : IMeal[] = [];

    SharedParameters.storeItems.forEach(part => {
      parts.push({
        id_meal: part.id_part,
        // amount: part.amount,
        // category: '',
        name: '',
        image_path: '',
        price: 0,
        // producer:'',
        // subcategory: ''
        description: ''
      });
    });
    
    let partsTemp;
    this.partService
      .updatePart(parts)
      .subscribe({
        next: partsFromApi => partsTemp = partsFromApi,
        error:err => err=err
      });
  }
  
  addOrderToDb(): void {
    let sortedParts = [...this.orders.sort((a, b) => a.id_order - b.id_order).reverse()];
    let newOrderId = sortedParts.length !== 0 ? sortedParts[0].id_order + 1 : 1;

    var newOrder: IOrder = {
      id_order: newOrderId,
      id_client: SharedParameters.userInfo.id_user,
      part_info: JSON.stringify(SharedParameters.storeItems),
      start_date: "",
      end_date:"",
      status: OrderStatusDic[OrderStatus.Przyjeto],
      transport: SharedParameters.costSummary.transport.name,
      order_price: SharedParameters.costSummary.globalTotalValue,
      parts_price: SharedParameters.costSummary.globalSum
    };
    
    let orderTemp;
    this.orderService.addOrder(newOrder).subscribe({
      next: ordersFromApi => orderTemp = ordersFromApi,
      error:err => err=err
    }); 
    
    SharedParameters.storeItems = [];
  }
}