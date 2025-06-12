import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Dessert } from '../core/models/dessert.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<Dessert[]> = new BehaviorSubject<
    Dessert[]
  >([]);

  cartItems$ = this.cartItemsSubject.asObservable();
  
  readonly cartTotal$ = this.cartItems$.pipe(
    map((items) =>
      items.reduce((sum, item) => sum + item.price * (item.quantity ?? 0), 0)
    )
  );

  constructor() {
    this.getCartItems();
  }

  getCartItems() {
    return this.cartItems$;
  }

  getQuantityForItem(dessert: Dessert): number {
    const item = this.cartItemsSubject.value.find(
      (i) => i.name === dessert.name
    );
    return item?.quantity ?? 0;
  }

  getItemTotal(dessert: Dessert): number {
    const item = this.cartItemsSubject.value.find(
      (i) => i.name === dessert.name
    );
    return item ? item.price * (item.quantity ?? 0) : 0;
  }

  addItemToCart(dessert: Dessert) {
    const currentItems = [...this.cartItemsSubject.value];
    const index = currentItems.findIndex((item) => item.name === dessert.name);

    if (index > -1) {
      // Item already in cart — increase quantity
      const existingItem = currentItems[index];
      currentItems[index] = {
        ...existingItem,
        quantity: (existingItem.quantity || 1) + 1,
      };
    } else {
      // Item not in cart — add with quantity 1
      currentItems.push({ ...dessert, quantity: 1 });
    }

    this.cartItemsSubject.next(currentItems);
  }

  removeItemFromCart(dessert: Dessert) {
    const currentItems = this.cartItemsSubject.value.slice();

    const index = currentItems.findIndex((cartItem) => cartItem === dessert);
    if (index > -1) {
      currentItems.splice(index, 1);
      this.cartItemsSubject.next(currentItems);
    }
  }

  increaseQuantity(dessert: Dessert): void {
    const currentItems = [...this.cartItemsSubject.value];
    const index = currentItems.findIndex((item) => item.name === dessert.name);

    if (index > -1) {
      const existingItem = currentItems[index];
      currentItems[index] = {
        ...existingItem,
        quantity: (existingItem.quantity || 1) + 1,
      };
      this.cartItemsSubject.next(currentItems);
    }
  }

  decreaseQuantity(dessert: Dessert): void {
    const currentItems = [...this.cartItemsSubject.value];
    const index = currentItems.findIndex((item) => item.name === dessert.name);

    if (index > -1) {
      const existingItem = currentItems[index];
      const newQuantity = (existingItem.quantity || 1) - 1;

      if (newQuantity > 0) {
        currentItems[index] = { ...existingItem, quantity: newQuantity };
      } else {
        currentItems.splice(index, 1); // remove item if quantity is 0
      }

      this.cartItemsSubject.next(currentItems);
    }
  }
}
