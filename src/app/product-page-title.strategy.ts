import { inject, Injectable, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { ProductService } from './products/services/product.service';

@Injectable()
export class ProductPageTitleStrategy extends TitleStrategy {
  title = inject(Title);
  productService = inject(ProductService);
  subscription: Subscription | null = null;
  
  updateTitle(snapshot: RouterStateSnapshot): void {
    this.subscription?.unsubscribe();

    const customTitle = this.buildTitle(snapshot) || '';
    const productId = snapshot.root.firstChild?.params['id'] || '';
    if (productId) {
        this.subscription = this.productService.getProduct(+productId).result$
          .pipe(
            map((product) => product.data?.title || ''),
            map((productTitle) => `Product - ${productTitle}`),
          )
          .subscribe((pageTitle) => this.title.setTitle(pageTitle));
    } else {
      this.title.setTitle(customTitle);
    }
  }
}