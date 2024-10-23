import { Routes } from '@angular/router';
import { ProductPageComponent } from './product/pages/product-page/product-page.component';
import { UpdatePageComponent } from './product/pages/update-page/update-page.component';

export const routes: Routes = [
  {
    path: 'product',
    loadComponent: () => import('./product/pages/product-page/product-page.component').then(p => p.ProductPageComponent)
  },
  {
    path: 'update/:id',
    component: UpdatePageComponent
  },
  {
    path: '**',
    redirectTo: 'product'
  }
];
