import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carbon-badge',
  imports: [],
  templateUrl: './carbon-badge.html',
  styleUrl: './carbon-badge.scss'
})

export class CarbonBadge implements AfterViewInit {
  constructor(private el:ElementRef) {}
  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js';
    script.defer = true;

    // Append the script right after the badge div
    this.el.nativeElement.appendChild(script);
  }
}
