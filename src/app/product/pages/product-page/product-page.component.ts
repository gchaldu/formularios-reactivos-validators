import { Component } from '@angular/core';
import { AddProductComponent } from '../../components/add-product/add-product.component';
import { ListProductComponent } from '../../components/list-product/list-product.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ListProductComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

}
