
import { Component, inject, OnInit } from '@angular/core';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CommonModule } from '@angular/common';

import { Dessert } from './core/models/dessert.model';
import { DessertService } from './services/dessert.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Product list';
  dessertService: DessertService = inject(DessertService);
  desserts: Dessert[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dessertService.getDesserts().subscribe((data) => {
      this.desserts = data;
    });
  }
}

