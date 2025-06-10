import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentTheme = new BehaviorSubject<'light' | 'dark'>('light');
  theme$ = this.currentTheme.asObservable();

  toggleTheme() {
    const next = this.currentTheme.value === 'light' ? 'dark' : 'light';
    this.currentTheme.next(next);

    document.documentElement.setAttribute('data-theme', next);
  }

  getCurrentThemeValue(): 'light' | 'dark' {
    return this.currentTheme.value;
  }
}


