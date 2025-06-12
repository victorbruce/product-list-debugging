import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dessert } from '../core/models/dessert.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<Dessert[]> = new BehaviorSubject<
    Dessert[]
  >([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    this.getCartItems();
  }

  getCartItems() {
    return this.cartItems$;
  }

  addItemToCart(dessert: Dessert) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = [...currentItems, dessert];
    this.cartItemsSubject.next(updatedItems);
  }

  removeItemFromCart(dessert: Dessert) {
    const currentItems = this.cartItemsSubject.value.slice();

    const index = currentItems.findIndex((cartItem) => cartItem === dessert);
    if (index > -1) {
      currentItems.splice(index, 1);
      this.cartItemsSubject.next(currentItems);
    }
  }
}
