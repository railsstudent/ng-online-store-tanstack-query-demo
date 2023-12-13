import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  template: `
    <h2>Catalogue</h2>
    <div>
      @if (products().isLoading) {
        <p>Loading...</p>
      } @else if (products().isError) {
        <p>Error</p>
      } @else if (products().isSuccess) { 
        @if (products().data; as data) {
          @for (product of data; track product.id) {
            <app-product [product]="product" />
          }
        }
      }
    </div>
  `,
  styles: [`
    div {
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
  products = inject(ProductService).getProducts().result;
}
