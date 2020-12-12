import { Component, Input, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-item-block',
  templateUrl: './item-block.component.html',
  styleUrls: ['./item-block.component.css'],
})
export class ItemBlockComponent {
  constructor(private _cartService: CartDataService) {}
  @Input('item-data') public item;

  onAddClickEvent() {
    this.item.quantity = this.item.quantity + 1;
    this._cartService.updateCart(this.item);
  }

  onRemoveClickEvent() {
    this.item.quantity === 0
      ? alert('No item in the cart!')
      : (this.item.quantity = this.item.quantity - 1),
      this._cartService.updateCart(this.item);
  }
}
