import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { MinifyService } from './minify.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: 'img[appLazyMinify]',
  host: {
    '(load)': 'onImageLoad()'
  }
})
export class LazyMinifyDirective implements OnInit, OnDestroy {
  @Input() appLazyMinify: boolean = true;
  @Input() quality: number = 80;
  @Input() maxSize: number = 4096;

  private originalSrc: string = '';
  private subscription?: Subscription;

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private minifyService: MinifyService
  ) {}

  ngOnInit(): void {
    if (!this.appLazyMinify) return;
    
    this.originalSrc = this.el.nativeElement.src;
    
    // Start with a low-quality placeholder
    this.loadPlaceholder();
  }

  onImageLoad(): void {
    if (!this.appLazyMinify) return;
    
    // Once the original image loads, we can optimize it
    this.optimizeImage();
  }

  private loadPlaceholder(): void {
    const img = this.el.nativeElement;
    
    // Create a tiny placeholder or use a data URI
    img.style.filter = 'blur(5px)';
    img.style.transition = 'filter 0.3s ease-out';
  }

  private optimizeImage(): void {
    const img = this.el.nativeElement;
    
    // For client-side optimization, we'll use canvas
    this.subscription = this.minifyService.minifyImageObservable(
      this.originalSrc,
      {
        img: {
          quality: this.quality,
          maxSize: this.maxSize
        }
      }
    ).subscribe({
      next: (minifiedSrc) => {
        if (minifiedSrc && minifiedSrc !== this.originalSrc) {
          img.src = minifiedSrc;
          img.style.filter = 'none';
        }
      },
      error: (error) => {
        console.warn('Image optimization failed:', error);
        img.style.filter = 'none';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}