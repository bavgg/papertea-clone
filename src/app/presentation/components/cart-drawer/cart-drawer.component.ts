import { Component, Renderer2 } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { StateService } from '../../../services/state.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CartItemComponent, NgClass],
  templateUrl: './cart-drawer.component.html',
  styleUrl: './cart-drawer.component.css',
})
export class CartDrawerComponent {
  constructor(public stateService: StateService, private renderer: Renderer2) {}

  onClose() {
    this.stateService.cartOpened.set(false);
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
}
