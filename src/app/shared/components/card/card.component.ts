import { Component, Input } from '@angular/core';
import { Product } from '../../../core/interfaces/products';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as CartActions from '../../../store/cart/cart.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-card',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() productList!:Product;



  constructor(private store: Store){}


    addProduct(product: string, quantity: number) {
      console.log('hi')
      this.store.dispatch(CartActions.addToCart({ product, quantity }));
    }


}
