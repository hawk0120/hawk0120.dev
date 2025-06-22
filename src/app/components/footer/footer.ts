import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import {CarbonBadgeComponent} from './carbon-badge/carbon-badge';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [CarbonBadgeComponent],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})

export class FooterComponent implements AfterViewInit {
  currentYear = new Date().getFullYear();

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.src = 'assets/website-carbon-badges/b.min.js';
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}

