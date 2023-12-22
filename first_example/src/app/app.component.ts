import {afterNextRender, afterRender, Component, inject} from '@angular/core';
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

  //* When any change happen this hook is ran
  ngOnChanges(){}
  //* After the component is initialized this hook is ran
  ngOnInit(){}
  //* After angular checks for changes this hook is ran it is mostly used for manuall change detection
  ngDoCheck(){}
  //* This is ran after angular finishes the rendering of child views of components.
  //* Can be used for interaction with DOM
  ngAfterViewInit(){}

  //* Ran when component is being destroyed. Used mostly for cleaning up
  ngOnDestroy() {}

  constructor(){
    //! a call back to do every time the component is rendered
    afterRender(()=>{
      // Do Something
    })
    //! a call back to do next time the component is rendered
    afterNextRender(()=>{
      // Do Something
    })
  }
}
