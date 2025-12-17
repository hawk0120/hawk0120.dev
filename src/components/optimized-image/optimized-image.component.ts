import { Component, Input, OnInit } from '@angular/core';
import { ImageOptimizationService, OptimizedImageResult } from '../../services/image-optimization.service';

@Component({
  selector: 'app-optimized-image',
  template: `
    <div class="optimized-image-container">
      <img 
        [src]="optimizedImage?.dataUrl || originalSrc"
        [alt]="alt"
        [style.width.px]="width"
        [style.height.px]="height"
        (load)="onImageLoad()"
        class="optimized-image"
      />
      
      @if (showStats && optimizedImage) {
        <div class="image-stats">
          <span class="stat">
            Original: {{ formatBytes(optimizedImage.originalSize) }}
          </span>
          <span class="stat">
            Optimized: {{ formatBytes(optimizedImage.optimizedSize) }}
          </span>
          <span class="stat savings">
            Saved: {{ optimizedImage.compressionRatio.toFixed(1) }}%
          </span>
        </div>
      }
      
      @if (loading) {
        <div class="loading-overlay">
          <span>Optimizing...</span>
        </div>
      }
    </div>
  `,
  styles: [`
    .optimized-image-container {
      position: relative;
      display: inline-block;
    }
    
    .optimized-image {
      transition: opacity 0.3s ease;
      max-width: 100%;
      height: auto;
    }
    
    .image-stats {
      margin-top: 8px;
      font-size: 12px;
      color: #666;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    
    .stat {
      background: #f5f5f5;
      padding: 2px 6px;
      border-radius: 3px;
    }
    
    .savings {
      background: #e8f5e8;
      color: #2e7d2e;
      font-weight: bold;
    }
    
    .loading-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #666;
    }
  `]
})
export class OptimizedImageComponent implements OnInit {
  @Input() originalSrc: string = '';
  @Input() alt: string = '';
  @Input() width?: number;
  @Input() height?: number;
  @Input() quality: number = 80;
  @Input() maxWidth?: number;
  @Input() maxHeight?: number;
  @Input() showStats: boolean = false;
  @Input() autoOptimize: boolean = true;

  optimizedImage?: OptimizedImageResult;
  loading: boolean = false;

  constructor(private imageOptimizationService: ImageOptimizationService) {}

  ngOnInit(): void {
    if (this.autoOptimize && this.originalSrc) {
      this.optimizeImage();
    }
  }

  async optimizeImage(): Promise<void> {
    if (!this.originalSrc) return;

    this.loading = true;
    
    try {
      this.optimizedImage = await this.imageOptimizationService.optimizeImageFromUrl(
        this.originalSrc,
        {
          quality: this.quality,
          maxWidth: this.maxWidth,
          maxHeight: this.maxHeight
        }
      ).toPromise();
    } catch (error) {
      console.error('Image optimization failed:', error);
    } finally {
      this.loading = false;
    }
  }

  onImageLoad(): void {
    // Image loaded successfully
  }

  formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}