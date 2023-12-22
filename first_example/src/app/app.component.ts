import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { Product } from './product.model';
import { products } from './items.data';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {Cart} from "./cart.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, MatInputModule, MatCardModule, MatSelectModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: Product[] = products;
  cart: Cart[] = [];
  total: number = 0;

  addClick(item:Product):void{
    const itemIndex =this.cart.findIndex(x=>x.item.id === item.id);
    itemIndex < 0 ?this.cart.push({item,amount:1}) : this.cart[itemIndex].amount += 1;
    this.calculateTotal();
  }

  removeItem(itemId: number){
    const cartItemIndex = this.cart.findIndex(x=>x.item.id === itemId);
    const cartItem = this.cart[cartItemIndex];
    cartItem.amount ===1? this.cart.splice(cartItemIndex,1) : cartItem.amount -= 1;
    this.calculateTotal();
  }

  private calculateTotal(){
    this.total = 0;
    this.cart.map(x=> this.total += x.amount * x.item.price);
  }
}
