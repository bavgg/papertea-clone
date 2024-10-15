import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "https://dummyjson.com/products";

  constructor(private http: HttpClient) { }

  getLimitedProducts(limit: number): Observable<Product[]> {
    return this.http.get<{ products: Product[]}>(this.url, {params: { limit }}).pipe(
      map(response => response.products)
    )
  }

}
