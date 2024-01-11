import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { ObservableQueryResult } from '@ngneat/query';
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
      @if(products.isLoading) {
        <p>Loading...</p>
      } @else if (products.isError) {
        <p>Error: {{ products.error.message }}</p>
      } @else if(products.isSuccess) {
        @if (products.data.length > 0) {
          <div class="products">
            @for(product of products.data; track product.id) {
              <app-product [product]="product" />
            }
          </div>
        } @else {
          <p>Category does not have products</p>
        }
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductsComponent implements OnInit {
  @Input({ required: true })
  category!: string;

  categoryService = inject(CategoryService);
  products$!: ObservableQueryResult<Product[], Error>;

  ngOnInit(): void {
    this.products$ = this.categoryService.getCategory(this.category).result$;
  }
}
