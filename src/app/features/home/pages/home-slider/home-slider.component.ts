import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-slider',
  imports: [CommonModule, CarouselModule],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.scss'
})
export class HomeSliderComponent {
  items = [
    { title: 'Slide 1', image: 'src/assets/img/gallery/container.png' },
    { title: 'Slide 2', image: 'src/assets/img/gallery/container.png' },
    { title: 'Slide 3', image: 'src/assets/img/gallery/container.png' }
  ];
}
