import { Injectable } from '@angular/core';
import { DataServiceService } from '../../../../core/services/dataService/data-service.service';
import { Observable } from 'rxjs';
import { products } from '../../../../constant/api/Api.endPoint';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private dataService:DataServiceService) { }

  getProducts():Observable<any>{
    return  this.dataService.get(`${products.getProducts}`)
  }

  getproductDetails(productId:any):Observable<any>{
    return  this.dataService.get(`${products.getSpacificProduct}/${productId}`)
  }
  
}
