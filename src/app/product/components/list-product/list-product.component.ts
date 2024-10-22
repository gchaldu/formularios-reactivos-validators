import { Component } from '@angular/core';
import { AddProductComponent } from "../add-product/add-product.component";

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [AddProductComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

}
