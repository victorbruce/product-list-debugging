import { Component, Input, OnInit, inject } from '@angular/core';
import { Dessert } from '../../core/models/dessert.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartItems: Dessert[] = [];
  private cartService: CartService = inject(CartService);
  cartTotal$ = this.cartService.cartTotal$;

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe((data) => {
      this.cartItems = data;
    });
  }
  removeItemFromCart(item: Dessert) {
    this.cartService.removeItemFromCart(item);
  }

  getItemTotal(item: Dessert) {
    return this.cartService.getItemTotal(item);
  }
}
