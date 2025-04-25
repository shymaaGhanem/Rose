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
    { title: 'Slide 1', image: 'https://picsum.photos/id/1011/900/400' },
    { title: 'Slide 2', image: 'https://picsum.photos/id/1012/900/400' },
    { title: 'Slide 3', image: 'https://picsum.photos/id/1013/900/400' }
  ];
}
