import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DelivaryAndPaymentCost } from '../shared/models/summary-cost';
import { SharedParameters } from '../shared/shared-parameters';

@Component({
   templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  constructor(private readonly router: Router){ }

  totalValue: number=SharedParameters.costSummary.globalTotalValue;
  transportCost: number=SharedParameters.costSummary.globalTransportCost;
  paymentCost: number=SharedParameters.costSummary.globalPaymentCost;
  sum: number=SharedParameters.costSummary.globalSum;

  transport: DelivaryAndPaymentCost =SharedParameters.costSummary.transport;
  payment: DelivaryAndPaymentCost =SharedParameters.costSummary.payment;

  firstName: string = SharedParameters.deliveryAddress.firstname;
  lastname: string = SharedParameters.deliveryAddress.lastname;
  postcode: string = SharedParameters.deliveryAddress.postcode;
  phone: string = SharedParameters.deliveryAddress.phone;
  email: string = SharedParameters.deliveryAddress.email;

  salary(): void {
    debugger;
    if(this.payment.name === "Płatność BLIK"){
      this.router.navigate(['/blik-payment']);
    }else if(this.payment.name === "Przelew na konto bankowe"){
      this.router.navigate(['/transfer-payment']);
    }else if(this.payment.name === "Pobranie - płatność przy odbiorze"){
      this.router.navigate(['/finish-payment']);
    }else if(this.payment.name === "Przelewy 24"){
      this.router.navigate(['/transfer-payment24']);
    } else {
      //brak wyboru!!
    }
  }
}