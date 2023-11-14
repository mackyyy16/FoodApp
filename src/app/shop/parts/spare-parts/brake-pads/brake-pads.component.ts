import { Component } from '@angular/core';
import { ShopItem } from 'src/app/shop/shared/models/shop-item';
import { SharedParameters } from 'src/app/shop/shared/shared-parameters';
import { PartService } from 'src/app/website/shared/http-services/mealService';

@Component({
   templateUrl: './brake-pads.component.html',
  styleUrls: ['./brake-pads.component.css']
})
export class BrakePadsComponent {
    public parts: ShopItem[] = [];
    constructor(private partService: PartService){
      this.partService.getMeals().then(data => {
        let partsTemp: ShopItem[] =[];
        
        // data.forEach(element => {
        //   if(element.category === 'spare-parts' && element.subcategory === 'brake-pads'){
        //     partsTemp.push({
        //       id_part: element.id_meal,
        //       name: element.name,
        //       amount: 1,
        //       amountInStorage: element.amount,
        //       price: element.price,
        //       producent: element.producer,
        //       imagePath: element.image_path
        //     });
        //   };      
        // });
        
        this.parts = partsTemp;
      });
    }
  
    addButton(item: ShopItem){
       if(item.amount > item.amountInStorage){
        //wyświetl info ze za duzo elementow
       }else{
        //jeżeli dodajesz 2x ten sam element to sprawdz czy go nie masz w tablicy
        //jak tak to dodaj ilosc
        SharedParameters.storeItems.push({...item});
       }
      
    }
  }
