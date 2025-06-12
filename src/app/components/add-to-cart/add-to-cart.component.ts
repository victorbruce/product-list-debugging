import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dessert } from '../../core/models/dessert.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss',
})
export class AddToCartComponent {
  isAddedToCart = false;
  quantity = 1;
  @Input() dessert!: Dessert;
  @Output() dessertSelected = new EventEmitter<Dessert>();

  addToCart() {
    this.isAddedToCart = true;
    this.dessertSelected.emit(this.dessert);
  }

  decreaseProductItem() {
    if (this.quantity <= 1) {
      this.isAddedToCart = false;
      this.quantity = 1;
    } else {
      this.quantity--;
    }
  }

  increaseProductItem() {
    ++this.quantity;
  }
}
