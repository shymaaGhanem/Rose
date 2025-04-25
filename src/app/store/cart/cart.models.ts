export interface Product {
  rateAvg: number;
  rateCount: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images: string[];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  category: string;
  occasion: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  sold: number;
  discount: number;
  id: string;
}

export interface CartItem {
  product: Product;
  price: number;
  quantity: number;
  _id: string;
}

export interface Cart {
  cart:{
    _id: string;
    user: string;
    cartItems: CartItem[];
    discount: number;
    totalPrice: number;
    totalPriceAfterDiscount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  },
 
  message: string;  
  numOfCartItems: number;  
}

export interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}

export const initialCartState: CartState = {
  cart: null,
  loading: false,
  error: null,
};
