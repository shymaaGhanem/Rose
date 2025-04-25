import { Component, Input } from '@angular/core';
import { Product } from '../../../core/interfaces/products';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../../features/cart/services/cart/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() productList!:Product;

constructor(private cart:CartService){}

}
