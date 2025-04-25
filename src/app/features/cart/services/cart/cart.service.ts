import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DataServiceService } from './../../../../core/services/dataService/data-service.service';
import { cart } from '../../../../constant/api/Api.endPoint';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token:any
 
  constructor(private _dataServiceService:DataServiceService,@Inject(PLATFORM_ID) Id:object) {
   if(isPlatformBrowser(Id)){
       this.token ={token:localStorage.getItem('userToken')||''}
   }
  }
  
  addProductToCart(productId:string,quantity:number):Observable<any>{
      return this._dataServiceService.post(`${cart.cart}`,
        {product:productId,quantity:quantity}
      )
  }
  
  getProductToCart():Observable<any>{
      return this._dataServiceService.get(`${cart.cart}`
      )
  }

  loadCart():Observable<any>{
      return this._dataServiceService.get(`${cart.cart}`
      )
  }
  
  updateProductToCart(productId:string,count:number):Observable<any>{
      return this._dataServiceService.put(`${cart.cart}/${productId}`,
        {quantity:count}
      )
  }
  
  removeProduct(productId:string):Observable<any>{
      return this._dataServiceService.delete(`${cart.cart}/${productId}`
      )
  }
  
  clearCart():Observable<any>{
      return this._dataServiceService.delete(`${cart.cart}`)
  }

}
