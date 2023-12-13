import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartTotalComponent } from '../cart-total/cart-total.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CartTotalComponent, FormsModule],
  template: `
    @if (cart().length > 0) {
      <div class="cart">
        <div class="row">
          <p style="width: 10%">Id</p>
          <p style="width: 20%">Title</p>
          <p style="width: 40%">Description</p>
          <p style="width: 10%">Price</p>
          <p style="width: 10%">Qty</p> 
          <p style="width: 10%">&nbsp;</p> 
        </div>

        @for (item of cart(); track item.id) {
          <app-cart-item [item]="item" />
        }
        <app-cart-total />
        <span>Promotion code: </span>
        <input [ngModel]="promoCode()" #promotionCode="ngModel" />
        <button (click)="promoCode.set(promotionCode.value)">Apply</button>
      </div>
    } @else {
      <p>Your cart is empty, please buy something.</p>
    }
  `,
  styles: [`
    .row {
      display: flex;
    }

    .row > p {
      border: 1px solid black;
    }

    input {
      margin-right: 0.25rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartService = inject(CartService);
  cart = this.cartService.cart;
  promoCode = this.cartService.promoCode;

  constructor() {
    effect(() => { 
      console.log('Promo code changes to ', this.promoCode());
      console.log('Cart changes to ', this.cart());
    });
  }
}