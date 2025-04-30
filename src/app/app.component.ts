import { Component } from '@angular/core';
import { NavbarComponent } from './core/layouts/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./core/layouts/footer/footer.component";
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,NgxSpinnerComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Rose';
}
