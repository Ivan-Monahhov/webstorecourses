import { Injectable } from '@angular/core';
import {Item} from "../models/item.model";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = 'https://testwebshop-e7ce2-default-rtdb.europe-west1.firebasedatabase.app/';
  items:Item[] = [];

  constructor(private client: HttpClient) {
    this.getItemsFromDB().subscribe(itemsFromDB => { this.items = itemsFromDB})
  }

  saveItemsToDatabase(){
    this.client.put(this.url + 'items.json', this.items).subscribe();

  }

  getItemsFromDB(){
    return this.client.get<Item[]>(this.url);
  }
}
