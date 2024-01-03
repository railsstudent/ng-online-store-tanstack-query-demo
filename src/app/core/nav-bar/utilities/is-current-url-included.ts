import { ChangeDetectorRef, assertInInjectionContext, inject } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter, map, tap } from "rxjs";

export const isCurrentUrlIncludedFn = (...excludedRoutes: string[]) => {
  assertInInjectionContext(isCurrentUrlIncludedFn);

  const router = inject(Router);
  const cdr = inject(ChangeDetectorRef);

  return router.events
    .pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => e as NavigationEnd),
      map(({url, urlAfterRedirects}) => 
        !excludedRoutes.includes(url) && !excludedRoutes.includes(urlAfterRedirects)),
      tap(() => cdr.markForCheck())
    );
}
