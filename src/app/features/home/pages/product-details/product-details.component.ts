import { Component, Input } from '@angular/core';
import { ProductsService } from '../../../../features/home/services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../core/interfaces/products';
import { CartService } from '../../../../features/cart/services/cart/cart.service';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import * as CartActions from '../../../../store/cart/cart.actions';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe,PercentPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  id:any;
  details!:Product;
    constructor(private route:ActivatedRoute,private store: Store,private _cartService:CartService,private product:ProductsService,private cart:CartService){
      route.params.subscribe(res=>{
        this.id = res['id']
      })
    }
  
    ngOnInit(): void {
       this.getProduct()
    }
  
    getProduct(){
      this.product.getproductDetails(this.id).subscribe({
        next:(res)=>{
          this.details = res.product
        }
      })
    }

  
  addProduct(product: string, quantity: number) {
    console.log(product)
    this.store.dispatch(CartActions.addToCart({ product, quantity }));
  }
  

}
