import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dessert } from './core/models/dessert.model';
import { DessertService } from './services/dessert.service';
import { DessertItemComponent } from './components/dessert-item/dessert-item.component';
import { CartComponent } from './components/cart/cart.component';
@Component({
  selector: 'app-root',
  imports: [CommonModule, DessertItemComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Product list';
  private dessertService: DessertService = inject(DessertService);
  desserts: Dessert[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dessertService.getDesserts().subscribe((data) => {
      this.desserts = data;
    });
  }
}
