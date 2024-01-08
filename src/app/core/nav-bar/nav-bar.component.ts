import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isCurrentUrlIncludedFn } from './utilities/is-current-url-included';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  template: `
    <div>
      @if (isShowHomeButton$ | async) {
        <a routerLink="/">Home</a>
      } @else {
        <span>&nbsp;</span>
      }
      @if (isShowViewCartButton$ | async) {
        <a [routerLink]="['my-cart']">View Cart</a>
      } @else {
        <span>&nbsp;</span>
      }
    </div>
  `,
  styles: [`
    div {
      background: goldenrod;
      height: 50px;
      padding: 0.25rem;
      margin-bottom: 1rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  isShowHomeButton$ = isCurrentUrlIncludedFn('/', '/products');
  isShowViewCartButton$ = isCurrentUrlIncludedFn('/my-cart');
}
