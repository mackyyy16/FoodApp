import { Component } from '@angular/core';
import { PartService } from '../../website/shared/http-services/partService';
import { ICategory, IFood } from '../shared/models/food';

@Component({
   templateUrl: './add-parts.component.html',
  styleUrls: ['./add-parts.component.css']
})
export class AddPartsComponent {

  public newPart: IFood = {
    id_part: 1,
    name: '',
    producer: '',
    price: null,
    amount: null,
    path_to_image: '',
    category: '',
    subcategory: ''
  };

  selectedValueCategories: ICategory = {name: '', subCategories: []};
  selectedValueSubcategories: string = '';
  public categories: ICategory[] = [
    {
      name: 'body-parts',
      subCategories: []
    },
    {
      name: 'electronics',
      subCategories: []
    },
    {
      name: 'equipment',
      subCategories: []
    },
    {
      name: 'lighting',
      subCategories: []
    },
    {
      name: 'oils',
      subCategories: []
    },
    {
      name: 'spare-parts',
      subCategories: [
        'brake-pads',
        'brake-system',
        'drive-system',
        'engine-parts'
      ]
    },
    {
      name: 'tires',
      subCategories: []
    }
  ]
  
  public parts: IFood[] = [];
  public previousPartId = 0;
  public showMessage: boolean = false;

  constructor(private partService: PartService){
    this.partService.getParts().then(data => {
      this.parts = data;
    });
  }

  add(){
    let parts;
  
    let sortedParts = [...this.parts.sort((a, b) => a.id_part - b.id_part).reverse()];
    let newPartId = sortedParts[0].id_part + 1;

    if(this.previousPartId === 0){
      this.previousPartId = newPartId;
      this.newPart.id_part = newPartId;
    }else{
      this.previousPartId = this.previousPartId + 1
      this.newPart.id_part = this.previousPartId;
    }

    this.newPart.category = this.selectedValueCategories.name;
    this.newPart.subcategory = this.selectedValueSubcategories;

    this.partService.addPart(this.newPart).subscribe({
      next: partsFromApi => parts = partsFromApi,
      error:err => err=err
    }); 
    this.showMessage = true;
  }
}