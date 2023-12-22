import {Product} from "./product.model";

export interface Cart{
  item: Product;
  amount: number;
}
