import { createAction, props } from '@ngrx/store';
import { Cart } from './cart.models';

// Load Cart
export const loadCart = createAction('[Cart] Load Cart');

export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ cart: Cart }>()
);

export const loadCartFailure = createAction(
  '[Cart] Load Cart Failure',
  props<{ error: string }>()
);

// Add to Cart
export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: string; quantity: number }>()
);

export const addToCartSuccess = createAction(
  '[Cart] Add To Cart Success',
  props<{ cart: Cart }>()
);

export const addToCartFailure = createAction(
  '[Cart] Add To Cart Failure',
  props<{ error: string }>()
);

// Update Cart
export const updateCart = createAction(
  '[Cart] Update Cart',
  props<{ productId: string; quantity: number }>()
);

export const updateCartSuccess = createAction(
  '[Cart] Update Cart Success',
  props<{ cart: Cart }>()
);

export const updateCartFailure = createAction(
  '[Cart] Update Cart Failure',
  props<{ error: string }>()
);

// Remove from Cart
export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ productId: string }>()
);

export const removeFromCartSuccess = createAction(
  '[Cart] Remove From Cart Success',
  props<{ cart: Cart }>()
);

export const removeFromCartFailure = createAction(
  '[Cart] Remove From Cart Failure',
  props<{ error: string }>()
);

// Clear Cart
export const clearCart = createAction('[Cart] Clear Cart');

export const clearCartSuccess = createAction('[Cart] Clear Cart Success');

export const clearCartFailure = createAction(
  '[Cart] Clear Cart Failure',
  props<{ error: string }>()
);
