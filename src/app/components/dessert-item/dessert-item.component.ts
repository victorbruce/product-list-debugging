import { Component, Input, HostListener } from '@angular/core';
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
  isMobile = false;
  isTablet = false;
  isDesktop = false;

  @HostListener('window:resize', [])
  onResize(): void {
    this.updateDeviceType();
  }

  private updateDeviceType(): void {
    this.isMobile = window.innerWidth <= 768;
    this.isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    this.isDesktop = window.innerWidth > 1024;
  }
}
