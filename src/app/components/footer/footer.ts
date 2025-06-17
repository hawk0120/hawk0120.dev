import { Component } from '@angular/core';
import { CarbonBadge } from '../carbon-badge/carbon-badge';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [CarbonBadge],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
