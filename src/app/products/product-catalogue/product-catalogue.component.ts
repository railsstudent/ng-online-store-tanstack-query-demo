import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureProductsComponent } from '../feature-products/feature-products.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-catalogue',
  standalone: true,
  imports: [FeatureProductsComponent, ProductListComponent],
  template: `
    <app-feature-products [ids]="[4, 19]" />
    <app-product-list />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogueComponent {}
