import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, ENVIRONMENT_INITIALIZER, InjectionToken, Injector, assertInInjectionContext, inject, isDevMode, makeEnvironmentProviders, runInInjectionContext } from '@angular/core';
import { TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { provideQueryDevTools } from '@ngneat/query-devtools';
import { routes } from './app.routes';
import { ProductPageTitleStrategy } from './product-page-title.strategy';

// const CORE_GUARD = new InjectionToken<string>('CORE_TOKEN');
// const ENVIRONMENT_NAME = new InjectionToken<string>('ENVIRONMENT');

// export function provideCore() {
//   return makeEnvironmentProviders([
//     {
//       provide: CORE_GUARD,
//       useValue: 'CORE_GUARD'
//     },
//     {
//       provide: ENVIRONMENT_NAME,
//       useValue: () => {
//         const coreGuard = inject(CORE_GUARD, {
//           skipSelf: true,
//           optional: true,
//         });

//         console.log('coreGuard', coreGuard);

//         if (coreGuard) {
//           throw new TypeError('providerCore cannot load more than once.');
//         }

//         return 'development';        
//       }
//     },
//   ]);
// }

// function provideQueryDevToolsWrapper() {
//   const injector = inject(Injector);

//   return runInInjectionContext(injector, () => {
//     const name = inject(ENVIRONMENT_NAME);
//     console.log('environment name', name);
//     return name === 'production' ? [] : provideQueryDevTools({
//       initialIsOpen: true,
//     });
//   });
// }

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: TitleStrategy,
      useClass: ProductPageTitleStrategy,
    },
    // provideCore(),
    // {
    //   provide: ENVIRONMENT_INITIALIZER,
    //   multi: true,
    //   useFactory: () => {
    //     const name = inject(ENVIRONMENT_NAME);
    //     console.log('environment name', name);
    //     return name === 'production' ? [] : provideQueryDevTools({
    //       initialIsOpen: true,
    //     });    
    //   }      
    // }
    isDevMode() ? provideQueryDevTools({
      initialIsOpen: true
    }): []
  ]
};
