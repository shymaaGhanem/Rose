import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CartActions from './cart.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CartService } from '../../features/cart/services/cart/cart.service';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {
  }

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.loadCart),
      switchMap(() =>
        this.cartService.getProductToCart().pipe(
          map(res => CartActions.loadCartSuccess({ cart: res })),
          catchError(err => of(CartActions.loadCartFailure({ error: err.message })))
        )
      )
    )
  );

  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addToCart),
      mergeMap(({ product, quantity }) =>
        this.cartService.addProductToCart(product, quantity).pipe(
          switchMap(() => this.cartService.getProductToCart()),
          map(res => CartActions.addToCartSuccess({ cart: res })),
          catchError(err => of(CartActions.addToCartFailure({ error: err.message })))
        )
      )
    )
  );

  updateCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.updateCart),
      mergeMap(({ productId, quantity }) =>
        this.cartService.updateProductToCart(productId, quantity).pipe(
          switchMap(() => this.cartService.getProductToCart()),
          map(res => CartActions.updateCartSuccess({ cart: res })),
          catchError(err => of(CartActions.updateCartFailure({ error: err.message })))
        )
      )
    )
  );

  removeFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.removeFromCart),
      mergeMap(({ productId }) =>
        this.cartService.removeProduct(productId).pipe(
          switchMap(() => this.cartService.getProductToCart()),
          map(res => CartActions.removeFromCartSuccess({ cart: res })),
          catchError(err => of(CartActions.removeFromCartFailure({ error: err.message })))
        )
      )
    )
  );

  clearCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.clearCart),
      mergeMap(() =>
        this.cartService.clearCart().pipe(
          map(() => CartActions.clearCartSuccess()),
          catchError(err => of(CartActions.clearCartFailure({ error: err })))
        )
      )
    )
  );
}
