import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent {
  darkMode = signal<boolean>(
    JSON.parse(localStorage.getItem('darkMode') ?? 'false')
  );

  constructor() {
    effect(() => {
      localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));

      if (this.darkMode()) document.body.classList.add('dark');
      else document.body.classList.remove('dark');
    });
  }
}
