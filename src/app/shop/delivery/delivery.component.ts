import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedParameters } from '../shared/shared-parameters';

@Component({
   templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {

  constructor(private readonly router: Router){
    if(SharedParameters.userInfo){//&& uzytkownik nie jest zalogowany (robi zamowienie incognito)
      SharedParameters.deliveryAddress.firstname = SharedParameters.userInfo.firstname;
      SharedParameters.deliveryAddress.lastname = SharedParameters.userInfo.lastname;
      SharedParameters.deliveryAddress.street = SharedParameters.userInfo.street;
      SharedParameters.deliveryAddress.postcode = SharedParameters.userInfo.postcode;
      SharedParameters.deliveryAddress.city = SharedParameters.userInfo.city;
      SharedParameters.deliveryAddress.email = SharedParameters.userInfo.email;
      SharedParameters.deliveryAddress.phone = SharedParameters.userInfo.phone;
    }

    this.firstname = SharedParameters.deliveryAddress.firstname;
    this.lastname = SharedParameters.deliveryAddress.lastname;
    this.street = SharedParameters.deliveryAddress.street;
    this.postcode = SharedParameters.deliveryAddress.postcode;
    this.city = SharedParameters.deliveryAddress.city;
    this.email = SharedParameters.deliveryAddress.email;
    this.phone = SharedParameters.deliveryAddress.phone;
    this.addition = SharedParameters.deliveryAddress.addition;

  }

  //#region Basket summary
  totalValue: number=SharedParameters.costSummary.globalTotalValue;
  transportCost: number=SharedParameters.costSummary.globalTransportCost;
  paymentCost: number=SharedParameters.costSummary.globalPaymentCost;
  sum: number=SharedParameters.costSummary.globalSum;
  //#endregion

  //#region delivery adress
  firstname: string;// = SharedParameters.deliveryAddress.firstname;
  lastname: string;// = SharedParameters.deliveryAddress.lastname;
  street: string;// = SharedParameters.deliveryAddress.street;
  postcode: string;// = SharedParameters.deliveryAddress.postcode;
  city: string;// = SharedParameters.deliveryAddress.city;
  email: string;// = SharedParameters.deliveryAddress.email;
  phone: string;// = SharedParameters.deliveryAddress.phone;
  addition: string;// = SharedParameters.deliveryAddress.addition;
  //#endregion

  nextButton(): void{
    SharedParameters.deliveryAddress = {
      firstname: this.firstname,
      lastname: this.lastname,
      street: this.street,
      postcode: this.postcode,
      city: this.city,
      email: this.email,
      phone: this.phone,
      addition: this.addition
    };
    
    this.router.navigate(['/summary']);
  }

  backButton(): void{
    SharedParameters.deliveryAddress = {
      firstname: this.firstname,
      lastname: this.lastname,
      street: this.street,
      postcode: this.postcode,
      city: this.city,
      email: this.email,
      phone: this.phone,
      addition: this.addition
    };
    
    this.router.navigate(['/basket']);
  }
}