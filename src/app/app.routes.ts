import { Routes } from '@angular/router';
import { ProductPageComponent } from './product/pages/product-page/product-page.component';

export const routes: Routes = [
  {
    path: 'product',
    loadComponent: () => import('./product/pages/product-page/product-page.component').then(p=>p.ProductPageComponent)
  },
  {
    path:'**',
    redirectTo: 'product'
  }
];
