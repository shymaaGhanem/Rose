import { Component } from '@angular/core';
import { CategoriesService } from './../../services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-details',
  imports: [],
templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent {
  id:any;
  detail!:Category;
    constructor(private route:ActivatedRoute,private _categoriesService:CategoriesService){
      route.params.subscribe(res=>{
        this.id = res['id']
      })
    }
  
    ngOnInit(): void {
       this.getProduct()
    }
  
    getProduct(){
      this._categoriesService.getSpacificCategory(this.id).subscribe({
        next:(res)=>{
          this.detail = res.category
        }
      })
    }
}
