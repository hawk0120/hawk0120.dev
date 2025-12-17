import { Injectable } from '@angular/core';
import { minify, Options } from 'minify';
import { from, Observable } from 'rxjs';

export interface MinifyOptions {
  js?: {
    type?: 'putout' | 'terser' | 'esbuild' | 'swc';
    mangle?: boolean;
    removeConsole?: boolean;
    removeUnusedVariables?: boolean;
  };
  css?: {
    type?: 'clean-css' | 'lightningcss';
    compatibility?: '*' | 'ie9' | 'ie8' | 'ie7';
  };
  html?: {
    removeComments?: boolean;
    collapseWhitespace?: boolean;
    removeAttributeQuotes?: boolean;
    minifyJS?: boolean;
    minifyCSS?: boolean;
  };
  img?: {
    maxSize?: number;
    quality?: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class MinifyService {
  
  private defaultOptions: MinifyOptions = {
    js: {
      type: 'putout',
      mangle: true,
      removeConsole: false,
      removeUnusedVariables: true
    },
    css: {
      type: 'clean-css',
      compatibility: '*'
    },
    html: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      minifyJS: true,
      minifyCSS: true
    },
    img: {
      maxSize: 4096,
      quality: 80
    }
  };

  async minifyFile(filePath: string, options?: Partial<MinifyOptions>): Promise<string> {
    const mergedOptions = this.mergeOptions(options);
    try {
      return await minify(filePath, mergedOptions as Options);
    } catch (error) {
      console.error(`Error minifying file ${filePath}:`, error);
      throw error;
    }
  }

  minifyFileObservable(filePath: string, options?: Partial<MinifyOptions>): Observable<string> {
    return from(this.minifyFile(filePath, options));
  }

  async minifyCode(code: string, type: 'js' | 'css' | 'html', options?: Partial<MinifyOptions>): Promise<string> {
    const mergedOptions = this.mergeOptions(options);
    
    try {
      switch (type) {
        case 'js':
          return await minify(code, { js: mergedOptions.js } as Options);
        case 'css':
          return await minify(code, { css: mergedOptions.css } as Options);
        case 'html':
          return await minify(code, { html: mergedOptions.html } as Options);
        default:
          throw new Error(`Unsupported minification type: ${type}`);
      }
    } catch (error) {
      console.error(`Error minifying ${type} code:`, error);
      throw error;
    }
  }

  minifyCodeObservable(code: string, type: 'js' | 'css' | 'html', options?: Partial<MinifyOptions>): Observable<string> {
    return from(this.minifyCode(code, type, options));
  }

  async minifyImage(imagePath: string, options?: Partial<MinifyOptions>): Promise<string> {
    const mergedOptions = this.mergeOptions(options);
    
    try {
      return await minify(imagePath, { img: mergedOptions.img } as Options);
    } catch (error) {
      console.error(`Error minifying image ${imagePath}:`, error);
      throw error;
    }
  }

  minifyImageObservable(imagePath: string, options?: Partial<MinifyOptions>): Observable<string> {
    return from(this.minifyImage(imagePath, options));
  }

  async minifyImageBuffer(imageBuffer: ArrayBuffer, options?: Partial<MinifyOptions>): Promise<ArrayBuffer> {
    // For buffer processing, we'd need to save to temp file first
    // This is a simplified version - in production you might want to use sharp directly
    const mergedOptions = this.mergeOptions(options);
    
    try {
      // Convert buffer to base64 for processing
      const base64 = btoa(String.fromCharCode(...new Uint8Array(imageBuffer)));
      const dataUri = `data:image/jpeg;base64,${base64}`;
      
      const minifiedDataUri = await minify(dataUri, { img: mergedOptions.img } as Options);
      
      // Convert back to buffer
      const base64Data = minifiedDataUri.split(',')[1];
      const binaryString = atob(base64Data);
      const bytes = new Uint8Array(binaryString.length);
      
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      
      return bytes.buffer;
    } catch (error) {
      console.error('Error minifying image buffer:', error);
      throw error;
    }
  }

  async batchMinifyFiles(filePaths: string[], options?: Partial<MinifyOptions>): Promise<{ [key: string]: string }> {
    const results: { [key: string]: string } = {};
    
    for (const filePath of filePaths) {
      try {
        results[filePath] = await this.minifyFile(filePath, options);
      } catch (error) {
        console.error(`Failed to minify ${filePath}:`, error);
        results[filePath] = ''; // Empty string indicates failure
      }
    }
    
    return results;
  }

  batchMinifyFilesObservable(filePaths: string[], options?: Partial<MinifyOptions>): Observable<{ [key: string]: string }> {
    return from(this.batchMinifyFiles(filePaths, options));
  }

  private mergeOptions(options?: Partial<MinifyOptions>): MinifyOptions {
    return {
      js: { ...this.defaultOptions.js, ...options?.js },
      css: { ...this.defaultOptions.css, ...options?.css },
      html: { ...this.defaultOptions.html, ...options?.html },
      img: { ...this.defaultOptions.img, ...options?.img }
    };
  }
}