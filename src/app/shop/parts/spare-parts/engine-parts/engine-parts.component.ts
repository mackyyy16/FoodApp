import { Component } from '@angular/core';
import { ShopItem } from 'src/app/shop/shared/models/shop-item';
import { SharedParameters } from 'src/app/shop/shared/shared-parameters';
import { MealService as MealService } from 'src/app/website/shared/http-services/mealService';

@Component({
   templateUrl: './engine-parts.component.html',
  styleUrls: ['./engine-parts.component.css']
})
export class EnginePartsComponent {
  public meals: ShopItem[] = [];
  constructor(private mealService: MealService){
    this.mealService.getMeals().then(data => {
      let mealsTemp: ShopItem[] =[];
      
      data.forEach(element => {
        // if(element.category === 'spare-parts' && element.subcategory === 'engine-parts'){
          mealsTemp.push({
            id_part: element.id_meal,
            name: element.name,
            amount: 0,
            amountInStorage: 0,
            price: element.price,
            producent:'',
            imagePath: element.image_path
          });
        // };      
      });
      
      this.meals = mealsTemp;
    });
  }

  addButton(item: ShopItem){
    debugger;
    //  if(item.amount > item.amountInStorage){
    //   //wyświetl info ze za duzo elementow
    //  }else{
      //jeżeli dodajesz 2x ten sam element to sprawdz czy go nie masz w tablicy
      //jak tak to dodaj ilosc
      SharedParameters.storeItems.push({...item});
    //  }
    
  }
}


