import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./products/product-catalogue/product-catalogue.component').then((m) => m.ProductCatalogueComponent),
    title: 'Product list',
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./products/product-details/product-details.component').then((m) => m.ProductDetailsComponent),
    title: 'Product',
  },
  {
    path: 'my-cart',
    loadComponent: () => import('./carts/cart/cart.component').then((m) => m.CartComponent),
    title: 'My shopping cart',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];
