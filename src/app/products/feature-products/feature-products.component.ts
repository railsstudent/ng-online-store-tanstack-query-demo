import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-feature-products',
  standalone: true,
  imports: [ProductComponent],
  template: `
    @if (featuredProducts().isLoading) {
      <p>Loading featured products...</p>
    } @else if (featuredProducts().isSuccess) {
      <h2>Featured Products</h2>
      @if (featuredProducts().data; as data) {
        <div class="featured">
          @for (product of data; track product.id) {
            <app-product [product]="product" class="item" />
          }
        </div>
      }
      <hr>
    }
  `,
  styles: `
    h2, hr {
      margin-bottom: 0.5rem;
    }

    div.featured {
      display: flex;
      flex-wrap: wrap;

      margin-bottom: 0.75rem;
    }

    div.featured > .item {
      flex-basis: 250px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureProductsComponent {
  private readonly productService = inject(ProductService);
  featuredProducts = this.productService.getFeaturedProducts().result;
}