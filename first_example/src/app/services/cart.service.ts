import {Injectable} from "@angular/core";
import {Cart} from "../models/cart.model";

@Injectable({providedIn: 'root'})
export class CartService{
  cart: Cart[] = [];
  total: number = 0;

  public calculateTotal() {
    this.total = 0;
    this.cart.map(x => this.total += x.amount * x.item.price);
  }
}
