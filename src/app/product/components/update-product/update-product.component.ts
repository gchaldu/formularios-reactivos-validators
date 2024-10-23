import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { provideHttpClient } from '@angular/common/http';
import { Product } from '../../interface/product.interface';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  id: string | null = ''

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.getProduct(this.id);
    })
  }

  fb = inject(FormBuilder)
  route = inject(ActivatedRoute)
  productService = inject(ProductService)

  formProduct = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(100)]],
    existencias: [0, [Validators.required]],
  })

  setProduct(product: Product) {
    this.formProduct.controls['nombre'].setValue(product.nombre);
    this.formProduct.controls['precio'].setValue(product.precio);
    this.formProduct.controls['existencias'].setValue(product.existencias);
  }

  getProduct(id: string | null) {
    this.productService.getProductById(id).subscribe(
      {
        next: (product) => {
          this.setProduct(product)
        },
        error: (e: Error) => {
          console.log(e.message)
        }
      }
    )
  }
  updateProduct() {

    if (this.formProduct.invalid) return

    const product = this.formProduct.getRawValue()
    this.productService.updateProduct(this.id, product).subscribe(
      {
        next: () => {
          console.log('actualizado...')
        },
        error: (e: Error) => {
          console.log(e.message)
        }
      }
    )
  }
}
