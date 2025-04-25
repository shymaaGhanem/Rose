import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as CartActions from '../../../../store/cart/cart.actions';
import * as CartSelectors from '../../../../store/cart/cart.selectors';
import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart, CartItem } from '../../../../store/cart/cart.models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgIf, AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartDetails$!: Observable<Cart | null>;
  cartItems$!: Observable<CartItem[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(CartActions.loadCart());

    this.cartDetails$ = this.store.select(CartSelectors.selectCart);
    this.cartItems$ = this.store.select(CartSelectors.selectCartItems);
  }

  updateCart(productId: string, quantity: number) {
    this.store.dispatch(CartActions.updateCart({ productId, quantity }));
  }

  removeItem(productId: string) {
    this.store.dispatch(CartActions.removeFromCart({ productId }));
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }
}
