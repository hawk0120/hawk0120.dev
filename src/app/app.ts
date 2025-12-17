import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  protected title = 'bradyhawkins-dev';
  private snowInterval: any;

  ngOnInit() {
    this.createSnowflakes();
  }

  ngOnDestroy() {
    if (this.snowInterval) {
      clearInterval(this.snowInterval);
    }
  }

  private createSnowflakes() {
    const snowContainer = document.getElementById('snowContainer');
    if (!snowContainer) return;

    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄';
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowflake.style.opacity = Math.random().toString();
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

      snowContainer.appendChild(snowflake);

      setTimeout(() => {
        if (snowflake.parentNode) {
          snowflake.parentNode.removeChild(snowflake);
        }
      }, 5000);
    };

    for (let i = 0; i < 50; i++) {
      setTimeout(createSnowflake, i * 100);
    }

    // Continue creating snowflakes
    this.snowInterval = setInterval(createSnowflake, 300);
  }
}
