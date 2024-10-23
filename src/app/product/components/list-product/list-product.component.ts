import { Component, inject, OnInit } from '@angular/core';
import { AddProductComponent } from "../add-product/add-product.component";
import { Product } from '../../interface/product.interface';
import { ProductService } from '../../service/product.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [AddProductComponent, RouterModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {


  router = inject(Router);

  listaProductos: Product[] = [];

  productService = inject(ProductService)

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this.productService.getProduct().subscribe(
      {
        next: (products: Product[]) => {
          this.listaProductos = products
        },
        error: (err: Error) => {
          console.log(err.message)
        }
      }
    )
  }

  addlistProduct(product: Product) {
    this.listaProductos = [...this.listaProductos, product];
  }

  eliminarProduct(id: string | undefined) {
    this.productService.deleteProduct(id).subscribe(
      {
        next: (product: Product) => {
          console.log('Eliminado...')
        },
        error: (e: Error) => {
          console.log(e.message)
        }
      }
    )
  }
}
