import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { map, tap } from 'rxjs';
import { ProductService } from './products/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductPageTitleStrategy extends TitleStrategy {
  title = inject(Title);
  productService = inject(ProductService);
  destroyRef$ = inject(DestroyRef);
  
  updateTitle(snapshot: RouterStateSnapshot): void {
    const customTitle = this.buildTitle(snapshot) || '';
    const productId = snapshot.root.firstChild?.params['id'] || '';
    if (productId) {
        this.productService.getProduct(productId).result$
          .pipe(
            map((product) => product.data?.title || ''),
            map((productTitle) => `Product - ${productTitle}`),
            tap((pageTitle) => this.title.setTitle(pageTitle)),
            takeUntilDestroyed(this.destroyRef$),
          )
          .subscribe();
    } else {
      this.title.setTitle(customTitle);
    }
  }
}