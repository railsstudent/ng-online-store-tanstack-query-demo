import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../products/interfaces/product.interface';
import { injectQuery } from '@ngneat/query';

const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';
const CATEGORY_URL = 'https://fakestoreapi.com/products/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly httpClient = inject(HttpClient);
  private readonly query = injectQuery();

  getCategories() {
    return this.query({
      queryKey: ['categories'] as const,
      queryFn: () => this.httpClient.get<string[]>(CATEGORIES_URL)
    })
  }

  getCategory(category: string) {
    return this.query({
      queryKey: ['categories', category] as const,
      queryFn: () => this.httpClient.get<Product[]>(`${CATEGORY_URL}/${category}`)
    })
  }
}
