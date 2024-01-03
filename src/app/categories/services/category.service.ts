import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../products/interfaces/product.interface';

const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';
const CATEGORY_URL = 'https://fakestoreapi.com/products/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly httpClient = inject(HttpClient);

  categories$ = this.httpClient.get<string[]>(CATEGORIES_URL);

  getCategory(category: string) {
    return this.httpClient.get<Product[]>(`${CATEGORY_URL}/${category}`);
  }
}
