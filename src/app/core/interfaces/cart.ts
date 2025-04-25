export interface Root {
    message: string
    numOfCartItems: number
    cart: Cart
}
  
  export interface Cart {
    _id: string
    user: string
    cartItems: CartItem[]
    discount: number
    totalPrice: number
    totalPriceAfterDiscount: number
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface CartItem {
    product: Product
    price: number
    quantity: number
    _id: string
  }
  
  export interface Product {
    rateAvg: number
    rateCount: number
    _id: string
    title: string
    slug: string
    description: string
    imgCover: string
    images: string[]
    price: number
    priceAfterDiscount: number
    quantity: number
    category: string
    occasion: string
    createdAt: string
    updatedAt: string
    __v: number
    sold: number
    discount: number
    id: string
  }
  