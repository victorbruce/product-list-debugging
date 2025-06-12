import { Component, Input, inject } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { Dessert } from '../../core/models/dessert.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dessert-item',
  imports: [AddToCartComponent],
  templateUrl: './dessert-item.component.html',
  styleUrl: './dessert-item.component.scss',
})
export class DessertItemComponent {
  @Input() dessert!: Dessert;
  private cartService: CartService = inject(CartService);

  onAddToCart(dessert: Dessert) {
    this.cartService.addItemToCart(dessert)
  }
}
