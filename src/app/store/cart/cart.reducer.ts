import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { CartState, initialCartState } from './cart.models';

export const cartReducer = createReducer(
  initialCartState,

  on(CartActions.loadCart, (state) => ({ ...state, loading: true })),
  on(CartActions.loadCartSuccess, (state, { cart }) => {
    console.log('Updated cart state:', cart);
    return {
      ...state,
      cart,
      loading: false,
      error: null
    };
  }),
  on(CartActions.loadCartFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(CartActions.addToCartSuccess, (state, { cart }) => ({
    ...state,
    cart,
    loading: false,
    error: null
  })),
  on(CartActions.addToCartFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(CartActions.updateCartSuccess, (state, { cart }) => ({
    ...state,
    cart,
    loading: false,
    error: null
  })),
  on(CartActions.updateCartFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(CartActions.removeFromCartSuccess, (state, { cart }) => ({
    ...state,
    cart,
    loading: false,
    error: null
  })),
  on(CartActions.removeFromCartFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(CartActions.clearCartSuccess, (state) => ({
    ...state,
    cart: null,
    loading: false,
    error: null
  })),
  on(CartActions.clearCartFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
