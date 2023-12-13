import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Injector } from '@angular/core';
import { catchError, Observable, of, shareReplay } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { injectQuery } from '@ngneat/query';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly httpClient = inject(HttpClient);
  private readonly query = injectQuery();

  getProducts() {
    return this.query({
      queryKey: ['products'] as const,
      queryFn: () => this.httpClient.get<Product[]>(PRODUCTS_URL)
        .pipe(shareReplay(1))
    })
  }

  getProduct(id: number) {
    return this.query({
      queryKey: ['products', id] as const,
      queryFn: () => this.httpClient.get<Product>(`${PRODUCTS_URL}/${id}`).pipe(
        catchError((err) => {
          console.error(err);
          return of(undefined)
        })
      )
    });
  }
}