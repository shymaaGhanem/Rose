import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HomeSliderComponent } from "./features/home/pages/home-slider/home-slider.component";
import { LoginComponent } from "./shared/components/auth-dialogs/login/login.component";
import { NavbarComponent } from './core/layouts/navbar/navbar.component';
import { ProdutsComponent } from "./features/home/pages/produts/produts.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./core/layouts/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Rose';
}
