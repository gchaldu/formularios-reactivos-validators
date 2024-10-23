import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http = inject(HttpClient)
  urlBase = 'http://localhost:3000/products'

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlBase);
  }

  getProductById(id: string | null): Observable<Product> {
    return this.http.get<Product>(`${this.urlBase}/${id}`)
  }

  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.urlBase, product)
  }

  deleteProduct(id: string | undefined): Observable<Product> {
    return this.http.delete<Product>(`${this.urlBase}/${id}`)
  }

  updateProduct(id: string | null, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.urlBase}/${id}`, product);
  }
}
