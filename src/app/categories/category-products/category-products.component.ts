import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../products/interfaces/product.interface';
import { ProductComponent } from '../../products/product/product.component';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [AsyncPipe, ProductComponent, TitleCasePipe],
  template: `
    <h2>{{ category | titlecase }}</h2>
    @if (products$ | async; as products) {
      @if (products.length) {
      <div class="products">
        @for(product of products; track product.id) {
          <app-product [product]="product" />
        }
      </div>
      } @else {
        <p>Category does not have products</p>
      }
    }
  `,
  styles: `
    div.products {
      display: flex;
      flex-wrap: wrap;
      align-content: stretch;
    }

    app-product {
      flex-basis: 250px;
      height: 300px;
      margin-bottom: 1rem;
    }
  `
})
export class CategoryProductsComponent implements OnInit {
  @Input({ required: true })
  category!: string;

  categoryService = inject(CategoryService);
  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.categoryService.getCategory(this.category);
  }
}
