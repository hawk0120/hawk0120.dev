import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
