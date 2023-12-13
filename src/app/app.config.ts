import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { ProductPageTitleStrategy } from './product-page-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: TitleStrategy,
      useClass: ProductPageTitleStrategy,
    }
  ]
};
