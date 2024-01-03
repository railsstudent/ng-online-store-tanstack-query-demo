import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <div class="image-container">
        <img [src]="product.image" alt="image" width="100" height="100" />
      </div>
      <label for="id">
        <span id="id" name="id">Id: </span>
        <span>{{product.id}}</span>
      </label>
      <label for="name">
        <span id="name" name="name">Title: </span>
        <span><a [routerLink]="['/products', product.id]" >{{product.title}}</a></span>
      </label>
      <label for="price">
        <span id="price" name="price">Price: </span>
        <span>{{product.price}}</span>
      </label>
    </div>
  `,
  styles: [`
    div.container {
      display: flex;
      flex-direction: column;

      border: 1px solid black;
      padding: 0.5rem;
      height: calc(100% - 2 * 0.5rem);
    }

    div.image-container {
      width: 100%;

      display: flex;
      justify-content: center;
      margin-bottom: 0.5rem;
    }

    label:first-of-type {
      margin-bottom: 10px;
    }

    label > span {
      display: inline-block;
    }

    label > span:first-of-type {
      color: #aaa;
      width: 20%;
    }

    label > span:nth-of-type(2) {
      width: 80%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input({ required: true })
  product!: Product;
}