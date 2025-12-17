#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { minify } = require('minify');

class AssetMinifier {
  constructor(options = {}) {
    this.options = {
      sourceDir: 'src',
      outputDir: 'dist',
      excludePatterns: [
        '*.spec.ts',
        '*.d.ts',
        'node_modules/**',
        'dist/**'
      ],
      minifyOptions: {
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
      },
      ...options
    };
    
    this.stats = {
      filesProcessed: 0,
      originalSize: 0,
      minifiedSize: 0,
      errors: []
    };
  }

  async minifyAssets() {
    console.log('🚀 Starting asset minification...');
    
    try {
      await this.processDirectory(this.options.sourceDir);
      this.printStats();
    } catch (error) {
      console.error('❌ Minification failed:', error);
      process.exit(1);
    }
  }

  async processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (this.shouldExclude(fullPath)) {
        continue;
      }
      
      if (entry.isDirectory()) {
        await this.processDirectory(fullPath);
      } else {
        await this.processFile(fullPath);
      }
    }
  }

  shouldExclude(filePath) {
    return this.options.excludePatterns.some(pattern => {
      const regex = new RegExp(pattern.replace(/\*/g, '.*'));
      return regex.test(filePath);
    });
  }

  async processFile(filePath) {
    try {
      const ext = path.extname(filePath).toLowerCase();
      const stats = fs.statSync(filePath);
      const originalSize = stats.size;
      
      let minifiedContent;
      let shouldMinify = false;
      
      switch (ext) {
        case '.js':
          shouldMinify = true;
          minifiedContent = await minify(filePath, { 
            js: this.options.minifyOptions.js 
          });
          break;
          
        case '.ts':
          // Skip TypeScript files as they need to be compiled first
          return;
          
        case '.css':
          shouldMinify = true;
          minifiedContent = await minify(filePath, { 
            css: this.options.minifyOptions.css 
          });
          break;
          
        case '.scss':
          // Skip SCSS files as they need to be compiled first
          return;
          
        case '.html':
          shouldMinify = true;
          minifiedContent = await minify(filePath, { 
            html: this.options.minifyOptions.html 
          });
          break;
          
        case '.jpg':
        case '.jpeg':
        case '.png':
        case '.gif':
        case '.svg':
        case '.webp':
          shouldMinify = true;
          try {
            minifiedContent = await minify(filePath, { 
              img: this.options.minifyOptions.img 
            });
          } catch (error) {
            console.warn(`⚠️  Skipping ${filePath} (already optimized or unsupported): ${error.message}`);
            return;
          }
          break;
          
        default:
          // Skip unsupported file types
          return;
      }
      
      if (shouldMinify && minifiedContent) {
        // Calculate output path
        const relativePath = path.relative(this.options.sourceDir, filePath);
        const outputPath = path.join(this.options.outputDir, relativePath);
        
        // Ensure output directory exists
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        
        // Write minified content
        fs.writeFileSync(outputPath, minifiedContent);
        
        // Update stats
        const minifiedSize = Buffer.byteLength(minifiedContent, 'utf8');
        const savings = originalSize - minifiedSize;
        const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
        
        this.stats.filesProcessed++;
        this.stats.originalSize += originalSize;
        this.stats.minifiedSize += minifiedSize;
        
        console.log(`✅ ${filePath} -> ${outputPath} (${savingsPercent}% saved)`);
      }
      
    } catch (error) {
      this.stats.errors.push({ file: filePath, error: error.message });
      console.error(`❌ Failed to process ${filePath}:`, error.message);
    }
  }

  printStats() {
    const totalSavings = this.stats.originalSize - this.stats.minifiedSize;
    const totalSavingsPercent = ((totalSavings / this.stats.originalSize) * 100).toFixed(1);
    
    console.log('\n📊 Minification Statistics:');
    console.log(`Files processed: ${this.stats.filesProcessed}`);
    console.log(`Original size: ${this.formatBytes(this.stats.originalSize)}`);
    console.log(`Minified size: ${this.formatBytes(this.stats.minifiedSize)}`);
    console.log(`Total savings: ${this.formatBytes(totalSavings)} (${totalSavingsPercent}%)`);
    
    if (this.stats.errors.length > 0) {
      console.log(`\n⚠️  Errors: ${this.stats.errors.length}`);
      this.stats.errors.forEach(({ file, error }) => {
        console.log(`  ${file}: ${error}`);
      });
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const options = {};
  
  // Parse command line arguments
  for (let i = 0; i < args.length; i += 2) {
    const flag = args[i];
    const value = args[i + 1];
    
    switch (flag) {
      case '--source':
        options.sourceDir = value;
        break;
      case '--output':
        options.outputDir = value;
        break;
      case '--quality':
        options.minifyOptions = options.minifyOptions || {};
        options.minifyOptions.img = options.minifyOptions.img || {};
        options.minifyOptions.img.quality = parseInt(value);
        break;
    }
  }
  
  const minifier = new AssetMinifier(options);
  minifier.minifyAssets();
}

module.exports = AssetMinifier;