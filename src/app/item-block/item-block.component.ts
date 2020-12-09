import { Component, Input, OnInit } from '@angular/core';
import { IItems } from '../items';

@Component({
  selector: 'app-item-block',
  templateUrl: './item-block.component.html',
  styleUrls: ['./item-block.component.css'],
})
export class ItemBlockComponent {
  constructor() {}
  @Input('item-data') public item;
  @Input() updateCart: (item: IItems, quantity: number) => void;

  onAddClickEvent() {
    this.updateCart(this.item, this.item.quantity + 1);
  }

  onRemoveClickEvent() {
    this.item.quantity === 0
      ? alert('No item in the cart!')
      : this.updateCart(this.item, this.item.quantity - 1);
  }
}
