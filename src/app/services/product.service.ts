import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { forkJoin, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getLimitedProducts(limit: number): Observable<Product[]> {
    const url = 'https://dummyjson.com/products';
    return this.http
      .get<{ products: Product[] }>(url, { params: { limit } })
      .pipe(map((response) => response.products));
  }

  getBeautyProducts(): Observable<Product[]> {
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
        console.log(responses);
        const t = responses.flatMap((response) => response.products);
        console.log(responses.map((response) => response.products));
        return t;
      })
    );
  }

  getFashionAccessoryProducts(): Observable<Product[]> {
    const request1 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/mens-shirts'
    );
    const request2 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/mens-shoes'
    );
    const request3 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/mens-watches'
    );
    const request4 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/sunglasses'
    );
    const request5 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/womens-bags'
    );
    const request6 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/womens-dresses'
    );
    const request7 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/womens-jewellery'
    );
    const request8 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/womens-shoes'
    );
    const request9 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/womens-watches'
    );
    const request10 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/tops'
    );

    return forkJoin([
      request1,
      request2,
      request3,
      request4,
      request5,
      request6,
      request7,
      request8,
      request9,
      request10,
    ]).pipe(
      map((responses) => {
        return responses.flatMap((response) => response.products);
      })
    );
  }

  getElectronicsGadgetProducts(): Observable<Product[]> {
    const request1 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/laptops'
    );
    const request2 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/smartphones'
    );
    const request3 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/tablets'
    );
    const request4 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/mobile-accessories'
    );

    return forkJoin([request1, request2, request3, request4]).pipe(
      map((responses) => {
        return responses.flatMap((response) => response.products);
      })
    );
  }

  getHomeProducts(): Observable<Product[]> {
    const request1 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/furniture'
    );
    const request2 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/home-decoration'
    );
    const request3 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/kitchen-accessories'
    );

    return forkJoin([request1, request2, request3]).pipe(
      map((responses) => {
        return responses.flatMap((response) => response.products);
      })
    );
  }

  getAutomotiveProducts(): Observable<Product[]> {
    const request1 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/motorcycle'
    );
    const request2 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/vehicle'
    );

    return forkJoin([request1, request2]).pipe(
      map((responses) => {
        return responses.flatMap((response) => response.products);
      })
    );
  }

  getSportProducts(): Observable<Product[]> {
    const request1 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/sports-accessories'
    );

    return request1.pipe(map((response) => response.products));
  }

  getGroceryProducts(): Observable<Product[]> {
    const request1 = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products/category/groceries'
    );

    return request1.pipe(map((response) => response.products));
  }
}
