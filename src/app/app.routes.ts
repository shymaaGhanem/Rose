import { Routes } from '@angular/router';

export const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: "full"},
     {
        path: 'home',
        loadComponent: () => import('./features/home/pages/home/home.component').then(c => c.HomeComponent)
      },
     {
        path: 'about',
        loadComponent: () => import('./features/about/pages/about/about.component').then(c => c.AboutComponent)
      },
     {
        path: 'contact',
        loadComponent: () => import('./features/contact/pages/contact/contact.component').then(c => c.ContactComponent)
      },
      {
        path: 'categories',
        loadComponent: () => import('./features/categories/pages/categories/categories.component').then(c => c.CategoriesComponent)
      },
      {
        path: 'cart',
        loadComponent: () => import('./features/cart/pages/cart/cart.component').then(c => c.CartComponent)
      },
      {
        path: 'allOrders',
        loadComponent: () => import('./features/order/pages/all-orders/all-orders.component').then(c => c.AllOrdersComponent)
      },
      {
        path: 'productDetails/:id',
        loadComponent: () => import('./features/home/pages/product-details/product-details.component').then(c => c.ProductDetailsComponent)
      },
      {
        path: 'categoryDetails/:id',
        loadComponent: () => import('./features/categories/pages/category-details/category-details.component').then(c => c.CategoryDetailsComponent)
      },
      {
        path: 'checkout/:id',
        loadComponent: () => import('./features/order/pages/checkout/checkout.component').then(c => c.CheckoutComponent)
      }
];
