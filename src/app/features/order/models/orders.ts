export interface Root {
    message: string
    metadata: Metadata
    orders: Order[]
  }
  
  export interface Metadata {
    currentPage: number
    totalPages: number
    limit: number
    totalItems: number
  }
  
  export interface Order {
    _id: string
    user: string
    orderItems: OrderItem[]
    totalPrice: number
    paymentType: string
    isPaid: boolean
    isDelivered: boolean
    state: string
    createdAt: string
    updatedAt: string
    orderNumber: string
    __v: number
  }
  
  export interface OrderItem {
    product?: Product
    price: number
    quantity: number
    _id: string
  }
  
  export interface Product {
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
    discount: number
    sold: number
    rateAvg: number
    rateCount: number
    id: string
  }
  