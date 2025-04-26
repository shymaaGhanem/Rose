import { Component } from '@angular/core';
import { ProdutsComponent } from "../produts/produts.component";
import { AboutComponent } from "../../../about/pages/about/about.component";
import { HomeSliderComponent } from "../home-slider/home-slider.component";

@Component({
  selector: 'app-home',
  imports: [ProdutsComponent, AboutComponent, HomeSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
