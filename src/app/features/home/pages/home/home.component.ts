import { Component } from '@angular/core';
import { AboutComponent } from "../../../about/pages/about/about.component";
import { ProdutsComponent } from '../produts/produts.component';

@Component({
  selector: 'app-home',
  imports: [ProdutsComponent,AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
