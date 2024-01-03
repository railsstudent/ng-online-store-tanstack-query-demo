import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject, numberAttribute, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ObservableQueryResult } from '@ngneat/query';
import { CartService } from '../../carts/services/cart.service';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [TitleCasePipe, FormsModule, AsyncPipe, RouterLink],
  template: `
    <div>
      @if(product$ | async; as product) {
        @if (product.isLoading) {
          <p>Loading...</p>
        } @else if (product.isError) {
          <p>Product is invalid</p>
        } @else if (product.isSuccess) {
          @if (product.data; as data) {
            <div class="product">
              <div class="row">
                <img [src]="data.image" [attr.alt]="data.title || 'product image'" width="200" height="200" />
              </div>
              <div class="row">
                <span>id:</span>
                <span>{{ data.id }}</span>
              </div>
              <div class="row">
                <span>Category: </span>
                <span>
                  <a [routerLink]="['/categories', data.category]">{{ data.category | titlecase }}</a>
                </span>
              </div>
              <div class="row">
                <span>Name: </span>
                <span>{{ data.title }}</span>
              </div>
              <div class="row">
                <span>Description: </span>
                <span>{{ data.description }}</span>
              </div>
              <div class="row">
                <span>Price: </span>
                <span>{{ data.price }}</span>
              </div> 
            </div>
            <div class="buttons">
              <input type="number" class="order" min="1" [ngModel]="quantity()" (ngModelChange)="quantity.set($event)" />
              <button (click)="addItem(data)">Add</button>
            </div>
          }
        }
      }
    </div>
  `,
  styles: [`
    .product, .buttons {
      margin-bottom: 1rem;
    }

    .row > span {
      display: inline-block;
      margin-bottom: 0.25rem;
    }

    .row > span:first-of-type {
      color: #aaa;
      width: 20%;
    }

    .row > span:nth-of-type(2) {
      width: 80%;
    }

    input.order {
      width: 100px;
      height: 30px;
      margin-right: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  @Input({ required: true, transform: numberAttribute })
  id!: number;

  productService = inject(ProductService);
  cartService = inject(CartService);
  quantity = signal(1);
  product$!: ObservableQueryResult<Product | undefined>;
  
  ngOnInit(): void {
    this.product$ = this.productService.getProduct(this.id).result$;
  }

  addItem(product: Product) {
    if (product) {
      this.cartService.addItem(product, this.quantity());
    }
  }
}