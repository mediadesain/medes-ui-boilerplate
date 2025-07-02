import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  public _darkMode = new BehaviorSubject<boolean>(false);
  readonly darkMode$ = this._darkMode.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setTheme(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.setTheme(prefersDark.matches);
      prefersDark.addEventListener('change', (mediaQuery) => {
        this.setTheme(mediaQuery.matches);
      });
    }
  }

  toggleTheme(): void {
    this.setTheme(!this._darkMode.value);
    localStorage.setItem('theme', this._darkMode.value ? 'dark' : 'light');
  }

  private setTheme(isDark: boolean): void {
    this._darkMode.next(isDark);
    if (isDark) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}
