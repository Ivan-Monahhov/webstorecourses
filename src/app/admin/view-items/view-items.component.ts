import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/item.model";

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  items: Item[] = []

  constructor(private itemService:ItemService) {
    this.items = itemService.items;
  }

  ngOnInit(): void {
  }

}
