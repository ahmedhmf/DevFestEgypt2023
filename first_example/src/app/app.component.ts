import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {Product} from './models/product.model';
import {products} from './items.data';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {Cart} from "./models/cart.model";
import {NavbarComponent} from "./navbar/navbar.component";
import {CartService} from "./services/cart.service";
import {ProductCardsComponent} from "./product-cards/product-cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardsComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cartService = inject(CartService);
  items: Product[] = products;
  addItemToCart(item: Product){
    const itemIndex = this.cartService.cart.findIndex(x => x.item.id === item.id);
    itemIndex < 0 ? this.cartService.cart.push({item, amount: 1}) : this.cartService.cart[itemIndex].amount += 1;
    this.cartService.calculateTotal();
  }
}
