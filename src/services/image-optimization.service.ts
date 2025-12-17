import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface ImageOptimizationOptions {
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'auto';
  progressive?: boolean;
}

export interface OptimizedImageResult {
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  dataUrl: string;
  format: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageOptimizationService {
  
  constructor(private http: HttpClient) {}

  optimizeImage(file: File, options: ImageOptimizationOptions = {}): Observable<OptimizedImageResult> {
    return from(this.processImage(file, options)).pipe(
      catchError(error => {
        console.error('Image optimization failed:', error);
        // Return original file as fallback
        return this.fileToDataUrl(file).pipe(
          map(dataUrl => ({
            originalSize: file.size,
            optimizedSize: file.size,
            compressionRatio: 0,
            dataUrl,
            format: file.type
          }))
        );
      })
    );
  }

  optimizeImageFromUrl(url: string, options: ImageOptimizationOptions = {}): Observable<OptimizedImageResult> {
    return from(
      this.http.get(url, { responseType: 'blob' }).toPromise()
        .then(blob => {
          if (!blob) throw new Error('No blob received');
          const file = new File([blob], 'image', { type: blob.type });
          return this.processImage(file, options);
        })
    ).pipe(
      catchError(error => {
        console.error('Failed to fetch image for optimization:', error);
        throw error;
      })
    );
  }

  private async processImage(file: File, options: ImageOptimizationOptions): Promise<OptimizedImageResult> {
    const {
      quality = 0.8,
      maxWidth = 1920,
      maxHeight = 1080,
      format = 'auto',
      progressive = true
    } = options;

    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // Calculate new dimensions
        const { width, height } = this.calculateDimensions(
          img.width,
          img.height,
          maxWidth,
          maxHeight
        );

        canvas.width = width;
        canvas.height = height;

        // Draw and compress image
        ctx?.drawImage(img, 0, 0, width, height);

        // Determine output format
        const outputFormat = this.getOutputFormat(file.type, format);
        
        // Convert to data URL with compression
        const dataUrl = canvas.toDataURL(outputFormat, quality);
        
        // Calculate sizes
        const originalSize = file.size;
        const optimizedSize = this.dataUrlSize(dataUrl);
        const compressionRatio = ((originalSize - optimizedSize) / originalSize) * 100;

        resolve({
          originalSize,
          optimizedSize,
          compressionRatio,
          dataUrl,
          format: outputFormat
        });
      };

      img.onerror = () => reject(new Error('Failed to load image'));
      
      // Load the image
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  }

  private calculateDimensions(
    originalWidth: number,
    originalHeight: number,
    maxWidth: number,
    maxHeight: number
  ): { width: number; height: number } {
    let { width, height } = { width: originalWidth, height: originalHeight };

    // Scale down if necessary
    if (width > maxWidth || height > maxHeight) {
      const aspectRatio = width / height;
      
      if (width > height) {
        width = Math.min(width, maxWidth);
        height = width / aspectRatio;
      } else {
        height = Math.min(height, maxHeight);
        width = height * aspectRatio;
      }
    }

    return { width: Math.round(width), height: Math.round(height) };
  }

  private getOutputFormat(originalFormat: string, preferredFormat: string): string {
    if (preferredFormat !== 'auto') {
      return `image/${preferredFormat}`;
    }

    // Auto-select best format
    if (originalFormat === 'image/png' && this.hasTransparency(originalFormat)) {
      return 'image/png';
    }
    
    // Prefer WebP for better compression
    return 'image/webp';
  }

  private hasTransparency(format: string): boolean {
    // Simplified check - in a real implementation, you'd analyze the image data
    return format === 'image/png';
  }

  private dataUrlSize(dataUrl: string): number {
    const base64 = dataUrl.split(',')[1];
    return Math.round(base64.length * 0.75); // Base64 is ~33% larger than binary
  }

  private fileToDataUrl(file: File): Observable<string> {
    return from(new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    }));
  }

  // Batch optimize multiple images
  batchOptimizeImages(
    files: File[], 
    options: ImageOptimizationOptions = {}
  ): Observable<OptimizedImageResult[]> {
    const promises = files.map(file => 
      this.optimizeImage(file, options).toPromise()
        .then(result => {
          if (!result) throw new Error('Optimization failed');
          return result;
        })
    );
    return from(Promise.all(promises));
  }

  // Generate responsive image sizes
  generateResponsiveImages(
    file: File,
    sizes: number[] = [320, 768, 1024, 1920],
    options: ImageOptimizationOptions = {}
  ): Observable<{ size: number; result: OptimizedImageResult }[]> {
    const promises = sizes.map(size => 
      this.optimizeImage(file, { ...options, maxWidth: size }).toPromise()
        .then(result => {
          if (!result) throw new Error('Optimization failed');
          return { size, result };
        })
    );
    
    return from(Promise.all(promises));
  }
}