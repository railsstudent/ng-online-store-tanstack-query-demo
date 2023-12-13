import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  template: `
    <div>
      <h2>Angular Tanstack/Query Demo</h2>
      <app-nav-bar />
      <router-outlet />
    </div>`,
  styles: `
    div {
      padding: 0.75rem;
    }

    h2 {
      margin-bottom: 0.75rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(title: Title) {
    title.setTitle('Angular 16 + Tanstack/Query for Angular Demo');  
  }
}
