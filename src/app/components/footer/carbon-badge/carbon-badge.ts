import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-carbon-badge',
  imports: [],
  templateUrl: './carbon-badge.html',
  styleUrl: './carbon-badge.scss'
})
export class CarbonBadgeComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js';
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}

