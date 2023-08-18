import { Component } from '@angular/core';
import { IFood } from '../shared/models/food';
import { PartService } from '../../website/shared/http-services/partService';

@Component({
   templateUrl: './review-parts.component.html',
  styleUrls: ['./review-parts.component.css']
})
export class ReviewPartsComponent {

  public parts: IFood[] = [];  

  constructor(private partService: PartService){
    this.partService.getParts().then(data => {
      this.parts = data;
    });
  }
  
  async removePart(part: any){
    debugger;
    await this.partService.removePart(part);

    //odśwież listę części
    await this.partService.getParts().then(data => {
      this.parts = data;
    });
  }
}