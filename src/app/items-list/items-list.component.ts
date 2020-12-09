import { Component, Input, OnInit } from '@angular/core';
import { FetchItemsService } from '../fetch-items.service';
import { IItems } from '../items';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit {
  public items = [];
  @Input() updateCart: (item: IItems, quantity: number) => void;

  constructor(private _fetchItemService: FetchItemsService) {}

  ngOnInit() {
    this._fetchItemService.getItems().subscribe((data) => (this.items = data));
  }
}
