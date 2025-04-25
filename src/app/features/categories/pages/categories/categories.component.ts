import { Component } from '@angular/core';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { CategoriesService } from './../../services/categories.service';
import { Category } from '../../models/category';


@Component({
  selector: 'app-categories',
  imports: [CategoryCardComponent],
templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

   dataList:Category[]=[];
  
    constructor(private _categoriesService:CategoriesService){}
  
  
  
    getData(){
      this._categoriesService.allCategories().subscribe({
        next:(res)=>{
            this.dataList = res.categories;
            console.log(this.dataList)
        }
      })
    }
  
    ngOnInit(): void {
      this.getData();
    }
}
