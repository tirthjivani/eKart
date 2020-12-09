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
    console.log('clicked');
    this.updateCart(this.item, 1);
  }

  onRemoveClickEvent() {
    this.updateCart(this.item, -1);
  }

  public itemCount = 1;
}
