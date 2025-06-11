import { Component, Input } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { Dessert } from '../../core/models/dessert.model';
@Component({
  selector: 'app-dessert-item',
  imports: [AddToCartComponent],
  templateUrl: './dessert-item.component.html',
  styleUrl: './dessert-item.component.scss',
})
export class DessertItemComponent {
  @Input() dessert!: Dessert;
}
