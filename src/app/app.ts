import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { WaterComponent } from './components/water/water';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, WaterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'bradyhawkins-dev';
}
