
import { environment } from '../../../environments/environment.dev';


export const cart={
cart:`${environment.BaseURL}cart`,
}

export const products={
    getProducts:`${environment.BaseURL}products`,
    getSpacificProduct:`${environment.BaseURL}products/`,
}

export const orders={
    userOrders:`${environment.BaseURL}orders`,
    cashOrder:`${environment.BaseURL}orders`,
    checkOutSession:`${environment.BaseURL}orders/checkout?url=http://localhost:4200`
}

export const categories={
    getcategories:`${environment.BaseURL}categories`,
    getSpacificcategory:`${environment.BaseURL}categories`,
}

export const sales={}