import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.models';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCart = createSelector(selectCartState, (state) => state.cart);
export const selectCartItems = createSelector(selectCart, (cart) => cart?.cart.cartItems || []);
export const selectCartLoading = createSelector(selectCartState, (state) => state.loading);
export const selectCartError = createSelector(selectCartState, (state) => state.error);
