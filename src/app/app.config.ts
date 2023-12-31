import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { provideQueryClientOptions } from '@ngneat/query';
import { provideQueryDevTools } from '@ngneat/query-devtools';
import { routes } from './app.routes';
import { ProductPageTitleStrategy } from './product-page-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: TitleStrategy,
      useClass: ProductPageTitleStrategy,
    },
    isDevMode() ? provideQueryDevTools({
      initialIsOpen: true
    }): [],
    provideQueryClientOptions({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
        },
      },
    }),
  ]
};
