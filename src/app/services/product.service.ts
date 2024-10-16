import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { forkJoin, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://dummyjson.com/products';
  private beautyUrl = 'https://dummyjson.com/products/category/smartphones';

  constructor(private http: HttpClient) {}

  beautyProductsRequest(): Observable<Product[]> {
    const request1 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/beauty'
    );
    const request2 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/fragrances'
    );
    const request3 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/skin-care'
    );

    return forkJoin([request1, request2, request3]).pipe(
      map((responses) => {
        return responses.flatMap((response) => response.products);
      })
    );
  }

  getLimitedProducts(limit: number): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>(this.url, { params: { limit } })
      .pipe(map((response) => response.products));
  }

  // beauty, fragrances, skin-care
  getBeautyProducts(): Observable<Product[]> {
    const beautyProducts: Product[] = [];
    beautyProducts.push();

    return this.beautyProductsRequest();
  }
  
}
