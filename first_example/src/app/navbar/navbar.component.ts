import {Component, inject} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CartService} from "../services/cart.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartService = inject(CartService);
  removeItem(itemId: number) {
    const cartItemIndex = this.cartService.cart.findIndex(x => x.item.id === itemId);
    const cartItem = this.cartService.cart[cartItemIndex];
    cartItem.amount === 1 ? this.cartService.cart.splice(cartItemIndex, 1) : cartItem.amount -= 1;
    this.cartService.calculateTotal();
  }
}
