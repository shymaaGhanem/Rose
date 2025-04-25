import { Component, Input } from '@angular/core';
import { Category } from '../../models/category';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-category-card',
  imports: [DatePipe],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  @Input() productList!:Category;
}
