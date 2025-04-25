import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";
import { ProductsService } from './../../services/products/products.service';
import { Product } from '../../../../core/interfaces/products';

@Component({
  selector: 'app-produts',
  imports: [CardComponent],
templateUrl: './produts.component.html',
  styleUrl: './produts.component.scss'
})
export class ProdutsComponent implements OnInit {

  dataList:Product[]=[];

  constructor(private _productsService:ProductsService){}



  getData(){
    this._productsService.getProducts().subscribe({
      next:(res)=>{
          this.dataList = res.products
      }
    })
  }

  ngOnInit(): void {
    this.getData();
  }

}
