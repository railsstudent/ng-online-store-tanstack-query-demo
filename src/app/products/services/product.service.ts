import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, forkJoin, map, of, shareReplay, switchMap } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { injectQuery } from '@ngneat/query';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';
const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';
const FEATURED_PRODUCTS_URL = 'https://gist.githubusercontent.com/railsstudent/ae150ae2b14abb207f131596e8b283c3/raw/131a6b3a51dfb4d848b75980bfe3443b1665704b/featured-products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly httpClient = inject(HttpClient);
  private readonly query = injectQuery();

  getCategories() {
    return this.query({
      queryKey: ['categories'] as const,
      queryFn: () => this.httpClient.get<string[]>(CATEGORIES_URL)
        .pipe(shareReplay(1))
    })
  }

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
      queryFn: () => this.getProductQuery(id)
    });
  }

  private getProductQuery(id: number) {
    return this.httpClient.get<Product>(`${PRODUCTS_URL}/${id}`).pipe(
      catchError((err) => {
        console.error(err);
        return of(undefined)
      })
    );
  }

  getFeaturedProducts() {
    return this.query({
      queryKey: ['feature_products'] as const,
      queryFn: () => this.httpClient.get<{ ids: number[] }>(FEATURED_PRODUCTS_URL)
        .pipe(
          map(({ ids }) => ids), 
          switchMap((ids) => {
            const observables$ = ids.map((id) => this.getProductQuery(id));
            return forkJoin(observables$);
          }),
          map((productOrUndefinedArrays) => {
            const products: Product[] = [];
            productOrUndefinedArrays.forEach((p) => {
              if (p) {
                products.push(p);
              }
            });
            return products;
          }),
          shareReplay(1),
        )
    });
  }
}