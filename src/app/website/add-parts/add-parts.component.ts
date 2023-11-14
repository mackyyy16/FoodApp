import { Component } from '@angular/core';
import { PartService } from '../shared/http-services/mealService';
import { ICategory, IMeal } from '../shared/models/food';

@Component({
   templateUrl: './add-parts.component.html',
  styleUrls: ['./add-parts.component.css']
})
export class AddPartsComponent {

  public newMeal: IMeal = {
    id_meal: 1,
    name: '',
    // producer: '',
    price: null,
    // amount: null,
    // image_path: '',
    // category: '',
    // subcategory: ''
    description: null,
    image_path: '',
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
  
  public parts: IMeal[] = [];
  public previousPartId = 0;
  public showMessage: boolean = false;

  constructor(private partService: PartService){
    this.partService.getMeals().then(data => {
      this.parts = data;
    });
  }

  add(){
    let parts;
  
    let sortedParts = [...this.parts.sort((a, b) => a.id_meal - b.id_meal).reverse()];
    let newPartId = sortedParts[0].id_meal + 1;

    if(this.previousPartId === 0){
      this.previousPartId = newPartId;
      this.newMeal.id_meal = newPartId;
    }else{
      this.previousPartId = this.previousPartId + 1
      this.newMeal.id_meal = this.previousPartId;
    }

    // this.newPart.category = this.selectedValueCategories.name;
    // this.newPart.subcategory = this.selectedValueSubcategories;

    this.partService.addPart(this.newMeal).subscribe({
      next: partsFromApi => parts = partsFromApi,
      error:err => err=err
    }); 
    this.showMessage = true;
  }
}