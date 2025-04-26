//   response before adaptation
export interface LoginData {
    message: string
    user: User
    token: string
  }
  
  export interface User {
    _id: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    photo: string
    role: string
    wishlist: any[]
    addresses: any[]
    createdAt: string
  }
  
//   response after adaptation
  export interface LoginResponse{
    message: string,
    token: string,
    userEmail:string
  }





  