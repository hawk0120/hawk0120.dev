import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  theme: 'light' | 'dark' = 'light';

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(t => this.theme = t);
  }

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }
}

