import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dessert } from '../../core/models/dessert.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss',
})
export class AddToCartComponent {
  @Input() dessert!: Dessert;

  constructor(private cartService: CartService) {}

  get isAddedToCart(): boolean {
    return this.cartService.getQuantityForItem(this.dessert) > 0;
  }

  get quantity(): number {
    return this.cartService.getQuantityForItem(this.dessert);
  }

  addToCart(): void {
    this.cartService.addItemToCart(this.dessert);
  }

  increaseProductItem(): void {
    this.cartService.increaseQuantity(this.dessert);
  }

  decreaseProductItem(): void {
    this.cartService.decreaseQuantity(this.dessert);
  }
}
