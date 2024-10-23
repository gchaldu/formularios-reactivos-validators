import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../interface/product.interface';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {


  @Output()
  emitirProduct = new EventEmitter<Product>();

  //Formularios
  fb = inject(FormBuilder);

  formProduct = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    precio: [0, [Validators.required, Validators.min(100)]],
    existencias: [0, [Validators.required]]
  })

  //Servicio products
  productService = inject(ProductService)

  addProduct() {

    if (this.formProduct.invalid) return

    const product = this.formProduct.getRawValue();

    this.emitirProduct.emit(product);

    this.altaBD(product);

    this.formProduct.reset({
      nombre: '',
      precio: 0,
      existencias: 0
    })
  }

  //Api
  altaBD(product: Product) {
    this.productService.postProduct(product).subscribe(
      {
        next: (product) => {
          alert(`Producto ingresado ${product.nombre}`)
        },
        error: (err: Error) => {
          console.log(err.message)
        }
      }
    )
  }
}
