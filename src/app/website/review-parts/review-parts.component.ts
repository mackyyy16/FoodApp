import { Component } from '@angular/core';
import { IMeal } from '../shared/models/food';
import { PartService } from '../shared/http-services/mealService';

@Component({
   templateUrl: './review-parts.component.html',
  styleUrls: ['./review-parts.component.css']
})
export class ReviewPartsComponent {

  public parts: IMeal[] = [];  

  constructor(private partService: PartService){
    this.partService.getMeals().then(data => {
      this.parts = data;
    });
  }
  
  async removePart(part: any){
    debugger;
    await this.partService.removePart(part);

    //odśwież listę części
    await this.partService.getMeals().then(data => {
      this.parts = data;
    });
  }
}