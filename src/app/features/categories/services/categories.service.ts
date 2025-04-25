import { Injectable } from '@angular/core';
import { DataServiceService } from '../../../core/services/dataService/data-service.service';
import { categories } from '../../../constant/api/Api.endPoint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _dataServiceService:DataServiceService) {
  }
  
  allCategories():Observable<any>{
    return this._dataServiceService.get(`${categories.getcategories}`)
  }

  getSpacificCategory(categoryId:string):Observable<any>{
    return this._dataServiceService.get(`${categories.getSpacificcategory}/${categoryId}`)
  }

}
