import { Component, Input, inject } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { Dessert } from '../../core/models/dessert.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-dessert-item',
  imports: [CommonModule, AddToCartComponent],
  templateUrl: './dessert-item.component.html',
  styleUrl: './dessert-item.component.scss',
})
export class DessertItemComponent {
  @Input() dessert!: Dessert;
}
