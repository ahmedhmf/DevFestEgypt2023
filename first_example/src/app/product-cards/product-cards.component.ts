import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CommonModule} from "@angular/common";
import {products} from "../items.data";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {Product} from "../models/product.model";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ],
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.css'
})
export class ProductCardsComponent {
  @Input({required:true}) products: Product[] = [];
  @Output() addItemToCart = new EventEmitter<Product>();
  addClick(item: Product): void {
    this.addItemToCart.emit(item);
  }
}
