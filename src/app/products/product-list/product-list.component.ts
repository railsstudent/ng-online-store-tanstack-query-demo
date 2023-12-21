import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { intersectResults } from '@ngneat/query';
import { Product } from '../interfaces/product.interface';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, TitleCasePipe],
  template: `
    <h2>Catalogue</h2>
    <div>
      @if (categoryProducts().isLoading) {
        <p>Loading...</p>
      } @else if (categoryProducts().isError) {
        <p>Error</p>
      } @else if (categoryProducts().isSuccess) { 
        @if (categoryProducts().data; as data) {
          @for (catProducts of data; track catProducts.category) {
            <h3>{{ catProducts.category | titlecase }}</h3>
            <div class="products">
            @for (product of catProducts.products; track product.id) {
              <app-product [product]="product" />
            }
            </div>
          }
        }
      }
    </div>
  `,
  styles: [`
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
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  productService = inject(ProductService);

  categoryProducts = intersectResults(
    { 
      categories: this.productService.getCategories().result, 
      products: this.productService.getProducts().result
    },
    ({ categories, products }) => 
      categories.reduce((acc, category) => {
        const matched = products.filter((p) => p.category === category);

        return acc.concat({
          category,
          products: matched,
        });
      }, [] as { category: string; products: Product[] }[])
  );
}
