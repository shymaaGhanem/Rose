import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { cart, orders } from '../../../constant/api/Api.endPoint';
import { DataServiceService } from '../../../core/services/dataService/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _dataServiceService:DataServiceService,@Inject(PLATFORM_ID) Id:object) {
   }
   
   cashOrder(payload:any):Observable<any>{
       return this._dataServiceService.post(`${orders.cashOrder}`,payload )
   }

   checkOut(payload:any):Observable<any>{
       return this._dataServiceService.post(`${orders.checkOutSession}`,payload )
   }

   allOrders():Observable<any>{
       return this._dataServiceService.get(`${orders.userOrders}`)
   }

}
