import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

fb = inject(FormBuilder);

formProduct = this.fb.nonNullable.group({
  nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
  precio: [0, [Validators.required, Validators.min(100)]],
  existencias: [0, [Validators.required]]
})

addProduct(){

  if(this.formProduct.invalid) return

  const product = this.formProduct.getRawValue();

  this.formProduct.reset({
    nombre:'',
    precio:0,
    existencias:0
  })
}


}
