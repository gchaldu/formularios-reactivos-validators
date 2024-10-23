import { Component } from '@angular/core';
import { UpdateProductComponent } from '../../components/update-product/update-product.component';
import { ProductPageComponent } from "../product-page/product-page.component";

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [UpdateProductComponent, ProductPageComponent],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.css'
})
export class UpdatePageComponent {

}
