import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Order } from '../../models/orders';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-all-orders',
  imports: [DatePipe],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit {

  dataList:Order[]=[];

  constructor(private _OrdersService:OrdersService){}




  getData(){
    this._OrdersService.allOrders().subscribe({
      next:(res)=>{
      this.dataList = res.orders;
      }
    })
  }


  ngOnInit(): void {
    this.getData();
  }

}
