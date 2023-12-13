import { inject } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter, map } from "rxjs";

export const isCurrentUrlIncludedFn = (...excludedRoutes: string[]) => {
  const router = inject(Router);

  return router.events
    .pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => e as NavigationEnd),
      map(({url, urlAfterRedirects}) => 
        !excludedRoutes.includes(url) && !excludedRoutes.includes(urlAfterRedirects)),
    );
}
