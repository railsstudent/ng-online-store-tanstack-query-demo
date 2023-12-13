import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { intersectResults$, ObservableQueryResult } from '@ngneat/query';
import { combineLatest } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-feature-products',
  standalone: true,
  imports: [ProductComponent, AsyncPipe, JsonPipe],
  template: `
    @if (products$ | async; as products) {
      @if (products.isLoading) {
        <p>Loading featured products...</p>
      } @else if (products.isSuccess) {
        <h2>Featured Products</h2>
        @if (products.data; as data) {
          <div class="featured">
            @for (product of data; track product.id) {
              <app-product [product]="product" class="item" />
            }
          </div>
        }
        <hr>
      }
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
export class FeatureProductsComponent implements OnInit {
  @Input({ required: true })
  ids!: number[];

  private readonly productService = inject(ProductService);
  products$!: ObservableQueryResult<Product[]>;
  
  ngOnInit(): void {
    const query = this.ids.map((id) => 
      this.productService.getProduct(id).result$)

    this.products$ = combineLatest(query).pipe(
      intersectResults$((products) => {
        const results: Product[] = [];
        products.forEach((product) => product && results.push(product));
        return results;
      })
    );
  }
}